---
title: ::view-transition-new()
slug: Web/CSS/Reference/Selectors/::view-transition-new
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::view-transition-new()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den "neuen" Anzeigestatus einer View-Transition — eine Live-Darstellung des Zustands nach der Transition.

Während einer View-Transition wird `::view-transition-new()` im zugehörigen Pseudoelement-Baum eingefügt, wie in [Der View-Transition-Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition-image-pair()")}} und hat niemals eigene Kinder.

Es ist ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Dimensionen, die der Größe des Inhalts entsprechen.

Die folgende Standardstilierung ist im UA-Stylesheet enthalten:

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
> Zusätzliche View-Transition-Stile sind ebenfalls eingerichtet, um `::view-transition-new()` zu animieren. Diese werden während der View-Transition dynamisch generiert; siehe die Abschnitte der Spezifikation [Setup-Transition-Pseudoelemente](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Aktualisierung der Pseudoelement-Stile](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-new([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [Universalselektor (`*`)](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors); wählt alle View-Transition-Gruppen auf einer Seite aus.
- `root`
  - : Veranlasst das Pseudoelement, der Standard-`root`-View-Transition-Snapshot-Gruppe zu entsprechen, die vom User-Agent erstellt wurde, um die View-Transition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die Eigenschaft {{cssxref("view-transition-name")}} einer eigenen spezifischen View-Transition-Snapshot-Gruppe zugewiesen ist.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der Eigenschaft {{cssxref("view-transition-name")}} festgelegt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der Eigenschaft {{cssxref("view-transition-class")}} festgelegt ist und von einem Punkt (`.`) vorangestellt wird.

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
