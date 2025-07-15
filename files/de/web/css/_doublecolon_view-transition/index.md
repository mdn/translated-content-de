---
title: ::view-transition
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die Wurzel der [View Transitions](/de/docs/Web/API/View_Transition_API)-Überlagerung, die alle View Transition-Snapshot-Gruppen enthält und über allen anderen Seiteninhalten liegt.

Während einer View Transition ist `::view-transition` im zugehörigen Pseudoelement-Baum enthalten, wie in [Der View Transition Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt wird. Es ist der Knoten auf oberster Ebene dieses Baums und hat ein oder mehrere {{cssxref("::view-transition-group()")}}s als Kinder.

`::view-transition` wird im UA-Stylesheet die folgende Standardgestaltung gegeben:

```css
:root::view-transition {
  position: fixed;
  inset: 0;
}
```

Alle {{cssxref("::view-transition-group()")}} Pseudoelemente sind relativ zur View Transition-Wurzel positioniert.

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
