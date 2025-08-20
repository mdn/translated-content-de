---
title: "HTMLInputElement: webkitdirectory-Eigenschaft"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
l10n:
  sourceCommit: cbe9efbaa88a12887c14d6955761cfa2ddcc95ba
---

{{APIRef("File and Directory Entries API")}}

Die **`webkitdirectory`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces spiegelt das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) HTML-Attribut wider, das angibt, dass [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Elemente nur Verzeichnisse statt Dateien auswählen können.

Wenn ein Verzeichnis ausgewählt wird, werden das Verzeichnis und seine gesamte Inhalts-Hierarchie in die Menge der ausgewählten Elemente aufgenommen. Die ausgewählten Dateisystemeinträge können mit der [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)-Eigenschaft abgerufen werden.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitdirectory` genannt, da sie ursprünglich eine Google Chrome-spezifische API war.

## Wert

Ein Boolean; `true`, wenn das {{HTMLElement("input")}}-Element nur das Auswählen von Verzeichnissen erlauben soll, oder `false`, wenn nur Dateien auswählbar sein sollen.

## Beschreibung

Wenn `webkitdirectory` auf `true` gesetzt ist, bietet das Eingabeelement Verzeichnisse zur Auswahl für den Benutzer an, anstatt Dateien. Nachdem der Benutzer ein Verzeichnis ausgewählt hat, hat jedes [`File`](/de/docs/Web/API/File)-Objekt in den zurückgegebenen `files` seine [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)-Eigenschaft auf einen Pfad relativ zum ausgewählten übergeordneten Verzeichnis gesetzt. Zum Beispiel, betrachten Sie dieses Dateisystem:

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

Wenn der Benutzer das `PhotoAlbums`-Verzeichnis auswählt, wird die Liste der durch Dateien gemeldeten [`File`](/de/docs/Web/API/File)-Objekte für jede Datei enthalten. Der Eintrag für `PIC2343.jpg` wird einen `webkitRelativePath` von `PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg` haben. Dies macht es möglich, die Hierarchie des ausgewählten Verzeichnisses zu bestimmen, auch wenn die [`FileList`](/de/docs/Web/API/FileList) flach ist.

> [!NOTE]
> Das Verhalten von `webkitRelativePath` ist in _Chromium < 72_ unterschiedlich.
> Siehe [dieses Problem](https://crbug.com/124187) für weitere Details.

## Beispiele

In diesem Beispiel wird ein Verzeichnisauswahlelement präsentiert, das es dem Benutzer erlaubt, ein oder mehrere Verzeichnisse auszuwählen. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auftritt, wird eine Liste aller Dateien innerhalb der ausgewählten Verzeichnishierarchien erstellt und angezeigt.

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

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)
- [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)
