---
title: "DataTransferItem: webkitGetAsEntry() Methode"
short-title: webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML Drag and Drop API")}}

Wenn das durch das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) beschriebene Element eine Datei ist, gibt `webkitGetAsEntry()` ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) zurück, die es repräsentiert. Wenn das Element keine Datei ist, wird `null` zurückgegeben.

> [!NOTE]
> Diese Funktion wird derzeit auch in Nicht-WebKit-Browsern, einschließlich Firefox, als `webkitGetAsEntry()` implementiert; sie könnte in Zukunft in `getAsEntry()` umbenannt werden, daher sollten Sie defensiv programmieren und auf beide achten.

## Syntax

```js-nolint
webkitGetAsEntry()
```

### Parameter

Keine.

### Rückgabewert

Ein auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierendes Objekt, das das fallengelassene Element beschreibt.
Dies wird entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) sein.
Die Methode bricht die Operation ab und gibt `null` zurück, wenn das fallengelassene Element keine Datei ist oder wenn das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt nicht im Lese- oder Lese-/Schreibmodus ist.

## Beispiele

In diesem Beispiel wird eine Ablagezone erstellt, die auf das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis reagiert, indem sie die fallengelassenen Dateien und Verzeichnisse durchsucht und eine hierarchische Verzeichnisauflistung ausgibt.

### HTML

Das HTML stellt die Ablagezone selbst dar, die ein {{HTMLElement("div")}}-Element mit der ID `"dropzone"` ist, und ein ungeordnetes Listenelement mit der ID `"listing"`.

```html
<p>Drag files and/or directories to the box below!</p>

<div id="dropzone">
  <div id="boxtitle">Drop Files Here</div>
</div>

<h2>Directory tree:</h2>

<ul id="listing"></ul>
```

### CSS

Die in diesem Beispiel verwendeten Stile sind hier dargestellt.

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
Diese Funktion nimmt als Eingabe ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), das einen Eintrag im zu scannden Dateisystem darstellt (den `item`-Parameter), und ein Element, in das die Liste der Inhalte eingefügt werden soll (den `container`-Parameter).

> [!NOTE]
> Um alle Dateien in einem Verzeichnis zu lesen, muss `readEntries` wiederholt aufgerufen werden, bis es ein leeres Array zurückgibt.
> In Browsern, die auf Chromium basieren, wird das folgende Beispiel maximal 100 Einträge zurückgeben.

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

`scanFiles()` beginnt, indem ein neues {{HTMLElement("li")}}-Element erstellt wird, um das zu scannende Element darzustellen, den Namen des Elements als Textinhalt in es einfügt und es dann an den Container anhängt.
Der Container ist in diesem Beispiel immer ein Listenelement, wie Sie gleich sehen werden.

Sobald das aktuelle Element in der Liste ist, wird die [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory)-Eigenschaft des Elements überprüft.
Wenn das Element ein Verzeichnis ist, müssen wir dieses Verzeichnis rekursiv durchlaufen.
Der erste Schritt besteht darin, einen [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader) zu erstellen, um das Abrufen des Inhalts des Verzeichnisses zu behandeln.
Dies geschieht durch Aufrufen der [`createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader)-Methode des Elements.
Dann wird ein neues {{HTMLElement("ul")}} erstellt und an die übergeordnete Liste angehängt; dieses enthält den Inhalt des Verzeichnisses in der nächsten Ebene der Hierarchie der Liste.

Danach wird [`directoryReader.readEntries()`](/de/docs/Web/API/FileSystemDirectoryReader/readEntries) aufgerufen, um alle Einträge im Verzeichnis einzulesen.
Diese werden jeweils in einen rekursiven Aufruf von `scanFiles()` übergeben, um sie zu verarbeiten.
Jeder, der Dateien sind, wird in die Liste eingefügt; jeder, der Verzeichnisse sind, wird in die Liste eingefügt und eine neue Ebene der Listenhierarchie wird unterhalb hinzugefügt und so weiter.

Dann kommen die Ereignishandler. Zuerst verhindern wir, dass das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis vom Standardhandler behandelt wird, damit unsere Drop-Zone den Fall empfangen kann:

```js
dropzone.addEventListener(
  "dragover",
  (event) => {
    event.preventDefault();
  },
  false,
);
```

Der Ereignishandler, der alles startet, ist natürlich der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis:

```js
dropzone.addEventListener(
  "drop",
  (event) => {
    let items = event.dataTransfer.items;

    event.preventDefault();
    listing.textContent = "";

    for (const item of items) {
      const entry = item.webkitGetAsEntry();

      if (entry) {
        scanFiles(entry, listing);
      }
    }
  },
  false,
);
```

Dies ruft die Liste der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekte ab, die die fallengelassenen Elemente repräsentieren, von `event.dataTransfer.items`.
Dann rufen wir [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass das Ereignis nach Abschluss weiter behandelt wird.

Jetzt ist es Zeit, die Liste zu erstellen. Zuerst wird die Liste geleert, indem [`listing.textContent`](/de/docs/Web/API/Node/textContent) auf leer gesetzt wird.
Dadurch bleibt uns ein leeres {{HTMLElement("ul")}}, um Verzeichniseinträge einzufügen.

Dann iterieren wir über die Elemente in der Liste der fallengelassenen Elemente.
Für jedes rufen wir dessen `webkitGetAsEntry()`-Methode auf, um ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zu erhalten, das die Datei repräsentiert.
Wenn das erfolgreich ist, rufen wir `scanFiles()` auf, um das Element zu verarbeiten—entweder indem wir es zur Liste hinzufügen, wenn es nur eine Datei ist, oder indem wir es hinzufügen und in es hinuntergehen, wenn es ein Verzeichnis ist.

### Ergebnis

Sie können sehen, wie dies funktioniert, indem Sie es unten ausprobieren. Finden Sie einige Dateien und Verzeichnisse und ziehen Sie sie herein, und werfen Sie einen Blick auf die resultierende Ausgabe.

{{EmbedLiveSample('Examples', 600, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry), und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- Ereignisse: [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
