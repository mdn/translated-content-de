---
title: "`::view-transition-old()` CSS pseudo-element"
short-title: ::view-transition-old()
slug: Web/CSS/Reference/Selectors/::view-transition-old
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::view-transition-old()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den "alten" Ansichtsstatus eines View-Transitions — einen statischen Schnappschuss der alten Ansicht vor der Transition.

Während einer View-Transition ist `::view-transition-old()` in dem zugehörigen Pseudoelement-Baum enthalten, wie in [Der View Transition Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt wird, vorausgesetzt, es gibt einen darzustellenden "alten" Ansichtsstatus. Es ist immer nur ein Kind von {{cssxref("::view-transition-image-pair()")}} und hat niemals eigene Kinder.

Es handelt sich um ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

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

@keyframes -ua-view-transition-fade-out {
  to {
    opacity: 0;
  }
}
```

> [!NOTE]
> Zusätzliche View-Transition-Stile werden ebenfalls eingerichtet, um `::view-transition-old()` zu animieren. Diese werden während der View-Transition dynamisch generiert; sehen Sie sich die Abschnitte [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) in der Spezifikation für weitere Details an.

## Syntax

```css-nolint
::view-transition-old([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der universelle Selektor (`*`) wählt alle View-Transition-Gruppen auf einer Seite aus.
- `root`
  - : Verursacht, dass das Pseudoelement der Standard-`root`-View-Transition-Snapshot-Gruppe entspricht, die vom User-Agent erstellt wird, um die View-Transition für die gesamte Seite zu enthalten. Diese Gruppe umfasst alle Elemente, die nicht über die {{cssxref("view-transition-name")}} Eigenschaft einer eigenen spezifischen View-Transition-Snapshot-Gruppe zugewiesen wurden.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der Eigenschaft {{cssxref("view-transition-name")}} gesetzt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der Eigenschaft {{cssxref("view-transition-class")}} vorangestellt mit einem Punkt (`.`) gesetzt ist.

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
