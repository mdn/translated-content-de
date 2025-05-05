---
title: ::view-transition-group
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: fccb20f35511f00969eeefb3fee868e75a6d393a
---

{{CSSRef}}

Der **`::view-transition-group`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine einzelne Sichtübergang-Snapshot-Gruppe.

Während eines Sichtübergangs ist `::view-transition-group` wie im Abschnitt [Der Sichtübergangs-Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt, im zugehörigen Pseudoelement-Baum enthalten. Es ist nur je Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair")}} als Kind.

`::view-transition-group` erhält das folgende Standardstyling im UA-Stylesheet:

```css
:root::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old")}} Pseudoelements wider, das den "alten" Sichtzustand repräsentiert, oder des {{cssxref("::view-transition-new")}} Pseudoelements, wenn es keinen "alten" Sichtzustand gibt.

Wenn sowohl ein "alter" als auch ein "neuer" Sichtzustand vorliegen, animieren die Stile im Sichtübergangs-Stylesheet dieses Pseudoelement von der Größe des Begrenzungsrahmens des "alten" Sichtzustands zu dem des "neuen" Sichtzustands in Bezug auf {{cssxref("width")}} und {{cssxref("height")}}.

> [!NOTE]
> Sichtübergangsstile werden während des Sichtübergangs dynamisch generiert; siehe die Spezifikationsabschnitte [Übergangspseudoelemente einrichten](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Pseudoelementstile aktualisieren](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für mehr Details.

Darüber hinaus wird die Transformation des Elements vom "alten" Sichtzustands-Bildschirmraum transformiert zu der des neuen Sichtzustands-Bildschirmraums animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zum Zeitpunkt des Beginns des Übergangs bestimmt werden.

## Syntax

```css-nolint
::view-transition-group(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte haben:

- `*`
  - : Verursacht, dass das Pseudoelement alle Sichtübergangsgruppen abgleicht.
- `root`
  - : Verursacht, dass das Pseudoelement die Standard-`root`-Sichtübergangsgruppe abgleicht, die vom Benutzeragenten zur Aufnahme des Sichtübergangs für die gesamte Seite erstellt wurde. Diese Gruppe umfasst jedes Element, dem über die {{cssxref("view-transition-name")}} Eigenschaft keine eigene spezifische Sichtübergangsgruppe zugewiesen ist.
- {{cssxref("custom-ident")}}
  - : Verursacht, dass das Pseudoelement eine spezifische Sichtübergangsgruppe abgleicht, die erstellt wird, indem das gegebene {{cssxref("custom-ident")}} einem Element über die {{cssxref("view-transition-name")}} Eigenschaft zugewiesen wird.

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

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Glatte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
