---
title: "HTMLOptGroupElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLOptGroupElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft der [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)-Schnittstelle ist ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/optgroup#disabled)-Attribut des {{htmlelement("optgroup")}}-Elements widerspiegelt. Dieses Attribut gibt an, ob das Steuerelement deaktiviert ist.

Wenn deaktiviert, sind die {{htmlelement("option")}}-Element-Nachkommen des `<optgroup>`-Elements nicht verwendbar, nicht anklickbar und nicht auswählbar. Diese deaktivierten `<option>` werden mit dem {{cssxref(":disabled")}}-Selektor übereinstimmen, selbst wenn ihr `disabled`-Eigenschaftswert falsch ist.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const optionGroup = document.getElementById("groupB");
console.log(optionGroup.disabled);
optionGroup.disabled = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) Attribut
- CSS {{cssxref(":disabled")}} und {{cssxref(":enabled")}} Pseudoklassen
