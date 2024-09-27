---
title: "HTMLImageElement: vspace-Eigenschaft"
short-title: vspace
slug: Web/API/HTMLImageElement/vspace
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`vspace`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Anzahl der Pixel an, die leer gelassen werden sollen, um oben und unten am {{HTMLElement("img")}}-Element leeren Raum zu schaffen, wenn die Seite gestaltet wird.

## Wert

Ein ganzzahliger Wert, der die Höhe des vertikalen Abstands in Pixeln angibt, der auf die oberen und unteren Seiten des Bildes angewendet werden soll.

## Gebrauchshinweise

Der angegebene Wert für `vspace` wird den {{cssxref("margin-top")}} und {{cssxref("margin-bottom")}} Eigenschaften zugeordnet, um die Höhe dieser Abstände in Pixeln festzulegen.

> [!WARNING]
> Diese Eigenschaft ist veraltet. Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("margin")}} und ihre Formen zur Einzeldeklaration verwenden, um Abstände um ein `<img>` festzulegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
