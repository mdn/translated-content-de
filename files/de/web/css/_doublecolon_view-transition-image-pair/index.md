---
title: "::view-transition-image-pair"
slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Das **`::view-transition-image-pair`** [CSS](/de/docs/Web/CSS)-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Container für die "alte" und "neue" Ansichtszustände einer [View-Transition](/de/docs/Web/API/View_Transition_API) — vor und nach der Transition.

Während einer View-Transition wird `::view-transition-image-pair` im zugehörigen Pseudo-Element-Baum eingebunden, wie es in [Der Pseudo-Element-Baum der View-Transition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt wird. Es ist immer nur ein Kind von {{cssxref("::view-transition-group")}}. Bezüglich der Kinder kann es ein {{cssxref("::view-transition-new")}} oder ein {{cssxref("::view-transition-old")}} oder beides beinhalten.

`::view-transition-image-pair` erhält im UA-Stylesheet die folgende Standard-Stilregel:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Während einer View-Transition hat `::view-transition-image-pair` {{cssxref("isolation", "isolation: isolate")}} in der View-Transition-Stylesheet-Regel gesetzt, damit die Kinder mit Nicht-Normalen Blend-Modi kombiniert werden können, ohne andere visuelle Ausgaben zu beeinflussen.

## Syntax

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte haben:

- `*`
  - : Lässt das Pseudo-Element mit allen View-Transition-Gruppen übereinstimmen.
- `root`
  - : Lässt das Pseudo-Element mit der Standard-`root`-View-Transition-Gruppe übereinstimmen, die von der Benutzer-Agent erstellt wurde, um die View-Transition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das keiner eigenen spezifischen View-Transition-Gruppe mittels der {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen wurde.
- {{cssxref("custom-ident")}}
  - : Lässt das Pseudo-Element mit einer spezifischen View-Transition-Gruppe übereinstimmen, die durch Zuweisung des angegebenen {{cssxref("custom-ident")}} an ein Element mittels der {{cssxref("view-transition-name")}}-Eigenschaft erstellt wurde.

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
