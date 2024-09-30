---
title: Unterstützung der File and Directory Entries API in Firefox
slug: Web/API/File_and_Directory_Entries_API/Firefox_support
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{DefaultAPISidebar("File and Directory Entries API")}}

Die ursprüngliche File System API wurde entwickelt, um Browsern die Unterstützung für den Zugriff auf ein sandboxed virtuelles Dateisystem auf dem Speichermedium eines Benutzers zu ermöglichen. Die Standardisierung der Spezifikation wurde 2012 aufgegeben, aber zu diesem Zeitpunkt hatte Google Chrome bereits eine eigene Implementierung der API integriert. Im Laufe der Zeit haben viele beliebte Websites und Webanwendungen begonnen, diese zu nutzen, oft ohne Alternativen zu den Standard-APIs anzubieten oder überhaupt zu überprüfen, ob die API verfügbar ist, bevor sie verwendet wird. Mozilla entschied sich stattdessen, andere APIs zu implementieren, die viele der gleichen Probleme lösen können, wie zum Beispiel [IndexedDB](/de/docs/Web/API/IndexedDB_API); lesen Sie den Blogartikel [Why no FileSystem API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/) für weitere Einblicke.

Dies hat dazu geführt, dass eine Reihe beliebter Websites nicht richtig auf anderen Browsern außer Chrome funktionieren. Daher wurde ein Versuch unternommen, eine Spezifikation zu erstellen, die die Funktionen von Googles API bietet, auf die man sich einigen könnte. Das Ergebnis war die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API). Dieses von Chrome bereitgestellte API-Subset ist noch nicht vollständig spezifiziert; aus Gründen der Web-Kompatibilität wurde jedoch beschlossen, ein Subset der API in Firefox zu implementieren; dieses wurde in Firefox 50 eingeführt.

Dieser Artikel beschreibt, wie sich die Firefox-Implementierung der File and Directory Entries API von anderen Implementierungen und/oder der Spezifikation unterscheidet.

## Abweichungen von der Spezifikation in Chrome

Das größte verbleibende Kompatibilitätsproblem ist, dass Chrome immer noch ältere Namen für viele der Schnittstellen in der API verwendet, da sie eine verwandte, aber unterschiedliche Spezifikation implementiert haben:

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

Um sicherzustellen, dass Ihr Code sowohl in Chrome als auch in anderen Browsern funktioniert, können Sie Code ähnlich dem folgenden einschließen:

```js
const FileSystemDirectoryEntry =
  window.FileSystemDirectoryEntry || window.DirectoryEntry;
const FileSystemEntry = window.FileSystemEntry || window.Entry;
```

## Einschränkungen in Firefox

Als nächstes betrachten wir die Einschränkungen der Firefox-Implementierung der API. Grob gesagt lassen sich diese Einschränkungen wie folgt zusammenfassen:

- Inhaltsskripte können keine Dateisysteme erstellen oder den Zugriff auf ein Dateisystem initiieren. Derzeit gibt es nur zwei Möglichkeiten, auf Dateisystemeinträge zuzugreifen:

  - Das {{HTMLElement("input")}}-Element, unter Verwendung der [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)-Eigenschaft, um auf ein Array von [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Objekten zuzugreifen, die die Dateisystemeinträge beschreiben, die Sie dann lesen können.
  - Drag-and-Drop, indem die [`DataTransferItem.webkitGetAsEntry`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry)-Methode aufgerufen wird, mit der Sie ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) für Dateien erhalten können, die auf eine Drop-Zone gezogen wurden.

- Firefox unterstützt das `"filesystem:"` URL-Schema nicht.

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [File and Directory Entries API](https://wicg.github.io/entries-api/) Spezifikation
- Ursprüngliche Spezifikation für die [File API: Directories and System](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html) (oft als "FileSystem API" bezeichnet); Google Chrome war der einzige Browser, der diese **aufgegebene** API implementierte.
