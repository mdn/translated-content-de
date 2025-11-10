---
title: "DataTransferItem: webkitGetAsEntry()-Methode"
short-title: webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML Drag and Drop API")}}

Wenn das durch den [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) beschriebene Element eine Datei ist, gibt `webkitGetAsEntry()` ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) zurück, das es repräsentiert. Wenn das Element keine Datei ist, wird `null` zurückgegeben.

> [!NOTE]
> Diese Funktion wird derzeit in Nicht-WebKit-Browsern, einschließlich Firefox, als `webkitGetAsEntry()` implementiert; sie könnte in der Zukunft in `getAsEntry()` umbenannt werden, daher sollten Sie defensiv programmieren und nach beiden suchen.

## Syntax

```js-nolint
webkitGetAsEntry()
```

### Parameter

Keine.

### Rückgabewert

Ein auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierendes Objekt, das das fallengelassene Element beschreibt.
Dies wird entweder ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) sein.
Die Methode bricht ab und gibt `null` zurück, wenn das fallengelassene Element keine Datei ist oder wenn das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt nicht im Lese- oder Lese-/Schreibmodus ist.

## Beispiele

In diesem Beispiel wird eine Drop-Zone erstellt, die auf das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis reagiert, indem sie die fallengelassenen Dateien und Verzeichnisse durchsucht und eine hierarchische Verzeichnisliste ausgibt.

### HTML

Das HTML etabliert die Drop-Zone selbst, die ein {{HTMLElement("div")}}-Element mit der ID `"dropzone"` und ein ungeordnetes Listen-Element mit der ID `"listing"` ist.

```html
<p>Drag files and/or directories to the box below!</p>

<div id="dropzone">
  <div id="boxtitle">Drop Files Here</div>
</div>

<h2>Directory tree:</h2>

<ul id="listing"></ul>
```

### CSS

Die in diesem Beispiel verwendeten Stile sind hier gezeigt.

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

Zuerst betrachten wir die rekursive `scanFiles()`-Funktion.
Diese Funktion nimmt als Eingabe ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), das einen Eintrag im Dateisystem zum Scannen und Verarbeiten repräsentiert (der `item`-Parameter), und ein Element, in das die Liste des Inhalts eingefügt werden soll (der `container`-Parameter).

> [!NOTE]
> Um alle Dateien in einem Verzeichnis zu lesen, muss `readEntries` wiederholt aufgerufen werden, bis ein leeres Array zurückgegeben wird.
> In auf Chromium basierenden Browsern gibt das folgende Beispiel nur maximal 100 Einträge zurück.

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

`scanFiles()` beginnt mit der Erstellung eines neuen {{HTMLElement("li")}}-Elements, um das zu scannende Element zu repräsentieren, fügt den Namen des Elements als Textinhalt ein und hängt es an den Container an.
Der Container ist in diesem Beispiel immer ein Listenelement, wie Sie gleich sehen werden.

Sobald das aktuelle Element in der Liste ist, wird die [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory)-Eigenschaft des Elements überprüft.
Wenn das Element ein Verzeichnis ist, müssen wir in dieses Verzeichnis rekursieren.
Der erste Schritt ist die Erstellung eines [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader), um den Verzeichnisinhalt abzurufen.
Das geschieht durch Aufrufen der [`createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader)-Methode des Elements.
Dann wird ein neues {{HTMLElement("ul")}} erstellt und an die übergeordnete Liste angehängt; dieses wird den Verzeichnisinhalt auf der nächsten Ebene in der Listenhierarchie enthalten.

Danach wird [`directoryReader.readEntries()`](/de/docs/Web/API/FileSystemDirectoryReader/readEntries) aufgerufen, um alle Einträge im Verzeichnis einzulesen.
Diese werden jeweils in einem rekursiven Aufruf von `scanFiles()` verarbeitet.
Jede Datei wird in die Liste eingefügt; alle Verzeichnisse werden in die Liste eingefügt und eine neue Hierarchieebene der Liste wird darunter hinzugefügt usw.

Dann kommen die Ereignishandler. Zuerst verhindern wir, dass das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis vom Standardhandler behandelt wird, damit unsere Drop-Zone das Ablegen empfangen kann:

```js
dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
});
```

Der Ereignishandler, der alles auslöst, ist natürlich der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis:

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

Diese Funktion holt die Liste der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekte, die die fallengelassenen Elemente aus `event.dataTransfer.items` repräsentieren.
Dann rufen wir [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass das Ereignis weiter behandelt wird, nachdem wir fertig sind.

Jetzt ist es an der Zeit, die Liste zu erstellen. Zuerst wird die Liste geleert, indem [`listing.textContent`](/de/docs/Web/API/Node/textContent) auf leer gesetzt wird.
Damit haben wir ein leeres {{HTMLElement("ul")}}, um mit der Einfügung von Verzeichniseinträgen zu beginnen.

Dann iterieren wir über die Elemente in der Liste der fallengelassenen Elemente.
Für jedes dieser Elemente rufen wir die `webkitGetAsEntry()`-Methode auf, um ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zu erhalten, das die Datei repräsentiert.
Wenn das erfolgreich ist, rufen wir `scanFiles()` auf, um das Element zu verarbeiten—entweder indem es zur Liste hinzugefügt wird, wenn es sich um eine Datei handelt, oder indem es hinzugefügt und hinuntergestiegen wird, wenn es sich um ein Verzeichnis handelt.

### Ergebnis

Sie können sehen, wie dies funktioniert, indem Sie es unten ausprobieren. Finden Sie einige Dateien und Verzeichnisse und ziehen Sie sie herein und schauen sich die resultierende Ausgabe an.

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
