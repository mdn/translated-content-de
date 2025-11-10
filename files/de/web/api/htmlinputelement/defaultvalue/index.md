---
title: "HTMLInputElement: Eigenschaft defaultValue"
short-title: defaultValue
slug: Web/API/HTMLInputElement/defaultValue
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`defaultValue`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt den ursprünglichen (oder Standard-)Wert des {{HTMLElement("input")}}-Elements an. Sie spiegelt das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des Elements wider.

## Wert

Ein String, der den Standard- oder ursprünglichen Wert des `<input>`-Elements darstellt.

## Beispiel

Angenommen, der folgende HTML-Code:

```html
<label for="planet">Which planet were you born on?</label>
<input id="planet" type="text" value="Azarath" />
```

Folgendes wird unabhängig davon, was der Benutzer in das Texteingabefeld eingibt, die gleichen Ergebnisse liefern.

```js
const inputElement = document.querySelector("#planet");
console.log(`Original value: ${inputElement.defaultValue}`); // "Original value: Azarath"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)
