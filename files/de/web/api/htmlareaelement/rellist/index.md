---
title: "HTMLAreaElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLAreaElement/relList
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement.relList`** schreibgeschützte Eigenschaft spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Sie ist eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die die Menge von Linktypen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("area")}}-Element dargestellt wird, und dem aktuellen Dokument angibt.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die
[`DOMTokenList`](/de/docs/Web/API/DOMTokenList) nicht durch eine andere ersetzen können, aber der Inhalt der zurückgegebenen Liste kann geändert werden.

## Wert

Eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) von Zeichenfolgen.

## Beispiele

```js
const areas = document.getElementsByTagName("area");
const length = areas.length;

for (const area of areas) {
  console.log("New area found.");
  area.relList.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die entsprechende Eigenschaft an {{HTMLElement("a")}} und {{HTMLElement("link")}},
  [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) und [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList).
- Die gleiche Liste, jedoch als durch Leerzeichen getrennte Tokens in einem String:
  [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
