---
title: ::view-transition
slug: Web/CSS/Reference/Selectors/::view-transition
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert die Wurzel des [View-Transitions](/de/docs/Web/API/View_Transition_API)-Overlays, das alle View-Transition-Snapshot-Gruppen enthält und über allen anderen Seiteninhalten liegt.

Während einer View-Transition wird `::view-transition` in dem zugehörigen Pseudoelement-Baum wie im Abschnitt [Der View-Transition-Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) beschrieben, einbezogen. Es ist der oberste Knoten dieses Baums und hat ein oder mehrere {{cssxref("::view-transition-group()")}}s als Kinder.

`::view-transition` erhält die folgende Standardformatierung im UA-Stylesheet:

```css
:root::view-transition {
  position: fixed;
  inset: 0;
}
```

Alle {{cssxref("::view-transition-group()")}} Pseudoelemente sind relativ zur Wurzel der View-Transition positioniert.

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

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
