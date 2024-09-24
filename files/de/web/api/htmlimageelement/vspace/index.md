---
title: "HTMLImageElement: vspace Eigenschaft"
short-title: vspace
slug: Web/API/HTMLImageElement/vspace
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`vspace`**-Eigenschaft der
{{domxref("HTMLImageElement")}}-Schnittstelle gibt an, wie viele Pixel an leerem Raum
oben und unten um das {{HTMLElement("img")}}-Element beim Layout der Seite freigelassen
werden sollen.

## Wert

Ein ganzzahliger Wert, der die Höhe in Pixeln des vertikalen Randes angibt, der auf
die oberen und unteren Seiten des Bildes angewendet werden soll.

## Nutzungshinweise

Der für `vspace` angegebene Wert wird auf die {{cssxref("margin-top")}}
und {{cssxref("margin-bottom")}} Eigenschaften abgebildet, um die Höhe dieser Ränder
in Pixeln festzulegen.

> [!WARNING]
> Diese Eigenschaft ist veraltet. Stattdessen sollten Sie die CSS-
> {{cssxref("margin")}}-Eigenschaft und ihre Langformen verwenden, um Ränder um
> ein `<img>` festzulegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
