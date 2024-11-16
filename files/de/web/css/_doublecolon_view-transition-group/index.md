---
title: "::view-transition-group"
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

Das **`::view-transition-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine einzelne Schnappschussgruppe eines Ansichtswechsels.

Während eines Ansichtswechsels ist `::view-transition-group` im zugehörigen Pseudo-Element-Baum enthalten, wie in [Der Pseudoelement-Baum des Ansichtstransfers](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair")}} als Kind.

`::view-transition-group` erhält die folgende Standardstilierung im UA-Stylesheet:

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente anfänglich die Größe und Position des {{cssxref("::view-transition-old")}}-Pseudo-Elements wider, das den "alten" Ansichtsstatus darstellt, oder des {{cssxref("::view-transition-new")}}-Pseudo-Elements, das den "neuen" Ansichtsstatus darstellt, wenn kein "alter" Ansichtsstatus vorhanden ist.

Wenn sowohl ein "alter" als auch ein "neuer" Ansichtsstatus vorhanden sind, animieren Stile im Ansichtswechsels-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudo-Elements von der Größe des Randrahmens des "alten" Ansichtsstatus zu der des "neuen" Ansichtsstatus.

> [!NOTE]
> Ansichtswechsels-Stile werden während des Ansichtswechsels dynamisch generiert; siehe die Spezifikationsabschnitte [Einrichtung von Übergangs-Pseudo-Elementen](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Aktualisieren der Stile von Pseudo-Elementen](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für mehr Details.

Darüber hinaus wird die `transform`-Eigenschaft des Elements von der Bildschirmraumtransformation des "alten" Ansichtsstatus zur Bildschirmraumtransformation des neuen Ansichtsstatus animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zum Zeitpunkt des Beginns des Übergangs bestimmt werden.

## Syntax

```css-nolint
::view-transition-group(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Bewirkt, dass das Pseudo-Element mit allen Ansichtswechselgruppen übereinstimmt.
- `root`
  - : Bewirkt, dass das Pseudo-Element mit der Standard-`root`-Ansichtswechselgruppe übereinstimmt, die vom Benutzeragenten erstellt wird, um den Ansichtswechsel für die gesamte Seite zu enthalten. Diese Gruppe schließt alle Elemente ein, die keiner eigenen speziellen Ansichtswechselgruppe über die {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen sind.
- {{cssxref("custom-ident")}}
  - : Bewirkt, dass das Pseudo-Element mit einer spezifischen Ansichtswechselgruppe übereinstimmt, die erstellt wird, indem das gegebene {{cssxref("custom-ident")}} einem Element durch die {{cssxref("view-transition-name")}}-Eigenschaft zugewiesen wird.

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
- [Fließende Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
