---
title: "HTMLOptGroupElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLOptGroupElement/disabled
l10n:
  sourceCommit: c32a37ea5fdec8bd961573bdc7cb9c3625c237aa
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft des [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement) Interfaces ist ein boolescher Wert, der das `optgroup`-Element-Attribut [`disabled`](/de/docs/Web/HTML/Element/optgroup#disabled) widerspiegelt. Dieses Attribut gibt an, ob die Steuerung deaktiviert ist.

Wenn deaktiviert, sind die `option`-Element-Nachkommen des `<optgroup>`-Elements unbenutzbar, nicht anklickbar und nicht auswählbar. Diese deaktivierten `<option>`s entsprechen dem {{cssxref(":disabled")}}-Selektor, selbst wenn ihr `disabled`-Eigenschaftswert falsch ist.

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

- HTML [`disabled`](/de/docs/Web/HTML/Attributes/disabled) Attribut
- CSS {{cssxref(":disabled")}} und {{cssxref(":enabled")}} Pseudoklassen
