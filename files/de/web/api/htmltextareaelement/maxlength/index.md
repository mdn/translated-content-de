---
title: "HTMLTextAreaElement: maxLength-Eigenschaft"
short-title: maxLength
slug: Web/API/HTMLTextAreaElement/maxLength
l10n:
  sourceCommit: 8cf200c4039f6399b6696fc710bee1c4b395d401
---

{{ApiRef("HTML DOM")}}

Die **`maxLength`**-Eigenschaft der {{domxref("HTMLTextAreaElement")}}-Schnittstelle gibt die maximale Anzahl von Zeichen (in UTF-16-Codeeinheiten) an, die für den Wert des {{HTMLElement("textarea")}}-Elements eingegeben werden dürfen, sowie die maximale Anzahl von Zeichen, damit der Wert gültig ist. Sie spiegelt das [`maxlength`](/de/docs/Web/HTML/Element/textarea#maxlength)-Attribut des Elements wider. `-1` bedeutet, dass es keine Begrenzung für die Länge des Werts gibt.

> [!NOTE]
> Browser verhindern in der Regel, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Sollte die Länge überschritten werden, gilt das Element als ungültig und die {{domxref("ValidityState")}}-Eigenschaft {{domxref("ValidityState.tooLong", "tooLong")}} wird auf `true` gesetzt.

## Wert

Eine Zahl, die das `maxlength`-Attribut des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Ausgehend von folgendem HTML:

```html
<p>
  <label for="comment">Comment</label>
  <textarea id="comment" minlength="10" maxlength="200" /></textarea>
</p>
```

Sie können die `maxLength`-Eigenschaft verwenden, um den `maxlength`-Attributwert des `<textarea>` zu ermitteln oder festzulegen:

```js
const textareaElement = document.querySelector("#comment");
console.log(`Element's maxLength: ${textareaElement.maxLength}`); // "Element's maxlength: 200"
textareaElement.maxLength = 220; // aktualisiert den maxlength-Attributwert des Elements
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTextAreaElement.value")}}
- {{domxref("HTMLTextAreaElement.minLength")}}
- {{domxref("ValidityState.tooLong")}}
