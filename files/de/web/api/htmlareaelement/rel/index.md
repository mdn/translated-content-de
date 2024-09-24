---
title: "HTMLAreaElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLAreaElement/rel
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement.rel`**-Eigenschaft spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Es handelt sich um einen String, der eine durch Leerzeichen getrennte Liste von Linktypen enthält, die die Beziehung zwischen der durch das {{HTMLElement("area")}}-Element dargestellten Ressource und dem aktuellen Dokument angeben.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Die gleichwertige Eigenschaft auf {{HTMLElement("a")}} und {{HTMLElement("link")}},
  {{domxref("HTMLAnchorElement.rel")}} und {{domxref("HTMLLinkElement.rel")}}.
- Die gleiche Liste, aber als Token: {{domxref("HTMLAreaElement.relList")}}.
