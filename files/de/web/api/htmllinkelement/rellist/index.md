---
title: "HTMLLinkElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`relList`**-Eigenschaft der [HTMLLinkElement](/de/docs/Web/API/HTMLLinkElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut widerspiegelt. Es handelt sich um eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Satz von Link-Typen enthält, die die Beziehung zwischen der durch das {{HTMLElement("link")}}-Element dargestellten Ressource und dem aktuellen Dokument angeben.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) nicht durch eine andere ersetzen können, aber der Inhalt der zurückgegebenen Liste kann geändert werden.

## Wert

Eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) von Zeichenfolgen.

## Beispiele

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log("New link found.");
  link.relList.forEach((relEntry) => {
    console.log(relEntry);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die entsprechende Eigenschaft bei {{HTMLElement("a")}} und {{HTMLElement("area")}},
  [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) und [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList).
- Die gleiche Liste, jedoch als durch Leerzeichen getrennte Token in einer Zeichenkette:
  [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
