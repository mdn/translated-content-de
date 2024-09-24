---
title: "HTMLInputElement: capture-Eigenschaft"
short-title: capture
slug: Web/API/HTMLInputElement/capture
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ApiRef("HTML DOM")}}

Die **`capture`**-Eigenschaft des {{domxref("HTMLInputElement")}} Interfaces spiegelt das {{HTMLElement("input")}}-Element-Attribut [`capture`](/de/docs/Web/HTML/Attributes/capture) wider. Nur relevant für [`<input>` vom Typ `file`](/de/docs/Web/HTML/Element/input/file), spezifizieren sowohl die Eigenschaft als auch das Attribut, ob eine neue Datei von einer benutzerseitigen (`user`) oder außen gerichteten (`environment`) Kamera oder Mikrofon erfasst werden soll. Der Dateityp wird durch das [`accept`](/de/docs/Web/HTML/Attributes/accept) Attribut definiert. Wenn das Attribut nicht explizit gesetzt ist, ist die `capture`-Eigenschaft ein leerer String.

## Wert

Ein String; in der Regel entweder `user` oder `environment`, oder ein leerer String (`""`).

## Beispiel

```js
const inputElement = document.querySelector("avatar");
console.log(inputElement.capture); // der aktuelle Wert des capture-Attributs
inputElement.capture = "user"; // setzt den capture-Wert
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.type")}}
- {{domxref("HTMLInputElement.multiple")}}
- {{domxref("HTMLInputElement.accept")}}
- {{domxref("HTMLInputElement.files")}}
- [Dateityp-Spezifizierer](/de/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
- [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File_API)
