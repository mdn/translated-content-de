---
title: Datei- und Verzeichniseinträge API
slug: Web/API/File_and_Directory_Entries_API
l10n:
  sourceCommit: c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die Datei- und Verzeichniseinträge API simuliert ein lokales Dateisystem, in dem Web-Apps navigieren und auf Dateien zugreifen können. Sie können Apps entwickeln, die Dateien und/oder Verzeichnisse in einem virtuellen, geschützten Dateisystem lesen, schreiben und erstellen.

## Zugriff auf ein Dateisystem erhalten

Es gibt zwei Möglichkeiten, um auf Dateisysteme zuzugreifen, die im aktuellen Spezifikationsentwurf definiert sind:

- Beim Umgang mit einem {{domxref("HTMLElement/drop_event", "drop")}}-Ereignis für Drag-and-Drop können Sie {{domxref("DataTransferItem.webkitGetAsEntry()")}} aufrufen, um das {{domxref("FileSystemEntry")}} für ein fallen gelassenes Objekt zu erhalten. Wenn das Ergebnis nicht `null` ist, dann handelt es sich um eine fallengelassene Datei oder ein Verzeichnis, und Sie können Dateisystemaufrufe verwenden, um damit zu arbeiten.
- Die Eigenschaft {{domxref("HTMLInputElement.webkitEntries")}} ermöglicht Ihnen den Zugriff auf die {{domxref("FileSystemFileEntry")}}-Objekte für die aktuell ausgewählten Dateien, jedoch nur, wenn sie auf das Dateiauswahlfeld gezogen wurden ([Firefox-Fehler 1326031](https://bugzil.la/1326031)). Wenn {{domxref("HTMLInputElement.webkitdirectory")}} `true` ist, ist das {{HTMLElement("input")}}-Element stattdessen ein Verzeichniswähler, und Sie erhalten {{domxref("FileSystemDirectoryEntry")}}-Objekte für jedes ausgewählte Verzeichnis.

## Schnittstellen

Die Datei- und Verzeichniseinträge API umfasst die folgenden Schnittstellen:

- {{domxref("FileSystem")}}
  - : Repräsentiert ein Dateisystem.
- {{domxref("FileSystemEntry")}}
  - : Die grundlegende Schnittstelle, die einen einzelnen Eintrag in einem Dateisystem repräsentiert. Diese wird von anderen Schnittstellen implementiert, die Dateien oder Verzeichnisse darstellen.
- {{domxref("FileSystemFileEntry")}}
  - : Repräsentiert eine einzelne Datei in einem Dateisystem.
- {{domxref("FileSystemDirectoryEntry")}}
  - : Repräsentiert ein einzelnes Verzeichnis in einem Dateisystem.
- {{domxref("FileSystemDirectoryReader")}}
  - : Erstellt durch den Aufruf von {{domxref("FileSystemDirectoryEntry.createReader()")}}, bietet diese Schnittstelle die Funktionalität, mit der Sie den Inhalt eines Verzeichnisses lesen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in die Datei- und Verzeichniseinträge API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [Unterstützung der Datei- und Verzeichniseinträge API in Firefox](/de/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
