---
title: "`::view-transition-image-pair()` CSS pseudo-element"
short-title: ::view-transition-image-pair()
slug: Web/CSS/Reference/Selectors/::view-transition-image-pair
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::view-transition-image-pair()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert einen Container für die "alte" und "neue" Ansichtszustände eines [View-Übergangs](/de/docs/Web/API/View_Transition_API) – vor und nach dem Übergang.

Während eines View-Übergangs ist `::view-transition-image-pair()` im zugehörigen Pseudoelement-Baum enthalten, wie in [Der View-Übergangs-Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erläutert. Es ist immer nur ein Kind von {{cssxref("::view-transition-group()")}}. Bezüglich der Kinder kann es ein {{cssxref("::view-transition-new()")}} oder ein {{cssxref("::view-transition-old()")}}, oder beides haben.

`::view-transition-image-pair()` erhält die folgende Standard-Stilierung im UA-Stylesheet:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während eines View-Übergangs hat `::view-transition-image-pair()` {{cssxref("isolation", "isolation: isolate")}} in der View-Übergangs-Stilvorlage gesetzt, damit seine Kinder mit nicht normalen Mischmodi gemischt werden können, ohne andere visuelle Ergebnisse zu beeinflussen.

## Syntax

```css-nolint
::view-transition-image-pair([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors); wählt alle View-Übergangsgruppen auf einer Seite aus.
- `root`
  - : Bewirkt, dass das Pseudoelement mit der Standard-`root`-View-Übergangs-Snapshot-Gruppe übereinstimmt, die vom User-Agent erstellt wurde, um den View-Übergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst alle Elemente, die nicht über die Eigenschaft {{cssxref("view-transition-name")}} einer eigenen spezifischen View-Übergangs-Snapshot-Gruppe zugewiesen sind.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der Eigenschaft {{cssxref("view-transition-name")}} festgelegt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der Eigenschaft {{cssxref("view-transition-class")}} festgelegt ist, vorangestellt von einem Punkt (`.`).

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
