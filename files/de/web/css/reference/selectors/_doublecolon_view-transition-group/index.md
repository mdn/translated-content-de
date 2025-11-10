---
title: ::view-transition-group()
slug: Web/CSS/Reference/Selectors/::view-transition-group
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`::view-transition-group()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert eine einzelne View-Transition-Schnappschussgruppe.

Während einer View-Transition wird `::view-transition-group()` im dazugehörigen Pseudoelement-Baum enthalten, wie im Abschnitt [Der Pseudoelement-Baum der View-Transition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist nur je ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair()")}} als Kind.

`::view-transition-group()` erhält die folgende Standard-Stilgebung im UA-Stilblatt:

```css
:root::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old()")}} Pseudoelements wider, das den "alten" Ansichtsstatus repräsentiert, oder des {{cssxref("::view-transition-new()")}} Pseudoelements, das den "neuen" Ansichtsstatus repräsentiert, wenn kein "alter" Ansichtsstatus vorhanden ist.

Wenn sowohl ein "alter" als auch ein "neuer" Ansichtsstatus vorhanden sind, animieren die Stile im View-Transition-Stilblatt die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudoelements von der Größe des Begrenzungsrahmens des "alten" Ansichtsstatus zu dem des "neuen" Ansichtsstatus.

> [!NOTE]
> View-Transition-Stile werden während der View-Transition dynamisch generiert; sehen Sie sich die Spezifikationsabschnitte [Transition-Pseudoelemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudoelement-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details an.

Zusätzlich wird die Transformation des Elements vom Bildschirmraumbereich des "alten" Ansichtsstatus zu dem des neuen Ansichtsstatus animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften bestimmt werden, wenn der Übergang beginnt.

## Syntax

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameter

- `*`
  - : Der [universelle Selektor (`*`)](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors); wählt alle View-Transition-Gruppen auf einer Seite aus.
- `root`
  - : Der {{cssxref("view-transition-name")}} auf {{cssxref(":root")}} angewendet, sorgt dafür, dass das Pseudoelement der standardmäßigen `root`-View-Transition-Gruppe entspricht. Dies ist die Schnappschussgruppe, die vom Benutzeragenten erstellt wird, um die View-Transition für die gesamte Seite zu enthalten. Diese Gruppe schließt jedes Element ein, dem nicht über die Eigenschaft `view-transition-name` eine eigene spezifische View-Transition-Schnappschussgruppe zugewiesen wurde.
- `<pt-name-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-name")}}-Eigenschaft gesetzt wurde.
- `<pt-class-selector>`
  - : Der {{cssxref("custom-ident")}}, der als Wert der {{cssxref("view-transition-class")}}-Eigenschaft gesetzt wurde, dem ein Punkt (`.`) vorangestellt ist.

Die {{cssxref("specificity")}} des benannten View-Transition-Pseudoelements ist gleich der [Specificity des Typselektors](/de/docs/Web/CSS/Guides/Cascade/Specificity#type_column), es sei denn, der verwendete Parameter ist der universelle Selektor, in diesem Fall ist die Specificity Null.

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
