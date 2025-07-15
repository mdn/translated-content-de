---
title: ::view-transition-old()
slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::view-transition-old()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "alten" Ansichtsstatus eines Ansichtsübergangs – eine statische Momentaufnahme der alten Ansicht vor dem Übergang.

Während eines Ansichtsübergangs wird `::view-transition-old()` in dem zugehörigen Pseudoelement-Baum wie in [Der Ansichtsübergangs-Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) beschrieben einbezogen, sofern es einen darzustellenden "alten" Ansichtsstatus gibt. Es ist immer nur ein Kind von {{cssxref("::view-transition-image-pair()")}} und hat niemals eigene Kinder.

Es ist ein ersetzt Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

Das folgende Standardstyling ist im UA Stylesheet enthalten:

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
> Zusätzliche Ansichtsübergangsstile sind ebenfalls eingerichtet, um `::view-transition-old()` zu animieren. Diese werden während des Ansichtsübergangs dynamisch generiert; siehe die Spezifikationsabschnitte [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-old([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der universelle Selektor (`*`) wählt alle Ansichtsübergangsgruppen auf einer Seite aus.
- `root`
  - : Verursacht, dass das Pseudoelement die Standard-`root`-Ansichtsübergangs-Snapshot-Gruppe zugeordnet wird, die vom Benutzeragenten erstellt wurde, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die {{cssxref("view-transition-name")}}-Eigenschaft einer eigenen spezifischen Ansichtsübergangs-Snapshot-Gruppe zugeordnet ist.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}}-Eigenschaft gesetzt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}}-Eigenschaft gesetzt ist, dem ein Punkt (`.`) vorangestellt ist.

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
