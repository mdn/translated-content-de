---
title: "HTMLFormElement: rel-Eigenschaft"
short-title: rel
slug: Web/API/HTMLFormElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`rel`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut wider. Es ist ein String, der angibt, welche Arten von Links das HTML-{{HTMLElement("form")}}-Element erstellt, als durch Leerzeichen getrennte Liste von aufgezählten Werten.

Um den Wert als Array von Tokens zu erhalten, verwenden Sie [`HTMLFormElement.relList`](/de/docs/Web/API/HTMLFormElement/relList).

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
