---
title: "HTMLTextAreaElement: minLength-Eigenschaft"
short-title: minLength
slug: Web/API/HTMLTextAreaElement/minLength
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`minLength`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle gibt die minimale Anzahl von Zeichen (in UTF-16-Codeeinheiten) an, die für den Wert des {{HTMLElement("textarea")}}-Elements erforderlich ist, um gültig zu sein. Sie spiegelt das [`minlength`](/de/docs/Web/HTML/Reference/Elements/textarea#minlength)-Attribut des Elements wider. `-1` bedeutet, dass es keine Mindestlängenanforderung gibt.

> [!NOTE]
> Wenn das Textarea einen Wert hat und dieser Wert weniger Zeichen als das `minlength`-Attribut erfordert, wird das Element als ungültig betrachtet und die [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekteigenschaft [`tooShort`](/de/docs/Web/API/ValidityState/tooShort) wird `true` sein.

## Wert

Eine Zahl, die das `minlength` des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Bei folgendem HTML:

```html
<p>
  <label for="comment">Comment</label>
  <textarea id="comment" minlength="10" maxlength="200" /></textarea>
</p>
```

Sie können die `minLength`-Eigenschaft verwenden, um den `minlength`-Attributwert des `<textarea>` abzurufen oder festzulegen:

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
