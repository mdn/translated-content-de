---
title: "Document: body-Eigenschaft"
short-title: body
slug: Web/API/Document/body
l10n:
  sourceCommit: c82e8ba239176a7510e7d334a302a3dc3f985b29
---

{{APIRef("DOM")}}

Die **`Document.body`**-Eigenschaft repräsentiert den
{{HTMLElement("body")}} oder {{HTMLElement("frameset")}} Knoten des aktuellen Dokuments, oder
`null`, wenn ein solches Element nicht existiert.

## Wert

Eine der folgenden:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- `null`

## Beispiele

```js
// Given this HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

const aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## Hinweise

`document.body` ist das Element, das den Inhalt für das Dokument enthält.
In Dokumenten mit `<body>`-Inhalt wird das
`<body>`-Element zurückgegeben, und in Frameset-Dokumenten wird das äußerste
`<frameset>`-Element zurückgegeben.

Obwohl die `body`-Eigenschaft setzbar ist, wird das Setzen eines neuen Bodys auf einem Dokument
effektiv alle aktuellen Kinder des bestehenden
`<body>`-Elements entfernen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.head`](/de/docs/Web/API/Document/head)
