---
title: "HTMLOptGroupElement: label-Eigenschaft"
short-title: label
slug: Web/API/HTMLOptGroupElement/label
l10n:
  sourceCommit: 5ca22d7b0f7a1e12783a7d4eb78497bb0f641647
---

{{ APIRef("HTML DOM") }}

Die **`label`**-Eigenschaft des {{domxref("HTMLOptGroupElement")}}-Interfaces ist ein Zeichenfolgenwert, der das `label`-Attribut des {{htmlelement("optgroup")}}-Elements widerspiegelt, welches eine textuelle Beschriftung für die Gruppe von Optionen bereitstellt.

## Wert

Eine Zeichenfolge.

## Beispiele

```js
const optionGroup = document.getElementById("groupB");
console.log(optionGroup.label);
optionGroup.label = `${optionGroup.label} (${optionGroup.children.length})`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("optgroup")}}
- HTML [`label`](/de/docs/Web/HTML/Element/optgroup#label) Attribut
