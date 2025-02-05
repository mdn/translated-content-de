---
title: "::view-transition-group"
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Das **`::view-transition-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine einzelne View-Transition-Snapshot-Gruppe.

Während einer View-Transition wird `::view-transition-group` in den zugehörigen Pseudo-Element-Baum eingeschlossen, wie in [Der View-Transition-Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) beschrieben. Es ist immer ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair")}} als Kind.

Das folgende Standardstyling wird im UA-Stylesheet für `::view-transition-group` angegeben:

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln die ausgewählten Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old")}}-Pseudo-Elements wider, das den "alten" View-Zustand darstellt, oder des {{cssxref("::view-transition-new")}}-Pseudo-Elements, das den "neuen" View-Zustand darstellt, falls kein "alter" View-Zustand vorhanden ist.

Falls es sowohl einen "alten" als auch einen "neuen" View-Zustand gibt, animieren die Stile im View-Transition-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudo-Elements von der Größe der Rahmenbox des "alten" View-Zustands zur der des "neuen" View-Zustands.

> [!NOTE]
> View-Transition-Stile werden dynamisch während der View-Transition generiert; Details dazu finden Sie in den Spezifikationsabschnitten [Setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles).

Zusätzlich wird die Transformation des Elements vom Screen-Space-Transform des "alten" View-Zustands zum Screen-Space-Transform des neuen View-Zustands animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zu Beginn der Transition bestimmt werden.

## Syntax

```css-nolint
::view-transition-group(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einer der folgenden Werte haben:

- `*`
  - : Bewirkt, dass das Pseudo-Element mit allen View-Transition-Gruppen übereinstimmt.
- `root`
  - : Bewirkt, dass das Pseudo-Element mit der standardmäßigen `root`-View-Transition-Gruppe übereinstimmt, die vom User-Agent erstellt wird, um die View-Transition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das keiner spezifischen View-Transition-Gruppe über die {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen wurde.
- {{cssxref("custom-ident")}}
  - : Bewirkt, dass das Pseudo-Element mit einer spezifischen View-Transition-Gruppe übereinstimmt, die erstellt wurde, indem der entsprechende {{cssxref("custom-ident")}} einem Element über die {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen wurde.

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

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
