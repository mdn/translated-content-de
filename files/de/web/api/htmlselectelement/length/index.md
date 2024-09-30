---
title: "HTMLSelectElement: length-Eigenschaft"
short-title: length
slug: Web/API/HTMLSelectElement/length
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

Die **`length`**-Eigenschaft des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt die Anzahl der {{htmlelement("option")}}-Elemente im {{htmlelement("select")}}-Element an. Sie repräsentiert die Anzahl der Knoten in der [`options`](/de/docs/Web/API/HTMLSelectElement/options)-Sammlung. Beim Setzen verhält sie sich wie ([`HTMLOptionsCollection.length`](/de/docs/Web/API/HTMLOptionsCollection/length)).

## Wert

Eine Zahl.

## Beispiele

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("select")}}
- {{HTMLElement("option")}}
- [`HTMLSelectElement.options`](/de/docs/Web/API/HTMLSelectElement/options)
- [`HTMLSelectElement.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions)
- [`HTMLSelectElement.multiple`](/de/docs/Web/API/HTMLSelectElement/multiple)
- [`HTMLSelectElement.selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex)
