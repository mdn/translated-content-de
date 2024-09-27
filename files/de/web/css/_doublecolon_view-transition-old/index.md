---
title: "::view-transition-old"
slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition-old`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "alten" Ansichtsstatus einer Ansichtstransition — eine statische Momentaufnahme der alten Ansicht vor der Transition.

Während einer Ansichtstransition wird `::view-transition-old` im zugehörigen Pseudo-Element-Baum einbezogen, wie unter [Der Pseudo-Element-Baum der Ansichtstransition](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erläutert ist, vorausgesetzt, es gibt einen "alten" Ansichtsstatus zu repräsentieren. Es ist immer nur ein Kind eines {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es handelt sich um ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

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

@keyframes -ua-view-transition-fade-out {
  to {
    opacity: 0;
  }
}
```

> [!NOTE]
> Zusätzliche Stile für Ansichtstransitionen sind auch eingerichtet, um `::view-transition-old` zu animieren. Diese werden während der Ansichtstransition dynamisch generiert; siehe die Spezifikationsbereiche [Übergangspseudo-Elemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudo-Element-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-old(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einer der folgenden Werte sein:

- `*`
  - : Verursacht, dass das Pseudo-Element mit allen Ansichtstransitionsgruppen übereinstimmt.
- `root`
  - : Verursacht, dass das Pseudo-Element mit der standardmäßigen `root`-Ansichtstransitions-Snapshot-Gruppe übereinstimmt, die vom User-Agent erstellt wurde, um die Ansichtstransition für die gesamte Seite aufzunehmen. Diese Gruppe umfasst jedes Element, das nicht über die Eigenschaft {{cssxref("view-transition-name")}} einer eigenen spezifischen Ansichtstransitions-Snapshot-Gruppe zugewiesen wurde.
- {{cssxref("custom-ident")}}
  - : Verursacht, dass das Pseudo-Element mit einer bestimmten Ansichtstransitions-Snapshot-Gruppe übereinstimmt, die erstellt wurde, indem dem Element der gegebene {{cssxref("custom-ident")}} über die Eigenschaft {{cssxref("view-transition-name")}} zugewiesen wurde.

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
