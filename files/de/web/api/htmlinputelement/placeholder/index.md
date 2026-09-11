---
title: "HTMLInputElement: placeholder-Eigenschaft"
short-title: placeholder
slug: Web/API/HTMLInputElement/placeholder
l10n:
  sourceCommit: 61986210fa785119daed1c121491fef615ec2bc8
---

{{ APIRef("HTML DOM") }}

Die **`placeholder`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle stellt einen Hinweis für die Benutzenden dar, was in das Steuerelement eingegeben werden kann. Sie spiegelt das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des {{htmlelement("input")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```js
const inputElement = document.getElementById("phone");
console.log(inputElement.placeholder);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- Pseudo-Element {{cssxref("::placeholder")}}
- Pseudo-Klasse {{CSSXref(":placeholder-shown")}}
