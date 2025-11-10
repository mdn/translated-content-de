---
title: "HTMLAreaElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLAreaElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement.rel`**-Eigenschaft spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut wider. Es handelt sich um einen String, der eine durch Leerzeichen getrennte Liste von Linktypen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("area")}}-Element repräsentiert wird, und dem aktuellen Dokument angibt.

## Wert

Ein String.

## Beispiele

```js
const areas = document.getElementsByTagName("area");
for (const area of areas) {
  console.log(`Rel: ${area.rel}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die gleichwertige Eigenschaft auf {{HTMLElement("a")}} und {{HTMLElement("link")}},
  [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel) und [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel).
- Die gleiche Liste, aber als Token: [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList).
