---
title: "HTMLSelectElement: required-Eigenschaft"
short-title: required
slug: Web/API/HTMLSelectElement/required
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

Die **`required`**-Eigenschaft des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt an, dass der Benutzer eine Option mit einem nicht-leeren Zeichenfolgenwert auswählen muss, bevor ein Formular abgeschickt wird. Sie spiegelt das [`required`](/de/docs/Web/HTML/Element/select#required)-Attribut des {{htmlelement("select")}}-Elements wider.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.required);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("select")}}
- [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity)
- {{cssxref(":required")}} Pseudo-Klasse
