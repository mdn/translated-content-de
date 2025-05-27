---
title: ::view-transition-image-pair()
slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{CSSRef}}

Das **`::view-transition-image-pair()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Container für die "alten" und "neuen" Ansichtsstatus eines [View-Transitions](/de/docs/Web/API/View_Transition_API) — vor und nach der Transition.

Während einer View-Transition wird `::view-transition-image-pair()` im zugehörigen Pseudo-Element-Baum eingeschlossen, wie in [Der View-Transition-Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition-group()")}}. In Bezug auf Kinder kann es ein {{cssxref("::view-transition-new()")}} oder ein {{cssxref("::view-transition-old()")}} oder beides haben.

`::view-transition-image-pair()` erhält das folgende Standard-Styling im UA-Stylesheet:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während einer View-Transition hat `::view-transition-image-pair()` {{cssxref("isolation", "isolation: isolate")}} in der View-Transition-Stylesheet gesetzt, damit seine Kinder mit nicht-normalen Blendmodi gemischt werden können, ohne andere visuelle Ausgaben zu beeinflussen.

## Syntax

```css-nolint
::view-transition-image-pair([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [Universalselektor (`*`)](/de/docs/Web/CSS/Universal_selectors); wählt alle View-Transition-Gruppen auf einer Seite aus.
- `root`
  - : Veranlasst das Pseudo-Element, der Standard-`root`-View-Transition-Snapshot-Gruppe zu entsprechen, die vom User-Agent erstellt wurde, um die View-Transition für die gesamte Seite zu enthalten. Diese Gruppe schließt jedes Element ein, das nicht über die {{cssxref("view-transition-name")}}-Eigenschaft seiner eigenen spezifischen View-Transition-Snapshot-Gruppe zugewiesen wurde.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}}-Eigenschaft festgelegt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}}-Eigenschaft festgelegt ist, gefolgt von einem Punkt (`.`).

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
