---
title: "HTMLInputElement: capture-Eigenschaft"
short-title: capture
slug: Web/API/HTMLInputElement/capture
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ApiRef("HTML DOM")}}

Die **`capture`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle spiegelt das [`capture`](/de/docs/Web/HTML/Attributes/capture)-Attribut des {{HTMLElement("input")}}-Elements wider. Nur relevant für das [`<input>` vom Typ `file`](/de/docs/Web/HTML/Element/input/file), spezifizieren die Eigenschaft und das Attribut, ob eine neue Datei von einer benutzerorientierten (`user`) oder nach außen gerichteten (`environment`) Kamera oder Mikrofon erfasst werden soll. Der Dateityp wird durch das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut definiert. Wenn das Attribut nicht ausdrücklich gesetzt ist, ist die `capture`-Eigenschaft ein leerer String.

## Wert

Ein String; allgemein entweder `user` oder `environment`, oder ein leerer String (`""`).

## Beispiel

```js
const inputElement = document.querySelector("avatar");
console.log(inputElement.capture); // the current value of the capture attribute
inputElement.capture = "user"; // sets the capture value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)
- [`HTMLInputElement.multiple`](/de/docs/Web/API/HTMLInputElement/multiple)
- [`HTMLInputElement.accept`](/de/docs/Web/API/HTMLInputElement/accept)
- [`HTMLInputElement.files`](/de/docs/Web/API/HTMLInputElement/files)
- [Dateityp-Spezifikatoren](/de/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File_API)
