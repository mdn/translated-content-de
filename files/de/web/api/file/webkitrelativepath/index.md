---
title: "Datei: webkitRelativePath-Eigenschaft"
short-title: webkitRelativePath
slug: Web/API/File/webkitRelativePath
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("File and Directory Entries API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`webkitRelativePath`**-Eigenschaft der [`File`](/de/docs/Web/API/File) Schnittstelle
enthält eine Zeichenkette, die den Pfad der Datei relativ zu dem
vom Benutzer in einem {{HTMLElement("input")}} Element ausgewählten Verzeichnis angibt, wenn dessen
[`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input#webkitdirectory) Attribut gesetzt ist.

## Wert

Eine Zeichenkette, die den Pfad der Datei relativ zu dem
vom Benutzer ausgewählten übergeordneten Verzeichnis enthält.

## Beispiel

In diesem Beispiel wird ein Verzeichnis-Auswahldialog präsentiert, der es dem Benutzer ermöglicht, ein oder mehrere
Verzeichnisse auszuwählen. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auftritt, wird eine Liste aller Dateien erstellt und angezeigt, die in den ausgewählten Verzeichnishierarchien enthalten sind.

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
