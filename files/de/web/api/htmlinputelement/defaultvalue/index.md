---
title: "HTMLInputElement: Eigenschaft defaultValue"
short-title: defaultValue
slug: Web/API/HTMLInputElement/defaultValue
l10n:
  sourceCommit: bc141099823c9ae2e46f560ac674be2bc4118351
---

{{ApiRef("HTML DOM")}}

Die **`defaultValue`**-Eigenschaft der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) gibt den ursprünglichen (oder Standard-)Wert des {{HTMLElement("input")}}-Elements an. Sie spiegelt das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des Elements wider.

## Wert

Ein String, der den Standard- oder ursprünglichen Wert des `<input>`-Elements darstellt.

## Beispiel

Gegebenenfalls folgende HTML:

```html
<label for="planet">Which planet were you born on?</label>
<input id="planet" type="text" value="Azarath" />
```

Das Folgende liefert die gleichen Ergebnisse, unabhängig davon, was der Benutzer in das Texteingabefeld eingibt.

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
