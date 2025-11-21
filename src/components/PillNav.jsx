import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const PillNav = ({
   logo,
   logoAlt = "Logo",
   items,
   activeHref,
   className="",
   ease="power3.easeOut",
  baseColor="#a3260",           // dark navy background
  pillColor="#a3260",           // dark blue pill
  hoveredPillTextColor="#1e4fa2", // bright blue text on hover
  pillTextColor,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
          0
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 2, ease, overwrite: "auto" },
            0
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if ((document).fonts?.ready) {
      (document).fonts.ready.then(layout).catch(() => { });
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, {
          scale: 1,
          duration: 0.6,
          ease,
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, {
          width: "auto",
          duration: 0.6,
          ease,
        });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };




  const isExternalLink = (href) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  const isRouterLink = (href) => href && !isExternalLink(href);

  const navigate = useNavigate();

  const handleLocalNav = (e, href) => {
    // internal single-page scroll behavior
    if (e && e.preventDefault) e.preventDefault();
    const id = href.replace(/^\//, "") || "home";
    const el = document.getElementById(id);
    if (el) {
      const navEl = navRef.current || document.querySelector('nav');
      const navH = navEl ? navEl.offsetHeight : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      try {
        window.history.pushState({}, "", href);
      } catch (err) {}
    } else {
      // fallback to router navigation if section not present
      navigate(href);
    }
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "36px",
    ["--logo"]: "36px",
    ["--pill-pad-x"]: "18px",
    ["--pill-gap"]: "10px",
  };

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <nav
        ref={navRef}
        className={`w-fit md:w-auto flex items-center md:justify-center box-border py-1.5 md:px-0 md:fixed md:top-6 md:left-1/2 md:transform md:-translate-x-1/2 z-[1000]`}
        aria-label="Primary"
        style={cssVars}
      >
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex"
          style={{
            height: "var(--nav-h)",
            background: "var(--base, #000)",
            padding: "15px 20px",
            backdropFilter: "blur(8px)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.06)",
            color: "var(--pill-text, #ffffff)",
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-center justify-center m-0 p-0 h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle = {
                background: "var(--pill-bg, #a3260)",
                color: "var(--pill-text, #ffffff)",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: "var(--pill-bg, #0a3260)",
                      willChange: "transform",
                    }}
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: "transform" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{
                        color: "var(--hover-text,#a3260)",
                        willChange: "transform, opacity",
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[6px]  w-3 h-3 rounded-full z-[4]"
                      style={{ background: "var(--base,#0a3260)" }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              
              const basePillClasses =
                "relative overflow-hidden inline-flex items-center text-center justify-center h-full no-underline box-border rounded-md text-[14px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap px-0";

              return (
                <li key={item.href} role="none" className="flex h-10 w-fit">
                  {isRouterLink(item.href) ? (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={`${basePillClasses} px-4`}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                      onClick={(e) => handleLocalNav(e, item.href)}
                    >
                      {PillContent}
                    </a>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={`${basePillClasses} px-4`}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        
         
      </nav>

     
    </div>
  );
};

export default PillNav;
