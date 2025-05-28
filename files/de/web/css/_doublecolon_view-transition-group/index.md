---
title: ::view-transition-group()
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: d64189632da72d059dcc110f4d0b0684ef45ba16
---

{{CSSRef}}

Das **`::view-transition-group()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine einzelne View-Übergangs-Snapshot-Gruppe.

Während eines View-Übergangs wird `::view-transition-group()` in den zugehörigen Pseudo-Element-Baum aufgenommen, wie im Abschnitt [Der View-Übergangs-Pseudo-Element-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair()")}} als Kind.

`::view-transition-group()` erhält die folgende Standardformatierung im UA-Stylesheet:

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

Wenn sowohl ein "alter" als auch ein "neuer" Ansichtsstatus vorhanden sind, animieren Stile im View-Übergangs-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudo-Elements von der Größe des Rahmenfeldes des "alten" Ansichtsstatus auf die des Rahmenfeldes des "neuen" Ansichtsstatus.

> [!NOTE]
> View-Übergangsstile werden während des View-Übergangs dynamisch generiert; siehe die Spezifikationsabschnitte [Übergangs-Pseudo-Elemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudo-Element-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für mehr Details.

Zusätzlich wird die Transformation des Elements vom Bildschirmraum-Transformationszustand des "alten" Ansichtsstatus zum neuen Bildschirmraum-Transformationszustand animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zu Beginn des Übergangs festgelegt werden.

## Syntax

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Universal_selectors); wählt alle View-Übergangsgruppen auf einer Seite aus.
- `root`
  - : Der {{cssxref("view-transition-name")}} angewandt auf {{cssxref(":root")}} bewirkt, dass das Pseudo-Element der Standard-`root`-View-Übergangsgruppe entspricht. Dies ist die vom User-Agent erstellte Snapshot-Gruppe, um den View-Übergang für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht über die `view-transition-name`-Eigenschaft einer eigenen spezifischen View-Übergangs-Snapshot-Gruppe zugewiesen ist.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}}-Eigenschaft festgelegt wurde.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}}-Eigenschaft festgelegt wurde, vorangestellt durch einen Punkt (`.`).

Die {{cssxref("specificity")}} des benannten View-Übergangs-Pseudo-Elements entspricht der [Specificity des Typselektors](/de/docs/Web/CSS/CSS_cascade/Specificity#type_column), es sei denn, der verwendete Parameter ist der universelle Selektor, in diesem Fall beträgt die Specificity null.

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
