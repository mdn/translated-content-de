---
title: "::view-transition-new"
slug: Web/CSS/::view-transition-new
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

Das **`::view-transition-new`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "neuen" Ansichtsstatus eines Ansichtsübergangs – eine Echtzeit-Darstellung des Zustands nach dem Übergang.

Während eines Ansichtsübergangs wird `::view-transition-new` in dem zugehörigen Pseudo-Element-Baum wie unter [Der Pseudo-Element-Baum des Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) beschrieben einbezogen. Es ist immer nur ein Kind eines {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es ist ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

Das folgende Standard-Styling ist im UA-Stylesheet enthalten:

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

@keyframes -ua-view-transition-fade-in {
  from {
    opacity: 0;
  }
}
```

> [!NOTE]
> Zusätzliche Ansichtsübergangsstile werden auch eingerichtet, um `::view-transition-new` zu animieren. Diese werden während des Ansichtsübergangs dynamisch generiert; sehen Sie die Abschnitte im Spezifikationsdokument über das Einrichten von Übergangs-Pseudo-Elementen [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und das Aktualisieren der Pseudo-Element-Stile [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-new(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Veranlasst das Pseudo-Element, mit allen Ansichtsübergangsgruppen übereinzustimmen.
- `root`
  - : Veranlasst das Pseudo-Element, mit der Standard-`root`-Ansichtsübergangsschnappschussgruppe übereinzustimmen, die vom User-Agent erstellt wird, um den Ansichtsübergang für die gesamte Seite zu umfassen. Diese Gruppe enthält jedes Element, das keiner eigenen spezifischen Ansichtsübergangsschnappschussgruppe über die Eigenschaft {{cssxref("view-transition-name")}} zugewiesen ist.
- {{cssxref("custom-ident")}}
  - : Veranlasst das Pseudo-Element, mit einer spezifischen Ansichtsübergangsschnappschussgruppe übereinzustimmen, die durch Zuweisung der angegebenen {{cssxref("custom-ident")}} zu einem Element über die Eigenschaft {{cssxref("view-transition-name")}} erstellt wurde.

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

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
- [Smooth transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
