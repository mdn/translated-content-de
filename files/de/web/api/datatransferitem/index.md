---
title: DataTransferItem
slug: Web/API/DataTransferItem
l10n:
  sourceCommit: 59d87e8756161420f3f40dc554562858f4427e72
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransferItem`**-Objekt repräsentiert ein Drag-Daten-Element. Während einer _Drag-Operation_ hat jedes [`DragEvent`](/de/docs/Web/API/DragEvent) eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die eine [`list`](/de/docs/Web/API/DataTransferItemList) von Drag-Daten-Elementen enthält. Jedes Element in der Liste ist ein `DataTransferItem`-Objekt.

`DataTransferItem` wurde ursprünglich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) konzipiert und wird immer noch im HTML-Drag-and-Drop-Abschnitt spezifiziert. Es wird jetzt jedoch auch von anderen APIs verwendet, wie zum Beispiel [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer). Die Dokumentation von `DataTransferItem` wird sich hauptsächlich auf die Nutzung in Drag-and-Drop-Operationen konzentrieren. Für die Nutzung von `DataTransferItem` in diesen anderen Kontexten sollten Sie die Dokumentation der jeweiligen APIs konsultieren.

Dieses Interface hat keinen Konstruktor.

## Instanz-Eigenschaften

- [`DataTransferItem.kind`](/de/docs/Web/API/DataTransferItem/kind) {{ReadOnlyInline}}
  - : Der _Typ_ des Drag-Daten-Elements, entweder `string` oder `file`.
- [`DataTransferItem.type`](/de/docs/Web/API/DataTransferItem/type) {{ReadOnlyInline}}
  - : Der Typ des Drag-Daten-Elements, typischerweise ein MIME-Typ.

## Instanz-Methoden

- [`DataTransferItem.getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile)
  - : Gibt das [`File`](/de/docs/Web/API/File)-Objekt zurück, das mit dem Drag-Daten-Element verknüpft ist (oder null, wenn das Drag-Element keine Datei ist).
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt wird, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) erfüllt wird, wenn das gezogene Element ein Verzeichnis ist.
- [`DataTransferItem.getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString)
  - : Ruft den angegebenen Callback mit dem String des Drag-Daten-Elements als Argument auf.
- [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry)
  - : Gibt ein Objekt zurück, das auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basiert und den Eintrag der ausgewählten Datei im Dateisystem repräsentiert. Dies ist im Allgemeinen entweder ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt.

## Beispiel

Alle Methoden und Eigenschaften dieses Interfaces haben ihre eigene Referenzseite, und jede Referenzseite enthält ein Beispiel für deren Nutzung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
