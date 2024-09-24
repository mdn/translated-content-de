---
title: "HTMLAnchorElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLAnchorElement/rel
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLAnchorElement.rel`**-Eigenschaft spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Sie ist ein String, der eine durch Leerzeichen getrennte Liste von Link-Typen enthält, die die Beziehung zwischen der durch das {{HTMLElement("a")}}-Element dargestellten Ressource und dem aktuellen Dokument angeben.

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

- Die entsprechende Eigenschaft auf {{HTMLElement("area")}} und {{HTMLElement("link")}}, {{domxref("HTMLAreaElement.rel")}} und {{domxref("HTMLLinkElement.rel")}}.
- Die gleiche Liste, aber als Tokens: {{domxref("HTMLAnchorElement.relList")}}.
