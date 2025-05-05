---
title: ::view-transition
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: fccb20f35511f00969eeefb3fee868e75a6d393a
---

{{CSSRef}}

Das **`::view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die Wurzel der [View-Übergänge](/de/docs/Web/API/View_Transition_API)-Überlagerung, die alle View-Übergang-Snapshot-Gruppen enthält und über dem gesamten anderen Seiteninhalt liegt.

Während eines View-Übergangs ist `::view-transition` in dem zugehörigen Pseudoelement-Baum enthalten, wie in [Der Pseudoelement-Baum der View-Übergänge](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist der oberste Knoten dieses Baums und hat ein oder mehrere {{cssxref("::view-transition-group")}}s als Kinder.

`::view-transition` erhält im UA-Stylesheet die folgende Standardstilgestaltung:

```css
:root::view-transition {
  position: fixed;
  inset: 0;
}
```

Alle {{cssxref("::view-transition-group")}}-Pseudoelemente sind relativ zur Wurzel des View-Übergangs positioniert.

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
- [Reibungslose Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
