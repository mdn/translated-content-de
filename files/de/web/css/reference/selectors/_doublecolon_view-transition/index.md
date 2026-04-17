---
title: "`::view-transition` CSS pseudo-element"
short-title: ::view-transition
slug: Web/CSS/Reference/Selectors/::view-transition
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert die Wurzel des [View Transition](/de/docs/Web/API/View_Transition_API) Overlays, das alle Snapshot-Gruppen der View-Transition enthält und über allen anderen Seiteninhalten liegt.

Während einer View-Transition ist `::view-transition` in den zugehörigen Pseudoelement-Baum integriert, wie in [Der Pseudoelement-Baum der View-Transition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt wird. Es ist der oberste Knoten dieses Baums und hat ein oder mehrere {{cssxref("::view-transition-group()")}}s als Kinder.

`::view-transition` erhält im UA-Stylesheet das folgende Standardstyling:

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
