---
title: FileSystem
slug: Web/API/FileSystem
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{APIRef("File and Directory Entries API")}}

Die Schnittstelle des File and Directory Entries API, **`FileSystem`**, wird verwendet, um ein Dateisystem darzustellen. Diese Objekte können aus der [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem)-Eigenschaft eines jeden Dateisystemeintrags abgerufen werden. Einige Browser bieten zusätzliche APIs zum Erstellen und Verwalten von Dateisystemen an, wie zum Beispiel die Chrome-Methode [`requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem).

Diese Schnittstelle wird Ihnen keinen Zugriff auf das Dateisystem der Nutzer gewähren. Stattdessen haben Sie ein "virtuelles Laufwerk" innerhalb der Sandbox des Browsers. Möchten Sie Zugriff auf das Dateisystem der Nutzer erhalten, müssen Sie die Nutzer einbeziehen, beispielsweise durch die Installation einer Chrome-Erweiterung. Die relevante Chrome-API finden Sie [in den Chrome-Entwicklerdokumenten](https://developer.chrome.com/docs/apps/reference/fileSystem).

## Grundkonzepte

Es gibt zwei Möglichkeiten, Zugang zu einem `FileSystem`-Objekt zu erhalten:

1. Sie können direkt nach einem fragen, das ein für Ihre Webanwendung erstelltes, isoliertes Dateisystem darstellt, indem Sie `window.requestFileSystem()` aufrufen. Wenn dieser Aufruf erfolgreich ist, wird ein Callback-Handler ausgeführt, der als Parameter ein `FileSystem`-Objekt erhält, das das Dateisystem beschreibt.
2. Sie können es von einem Dateisystemeintragsobjekt über dessen [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem)-Eigenschaft erhalten.

## Instanzeigenschaften

- [`FileSystem.name`](/de/docs/Web/API/FileSystem/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen des Dateisystems repräsentiert. Dieser Name ist eindeutig in der gesamten Liste der verfügbaren Dateisysteme.
- [`FileSystem.root`](/de/docs/Web/API/FileSystem/root) {{ReadOnlyInline}}
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Stammverzeichnis des Dateisystems darstellt. Durch dieses Objekt können Sie auf alle Dateien und Verzeichnisse im Dateisystem zugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
