---
title: CSS-Scroll-gesteuerte Animationen
short-title: Scroll-gesteuerte Animationen
slug: Web/CSS/Guides/Scroll-driven_animations
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

Das Modul **CSS-Scroll-gesteuerte Animationen** erweitert das [Modul für CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und die [Web Animations API](/de/docs/Web/API/Web_Animations_API). Damit können Sie Eigenschaftswerte entlang einer scrollbasierten Timeline animieren, statt die standardmäßige zeitbasierte Dokument-Timeline zu verwenden. So können Sie ein Element animieren, indem Sie das Element selbst, seinen Scroll-Container oder sein Wurzelelement scrollen – und nicht nur durch das Verstreichen von Zeit.

## Scroll-gesteuerte Animationen in Aktion

Sie können den Scroller, der die Animation steuert, entweder über den Namen der Animation oder mit den Funktionen {{cssxref("animation-timeline/scroll", "scroll()")}} und {{cssxref("animation-timeline/view()", "view()")}} festlegen.

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

Scrollen Sie das Element in Inline-Richtung, um zu sehen, wie sich seine Hintergrundfarbe ändert. Scrollen Sie vertikal, um zu sehen, wie sich der generierte Inhalt bewegt, dreht und seine Farben ändert.

## Referenz

### Eigenschaften

- {{cssxref("animation-range")}}-Kurzschreibweise
  - {{cssxref("animation-range-end")}}
  - {{cssxref("animation-range-start")}}
- {{cssxref("scroll-timeline")}}-Kurzschreibweise
  - {{cssxref("scroll-timeline-axis")}}
  - {{cssxref("scroll-timeline-name")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}-Kurzschreibweise
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

- [Timelines für scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
  - : Timelines für scroll-gesteuerte Animationen und das Erstellen scroll-gesteuerter Animationen.
- [Namen von Timeline-Bereichen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
  - : Der Datentyp {{cssxref("timeline-range-name")}}: die verschiedenen Namen von Timeline-Bereichen verstehen.
- [CSS-Animationen verwenden, die durch Scrollen ausgelöst werden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
  - : Animationen erstellen, die durch Scrollen ausgelöst werden.
- [Fortschritts-Timelines für Ansichten mit Insets versehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets)
  - : Die Bereiche anpassen, in denen scroll-gesteuerte Animationen an ihre Timeline gebunden sind.

## Verwandte Konzepte

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)-Modul
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}}-At-Regel
  - [`<keyframe-selector>`](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)-Modul
  - {{cssxref("animation-trigger")}}
  - {{cssxref("timeline-trigger")}}-Kurzschreibweise
  - {{cssxref("timeline-trigger-activation-range")}}-Kurzschreibweise
    - {{cssxref("timeline-trigger-activation-range-end")}}
    - {{cssxref("timeline-trigger-activation-range-start")}}
  - {{cssxref("timeline-trigger-active-range")}}-Kurzschreibweise
    - {{cssxref("timeline-trigger-active-range-end")}}
    - {{cssxref("timeline-trigger-active-range-start")}}
  - {{cssxref("timeline-trigger-name")}}
  - {{cssxref("timeline-trigger-source")}}
  - {{cssxref("trigger-scope")}}
- [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
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

- [Elemente beim Scrollen mit scroll-gesteuerten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) auf developer.chrome.com (2023)
