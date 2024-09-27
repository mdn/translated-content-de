---
title: "::view-transition"
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition`**- [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die Wurzel des Overlays für [View Transitions](/de/docs/Web/API/View_Transitions_API), das alle View Transition Snapshot-Gruppen enthält und über dem gesamten anderen Seiteninhalt liegt.

Während einer View Transition ist `::view-transition` im zugehörigen Pseudoelement-Baum enthalten, wie im Abschnitt [Der View Transition Pseudoelement-Baum](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt wird. Es ist der oberste Knoten dieses Baumes und hat ein oder mehrere {{cssxref("::view-transition-group")}}s als Kinder.

`::view-transition` erhält im UA-Stylesheet die folgende Standardformatierung:

```css
html::view-transition {
  position: fixed;
  inset: 0;
}
```

Alle {{cssxref("::view-transition-group")}}-Pseudoelemente sind relativ zur Wurzel der View Transition positioniert.

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
- [Geschmeidige und einfache Transitionen mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
