---
title: "HTMLInputElement: webkitEntries Eigenschaft"
short-title: webkitEntries
slug: Web/API/HTMLInputElement/webkitEntries
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`webkitEntries`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle enthält ein Array von Dateisystemeinträgen (als Objekte basierend auf {{domxref("FileSystemEntry")}}), die Dateien und/oder Verzeichnisse repräsentieren, die vom Benutzer über ein {{HTMLElement("input")}}-Element des Typs `file` ausgewählt wurden, jedoch nur, wenn diese Auswahl über Drag-and-Drop vorgenommen wurde: Die Auswahl einer Datei im Dialog lässt die Eigenschaft leer.

Das Array kann nur Verzeichnisse enthalten, wenn die Eigenschaft {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}} `true` ist. Dies bedeutet, dass das `<input>`-Element so konfiguriert wurde, dass es dem Benutzer erlaubt, Verzeichnisse auszuwählen.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitEntries` genannt, da sie ihren Ursprung in einer Google Chrome-spezifischen API hat. Es ist wahrscheinlich, dass sie irgendwann umbenannt wird.

## Wert

Ein Array von Objekten basierend auf {{domxref("FileSystemEntry")}}, wobei jedes einen ausgewählten File im {{HTMLElement("input")}}-Element repräsentiert. Genauer gesagt werden Dateien durch {{domxref("FileSystemFileEntry")}}-Objekte repräsentiert, und, wenn sie erlaubt sind, Verzeichnisse durch {{domxref("FileSystemDirectoryEntry")}}-Objekte.

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

Jedes Mal, wenn ein {{domxref("HTMLElement/change_event", "change")}}-Ereignis auftritt, durchläuft dieser Code die ausgewählten Dateien, erhält ihre {{domxref("FileSystemEntry")}}-basierten Objekte und führt Aktionen darüber aus.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("HTMLInputElement")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystem")}}
