---
title: "HTMLAnchorElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLAnchorElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLAnchorElement.rel`**-Eigenschaft spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut wider. Es handelt sich um einen String, der eine durch Leerzeichen getrennte Liste von Linktypen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("a")}}-Element dargestellt wird, und dem aktuellen Dokument angeben.

## Wert

Ein String.

## Beispiele

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  alert(`Rel: ${anchor.rel}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die entsprechende Eigenschaft für {{HTMLElement("area")}} und {{HTMLElement("link")}},
  [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel) und [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel).
- Dieselbe Liste, jedoch als Tokens: [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
