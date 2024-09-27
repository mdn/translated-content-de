---
title: "Datei: webkitRelativePath-Eigenschaft"
short-title: webkitRelativePath
slug: Web/API/File/webkitRelativePath
l10n:
  sourceCommit: 367b982b93c07f7f99e7bb768a6bf326fa5198e6
---

{{APIRef("File and Directory Entries API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`webkitRelativePath`** des [`File`](/de/docs/Web/API/File)-Interfaces
enthält einen String, der den relativen Pfad der Datei zum
vom Benutzer in einem {{HTMLElement("input")}}-Element ausgewählten Verzeichnis angibt, bei dem das
[`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut gesetzt ist.

## Wert

Ein String, der den Pfad der Datei relativ zum vom Benutzer ausgewählten übergeordneten
Verzeichnis enthält.

## Beispiel

In diesem Beispiel wird ein Verzeichnisauswahlfeld angezeigt, das es dem Benutzer ermöglicht, ein oder mehrere
Verzeichnisse auszuwählen. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auftritt, wird eine Liste aller Dateien erstellt und angezeigt, die in den ausgewählten Verzeichnishierarchien enthalten sind.

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
