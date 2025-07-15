---
title: ::view-transition-group()
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::view-transition-group()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine einzelne View-Transition-Schnappschussgruppe.

Während einer Ansichtstransition wird `::view-transition-group()` in den zugehörigen Baum der Pseudo-Elemente eingefügt, wie im Abschnitt [Der Baum der View-Transition-Pseudo-Elemente](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair()")}} als Kind.

Dem `::view-transition-group()` wird im UA-Stylesheet folgendes Standardstyling zugewiesen:

```css
:root::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old()")}} Pseudo-Elements wider, das den "alten" Ansichtsstatus repräsentiert, oder des {{cssxref("::view-transition-new()")}} Pseudo-Elements, das den "neuen" Ansichtsstatus repräsentiert, falls kein "alter" Ansichtsstatus vorhanden ist.

Wenn sowohl ein "alter" als auch ein "neuer" Ansichtsstatus vorhanden ist, animiert das Stylesheet der Ansichtstransition die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudo-Elements von der Größe des Border-Box des "alten" Ansichtsstatus zur Größe des Border-Box des "neuen" Ansichtsstatus.

> [!NOTE]
> Die Stile für Ansichtstransitionen werden dynamisch während der Ansichtstransition generiert; siehe die Spezifikationsabschnitte [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

Zusätzlich wird die Transformation des Elements vom Bildschirmlage-Transform des "alten" Ansichtsstatus zum Bildschirmlage-Transform des neuen Ansichtsstatus animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zu dem Zeitpunkt bestimmt werden, an dem die Transition beginnt.

## Syntax

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Universal_selectors); wählt alle Ansichtstransitionsgruppen auf einer Seite aus.
- `root`
  - : Der {{cssxref("view-transition-name")}}, der auf {{cssxref(":root")}} angewendet wird, führt dazu, dass das Pseudo-Element der Standard-`root`-Ansichtstransitionsgruppe entspricht. Dies ist die vom Benutzeragenten erstellte Schnappschussgruppe, die die Ansichtstransition für die gesamte Seite enthält. Diese Gruppe schließt jedes Element ein, das nicht über die `view-transition-name` Eigenschaft seiner eigenen spezifischen Ansichtstransitionsschnappschussgruppe zugeordnet ist.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}} Eigenschaft gesetzt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}} Eigenschaft gesetzt ist, vorangestellt durch einen Punkt (`.`).

Die {{cssxref("specificity")}} des benannten Ansichtstransitions-Pseudo-Elements ist gleich der [Specificity des Typ-Selektors](/de/docs/Web/CSS/CSS_cascade/Specificity#type_column), es sei denn, der verwendete Parameter ist der universelle Selektor, dann ist die Specificity null.

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
- [Sanfte Transitionen mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
