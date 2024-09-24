---
title: "Dokument: body-Eigenschaft"
short-title: body
slug: Web/API/Document/body
l10n:
  sourceCommit: c82e8ba239176a7510e7d334a302a3dc3f985b29
---

{{APIRef("DOM")}}

Die **`Document.body`**-Eigenschaft repräsentiert das
{{HTMLElement("body")}}- oder {{HTMLElement("frameset")}}-Element des aktuellen Dokuments oder
`null`, falls ein solches Element nicht existiert.

## Wert

Eines der folgenden:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- `null`

## Beispiele

```js
// Bei diesem HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

const aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## Hinweise

`document.body` ist das Element, das den Inhalt für das Dokument enthält.
In Dokumenten mit `<body>`-Inhalten wird das
`<body>`-Element zurückgegeben, und in Frameset-Dokumenten wird das äußerste
`<frameset>`-Element zurückgegeben.

Obwohl die `body`-Eigenschaft gesetzt werden kann, führt das Setzen eines neuen Body-Elements in einem Dokument effektiv zur Entfernung aller aktuellen Kinder des bestehenden
`<body>`-Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("document.head")}}
