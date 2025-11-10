---
title: "HTMLFieldSetElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLFieldSetElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft des [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Interfaces ist ein boolescher Wert, der das `disabled`-Attribut des {{htmlelement("fieldset")}}-Elements widerspiegelt. Dieses Attribut gibt an, ob das Steuerelement deaktiviert ist.

Wenn das `<fieldset>` deaktiviert ist, sind alle Formularelement-Nachkommen des `<fieldset>`-Elements deaktiviert, ausgenommen Elemente, die Nachkommen des optionalen {{htmlelement("legend")}}-Kindes des `<fieldset>` sind. Ein deaktiviertes Element ist nicht nutzbar und nicht anklickbar und entspricht dem {{cssxref(":disabled")}}-Selektor, selbst wenn der Wert der `disabled`-Eigenschaft falsch ist.

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

- HTML [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut
- CSS {{cssxref(":disabled")}} und {{cssxref(":enabled")}} Pseudoklassen
