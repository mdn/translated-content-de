---
title: "HTMLTextAreaElement: minLength-Eigenschaft"
short-title: minLength
slug: Web/API/HTMLTextAreaElement/minLength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{ApiRef("HTML DOM")}}

Die **`minLength`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die minimale Anzahl von Zeichen (in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}) an, die erforderlich sind, damit der Wert des {{HTMLElement("textarea")}}-Elements gültig ist. Sie spiegelt das [`minlength`](/de/docs/Web/HTML/Reference/Elements/textarea#minlength)-Attribut des Elements wider. `-1` bedeutet, dass es keine Mindestlängenanforderung gibt.

> [!NOTE]
> Wenn das Textarea-Element einen Wert hat und dieser Wert weniger Zeichen als durch das `minlength`-Attribut gefordert enthält, wird das Element als ungültig angesehen und die [`tooShort`](/de/docs/Web/API/ValidityState/tooShort)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wird `true` sein.

## Wert

Eine Zahl, die das `minlength` des Elements angibt, falls vorhanden, oder `-1`.

## Beispiel

Angenommen, folgendes HTML ist gegeben:

```html
<p>
  <label for="comment">Comment</label>
  <textarea id="comment" minlength="10" maxlength="200"></textarea>
</p>
```

Sie können die `minLength`-Eigenschaft verwenden, um den Wert des `minlength`-Attributs des `<textarea>`-Elements abzurufen oder festzulegen:

```js
const textareaElement = document.querySelector("#comment");
console.log(`Element's minLength: ${textareaElement.minLength}`); // "Element's minlength: 10"
textareaElement.minLength = 5; // updates the element's minlength attribute value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.value`](/de/docs/Web/API/HTMLTextAreaElement/value)
- [`HTMLTextAreaElement.maxLength`](/de/docs/Web/API/HTMLTextAreaElement/maxLength)
- [`ValidityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)
