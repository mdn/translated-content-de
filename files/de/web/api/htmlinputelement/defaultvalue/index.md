---
title: "HTMLInputElement: defaultValue-Eigenschaft"
short-title: defaultValue
slug: Web/API/HTMLInputElement/defaultValue
l10n:
  sourceCommit: bc141099823c9ae2e46f560ac674be2bc4118351
---

{{ApiRef("HTML DOM")}}

Die **`defaultValue`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle zeigt den ursprünglichen (oder standardmäßigen) Wert des {{HTMLElement("input")}}-Elements an. Sie spiegelt das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des Elements wider.

## Wert

Ein String, der den Standard- oder ursprünglichen Wert des `<input>`-Elements darstellt.

## Beispiel

Angenommen, wir haben folgendes HTML:

```html
<label for="planet">Which planet were you born on?</label>
<input id="planet" type="text" value="Azarath" />
```

Das Folgende wird unabhängig davon, was der Benutzer in das Texteingabefeld eingibt, die gleichen Ergebnisse liefern.

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
