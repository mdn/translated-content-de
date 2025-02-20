---
title: File and Directory Entries API
slug: Web/API/File_and_Directory_Entries_API
l10n:
  sourceCommit: bbe75de5e1a67b9709703a1918c8e3aa145519ea
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die Datei- und Verzeichniseinträge-API bietet eine Möglichkeit, Verzeichnisse und Dateilisten zu verarbeiten, die vom Benutzer über eine Formular-Eingabe oder eine Drag-and-Drop-Operation bereitgestellt werden. Sie ist eine fortgeschrittenere Version der [Datei-API](/de/docs/Web/API/File), die es Ihnen ermöglicht, mit einer einzelnen Datei zu arbeiten. Ursprünglich sollte sie ein vollständiges virtuelles Dateisystem unterstützen, unterstützt jetzt jedoch nur Leseoperationen auf benutzerbereitgestellten Daten.

Siehe [Beziehung zu anderen dateibezogenen APIs](/de/docs/Web/API/File_API#relationship_to_other_file-related_apis) für einen Vergleich zwischen dieser API, der [Dateisystem-API](/de/docs/Web/API/File_System_API) und der [Datei-API](/de/docs/Web/API/File_API).

## Zugriff auf ein Dateisystem erhalten

Es gibt zwei Möglichkeiten, auf Dateisysteme zuzugreifen, die im aktuellen Spezifikationsentwurf definiert sind:

- Beim Umgang mit einem [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis für Drag-and-Drop können Sie [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry) aufrufen, um das [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) für ein abgelegtes Element zu erhalten. Wenn das Ergebnis nicht `null` ist, handelt es sich um eine abgelegte Datei oder ein Verzeichnis, und Sie können Dateisystemaufrufe verwenden, um damit zu arbeiten.
- Die [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)-Eigenschaft ermöglicht den Zugriff auf die [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte für die aktuell ausgewählten Dateien, allerdings nur, wenn sie in den Datei-Auswahlbereich gezogen und abgelegt wurden ([Firefox-Bug 1326031](https://bugzil.la/1326031)). Wenn [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) `true` ist, ist das {{HTMLElement("input")}}-Element stattdessen ein Verzeichnisauswahl-Element, und Sie erhalten [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte für jedes ausgewählte Verzeichnis.

## Verlauf

Die ursprüngliche Dateisystem-API wurde erstellt, um Browsern die Unterstützung für den Zugriff auf ein sandboxed virtuelles Dateisystem auf dem Speichergerät des Benutzers zu ermöglichen. Die Arbeit zur Standardisierung der Spezifikation wurde 2012 aufgegeben, aber zu diesem Zeitpunkt hatte Google Chrome seine eigene Implementierung der API eingeführt. Im Laufe der Zeit begannen viele beliebte Websites und Webanwendungen, sie zu nutzen, oft ohne eine Möglichkeit anzubieten, auf Standard-APIs auszuweichen oder sogar zu prüfen, ob die API verfügbar ist, bevor sie verwendet wird. Mozilla entschied sich stattdessen, andere APIs zu implementieren, die viele der gleichen Probleme lösen können, wie [IndexedDB](/de/docs/Web/API/IndexedDB_API); siehe den Blogbeitrag [Warum keine Datei-System-API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/) für weitere Einblicke.

Als Ergebnis funktionierten eine Reihe von beliebten Websites in anderen Browsern als Chrome nicht richtig. Um das zu beheben, wurden die Funktionen von Googles API, für die ein Konsens erreicht werden konnte, als Datei- und Verzeichniseinträge-API standardisiert, und diese wurde dann in anderen Browsern umgesetzt.

## Schnittstellen

Die Datei- und Verzeichniseinträge-API umfasst die folgenden Schnittstellen:

- [`FileSystem`](/de/docs/Web/API/FileSystem)
  - : Repräsentiert ein Dateisystem.
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
  - : Die grundlegende Schnittstelle, die einen einzelnen Eintrag in einem Dateisystem repräsentiert. Diese wird von anderen Schnittstellen implementiert, die Dateien oder Verzeichnisse darstellen.
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)
  - : Repräsentiert eine einzelne Datei in einem Dateisystem.
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
  - : Repräsentiert ein einzelnes Verzeichnis in einem Dateisystem.
- [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)
  - : Erstellt durch Aufruf von [`FileSystemDirectoryEntry.createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader), bietet diese Schnittstelle die Funktionalität, die es Ihnen ermöglicht, den Inhalt eines Verzeichnisses zu lesen.

### Erweiterungen zu anderen Schnittstellen

- [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry)
  - : Gibt ein Objekt basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zurück, das den Eintrag der ausgewählten Datei in ihrem Dateisystem repräsentiert. Dies wird in der Regel entweder ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt sein.
- [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)
  - : Gibt den Pfad zurück, relativ zu dem die URL der `File` ist.
- [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)
  - : Ein boolescher Wert, der das [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystemauswahl-Schnittstelle nur Verzeichnisse anstatt Dateien.
- [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)
  - : Beschreibt die derzeit ausgewählten Dateien oder Verzeichnisse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Datei-API](/de/docs/Web/API/File_API)
- [Dateisystem-API](/de/docs/Web/API/File_System_API)
