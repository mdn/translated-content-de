---
title: "`::view-transition-group()` CSS pseudo-element"
short-title: ::view-transition-group()
slug: Web/CSS/Reference/Selectors/::view-transition-group
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::view-transition-group()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert eine einzelne View-Transition-Snapshot-Gruppe.

Während einer View-Transition wird `::view-transition-group()` im zugehörigen Pseudoelement-Baum eingefügt, wie in [Der View-Transition-Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair()")}} als Kind.

`::view-transition-group()` erhält die folgende Standard-Stilvorlage im UA-Stylesheet:

```css
:root::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old()")}} Pseudoelements wider, das den "alten" View-Status darstellt, oder das {{cssxref("::view-transition-new()")}} Pseudoelement, das den "neuen" View-Status darstellt, falls kein "alter" View-Status existiert.

Wenn sowohl ein "alter" als auch ein "neuer" View-Status existieren, animieren Styles im View-Transition-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudoelements von der Größe des Rahmenfeldes des "alten" View-Status zur Größe des Rahmenfeldes des "neuen" View-Status.

> [!NOTE]
> View-Transition-Styles werden während der View-Transition dynamisch generiert; siehe die Spezifikationsabschnitte [Setup Transition Pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Update Pseudo-element Styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

Darüber hinaus wird die Transformation des Elements vom Bildschirm-Transformation des "alten" View-Status zur Bildschirm-Transformation des neuen View-Status animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zu Beginn der Transition bestimmt werden.

## Syntax

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [Universalselektor (`*`)](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors); wählt alle View-Transition-Gruppen auf einer Seite aus.
- `root`
  - : Der {{cssxref("view-transition-name")}}, der auf {{cssxref(":root")}} angewendet wird, sorgt dafür, dass das Pseudoelement der Standard-`root`-View-Transition-Gruppe entspricht. Dies ist die vom Benutzeragenten erstellte Snapshot-Gruppe, die die View-Transition für die gesamte Seite enthält. Diese Gruppe schließt alle Elemente ein, die ihrer eigenen spezifischen View-Transition-Snapshot-Gruppe nicht über die `view-transition-name`-Eigenschaft zugewiesen sind.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}}-Eigenschaft festgelegt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}}-Eigenschaft festgelegt ist, gefolgt von einem Punkt (`.`).

Die {{cssxref("specificity")}} des benannten View-Transition-Pseudoelements entspricht der [Spezifität des Typenselektors](/de/docs/Web/CSS/Guides/Cascade/Specificity#type_column), es sei denn, der verwendete Parameter ist der Universalselektor, in welchem Fall die Spezifität null ist.

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
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
