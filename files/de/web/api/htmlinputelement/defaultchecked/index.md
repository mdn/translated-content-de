---
title: "HTMLInputElement: defaultChecked-Eigenschaft"
short-title: defaultChecked
slug: Web/API/HTMLInputElement/defaultChecked
l10n:
  sourceCommit: e62f2b210f88e2c3e7270dcb4341e2963f9619cf
---

{{ APIRef("HTML DOM") }}

Die **`defaultChecked`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt den standardmäßigen Anwendungsstatus des Elements an. Diese Eigenschaft spiegelt das [`checked`](/de/docs/Web/HTML/Element/input#checked)-Attribut des {{htmlelement("input")}}-Elements wider.

Das boolesche [`checked`](/de/docs/Web/HTML/Element/input#checked)-Attribut ist für die Eingabetypen `radio` ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) und `checkbox` ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)) gültig. Das Vorhandensein des Attributs setzt die `defaultChecked`-Eigenschaft auf `true`.

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
