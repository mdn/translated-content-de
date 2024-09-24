---
title: Unterstützung der API für Datei- und Verzeichniseinträge in Firefox
slug: Web/API/File_and_Directory_Entries_API/Firefox_support
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die ursprüngliche Dateisystem-API wurde entwickelt, um Browsern die Unterstützung für den Zugriff auf ein sandkastengebundenes virtuelles Dateisystem auf dem Speichergerät des Nutzers zu ermöglichen. Die Arbeit an der Standardisierung der Spezifikation wurde bereits 2012 eingestellt, aber zu diesem Zeitpunkt beinhaltete Google Chrome bereits eine eigene Implementierung der API. Im Laufe der Zeit kam es dazu, dass eine Anzahl populärer Websites und Webanwendungen diese nutzten, oft ohne alternative Lösungen anzubieten oder sogar zu überprüfen, ob die API verfügbar ist, bevor sie verwendet wird. Mozilla entschied sich stattdessen, andere APIs zu implementieren, die verwendet werden können, um viele der gleichen Probleme zu lösen, wie beispielsweise [IndexedDB](/de/docs/Web/API/IndexedDB_API); siehe den Blogbeitrag [Warum keine Dateisystem-API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/) für weitere Einblicke.

Dies führte dazu, dass eine Reihe beliebter Websites in anderen Browsern als Chrome nicht ordnungsgemäß funktionierten. Aus diesem Grund wurde ein Versuch unternommen, eine Spezifikation zu erstellen, die die Funktionen der Google-API bietet und über die Einvernehmen erzielt werden konnte. Das Ergebnis war die [API für Datei- und Verzeichniseinträge](/de/docs/Web/API/File_and_Directory_Entries_API). Dieses Teilset der von Chrome bereitgestellten API ist noch nicht vollständig spezifiziert; jedoch wurde aus Gründen der Webkompatibilität beschlossen, ein Teilset der API in Firefox zu implementieren; dies wurde in Firefox 50 eingeführt.

Dieser Artikel beschreibt, wie die Firefox-Implementierung der API für Datei- und Verzeichniseinträge sich von anderen Implementierungen und/oder der Spezifikation unterscheidet.

## Abweichungen von Google Chrome von der Spezifikation

Das größte verbleibende Kompatibilitätsproblem ist, dass Chrome immer noch ältere Namen für viele der Schnittstellen in der API verwendet, da sie eine verwandte, aber andere Spezifikation implementiert haben:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Name in der Spezifikation</th>
      <th scope="col">Name in Google Chrome</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>FileSystemDirectoryEntry</code></td>
      <td><code>DirectoryEntry</code></td>
    </tr>
    <tr>
      <td><code>FileSystemDirectoryEntrySync</code></td>
      <td><code>DirectoryEntrySync</code></td>
    </tr>
    <tr>
      <td><code>FileSystemDirectoryReader</code></td>
      <td><code>DirectoryReader</code></td>
    </tr>
    <tr>
      <td><code>FileSystemDirectoryReaderSync</code></td>
      <td><code>DirectoryReaderSync</code></td>
    </tr>
    <tr>
      <td><code>FileSystemEntry</code></td>
      <td><code>Entry</code></td>
    </tr>
    <tr>
      <td><code>FileSystemEntrySync</code></td>
      <td><code>EntrySync</code></td>
    </tr>
    <tr>
      <td><code>FileSystemFileEntry</code></td>
      <td><code>FileEntry</code></td>
    </tr>
    <tr>
      <td><code>FileSystemFileEntrySync</code></td>
      <td><code>FileEntrySync</code></td>
    </tr>
  </tbody>
</table>

Stellen Sie sicher, dass Sie dies in Ihrem Code berücksichtigen, indem Sie beide Namen zulassen. Hoffentlich wird Chrome bald aktualisiert, um die neueren Namen zu verwenden!

Um sicherzustellen, dass Ihr Code sowohl in Chrome als auch in anderen Browsern funktioniert, können Sie ähnlichen Code verwenden wie den folgenden:

```js
const FileSystemDirectoryEntry =
  window.FileSystemDirectoryEntry || window.DirectoryEntry;
const FileSystemEntry = window.FileSystemEntry || window.Entry;
```

## Einschränkungen in Firefox

Schauen wir uns als nächstes die Einschränkungen der Firefox-Implementierung der API an. Im Großen und Ganzen lassen sich diese Einschränkungen wie folgt zusammenfassen:

- Inhaltsskripte können keine Dateisysteme erstellen oder den Zugriff auf ein Dateisystem initiieren. Es gibt derzeit nur zwei Möglichkeiten, um auf Dateisystemeinträge zuzugreifen:

  - Das {{HTMLElement("input")}}-Element, indem die {{domxref("HTMLInputElement.webkitEntries")}}-Eigenschaft verwendet wird, um auf ein Array von {{domxref("FileSystemEntry")}}-Objekten zuzugreifen, die Dateisystemeinträge beschreiben, die Sie dann lesen können.
  - Verwendung von Drag & Drop durch Aufrufen der {{domxref("DataTransferItem.webkitGetAsEntry")}}-Methode, die Ihnen ermöglicht, ein {{domxref("FileSystemFileEntry")}} oder {{domxref("FileSystemDirectoryEntry")}} für Dateien zu erhalten, die auf eine Drop-Zone fallen gelassen werden.

- Firefox unterstützt das URL-Schema `"filesystem:"` nicht.

## Siehe auch

- [API für Datei- und Verzeichniseinträge](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die API für Datei- und Verzeichniseinträge](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [API für Datei- und Verzeichniseinträge](https://wicg.github.io/entries-api/) Spezifikation
- Ursprüngliche Spezifikation für die [Datei-API: Verzeichnisse und System](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html) (oft als "FileSystem API" bezeichnet); Google Chrome war der einzige Browser, der diese **eingestellte** API implementierte.
