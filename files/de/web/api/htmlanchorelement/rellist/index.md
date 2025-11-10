---
title: "HTMLAnchorElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLAnchorElement/relList
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`HTMLAnchorElement.relList`**-Eigenschaft spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut wider. Sie ist eine lebendige [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die die Menge der Link-Typen enthält, die die Beziehung zwischen der vom {{HTMLElement("a")}}-Element dargestellten Ressource und dem aktuellen Dokument anzeigen.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) nicht mit einer anderen austauschen können, aber deren Inhalt kann trotzdem geändert werden.

## Wert

Eine lebendige [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) von Zeichenfolgen.

## Beispiele

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  const list = anchor.relList;
  console.log(
    `New anchor node found with ${list.length} link types in relList.`,
  );
  list.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die gleichwertige Eigenschaft auf {{HTMLElement("area")}} und {{HTMLElement("link")}},
  [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) und [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList).
- Die gleiche Liste, aber als durch Leerzeichen getrennte Tokens in einer Zeichenfolge:
  [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
