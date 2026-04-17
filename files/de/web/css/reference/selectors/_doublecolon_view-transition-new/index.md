---
title: "`::view-transition-new()` CSS pseudo-element"
short-title: ::view-transition-new()
slug: Web/CSS/Reference/Selectors/::view-transition-new
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::view-transition-new()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den "neuen" Ansichtsstatus eines Ansichtsübergangs – eine Live-Darstellung des Zustands nach dem Übergang.

Während eines Ansichtsübergangs wird `::view-transition-new()` in den zugehörigen Pseudoelementbaum eingefügt, wie in [Der Pseudoelementbaum des Ansichtsübergangs](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erläutert. Es ist immer nur ein Kind eines {{cssxref("::view-transition-image-pair()")}} und hat niemals eigene Kinder.

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
> Zusätzliche Ansichtsübergangsstile sind ebenfalls eingerichtet, um `::view-transition-new()` zu animieren. Diese werden dynamisch während des Ansichtsübergangs generiert; siehe die Abschnitte [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) der Spezifikation für weitere Details.

## Syntax

```css-nolint
::view-transition-new([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors); wählt alle Ansichtsübergangsgruppen auf einer Seite aus.
- `root`
  - : Lässt das Pseudoelement mit der Standard-`root`-Ansichtsübergangs-Snapshot-Gruppe übereinstimmen, die durch den User-Agent erstellt wurde, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die {{cssxref("view-transition-name")}}-Eigenschaft einer eigenen spezifischen Ansichtsübergangs-Snapshot-Gruppe zugewiesen wurde.
- `<pt-name-selector>`
  - : Die {{cssxref("custom-ident")}}, die als Wert der {{cssxref("view-transition-name")}}-Eigenschaft festgelegt ist.
- `<pt-class-selector>`
  - : Die {{cssxref("custom-ident")}}, die als Wert der {{cssxref("view-transition-class")}}-Eigenschaft festgelegt ist, vorangestellt mit einem Punkt (`.`).

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
