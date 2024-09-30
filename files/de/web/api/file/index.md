---
title: File
slug: Web/API/File
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`File`**-Interface bietet Informationen über Dateien und ermöglicht JavaScript auf einer Webseite den Zugriff auf deren Inhalt.

`File`-Objekte werden in der Regel von einem [`FileList`](/de/docs/Web/API/FileList)-Objekt abgerufen, das als Ergebnis einer Dateiauswahl durch den Benutzer mit dem {{HTMLElement("input")}}-Element oder aus einem Drag-and-Drop-Vorgang des [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekts zurückgegeben wird.

Ein `File`-Objekt ist eine spezifische Art von [`Blob`](/de/docs/Web/API/Blob) und kann in jedem Kontext verwendet werden, in dem auch ein Blob verwendet werden kann. Insbesondere akzeptieren die folgenden APIs sowohl `Blob`- als auch `File`-Objekte:

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
- die [`body`](/de/docs/Web/API/RequestInit#body)-Option für [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send).

Weitere Informationen und Beispiele finden Sie unter [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).

{{InheritanceDiagram}}

## Konstruktor

- [`File()`](/de/docs/Web/API/File/File)
  - : Gibt eine neu konstruierte `File` zurück.

## Instanzeigenschaften

_Das `File`-Interface erbt auch Eigenschaften vom [`Blob`](/de/docs/Web/API/Blob)-Interface._

- [`File.lastModified`](/de/docs/Web/API/File/lastModified) {{ReadOnlyInline}}
  - : Gibt die letzte Änderungszeit der Datei in Millisekunden seit der UNIX-Epoche zurück (1. Januar 1970 um Mitternacht).
- [`File.lastModifiedDate`](/de/docs/Web/API/File/lastModifiedDate) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das letzte Änderungsdatum {{JSxRef("Date")}} der von dem `File`-Objekt referenzierten Datei zurück.
- [`File.name`](/de/docs/Web/API/File/name) {{ReadOnlyInline}}
  - : Gibt den Namen der von dem `File`-Objekt referenzierten Datei zurück.
- [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) {{ReadOnlyInline}}
  - : Gibt den Pfad zurück, relativ zu dem die URL der `File` ist.

## Instanzmethoden

_Das `File`-Interface erbt auch Methoden vom [`Blob`](/de/docs/Web/API/Blob)-Interface._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [`FileReader`](/de/docs/Web/API/FileReader)
