---
title: DataTransferItem
slug: Web/API/DataTransferItem
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransferItem`**-Objekt repräsentiert ein Ziehdaten-Element. Während eines _Ziehvorgangs_ hat jedes {{domxref("DragEvent")}} eine {{domxref("DragEvent.dataTransfer","dataTransfer")}}-Eigenschaft, die eine {{domxref("DataTransferItemList","Liste")}} von Ziehdaten-Elementen enthält. Jedes Element in der Liste ist ein `DataTransferItem`-Objekt.

`DataTransferItem` wurde primär für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) entwickelt und ist immer noch im HTML-Bereich für Ziehen und Ablegen spezifiziert. Mittlerweile wird es auch von anderen APIs, wie {{domxref("ClipboardEvent.clipboardData")}} und {{domxref("InputEvent.dataTransfer")}}, verwendet. Die Dokumentation von `DataTransferItem` wird sich hauptsächlich mit der Nutzung in Ziehen-und-Ablegen-Operationen befassen; für die Verwendung von `DataTransferItem` in diesen Kontexten sollten Sie die Dokumentation der anderen APIs konsultieren.

Diese Schnittstelle hat keinen Konstruktor.

## Instanzeigenschaften

- {{domxref("DataTransferItem.kind")}} {{ReadOnlyInline}}
  - : Die _Art_ des Ziehdaten-Elements, `string` oder `file`.
- {{domxref("DataTransferItem.type")}} {{ReadOnlyInline}}
  - : Der Typ des Ziehdaten-Elements, typischerweise ein MIME-Typ.

## Instanzmethoden

- {{domxref("DataTransferItem.getAsFile()")}}
  - : Gibt das mit dem Ziehdaten-Element verknüpfte {{domxref("File")}}-Objekt zurück (oder null, wenn das Ziehelement keine Datei ist).
- {{domxref("DataTransferItem.getAsFileSystemHandle()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref('FileSystemFileHandle')}} zurück, wenn das gezogene Element eine Datei ist, oder ein {{domxref('FileSystemDirectoryHandle')}} zurück, wenn das gezogene Element ein Verzeichnis ist.
- {{domxref("DataTransferItem.getAsString()")}}
  - : Ruft den angegebenen Callback mit der Zeichenkette des Ziehdaten-Elements als Argument auf.
- {{domxref("DataTransferItem.webkitGetAsEntry()")}}
  - : Gibt ein Objekt basierend auf {{domxref("FileSystemEntry")}} zurück, das den gewählten Datei-Eintrag im Dateisystem repräsentiert. In der Regel handelt es sich hierbei entweder um ein {{domxref("FileSystemFileEntry")}}- oder {{domxref("FileSystemDirectoryEntry")}}-Objekt.

## Beispiel

Alle Methoden und Eigenschaften dieser Schnittstelle haben ihre eigene Referenzseite und jede Referenzseite enthält ein Beispiel für ihre Verwendung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
