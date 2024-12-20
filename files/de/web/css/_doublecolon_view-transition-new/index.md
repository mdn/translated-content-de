---
title: "::view-transition-new"
slug: Web/CSS/::view-transition-new
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{CSSRef}}

Das **`::view-transition-new`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "neuen" Ansichtsstatus eines View-Transitions — eine Live-Darstellung des Zustands nach der Transition.

Während einer Ansichtstransition ist `::view-transition-new` in dem zugehörigen Pseudo-Element-Baum enthalten, wie in [Der Pseudo-Element-Baum der Ansichtstransition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind eines {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es ist ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhaltes entsprechen.

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

@keyframes -ua-view-transition-fade-in {
  from {
    opacity: 0;
  }
}
```

> [!NOTE]
> Zusätzliche Stile für Ansichtstransitionen sind ebenfalls eingerichtet, um `::view-transition-new` zu animieren. Diese werden während der Ansichtstransition dynamisch erzeugt; siehe die Spezifikationsabschnitte [Transition Pseudo-Elemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudo-Element-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-new(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einer der folgenden Werte sein:

- `*`
  - : Bewirkt, dass das Pseudo-Element alle Ansichtstransitionsgruppen entspricht.
- `root`
  - : Bewirkt, dass das Pseudo-Element der Standard-Ansichtstransitions-Snapshotgruppe `root` entspricht, die vom Benutzeragenten erstellt wurde, um die Ansichtstransition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die Eigenschaft {{cssxref("view-transition-name")}} einer eigenen spezifischen Ansichtstransitions-Snapshotgruppe zugewiesen ist.
- {{cssxref("custom-ident")}}
  - : Bewirkt, dass das Pseudo-Element einer spezifischen Ansichtstransitions-Snapshotgruppe entspricht, die durch Zuweisung des angegebenen {{cssxref("custom-ident")}} zu einem Element über die Eigenschaft {{cssxref("view-transition-name")}} erstellt wird.

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
- [Nahtlose Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
