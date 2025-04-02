---
title: "HTMLButtonElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLButtonElement/type
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{ApiRef("HTML DOM")}}

Die **`type`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ist ein String, der den Verhaltenstyp des {{HTMLElement("button")}}-Elements angibt.

Sie spiegelt das [`type`](/de/docs/Web/HTML/Element/button#type)-Attribut des {{HTMLElement("button")}}-Elements wider.

## Wert

Ein String, der den Typ repräsentiert.

Die möglichen Werte sind im Abschnitt [button types](/de/docs/Web/API/HTMLButtonElement/type) des Attributs aufgelistet.

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
