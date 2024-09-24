---
title: "HTMLLinkElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLLinkElement/rel
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die **`rel`**-Eigenschaft der {{domxref("HTMLLinkElement")}}-Schnittstelle spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Es ist eine Zeichenkette, die eine durch Leerzeichen getrennte Liste von Linktypen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("link")}}-Element repräsentiert wird, und dem aktuellen Dokument angibt.

Der häufigste Verwendungszweck dieses Attributs ist das Festlegen eines Links zu einem externen Stylesheet:
Die Eigenschaft wird auf `stylesheet` gesetzt, und das [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut wird auf die URL eines externen Stylesheets gesetzt, um die Seite zu formatieren.

## Wert

Eine Zeichenkette.

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
  {{domxref("HTMLAnchorElement.rel")}} und {{domxref("HTMLAreaElement.rel")}}.
- Die gleiche Liste, jedoch als Token: {{domxref("HTMLLinkElement.relList")}}.
