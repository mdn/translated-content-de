---
title: "::view-transition"
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Das **`::view-transition`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die Wurzel des [View Transitions](/de/docs/Web/API/View_Transition_API)-Overlays, das alle View-Transition-Snapshot-Gruppen enthält und oberhalb aller anderen Seiteninhalte liegt.

Während einer View-Transition ist `::view-transition` in dem zugehörigen Pseudoelement-Baum enthalten, wie unter [Der View-Transition-Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist der oberste Knoten dieses Baums und hat ein oder mehrere {{cssxref("::view-transition-group")}}s als Kinder.

`::view-transition` erhält in dem UA-Stylesheet die folgende Standardgestaltung:

```css
html::view-transition {
  position: fixed;
  inset: 0;
}
```

Alle {{cssxref("::view-transition-group")}}-Pseudoelemente sind relativ zur Wurzel der View-Transition positioniert.

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
