---
title: FileSystem
slug: Web/API/FileSystem
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("File and Directory Entries API")}}

Die Schnittstelle des File and Directory Entries API **`FileSystem`** wird verwendet, um ein Dateisystem darzustellen. Diese Objekte können über die [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem)-Eigenschaft eines beliebigen Dateisystemeintrags abgerufen werden. Einige Browser bieten zusätzliche APIs zur Erstellung und Verwaltung von Dateisystemen, wie zum Beispiel die `requestFileSystem()`-Methode von Chrome.

Diese Schnittstelle gewährt keinen Zugriff auf das Dateisystem der Benutzer. Stattdessen haben Sie ein "virtuelles Laufwerk" innerhalb der Browser-Sandbox. Wenn Sie Zugriff auf das Dateisystem der Benutzer erhalten möchten, müssen Sie den Benutzer aktiv einbeziehen, beispielsweise durch die Installation einer Chrome-Erweiterung. Die relevante Chrome-API finden Sie [hier](https://developer.chrome.com/docs/apps/reference/fileSystem).

## Grundlegende Konzepte

Es gibt zwei Möglichkeiten, um Zugriff auf ein `FileSystem`-Objekt zu erhalten:

1. Sie können direkt ein Dateisystem anfordern, das speziell für Ihre Web-App in der Sandbox erstellt wurde, indem Sie `window.requestFileSystem()` aufrufen. Wenn dieser Aufruf erfolgreich ist, wird ein Callback-Handler ausgeführt, der als Parameter ein `FileSystem`-Objekt erhält, das das Dateisystem beschreibt.
2. Sie können es von einem Dateisystemeintragsobjekt über dessen [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem)-Eigenschaft erhalten.

## Instanzeigenschaften

- [`FileSystem.name`](/de/docs/Web/API/FileSystem/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen des Dateisystems darstellt. Dieser Name ist eindeutig unter allen freigelegten Dateisystemen.
- [`FileSystem.root`](/de/docs/Web/API/FileSystem/root) {{ReadOnlyInline}}
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Wurzelverzeichnis des Dateisystems darstellt. Über dieses Objekt können Sie auf alle Dateien und Verzeichnisse im Dateisystem zugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in das File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry), und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
