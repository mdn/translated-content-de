---
title: "DataTransferItem: webkitGetAsEntry() Methode"
short-title: webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("HTML Drag and Drop API")}}

Wenn das durch das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) beschriebene Element eine Datei ist, gibt `webkitGetAsEntry()` ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) zurück, das sie repräsentiert. Wenn das Element keine Datei ist, wird `null` zurückgegeben.

> [!NOTE]
> Diese Funktion ist derzeit in nicht auf WebKit-basierenden Browsern, einschließlich Firefox, als `webkitGetAsEntry()` implementiert; sie könnte in Zukunft in `getAsEntry()` umbenannt werden, daher sollten Sie defensiv programmieren und nach beiden suchen.

## Syntax

```js-nolint
webkitGetAsEntry()
```

### Parameter

Keine.

### Rückgabewert

Ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-basiertes Objekt, das das abgelegte Element beschreibt.
Dies wird entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) sein.
Die Methode wird abgebrochen und gibt `null` zurück, wenn das abgelegte Element keine Datei ist oder wenn das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt nicht im Lese- oder Lese-/Schreibmodus ist.

## Beispiele

In diesem Beispiel wird eine Drop-Zone erstellt, die auf das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis reagiert, indem sie die abgelegten Dateien und Verzeichnisse durchsucht und eine hierarchische Verzeichnisauflistung ausgibt.

### HTML

Das HTML erstellt die Drop-Zone selbst, die ein {{HTMLElement("div")}} Element mit der ID `"dropzone"` und ein ungeordnetes Listenelement mit der ID `"listing"` ist.

```html
<p>Drag files and/or directories to the box below!</p>

<div id="dropzone">
  <div id="boxtitle">Drop Files Here</div>
</div>

<h2>Directory tree:</h2>

<ul id="listing"></ul>
```

### CSS

Die in diesem Beispiel verwendeten Stile werden hier gezeigt.

```css
#dropzone {
  text-align: center;
  width: 300px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  border: 4px dashed red;
  border-radius: 10px;
}

#boxtitle {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: black;
  font:
    bold 2em "Arial",
    sans-serif;
  width: 300px;
  height: 100px;
}

body {
  font:
    14px "Arial",
    sans-serif;
}
```

### JavaScript

Zuerst betrachten wir die rekursive `scanFiles()` Funktion.
Diese Funktion nimmt als Eingabe ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) entgegen, das einen Eintrag im Dateisystem repräsentiert, der gescannt und verarbeitet werden soll (der `item` Parameter), und ein Element, in das die Liste der Inhalte eingefügt werden soll (der `container` Parameter).

> [!NOTE]
> Um alle Dateien in einem Verzeichnis zu lesen, muss `readEntries` wiederholt aufgerufen werden, bis es ein leeres Array zurückgibt.
> In auf Chromium basierenden Browsern wird das folgende Beispiel nur maximal 100 Einträge zurückgeben.

```js
let dropzone = document.getElementById("dropzone");
let listing = document.getElementById("listing");

function scanFiles(item, container) {
  let elem = document.createElement("li");
  elem.textContent = item.name;
  container.appendChild(elem);

  if (item.isDirectory) {
    let directoryReader = item.createReader();
    let directoryContainer = document.createElement("ul");
    container.appendChild(directoryContainer);
    directoryReader.readEntries((entries) => {
      entries.forEach((entry) => {
        scanFiles(entry, directoryContainer);
      });
    });
  }
}
```

`scanFiles()` beginnt mit der Erstellung eines neuen {{HTMLElement("li")}} Elements, um das gescannte Element darzustellen, fügt den Namen des Elements als Textinhalt ein und fügt es dem Container hinzu.
Der Container ist in diesem Beispiel immer ein Listenelement, wie Sie gleich sehen werden.

Sobald das aktuelle Element in der Liste ist, wird die [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory) Eigenschaft des Elements überprüft.
Wenn das Element ein Verzeichnis ist, müssen wir in dieses Verzeichnis weitergehen.
Der erste Schritt ist die Erstellung eines [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader), um das Abrufen des Inhalts des Verzeichnisses zu handhaben.
Dies geschieht durch Aufruf der [`createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader) Methode des Elements.
Dann wird ein neues {{HTMLElement("ul")}} erstellt und der übergeordneten Liste hinzugefügt; dies wird den Verzeichnisinhalt auf der nächsten Ebene in der Hierarchie der Liste enthalten.

Danach wird [`directoryReader.readEntries()`](/de/docs/Web/API/FileSystemDirectoryReader/readEntries) aufgerufen, um alle Einträge im Verzeichnis einzulesen.
Diese werden jeweils in einen rekursiven Aufruf von `scanFiles()` übergeben, um sie zu verarbeiten.
Alle, die Dateien sind, werden in die Liste eingefügt, alle, die Verzeichnisse sind, werden in die Liste eingefügt und eine neue Ebene der Listenhierarchie wird tiefer hinzugefügt und so weiter.

Dann kommen die Ereignishandler. Zuerst verhindern wir, dass das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignis vom Standardhandler behandelt wird, damit unsere Drop-Zone den Drop empfangen kann:

```js
dropzone.addEventListener(
  "dragover",
  (event) => {
    event.preventDefault();
  },
  false,
);
```

Der Ereignishandler, der alles in Gang setzt, ist natürlich der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis:

```js
dropzone.addEventListener(
  "drop",
  (event) => {
    let items = event.dataTransfer.items;

    event.preventDefault();
    listing.textContent = "";

    for (let i = 0; i < items.length; i++) {
      let item = items[i].webkitGetAsEntry();

      if (item) {
        scanFiles(item, listing);
      }
    }
  },
  false,
);
```

Dies ruft die Liste der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekte ab, die die abgelegten Elemente von `event.dataTransfer.items` darstellen.
Dann rufen wir [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass das Ereignis weiter verarbeitet wird, nachdem wir fertig sind.

Nun ist es an der Zeit, die Liste zu erstellen. Zuerst wird die Liste geleert, indem [`listing.textContent`](/de/docs/Web/API/Node/textContent) auf leer gesetzt wird.
Das hinterlässt uns ein leeres {{HTMLElement("ul")}}, in das wir Verzeichniseinträge einfügen können.

Dann iterieren wir über die Elemente in der Liste der abgelegten Elemente.
Für jedes wird die `webkitGetAsEntry()` Methode aufgerufen, um ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zu erhalten, das die Datei repräsentiert.
Wenn das erfolgreich ist, rufen wir `scanFiles()` auf, um das Element zu verarbeiten—entweder indem wir es zur Liste hinzufügen, wenn es nur eine Datei ist, oder indem wir es hinzufügen und hinein gehen, wenn es ein Verzeichnis ist.

### Ergebnis

Sie können sehen, wie dies funktioniert, indem Sie es unten ausprobieren. Finden Sie einige Dateien und Verzeichnisse und ziehen Sie sie hinein und sehen Sie sich die resultierende Ausgabe an.

{{EmbedLiveSample('Examples', 600, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- Ereignisse: [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
