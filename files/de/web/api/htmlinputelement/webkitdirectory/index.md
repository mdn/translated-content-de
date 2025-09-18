---
title: "HTMLInputElement: webkitdirectory Eigenschaft"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("File and Directory Entries API")}}

Die **`webkitdirectory`** Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle spiegelt das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) HTML-Attribut wider, das angibt, dass [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Elemente nur Verzeichnisse statt Dateien auswählen können.

Wenn ein Verzeichnis ausgewählt wird, werden das Verzeichnis und seine gesamte Inhaltsstruktur in die Gruppe der ausgewählten Elemente eingeschlossen.
Die ausgewählten Dateisystemeinträge können über die [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) Eigenschaft abgerufen werden.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitdirectory` genannt, weil sie ursprünglich eine Google Chrome-spezifische API war.

## Wert

Ein Boolean; `true`, wenn das {{HTMLElement("input")}} Element nur die Auswahl von Verzeichnissen erlauben soll, oder `false`, wenn nur Dateien wählbar sein sollen.

## Beschreibung

Wenn `webkitdirectory` auf `true` gesetzt wird, bietet das Eingabeelement Verzeichnisse zur Auswahl an, statt Dateien.
Nachdem der Benutzer ein Verzeichnis ausgewählt hat, wird die [`File`](/de/docs/Web/API/File) Eigenschaft in den zurückgegebenen `files` Objekten mit dem [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) Attribut auf einen Pfad relativ zum ausgewählten Überverzeichnis gesetzt.
Betrachten Sie zum Beispiel dieses Dateisystem:

```plain
PhotoAlbums
├── Birthdays
│   ├── Jamie's 1st birthday
│   │   ├── PIC1000.jpg
│   │   └── PIC1044.jpg
│   └── Don's 40th birthday
│       ├── PIC2343.jpg
│       └── PIC2356.jpg
└── Vacations
    └── Mars
        ├── PIC5556.jpg
        ├── PIC5684.jpg
        └── PIC5712.jpg
```

Wenn der Benutzer das Verzeichnis `PhotoAlbums` auswählt, enthält die durch `files` gemeldete Liste [`File`](/de/docs/Web/API/File) Objekte für jede Datei.
Der Eintrag für `PIC2343.jpg` hat einen `webkitRelativePath` von `PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg`.
Dies macht es möglich, die Hierarchie des ausgewählten Verzeichnisses zu bestimmen, obwohl die [`FileList`](/de/docs/Web/API/FileList) flach ist.

> [!NOTE]
> Das Verhalten von `webkitRelativePath` ist in _Chromium < 72_ unterschiedlich.
> Weitere Details finden Sie in [diesem Fehlerbericht](https://crbug.com/124187).

## Beispiele

In diesem Beispiel wird ein Verzeichnisauswahlfeld präsentiert, das es dem Benutzer ermöglicht, ein oder mehrere Verzeichnisse auszuwählen.
Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis eintritt, wird eine Liste aller in den ausgewählten Verzeichnishierarchien enthaltenen Dateien erstellt und angezeigt.

### HTML

```html
<input type="file" id="file-picker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript

```js
document.getElementById("file-picker").addEventListener("change", (event) => {
  let output = document.getElementById("listing");
  for (const file of event.target.files) {
    let item = document.createElement("li");
    item.textContent = file.webkitRelativePath;
    output.appendChild(item);
  }
});
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)
- [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)
