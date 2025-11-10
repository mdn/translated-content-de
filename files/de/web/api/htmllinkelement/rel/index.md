---
title: "HTMLLinkElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLLinkElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`rel`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut wider. Es ist ein String, der eine durch Leerzeichen getrennte Liste von Linktypen enthält, die die Beziehung zwischen der durch das {{HTMLElement("link")}}-Element dargestellten Ressource und dem aktuellen Dokument angeben.

Die häufigste Verwendung dieses Attributs besteht darin, einen Link zu einem externen Stylesheet anzugeben:
die Eigenschaft wird auf `stylesheet` gesetzt, und das [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut
wird auf die URL eines externen Stylesheets gesetzt, um die Seite zu formatieren.

## Wert

Ein String.

## Beispiele

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log(link);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die entsprechende Eigenschaft bei {{HTMLElement("a")}} und {{HTMLElement("area")}},
  [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel) und [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel).
- Die gleiche Liste, aber als Token: [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
