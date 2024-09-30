---
title: "HTMLImageElement: vspace-Eigenschaft"
short-title: vspace
slug: Web/API/HTMLImageElement/vspace
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`vspace`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Anzahl der Pixel an, die oben und unten am {{HTMLElement("img")}}-Element als leerer Raum gelassen werden sollen, wenn die Seite dargestellt wird.

## Wert

Ein Ganzzahlwert, der die Höhe der vertikalen Abstände in Pixeln angibt, die auf die obere und untere Seite des Bildes angewendet werden sollen.

## Anwendungshinweise

Der für `vspace` angegebene Wert wird den {{cssxref("margin-top")}}- und {{cssxref("margin-bottom")}}-Eigenschaften zugeordnet, um die Höhe dieser Abstände in Pixeln festzulegen.

> [!WARNING]
> Diese Eigenschaft ist veraltet. Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("margin")}} und ihre Einzelwerte verwenden, um Abstände um ein `<img>` zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
