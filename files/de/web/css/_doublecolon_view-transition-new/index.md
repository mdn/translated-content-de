---
title: ::view-transition-new()
slug: Web/CSS/::view-transition-new
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{CSSRef}}

Das **`::view-transition-new()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "neuen" Ansichtsstatus eines Ansichtstransfers — eine Schnappschuss-Live-Darstellung des Zustands nach dem Übergang.

Während eines Ansichtstransfers wird `::view-transition-new()` im zugehörigen Pseudoelement-Baum enthalten, wie im Abschnitt [Der Ansichtstransfer-Pseudoelementbaum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erläutert. Es ist immer nur ein Kind eines {{cssxref("::view-transition-image-pair()")}} und hat niemals eigene Kinder.

Es ist ein Ersatz-Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Dimensionen, die der Größe des Inhalts entsprechen.

Die folgende Standard-Stilgebung ist im UA-Stylesheet enthalten:

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
> Zusätzliche Stilgebungen für Ansichtstransfers werden ebenfalls eingerichtet, um `::view-transition-new()` zu animieren. Diese werden während des Ansichtstransfers dynamisch generiert; siehe die Abschnitte der Spezifikation [Übergangspseudoelemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudoelement-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-new([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Universal_selectors); wählt alle Ansichtstransfergruppen auf einer Seite aus.
- `root`
  - : Veranlasst das Pseudoelement, zur Standard-`root`-Ansichtstransfer-Schnappschussgruppe zu passen, die vom Benutzeragenten erstellt wird, um den Ansichtstransfer für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das seiner eigenen spezifischen Ansichtstransfer-Schnappschussgruppe nicht zugewiesen ist, über die Eigenschaft {{cssxref("view-transition-name")}}.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der Eigenschaft {{cssxref("view-transition-name")}} festgelegt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der Eigenschaft {{cssxref("view-transition-class")}} festgelegt ist, vorangestellt mit einem Punkt (`.`).

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
