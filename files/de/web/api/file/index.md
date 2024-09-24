---
title: Datei
slug: Web/API/File
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`File`**-Interface bietet Informationen über Dateien und ermöglicht JavaScript in einer Webseite, auf deren Inhalte zuzugreifen.

`File`-Objekte werden im Allgemeinen aus einem {{DOMxRef("FileList")}}-Objekt abgerufen, das als Ergebnis einer Benutzerauswahl von Dateien mit dem {{HTMLElement("input")}}-Element oder aus einem {{DOMxRef("DataTransfer")}}-Objekt eines Drag-and-Drop-Vorgangs zurückgegeben wird.

Ein `File`-Objekt ist eine spezielle Art von {{DOMxRef("Blob")}} und kann in jedem Kontext verwendet werden, in dem auch ein Blob verwendet werden kann. Insbesondere akzeptieren {{DOMxRef("FileReader")}}, {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}, {{DOMxRef("createImageBitmap()")}}, die [`body`](/de/docs/Web/API/RequestInit#body)-Option für {{domxref("Window/fetch", "fetch()")}} sowie {{DOMxRef("XMLHttpRequest.send()")}} sowohl `Blob`s als auch `File`s.

Weitere Informationen und Beispiele finden Sie unter [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).

{{InheritanceDiagram}}

## Konstruktor

- {{DOMxRef("File.File", "File()")}}
  - : Gibt eine neu konstruierte `File` zurück.

## Instanzeigenschaften

_Das `File`-Interface erbt auch Eigenschaften vom {{DOMxRef("Blob")}}-Interface._

- {{DOMxRef("File.lastModified")}} {{ReadOnlyInline}}
  - : Gibt die letzte Änderung der Datei in Millisekunden seit der UNIX-Epoche (1. Januar 1970 um Mitternacht) zurück.
- {{DOMxRef("File.lastModifiedDate")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das letzte Änderungsdatum {{JSxRef("Date")}} der durch das `File`-Objekt referenzierten Datei zurück.
- {{DOMxRef("File.name")}} {{ReadOnlyInline}}
  - : Gibt den Namen der durch das `File`-Objekt referenzierten Datei zurück.
- {{DOMxRef("File.webkitRelativePath")}} {{ReadOnlyInline}}
  - : Gibt den Pfad zurück, relativ zu dem die URL der `File` ist.

## Instanzmethoden

_Das `File`-Interface erbt auch Methoden vom {{DOMxRef("Blob")}}-Interface._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- {{DOMxRef("FileReader")}}
