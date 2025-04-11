---
title: "HTMLAreaElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLAreaElement/relList
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`HTMLAreaElement.relList`**-Eigenschaft spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut wider. Sie ist eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die die Menge von Link-Typen enthält, welche die Beziehung zwischen der Ressource, die durch das {{HTMLElement("area")}}-Element dargestellt wird, und dem aktuellen Dokument angeben.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) nicht durch eine andere ersetzen können. Der Inhalt der zurückgegebenen Liste kann jedoch geändert werden.

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

- Die entsprechende Eigenschaft für {{HTMLElement("a")}} und {{HTMLElement("link")}}, [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) und [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList).
- Die gleiche Liste, aber als durch Leerzeichen getrennte Tokens in einer Zeichenfolge: [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
