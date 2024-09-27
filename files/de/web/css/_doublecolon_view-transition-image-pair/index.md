---
title: "::view-transition-image-pair"
slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Der **`::view-transition-image-pair`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) stellt einen Container für die "alte" und "neue" Ansichtszustände eines [Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API) dar — vor und nach dem Übergang.

Während eines Ansichtsübergangs ist `::view-transition-image-pair` in dem zugehörigen Pseudoelement-Baum enthalten, wie in [Der Pseudoelement-Baum des Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer ein Kind von einem {{cssxref("::view-transition-group")}}. In Bezug auf Kinder kann es ein {{cssxref("::view-transition-new")}} oder ein {{cssxref("::view-transition-old")}}, oder beides, haben.

`::view-transition-image-pair` erhält die folgende Standardstilgebung im UA-Stylesheet:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während eines Ansichtsübergangs hat `::view-transition-image-pair` {{cssxref("isolation", "isolation: isolate")}}, damit seine Kinder mit nicht-normalen Mischmodi ohne Beeinträchtigung anderer visueller Ausgaben gemischt werden können.

## Syntax

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Bewirkt, dass das Pseudoelement mit allen Ansichtsübergangsgruppen übereinstimmt.
- `root`
  - : Bewirkt, dass das Pseudoelement mit der standardmäßigen `root`-Ansichtsübergangsgruppe übereinstimmt, die vom User-Agent erstellt wurde, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst alle Elemente, die nicht über die {{cssxref("view-transition-name")}} Eigenschaft einer eigenen spezifischen Ansichtsübergangsgruppe zugewiesen wurden.
- {{cssxref("custom-ident")}}
  - : Bewirkt, dass das Pseudoelement mit einer spezifischen Ansichtsübergangsgruppe übereinstimmt, die durch die Zuweisung des gegebenen {{cssxref("custom-ident")}} zu einem Element über die {{cssxref("view-transition-name")}} Eigenschaft erstellt wurde.

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
- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
