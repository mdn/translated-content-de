---
title: ::view-transition-group()
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{CSSRef}}

Das **`::view-transition-group()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine einzelne View-Transition-Schnappschussgruppe.

Während einer View-Transition ist `::view-transition-group()` im zugehörigen Pseudo-Element-Baum enthalten, wie im Abschnitt [Der View-Transition-Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair()")}} als Kind.

`::view-transition-group()` erhält im UA-Stylesheet die folgende Standard-Stilgebung:

```css
:root::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old()")}} Pseudo-Elements, das den "alten" View-Zustand repräsentiert, oder des {{cssxref("::view-transition-new()")}} Pseudo-Elements, das den "neuen" View-Zustand repräsentiert, wenn es keinen "alten" View-Zustand gibt.

Wenn es sowohl einen "alten" als auch einen "neuen" View-Zustand gibt, animieren Stile im View-Transition-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudo-Elements von der Größe der Rahmenbox des "alten" View-Zustands zu der des "neuen" View-Zustands.

> [!NOTE]
> View-Transition-Stile werden während der View-Transition dynamisch generiert; siehe die Spezifikationsabschnitte [Setup Transition Pseudo-Elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Update Pseudo-Element Styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für mehr Details.

Zusätzlich wird die Transformation des Elements vom Bildschirmraum-Transform des "alten" View-Zustands zum neuen Bildschirmraum-Transform des neuen View-Zustands animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zu dem Zeitpunkt bestimmt werden, wenn die Transition beginnt.

## Syntax

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Universal_selectors); wählt alle View-Transition-Gruppen auf einer Seite aus.
- `root`
  - : Der {{cssxref("view-transition-name")}}, der auf {{cssxref(":root")}} angewendet wird, bewirkt, dass das Pseudo-Element der Standard-`root`-View-Transition-Gruppe entspricht. Dies ist die vom Benutzeragenten erstellte Schnappschussgruppe, die die View-Transition für die gesamte Seite enthält. Diese Gruppe umfasst jedes Element, das nicht über die `view-transition-name` Eigenschaft einer eigenen spezifischen View-Transition-Schnappschussgruppe zugewiesen ist.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}} Eigenschaft festgelegt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}} Eigenschaft festgelegt ist, vorangestellt mit einem Punkt (`.`).

Die {{cssxref("specificity")}} des benannten View-Transition-Pseudo-Elements entspricht der [Spezifität des Typselektors](/de/docs/Web/CSS/CSS_cascade/Specificity#type_column), außer der verwendete Parameter ist der universelle Selektor, in welchem Fall die Spezifität null ist.

## Beispiele

```css
::view-transition-group(embed-container) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
  z-index: 1;
}

::view-transition-group(.card) {
  animation-duration: 1s;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Nahtlose Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
