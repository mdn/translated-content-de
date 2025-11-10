---
title: ::view-transition-image-pair()
slug: Web/CSS/Reference/Selectors/::view-transition-image-pair
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::view-transition-image-pair()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert einen Container für die "alte" und "neue" Ansichtszustände eines [Ansichtstransfers](/de/docs/Web/API/View_Transition_API) — vor und nach dem Transfer.

Während eines Ansichtstransfers wird `::view-transition-image-pair()` in den zugehörigen Pseudoelement-Baum eingefügt, wie in [Der Pseudoelement-Baum des Ansichtstransfers](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition-group()")}}. In Bezug auf Kinder kann es ein {{cssxref("::view-transition-new()")}} oder ein {{cssxref("::view-transition-old()")}} oder beides haben.

`::view-transition-image-pair()` erhält die folgende Standardstilgebung im UA-Stylesheet:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während eines Ansichtstransfers hat `::view-transition-image-pair()` {{cssxref("isolation", "isolation: isolate")}} im Ansichtstransfer-Stylesheet gesetzt, so dass seine Kinder mit nicht-normalen Mischmodi gemischt werden können, ohne andere visuelle Ausgaben zu beeinflussen.

## Syntax

```css-nolint
::view-transition-image-pair([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [Universalselektor (`*`)](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors); wählt alle Ansichtstransfergruppen auf einer Seite aus.
- `root`
  - : Verursacht, dass das Pseudoelement der Standard-`root`-Ansichtstransfersnapshot-Gruppe entspricht, die vom Benutzeragenten erstellt wird, um den Ansichtstransfer für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht seiner eigenen spezifischen Ansichtstransfersnapshot-Gruppe über die {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen ist.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}}-Eigenschaft festgelegt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}}-Eigenschaft festgelegt ist und dem ein Punkt (`.`) vorangestellt ist.

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
