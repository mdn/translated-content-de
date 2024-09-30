---
title: "HTMLInputElement: required-Eigenschaft"
short-title: required
slug: Web/API/HTMLInputElement/required
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

Die **`required`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt an, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular abschickt. Sie spiegelt das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut des {{htmlelement("input")}}-Elements wider.

Während das HTML-Boolean-`required`-Attribut ignoriert wird, wenn der Typ `hidden`, `range`, `color`, `submit`, `reset`, `button` und `image` ist, ist die `required`-Eigenschaft für diese Eingabetypen `true`, wenn das Attribut vorhanden ist, andernfalls `false`.

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
