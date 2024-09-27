---
title: "HTMLInputElement: webkitEntries Eigenschaft"
short-title: webkitEntries
slug: Web/API/HTMLInputElement/webkitEntries
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`webkitEntries`**
Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interface enthält ein Array von Dateisystemeinträgen (als Objekte basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)), die Dateien
und/oder Verzeichnisse darstellen, die vom Benutzer über ein {{HTMLElement("input")}} Element vom Typ `file` ausgewählt wurden, aber nur, wenn diese Auswahl über Drag-and-Drop vorgenommen wurde:
die Auswahl einer Datei im Dialog lässt die Eigenschaft leer.

Das Array kann nur Verzeichnisse enthalten, wenn die
[`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) Eigenschaft
`true` ist. Das bedeutet, dass das `<input>` Element so konfiguriert wurde, dass der Benutzer Verzeichnisse auswählen kann.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitEntries` genannt, weil sie ihren Ursprung als Google Chrome-spezifische API hat. Möglicherweise wird sie eines Tages umbenannt.

## Wert

Ein Array von Objekten basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), wobei jedes Objekt eine Datei darstellt, die im {{HTMLElement("input")}} Element ausgewählt ist. Genauer gesagt, werden Dateien durch [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) Objekte repräsentiert, und, wenn sie erlaubt sind, Verzeichnisse durch [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Objekte.

## Beispiele

Dieses Beispiel zeigt, wie man ein Datei-Auswahl-`<input>`-Element erstellt und die ausgewählten Dateien verarbeitet.

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

```js
document.getElementById("files").addEventListener("change", (event) => {
  event.target.webkitEntries.forEach((entry) => {
    /* do stuff with the entry */
  });
});
```

Jedes Mal, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis eintritt, durchläuft dieser Code die ausgewählten Dateien, erhält ihre auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierenden Objekte und verarbeitet sie.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)
