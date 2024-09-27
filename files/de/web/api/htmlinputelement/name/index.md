---
title: "HTMLInputElement: name Eigenschaft"
short-title: name
slug: Web/API/HTMLInputElement/name
l10n:
  sourceCommit: bc141099823c9ae2e46f560ac674be2bc4118351
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle gibt den Namen des {{HTMLElement("input")}} Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Element/input#name) Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements repräsentiert.

## Beispiel

Für folgendes HTML:

```html
<p>
  <label for="planet">Which planet were you born on?</label>
  <input id="planet" type="text" name="origin" />
</p>
```

Sie können die `name`-Eigenschaft verwenden, um den Namen des `<input>`-Elements abzurufen oder zu setzen:

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
