---
title: "HTMLInputElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLInputElement/type
l10n:
  sourceCommit: e7bb84d5c6e135acde81d6dbeb2ea004e662070b
---

{{ApiRef("HTML DOM")}}

Die **`type`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt an, welche Art von Daten im {{HTMLElement("input")}}-Element erlaubt sind, zum Beispiel eine Zahl, ein Datum oder eine E-Mail. Browser werden das passende Widget und Verhalten auswählen, um Nutzern zu helfen, einen gültigen Wert einzugeben.

Sie spiegelt das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des {{HTMLElement("input")}}-Elements wider.

## Wert

Ein String, der den Typ repräsentiert.

Die möglichen Werte sind im Abschnitt [input types](/de/docs/Web/HTML/Element/input#input_types) des Attributs aufgelistet.

## Beispiel

### HTML

```html
<input id="input1" type="date" />
```

### JavaScript

```js
const inputElement = document.querySelector("#input1");
console.log(inputElement.type); // Output: "date"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.type`](/de/docs/Web/API/HTMLTextAreaElement/type) Eigenschaft
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type) Eigenschaft
