---
title: "HTMLImageElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLImageElement/alt
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`alt`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces bietet Ersatztext (Alternate Text), der angezeigt wird, wenn das Bild, das durch das {{HTMLElement("img")}}-Element spezifiziert wird, nicht angezeigt wird. Dies kann durch einen Fehler, weil der Benutzer das Laden von Bildern deaktiviert hat, oder weil das Bild noch nicht vollständig geladen ist, geschehen. Sie spiegelt das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Inhaltsattribut des `<img>`-Elements wider.

Es gibt wichtige Zugänglichkeitsaspekte bei der Bereitstellung eines geeigneten Alt-Texts, und die Anforderungen können je nach Zweck des Bildes variieren. Weitere Informationen finden Sie in der HTML-Referenz für [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions).

## Wert

Ein String.

## Beispiele

### Das alt-Attribut festlegen

```js
const img = new Image();
img.src = "example.png";
img.alt = "An example picture";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
