---
title: "HTMLAnchorElement: Eigenschaft relList"
short-title: relList
slug: Web/API/HTMLAnchorElement/relList
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLAnchorElement.relList`** spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut wider. Es handelt sich um eine dynamische {{domxref("DOMTokenList")}}, die die Menge der Link-Typen enthält, welche die Beziehung zwischen der Ressource, die durch das {{HTMLElement("a")}} Element dargestellt wird, und dem aktuellen Dokument angeben.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die
{{domxref("DOMTokenList")}} nicht durch eine andere ersetzen können, aber ihr Inhalt kann dennoch geändert werden.

## Wert

Eine dynamische {{domxref("DOMTokenList")}} von Zeichenfolgen.

## Beispiele

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  const list = anchor.relList;
  console.log(
    `New anchor node found with ${list.length} link types in relList.`,
  );
  list.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die gleichwertige Eigenschaft bei {{HTMLElement("area")}} und {{HTMLElement("link")}},
  {{domxref("HTMLAreaElement.relList")}} und {{domxref("HTMLLinkElement.relList")}}.
- Dieselbe Liste, aber als durch Leerzeichen getrennte Tokens in einem String:
  {{domxref("HTMLAnchorElement.rel")}}.
