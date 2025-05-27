---
title: ::view-transition
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{CSSRef}}

Das **`::view-transition`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die Wurzel der [View Transitions](/de/docs/Web/API/View_Transition_API) Überlagerung, die alle View Transition Snapshot-Gruppen enthält und über dem gesamten anderen Seiteninhalt liegt.

Während einer View Transition ist `::view-transition` in dem zugehörigen Pseudo-Element-Baum enthalten, wie in [Der View Transition Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist der oberste Knoten dieses Baums und hat ein oder mehrere {{cssxref("::view-transition-group()")}}s als Kinder.

`::view-transition` hat im UA-Stylesheet das folgende Standard-Styling:

```css
:root::view-transition {
  position: fixed;
  inset: 0;
}
```

Alle {{cssxref("::view-transition-group()")}} Pseudo-Elemente sind relativ zur View Transition-Wurzel positioniert.

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
