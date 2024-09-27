---
title: "HTMLLinkElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLLinkElement/rel
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die **`rel`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Es handelt sich um einen String, der eine durch Leerzeichen getrennte Liste von Linktypen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("link")}}-Element dargestellt wird, und dem aktuellen Dokument angibt.

Die häufigste Verwendung dieses Attributs ist das Angeben eines Links zu einem externen Stylesheet: die Eigenschaft wird auf `stylesheet` gesetzt und das [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut wird auf die URL eines externen Stylesheets gesetzt, um die Seite zu formatieren.

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

- Die entsprechende Eigenschaft in {{HTMLElement("a")}} und {{HTMLElement("area")}}, [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel) und [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel).
- Die gleiche Liste, jedoch als Tokens: [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
