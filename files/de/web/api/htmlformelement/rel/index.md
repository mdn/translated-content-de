---
title: "HTMLFormElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLFormElement/rel
l10n:
  sourceCommit: b6a1290ec691116f79e10df990f9cee55c6991d2
---

{{APIRef("HTML DOM")}}

Die **`rel`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Es handelt sich um einen String, der angibt, welche Arten von Links das HTML-{{HTMLElement("form")}}-Element erstellt, als durch Leerzeichen getrennte Liste von aufgezählten Werten.

Um den Wert als Array von Tokens abzurufen, verwenden Sie [`HTMLFormElement.relList`](/de/docs/Web/API/HTMLFormElement/relList).

## Wert

Ein String.

## Beispiele

```js
const form = document.querySelector("form");
console.log(form.rel);

form.rel = "noopener noreferrer";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFormElement.relList`](/de/docs/Web/API/HTMLFormElement/relList)
- [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
- [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
