---
title: "::view-transition-image-pair"
slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition-image-pair`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) stellt einen Container für die "alten" und "neuen" Ansichten eines [Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API) dar – vor und nach dem Übergang.

Während eines Ansichtsübergangs wird `::view-transition-image-pair` in den zugehörigen Pseudoelement-Baum eingeschlossen, wie in [The view transition pseudo-element tree](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition-group")}}. In Bezug auf Kinder kann es ein {{cssxref("::view-transition-new")}} oder ein {{cssxref("::view-transition-old")}} oder beides haben.

`::view-transition-image-pair` erhält die folgende Standard-Stilgebung im UA-Stylesheet:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während eines Ansichtsübergangs ist für `::view-transition-image-pair` {{cssxref("isolation", "isolation: isolate")}} in der Stilgebung des Ansichtsübergangs festgelegt, sodass seine Kinder mit nicht-normalen Mischmodi gemischt werden können, ohne andere visuelle Ausgaben zu beeinflussen.

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
  - : Bewirkt, dass das Pseudoelement mit der Standardgruppe `root` übereinstimmt, die vom Benutzeragenten erstellt wurde, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die Eigenschaft {{cssxref("view-transition-name")}} einer eigenen spezifischen Ansichtsübergangsgruppe zugewiesen wurde.
- {{cssxref("custom-ident")}}
  - : Bewirkt, dass das Pseudoelement mit einer bestimmten Ansichtsübergangsgruppe übereinstimmt, die durch Zuordnung des gegebenen {{cssxref("custom-ident")}} zu einem Element über die Eigenschaft {{cssxref("view-transition-name")}} erstellt wurde.

## Beispiele

```css
::view-transition-image-pair(root) {
  isolation: auto;
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
