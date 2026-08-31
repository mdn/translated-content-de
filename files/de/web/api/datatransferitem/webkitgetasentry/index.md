---
title: "DataTransferItem: webkitGetAsEntry() Methode"
short-title: webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`webkitGetAsEntry()`** Methode des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Interface gibt ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) zurück, das das Element darstellt, wenn es sich um eine Datei handelt. Ist das Element keine Datei, wird `null` zurückgegeben.

Während eines Ziehvorgangs kann diese Methode nur in den Handlern für die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse Daten lesen, da dies die einzigen Zeiten sind, zu denen der Ziehdaten-Store lesbar ist. Ein Aufruf in einem anderen Ziehereignis gibt `null` zurück. Siehe [Lesen des Ziehdaten-Stores](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) für Details.

> [!NOTE]
> Diese Funktion wird derzeit als `webkitGetAsEntry()` in nicht-WebKit-Browsern wie Firefox implementiert; sie könnte in Zukunft in `getAsEntry()` umbenannt werden, daher sollten Sie Ihren Code defensiv gestalten und nach beiden suchen.

## Syntax

```js-nolint
webkitGetAsEntry()
```

### Parameter

Keine.

### Rückgabewert

Ein auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierendes Objekt, das das fallengelassene Element beschreibt.
Dies wird entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) sein.
Die Methode bricht ab und gibt `null` zurück, wenn das fallengelassene Element keine Datei ist oder wenn das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt nicht im Lese- oder Lese/Schreibmodus ist.

## Beispiele

In diesem Beispiel wird eine Ablegezone erstellt, die auf das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis reagiert, indem sie die abgelegten Dateien und Verzeichnisse durchscannt und ein hierarchisches Verzeichnislisting ausgibt.

### HTML

Das HTML etabliert die Ablegezone selbst, die ein {{HTMLElement("div")}} Element mit der ID `"dropzone"` ist, sowie ein ungeordnetes Listenelement mit der ID `"listing"`.

```html
<p>Drag files and/or directories to the box below!</p>

<div id="dropzone">
  <div id="boxtitle">Drop Files Here</div>
</div>

<h2>Directory tree:</h2>

<ul id="listing"></ul>
```

### CSS

Die in diesem Beispiel verwendeten Styles werden hier gezeigt.

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

Schauen wir uns zunächst die rekursive `scanFiles()` Funktion an. Diese Funktion nimmt als Eingabe ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), welches einen Eintrag im Dateisystem repräsentiert, der gescannt und verarbeitet werden soll (der `item`-Parameter), und ein Element, in welches die Liste der Inhalte eingefügt werden soll (der `container`-Parameter).

> [!NOTE]
> Um alle Dateien in einem Verzeichnis zu lesen, muss `readEntries` wiederholt aufgerufen werden, bis es ein leeres Array zurückgibt. In Chromium-basierten Browsern gibt das folgende Beispiel maximal 100 Einträge zurück.

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

`scanFiles()` beginnt mit der Erstellung eines neuen {{HTMLElement("li")}} Elements, um das gescannte Element darzustellen, fügt den Namen des Elements als Textinhalt ein und hängt es an den Container an. Der Container ist in diesem Beispiel immer ein Listenelement, wie Sie gleich sehen werden.

Sobald das aktuelle Element in der Liste ist, wird die [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory) Eigenschaft des Elements geprüft. Wenn das Element ein Verzeichnis ist, müssen wir in dieses Verzeichnis rekursieren. Der erste Schritt besteht darin, einen [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader) zu erstellen, um das Abrufen der Verzeichnisinhalte zu handhaben. Das wird durch Aufrufen der [`createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader) Methode des Elements erreicht. Dann wird ein neues {{HTMLElement("ul")}} erstellt und zur Elternliste hinzugefügt; dieses wird die Verzeichniseinträge auf der nächsten Hierarchieebene enthalten.

Danach wird [`directoryReader.readEntries()`](/de/docs/Web/API/FileSystemDirectoryReader/readEntries) aufgerufen, um alle Einträge im Verzeichnis zu lesen. Diese werden jeweils in einem rekursiven Aufruf von `scanFiles()` verarbeitet. Alle davon, die Dateien sind, werden in die Liste eingefügt; alle, die Verzeichnisse sind, werden in die Liste eingefügt und eine neue Ebene der Listenhierarchie wird darunter hinzugefügt und so weiter.

Dann kommen die Ereignis-Handler. Zuerst verhindern wir, dass das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis vom Standardhandler verarbeitet wird, damit unsere Ablegezone das Ablegen empfangen kann:

```js
dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
});
```

Der Ereignishandler, der alles in Gang setzt, ist natürlich der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis:

```js
dropzone.addEventListener("drop", (event) => {
  let items = event.dataTransfer.items;

  event.preventDefault();
  listing.textContent = "";

  for (const item of items) {
    const entry = item.webkitGetAsEntry();

    if (entry) {
      scanFiles(entry, listing);
    }
  }
});
```

Dieser holt die Liste der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekte ab, die die abgelegten Elemente repräsentieren, aus `event.dataTransfer.items`. Dann rufen wir [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass das Ereignis nach unserer Verarbeitung weiter behandelt wird.

Jetzt ist es an der Zeit, mit der Erstellung der Liste zu beginnen. Zuerst wird die Liste geleert, indem [`listing.textContent`](/de/docs/Web/API/Node/textContent) auf leer gesetzt wird. Das hinterlässt uns ein leeres {{HTMLElement("ul")}}, in das wir Verzeichniseinträge einfügen können.

Dann iterieren wir über die Elemente in der Liste der abgelegten Elemente. Für jedes rufen wir seine `webkitGetAsEntry()` Methode auf, um ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zu erhalten, das die Datei repräsentiert. Wenn das erfolgreich ist, rufen wir `scanFiles()` auf, um das Element zu verarbeiten - entweder indem wir es zur Liste hinzufügen, wenn es nur eine Datei ist, oder indem wir es hinzufügen und in es hineinlaufen, wenn es ein Verzeichnis ist.

### Ergebnis

Sie können sehen, wie das funktioniert, indem Sie es unten ausprobieren. Suchen Sie einige Dateien und Verzeichnisse und ziehen Sie sie hinein, und schauen Sie sich die resultierende Ausgabe an.

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
