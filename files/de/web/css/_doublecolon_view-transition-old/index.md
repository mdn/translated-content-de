---
title: "::view-transition-old"
slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition-old`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "alten" Ansichtsstatus eines Ansichtsübergangs – eine statische Momentaufnahme der alten Ansicht vor dem Übergang.

Während eines Ansichtsübergangs ist `::view-transition-old` im zugehörigen Pseudoelement-Baum enthalten, wie im Abschnitt [Der Pseudoelement-Baum des Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt, sofern es einen "alten" Ansichtsstatus zu repräsentieren gibt. Es ist immer nur ein Kind von {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es handelt sich um ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

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
> Zusätzliche Stilvorlagen für Ansichtsübergänge sind ebenfalls eingerichtet, um `::view-transition-old` zu animieren. Diese werden während des Ansichtsübergangs dynamisch generiert; weitere Einzelheiten finden Sie in den Spezifikationsabschnitten [Übergangs-Pseudoelemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudoelement-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles).

## Syntax

```css-nolint
::view-transition-old(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Verursacht, dass das Pseudoelement mit allen Gruppen von Ansichtsübergängen übereinstimmt.
- `root`
  - : Verursacht, dass das Pseudoelement mit der Standardansichtstransition-Root-Gruppe übereinstimmt, die vom Benutzeragenten erstellt wird, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die Eigenschaft {{cssxref("view-transition-name")}} einer eigenen spezifischen Ansichtsübergangs-Snapshotgruppe zugewiesen wurde.
- {{cssxref("custom-ident")}}
  - : Verursacht, dass das Pseudoelement mit einer spezifischen Snapshotgruppe für den Ansichtsübergang übereinstimmt, die erstellt wurde, indem das gegebene {{cssxref("custom-ident")}} über die Eigenschaft {{cssxref("view-transition-name")}} einem Element zugewiesen wurde.

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
