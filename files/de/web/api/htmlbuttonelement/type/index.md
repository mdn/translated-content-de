---
title: "HTMLButtonElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLButtonElement/type
l10n:
  sourceCommit: 34d914d848c6d749bb264e6d5c4dda3e94fda4ba
---

{{ApiRef("HTML DOM")}}

Die **`type`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ist ein String, der den Verhaltenstyp des {{HTMLElement("button")}}-Elements angibt.

Sie spiegelt das [`type`](/de/docs/Web/HTML/Element/button#type)-Attribut des {{HTMLElement("button")}}-Elements wider.

## Wert

Ein String, der den Typ darstellt.

Die möglichen Werte sind in der [Button-Typen](/de/docs/Web/API/HTMLButtonElement#htmlbuttonelement.type)-Sektion des Attributs aufgelistet.

## Beispiel

### HTML

```html
<button id="button" type="reset">type</button>
```

### JavaScript

```js
const buttonElement = document.querySelector("#buttton");
console.log(buttonElement.type); // "reset"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.type`](/de/docs/Web/API/HTMLTextAreaElement/type)-Eigenschaft
- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)-Eigenschaft
