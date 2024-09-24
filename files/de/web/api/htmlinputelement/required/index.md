---
title: "HTMLInputElement: required Eigenschaft"
short-title: erforderlich
slug: Web/API/HTMLInputElement/required
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

Die **`required`** Eigenschaft des {{DOMxRef("HTMLInputElement")}} Interfaces gibt an, dass der Benutzer einen Wert eingeben muss, bevor ein Formular abgeschickt wird. Sie spiegelt das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut des {{htmlelement("input")}} Elements wider.

Während das HTML-Boolean-Attribut `required` ignoriert wird, wenn der Typ `hidden`, `range`, `color`, `submit`, `reset`, `button` und `image` ist, ist die `required` Eigenschaft für diese Eingabetypen `true`, wenn das Attribut vorhanden ist, andernfalls `false`.

Wenn ein erforderliches Eingabefeld keinen Wert hat, ist die schreibgeschützte {{domxref('ValidityState')}} Eigenschaft {{domxref('ValidityState.valueMissing','valueMissing')}} des Objekts `true`.

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
- {{DOMXref("HTMLInputElement.validity")}}
- {{cssxref(":required")}} Pseudoklasse
