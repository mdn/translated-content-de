---
title: CSS Scroll-getriebene Animationen
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Das **CSS Scroll-getriebene Animationen** Modul bietet Funktionalitäten, die auf dem [CSS-Animations-Modul](/de/docs/Web/CSS/CSS_animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbauen. Es ermöglicht, Eigenschaftswerte entlang einer Scroll-basierten Zeitleiste zu animieren, anstatt der standardmäßigen, zeitbasierten Dokumentzeitleiste. Dies bedeutet, dass Sie ein Element animieren können, indem Sie das Element, seinen Scroll-Container oder sein Wurzelelement scrollen, anstatt nur durch den Zeitverlauf.

## Scroll-getriebene Animationen in Aktion

Sie können den Scroller, der die Animation steuert, entweder durch Benennen der Animation oder mit der {{cssxref("scroll")}}-Funktion definieren.

```html hidden live-sample___scroll_animation
<main>
  <div></div>
</main>
```

```css live-sample___scroll_animation
main {
  scroll-timeline: --mainTimeline;
}

div {
  animation: backgroundAnimation linear;
  animation-timeline: scroll(nearest inline);
}

div::after {
  animation: shapeAnimation linear;
  animation-timeline: --mainTimeline;
}
```

```css hidden live-sample___scroll_animation
@layer animations {
  @keyframes backgroundAnimation {
    0% {
      background-color: palegoldenrod;
    }
    100% {
      background-color: magenta;
    }
  }
  @keyframes shapeAnimation {
    0% {
      left: 0;
      top: 0;
      background-color: black;
    }
    50% {
      top: calc(100% - var(--elSize));
      left: calc(50% - var(--elSize));
      background-color: red;
    }
    100% {
      left: calc(100vw - var(--elSize));
      top: 0;
      rotate: 1800deg;
      background-color: white;
    }
  }
}

@layer pageSetup {
  :root {
    --elSize: 50px;
  }
  main {
    height: 90vh;
    overflow: scroll;
    border: 1px solid;
    margin: 5vh auto;
  }
  div {
    height: 400vh;
    width: 400vw;
  }
  div::after {
    content: "";
    border: 1px solid red;
    height: var(--elSize);
    width: var(--elSize);
    position: absolute;
    border-radius: 20px;
    corner-shape: superellipse(-4);
  }
}

@layer noSupport {
  @supports not (scroll-timeline: --mainTimeline) {
    body::before {
      content: "Your browser doesn't support scroll-driven animations.";
      background-color: wheat;
      display: block;
      width: 100%;
      text-align: center;
    }
    body > * {
      display: none;
    }
  }
}
```

{{EmbedLiveSample("scroll_animation", "", "400px")}}

Scrollen Sie das Element in die Inline-Richtung, um zu sehen, wie sich seine Hintergrundfarbe ändert. Scrollen Sie es vertikal, um die erzeugten Inhalte sich bewegen, drehen und die Farben ändern zu sehen.

## Referenz

### Eigenschaften

- {{cssxref("animation-range")}} Kurzform
  - {{cssxref("animation-range-end")}}
  - {{cssxref("animation-range-start")}}
- {{cssxref("scroll-timeline")}} Kurzform
  - {{cssxref("scroll-timeline-axis")}}
  - {{cssxref("scroll-timeline-name")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}} Kurzform
  - {{cssxref("view-timeline-axis")}}
  - {{cssxref("view-timeline-inset")}}
  - {{cssxref("view-timeline-name")}}

### Datentypen und Werte

<!--
- {{cssxref("axis")}}
- {{cssxref("scroller")}} -->

- [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Properties/animation-range#timeline-range-name)

### Funktionen

- [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
- [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)

### Schnittstellen

- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)

## Leitfäden

- [Scroll-getriebene Animationszeitleisten](/de/docs/Web/CSS/CSS_scroll-driven_animations/Timelines)
  - : Scroll-getriebene Animationszeitleisten und das Erstellen von scroll-getriebenen Animationen.

## Verwandte Konzepte

- [CSS-Animations-Modul](/de/docs/Web/CSS/CSS_animations)
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}}
- [CSS Overflow-Modul](/de/docs/Web/CSS/CSS_overflow)
  - {{Glossary("Scroll_container", "Scroll-Container")}}
  - {{Glossary("Scroll_container#scrollport", "Scrollport")}}
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
  - [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - [`Animation`](/de/docs/Web/API/Animation)
  - [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Elemente beim Scrollen mit scroll-getriebenen Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) über developer.chrome.com (2023)
