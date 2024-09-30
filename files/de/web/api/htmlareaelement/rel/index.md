---
title: "HTMLAreaElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLAreaElement/rel
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement.rel`**-Eigenschaft spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Es handelt sich um einen String, der eine durch Leerzeichen getrennte Liste von Link-Typen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("area")}}-Element repräsentiert wird, und dem aktuellen Dokument anzeigt.

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

- Die entsprechende Eigenschaft von {{HTMLElement("a")}} und {{HTMLElement("link")}},
  [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel) und [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel).
- Die gleiche Liste, aber als Tokens: [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList)
