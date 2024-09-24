---
title: Datei-API
slug: Web/API/File_API
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

## Konzepte und Nutzung

Die Datei-API ermöglicht es Webanwendungen, auf Dateien und deren Inhalt zuzugreifen.

Webanwendungen können auf Dateien zugreifen, wenn die Benutzer sie zur Verfügung stellen, entweder durch ein [file `<input>`-Element](/de/docs/Web/HTML/Element/input/file) oder [durch Drag-and-Drop](/de/docs/Web/API/DataTransfer/files).

Dateisätze, die auf diese Weise bereitgestellt werden, sind als {{domxref("FileList")}}-Objekte dargestellt, die es einer Webanwendung ermöglichen, einzelne {{domxref("File")}}-Objekte abzurufen. Diese {{domxref("File")}}-Objekte bieten Zugriff auf Metadaten wie den Dateinamen, die Größe, den Typ und das Datum der letzten Änderung.

{{domxref("File")}}-Objekte können an {{domxref("FileReader")}}-Objekte übergeben werden, um auf den Inhalt der Datei zuzugreifen. Die {{domxref("FileReader")}}-Schnittstelle ist asynchron, aber eine synchrone Version, die nur in [Webarbeitsprozessen](/de/docs/Web/API/Web_Workers_API) verfügbar ist, wird von der {{domxref("FileReaderSync")}}-Schnittstelle bereitgestellt.

## Schnittstellen

- {{domxref("Blob")}}
  - : Repräsentiert ein "Binary Large Object", also ein dateiähnliches Objekt mit unveränderlichen, rohen Daten; ein {{domxref("Blob")}} kann als Text oder Binärdaten gelesen oder in einen {{domxref("ReadableStream")}} konvertiert werden, sodass dessen Methoden zur Verarbeitung der Daten verwendet werden können.
- {{domxref("File")}}
  - : Bietet Informationen über eine Datei und ermöglicht es JavaScript in einer Webseite, auf deren Inhalt zuzugreifen.
- {{domxref("FileList")}}
  - : Wird durch die `files`-Eigenschaft des HTML {{HTMLElement("input")}}-Elements zurückgegeben; dies ermöglicht den Zugriff auf die Liste der mit dem `<input type="file">`-Element ausgewählten Dateien. Es wird auch für eine Liste von Dateien verwendet, die mithilfe der Drag-and-Drop-API in Webinhalte gezogen werden; sehen Sie das {{domxref("DataTransfer")}}-Objekt für Details zu dieser Nutzung.
- {{domxref("FileReader")}}
  - : Ermöglicht es Webanwendungen, asynchron den Inhalt von Dateien (oder Rohdatenpuffern), die auf dem Computer des Benutzers gespeichert sind, zu lesen, indem {{domxref("File")}}- oder {{domxref("Blob")}}-Objekte verwendet werden, um die Datei oder Daten anzugeben, die gelesen werden sollen.
- {{domxref("FileReaderSync")}}
  - : Ermöglicht es Webanwendungen, synchron den Inhalt von Dateien (oder Rohdatenpuffern), die auf dem Computer des Benutzers gespeichert sind, zu lesen, indem {{domxref("File")}}- oder {{domxref("Blob")}}-Objekte verwendet werden, um die Datei oder Daten anzugeben, die gelesen werden sollen.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
  - : Erstellt eine URL, die verwendet werden kann, um auf ein {{domxref("File")}}- oder {{domxref("Blob")}}-Objekt zuzugreifen.
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
  - : Gibt eine bestehende Objekt-URL frei, die zuvor durch Aufruf von {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} erstellt wurde.

## Beispiele

### Eine Datei lesen

In diesem Beispiel bieten wir ein [file `<input>`-Element](/de/docs/Web/HTML/Element/input/file) an, und wenn der Benutzer eine Datei auswählt, lesen wir den Inhalt der ersten ausgewählten Datei als Text und zeigen das Ergebnis in einem {{HTMLElement("div")}} an.

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

- [`<input type="file">`](/de/docs/Web/HTML/Element/input/file): das Dateieingabe-Element
- {{domxref("Blob.text()")}}
- Die {{domxref("DataTransfer")}}-Schnittstelle
