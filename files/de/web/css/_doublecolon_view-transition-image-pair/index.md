---
title: "::view-transition-image-pair"
slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{CSSRef}}

Das **`::view-transition-image-pair`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Container für die "alte" und "neue" Ansichtszustände eines [View-Transitions](/de/docs/Web/API/View_Transition_API) — vor und nach der Transition.

Während einer View-Transition ist `::view-transition-image-pair` im zugehörigen Pseudoelement-Baum enthalten, wie in [Der Pseudoelement-Baum der View-Transition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind eines {{cssxref("::view-transition-group")}}. In Bezug auf die Kinder kann es ein {{cssxref("::view-transition-new")}} oder ein {{cssxref("::view-transition-old")}} oder beides haben.

`::view-transition-image-pair` hat die folgende Standardformatierung im UA-Stylesheet:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während einer View-Transition hat `::view-transition-image-pair` {{cssxref("isolation", "isolation: isolate")}} im View-Transition-Stylesheet eingestellt, sodass seine Kinder mit nicht normalen Mischmodi gemischt werden können, ohne andere visuelle Ausgaben zu beeinflussen.

## Syntax

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Verursacht, dass das Pseudoelement mit allen View-Transition-Gruppen übereinstimmt.
- `root`
  - : Verursacht, dass das Pseudoelement mit der Standard-`root`-View-Transition-Gruppe übereinstimmt, die vom Benutzeragenten erstellt wurde, um die View-Transition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die Eigenschaft {{cssxref("view-transition-name")}} seiner eigenen spezifischen View-Transition-Gruppe zugewiesen ist.
- {{cssxref("custom-ident")}}
  - : Verursacht, dass das Pseudoelement mit einer spezifischen View-Transition-Gruppe übereinstimmt, die erstellt wurde, indem das gegebene {{cssxref("custom-ident")}} über die Eigenschaft {{cssxref("view-transition-name")}} einem Element zugeordnet wurde.

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

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
