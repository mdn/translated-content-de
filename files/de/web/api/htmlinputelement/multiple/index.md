---
title: "HTMLInputElement: multiple Eigenschaft"
short-title: multiple
slug: Web/API/HTMLInputElement/multiple
l10n:
  sourceCommit: 0439b2541593acbc358e921ff9ff0bf6510c81e3
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.multiple`** Eigenschaft gibt an, ob ein Eingabefeld mehr als einen Wert haben kann. Derzeit unterstützt Firefox `multiple` nur für `<input type="file">`.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<input id="myfileinput" type="file" multiple />
```

```js
let fileInput = document.getElementById("myfileinput");

if (fileInput.multiple) {
  // Durchlaufen der fileInput.files
  for (const file of fileInput.files) {
    // Aktion an einer Datei ausführen
  }
  // Nur eine Datei verfügbar
} else {
  let [file] = fileInput.files;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [FileList](/de/docs/Web/API/FileList)
- [Bug 523771](https://bugzil.la/523771) - Unterstützung \<input type=file multiple>
