---
title: File API
slug: Web/API/File_API
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

## Konzepte und Nutzung

Die File API ermöglicht es Webanwendungen, auf Dateien und deren Inhalte zuzugreifen.

Webanwendungen können auf Dateien zugreifen, wenn der Benutzer sie verfügbar macht, entweder mit einem [Datei-`<input>`-Element](/de/docs/Web/HTML/Element/input/file) oder [per Drag-and-Drop](/de/docs/Web/API/DataTransfer/files).

Sätze von Dateien, die auf diese Weise verfügbar gemacht werden, werden als [`FileList`](/de/docs/Web/API/FileList)-Objekte dargestellt, die es einer Webanwendung ermöglichen, einzelne [`File`](/de/docs/Web/API/File)-Objekte abzurufen. Diese [`File`](/de/docs/Web/API/File)-Objekte bieten wiederum Zugriff auf Metadaten wie den Dateinamen, die Größe, den Typ und das Datum der letzten Änderung.

[`File`](/de/docs/Web/API/File)-Objekte können an [`FileReader`](/de/docs/Web/API/FileReader)-Objekte übergeben werden, um auf den Inhalt der Datei zuzugreifen. Das [`FileReader`](/de/docs/Web/API/FileReader)-Interface ist asynchron, aber eine synchrone Version, die nur in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar ist, wird durch das [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Interface bereitgestellt.

## Schnittstellen

- [`Blob`](/de/docs/Web/API/Blob)
  - : Repräsentiert ein "Binary Large Object", also ein dateiähnliches Objekt von unveränderlichen, rohen Daten; ein [`Blob`](/de/docs/Web/API/Blob) kann als Text oder Binärdaten gelesen oder in einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) konvertiert werden, sodass dessen Methoden zur Verarbeitung der Daten verwendet werden können.
- [`File`](/de/docs/Web/API/File)
  - : Stellt Informationen über eine Datei bereit und ermöglicht JavaScript auf einer Webseite den Zugriff auf deren Inhalt.
- [`FileList`](/de/docs/Web/API/FileList)
  - : Wird von der `files`-Eigenschaft des HTML-{{HTMLElement("input")}}-Elements zurückgegeben; damit können Sie auf die Liste der mit dem `<input type="file">`-Element ausgewählten Dateien zugreifen. Es wird auch für eine Liste von Dateien verwendet, die mithilfe der Drag-and-Drop-API in Webinhalte fallen gelassen werden; siehe das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt für Details zu dieser Nutzung.
- [`FileReader`](/de/docs/Web/API/FileReader)
  - : Ermöglicht es Webanwendungen, die Inhalte von Dateien (oder Rohdatenpuffern), die auf dem Computer des Benutzers gespeichert sind, asynchron zu lesen, indem [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet werden, um die Datei oder Daten zum Lesen anzugeben.
- [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)
  - : Ermöglicht es Webanwendungen, die Inhalte von Dateien (oder Rohdatenpuffern), die auf dem Computer des Benutzers gespeichert sind, synchron zu lesen, indem [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet werden, um die Datei oder Daten zum Lesen anzugeben.

### Erweiterungen für andere Schnittstellen

- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
  - : Erstellt eine URL, die zum Abrufen eines [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekts verwendet werden kann.
- [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)
  - : Hebt eine vorhandene Objekt-URL auf, die zuvor durch Aufrufen von [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt wurde.

## Beispiele

### Eine Datei lesen

In diesem Beispiel bieten wir ein [Datei-`<input>`-Element](/de/docs/Web/HTML/Element/input/file) an, und wenn der Benutzer eine Datei auswählt, lesen wir den Inhalt der ersten ausgewählten Datei als Text und zeigen das Ergebnis in einem {{HTMLElement("div")}} an.

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

- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file): das Datei-Input-Element
- [`Blob.text()`](/de/docs/Web/API/Blob/text)
- Die [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstelle
