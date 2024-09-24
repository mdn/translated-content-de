---
title: "Datei: webkitRelativePath-Eigenschaft"
short-title: webkitRelativePath
slug: Web/API/File/webkitRelativePath
l10n:
  sourceCommit: 367b982b93c07f7f99e7bb768a6bf326fa5198e6
---

{{APIRef("File and Directory Entries API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`webkitRelativePath`** der {{domxref("File")}}-Schnittstelle
enthält einen String, der den Dateipfad relativ zu dem vom Benutzer im
{{HTMLElement("input")}} Element ausgewählten Verzeichnis angibt, wenn dessen
[`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut gesetzt ist.

## Wert

Ein String, der den Pfad der Datei relativ zu dem übergeordneten
Verzeichnis enthält, das der Benutzer ausgewählt hat.

## Beispiel

In diesem Beispiel wird ein Verzeichnis-Auswahlfeld präsentiert, das dem Benutzer ermöglicht, ein oder mehrere Verzeichnisse auszuwählen. Wenn das {{domxref("HTMLElement/change_event", "change")}}-Ereignis auftritt, wird eine Liste aller Dateien innerhalb der ausgewählten Verzeichnishierarchien erstellt und angezeigt.

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
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("HTMLInputElement.webkitdirectory")}}
