---
title: "HTMLOptGroupElement: label-Eigenschaft"
short-title: label
slug: Web/API/HTMLOptGroupElement/label
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`label`**-Eigenschaft des [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)-Interfaces ist ein String-Wert, der das `label`-Attribut des {{htmlelement("optgroup")}}-Elements widerspiegelt. Dieses Attribut bietet eine textuelle Bezeichnung für die Gruppe von Optionen.

## Wert

Ein String.

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
- HTML-`label`-Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/optgroup#label)
