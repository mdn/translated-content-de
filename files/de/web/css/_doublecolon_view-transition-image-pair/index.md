---
title: ::view-transition-image-pair()
slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::view-transition-image-pair()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Container für die "alten" und "neuen" Ansichts-Zustände eines [Ansichtsübergangs](/de/docs/Web/API/View_Transition_API) — vor und nach dem Übergang.

Während eines Ansichtsübergangs wird `::view-transition-image-pair()` in den zugehörigen Pseudoelement-Baum aufgenommen, wie in [Der Pseudoelement-Baum des Ansichtsübergangs](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist nur ein Kind von {{cssxref("::view-transition-group()")}}. Was Kinder betrifft, so kann es ein {{cssxref("::view-transition-new()")}} oder ein {{cssxref("::view-transition-old()")}}, oder beide haben.

`::view-transition-image-pair()` erhält das folgende Standardstyling im UA-Stylesheet:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während eines Ansichtsübergangs hat `::view-transition-image-pair()` in der Ansichtsübergangs-Stylesheet {{cssxref("isolation", "isolation: isolate")}} gesetzt, sodass seine Kinder mit nicht normalen Mischmodi gemischt werden können, ohne andere visuelle Ausgaben zu beeinflussen.

## Syntax

```css-nolint
::view-transition-image-pair([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Universal_selectors); wählt alle Ansichtsübergangsgruppen auf einer Seite aus.
- `root`
  - : Verursacht, dass das Pseudoelement der Standard `root`-Ansichtsübertragungsschnappschussgruppe entspricht, die vom Benutzeragenten erstellt wurde, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die Eigenschaft {{cssxref("view-transition-name")}} einer eigenen spezifischen Ansichtsübertragungsschnappschussgruppe zugewiesen ist.
- `<pt-name-selector>`
  - : Das {{cssxref("custom-ident")}}, das als Wert der Eigenschaft {{cssxref("view-transition-name")}} festgelegt ist.
- `<pt-class-selector>`
  - : Das {{cssxref("custom-ident")}}, das als Wert der Eigenschaft {{cssxref("view-transition-class")}} festgelegt ist, eingeleitet durch einen Punkt (`.`).

## Beispiele

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-image-pair(.card) {
  isolation: isolate;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
