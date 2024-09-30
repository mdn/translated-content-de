---
title: "Document: body-Eigenschaft"
short-title: body
slug: Web/API/Document/body
l10n:
  sourceCommit: c82e8ba239176a7510e7d334a302a3dc3f985b29
---

{{APIRef("DOM")}}

Die **`Document.body`**-Eigenschaft repräsentiert das
{{HTMLElement("body")}}- oder {{HTMLElement("frameset")}}-Element des aktuellen Dokuments oder
`null`, wenn kein solches Element existiert.

## Wert

Eines der folgenden:

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

## Anmerkungen

`document.body` ist das Element, das den Inhalt des Dokuments enthält.
In Dokumenten mit `<body>`-Inhalten gibt es das
`<body>`-Element zurück, und in Frame-Set-Dokumenten wird das äußerste
`<frameset>`-Element zurückgegeben.

Obwohl die `body`-Eigenschaft gesetzt werden kann, führt das Setzen eines neuen Bodys in einem Dokument dazu, dass alle aktuellen Kinder des bestehenden
`<body>`-Elements entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.head`](/de/docs/Web/API/Document/head)
