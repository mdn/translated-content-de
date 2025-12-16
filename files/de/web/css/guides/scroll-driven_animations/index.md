---
title: CSS scrollbasierte Animationen
short-title: Scrollbasierte Animationen
slug: Web/CSS/Guides/Scroll-driven_animations
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS Modul für scrollbasierte Animationen** bietet Funktionalität, die auf dem [CSS Animationsmodul](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbaut. Es ermöglicht die Animation von Eigenschaftswerten entlang einer scrollbasierten Zeitachse anstelle der standardmäßigen, zeitbasierten Dokument-Zeitachse. Das bedeutet, dass Sie ein Element durch Scrollen des Elements, seines Scroll-Containers oder seines Root-Elements animieren können, anstatt nur durch das Vergehen der Zeit.

## Scrollbasierte Animationen in Aktion

Sie können den Scroller, der die Animation steuert, entweder durch Benennung der Animation oder mit der {{cssxref("scroll")}} Funktion definieren.

```html hidden live-sample___scroll_animation
<main>
  <div></div>
</main>
```

```css live-sample___scroll_animation
main {
  scroll-timeline: --main-timeline;
}

div {
  animation: background-animation linear;
  animation-timeline: scroll(nearest inline);
}

div::after {
  animation: shape-animation linear;
  animation-timeline: --main-timeline;
}
```

```css hidden live-sample___scroll_animation
@layer animations {
  @keyframes background-animation {
    0% {
      background-color: palegoldenrod;
    }
    100% {
      background-color: magenta;
    }
  }
  @keyframes shape-animation {
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

@layer page-setup {
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

@layer no-support {
  @supports not (scroll-timeline: --main-timeline) {
    body::before {
      content: "Your browser doesn't support scroll-driven animations.";
      background-color: wheat;
      display: block;
      text-align: center;
    }
  }
}
```

{{EmbedLiveSample("scroll_animation", "", "400px")}}

Scrollen Sie das Element in der Inline-Richtung, um die Hintergrundfarbe zu ändern. Scrollen Sie es vertikal, um den generierten Inhalt sich bewegen, drehen und die Farben ändern zu sehen.

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

- {{cssxref("axis")}}
- {{cssxref("timeline-range-name")}}

### Funktionen

- {{cssxref("animation-timeline/scroll", "scroll()")}}
- {{cssxref("animation-timeline/view", "view()")}}

### Schnittstellen

- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)

## Leitfäden

- [Scrollgetriebene Animations-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
  - : Scrollgetriebene Animations-Zeitachsen und das Erstellen von scrollgetriebenen Animationen.

## Verwandte Konzepte

- [CSS Animations](/de/docs/Web/CSS/Guides/Animations) Modul
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}}
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{Glossary("Scroll_container", "Scroll-Container")}}
  - {{Glossary("Scroll_container#scrollport", "Scrollport")}}
- [Web-Animationen](/de/docs/Web/API/Web_Animations_API) API
  - [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - [`Animation`](/de/docs/Web/API/Animation)
  - [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Animieren von Elementen beim Scrollen mit scrollbasierten Animationen](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) über developer.chrome.com (2023)
