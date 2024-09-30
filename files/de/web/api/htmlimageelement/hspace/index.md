---
title: "HTMLImageElement: hspace-Eigenschaft"
short-title: hspace
slug: Web/API/HTMLImageElement/hspace
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`hspace`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Anzahl der Pixel an, die auf der linken und rechten Seite des {{HTMLElement("img")}}-Elements beim Seitenlayout leer gelassen werden sollen.

Diese Eigenschaft spiegelt das [HTML](/de/docs/Glossary/HTML)-[`hspace`](/de/docs/Web/HTML/Element/img#hspace)-Attribut wider.

## Wert

Ein ganzzahliger Wert, der die Breite des horizontalen Abstands in Pixeln angibt, der auf die linke und rechte Seite des Bildes angewendet werden soll.

## Nutzungshinweise

Der für `hspace` angegebene Wert wird den {{cssxref("margin-left")}} und {{cssxref("margin-right")}} Eigenschaften zugeordnet, um die Breite dieser Abstände in Pixeln anzugeben.

> [!WARNING]
> Diese Eigenschaft ist veraltet. Stattdessen sollten Sie die CSS-{{cssxref("margin")}}-Eigenschaft und ihre Langformen verwenden, um Abstände um ein `<img>` festzulegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
