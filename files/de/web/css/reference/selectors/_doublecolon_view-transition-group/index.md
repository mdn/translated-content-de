---
title: "`::view-transition-group()` CSS pseudo-element"
short-title: ::view-transition-group()
slug: Web/CSS/Reference/Selectors/::view-transition-group
l10n:
  sourceCommit: ddf85bfec1b6e43cdacb404de0c38a801c561640
---

Das **`::view-transition-group()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert eine einzelne Ansichtstransitions-Snapshot-Gruppe.

Während einer Ansichtstransition ist `::view-transition-group()` im zugehörigen Pseudoelement-Baum enthalten, wie im Abschnitt [Der Ansichtstransition-Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein untergeordnetes Element von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair()")}} als untergeordnetes Element.

`::view-transition-group()` erhält die folgende Standardstilierung im UA-Stylesheet:

```css
:root::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln die ausgewählten Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old()")}} Pseudoelements wider, das den "alten" Ansichtsstatus repräsentiert, oder des {{cssxref("::view-transition-new()")}} Pseudoelements, das den "neuen" Ansichtsstatus repräsentiert, falls kein "alter" Ansichtsstatus vorhanden ist.

Wenn sowohl ein "alter" als auch ein "neuer" Ansichtsstatus vorhanden ist, animieren Stile im Ansichtstransitions-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudoelements von der Größe des Border-Box des "alten" Ansichtsstatus zu der des "neuen" Ansichtsstatus.

> [!NOTE]
> Ansichtstransitionsstile werden während der Ansichtstransition dynamisch generiert; siehe die Spezifikation [Übergangs-Pseudoelemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und die Abschnitte [Pseudoelementstile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

Darüber hinaus wird die Transformation des Elements vom Bildschirmraum-Transform des "alten" Ansichtsstatus zum neuen Bildschirmraum-Transform animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zu dem Zeitpunkt bestimmt werden, an dem die Transition beginnt.

## Syntax

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universale Selektor (`*`)](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors); wählt alle Ansichtstransitionsgruppen auf einer Seite aus.
- `root`
  - : Die {{cssxref("view-transition-name")}}, die auf {{cssxref(":root")}} angewendet wird, bewirkt, dass das Pseudoelement mit der Standard-`root`-Ansichtstransitionsgruppe übereinstimmt. Dies ist die Snapshot-Gruppe, die vom Benutzeragenten erstellt wurde, um die Ansichtstransition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die Eigenschaft `view-transition-name` einer eigenen spezifischen Ansichtstransitions-Snapshot-Gruppe zugewiesen ist.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}} Eigenschaft gesetzt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}} Eigenschaft gesetzt ist, vorangestellt durch einen Punkt (`.`).

Die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) des benannten Ansichtstransition-Pseudoelements entspricht der [Spezifität des Typselektors](/de/docs/Web/CSS/Guides/Cascade/Specificity#type_column), es sei denn, der verwendete Parameter ist der universelle Selektor, in diesem Fall beträgt die Spezifität null.

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
