---
title: "HTMLLinkElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`relList`** der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Schnittstelle spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Es handelt sich um eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die die Menge der Link-Typen enthält, die die Beziehung zwischen der vom {{HTMLElement("link")}}-Element dargestellten Ressource und dem aktuellen Dokument anzeigen.

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

- Die entsprechende Eigenschaft an {{HTMLElement("a")}} und {{HTMLElement("area")}},
  [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) und [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList).
- Dieselbe Liste aber als durch Leerzeichen getrennte Tokens in einer Zeichenkette:
  [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
