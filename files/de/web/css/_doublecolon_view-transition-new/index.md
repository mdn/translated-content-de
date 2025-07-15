---
title: ::view-transition-new()
slug: Web/CSS/::view-transition-new
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::view-transition-new()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "neuen" Ansichtsstatus eines Ansichtübergangs – eine Schnappschuss-Live-Darstellung des Zustands nach dem Übergang.

Während eines Ansichtübergangs ist `::view-transition-new()` im zugehörigen Pseudo-Element-Baum enthalten, wie in [Der Ansichtübergangs-Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition-image-pair()")}} und hat niemals eigene Kinder.

Es handelt sich um ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

Das folgende Standardstyling ist im User-Agent-Stylesheet enthalten:

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
> Zusätzliche Ansichtübergangsstile sind ebenfalls eingerichtet, um `::view-transition-new()` zu animieren. Diese werden während des Ansichtübergangs dynamisch generiert; siehe die Abschnitte der Spezifikation [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-new([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Universal_selectors); wählt alle Ansichtübergangsgruppen auf einer Seite aus.
- `root`
  - : Verursacht, dass das Pseudo-Element die Standard-`root`-Ansichtübergangsschnappschussgruppe, die vom User-Agent erstellt wurde, um den Ansichtübergang für die gesamte Seite zu enthalten, selektiert. Diese Gruppe schließt jegliches Element ein, das nicht über die {{cssxref("view-transition-name")}}-Eigenschaft einer eigenen spezifischen Ansichtübergangsschnappschussgruppe zugewiesen wurde.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}}-Eigenschaft festgelegt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}}-Eigenschaft festgelegt ist und von einem Punkt (`.`) vorangestellt wird.

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
- [Reibungslose Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
