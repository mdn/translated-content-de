---
title: "::view-transition-new"
slug: Web/CSS/::view-transition-new
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition-new`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "neuen" Ansichtsstatus eines Ansichtsübergangs — eine Momentaufnahme des Zustands nach dem Übergang.

Während eines Ansichtsübergangs wird `::view-transition-new` im zugehörigen Baum der Pseudoelemente aufgenommen, wie unter [Der Pseudoelemente-Baum des Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erläutert. Es ist immer nur ein Kind eines {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es ist ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

Folgende Standardstilregeln sind im UA-Stylesheet enthalten:

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
> Zusätzliche Ansichtsübergang-Stile werden ebenfalls eingerichtet, um `::view-transition-new` zu animieren. Diese werden während des Ansichtsübergangs dynamisch generiert; siehe die Abschnitte [Einrichten von Übergangs-Pseudoelementen](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Aktualisieren von Pseudoelement-Stilen](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) der Spezifikation für weitere Details.

## Syntax

```css-nolint
::view-transition-new(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte haben:

- `*`
  - : Lässt das Pseudoelement mit allen Ansichtsübergangsgruppen übereinstimmen.
- `root`
  - : Lässt das Pseudoelement mit der Standard-`root`-Ansichtsübergangs-Snapshot-Gruppe übereinstimmen, die vom Benutzeragenten erstellt wurde, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die {{cssxref("view-transition-name")}}-Eigenschaft einer eigenen spezifischen Ansichtsübergangs-Snapshot-Gruppe zugewiesen ist.
- {{cssxref("custom-ident")}}
  - : Lässt das Pseudoelement mit einer bestimmten Ansichtsübergangs-Snapshot-Gruppe übereinstimmen, die erstellt wurde, indem das gegebene {{cssxref("custom-ident")}} einem Element über die {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen wurde.

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
