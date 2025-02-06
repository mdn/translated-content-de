---
title: ::view-transition-new
slug: Web/CSS/::view-transition-new
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Das **`::view-transition-new`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "neuen" Ansichtsstatus eines View-Transitions — eine Schnappschuss-Live-Darstellung des Zustands nach der Transition.

Während einer View-Transition wird `::view-transition-new` im zugehörigen Pseudoelement-Baum wie in [Der Pseudoelement-Baum der View-Transition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) beschrieben, eingeschlossen. Es ist immer nur ein Kind von {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es handelt sich um ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Maße, die der Größe des Inhalts entsprechen.

Das folgende Standardstyling ist im UA-Stylesheet enthalten:

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
> Zusätzliche View-Transition-Stile werden ebenfalls eingerichtet, um `::view-transition-new` zu animieren. Diese werden während der Ansichtstransition dynamisch generiert; siehe die Abschnitte [Setup-Transition-Pseudoelemente](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Update-Pseudoelement-Stile](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) in der Spezifikation für weitere Details.

## Syntax

```css-nolint
::view-transition-new(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Veranlasst, dass das Pseudoelement mit allen View-Transition-Gruppen übereinstimmt.
- `root`
  - : Veranlasst, dass das Pseudoelement mit der Standard-`root`-View-Transition-Snapshot-Gruppe übereinstimmt, die vom Benutzeragenten erstellt wurde, um die Ansichtstransition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, dem keine spezifische eigene View-Transition-Snapshot-Gruppe über die {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen wurde.
- {{cssxref("custom-ident")}}
  - : Veranlasst, dass das Pseudoelement mit einer spezifischen View-Transition-Snapshot-Gruppe übereinstimmt, die erstellt wurde, indem der gegebene {{cssxref("custom-ident")}} einem Element über die {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen wurde.

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
- [Fließende Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
