---
title: "HTMLInputElement: pattern-Eigenschaft"
short-title: pattern
slug: Web/API/HTMLInputElement/pattern
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{ APIRef("HTML DOM") }}

Die **`pattern`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces repräsentiert einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions), den ein nicht-`null` {{HTMLElement("input")}}-Wert erfüllen sollte. Sie spiegelt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `pattern`-Eigenschaft ist gültig für die Typen `text`, `search`, `url`, `tel`, `email` und `password`. Sie definiert einen regulären Ausdruck, den der [`value`](/de/docs/Web/API/HTMLInputElement/value) des Inputs erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht.

Wenn ein nicht-`null`-Wert nicht den durch den `pattern`-Wert festgelegten Einschränkungen entspricht, ist die schreibgeschützte [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr.

## Wert

Ein String.

## Beispiele

```js
const inputElement = document.getElementById("year");
console.log(input.pattern);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [Client-seitige Validierung](/de/docs/Web/HTML/Element/input#client-side_validation)
- {{CSSXref(":valid")}} und {{CSSXref(":invalid")}} Pseudoklassen
