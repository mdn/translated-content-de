---
title: "::view-transition"
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) stellt die Wurzel des [View Transitions](/de/docs/Web/API/View_Transitions_API)-Overlays dar, welches alle View Transition Snapshot-Gruppen enthält und über dem gesamten anderen Seiteninhalt liegt.

Während eines View Transitions wird `::view-transition` in den zugehörigen Pseudoelement-Baum aufgenommen, wie im Abschnitt [Der Baum der View Transition Pseudoelemente](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erläutert. Es ist der Knoten auf höchster Ebene dieses Baumes und hat eines oder mehrere {{cssxref("::view-transition-group")}}s als Kinder.

`::view-transition` erhält das folgende Standard-Styling im UA-Stylesheet:

```css
html::view-transition {
  position: fixed;
  inset: 0;
}
```

Alle {{cssxref("::view-transition-group")}} Pseudoelemente sind relativ zur View Transition-Wurzel positioniert.

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
- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
