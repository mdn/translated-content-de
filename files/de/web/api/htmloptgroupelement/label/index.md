---
title: "HTMLOptGroupElement: label-Eigenschaft"
short-title: label
slug: Web/API/HTMLOptGroupElement/label
l10n:
  sourceCommit: 5ca22d7b0f7a1e12783a7d4eb78497bb0f641647
---

{{ APIRef("HTML DOM") }}

Die **`label`**-Eigenschaft der [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)-Schnittstelle ist ein Zeichenkettenwert, der das [`label`](/de/docs/Web/HTML/Element/optgroup#label)-Attribut des {{htmlelement("optgroup")}}-Elements widerspiegelt, welches eine textuelle Bezeichnung für die Gruppe von Optionen bereitstellt.

## Wert

Eine Zeichenkette.

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
