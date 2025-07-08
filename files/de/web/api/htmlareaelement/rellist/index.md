---
title: "HTMLAreaElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLAreaElement/relList
l10n:
  sourceCommit: 6a29e1d9aebb928b18ad7e60da7c0aeb4f3862b2
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLAreaElement.relList`** spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut wider. Es handelt sich um eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die die Menge der Link-Typen enthält, die die Beziehung zwischen der durch das {{HTMLElement("area")}}-Element dargestellten Ressource und dem aktuellen Dokument anzeigt.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) nicht durch eine andere ersetzen können, aber der Inhalt der zurückgegebenen Liste kann verändert werden.

## Wert

Eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) von Zeichenfolgen.

## Beispiele

```js
const areas = document.getElementsByTagName("area");

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

- Die entsprechende Eigenschaft auf {{HTMLElement("a")}} und {{HTMLElement("link")}},
  [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) und [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList).
- Die gleiche Liste, jedoch als durch Leerzeichen getrennte Tokens in einem String:
  [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
