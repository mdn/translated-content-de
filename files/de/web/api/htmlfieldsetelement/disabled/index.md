---
title: "HTMLFieldSetElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLFieldSetElement/disabled
l10n:
  sourceCommit: c32a37ea5fdec8bd961573bdc7cb9c3625c237aa
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft der Schnittstelle [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) ist ein boolescher Wert, der das `disabled`-Attribut des {{htmlelement("fieldset")}}-Elements widerspiegelt. Dieses Attribut gibt an, ob die Steuerung deaktiviert ist.

Wenn deaktiviert, sind alle Formularsteuerelemente, die Nachkommen des `<fieldset>`-Elements sind, mit Ausnahme der Elemente, die Nachkommen des {{htmlelement("legend")}}-Kindes des `<fieldset>` sind, falls vorhanden, deaktiviert. Ein deaktiviertes Element ist nicht benutzbar und nicht anklickbar und entspricht dem {{cssxref(":disabled")}}-Selektor, selbst wenn der Wert ihrer `disabled`-Eigenschaft falsch ist.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const fs = document.getElementById("billing-address");
console.log(fs.disabled);
fs.disabled = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
- CSS-Selektoren {{cssxref(":disabled")}} und {{cssxref(":enabled")}} Pseudoklassen
