---
title: "HTMLTextAreaElement: maxLength-Eigenschaft"
short-title: maxLength
slug: Web/API/HTMLTextAreaElement/maxLength
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`maxLength`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die maximale Anzahl von Zeichen (in UTF-16 Code-Einheiten) an, die für den Wert des {{HTMLElement("textarea")}}-Elements eingegeben werden dürfen, und die maximale Anzahl von Zeichen, die für den Wert gültig sind. Sie spiegelt das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/textarea#maxlength)-Attribut des Elements wider. `-1` bedeutet, dass es keine Begrenzung für die Länge des Wertes gibt.

> [!NOTE]
> Browser verhindern in der Regel, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut zulässt. Sollte die Länge zu groß sein, gilt das Element als ungültig und die [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekteigenschaft [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) wird `true` sein.

## Wert

Eine Zahl, die das `maxlength` des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Angenommen, folgendes HTML:

```html
<p>
  <label for="comment">Comment</label>
  <textarea id="comment" minlength="10" maxlength="200" /></textarea>
</p>
```

Sie können die `maxLength`-Eigenschaft verwenden, um den Wert des `maxlength`-Attributs des `<textarea>` zu erhalten oder festzulegen:

```js
const textareaElement = document.querySelector("#comment");
console.log(`Element's maxLength: ${textareaElement.maxLength}`); // "Element's maxlength: 200"
textareaElement.maxLength = 220; // updates the element's maxlength attribute value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.value`](/de/docs/Web/API/HTMLTextAreaElement/value)
- [`HTMLTextAreaElement.minLength`](/de/docs/Web/API/HTMLTextAreaElement/minLength)
- [`ValidityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)
