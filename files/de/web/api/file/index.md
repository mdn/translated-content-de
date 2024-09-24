---
title: File
slug: Web/API/File
l10n:
  sourceCommit: 0a24354d9ac0cac0b9c6f47de27cbf758c9f32f4
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`File`** Schnittstelle bietet Informationen über Dateien und ermöglicht es JavaScript auf einer Webseite, deren Inhalt zuzugreifen.

`File` Objekte werden im Allgemeinen aus einem [`FileList`](/de/docs/Web/API/FileList) Objekt abgerufen, das als Ergebnis einer Dateiauswahl durch den Benutzer mittels des {{HTMLElement("input")}} Elements oder aus einem [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt einer Drag-and-Drop-Operation zurückgegeben wird.

Ein `File` Objekt ist eine spezifische Art von [`Blob`](/de/docs/Web/API/Blob) und kann in jedem Kontext verwendet werden, in dem auch ein Blob genutzt werden kann. Insbesondere akzeptieren die folgenden APIs sowohl `Blob`s als auch `File` Objekte:

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
- die [`body`](/de/docs/Web/API/RequestInit#body) Option für [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send)

Sehen Sie sich [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications) für weitere Informationen und Beispiele an.

{{InheritanceDiagram}}

## Konstruktor

- [`File()`](/de/docs/Web/API/File/File)
  - : Gibt ein neu konstruiertes `File` zurück.

## Instanz-Eigenschaften

_Die `File` Schnittstelle erbt auch Eigenschaften von der [`Blob`](/de/docs/Web/API/Blob) Schnittstelle._

- [`File.lastModified`](/de/docs/Web/API/File/lastModified) {{ReadOnlyInline}}
  - : Gibt die letzte Änderungszeit der Datei in Millisekunden seit dem UNIX-Epochendatum (1. Januar 1970 um Mitternacht) zurück.
- [`File.lastModifiedDate`](/de/docs/Web/API/File/lastModifiedDate) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das letzte Änderungsdatum {{JSxRef("Date")}} der durch das `File` Objekt referenzierten Datei zurück.
- [`File.name`](/de/docs/Web/API/File/name) {{ReadOnlyInline}}
  - : Gibt den Namen der durch das `File` Objekt referenzierten Datei zurück.
- [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) {{ReadOnlyInline}}
  - : Gibt den Pfad zurück, relativ zu dem sich die URL der `File` befindet.

## Instanz-Methoden

_Die `File` Schnittstelle erbt auch Methoden von der [`Blob`](/de/docs/Web/API/Blob) Schnittstelle._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [`FileReader`](/de/docs/Web/API/FileReader)
