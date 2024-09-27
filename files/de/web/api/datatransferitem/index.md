---
title: DataTransferItem
slug: Web/API/DataTransferItem
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransferItem`**-Objekt repräsentiert ein Drag-Daten-Element. Während einer _Drag-Operation_ hat jedes [`DragEvent`](/de/docs/Web/API/DragEvent) eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die eine [`list`](/de/docs/Web/API/DataTransferItemList) von Drag-Daten-Elementen enthält. Jedes Element in der Liste ist ein `DataTransferItem`-Objekt.

`DataTransferItem` wurde hauptsächlich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) entwickelt und wird immer noch im HTML-Bereich für Drag-and-Drop spezifiziert, aber es wird jetzt auch von anderen APIs wie [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) verwendet. Die Dokumentation von `DataTransferItem` behandelt hauptsächlich die Nutzung in Drag-and-Drop-Operationen, und Sie sollten sich auf die Dokumentation der anderen APIs beziehen, um die Nutzung von `DataTransferItem` in diesen Kontexten zu verstehen.

Dieses Interface hat keinen Konstruktor.

## Instanz-Eigenschaften

- [`DataTransferItem.kind`](/de/docs/Web/API/DataTransferItem/kind) {{ReadOnlyInline}}
  - : Die _Art_ des Drag-Daten-Elements, `string` oder `file`.
- [`DataTransferItem.type`](/de/docs/Web/API/DataTransferItem/type) {{ReadOnlyInline}}
  - : Der Typ des Drag-Daten-Elements, typischerweise ein MIME-Typ.

## Instanz-Methoden

- [`DataTransferItem.getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile)
  - : Gibt das [`File`](/de/docs/Web/API/File)-Objekt zurück, das mit dem Drag-Daten-Element verknüpft ist (oder null, wenn das Drag-Element keine Datei ist).
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) {{Experimental_Inline}}
  - : Gibt ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurück, wenn das gezogene Element eine Datei ist, oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.
- [`DataTransferItem.getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString)
  - : Ruft den angegebenen Callback mit dem Drag-Daten-Element-String als Argument auf.
- [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry)
  - : Gibt ein auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierendes Objekt zurück, das den Eintrag der ausgewählten Datei im Dateisystem repräsentiert. Dies wird im Allgemeinen entweder ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt sein.

## Beispiel

Alle Methoden und Eigenschaften dieses Interfaces haben eine eigene Referenzseite, und jede Referenzseite enthält ein Beispiel für deren Verwendung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
