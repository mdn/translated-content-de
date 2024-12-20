---
title: "::view-transition-old"
slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{CSSRef}}

Das **`::view-transition-old`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "alten" Ansichtsstatus eines Ansichtübergangs – einen statischen Schnappschuss der alten Ansicht, bevor der Übergang stattfindet.

Während eines Ansichtübergangs wird `::view-transition-old` in den zugehörigen Pseudo-Element-Baum aufgenommen, wie in [Der Pseudo-Element-Baum des Ansichtübergangs](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt, vorausgesetzt, es gibt einen "alten" Ansichtsstatus, den es darstellt. Es ist immer nur ein Kind eines {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es handelt sich um ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

Das folgende Standard-Styling ist im User-Agent-Stylesheet enthalten:

```css
:root::view-transition-old(*),
:root::view-transition-new(*) {
  position: absolute;
  inset-block-start: 0;
  inline-size: 100%;
  block-size: auto;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}

/* Keyframes for blending when there are 2 images */
@keyframes -ua-mix-blend-mode-plus-lighter {
  from {
    mix-blend-mode: plus-lighter;
  }
  to {
    mix-blend-mode: plus-lighter;
  }
}

@keyframes -ua-view-transition-fade-out {
  to {
    opacity: 0;
  }
}
```

> [!NOTE]
> Zusätzliche Ansichtsübergangsstile werden auch eingerichtet, um `::view-transition-old` zu animieren. Diese werden während des Ansichtübergangs dynamisch generiert; siehe die Spezifikationsabschnitte [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-old(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Veranlasst das Pseudo-Element dazu, mit allen Ansichtübergangsgruppen übereinzustimmen.
- `root`
  - : Veranlasst das Pseudo-Element dazu, mit der Standard-`root`-Ansichtübergangs-Schnappschussgruppe übereinzustimmen, die vom User-Agent erstellt wurde, um den Ansichtübergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das keiner eigenen spezifischen Ansichtübergangs-Schnappschussgruppe über die Eigenschaft {{cssxref("view-transition-name")}} zugewiesen ist.
- {{cssxref("custom-ident")}}
  - : Veranlasst das Pseudo-Element dazu, mit einer spezifischen Ansichtübergangs-Schnappschussgruppe übereinzustimmen, die erstellt wurde, indem der gegebene {{cssxref("custom-ident")}} einem Element über die Eigenschaft {{cssxref("view-transition-name")}} zugewiesen wurde.

## Beispiele

```css
figcaption {
  view-transition-name: figure-caption;
}

@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
