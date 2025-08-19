---
title: "Document: body-Eigenschaft"
short-title: body
slug: Web/API/Document/body
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("DOM")}}

Die **`Document.body`**-Eigenschaft repräsentiert den {{HTMLElement("body")}} oder {{HTMLElement("frameset")}} Knoten des aktuellen Dokuments oder `null`, wenn ein solcher Knoten nicht existiert.

## Wert

Einer der folgenden:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- `null`

## Beispiele

```js
// Given this HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

const newBodyElement = document.createElement("body");

newBodyElement.id = "newBodyElement";
document.body = newBodyElement;
alert(document.body.id); // "newBodyElement"
```

## Hinweise

`document.body` ist das Element, das den Inhalt des Dokuments enthält. In Dokumenten mit `<body>`-Inhalt wird das `<body>`-Element zurückgegeben, und in Frameset-Dokumenten wird das äußerste `<frameset>`-Element zurückgegeben.

Obwohl die `body`-Eigenschaft setzbar ist, bewirkt das Setzen eines neuen Bodys in einem Dokument, dass alle aktuellen Kinder des bestehenden `<body>`-Elements effektiv entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.head`](/de/docs/Web/API/Document/head)
