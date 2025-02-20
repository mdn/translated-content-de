---
title: FileSystem
slug: Web/API/FileSystem
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die File- und Directory Entries API-Schnittstelle **`FileSystem`** wird verwendet, um ein Dateisystem darzustellen. Diese Objekte können von der [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem)-Eigenschaft eines Dateisystemeintrags abgerufen werden. Einige Browser bieten zusätzliche APIs zur Erstellung und Verwaltung von Dateisystemen an, wie beispielsweise die `requestFileSystem()`-Methode von Chrome.

Diese Schnittstelle gewährt Ihnen keinen Zugriff auf das Dateisystem der Benutzer. Stattdessen haben Sie ein "virtuelles Laufwerk" innerhalb der Browser-Sandbox. Wenn Sie Zugriff auf das Dateisystem der Benutzer erhalten möchten, müssen Sie den Benutzer dazu bewegen, beispielsweise durch die Installation einer Chrome-Erweiterung. Die relevante Chrome-API finden Sie [hier](https://developer.chrome.com/docs/apps/reference/fileSystem).

## Grundkonzepte

Es gibt zwei Möglichkeiten, auf ein `FileSystem`-Objekt zuzugreifen:

1. Sie können direkt eines anfordern, das ein für Ihre Web-App erstelltes, sandboxed Dateisystem darstellt, indem Sie `window.requestFileSystem()` aufrufen. Wenn dieser Aufruf erfolgreich ist, wird ein Callback-Handler ausgeführt, der als Parameter ein `FileSystem`-Objekt erhält, das das Dateisystem beschreibt.
2. Sie können es von einem Dateisystemeintragsobjekt über dessen [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem)-Eigenschaft erhalten.

## Instanz-Eigenschaften

- [`FileSystem.name`](/de/docs/Web/API/FileSystem/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen des Dateisystems darstellt. Dieser Name ist einzigartig in der gesamten Liste der exponierten Dateisysteme.
- [`FileSystem.root`](/de/docs/Web/API/FileSystem/root) {{ReadOnlyInline}}
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Stammverzeichnis des Dateisystems darstellt. Über dieses Objekt können Sie auf alle Dateien und Verzeichnisse im Dateisystem zugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry), und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
