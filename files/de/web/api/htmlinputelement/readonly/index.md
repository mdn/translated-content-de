---
title: "HTMLInputElement: readOnly-Eigenschaft"
short-title: readOnly
slug: Web/API/HTMLInputElement/readOnly
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`readOnly`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle zeigt an, dass der Benutzer den Wert des {{htmlelement("input")}} nicht ändern kann. Sie spiegelt das [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) boolesche Attribut des {{htmlelement("input")}}-Elements wider und gibt `true` zurück, wenn das Attribut vorhanden ist und `false`, wenn es fehlt.

Im Gegensatz zu einem Formularsteuerelement mit einer auf `true` gesetzten [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)-Eigenschaft verhindert ein `true`-Wert der `readOnly`-Eigenschaft nicht, dass der Benutzer in das Steuerelement klickt oder darin auswählt.

Während das HTML-`readonly`-Attribut ignoriert wird, wenn der Typ `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, `submit`, `reset`, `button` und `image` ist, ist die `readOnly`-Eigenschaft für diese Eingabetypen `true`, wenn das Attribut vorhanden ist, andernfalls `false`.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const inputElement = document.getElementById("total");
console.log(inputElement.readOnly);
inputElement.readOnly = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
- {{cssxref(":read-only")}} Pseudoklasse
