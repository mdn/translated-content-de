---
title: File API
slug: Web/API/File_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

## Konzepte und Verwendung

Die File API ermöglicht Webanwendungen den Zugriff auf Dateien und deren Inhalte.

Webanwendungen können auf Dateien zugreifen, wenn der Benutzer sie verfügbar macht, entweder mit einem [file `<input>`-Element](/de/docs/Web/HTML/Reference/Elements/input/file) oder [via Drag & Drop](/de/docs/Web/API/DataTransfer/files).

Sätze von Dateien, die auf diese Weise zur Verfügung gestellt werden, sind als [`FileList`](/de/docs/Web/API/FileList)-Objekte dargestellt, die es einer Webanwendung ermöglichen, einzelne [`File`](/de/docs/Web/API/File)-Objekte abzurufen. Im Gegenzug bieten [`File`](/de/docs/Web/API/File)-Objekte Zugriff auf Metadaten wie den Namen der Datei, die Größe, den Typ und das Datum der letzten Änderung.

[`File`](/de/docs/Web/API/File)-Objekte können an [`FileReader`](/de/docs/Web/API/FileReader)-Objekte übergeben werden, um auf den Inhalt der Datei zuzugreifen. Das [`FileReader`](/de/docs/Web/API/FileReader)-Interface ist asynchron, aber eine synchrone Version, die nur in [Webworkern](/de/docs/Web/API/Web_Workers_API) verfügbar ist, wird durch das [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Interface bereitgestellt.

## Beziehung zu anderen dateibezogenen APIs

Es gibt zwei weitere wichtige APIs, die ebenfalls mit Dateien arbeiten: die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) und die [File System API](/de/docs/Web/API/File_System_API).

Die File API ist die grundlegendste. Sie unterstützt das Lesen und Verarbeiten von Dateidaten, die explizit vom Benutzer in Form eines Formularelement-Eingangs oder einer Drag-and-Drop-Operation bereitgestellt werden. Sie ermöglicht auch die Verarbeitung von Binärdaten über Blobs.

Die File and Directory Entries API, ähnlich der File API, arbeitet auch mit Dateien, die vom Benutzer über Formulareingaben oder Drag-and-Drop-Operationen bereitgestellt werden. Anstatt eines einzelnen Datei kann das Eingabeelement nun die Auswahl eines Verzeichnisses oder mehrerer Dateien ermöglichen. Die API bietet dann eine Möglichkeit, das Verzeichnis oder die Dateien zu verarbeiten. Sie ist hauptsächlich eine eigene Erfindung von Chrome - Sie werden feststellen, dass ihre Erweiterungen anderer Schnittstellen alle mit `webkit` präfixiert sind. Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API#history) hat eine ausführlichere Geschichte über ihre Implementierung und Standardisierung. Sie war ursprünglich dafür vorgesehen, ein vollständiges virtuelles Dateisystem zu unterstützen, unterstützt aber jetzt nur noch Leseoperationen auf vom Benutzer bereitgestellten Daten.

Die File System API bietet ein virtuelles Dateisystem für Webanwendungen, damit diese Daten in einem virtuellen System speichern können, das privat für den Ursprung des Dokuments ist (bekannt als [Origin private file system (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system)). Die File System Access API erweitert die File System API weiter, um es Websites zu ermöglichen, Benutzerdateien zu lesen und zu schreiben, vorbehaltlich der Zustimmung des Benutzers. Im Gegensatz zur File API und der File and Directory Entries API ist die File System API rein JavaScript-basiert und arbeitet nicht mit Formulareingaben.

## Schnittstellen

- [`Blob`](/de/docs/Web/API/Blob)
  - : Steht für ein "Binary Large Object", also ein dateiähnliches Objekt aus unveränderlichem, rohem Datenmaterial; ein [`Blob`](/de/docs/Web/API/Blob) kann als Text oder Binärdaten gelesen oder in einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) umgewandelt werden, sodass seine Methoden zur Verarbeitung der Daten genutzt werden können.
- [`File`](/de/docs/Web/API/File)
  - : Bietet Informationen über eine Datei und ermöglicht JavaScript in einer Webseite den Zugriff auf deren Inhalt.
- [`FileList`](/de/docs/Web/API/FileList)
  - : Wird durch die `files`-Eigenschaft des HTML-{{HTMLElement("input")}}-Elements zurückgegeben; damit können Sie auf die Liste der mit dem `<input type="file">`-Element ausgewählten Dateien zugreifen. Es wird auch für eine Liste von Dateien verwendet, die mittels der Drag-and-Drop-API in den Webinhalt fallen gelassen werden; siehe das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt für Details zu dieser Verwendung.
- [`FileReader`](/de/docs/Web/API/FileReader)
  - : Ermöglicht Webanwendungen das asynchrone Lesen der Inhalte von Dateien (oder rohen Datenpuffern), die auf dem Computer des Benutzers gespeichert sind, unter Verwendung von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten, um die Datei oder Daten anzugeben, die gelesen werden sollen.
- [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)
  - : Ermöglicht Webanwendungen das synchrone Lesen der Inhalte von Dateien (oder rohen Datenpuffern), die auf dem Computer des Benutzers gespeichert sind, unter Verwendung von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten zur Angabe der zu lesenden Datei oder Daten.

### Erweiterungen zu anderen Schnittstellen

- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Erstellt eine URL, die verwendet werden kann, um auf ein [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekt zuzugreifen.
- [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Hebt eine bestehende Objekt-URL auf, die zuvor durch Aufruf von [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt wurde.

## Beispiele

### Eine Datei lesen

In diesem Beispiel stellen wir ein [file `<input>`-Element](/de/docs/Web/HTML/Reference/Elements/input/file) bereit, und wenn der Benutzer eine Datei auswählt, lesen wir den Inhalt der ersten ausgewählten Datei als Text und zeigen das Ergebnis in einem {{HTMLElement("div")}} an.

#### HTML

```html
<input type="file" />
<div class="output"></div>
```

#### CSS

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    output.innerText = await file.text();
  }
});
```

### Ergebnis

{{EmbedLiveSample("Reading a file", "", "300")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file): das Datei-Eingabeelement
- [`Blob.text()`](/de/docs/Web/API/Blob/text)
- Die [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstelle
