---
title: "HTMLInputElement: webkitdirectory-Eigenschaft"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
l10n:
  sourceCommit: 74eef2f7f9c7153af83d95e3a0b30adb17abfcee
---

{{APIRef("File and Directory Entries API")}}

Die **`HTMLInputElement.webkitdirectory`**-Eigenschaft spiegelt das [`webkitdirectory`](/de/docs/Web/HTML/Element/input/file#webkitdirectory) HTML-Attribut wider und zeigt an, dass das {{HTMLElement("input")}}-Element es dem Benutzer ermöglichen sollte, Verzeichnisse anstelle von Dateien auszuwählen. Wenn ein Verzeichnis ausgewählt wird, werden das Verzeichnis und die gesamte Hierarchie seiner Inhalte in die Menge der ausgewählten Elemente aufgenommen. Die ausgewählten Dateisystemeinträge können mittels der [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)-Eigenschaft abgerufen werden.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitdirectory` genannt, aufgrund ihrer Herkunft als Google Chrome-spezifische API. Es ist wahrscheinlich, dass sie eines Tages umbenannt wird.

## Wert

Ein Boolean; `true`, wenn das {{HTMLElement("input")}}-Element es ermöglichen sollte, nur Verzeichnisse auszuwählen, oder `false`, wenn nur Dateien auswählbar sein sollten.

## Verständnis der Ergebnisse

Nachdem der Benutzer eine Auswahl getroffen hat, hat jedes [`File`](/de/docs/Web/API/File)-Objekt in `files` seine Eigenschaft [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) auf den relativen Pfad innerhalb des ausgewählten Verzeichnisses gesetzt, an dem sich die Datei befindet. Betrachten Sie zum Beispiel dieses Dateisystem:

- PhotoAlbums

  - Birthdays

    - Jamie's 1st birthday

      - PIC1000.jpg
      - PIC1004.jpg
      - PIC1044.jpg

    - Don's 40th birthday

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

Wenn der Benutzer `PhotoAlbums` auswählt, enthält die von files gemeldete Liste [`File`](/de/docs/Web/API/File)-Objekte für jede oben aufgeführte Datei, aber nicht die Verzeichnisse. Der Eintrag für `PIC2343.jpg` hat einen `webkitRelativePath` von `PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg`. Dies ermöglicht es, die Hierarchie zu kennen, obwohl die [`FileList`](/de/docs/Web/API/FileList) flach ist.

> [!NOTE]
> Das Verhalten von `webkitRelativePath` ist in _Chromium < 72_ unterschiedlich. Sehen Sie [dieses Problem](https://crbug.com/124187) für weitere Details.

## Beispiele

In diesem Beispiel wird ein Verzeichnis-Auswahlfenster präsentiert, das es dem Benutzer ermöglicht, ein oder mehrere Verzeichnisse auszuwählen. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auftritt, wird eine Liste aller in den ausgewählten Verzeichnishierarchien enthaltenen Dateien erstellt und angezeigt.

### HTML

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript

```js
document.getElementById("filepicker").addEventListener(
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
