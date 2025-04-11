---
title: "HTMLInputElement: maxLength Eigenschaft"
short-title: maxLength
slug: Web/API/HTMLInputElement/maxLength
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`maxLength`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt die maximale Anzahl von Zeichen (in UTF-16-Code-Einheiten) an, die für den Wert des {{HTMLElement("input")}}-Elements eingegeben werden dürfen, sowie die maximale Anzahl von Zeichen, die für die Gültigkeit des Wertes erlaubt sind. Sie entspricht dem [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut des Elements. `-1` bedeutet, dass es keine Begrenzung für die Länge des Wertes gibt.

> [!NOTE]
> In der Regel verhindern Browser, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Sollte die Länge überschritten werden, wird das Element als ungültig betrachtet und die [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt-Eigenschaft [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) wird `true` sein.

## Wert

Eine Zahl, die das `maxlength` des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Angenommen, folgendes HTML:

```html
<p>
  <label for="password">Your password</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Sie können die `maxLength`-Eigenschaft verwenden, um den Wert des `maxlength`-Attributs des `<input>`-Elements abzurufen oder festzulegen:

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

- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.minLength`](/de/docs/Web/API/HTMLInputElement/minLength)
- [`ValidityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)
