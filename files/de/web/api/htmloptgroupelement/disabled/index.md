---
title: "HTMLOptGroupElement: disabled Eigenschaft"
short-title: disabled
slug: Web/API/HTMLOptGroupElement/disabled
l10n:
  sourceCommit: c32a37ea5fdec8bd961573bdc7cb9c3625c237aa
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft der Schnittstelle [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement) ist ein boolescher Wert, der das Attribut [`disabled`](/de/docs/Web/HTML/Element/optgroup#disabled) des {{htmlelement("optgroup")}}-Elements widerspiegelt. Dieses Attribut gibt an, ob das Steuerelement deaktiviert ist.

Wenn es deaktiviert ist, sind die {{htmlelement("option")}}-Elementnachkommen des `<optgroup>`-Elements unbrauchbar, nicht anklickbar und nicht auswählbar. Diese deaktivierten `<option>`s entsprechen dem {{cssxref(":disabled")}}-Selektor, selbst wenn ihr `disabled`-Eigenschaftswert false ist.

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

- HTML-Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
- CSS {{cssxref(":disabled")}} und {{cssxref(":enabled")}} Pseudoklassen
