---
title: "::view-transition-group"
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 865ff2dff8f25cae66149dd121203d2bd7b58fad
---

{{CSSRef}}

Das **`::view-transition-group`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine einzelne Ansichtstransitions-Snapshot-Gruppe.

Während einer Ansichtstransition wird `::view-transition-group` im zugehörigen Pseudoelement-Baum wie in [Der Ansichtstransitions-Pseudoelement-Baum](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) beschrieben aufgenommen. Es ist immer nur ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair")}} als Kind.

`::view-transition-group` erhält im UA-Stylesheet die folgende Standardformatierung:

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old")}} Pseudoelements wider, das den "alten" Ansichtsstatus darstellt, bzw. des {{cssxref("::view-transition-new")}} Pseudoelements, das den "neuen" Ansichtsstatus darstellt, wenn es keinen "alten" Ansichtsstatus gibt.

Wenn es sowohl einen "alten" als auch einen "neuen" Ansichtsstatus gibt, animieren die Stile im Ansichtstransitions-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudoelements von der Größe des Rahmenkastens des "alten" Ansichtsstatus zur Größe des Rahmenkastens des "neuen" Ansichtsstatus.

> [!NOTE]
> Ansichtstransitions-Stile werden während der Ansichtstransition dynamisch generiert; siehe die Spezifikationsabschnitte [Setup von Übergangs-Pseudoelementen](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Aktualisierung von Pseudoelement-Stilen](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für mehr Details.

Außerdem wird die Transformation des Elements vom Bildschirmraum-Transformation des "alten" Ansichtsstatus zur Bildschirmraum-Transformation des neuen Ansichtsstatus animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zum Zeitpunkt des Übergangsstarts bestimmt werden.

## Syntax

```css-nolint
::view-transition-group(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte haben:

- `*`
  - : Verursacht, dass das Pseudoelement mit allen Ansichtstransitions-Gruppen übereinstimmt.
- `root`
  - : Verursacht, dass das Pseudoelement mit der Standard-`root`-Ansichtstransitions-Gruppe übereinstimmt, die vom Benutzeragenten erstellt wird, um die Ansichtstransition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die {{cssxref("view-transition-name")}} Eigenschaft einer eigenen spezifischen Ansichtstransitions-Gruppe zugewiesen wurde.
- {{cssxref("custom-ident")}}
  - : Verursacht, dass das Pseudoelement mit einer spezifischen Ansichtstransitions-Gruppe übereinstimmt, die erstellt wird, indem das gegebene {{cssxref("custom-ident")}} einem Element über die {{cssxref("view-transition-name")}} Eigenschaft zugewiesen wird.

## Beispiele

```css
::view-transition-group(embed-container) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
  z-index: 1;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
