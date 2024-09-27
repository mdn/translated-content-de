---
title: File
slug: Web/API/File
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`File`** Interface stellt Informationen über Dateien bereit und ermöglicht JavaScript auf einer Webseite den Zugriff auf deren Inhalte.

`File` Objekte werden in der Regel aus einem [`FileList`](/de/docs/Web/API/FileList) Objekt abgerufen, das als Ergebnis einer Benutzerauswahl von Dateien durch das {{HTMLElement("input")}} Element oder aus einem [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt einer Drag-and-Drop-Operation zurückgegeben wird.

Ein `File` Objekt ist eine spezielle Art von [`Blob`](/de/docs/Web/API/Blob) und kann in jedem Kontext verwendet werden, in dem ein Blob verwendet werden kann. Insbesondere akzeptieren [`FileReader`](/de/docs/Web/API/FileReader), [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap), die [`body`](/de/docs/Web/API/RequestInit#body) Option für [`fetch()`](/de/docs/Web/API/Window/fetch) und [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) sowohl `Blob`s als auch `File`s.

Weitere Informationen und Beispiele finden Sie unter [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).

{{InheritanceDiagram}}

## Konstruktor

- [`File()`](/de/docs/Web/API/File/File)
  - : Gibt eine neu konstruierte `File` zurück.

## Instanz-Eigenschaften

_Das `File` Interface erbt auch Eigenschaften vom [`Blob`](/de/docs/Web/API/Blob) Interface._

- [`File.lastModified`](/de/docs/Web/API/File/lastModified) {{ReadOnlyInline}}
  - : Gibt die Zeit der letzten Änderung der Datei zurück, in Millisekunden seit dem UNIX-Epochenbeginn (1. Januar 1970 um Mitternacht).
- [`File.lastModifiedDate`](/de/docs/Web/API/File/lastModifiedDate) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das letzte geänderte {{JSxRef("Date")}} der im `File` Objekt referenzierten Datei zurück.
- [`File.name`](/de/docs/Web/API/File/name) {{ReadOnlyInline}}
  - : Gibt den Namen der Datei zurück, die vom `File` Objekt referenziert wird.
- [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) {{ReadOnlyInline}}
  - : Gibt den Pfad zurück, zu dem die URL des `File` relativ ist.

## Instanz-Methoden

_Das `File` Interface erbt auch Methoden vom [`Blob`](/de/docs/Web/API/Blob) Interface._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [`FileReader`](/de/docs/Web/API/FileReader)
