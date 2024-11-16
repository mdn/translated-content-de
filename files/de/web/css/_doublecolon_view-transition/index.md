---
title: "::view-transition"
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

Das **`::view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die Wurzel des [View Transitions](/de/docs/Web/API/View_Transitions_API)-Overlays, das alle View Transition Snapshot-Gruppen enthält und über dem gesamten anderen Seiteninhalt liegt.

Während einer Ansichtsübergang wird `::view-transition` in den zugehörigen Pseudoelementbaum eingefügt, wie im Abschnitt [Der View Transition Pseudoelementbaum](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erläutert. Es ist der oberste Knoten dieses Baumes und hat ein oder mehrere {{cssxref("::view-transition-group")}}s als Kinder.

`::view-transition` erhält im UA-Stylesheet die folgende Standardstilierung:

```css
html::view-transition {
  position: fixed;
  inset: 0;
}
```

Alle {{cssxref("::view-transition-group")}} Pseudoelemente sind relativ zur Wurzel des Ansichtsübergangs positioniert.

## Syntax

```css
::view-transition {
  /* ... */
}
```

## Beispiele

```css
::view-transition {
  background-color: rgb(0 0 0 / 25%);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
- [Smooth transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
