---
title: Scrollgesteuerte CSS-Animationen
short-title: Scrollgesteuerte Animationen
slug: Web/CSS/Guides/Scroll-driven_animations
l10n:
  sourceCommit: f538091795d2ae7ddde4c03d939bd6efb451ef39
---

Das Modul **CSS scroll-driven animations** bietet Funktionen, die auf dem [Modul CSS animations](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbauen. Damit können Sie Eigenschaftswerte entlang einer scrollbasierten Zeitleiste animieren statt entlang der standardmäßigen zeitbasierten Dokumentzeitleiste. Ein Element lässt sich also durch Scrollen des Elements, seines Scroll-Containers oder seines Wurzelelements animieren – nicht nur durch das Verstreichen von Zeit.

## Scrollgesteuerte Animationen in Aktion

Sie können das Scroll-Element, das die Animation steuert, entweder benennen oder mit den Funktionen {{cssxref("animation-timeline/scroll", "scroll()")}} oder {{cssxref("animation-timeline/view()", "view()")}} festlegen.

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
      padding: 1rem 0;
    }
  }
}
```

{{EmbedLiveSample("scroll_animation", "", "400px")}}

Scrollen Sie innerhalb des Elements in Inline-Richtung, um zu sehen, wie sich seine Hintergrundfarbe ändert. Scrollen Sie vertikal, um zu sehen, wie sich der generierte Inhalt bewegt, dreht und seine Farben ändert.

## Referenz

### Eigenschaften

- Kurzschreibweise {{cssxref("animation-range")}}
  - {{cssxref("animation-range-end")}}
  - {{cssxref("animation-range-start")}}
- Kurzschreibweise {{cssxref("scroll-timeline")}}
  - {{cssxref("scroll-timeline-axis")}}
  - {{cssxref("scroll-timeline-name")}}
- {{cssxref("timeline-scope")}}
- Kurzschreibweise {{cssxref("view-timeline")}}
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

- [Zeitleisten für scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
  - : Zeitleisten für scrollgesteuerte Animationen und die Erstellung scrollgesteuerter Animationen.
- [Namen von Zeitleistenbereichen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
  - : Der Datentyp {{cssxref("timeline-range-name")}}: die verschiedenen Namen von Zeitleistenbereichen verstehen.
- [Einrückungen für View-Progress-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets)
  - : Die Animationsbereiche scrollgesteuerter Animationen durch Einrückungen anpassen.

## Verwandte Konzepte

- Modul [CSS animations](/de/docs/Web/CSS/Guides/Animations)
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}}-At-Regel
  - [`<keyframe-selector>`](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- Modul [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)
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

- [Elemente beim Scrollen mit scrollgesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) auf developer.chrome.com (2023)
