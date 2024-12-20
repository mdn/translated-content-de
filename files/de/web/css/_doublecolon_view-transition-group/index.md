---
title: "::view-transition-group"
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{CSSRef}}

Das **`::view-transition-group`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine einzelne Ansichtstransitions-Snapshot-Gruppe.

Während einer Ansichtstransition wird `::view-transition-group` in den zugehörigen Pseudo-Element-Baum eingeschlossen, wie im Abschnitt [Der Pseudo-Element-Baum der Ansichtstransition](/de/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree) erklärt. Es ist immer nur ein Kind von {{cssxref("::view-transition")}} und hat ein {{cssxref("::view-transition-image-pair")}} als Kind.

`::view-transition-group` erhält folgende Standardstile im UA-Stylesheet:

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Standardmäßig spiegeln ausgewählte Elemente zunächst die Größe und Position des {{cssxref("::view-transition-old")}} Pseudo-Elements wider, das den "alten" Ansichtsstatus darstellt, oder das {{cssxref("::view-transition-new")}} Pseudo-Element, das den "neuen" Ansichtsstatus darstellt, wenn kein "alter" Ansichtsstatus vorhanden ist.

Wenn es sowohl einen "alten" als auch einen "neuen" Ansichtsstatus gibt, animieren die Styles im Ansichtstransitions-Stylesheet die {{cssxref("width")}} und {{cssxref("height")}} dieses Pseudo-Elements von der Größe des Rahmenkastens des "alten" Ansichtsstatus zur Größe des Rahmenkastens des "neuen" Ansichtsstatus.

> [!NOTE]
> Die Ansichtstransitionsstile werden während der Ansichtstransition dynamisch generiert; siehe die Spezifikationsabschnitte [Setup Transition Pseudo-Elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) und [Update Pseudo-Element Styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) für weitere Details.

Zusätzlich wird die Transformation des Elements von der Bildschirmraumentransformation des "alten" Ansichtsstatus zur neuen Bildschirmraumentransformation des neuen Ansichtsstatus animiert. Dieser Stil wird dynamisch generiert, da die Werte der animierten Eigenschaften zu Beginn der Transition bestimmt werden.

## Syntax

```css-nolint
::view-transition-group(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` kann einen der folgenden Werte annehmen:

- `*`
  - : Lässt das Pseudo-Element mit allen Ansichtstransitionsgruppen übereinstimmen.
- `root`
  - : Lässt das Pseudo-Element mit der standardmäßigen `root`-Ansichtstransitionsgruppe übereinstimmen, die vom Benutzeragenten erstellt wurde, um die Ansichtstransition für die gesamte Seite zu enthalten. Diese Gruppe umfasst alle Elemente, die keiner spezifischen Ansichtstransitionsgruppe über die {{cssxref("view-transition-name")}} Eigenschaft zugeordnet sind.
- {{cssxref("custom-ident")}}
  - : Lässt das Pseudo-Element mit einer spezifischen Ansichtstransitionsgruppe übereinstimmen, die durch die Zuordnung des angegebenen {{cssxref("custom-ident")}} zu einem Element über die {{cssxref("view-transition-name")}} Eigenschaft erstellt wurde.

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
