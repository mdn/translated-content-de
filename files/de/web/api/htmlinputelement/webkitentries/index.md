---
title: "HTMLInputElement: webkitEntries-Eigenschaft"
short-title: webkitEntries
slug: Web/API/HTMLInputElement/webkitEntries
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`webkitEntries`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle enthält ein Array von Dateisystemeinträgen (als Objekte basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)), die Dateien und/oder Verzeichnisse darstellen, die vom Benutzer mit einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt wurden, allerdings nur, wenn diese Auswahl per Drag-and-Drop erfolgt ist: Die Auswahl einer Datei im Dialogfenster lässt die Eigenschaft leer.

Das Array kann nur Verzeichnisse enthalten, wenn die [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)-Eigenschaft `true` ist. Dies bedeutet, dass das `<input>`-Element so konfiguriert wurde, dass es dem Benutzer erlaubt, Verzeichnisse auszuwählen.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitEntries` genannt aufgrund ihrer Ursprünge als API spezifisch für Google Chrome. Es ist wahrscheinlich, dass sie eines Tages umbenannt wird.

## Wert

Ein Array von Objekten basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), von denen jedes eine Datei darstellt, die im {{HTMLElement("input")}}-Element ausgewählt wurde. Genauer gesagt, werden Dateien durch [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte dargestellt und, wenn erlaubt, Verzeichnisse durch [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte.

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

Jedes Mal, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis eintritt, iteriert dieser Code über die ausgewählten Dateien, erhält ihre [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-basierten Objekte und agiert auf diese.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)
