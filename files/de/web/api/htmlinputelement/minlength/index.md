---
title: "HTMLInputElement: minLength-Eigenschaft"
short-title: minLength
slug: Web/API/HTMLInputElement/minLength
l10n:
  sourceCommit: 2d74302e9ea9c6aef27f02553fa1b421ef6a7e89
---

{{ApiRef("HTML DOM")}}

Die **`minLength`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt die minimale Anzahl von Zeichen (in UTF-16-Code-Einheiten) an, die für den Wert des {{HTMLElement("input")}}-Elements erforderlich sind, um gültig zu sein. Sie spiegelt das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut des Elements wider. `-1` bedeutet, dass es keine Mindestlängenanforderung gibt.

> [!NOTE]
> Wenn das Eingabefeld einen Wert hat und dieser Wert weniger Zeichen enthält, als das `minlength`-Attribut erfordert, wird das Element als ungültig betrachtet und die `[`ValidityState`](/de/docs/Web/API/ValidityState)`-Objekteigenschaft [`tooShort`](/de/docs/Web/API/ValidityState/tooShort) ist `true`.

## Wert

Eine Zahl, die das `minlength`-Attribut des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Angenommen, folgendes HTML ist gegeben:

```html
<p>
  <label for="password">Your password</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Sie können die `minLength`-Eigenschaft verwenden, um den Wert des `minlength`-Attributs des `<input>` abzurufen oder zu setzen:

```js
const inputElement = document.querySelector("#password");
console.log(`Element's minLength: ${inputElement.minLength}`); // "Element's minlength: 8"
inputElement.minLength = 12; // updates the element's minlength attribute value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)
- [`ValidityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)
