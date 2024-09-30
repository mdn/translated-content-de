---
title: "::view-transition-group"
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 865ff2dff8f25cae66149dd121203d2bd7b58fad
---

{{CSSRef}}

Das **`::view-transition-group`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) stellt eine einzelne View-Transition-Snapshot-Gruppe dar.

Während einer View-Transition ist `::view-transition-group` in dem zugehörigen Pseudoelement-Baum enthalten, wie in [Der View-Transition-Pseudoelement-Baum](/de/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) erläutert. Es ist immer nur ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair")}} als Kind.

`::view-transition-group` erhält die folgende Standard-Stilgebung im UA-Stylesheet:

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old")}}-Pseudoelements wider, das den "alten" View-Zustand darstellt, oder des {{cssxref("::view-transition-new")}}-Pseudoelements, das den "neuen" View-Zustand darstellt, falls kein "alter" View-Zustand vorhanden ist.

Falls sowohl ein "alter" als auch ein "neuer" View-Zustand vorhanden sind, animieren die Stile im View-Transition-Stylesheet das {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudoelements von der Größe des Border-Box des "alten" View-Zustands zu der des "neuen" View-Zustands.

> [!NOTE]
> View-Transition-Stile werden während der View-Transition dynamisch erzeugt; sehen Sie die Abschnitte [Einrichten von Transition-Pseudoelementen](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Aktualisieren von Pseudoelement-Stilen](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) in der Spezifikation für weitere Details.

Zusätzlich wird die Transformation des Elements vom Bildschirmraum-Transformationszustand des "alten" Views zum neuen Bildschirmraum-Transformationszustand des neuen Views animiert. Dieser Stil wird dynamisch erzeugt, da die Werte der animierten Eigenschaften zum Zeitpunkt des Beginns der Transition bestimmt werden.

## Syntax

```css-nolint
::view-transition-group(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Veranlasst, dass das Pseudoelement alle View-Transition-Gruppen abgleicht.
- `root`
  - : Veranlasst, dass das Pseudoelement die standardmäßige `root`-View-Transition-Gruppe abgleicht, die vom Benutzeragenten erstellt wurde, um die View-Transition für die gesamte Seite zu enthalten. Diese Gruppe schließt alle Elemente ein, die nicht über die {{cssxref("view-transition-name")}}-Eigenschaft einer eigenen spezifischen View-Transition-Gruppe zugewiesen sind.
- {{cssxref("custom-ident")}}
  - : Veranlasst, dass das Pseudoelement eine spezifische View-Transition-Gruppe abgleicht, die durch Zuweisung des gegebenen {{cssxref("custom-ident")}} an ein Element über die {{cssxref("view-transition-name")}}-Eigenschaft erstellt wurde.

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
- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
