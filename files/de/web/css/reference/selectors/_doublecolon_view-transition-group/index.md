---
title: ::view-transition-group()
slug: Web/CSS/Reference/Selectors/::view-transition-group
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::view-transition-group()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert eine einzelne View-Übergang-Snapshot-Gruppe.

Während eines View-Übergangs wird `::view-transition-group()` in den zugehörigen Pseudoelement-Baum aufgenommen, wie im Abschnitt [Der View-Übergang-Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair()")}} als Kind.

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

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old()")}} Pseudoelements wider, das den "alten" Ansichtsstatus repräsentiert, oder des {{cssxref("::view-transition-new()")}} Pseudoelements, das den "neuen" Ansichtsstatus repräsentiert, falls kein "alter" Ansichtsstatus vorhanden ist.

Wenn es sowohl einen "alten" als auch einen "neuen" Ansichtsstatus gibt, animieren Stile im View-Übergangs-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudoelements von der Größe des Rahmenkastens des "alten" Ansichtsstatus zur des "neuen" Ansichtsstatus.

> [!NOTE]
> Die View-Übergang-Stile werden während des Übergangs dynamisch generiert; siehe die Abschnitte der Spezifikation [transition Pseudoelements einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudoelement-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

Zudem wird die Transformation des Elements von der Bildschirmenraumtransformation des "alten" Ansichtsstatus zur Bildschirmenraumtransformation des neuen Ansichtsstatus animiert. Dieser Stil wird dynamisch erzeugt, da die Werte der animierten Eigenschaften zum Zeitpunkt des Beginns des Übergangs bestimmt werden.

## Syntax

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors); wählt alle View-Übergang-Gruppen auf einer Seite aus.
- `root`
  - : Das {{cssxref("view-transition-name")}}, das auf {{cssxref(":root")}} angewendet wird, sorgt dafür, dass das Pseudoelement mit der Standard-`root`-View-Übergangsgruppe übereinstimmt. Dies ist die Snapshot-Gruppe, die vom Benutzeragenten erstellt wird, um den View-Übergang für die gesamte Seite zu beinhalten. Diese Gruppe schließt jedes Element ein, das nicht über die Eigenschaft `view-transition-name` seiner eigenen spezifischen View-Übergang-Snapshot-Gruppe zugewiesen ist.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}}-Eigenschaft gesetzt ist.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}}-Eigenschaft gesetzt ist, vorangestellt mit einem Punkt (`.`).

Die {{cssxref("specificity")}} des benannten View-Übergangs-Pseudoelements entspricht der [Spezifität des Typselektors](/de/docs/Web/CSS/CSS_cascade/Specificity#type_column), es sei denn, es wird der universelle Selektor verwendet, in diesem Fall ist die Spezifität null.

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
