---
title: "DataTransferItem: webkitGetAsEntry()-Methode"
short-title: webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML Drag and Drop API")}}

Wenn das durch das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) beschriebene Element eine Datei ist, gibt `webkitGetAsEntry()` entweder ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) zurück, das es repräsentiert. Wenn das Element keine Datei ist, wird `null` zurückgegeben.

> [!NOTE]
> Diese Funktion wird derzeit in nicht-WebKit-Browsern, einschließlich Firefox, als `webkitGetAsEntry()` implementiert; es ist möglich, dass sie in Zukunft in `getAsEntry()` umbenannt wird. Sie sollten vorsichtig programmieren und beide überprüfen.

## Syntax

```js-nolint
webkitGetAsEntry()
```

### Parameter

Keine.

### Rückgabewert

Ein auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierendes Objekt, das das fallengelassene Element beschreibt. Dies wird entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) sein. Die Methode bricht ab und gibt `null` zurück, wenn das fallengelassene Element keine Datei ist oder wenn das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt nicht im Lese- oder Lese/Schreib-Modus ist.

## Beispiele

In diesem Beispiel wird eine Drop-Zone erstellt, die auf das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis reagiert, indem sie die fallengelassenen Dateien und Verzeichnisse durchsucht und eine hierarchische Verzeichnisauflistung ausgibt.

### HTML

Das HTML etabliert die Drop-Zone selbst, die ein {{HTMLElement("div")}}-Element mit der ID `"dropzone"` ist, und ein ungeordnetes Listelement mit der ID `"listing"`.

```html
<p>Drag files and/or directories to the box below!</p>

<div id="dropzone">
  <div id="boxtitle">Drop Files Here</div>
</div>

<h2>Directory tree:</h2>

<ul id="listing"></ul>
```

### CSS

Die im Beispiel verwendeten Stilvorlagen werden hier gezeigt.

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

Zuerst betrachten wir die rekursive `scanFiles()`-Funktion. Diese Funktion nimmt als Eingabe ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), das einen Eintrag im Dateisystem darstellt, der gescannt und verarbeitet werden soll (der `item`-Parameter), sowie ein Element, in das die Liste der Inhalte eingefügt werden soll (der `container`-Parameter).

> [!NOTE]
> Um alle Dateien in einem Verzeichnis zu lesen, muss `readEntries` wiederholt aufgerufen werden, bis es ein leeres Array zurückgibt. In auf Chromium basierenden Browsern wird das folgende Beispiel maximal 100 Einträge zurückgeben.

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

`scanFiles()` beginnt damit, ein neues {{HTMLElement("li")}}-Element zu erstellen, um das zu scannende Element darzustellen. Der Name des Elements wird als Textinhalt eingefügt und dann dem Container hinzugefügt. Der Container ist in diesem Beispiel immer ein Listenelement, wie Sie gleich sehen werden.

Sobald das aktuelle Element in der Liste ist, wird die [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory)-Eigenschaft des Elements überprüft. Wenn das Element ein Verzeichnis ist, müssen wir in dieses Verzeichnis rekursiv eintreten. Der erste Schritt besteht darin, einen [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader) zu erstellen, um den Abruf der Inhalte des Verzeichnisses zu behandeln. Das wird durch Aufrufen der [`createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader)-Methode des Elements durchgeführt. Dann wird ein neues {{HTMLElement("ul")}} erstellt und der übergeordneten Liste hinzugefügt; dieses wird die Inhalte des Verzeichnisses in der nächsten Ebene der Hierarchie der Liste enthalten.

Danach wird [`directoryReader.readEntries()`](/de/docs/Web/API/FileSystemDirectoryReader/readEntries) aufgerufen, um alle Einträge im Verzeichnis einzulesen. Diese werden der Reihe nach in einem rekursiven Aufruf von `scanFiles()` zur Verarbeitung übergeben. Dateien werden in die Liste eingefügt; Verzeichnisse werden ebenfalls eingefügt und ein neues Ebene der Listenhierarchie wird darunter hinzugefügt, und so weiter.

Dann folgen die Ereignishandler. Zuerst verhindern wir, dass das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis von dem Standardhandler behandelt wird, damit unsere Drop-Zone den Drop empfangen kann:

```js
dropzone.addEventListener(
  "dragover",
  (event) => {
    event.preventDefault();
  },
  false,
);
```

Der Ereignishandler, der alles auslöst, ist natürlich der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis:

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

Dies holt die Liste der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekte ab, die die fallengelassenen Elemente aus `event.dataTransfer.items` repräsentieren. Dann rufen wir [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass das Ereignis weiter behandelt wird, nachdem wir fertig sind.

Jetzt ist es an der Zeit, die Liste zu erstellen. Zuerst wird die Liste geleert, indem [`listing.textContent`](/de/docs/Web/API/Node/textContent) auf leer gesetzt wird. Das lässt eine leere {{HTMLElement("ul")}} übrig, damit Verzeichniseinträge eingefügt werden können.

Dann iterieren wir über die Elemente in der Liste der fallengelassenen Elemente. Für jedes einzelne rufen wir seine `webkitGetAsEntry()`-Methode auf, um ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zu erhalten, das die Datei darstellt. Wenn das erfolgreich ist, rufen wir `scanFiles()` auf, um das Element zu verarbeiten—entweder indem es in die Liste eingefügt wird, wenn es nur eine Datei ist, oder indem es eingefügt wird und wir in es hineinsteigen, wenn es ein Verzeichnis ist.

### Ergebnis

Sie können sehen, wie dies funktioniert, indem Sie es unten ausprobieren. Finden Sie einige Dateien und Verzeichnisse und ziehen Sie sie hinein, und werfen Sie einen Blick auf die resultierende Ausgabe.

{{EmbedLiveSample('Examples', 600, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Datei- und Verzeichniseinträge-API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die Datei- und Verzeichniseinträge-API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- Ereignisse: [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
