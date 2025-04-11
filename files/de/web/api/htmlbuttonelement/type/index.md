---
title: "HTMLButtonElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLButtonElement/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`type`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ist ein String, der den Verhaltenstyp des {{HTMLElement("button")}}-Elements angibt.

Sie spiegelt das [`type`](/de/docs/Web/HTML/Reference/Elements/button#type)-Attribut des {{HTMLElement("button")}}-Elements wider.

## Wert

Ein String, der den Typ darstellt.

Die möglichen Werte sind in der Abschnitt [Button-Typen](/de/docs/Web/HTML/Reference/Elements/button#type) des Attributs aufgelistet.

## Beispiel

### HTML

```html
<button id="button" type="reset">type</button>
```

### JavaScript

```js
const buttonElement = document.querySelector("#button");
console.log(buttonElement.type); // "reset"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.type`](/de/docs/Web/API/HTMLTextAreaElement/type)-Eigenschaft
- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)-Eigenschaft
