---
title: "HTMLInputElement: accept-Eigenschaft"
short-title: accept
slug: Web/API/HTMLInputElement/accept
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`accept`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces spiegelt das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut des {{HTMLElement("input")}}-Elements wider. Dies ist im Allgemeinen eine durch Kommas getrennte Liste einzigartiger Dateityp-Spezifizierer, die einen Hinweis auf den erwarteten Dateityp für ein [`<input>` vom Typ `file`](/de/docs/Web/HTML/Reference/Elements/input/file) geben. Ist das Attribut nicht explizit gesetzt, ist die `accept`-Eigenschaft ein leerer String.

## Wert

Ein String, der den `accept`-Wert des Elements darstellt oder ein leerer String, wenn kein `accept` explizit festgelegt ist.

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
- [Dateityp-Spezifizierer](/de/docs/Web/HTML/Reference/Elements/input/file#unique_file_type_specifiers)
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File_API)
