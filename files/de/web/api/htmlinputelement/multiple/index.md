---
title: "HTMLInputElement: multiple-Eigenschaft"
short-title: multiple
slug: Web/API/HTMLInputElement/multiple
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.multiple`**-Eigenschaft gibt an, ob ein Eingabefeld mehr als einen Wert haben kann. Firefox unterstützt derzeit `multiple` nur für `<input type="file">`.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<input id="my-file-input" type="file" multiple />
```

```js
let fileInput = document.getElementById("my-file-input");

if (fileInput.multiple) {
  // Loop fileInput.files
  for (const file of fileInput.files) {
    // Perform action on one file
  }
  // Only one file available
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
- [Bug 523771](https://bugzil.la/523771) - Support \<input type=file multiple>
