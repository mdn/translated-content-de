---
title: "HTMLImageElement: hspace-Eigenschaft"
short-title: hspace
slug: Web/API/HTMLImageElement/hspace
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die
_veraltete_ **`hspace`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Anzahl der Pixel an, die links und rechts des {{HTMLElement("img")}}-Elements leer gelassen werden sollen, wenn die Seite erstellt wird.

Diese Eigenschaft spiegelt das [HTML](/de/docs/Glossary/HTML) [`hspace`](/de/docs/Web/HTML/Element/img#hspace)
Attribut wider.

## Wert

Ein ganzzahliger Wert, der die Breite des horizontalen Abstands in Pixeln angibt, der auf die linken und rechten Seiten des Bildes angewendet wird.

## Verwendungshinweise

Der für `hspace` angegebene Wert wird auf die {{cssxref("margin-left")}}- und {{cssxref("margin-right")}}-Eigenschaften abgebildet, um die Breite dieser Ränder in Pixeln festzulegen.

> [!WARNING]
> Diese Eigenschaft ist veraltet. Stattdessen sollten Sie die CSS
> {{cssxref("margin")}}-Eigenschaft und deren Langformen verwenden, um Abstände um ein `<img>` zu schaffen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
