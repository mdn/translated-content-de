---
title: "HTMLInputElement: accept-Eigenschaft"
short-title: accept
slug: Web/API/HTMLInputElement/accept
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ApiRef("HTML DOM")}}

Die **`accept`**-Eigenschaft des {{domxref("HTMLInputElement")}}-Interfaces spiegelt das [`accept`]-Attribut(/de/docs/Web/HTML/Element/input#accept) des {{HTMLElement("input")}}-Elements wider, normalerweise eine durch Kommas getrennte Liste eindeutiger Dateityp-Spezifizierer, die einen Hinweis auf den erwarteten Dateityp für ein [`<input>`-Element vom Typ `file`](/de/docs/Web/HTML/Element/input/file) gibt. Wenn das Attribut nicht explizit gesetzt ist, ist die `accept`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `accept`-Wert des Elements darstellt oder ein leerer String, wenn kein `accept` explizit gesetzt ist.

## Beispiel

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.accept); // der aktuelle Wert des accept-Attributes
inputElement.accept = ".doc,.docx,.xml,application/msword"; // setzt den accept-Wert
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.type")}}
- {{domxref("HTMLInputElement.multiple")}}
- {{domxref("HTMLInputElement.capture")}}
- [Dateityp-Spezifizierer](/de/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File_API)
