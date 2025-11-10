---
title: "HTMLInputElement: required Eigenschaft"
short-title: required
slug: Web/API/HTMLInputElement/required
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`required`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt an, dass der Benutzer einen Wert ausfüllen muss, bevor ein Formular abgeschickt wird. Sie spiegelt das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut des {{htmlelement("input")}}-Elements wider.

Während das HTML-Boolean-Attribut `required` ignoriert wird, wenn der Typ `hidden`, `range`, `color`, `submit`, `reset`, `button` und `image` ist, ist die `required`-Eigenschaft für diese Eingabetypen `true`, wenn das Attribut vorhanden ist, andernfalls `false`.

Wenn eine erforderliche Eingabe keinen Wert hat, wird die schreibgeschützte [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr sein.

## Wert

Ein Boolean.

## Beispiele

```js
const inputElement = document.getElementById("name");
console.log(inputElement.required);
inputElement.required = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.validity`](/de/docs/Web/API/HTMLInputElement/validity)
- {{cssxref(":required")}} Pseudo-Klasse
