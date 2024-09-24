---
title: "HTMLInputElement: readOnly Eigenschaft"
short-title: readOnly
slug: Web/API/HTMLInputElement/readOnly
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

Die **`readOnly`**-Eigenschaft des {{DOMxRef("HTMLInputElement")}}-Interfaces zeigt an, dass der Benutzer den Wert des {{htmlelement("input")}}-Elements nicht ändern kann. Sie spiegelt das boolean Attribut [`readonly`](/de/docs/Web/HTML/Element/input#readonly) des {{htmlelement("input")}}-Elements wider; sie gibt `true` zurück, wenn das Attribut vorhanden ist, und `false`, wenn es fehlt.

Im Gegensatz zu einem Steuerelement mit einer auf wahr gesetzten {{domxref("HTMLInputElement.disabled", "disabled")}}-Eigenschaft verhindert ein wahrer `readOnly`-Eigenschaftswert nicht, dass der Benutzer im Steuerelement klickt oder auswählt.

Während das HTML `readonly`-Attribut ignoriert wird, wenn der Typ `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, `submit`, `reset`, `button` und `image` ist, ist die `readOnly`-Eigenschaft bei diesen Eingabetypen `true`, wenn das Attribut vorhanden ist, andernfalls `false`.

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
- {{DOMXref("HTMLInputElement.disabled")}}
- {{cssxref(":read-only")}} Pseudo-Klasse
