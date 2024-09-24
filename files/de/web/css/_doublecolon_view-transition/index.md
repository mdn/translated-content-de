---
title: "::view-transition"
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition`** [CSS](/de/docs/Web/CSS) pseudo-Element repräsentiert die Wurzel des [View Transition](/de/docs/Web/API/View_Transitions_API) Overlays, welches alle View Transition Snapshot-Gruppen enthält und über dem gesamten anderen Seiteninhalt liegt.

Während einer View Transition wird `::view-transition` in den zugehörigen Baum der Pseudo-Elemente aufgenommen, wie in [Der View Transition Pseudo-Elementbaum](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erläutert. Es ist der oberste Knoten dieses Baumes und hat einen oder mehrere {{cssxref("::view-transition-group")}} als Kinder.

`::view-transition` hat im UA-Stylesheet die folgende Standard-Stildefinition:

```css
html::view-transition {
  position: fixed;
  inset: 0;
}
```

Alle {{cssxref("::view-transition-group")}} Pseudo-Elemente sind relativ zur View Transition-Wurzel positioniert.

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
- [Fließende und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
