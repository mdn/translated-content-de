---
title: "HTMLSelectElement: required-Eigenschaft"
short-title: required
slug: Web/API/HTMLSelectElement/required
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`required`**-Eigenschaft der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Schnittstelle gibt an, dass der Benutzer eine Option mit einem nicht-leeren Zeichenfolgenwert auswählen muss, bevor ein Formular abgeschickt wird. Sie spiegelt das [`required`](/de/docs/Web/HTML/Reference/Elements/select#required)-Attribut des {{htmlelement("select")}}-Elements wider.

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
