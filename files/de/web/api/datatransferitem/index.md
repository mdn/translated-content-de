---
title: DataTransferItem
slug: Web/API/DataTransferItem
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransferItem`**-Objekt repräsentiert ein Datenobjekt beim Ziehen. Während einer _Zieh-Operation_ hat jedes [`DragEvent`](/de/docs/Web/API/DragEvent) eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die eine [`Liste`](/de/docs/Web/API/DataTransferItemList) von Datenobjekten beim Ziehen enthält. Jedes Element in der Liste ist ein `DataTransferItem`-Objekt.

`DataTransferItem` wurde ursprünglich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) entwickelt und ist nach wie vor im HTML-Bereich des Ziehens-und-Ablegens spezifiziert, wird aber jetzt auch von anderen APIs verwendet, wie z.B. [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer). Die Dokumentation von `DataTransferItem` wird sich hauptsächlich auf seine Nutzung in Zieh-Operationen konzentrieren, und Sie sollten die Dokumentationen der anderen APIs für die Nutzung von `DataTransferItem` in diesen Kontexten konsultieren.

Dieses Interface hat keinen Konstruktor.

## Instanz-Eigenschaften

- [`DataTransferItem.kind`](/de/docs/Web/API/DataTransferItem/kind) {{ReadOnlyInline}}
  - : Die _Art_ des Datenobjekts beim Ziehen, `string` oder `file`.
- [`DataTransferItem.type`](/de/docs/Web/API/DataTransferItem/type) {{ReadOnlyInline}}
  - : Der Typ des Datenobjekts beim Ziehen, typischerweise ein MIME-Typ.

## Instanz-Methoden

- [`DataTransferItem.getAsFile()`](/de/docs/Web/API/DataTransferItem/getAsFile)
  - : Gibt das [`File`](/de/docs/Web/API/File)-Objekt zurück, das mit dem Datenobjekt beim Ziehen verknüpft ist (oder null, wenn das Zieh-Objekt keine Datei ist).
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) {{Experimental_Inline}}
  - : Gibt einen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurück, wenn das gezogene Objekt eine Datei ist, oder einen [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Objekt ein Verzeichnis ist.
- [`DataTransferItem.getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString)
  - : Ruft den angegebenen Callback mit dem String des Datenobjekts beim Ziehen als Argument auf.
- [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry)
  - : Gibt ein Objekt basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zurück, das den Eintrag der ausgewählten Datei im Dateisystem repräsentiert. Dies ist im Allgemeinen entweder ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt.

## Beispiel

Alle Methoden und Eigenschaften dieses Interfaces haben ihre eigene Referenzseite, und jede Referenzseite enthält ein Beispiel für deren Nutzung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
