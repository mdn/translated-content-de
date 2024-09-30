---
title: "HTMLInputElement: webkitEntries-Eigenschaft"
short-title: webkitEntries
slug: Web/API/HTMLInputElement/webkitEntries
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`webkitEntries`**
Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle enthält ein Array von Dateisystemeinträgen (als Objekte basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)), welche die vom Benutzer ausgewählten Dateien und/oder Verzeichnisse darstellen, wenn ein {{HTMLElement("input")}}-Element vom Typ `file` verwendet wird, wobei die Auswahl durch Drag-and-Drop erfolgt ist: die Auswahl einer Datei im Dialogfeld lässt die Eigenschaft leer.

Das Array kann nur Verzeichnisse enthalten, wenn die
[`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)-Eigenschaft auf
`true` gesetzt ist. Das bedeutet, dass das `<input>`-Element so konfiguriert wurde, dass der Benutzer Verzeichnisse auswählen kann.

> [!NOTE]
> Diese Eigenschaft heißt `webkitEntries` in der Spezifikation aufgrund ihrer Herkunft als Google Chrome-spezifische API. Es ist wahrscheinlich, dass sie eines Tages umbenannt wird.

## Wert

Ein Array von Objekten basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), wobei jedes Objekt eine Datei repräsentiert, die im {{HTMLElement("input")}}-Element ausgewählt wurde. Genauer gesagt, werden Dateien durch [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte dargestellt, und, wenn erlaubt, Verzeichnisse durch [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte.

## Beispiele

Dieses Beispiel zeigt, wie man ein Dateiauswahl-`<input>`-Element erstellt und die ausgewählten Dateien verarbeitet.

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

Jedes Mal, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auftritt, durchläuft dieser Code die ausgewählten Dateien, erhält ihre auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierenden Objekte und verarbeitet sie.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File und Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)
