---
title: "::view-transition-old"
slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition-old`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "alten" Ansichtsstatus eines Ansichtsübergangs — einen statischen Schnappschuss der alten Ansicht vor dem Übergang.

Während eines Ansichtsübergangs ist `::view-transition-old` im zugehörigen Pseudo-Element-Baum enthalten, wie in [Der Pseudo-Element-Baum des Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt wird, sofern ein "alter" Ansichtsstatus zu repräsentieren ist. Es ist immer nur ein Kind eines {{cssxref("::view-transition-image-pair")}} und hat niemals Kinder.

Es ist ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Dimensionen, die der Größe des Inhalts entsprechen.

Die folgende Standardstilierung ist im UA-Stilblatt enthalten:

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

/* Keyframes zum Mischen bei 2 Bildern */
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
> Zusätzliche Stilvorlagen für Ansichtsübergänge werden ebenfalls eingerichtet, um `::view-transition-old` zu animieren. Diese werden während des Ansichtsübergangs dynamisch generiert; siehe die Spezifikation [Einrichtung von Übergangs-Pseudo-Elementen](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Aktualisierung der Pseudo-Element-Stile](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-old(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Verursacht, dass das Pseudo-Element alle Ansichtsübergangsgruppen matcht.
- `root`
  - : Verursacht, dass das Pseudo-Element die Standard-`root`-Ansichtsübergangs-Schnappschussgruppe matcht, die vom User Agent erstellt wurde, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die {{cssxref("view-transition-name")}}-Eigenschaft seiner eigenen spezifischen Ansichtsübergangs-Schnappschussgruppe zugeordnet ist.
- {{cssxref("custom-ident")}}
  - : Verursacht, dass das Pseudo-Element eine spezifische Ansichtsübergangs-Schnappschussgruppe matcht, die durch Zuweisung des angegebenen {{cssxref("custom-ident")}} zu einem Element über die {{cssxref("view-transition-name")}}-Eigenschaft erstellt wurde.

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
- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
