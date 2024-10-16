---
title: "Datei: webkitRelativePath-Eigenschaft"
short-title: webkitRelativePath
slug: Web/API/File/webkitRelativePath
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("File and Directory Entries API")}}{{AvailableInWorkers}}

Die **`webkitRelativePath`** schreibgeschützte Eigenschaft des [`File`](/de/docs/Web/API/File)-Interfaces
enthält einen String, der den Pfad der Datei relativ zu dem Verzeichnis angibt, das der Benutzer in einem {{HTMLElement("input")}}-Element mit gesetztem [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut ausgewählt hat.

## Wert

Ein String, der den Pfad der Datei relativ zu dem übergeordneten Verzeichnis enthält, das der Benutzer ausgewählt hat.

## Beispiel

In diesem Beispiel wird ein Verzeichnis-Auswahlfenster dargestellt, das den Benutzer ein oder mehrere Verzeichnisse auswählen lässt. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis eintritt, wird eine Liste aller Dateien innerhalb der ausgewählten Verzeichnishierarchien erstellt und angezeigt.

### HTML

```html
<input type="file" id="file-picker" name="fileList" webkitdirectory multiple />
<output id="output"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const output = document.getElementById("output");
const filePicker = document.getElementById("file-picker");

filePicker.addEventListener("change", (event) => {
  const files = event.target.files;

  for (const file of files) {
    output.textContent += `${file.webkitRelativePath}\n`;
  }
});
```

### Ergebnis

{{EmbedLiveSample('Example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)
- [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)
