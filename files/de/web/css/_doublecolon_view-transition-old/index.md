---
title: ::view-transition-old()
slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{CSSRef}}

Das **`::view-transition-old()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "alten" Ansichtsstatus eines Übergangs — eine statische Momentaufnahme der alten Ansicht vor dem Übergang.

Während eines Ansichtsübergangs wird `::view-transition-old()` in den zugehörigen Pseudoelement-Baum aufgenommen, wie unter [Der Pseudoelement-Baum des Ansichtsübergangs](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erläutert, vorausgesetzt es gibt einen "alten" Ansichtsstatus zu repräsentieren. Es ist immer nur ein Kind von {{cssxref("::view-transition-image-pair()")}} und hat nie eigene Kinder.

Es ist ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

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
> Zusätzlich werden während des Ansichtsübergangs auch Stile für `::view-transition-old()` eingerichtet, um Animationen zu unterstützen. Diese werden dynamisch während des Ansichtsübergangs generiert; lesen Sie die Spezifikationsabschnitte [Übergangspseudoelemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudoelement-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

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
  - : Führt dazu, dass das Pseudoelement die Standard-Ansichtsübergangs-Snapshot-Gruppe `root` des Benutzeragents als Übereinstimmung enthält, die den Ansichtsübergang für die gesamte Seite enthält. Diese Gruppe schließt jedes Element ein, das nicht über die {{cssxref("view-transition-name")}}-Eigenschaft einer eigenen spezifischen Ansichtsübergangs-Snapshot-Gruppe zugewiesen wurde.
- `<pt-name-selector>`
  - : Die {{cssxref("custom-ident")}}, die als Wert der {{cssxref("view-transition-name")}}-Eigenschaft gesetzt ist.
- `<pt-class-selector>`
  - : Die {{cssxref("custom-ident")}}, die als Wert der {{cssxref("view-transition-class")}}-Eigenschaft gesetzt ist, vorangestellt durch einen Punkt (`.`).

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
