---
title: "::view-transition"
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{CSSRef}}

Das **`::view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert die Wurzel des [View Transition](/de/docs/Web/API/View_Transition_API)-Overlays, das alle View Transition Snapshot-Gruppen enthält und über dem gesamten anderen Seiteninhalt liegt.

Während einer View Transition ist `::view-transition` im zugehörigen Pseudoelement-Baum enthalten, wie in [The view transition pseudo-element tree](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt wird. Es ist der oberste Knoten dieses Baums und hat ein oder mehrere {{cssxref("::view-transition-group")}}s als Kinder.

`::view-transition` erhält die folgende Standardformatierung im UA-Stylesheet:

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

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Glatte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
