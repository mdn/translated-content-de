---
title: "::view-transition-group"
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 865ff2dff8f25cae66149dd121203d2bd7b58fad
---

{{CSSRef}}

Das **`::view-transition-group`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine einzelne View-Transition-Snapshot-Gruppe.

Während einer View-Transition ist `::view-transition-group` in dem zugehörigen Pseudoelement-Baum enthalten, wie in [Der View-Transition-Pseudoelement-Baum](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) beschrieben. Es ist immer nur ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair")}} als Kind.

`::view-transition-group` erhält das folgende Standard-Styling im UA-Stylesheet:

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old")}} Pseudoelements wider, das den "alten" View-Zustand repräsentiert, oder des {{cssxref("::view-transition-new")}} Pseudoelements, das den "neuen" View-Zustand repräsentiert, falls kein "alter" View-Zustand vorhanden ist.

Wenn es sowohl einen "alten" als auch einen "neuen" View-Zustand gibt, animieren die Stile im View-Transition-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudoelements von der Größe des "alten" View-Zustands-Border-Box zur des "neuen" View-Zustands-Border-Box.

> [!NOTE]
> View-Transition-Stile werden während der View-Transition dynamisch generiert; siehe die Abschnitte der Spezifikation [Übergangs-Pseudoelemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudoelement-Stile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

Darüber hinaus wird das Transformieren des Elements vom "alten" View-Zustand-Bildschirmraum-Transformieren zum neuen View-Zustand-Bildschirmraum-Transformieren animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften bestimmt werden, sobald der Übergang beginnt.

## Syntax

```css-nolint
::view-transition-group(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Bewirkt, dass das Pseudoelement mit allen View-Transition-Gruppen übereinstimmt.
- `root`
  - : Bewirkt, dass das Pseudoelement mit der Standard-`root`-View-Transition-Gruppe übereinstimmt, die vom Benutzeragenten erstellt wird, um die View-Transition für die gesamte Seite zu enthalten. Diese Gruppe umfasst jedes Element, das nicht durch die Eigenschaft {{cssxref("view-transition-name")}} einer eigenen spezifischen View-Transition-Gruppe zugewiesen wird.
- {{cssxref("custom-ident")}}
  - : Bewirkt, dass das Pseudoelement mit einer spezifischen View-Transition-Gruppe übereinstimmt, die erstellt wird, indem das angegebene {{cssxref("custom-ident")}} einem Element über die Eigenschaft {{cssxref("view-transition-name")}} zugewiesen wird.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
- [Reibungslose und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
