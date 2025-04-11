---
title: "HTMLImageElement: hspace-Eigenschaft"
short-title: hspace
slug: Web/API/HTMLImageElement/hspace
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`hspace`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle bestimmt die Anzahl der Pixel, die auf der linken und rechten Seite des {{HTMLElement("img")}}-Elements als leerer Raum bei der Seitenanordnung freizulassen sind.

Diese Eigenschaft spiegelt das {{Glossary("HTML", "HTML")}} [`hspace`](/de/docs/Web/HTML/Reference/Elements/img#hspace)-Attribut wider.

## Wert

Ein ganzzahliger Wert, der die Breite des horizontalen Randes in Pixeln angibt, der auf die linke und rechte Seite des Bildes angewendet werden soll.

## Hinweise zur Verwendung

Der für `hspace` angegebene Wert wird auf die {{cssxref("margin-left")}}- und {{cssxref("margin-right")}}-Eigenschaften abgebildet, um die Breite dieser Ränder in Pixeln festzulegen.

> [!WARNING]
> Diese Eigenschaft ist veraltet. Stattdessen sollten Sie die CSS-{{cssxref("margin")}}-Eigenschaft und ihre Langformen verwenden, um Ränder um ein `<img>` festzulegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
