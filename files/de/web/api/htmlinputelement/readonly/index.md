---
title: "HTMLInputElement: readOnly-Eigenschaft"
short-title: readOnly
slug: Web/API/HTMLInputElement/readOnly
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

Die **`readOnly`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle zeigt an, dass der Benutzer den Wert des {{htmlelement("input")}} nicht ändern kann. Sie spiegelt das booleanische Attribut [`readonly`](/de/docs/Web/HTML/Element/input#readonly) des {{htmlelement("input")}}-Elements wider; sie gibt `true` zurück, wenn das Attribut vorhanden ist, und `false`, wenn es weggelassen wird.

Im Gegensatz zu einem Formularelement mit einer `true` [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled) Eigenschaft hindert ein `true` `readOnly`-Eigenschaftswert den Benutzer nicht daran, im Kontrollfeld zu klicken oder zu markieren.

Während das HTML-Attribut `readonly` ignoriert wird, wenn der Typ `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, `submit`, `reset`, `button` und `image` ist, ist die `readOnly`-Eigenschaft für diese Eingabetypen `true`, wenn das Attribut vorhanden ist, andernfalls `false`.

## Wert

Ein Boolean.

## Beispiele

```js
const inputElement = document.getElementById("total");
console.log(inputElement.readOnly);
inputElement.readOnly = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
- {{cssxref(":read-only")}} Pseudo-Klasse
