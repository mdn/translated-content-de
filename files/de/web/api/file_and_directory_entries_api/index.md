---
title: File and Directory Entries API
slug: Web/API/File_and_Directory_Entries_API
l10n:
  sourceCommit: c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die File and Directory Entries API simuliert ein lokales Dateisystem, in dem sich Webanwendungen bewegen und auf Dateien zugreifen können. Sie können Anwendungen entwickeln, die Dateien und/oder Verzeichnisse in einem virtuellen, geschützten Dateisystem lesen, schreiben und erstellen.

## Zugriff auf ein Dateisystem erhalten

Es gibt zwei Möglichkeiten, Zugriff auf Dateisysteme zu erhalten, die im aktuellen Spezifikationsentwurf definiert sind:

- Beim Verarbeiten eines [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisses für Drag-and-Drop können Sie [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry) aufrufen, um das [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) für ein fallengelassenes Element zu erhalten. Wenn das Ergebnis nicht `null` ist, handelt es sich um eine fallengelassene Datei oder ein Verzeichnis, und Sie können Dateisystemaufrufe verwenden, um damit zu arbeiten.
- Die Eigenschaft [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) ermöglicht den Zugriff auf die [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte für die aktuell ausgewählten Dateien, jedoch nur, wenn sie per Drag-and-Drop in den Dateiauswahldialog gezogen wurden ([Firefox Fehler 1326031](https://bugzil.la/1326031)). Wenn [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) `true` ist, ist das {{HTMLElement("input")}}-Element stattdessen ein Verzeichnisauswahldialog, und Sie erhalten [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte für jedes ausgewählte Verzeichnis.

## Schnittstellen

Die File and Directory Entries API beinhaltet die folgenden Schnittstellen:

- [`FileSystem`](/de/docs/Web/API/FileSystem)
  - : Repräsentiert ein Dateisystem.
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
  - : Die grundlegende Schnittstelle, die einen einzelnen Eintrag in einem Dateisystem darstellt. Diese wird von anderen Schnittstellen implementiert, die Dateien oder Verzeichnisse darstellen.
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)
  - : Stellt eine einzelne Datei in einem Dateisystem dar.
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
  - : Stellt ein einzelnes Verzeichnis in einem Dateisystem dar.
- [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)
  - : Erstellt durch den Aufruf von [`FileSystemDirectoryEntry.createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader), bietet diese Schnittstelle die Funktionalität, die es Ihnen ermöglicht, den Inhalt eines Verzeichnisses zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [Unterstützung der File and Directory Entries API in Firefox](/de/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
