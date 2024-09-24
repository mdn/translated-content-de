---
title: "HTMLInputElement: maxLength-Eigenschaft"
short-title: maxLength
slug: Web/API/HTMLInputElement/maxLength
l10n:
  sourceCommit: 2d74302e9ea9c6aef27f02553fa1b421ef6a7e89
---

{{ApiRef("HTML DOM")}}

Die **`maxLength`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle gibt die maximale Anzahl von Zeichen (in UTF-16-Codeeinheiten) an, die in den Wert des {{HTMLElement("input")}}-Elements eingegeben werden dürfen, sowie die maximale Anzahl von Zeichen, die für einen gültigen Wert erlaubt sind. Sie spiegelt das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut des Elements wider. `-1` bedeutet, dass es keine Begrenzung für die Länge des Werts gibt.

> [!NOTE]
> Browser verhindern in der Regel, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Sollte die Länge überschritten werden, wird das Element als ungültig betrachtet und die {{domxref("ValidityState")}}-Eigenschaft {{domxref("ValidityState.tooLong", "tooLong")}} wird auf `true` gesetzt.

## Wert

Eine Zahl, die das `maxlength` des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Gegeben sei der folgende HTML-Code:

```html
<p>
  <label for="password">Your password</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Sie können die `maxLength`-Eigenschaft verwenden, um den `maxlength`-Attributwert des `<input>`-Elements abzurufen oder festzulegen:

```js
const inputElement = document.querySelector("#password");
console.log(`Element's maxLength: ${inputElement.maxLength}`); // "Element's maxlength: 20"
inputElement.maxLength = 18; // updates the element's maxlength attribute value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.minLength")}}
- {{domxref("ValidityState.tooLong")}}
