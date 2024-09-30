---
title: "::view-transition-image-pair"
slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Das **`::view-transition-image-pair`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Container für die "alte" und "neue" Ansichtszustände eines [Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API) — vor und nach dem Übergang.

Während eines Ansichtsübergangs wird `::view-transition-image-pair`, wie im Abschnitt [Der Pseudo-Element-Baum des Ansichtsübergangs](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt, in den zugehörigen Pseudo-Element-Baum aufgenommen. Es ist immer nur ein Kind eines {{cssxref("::view-transition-group")}}. In Bezug auf Kinder kann es ein {{cssxref("::view-transition-new")}} oder ein {{cssxref("::view-transition-old")}}, oder beides, haben.

`::view-transition-image-pair` erhält im UA-Stylesheet die folgende Standardformatierung:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während eines Ansichtsübergangs hat `::view-transition-image-pair` {{cssxref("isolation", "isolation: isolate")}} in dem Stylesheet des Ansichtsübergangs, sodass seine Kinder mit nicht-normalen Mischmodi überlagert werden können, ohne andere visuelle Ausgaben zu beeinflussen.

## Syntax

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte haben:

- `*`
  - : Führt dazu, dass das Pseudo-Element mit allen Gruppen für Ansichtsübergänge übereinstimmt.
- `root`
  - : Führt dazu, dass das Pseudo-Element mit der Standard-`root`-Gruppe für Ansichtsübergänge übereinstimmt, die vom Benutzeragenten erstellt wurde, um den Ansichtsübergang für die gesamte Seite zu enthalten. Diese Gruppe enthält jedes Element, das nicht über die {{cssxref("view-transition-name")}} Eigenschaft einer eigenen spezifischen Gruppe für Ansichtsübergänge zugewiesen ist.
- {{cssxref("custom-ident")}}
  - : Führt dazu, dass das Pseudo-Element mit einer spezifischen Gruppe für Ansichtsübergänge übereinstimmt, die durch Zuweisen des gegebenen {{cssxref("custom-ident")}} zu einem Element über die {{cssxref("view-transition-name")}} Eigenschaft erstellt wurde.

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
