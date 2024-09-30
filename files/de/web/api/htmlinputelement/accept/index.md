---
title: "HTMLInputElement: accept-Eigenschaft"
short-title: accept
slug: Web/API/HTMLInputElement/accept
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ApiRef("HTML DOM")}}

Die **`accept`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle spiegelt das `accept`-Attribut des {{HTMLElement("input")}}-Elements wider, in der Regel eine kommagetrennte Liste einzigartiger Dateityp-Spezifikatoren, die einen Hinweis auf den erwarteten Dateityp für ein [`<input>` vom Typ `file`](/de/docs/Web/HTML/Element/input/file) bieten. Wenn das Attribut nicht explizit gesetzt ist, ist die `accept`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `accept`-Wert des Elements oder einen leeren String repräsentiert, wenn kein `accept` explizit gesetzt ist.

## Beispiel

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.accept); // the current value of the accept attribute
inputElement.accept = ".doc,.docx,.xml,application/msword"; // sets the accept value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)
- [`HTMLInputElement.multiple`](/de/docs/Web/API/HTMLInputElement/multiple)
- [`HTMLInputElement.capture`](/de/docs/Web/API/HTMLInputElement/capture)
- [Dateityp-Spezifikatoren](/de/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File_API)
