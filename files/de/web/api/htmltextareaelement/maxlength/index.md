---
title: "HTMLTextAreaElement: maxLength-Eigenschaft"
short-title: maxLength
slug: Web/API/HTMLTextAreaElement/maxLength
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{ApiRef("HTML DOM")}}

Die **`maxLength`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle gibt die maximale Anzahl von Zeichen (in UTF-16-Codeeinheiten) an, die für den Wert des {{HTMLElement("textarea")}}-Elements eingegeben werden dürfen, sowie die maximale Anzahl von Zeichen, damit der Wert gültig ist. Sie spiegelt das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/textarea#maxlength)-Attribut des Elements wider. `-1` bedeutet, dass es keine Begrenzung der Wertlänge gibt.

> [!NOTE]
> Browser verhindern generell, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Sollten dennoch mehr Zeichen eingegeben werden, wird das Element als ungültig betrachtet und die [`tooLong`](/de/docs/Web/API/ValidityState/tooLong)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wird `true` sein.

## Wert

Eine Zahl, die das `maxlength` des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Angenommen, der folgende HTML-Code:

```html
<p>
  <label for="comment">Comment</label>
  <textarea id="comment" minlength="10" maxlength="200"></textarea>
</p>
```

Sie können die `maxLength`-Eigenschaft verwenden, um den Wert des `maxlength`-Attributs des `<textarea>` abzurufen oder festzulegen:

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
