---
title: Unterstützung der File and Directory Entries API in Firefox
slug: Web/API/File_and_Directory_Entries_API/Firefox_support
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die ursprüngliche Dateisystem-API wurde entwickelt, um es Browsern zu ermöglichen, den Zugriff auf ein sandboxed virtuelles Dateisystem auf dem Speichergerät des Benutzers zu unterstützen. Die Arbeit an der Standardisierung der Spezifikation wurde 2012 eingestellt, aber zu diesem Zeitpunkt hatte Google Chrome bereits eine eigene Implementierung der API eingeführt. Im Laufe der Zeit begannen eine Reihe beliebter Websites und Webanwendungen, diese zu nutzen, oft ohne eine Alternative zu den Standard-APIs zu bieten oder sogar zu überprüfen, ob die API verfügbar ist, bevor sie verwendet wird. Mozilla entschied sich stattdessen, andere APIs zu implementieren, die zur Lösung vieler der gleichen Probleme verwendet werden können, wie zum Beispiel [IndexedDB](/de/docs/Web/API/IndexedDB_API); siehe den Blogbeitrag [Warum keine FileSystem API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/) für weitere Einblicke.

Dies führte dazu, dass eine Reihe beliebter Websites in Browsern, die nicht Chrome sind, nicht richtig funktionierten. Aus diesem Grund wurde ein Versuch unternommen, eine Spezifikation zu erstellen, die die Funktionen von Googles API bietet, auf die ein Konsens erzielt werden konnte. Das Ergebnis war die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API). Dieses Teilset der von Chrome bereitgestellten API ist noch nicht vollständig spezifiziert; jedoch wurde aus Gründen der Web-Kompatibilität beschlossen, ein Teilset der API in Firefox zu implementieren; dies wurde in Firefox 50 eingeführt.

Dieser Artikel beschreibt, wie sich die Implementierung der File and Directory Entries API in Firefox von anderen Implementierungen und/oder der Spezifikation unterscheidet.

## Abweichungen Chromes von der Spezifikation

Das größte noch verbleibende Kompatibilitätsproblem ist, dass Chrome immer noch ältere Namen für viele der Schnittstellen in der API verwendet, da sie eine verwandte, aber unterschiedliche Spezifikation implementiert haben:

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

Um sicherzustellen, dass Ihr Code sowohl in Chrome als auch in anderen Browsern funktioniert, können Sie Code ähnlich dem folgenden verwenden:

```js
const FileSystemDirectoryEntry =
  window.FileSystemDirectoryEntry || window.DirectoryEntry;
const FileSystemEntry = window.FileSystemEntry || window.Entry;
```

## Einschränkungen in Firefox

Nun lassen Sie uns einen Blick auf die Einschränkungen der Firefox-Implementierung der API werfen. Im Großen und Ganzen lassen sich diese Einschränkungen wie folgt zusammenfassen:

- Inhaltsskripts können keine Dateisysteme erstellen oder den Zugriff auf ein Dateisystem initiieren. Es gibt derzeit nur zwei Möglichkeiten, um Zugriff auf Dateisystemeinträge zu erhalten:

  - Das {{HTMLElement("input")}} Element, das die [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) Eigenschaft verwendet, um auf ein Array von [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Objekten zuzugreifen, die die Dateisystemeinträge beschreiben, die Sie dann lesen können.
  - Die Verwendung von Drag & Drop durch Aufruf der [`DataTransferItem.webkitGetAsEntry`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry) Methode, die es Ihnen ermöglicht, eine [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) für Dateien zu erhalten, die auf ein Ablegefeld fallen.

- Firefox unterstützt das URL-Schema `"filesystem:"` nicht.

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [File and Directory Entries API](https://wicg.github.io/entries-api/) Spezifikation
- Original-Spezifikation für die [File API: Directories and System](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html) (oft als "FileSystem API" bezeichnet); Google Chrome war der einzige Browser, der diese **aufgegebene** API implementierte.
