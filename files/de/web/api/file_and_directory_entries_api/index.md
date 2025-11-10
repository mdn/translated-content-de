---
title: File and Directory Entries API
slug: Web/API/File_and_Directory_Entries_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die File and Directory Entries API bietet eine Möglichkeit, Verzeichnisse und Dateilisten zu verarbeiten, die vom Benutzer über ein Formulareingabefeld oder per Drag-and-Drop bereitgestellt werden. Es ist eine fortgeschrittene Version der [File API](/de/docs/Web/API/File), die es Ihnen erlaubt, mit einer einzelnen Datei zu arbeiten. Ursprünglich war sie dafür vorgesehen, ein vollständiges virtuelles Dateisystem zu unterstützen, aber jetzt unterstützt sie nur noch Lesevorgänge auf vom Benutzer bereitgestellten Daten.

Siehe [Beziehung zu anderen dateibezogenen APIs](/de/docs/Web/API/File_API#relationship_to_other_file-related_apis) für einen Vergleich zwischen dieser API, der [File System API](/de/docs/Web/API/File_System_API) und der [File API](/de/docs/Web/API/File_API).

## Zugriff auf ein Dateisystem erhalten

Es gibt zwei Möglichkeiten, um auf Dateisysteme zuzugreifen, die im aktuellen Spezifikationsentwurf definiert sind:

- Beim Umgang mit einem [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis für Drag-and-Drop können Sie [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry) aufrufen, um das [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) für ein fallengelassenes Element zu erhalten. Wenn das Ergebnis nicht `null` ist, dann handelt es sich um eine fallengelassene Datei oder ein Verzeichnis, und Sie können Dateisystemaufrufe verwenden, um damit zu arbeiten.
- Die [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) Eigenschaft ermöglicht Ihnen den Zugriff auf die [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) Objekte für die aktuell ausgewählten Dateien, aber nur, wenn sie per Drag-and-Drop in den Dateiauswahldialog gezogen wurden ([Firefox-Bug 1326031](https://bugzil.la/1326031)). Wenn [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) `true` ist, ist das {{HTMLElement("input")}}-Element stattdessen ein Verzeichnisauswahldialog, und Sie erhalten [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Objekte für jedes ausgewählte Verzeichnis.

## Geschichte

Die ursprüngliche File System API wurde entwickelt, um es Browsern zu ermöglichen, Unterstützung für den Zugriff auf ein sandboxed virtuelles Dateisystem auf dem Speichermedium des Benutzers zu implementieren. Die Arbeit zur Standardisierung der Spezifikation wurde 2012 aufgegeben, aber zu diesem Zeitpunkt hatte Google Chrome bereits seine eigene Implementierung der API. Im Laufe der Zeit nutzten zahlreiche beliebte Websites und Webanwendungen diese API, oft ohne alternative Lösungen oder auch nur die Verfügbarkeit der API zu überprüfen, bevor sie sie verwendeten. Mozilla entschied sich stattdessen dafür, andere APIs zu implementieren, die viele derselben Probleme lösen können, wie etwa [IndexedDB](/de/docs/Web/API/IndexedDB_API); siehe den Blogbeitrag [Warum keine FileSystem API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/) für weitere Einblicke.

Infolgedessen funktionierten zahlreiche beliebte Websites in Browsern, die nicht Chrome waren, nicht richtig. Um dies zu beheben, wurden die Funktionen von Googles API, für die Konsens erzielt werden konnte, als File and Directory Entries API standardisiert und dann in anderen Browsern implementiert.

## Schnittstellen

Die File and Directory Entries API umfasst die folgenden Schnittstellen:

- [`FileSystem`](/de/docs/Web/API/FileSystem)
  - : Repräsentiert ein Dateisystem.
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
  - : Die grundlegende Schnittstelle, die einen einzelnen Eintrag in einem Dateisystem repräsentiert. Diese wird von anderen Schnittstellen implementiert, die Dateien oder Verzeichnisse darstellen.
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)
  - : Repräsentiert eine einzelne Datei in einem Dateisystem.
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
  - : Repräsentiert ein einzelnes Verzeichnis in einem Dateisystem.
- [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)
  - : Erstellt durch den Aufruf von [`FileSystemDirectoryEntry.createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader), bietet diese Schnittstelle die Funktionalität, die es erlaubt, den Inhalt eines Verzeichnisses zu lesen.

### Erweiterungen zu anderen Schnittstellen

- [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry)
  - : Gibt ein Objekt basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zurück, das den Eintrag der ausgewählten Datei in ihrem Dateisystem repräsentiert. Dies wird im Allgemeinen entweder ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Objekt sein.
- [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)
  - : Gibt den Pfad zurück, relativ zu dem die URL der `File` ist.
- [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)
  - : Ein Boolescher Wert, der das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input#webkitdirectory)-Attribut repräsentiert. Wenn `true`, akzeptiert die Dateisystem-Auswahlschnittstelle nur Verzeichnisse anstelle von Dateien.
- [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)
  - : Beschreibt die aktuell ausgewählten Dateien oder Verzeichnisse.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File API](/de/docs/Web/API/File_API)
- [File System API](/de/docs/Web/API/File_System_API)
