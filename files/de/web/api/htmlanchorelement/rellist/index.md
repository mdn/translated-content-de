---
title: "HTMLAnchorElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLAnchorElement/relList
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Die **`HTMLAnchorElement.relList`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut widerspiegelt. Sie ist eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die die Menge von Linktypen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("a")}}-Element dargestellt wird, und dem aktuellen Dokument anzeigen.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die
[`DOMTokenList`](/de/docs/Web/API/DOMTokenList) nicht durch eine andere ersetzen können, aber ihr Inhalt kann dennoch geändert werden.

## Wert

Eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) von Zeichenfolgen.

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

- Die entsprechende Eigenschaft auf {{HTMLElement("area")}} und {{HTMLElement("link")}},
  [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) und [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList).
- Dieselbe Liste, aber als durch Leerzeichen getrennte Tokens in einer Zeichenfolge:
  [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
