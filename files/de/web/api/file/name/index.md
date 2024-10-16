---
title: "File: name-Eigenschaft"
short-title: name
slug: Web/API/File/name
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`name`**-Schreibgeschützte Eigenschaft des [`File`](/de/docs/Web/API/File)-Interface gibt den Namen der Datei zurück, die durch ein [`File`](/de/docs/Web/API/File)-Objekt dargestellt wird. Aus Sicherheitsgründen ist der Pfad in dieser Eigenschaft ausgeschlossen.

## Wert

Ein String, der den Namen der Datei ohne Pfad enthält, wie zum Beispiel "Mein Lebenslauf.rtf".

## Beispiele

### HTML

```html
<input type="file" id="file-picker" multiple />
<div>
  <p>List of selected files:</p>
  <ul id="output"></ul>
</div>
```

### JavaScript

```js
const output = document.getElementById("output");
const filePicker = document.getElementById("file-picker");

filePicker.addEventListener("change", (event) => {
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

- [Verwendung von Dateien in Web-Anwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
