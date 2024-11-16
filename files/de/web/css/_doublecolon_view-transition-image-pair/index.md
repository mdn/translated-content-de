---
title: "::view-transition-image-pair"
slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

Das **`::view-transition-image-pair`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Container für die "alte" und "neue" Ansichtszustände eines [Ansichtswechsels](/de/docs/Web/API/View_Transitions_API) — vor und nach der Transition.

Während eines Ansichtswechsels wird `::view-transition-image-pair` in den dazugehörigen Pseudo-Elementbaum aufgenommen, wie im Abschnitt [Der Pseudo-Elementbaum des Ansichtswechsels](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von einem {{cssxref("::view-transition-group")}}. In Bezug auf die Kinder kann es ein {{cssxref("::view-transition-new")}} oder ein {{cssxref("::view-transition-old")}} oder beide haben.

`::view-transition-image-pair` erhält im UA-Stylesheet die folgende Standard-Stilgebung:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während eines Ansichtswechsels hat `::view-transition-image-pair` in dem Ansichtswechsel-Stylesheet {{cssxref("isolation", "isolation: isolate")}} gesetzt, damit seine Kinder mit nicht normalen Mischmodi kombiniert werden können, ohne andere visuelle Ausgaben zu beeinflussen.

## Syntax

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte haben:

- `*`
  - : Verursacht, dass das Pseudo-Element mit allen Ansichtswechsel-Gruppen übereinstimmt.
- `root`
  - : Verursacht, dass das Pseudo-Element mit der Standard-`root`-Ansichtstransitions-Gruppe übereinstimmt, die vom User-Agent erstellt wird, um den Gesamtdarstellungswechsel der Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht einer eigenen spezifischen Ansichtswechsel-Gruppe über die {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen ist.
- {{cssxref("custom-ident")}}
  - : Verursacht, dass das Pseudo-Element mit einer spezifischen Ansichtswechsel-Gruppe übereinstimmt, die durch Zuweisung des angegebenen {{cssxref("custom-ident")}} zu einem Element über die {{cssxref("view-transition-name")}}-Eigenschaft erstellt wird.

## Beispiele

```css
::view-transition-image-pair(root) {
  isolation: auto;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
- [Fließende Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
