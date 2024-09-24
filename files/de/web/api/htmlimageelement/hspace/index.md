---
title: "HTMLImageElement: Eigenschaft hspace"
short-title: hspace
slug: Web/API/HTMLImageElement/hspace
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`hspace`**-Eigenschaft der {{domxref("HTMLImageElement")}}-Schnittstelle gibt die Anzahl der Pixel an, die an den linken und rechten Seiten des {{HTMLElement("img")}}-Elements beim Layouten der Seite leer gelassen werden sollen.

Diese Eigenschaft spiegelt das {{Glossary("HTML")}} [`hspace`](/de/docs/Web/HTML/Element/img#hspace) Attribut wider.

## Wert

Ein ganzzahliger Wert, der die Breite, in Pixeln, des horizontalen Abstands angibt, der auf die linken und rechten Seiten des Bildes angewendet werden soll.

## Nutzungshinweise

Der für `hspace` angegebene Wert wird auf die Eigenschaften {{cssxref("margin-left")}} und {{cssxref("margin-right")}} abgebildet, um die Breite dieser Abstände in Pixeln festzulegen.

> [!WARNING]
> Diese Eigenschaft ist veraltet. Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("margin")}} und deren Langformen verwenden, um Ränder um ein `<img>`-Element zu definieren.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
