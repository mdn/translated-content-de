---
title: "HTMLInputElement: type Eigenschaft"
short-title: type
slug: Web/API/HTMLInputElement/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`type`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt die Art der Daten an, die im {{HTMLElement("input")}}-Element zulässig sind, zum Beispiel eine Zahl, ein Datum oder eine E-Mail. Browser wählen das entsprechende Widget und Verhalten aus, um Benutzern zu helfen, einen gültigen Wert einzugeben.

Sie spiegelt das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des {{HTMLElement("input")}}-Elements wider.

## Wert

Ein String, der den Typ repräsentiert.

Die möglichen Werte sind im Abschnitt [input types](/de/docs/Web/HTML/Reference/Elements/input#input_types) des Attributs aufgelistet.

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
