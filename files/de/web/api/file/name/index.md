---
title: "File: name-Eigenschaft"
short-title: name
slug: Web/API/File/name
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`name`** des [`File`](/de/docs/Web/API/File)-Interfaces gibt den Namen der Datei zurück, die durch ein [`File`](/de/docs/Web/API/File)-Objekt dargestellt wird. Aus Sicherheitsgründen ist der Pfad in dieser Eigenschaft ausgeschlossen.

## Wert

Ein String, der den Namen der Datei ohne Pfad enthält, z. B. "My Resume.rtf".

## Beispiele

### HTML

```html
<input type="file" id="filepicker" multiple />
<div>
  <p>List of selected files:</p>
  <ul id="output"></ul>
</div>
```

### JavaScript

```js
const output = document.getElementById("output");
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
  const files = event.target.files;
  output.textContent = "";

  for (const file of files) {
    const li = document.createElement("li");
    li.textContent = file.name;
    output.appendChild(li);
  }
});
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
