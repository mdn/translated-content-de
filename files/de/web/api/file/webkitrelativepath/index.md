---
title: "File: webkitRelativePath-Eigenschaft"
short-title: webkitRelativePath
slug: Web/API/File/webkitRelativePath
l10n:
  sourceCommit: 367b982b93c07f7f99e7bb768a6bf326fa5198e6
---

{{APIRef("File and Directory Entries API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`webkitRelativePath`**-Eigenschaft des [`File`](/de/docs/Web/API/File)-Interfaces
enthält einen String, der den relativen Pfad der Datei zu dem vom Benutzer ausgewählten Verzeichnis in einem {{HTMLElement("input")}}-Element mit gesetztem [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut angibt.

## Wert

Ein String, der den Pfad der Datei relativ zu dem vom Benutzer ausgewählten übergeordneten Verzeichnis enthält.

## Beispiel

In diesem Beispiel wird ein Verzeichnis-Auswahldialog angezeigt, der es dem Benutzer ermöglicht, ein oder mehrere Verzeichnisse auszuwählen. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis eintritt, wird eine Liste aller Dateien innerhalb der ausgewählten Verzeichnishierarchien erzeugt und angezeigt.

### HTML

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
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
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
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
