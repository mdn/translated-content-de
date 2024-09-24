---
title: "HTMLInputElement: pattern-Eigenschaft"
short-title: pattern
slug: Web/API/HTMLInputElement/pattern
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{ APIRef("HTML DOM") }}

Die **`pattern`**-Eigenschaft der {{DOMxRef("HTMLInputElement")}}-Schnittstelle repräsentiert einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions), den ein nicht-`null` {{HTMLElement("input")}}-Wert erfüllen sollte. Sie spiegelt das `pattern`-Attribut des {{htmlelement("input")}}-Elements wider.

Die `pattern`-Eigenschaft ist für die Typen `text`, `search`, `url`, `tel`, `email` und `password` gültig. Sie definiert einen regulären Ausdruck, den der Wert des Eingabefeldes ({{DOMxRef("HTMLInputElement.value", "value")}}) erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen.

Falls ein nicht-`null`-Wert nicht den durch den `pattern`-Wert festgelegten Einschränkungen entspricht, ist die schreibgeschützte Eigenschaft {{domxref('ValidityState')}} des Objekts {{domxref('ValidityState.patternMismatch','patternMismatch')}} auf wahr gesetzt.

## Wert

Ein String.

## Beispiele

```js
const inputElement = document.getElementById("year");
console.log(input.pattern);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- [Client-seitige Validierung](/de/docs/Web/HTML/Element/input#client-side_validation)
- {{CSSXref(":valid")}} und {{CSSXref(":invalid")}} Pseudo-Klassen
