---
title: "HTMLLinkElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die **`relList`**-Eigenschaft des schreibgeschützten [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Es handelt sich um eine Live-[`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die die Menge der Link-Typen enthält, die die Beziehung zwischen der durch das {{HTMLElement("link")}}-Element dargestellten Ressource und dem aktuellen Dokument angeben.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die
[`DOMTokenList`](/de/docs/Web/API/DOMTokenList) nicht durch eine andere ersetzen können, aber der Inhalt der zurückgegebenen Liste kann geändert werden.

## Wert

Eine Live-[`DOMTokenList`](/de/docs/Web/API/DOMTokenList) von Zeichenfolgen.

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

- Die entsprechende Eigenschaft auf {{HTMLElement("a")}} und {{HTMLElement("area")}},
  [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) und [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList).
- Die gleiche Liste, aber als durch Leerzeichen getrennte Token in einer Zeichenfolge:
  [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
