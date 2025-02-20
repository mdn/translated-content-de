---
title: File API
slug: Web/API/File_API
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

## Konzepte und Verwendung

Die File API ermöglicht Webanwendungen den Zugriff auf Dateien und deren Inhalte.

Webanwendungen können auf Dateien zugreifen, wenn der Benutzer sie verfügbar macht, entweder durch ein [file `<input>` Element](/de/docs/Web/HTML/Element/input/file) oder [durch Drag-and-Drop](/de/docs/Web/API/DataTransfer/files).

Sätze von Dateien, die auf diese Weise verfügbar gemacht werden, werden als [`FileList`](/de/docs/Web/API/FileList)-Objekte dargestellt, die es einer Webanwendung ermöglichen, einzelne [`File`](/de/docs/Web/API/File)-Objekte abzurufen. Diese [`File`](/de/docs/Web/API/File)-Objekte bieten wiederum Zugriff auf Metadaten wie den Namen der Datei, die Größe, den Typ und das Datum der letzten Änderung.

[`File`](/de/docs/Web/API/File)-Objekte können an [`FileReader`](/de/docs/Web/API/FileReader)-Objekte übergeben werden, um auf die Inhalte der Datei zuzugreifen. Die [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle ist asynchron, aber eine synchrone Version, die nur in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ist, wird durch die [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Schnittstelle bereitgestellt.

## Beziehung zu anderen dateibezogenen APIs

Es gibt zwei weitere große APIs, die ebenfalls mit Dateien arbeiten: [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) und [File System API](/de/docs/Web/API/File_System_API).

Die File API ist die grundlegendste. Sie unterstützt das Lesen und Verarbeiten von Dateidaten, die explizit vom Benutzer in Form eines Formularelements oder einer Drag-and-Drop-Operation bereitgestellt werden. Außerdem ermöglicht sie den Umgang mit Binärdaten über Blobs.

Die File and Directory Entries API befasst sich, ähnlich wie die File API, auch mit Dateien, die vom Benutzer über Formulareingaben oder Drag-and-Drop-Operationen bereitgestellt werden. Anstelle einer einzelnen Datei ermöglicht das Eingabeelement nun jedoch die Auswahl eines Verzeichnisses oder mehrerer Dateien. Die API bietet dann eine Möglichkeit, das Verzeichnis oder die Dateien zu verarbeiten. Sie ist hauptsächlich eine Erfindung von Chrome – Sie werden feststellen, dass deren Erweiterungen zu anderen Schnittstellen alle mit `webkit` vorangestellt sind. Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API#history) hat eine ausführlichere Geschichte über ihre Implementierung und Standardisierung. Ursprünglich war sie gedacht, um ein vollständiges virtuelles Dateisystem zu unterstützen, jetzt unterstützt sie nur noch Leseoperationen auf benutzerbereitgestellten Daten.

Die File System API bietet ein virtuelles Dateisystem für Webanwendungen, damit diese Daten persistent in einem virtuellen System speichern können, das für den Ursprung des Dokuments (bekannt als [Origin Private File System (OPFS)](/de/docs/Web/API/File_System_API/Origin_private_file_system)) privat ist. Die File System Access API erweitert die File System API weiter, um Websites das Lesen und Schreiben von Benutzerdateien zu ermöglichen, vorbehaltlich der Zustimmung des Benutzers. Im Gegensatz zur File API und der File and Directory Entries API ist die File System API rein JavaScript-basiert und befasst sich nicht mit Formulareingaben.

## Schnittstellen

- [`Blob`](/de/docs/Web/API/Blob)
  - : Repräsentiert ein "Binary Large Object", bedeutet ein dateiähnliches Objekt mit unveränderlichen, rohen Daten; ein [`Blob`](/de/docs/Web/API/Blob) kann als Text oder Binärdaten gelesen oder in einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) konvertiert werden, sodass seine Methoden zur Verarbeitung der Daten verwendet werden können.
- [`File`](/de/docs/Web/API/File)
  - : Bietet Informationen über eine Datei und ermöglicht JavaScript in einer Webseite, auf deren Inhalt zuzugreifen.
- [`FileList`](/de/docs/Web/API/FileList)
  - : Wird von der `files`-Eigenschaft des HTML-{{HTMLElement("input")}}-Elements zurückgegeben; dies ermöglicht Ihnen den Zugriff auf die Liste der mit dem `<input type="file">`-Element ausgewählten Dateien. Es wird auch für eine Liste von Dateien verwendet, die bei der Verwendung der Drag-and-Drop-API in Webinhalte gezogen wurden; siehe das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt für Details zu dieser Verwendung.
- [`FileReader`](/de/docs/Web/API/FileReader)
  - : Ermöglicht Webanwendungen das asynchrone Lesen der Inhalte von Dateien (oder Rohdatenspeichern), die auf dem Computer des Benutzers gespeichert sind, unter Verwendung von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten, um die Datei oder die zu lesenden Daten anzugeben.
- [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)
  - : Ermöglicht Webanwendungen das synchrone Lesen der Inhalte von Dateien (oder Rohdatenspeichern), die auf dem Computer des Benutzers gespeichert sind, unter Verwendung von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten, um die Datei oder die zu lesenden Daten anzugeben.

### Erweiterungen zu anderen Schnittstellen

- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Erstellt eine URL, die zum Abrufen eines [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekts verwendet werden kann.
- [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Gibt eine bestehende Objekt-URL frei, die zuvor durch Aufrufen von [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt wurde.

## Beispiele

### Eine Datei lesen

In diesem Beispiel stellen wir ein [file `<input>` Element](/de/docs/Web/HTML/Element/input/file) bereit, und wenn der Benutzer eine Datei auswählt, lesen wir die Inhalte der ersten ausgewählten Datei als Text und zeigen das Ergebnis in einem {{HTMLElement("div")}} an.

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

- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file): das Datei-Eingabeelement
- [`Blob.text()`](/de/docs/Web/API/Blob/text)
- Die [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstelle
