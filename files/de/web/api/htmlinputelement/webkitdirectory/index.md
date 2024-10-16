---
title: "HTMLInputElement: webkitdirectory-Eigenschaft"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("File and Directory Entries API")}}

Die **`HTMLInputElement.webkitdirectory`** ist eine Eigenschaft,
die das [`webkitdirectory`](/de/docs/Web/HTML/Element/input/file#webkitdirectory) HTML-Attribut widerspiegelt und angibt, dass das {{HTMLElement("input")}}-Element dem Benutzer erlauben sollte, Verzeichnisse statt Dateien auszuwählen. Wenn ein Verzeichnis ausgewählt wird, sind das Verzeichnis und dessen gesamte Hierarchie des Inhalts in der Menge der ausgewählten Elemente enthalten. Die ausgewählten Dateisystemeinträge können über die [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)-Eigenschaft abgerufen werden.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitdirectory` genannt aufgrund ihrer Herkunft als Google Chrome-spezifische API. Es ist wahrscheinlich, dass sie eines Tages umbenannt wird.

## Wert

Ein Boolean; `true`, wenn das {{HTMLElement("input")}}-Element nur die Auswahl von Verzeichnissen erlauben sollte, oder `false`, wenn nur Dateien auswählbar sein sollten.

## Verständnis der Ergebnisse

Nachdem der Benutzer eine Auswahl getroffen hat, hat jedes [`File`](/de/docs/Web/API/File)-Objekt in `files` seine [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)-Eigenschaft auf den relativen Pfad innerhalb des ausgewählten Verzeichnisses gesetzt, an dem sich die Datei befindet. Betrachten Sie beispielsweise dieses Dateisystem:

- Fotoalben

  - Geburtstage

    - Jamies 1. Geburtstag

      - PIC1000.jpg
      - PIC1004.jpg
      - PIC1044.jpg

    - Dons 40. Geburtstag

      - PIC2343.jpg
      - PIC2344.jpg
      - PIC2355.jpg
      - PIC2356.jpg

  - Urlaub

    - Mars

      - PIC5533.jpg
      - PIC5534.jpg
      - PIC5556.jpg
      - PIC5684.jpg
      - PIC5712.jpg

Wenn der Benutzer `Fotoalben` auswählt, enthält die von files gemeldete Liste [`File`](/de/docs/Web/API/File)-Objekte für jede oben aufgeführte Datei – aber nicht die Verzeichnisse. Der Eintrag für `PIC2343.jpg` wird einen `webkitRelativePath` von
`Fotoalben/Geburtstage/Dons 40. Geburtstag/PIC2343.jpg` haben. Dies macht es möglich, die Hierarchie zu kennen, auch wenn die [`FileList`](/de/docs/Web/API/FileList) flach ist.

> [!NOTE]
> Das Verhalten von `webkitRelativePath` ist unterschiedlich
> in _Chromium < 72_. Sehen Sie [diesen Fehler](https://crbug.com/124187) für weitere Details.

## Beispiele

In diesem Beispiel wird ein Verzeichniswähler präsentiert, der dem Benutzer erlaubt, ein oder mehrere Verzeichnisse auszuwählen. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auftritt, wird eine Liste aller Dateien erstellt, die sich in den ausgewählten Verzeichnishierarchien befinden, und angezeigt.

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
