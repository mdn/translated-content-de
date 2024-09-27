---
title: "HTMLFieldSetElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLFieldSetElement/disabled
l10n:
  sourceCommit: c32a37ea5fdec8bd961573bdc7cb9c3625c237aa
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft des [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Interfaces ist ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/fieldset#disabled)-Attribut des {{htmlelement("fieldset")}}-Elements widerspiegelt und anzeigt, ob die Steuerung deaktiviert ist.

Wenn es deaktiviert ist, sind alle Formularsteuerungselemente, die Nachfahren des `<fieldset>`-Elements sind, mit Ausnahme von Elementen, die Nachfahren des {{htmlelement("legend")}}-Kindes des `<fieldset>` sind, falls vorhanden, deaktiviert. Ein deaktiviertes Element ist nicht benutzbar und nicht anklickbar und entspricht dem {{cssxref(":disabled")}}-Selektor, auch wenn ihr `disabled`-Eigenschaftswert false ist.

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
- CSS-Pseudoklassen {{cssxref(":disabled")}} und {{cssxref(":enabled")}}
