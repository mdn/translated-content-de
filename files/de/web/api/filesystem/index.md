---
title: Dateisystem
slug: Web/API/FileSystem
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("File and Directory Entries API")}}

Die Schnittstelle des File and Directory Entries API **`FileSystem`** wird verwendet, um ein Dateisystem darzustellen. Diese Objekte können von der Eigenschaft {{domxref("FileSystemEntry.filesystem", "filesystem")}} eines beliebigen Dateisystemeintrags erhalten werden. Einige Browser bieten zusätzliche APIs zur Erstellung und Verwaltung von Dateisystemen, wie zum Beispiel die {{domxref("Window.requestFileSystem", "requestFileSystem()")}} Methode in Chrome.

Diese Schnittstelle gewährt Ihnen keinen Zugriff auf das Dateisystem der Benutzer. Stattdessen haben Sie ein "virtuelles Laufwerk" innerhalb der Browser-Sandbox. Wenn Sie Zugriff auf das Dateisystem der Benutzer erhalten möchten, müssen Sie beispielsweise durch die Installation einer Chrome-Erweiterung den Benutzer einbeziehen. Die relevante Chrome-API finden Sie [hier](https://developer.chrome.com/docs/apps/reference/fileSystem).

## Grundlegende Konzepte

Es gibt zwei Möglichkeiten, auf ein `FileSystem`-Objekt zuzugreifen:

1. Sie können direkt eines anfordern, das ein für Ihre Webanwendung erstelltes, sandboxed Dateisystem darstellt, indem Sie `window.requestFileSystem()` aufrufen. Wenn dieser Aufruf erfolgreich ist, wird ein Callback-Handler ausgeführt, der als Parameter ein `FileSystem`-Objekt erhält, das das Dateisystem beschreibt.
2. Sie können es von einem Dateisystemeintragsobjekt über seine {{domxref("FileSystemEntry.filesystem", "filesystem")}}-Eigenschaft erhalten.

## Instanz-Eigenschaften

- {{domxref("FileSystem.name")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen des Dateisystems darstellt. Dieser Name ist einzigartig unter allen veröffentlichten Dateisystemen.
- {{domxref("FileSystem.root")}} {{ReadOnlyInline}}
  - : Ein {{domxref("FileSystemDirectoryEntry")}}-Objekt, das das Stammverzeichnis des Dateisystems darstellt. Durch dieses Objekt können Sie auf alle Dateien und Verzeichnisse im Dateisystem zugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in das File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}, {{domxref("FileSystemFileEntry")}}, und {{domxref("FileSystemDirectoryEntry")}}
