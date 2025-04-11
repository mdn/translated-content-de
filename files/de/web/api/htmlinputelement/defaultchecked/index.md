---
title: "HTMLInputElement: defaultChecked-Eigenschaft"
short-title: defaultChecked
slug: Web/API/HTMLInputElement/defaultChecked
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`defaultChecked`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt den Standardzustand des markierten Elements an. Diese Eigenschaft spiegelt das [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut des {{htmlelement("input")}}-Elements wider.

Das boolesche [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut ist gültig für die Eingabetypen `radio` ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)) und `checkbox` ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)). Das Vorhandensein des Attributs setzt die `defaultChecked`-Eigenschaft auf `true`.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const inputElement = document.getElementById("contactMail");
console.log(inputElement.defaultChecked);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- {{cssxref(":default")}} Pseudo-Klasse
- {{cssxref(":checked")}} Pseudo-Klasse
