---
title: "HTMLInputElement: defaultChecked-Eigenschaft"
short-title: defaultChecked
slug: Web/API/HTMLInputElement/defaultChecked
l10n:
  sourceCommit: e62f2b210f88e2c3e7270dcb4341e2963f9619cf
---

{{ APIRef("HTML DOM") }}

Die **`defaultChecked`**-Eigenschaft der {{DOMxRef("HTMLInputElement")}}-Schnittstelle gibt den Standard-Check-Status des Elements an. Diese Eigenschaft spiegelt das [`checked`](/de/docs/Web/HTML/Element/input#checked)-Attribut des {{htmlelement("input")}}-Elements wider.

Das boolesche [`checked`](/de/docs/Web/HTML/Element/input#checked)-Attribut ist für die `radio` ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) und `checkbox` ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox))-Eingabetypen gültig. Die Anwesenheit des Attributs setzt die `defaultChecked`-Eigenschaft auf `true`.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const inputElement = document.getElementById("contactMail");
console.log(inputElement.defaultChecked);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- {{cssxref(":default")}} Pseudo-Klasse
- {{cssxref(":checked")}} Pseudo-Klasse
