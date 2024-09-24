---
title: "HTMLInputElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLInputElement/name
l10n:
  sourceCommit: bc141099823c9ae2e46f560ac674be2bc4118351
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft des {{domxref("HTMLInputElement")}}-Interfaces zeigt den Namen des {{HTMLElement("input")}}-Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements darstellt.

## Beispiel

Unter Berücksichtigung des folgenden HTML-Codes:

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
inputElement.name = "planet"; // aktualisiert den Namen des Elements
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
