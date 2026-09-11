---
title: "HTMLInputElement: pattern-Eigenschaft"
short-title: pattern
slug: Web/API/HTMLInputElement/pattern
l10n:
  sourceCommit: 61986210fa785119daed1c121491fef615ec2bc8
---

{{ APIRef("HTML DOM") }}

Die **`pattern`**-Eigenschaft der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) repräsentiert einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions), dem ein nicht-`null`-Wert von {{HTMLElement("input")}} entsprechen sollte. Sie spiegelt das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) des {{htmlelement("input")}}-Elements wider.

Die Eigenschaft `pattern` ist für die Typen `text`, `search`, `url`, `tel`, `email` und `password` gültig. Sie definiert einen regulären Ausdruck, dem der [`value`](/de/docs/Web/API/HTMLInputElement/value) der Eingabe entsprechen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht.

Wenn ein nicht-`null`-Wert nicht den durch den Wert von `pattern` festgelegten Einschränkungen entspricht, ist die schreibgeschützte Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des Objekts [`ValidityState`](/de/docs/Web/API/ValidityState) `true`.

## Wert

Ein String.

## Beispiele

```js
const inputElement = document.getElementById("year");
console.log(inputElement.pattern);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [Client-seitige Validierung](/de/docs/Web/HTML/Reference/Elements/input#client-side_validation)
- {{CSSXref(":valid")}}- und {{CSSXref(":invalid")}}-Pseudoklassen
