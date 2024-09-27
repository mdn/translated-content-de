---
title: "HTMLInputElement: required-Eigenschaft"
short-title: required
slug: Web/API/HTMLInputElement/required
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

Die **`required`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt an, dass der Benutzer einen Wert eingeben muss, bevor ein Formular abgeschickt werden kann. Sie spiegelt das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut des {{htmlelement("input")}}-Elements wider.

Während das HTML-Boolean-`required`-Attribut ignoriert wird, wenn der Typ `hidden`, `range`, `color`, `submit`, `reset`, `button` und `image` ist, ist die `required`-Eigenschaft `true` für diese Eingabetypen, wenn das Attribut vorhanden ist, `false` andernfalls.

Wenn ein erforderliches Eingabefeld keinen Wert enthält, wird die schreibgeschützte [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true` sein.

## Wert

Ein boolean.

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
