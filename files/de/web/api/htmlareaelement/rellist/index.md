---
title: "HTMLAreaElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLAreaElement/relList
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLAreaElement.relList`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut widerspiegelt. Es handelt sich um eine dynamische {{domxref("DOMTokenList")}}, die die Menge der Linktypen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("area")}}-Element repräsentiert wird, und dem aktuellen Dokument angeben.

Die Eigenschaft selbst ist schreibgeschützt, das bedeutet, Sie können die
{{domxref("DOMTokenList")}} nicht durch eine andere ersetzen, aber der Inhalt der zurückgegebenen Liste kann geändert werden.

## Wert

Eine dynamische {{domxref("DOMTokenList")}} von Zeichenfolgen.

## Beispiele

```js
const areas = document.getElementsByTagName("area");
const length = areas.length;

for (const area of areas) {
  console.log("New area found.");
  area.relList.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die entsprechende Eigenschaft auf {{HTMLElement("a")}} und {{HTMLElement("link")}},
  {{domxref("HTMLAnchorElement.relList")}} und {{domxref("HTMLLinkElement.relList")}}.
- Dieselbe Liste, jedoch als durch Leerzeichen getrennte Token in einer Zeichenfolge:
  {{domxref("HTMLAreaElement.rel")}}
