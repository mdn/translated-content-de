---
title: "HTMLInputElement: webkitdirectory Eigenschaft"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("File and Directory Entries API")}}

Die **`webkitdirectory`** Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interfaces spiegelt das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) HTML-Attribut wider, welches anzeigt, dass [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Elemente es dem Benutzer ermöglichen sollen, Verzeichnisse anstelle von Dateien auszuwählen.

Wenn ein Verzeichnis ausgewählt wird, werden das Verzeichnis und seine gesamte Inhalts-Hierarchie in die Menge der ausgewählten Elemente aufgenommen. Die ausgewählten Dateisystemeinträge können über die [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) Eigenschaft abgerufen werden.

> [!NOTE]
> Diese Eigenschaft wird `webkitdirectory` genannt aufgrund ihrer Ursprünge als Google Chrome-spezifische API.
> Es ist wahrscheinlich, dass sie irgendwann umbenannt wird.

## Wert

Ein Boolean; `true` wenn das {{HTMLElement("input")}} Element nur die Auswahl von Verzeichnissen ermöglichen soll, oder `false`, wenn nur Dateien auswählbar sein sollen.

## Beschreibung

Das Setzen von `webkitdirectory` auf true bewirkt, dass das Eingabefeld den Benutzern Verzeichnisse zur Auswahl anbietet anstatt Dateien.

Nachdem der Benutzer eine Auswahl getroffen hat, hat jedes [`File`](/de/docs/Web/API/File) Objekt in `files` seine [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) Eigenschaft auf den relativen Pfad innerhalb des ausgewählten Verzeichnisses gesetzt, an dem sich die Datei befindet.

Betrachten Sie beispielsweise dieses Dateisystem:

- PhotoAlbums

  - Birthdays

    - Jamies 1. Geburtstag

      - PIC1000.jpg
      - PIC1004.jpg
      - PIC1044.jpg

    - Dons 40. Geburtstag
      - PIC2343.jpg
      - PIC2344.jpg
      - PIC2355.jpg
      - PIC2356.jpg

  - Vacations
    - Mars
      - PIC5533.jpg
      - PIC5534.jpg
      - PIC5556.jpg
      - PIC5684.jpg
      - PIC5712.jpg

Wenn der Benutzer `PhotoAlbums` auswählt, enthält die von files gemeldete Liste [`File`](/de/docs/Web/API/File) Objekte für jede oben aufgeführte Datei—jedoch nicht die Verzeichnisse. Der Eintrag für `PIC2343.jpg` wird einen `webkitRelativePath` von `PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg` haben. Dies ermöglicht es, die Hierarchie zu kennen, obwohl die [`FileList`](/de/docs/Web/API/FileList) flach ist.

> [!NOTE]
> Das Verhalten von `webkitRelativePath` ist in _Chromium < 72_ unterschiedlich.
> Siehe [dieses Problem](https://crbug.com/124187) für weitere Details.

## Beispiele

In diesem Beispiel wird ein Verzeichniswähler präsentiert, der es dem Benutzer ermöglicht, ein oder mehrere Verzeichnisse zu wählen. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis auftritt, wird eine Liste aller Dateien innerhalb der ausgewählten Verzeichnishierarchien erstellt und angezeigt.

### HTML

```html
<input type="file" id="file-picker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript

```js
document.getElementById("file-picker").addEventListener(
  "change",
  (event) => {
    let output = document.getElementById("listing");
    for (const file of event.target.files) {
      let item = document.createElement("li");
      item.textContent = file.webkitRelativePath;
      output.appendChild(item);
    }
  },
  false,
);
```

### Ergebnis

{{ EmbedLiveSample('Examples') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)
- [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)
