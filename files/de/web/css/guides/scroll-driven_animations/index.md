---
title: CSS scrollgesteuerte Animationen
short-title: Scrollgesteuerte Animationen
slug: Web/CSS/Guides/Scroll-driven_animations
l10n:
  sourceCommit: 11d748f9e217b6a9fd16291d7815a6f803f0136d
---

Das Modul für **CSS scrollgesteuerte Animationen** bietet Funktionalitäten, die auf dem [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbauen. Es ermöglicht, Eigenschaftswerte entlang einer scrollbasierten Zeitleiste anstelle der standardmäßigen zeitbasierten Dokumenten-Zeitleiste zu animieren. Dies bedeutet, dass Sie ein Element durch Scrollen des Elements, seines Scroll-Containers oder seines Wurzelelements animieren können, anstatt nur durch den Zeitverlauf.

## Scrollgesteuerte Animationen in Aktion

Sie können den Scroller, der die Animation steuert, entweder durch Benennung der Animation oder mit der {{cssxref("scroll")}}-Funktion definieren.

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

Scrollen Sie das Element in der Inline-Richtung, um die Hintergrundfarbe zu ändern. Scrollen Sie es vertikal, um den generierten Inhalt zu bewegen, zu drehen und die Farben zu ändern.

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

- [Scrollgesteuerte Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
  - : Scrollgesteuerte Animationszeitleisten und Erstellung von scrollgesteuerten Animationen.

## Verwandte Konzepte

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
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

- [Elemente beim Scrollen mit scrollgesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) via developer.chrome.com (2023)
