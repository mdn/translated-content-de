---
title: "::view-transition-old"
slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Das **`::view-transition-old`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "alten" Ansichtsstatus einer Ansichtstransition — eine statische Momentaufnahme der alten Ansicht vor der Transition.

Während einer Ansichtstransition wird `::view-transition-old` in den zugehörigen Pseudoelementbaum einbezogen, wie in [Der Pseudoelementbaum der Ansichtstransition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erläutert, sofern ein "alter" Ansichtsstatus vorhanden ist, der dargestellt werden soll. Es ist ausschließlich ein Kind von {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es handelt sich um ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Dimensionen, die der Größe des Inhalts entsprechen.

Die folgende Standardformatierung ist im UA-Stylesheet enthalten:

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
> Zusätzliche Stilvorlagen für Ansichtstransitionen werden ebenfalls eingerichtet, um `::view-transition-old` zu animieren. Diese werden während der Ansichtstransition dynamisch generiert; weitere Details finden Sie in den Spezifikationsabschnitten [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles).

## Syntax

```css-nolint
::view-transition-old(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einer der folgenden Werte sein:

- `*`
  - : Verursacht, dass das Pseudoelement mit allen Ansichtstransitionsgruppen übereinstimmt.
- `root`
  - : Verursacht, dass das Pseudoelement mit der standardmäßigen `root`-Ansichtstransitionssnapshotgruppe übereinstimmt, die vom User-Agent erstellt wurde, um die Ansichtstransition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das keiner eigenen spezifischen Ansichtstransitionssnapshotgruppe über die Eigenschaft {{cssxref("view-transition-name")}} zugewiesen wurde.
- {{cssxref("custom-ident")}}
  - : Verursacht, dass das Pseudoelement mit einer spezifischen Ansichtstransitionssnapshotgruppe übereinstimmt, die durch Zuweisen des angegebenen {{cssxref("custom-ident")}} zu einem Element über die Eigenschaft {{cssxref("view-transition-name")}} erstellt wurde.

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
