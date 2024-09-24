---
title: "::view-transition-new"
slug: Web/CSS/::view-transition-new
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition-new`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den "neuen" Ansichtsstatus eines Ansichtsübergangs – eine Live-Darstellung des Zustands nach dem Übergang.

Während eines Ansichtsübergangs wird `::view-transition-new` im zugehörigen Pseudoelement-Baum wie in [Der Ansichtsübergang-Pseudoelement-Baum](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) beschrieben aufgenommen. Es ist immer nur ein Kind eines {{cssxref("::view-transition-image-pair")}} und hat niemals eigene Kinder.

Es handelt sich um ein ersetztes Element und kann daher mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} manipuliert werden. Es hat natürliche Abmessungen, die der Größe des Inhalts entsprechen.

Die folgende Standardstilisierung ist im UA-Stylesheet enthalten:

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

/* Keyframes für das Überblenden, wenn es 2 Bilder gibt */
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
> Zusätzliche Ansichtsübergang-Stile werden auch eingerichtet, um `::view-transition-new` zu animieren. Diese werden während des Ansichtsübergangs dynamisch erzeugt; siehe die Spezifikationsabschnitte [Übergangs-Pseudoelemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudoelement-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für mehr Details.

## Syntax

```css-nolint
::view-transition-new(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Veranlasst das Pseudoelement, mit allen Ansichtsübergangsgruppen übereinzustimmen.
- `root`
  - : Veranlasst das Pseudoelement, mit der Standard-`root`-Ansichtsübergangs-Snapshot-Gruppe übereinzustimmen, die vom Benutzeragenten erstellt wird, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe schließt jedes Element ein, das nicht über die Eigenschaft {{cssxref("view-transition-name")}} seiner eigenen spezifischen Ansichtsübergangs-Snapshot-Gruppe zugewiesen ist.
- {{cssxref("custom-ident")}}
  - : Veranlasst das Pseudoelement, mit einer spezifischen Ansichtsübergangs-Snapshot-Gruppe übereinzustimmen, die durch die Zuweisung der angegebenen {{cssxref("custom-ident")}} an ein Element über die Eigenschaft {{cssxref("view-transition-name")}} erstellt wurde.

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
