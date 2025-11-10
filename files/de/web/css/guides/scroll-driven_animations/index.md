---
title: CSS scroll-gesteuerte Animationen
short-title: Scroll-gesteuerte Animationen
slug: Web/CSS/Guides/Scroll-driven_animations
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das Modul für **CSS scroll-gesteuerte Animationen** bietet Funktionalität, die auf dem [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbaut. Es ermöglicht Ihnen, Eigenschaftswerte entlang einer scrollbasierten Zeitleiste zu animieren, anstatt der standardmäßigen, zeitbasierten Dokumentzeitleiste. Das bedeutet, dass Sie ein Element animieren können, indem Sie das Element, seinen Scroll-Container oder sein Wurzelelement scrollen, anstatt nur durch den Zeitverlauf.

## Scroll-gesteuerte Animationen in Aktion

Sie können den Scroller, der die Animation steuert, entweder benennen oder mit der {{cssxref("scroll")}}-Funktion definieren.

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

Scrollen Sie das Element in der Inline-Richtung, um seine Hintergrundfarbe zu ändern. Scrollen Sie es vertikal, um den generierten Inhalt zu bewegen, zu drehen und die Farben zu ändern.

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

- [Scroll-gesteuerte Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
  - : Scroll-gesteuerte Animationszeitleisten und die Erstellung von scroll-gesteuerten Animationen.

## Verwandte Konzepte

- Das Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}}
- Das Modul [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow)
  - {{Glossary("Scroll_container", "Scroll-Container")}}
  - {{Glossary("Scroll_container#scrollport", "Scrollport")}}
- [Web Animations](/de/docs/Web/API/Web_Animations_API) API
  - [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - [`Animation`](/de/docs/Web/API/Animation)
  - [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Elemente beim Scrollen mit scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) über developer.chrome.com (2023)
