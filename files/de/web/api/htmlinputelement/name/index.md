---
title: "HTMLInputElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLInputElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt den Namen des {{HTMLElement("input")}}-Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements darstellt.

## Beispiel

Angenommen, Sie haben das folgende HTML:

```html
<p>
  <label for="planet">Which planet were you born on?</label>
  <input id="planet" type="text" name="origin" />
</p>
```

Sie können die `name`-Eigenschaft verwenden, um den Namen des `<input>`-Elements abzurufen oder festzulegen:

```js
const inputElement = document.querySelector("#planet");
console.log(`Element's name: ${inputElement.name}`); // "Element's name: origin"
inputElement.name = "planet"; // updates the element's name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)
