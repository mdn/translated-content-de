---
title: "::view-transition-new"
slug: Web/CSS/::view-transition-new
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition-new`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "neuen" Ansichtsstatus eines Ansichtstransfers — eine Schnappschuss-Live-Darstellung des Zustands nach dem Übergang.

Während eines Ansichtstransfers ist `::view-transition-new` im zugehörigen Pseudo-Element-Baum enthalten, wie in [Der Pseudo-Element-Baum des Ansichtstransfers](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von einem {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es ist ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Dimensionen, die der Größe des Inhalts entsprechen.

Die folgende Standardstilgebung ist im UA-Stylesheet enthalten:

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
> Zusätzliche Stile für Ansichtstransfers werden ebenfalls eingerichtet, um `::view-transition-new` zu animieren. Diese werden während des Ansichtstransfers dynamisch generiert; siehe die Spezifikationsabschnitte [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

## Syntax

```css-nolint
::view-transition-new(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Veranlasst das Pseudo-Element, mit allen Ansichtstransfergruppen übereinzustimmen.
- `root`
  - : Veranlasst das Pseudo-Element, mit der standardmäßigen `root`-Ansichtstransferschnappschussgruppe übereinzustimmen, die vom Benutzeragenten erstellt wurde, um den Ansichtstransfer für die gesamte Seite aufzunehmen. Diese Gruppe umfasst jedes Element, das nicht über die Eigenschaft {{cssxref("view-transition-name")}} einer eigenen spezifischen Ansichtstransferschnappschussgruppe zugeordnet ist.
- {{cssxref("custom-ident")}}
  - : Veranlasst das Pseudo-Element, mit einer spezifischen Ansichtstransferschnappschussgruppe übereinzustimmen, die erstellt wurde, indem dem Element der gegebene {{cssxref("custom-ident")}} über die Eigenschaft {{cssxref("view-transition-name")}} zugewiesen wurde.

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
- [Reibungslose und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
