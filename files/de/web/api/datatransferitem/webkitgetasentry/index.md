---
title: "DataTransferItem: webkitGetAsEntry()-Methode"
short-title: webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("HTML Drag and Drop API")}}

Wenn das durch das {{domxref("DataTransferItem")}} beschriebene Element eine Datei ist, gibt `webkitGetAsEntry()` ein {{domxref("FileSystemFileEntry")}} oder {{domxref("FileSystemDirectoryEntry")}} zurück, das es repräsentiert. Wenn das Element keine Datei ist, wird `null` zurückgegeben.

> [!NOTE]
> Diese Funktion wird derzeit in Nicht-WebKit-Browsern, einschließlich Firefox, als `webkitGetAsEntry()` implementiert; sie könnte in Zukunft in `getAsEntry()` umbenannt werden. Sie sollten daher defensiv programmieren und nach beiden suchen.

## Syntax

```js-nolint
webkitGetAsEntry()
```

### Parameter

Keine.

### Rückgabewert

Ein auf {{domxref("FileSystemEntry")}} basierendes Objekt, das das abgelegte Element beschreibt.
Dies wird entweder {{domxref("FileSystemFileEntry")}} oder {{domxref("FileSystemDirectoryEntry")}} sein.
Die Methode bricht ab und gibt `null` zurück, wenn das abgelegte Element keine Datei ist oder wenn das {{domxref("DataTransferItem")}}-Objekt nicht im Lese- oder Lese-/Schreibmodus ist.

## Beispiele

In diesem Beispiel wird eine Drop-Zone erstellt, die auf das {{domxref("HTMLElement/drop_event", "drop")}}-Ereignis reagiert, indem sie die abgelegten Dateien und Verzeichnisse durchgeht und eine hierarchische Verzeichnisliste ausgibt.

### HTML

Das HTML stellt die Drop-Zone selbst dar, die ein {{HTMLElement("div")}}-Element mit der ID `"dropzone"` ist, und ein ungeordnetes Listelement mit der ID `"listing"`.

```html
<p>Ziehen Sie Dateien und/oder Verzeichnisse in das Feld unten!</p>

<div id="dropzone">
  <div id="boxtitle">Dateien hier ablegen</div>
</div>

<h2>Verzeichnisbaum:</h2>

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

Zuerst betrachten wir die rekursive Funktion `scanFiles()`.
Diese Funktion nimmt als Eingabe einen {{domxref("FileSystemEntry")}}, der einen Eintrag im Dateisystem darstellt, der gescannt und verarbeitet werden soll (der `item`-Parameter), und ein Element, in welches die Liste der Inhalte eingefügt werden soll (der `container`-Parameter).

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

`scanFiles()` beginnt damit, ein neues {{HTMLElement("li")}}-Element zu erstellen, um das zu scannende Element darzustellen, den Namen des Elements als Textinhalt darin einzufügen und es dann an den Container anzuhängen.
Der Container ist in diesem Beispiel immer ein Listenelement, wie Sie gleich sehen werden.

Sobald das aktuelle Element in der Liste ist, wird die {{domxref("FileSystemEntry.isDirectory", "isDirectory")}}-Eigenschaft des Elements überprüft.
Wenn das Element ein Verzeichnis ist, müssen wir in dieses Verzeichnis rekursiv vorgehen.
Der erste Schritt ist die Erstellung eines {{domxref("FileSystemDirectoryReader")}}, um das Abrufen des Inhalts des Verzeichnisses zu verwalten.
Das wird durch den Aufruf der {{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}}-Methode des Elements gemacht.
Dann wird ein neues {{HTMLElement("ul")}} erstellt und an die übergeordnete Liste angehängt; dies wird den Inhalt des Verzeichnisses auf der nächsten Hierarchieebene der Liste enthalten.

Danach wird {{domxref("FileSystemDirectoryReader.readEntries", "directoryReader.readEntries()")}} aufgerufen, um alle Einträge im Verzeichnis einzulesen.
Diese werden jeweils bei einem rekursiven Aufruf von `scanFiles()` verarbeitet.
Jede davon, die Dateien sind, werden in die Liste eingefügt; jede, die Verzeichnisse sind, werden in die Liste eingefügt, und eine neue Ebene der Hierarchie der Liste wird darunter hinzugefügt, und so weiter.

Dann kommen die Ereignishandler. Zuerst verhindern wir, dass das {{domxref("HTMLElement/dragover_event", "dragover")}}-Ereignis vom Standardhandler verarbeitet wird, damit unsere Drop-Zone den Drop empfangen kann:

```js
dropzone.addEventListener(
  "dragover",
  (event) => {
    event.preventDefault();
  },
  false,
);
```

Der Ereignishandler, der alles in Gang setzt, ist natürlich der Handler für das {{domxref("HTMLElement/drop_event", "drop")}}-Ereignis:

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

Dies ruft die Liste der {{domxref("DataTransferItem")}}-Objekte ab, die die abgelegten Elemente von `event.dataTransfer.items` darstellen.
Dann rufen wir {{domxref("Event.preventDefault()")}} auf, um zu verhindern, dass das Ereignis weiterverarbeitet wird, nachdem wir fertig sind.

Jetzt ist es an der Zeit, die Liste zu erstellen. Zuerst wird die Liste geleert, indem {{domxref("Node.textContent", "listing.textContent")}} auf leer gesetzt wird.
Das lässt uns mit einem leeren {{HTMLElement("ul")}}, in das Verzeichniseinträge eingefügt werden können.

Dann iterieren wir über die Elemente in der Liste der abgelegten Elemente.
Für jedes rufen wir die Methode `webkitGetAsEntry()` auf, um einen {{domxref("FileSystemEntry")}} zu erhalten, der die Datei darstellt.
Wenn das erfolgreich ist, rufen wir `scanFiles()` auf, um das Element zu verarbeiten – entweder indem wir es der Liste hinzufügen, wenn es nur eine Datei ist, oder indem wir es hinzufügen und in es hineingehen, wenn es ein Verzeichnis ist.

### Ergebnis

Sie können sehen, wie dies funktioniert, indem Sie es unten ausprobieren. Finden Sie einige Dateien und Verzeichnisse und ziehen Sie sie hinein und schauen Sie sich das resultierende Ergebnis an.

{{EmbedLiveSample('Examples', 600, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File und Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("DataTransferItem")}}
- {{domxref("FileSystemEntry")}}, {{domxref("FileSystemFileEntry")}}, und {{domxref("FileSystemDirectoryEntry")}}
- Ereignisse: {{domxref("HTMLElement/dragover_event", "dragover")}} und {{domxref("HTMLElement/drop_event", "drop")}}
