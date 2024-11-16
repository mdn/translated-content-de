---
title: "::view-transition-old"
slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

Das **`::view-transition-old`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "alten" Ansichtsstatus eines Ansichtswechsels — ein statisches Abbild der alten Ansicht vor dem Übergang.

Während eines Ansichtswechsels wird `::view-transition-old` im zugehörigen Pseudo-Element-Baum einbezogen, wie in [Der Baum der Ansichtswechsel-Pseudo-Elemente](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt wird, sofern es einen darzustellenden "alten" Ansichtsstatus gibt. Es ist stets ein Kind von {{cssxref("::view-transition-image-pair")}} und hat niemals Kinder.

Es handelt sich um ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

Das folgende Standard-Styling ist im Benutzeragenten-Stylesheet enthalten:

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
> Zusätzliche Ansichtswechsel-Stile sind ebenfalls eingerichtet, um `::view-transition-old` zu animieren. Diese werden während des Ansichtswechsels dynamisch generiert; siehe die Abschnitte der Spezifikation [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-old(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einer der folgenden Werte sein:

- `*`
  - : Bewirkt, dass das Pseudo-Element mit allen Ansichtswechselgruppen übereinstimmt.
- `root`
  - : Bewirkt, dass das Pseudo-Element mit der Standardgruppe `root` übereinstimmt, die vom Benutzeragenten erstellt wird, um den Ansichtswechsel für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht durch die {{cssxref("view-transition-name")}}-Eigenschaft einer eigenen spezifischen Ansichtswechsel-Snapshot-Gruppe zugewiesen wurde.
- {{cssxref("custom-ident")}}
  - : Bewirkt, dass das Pseudo-Element mit einer spezifischen Ansichtswechsel-Snapshot-Gruppe übereinstimmt, die durch das Zuweisen des gegebenen {{cssxref("custom-ident")}} zu einem Element über die {{cssxref("view-transition-name")}}-Eigenschaft erstellt wurde.

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
- [Smooth transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
