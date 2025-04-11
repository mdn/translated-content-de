---
title: "HTMLInputElement: webkitdirectory-Eigenschaft"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("File and Directory Entries API")}}

Die **`HTMLInputElement.webkitdirectory`** ist eine Eigenschaft,
die das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory)-HTML-Attribut widerspiegelt
und anzeigt, dass das {{HTMLElement("input")}}-Element den Benutzer Verzeichnisse anstelle von Dateien auswählen lassen sollte.
Wenn ein Verzeichnis ausgewählt wird, sind das Verzeichnis und seine gesamte Inhaltsstruktur in der Menge der ausgewählten Elemente enthalten.
Die ausgewählten Dateisystemeinträge können mit der [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries)-Eigenschaft abgerufen werden.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitdirectory` genannt, da sie ursprünglich eine Google Chrome-spezifische API war. Es ist wahrscheinlich, dass sie eines Tages umbenannt wird.

## Wert

Ein Boolean; `true`, wenn das {{HTMLElement("input")}}-Element nur Verzeichnisse auswählen lassen sollte, oder `false`, wenn nur Dateien auswählbar sein sollten.

## Verständnis der Ergebnisse

Nachdem der Benutzer eine Auswahl getroffen hat, hat jedes [`File`](/de/docs/Web/API/File)-Objekt in `files`
seine [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)-Eigenschaft auf den relativen Pfad innerhalb
des ausgewählten Verzeichnisses gesetzt, an dem sich die Datei befindet. Zum Beispiel, betrachten Sie dieses Dateisystem:

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

Wenn der Benutzer `Fotoalben` auswählt, enthält die Liste, die von `files` gemeldet wird,
[`File`](/de/docs/Web/API/File)-Objekte für jede oben aufgeführte Datei - aber nicht die Verzeichnisse.
Der Eintrag für `PIC2343.jpg` wird einen `webkitRelativePath` von
`Fotoalben/Geburtstage/Dons 40. Geburtstag/PIC2343.jpg` haben. Dies macht es
möglich, die Hierarchie zu kennen, obwohl die [`FileList`](/de/docs/Web/API/FileList) flach ist.

> [!NOTE]
> Das Verhalten von `webkitRelativePath` ist in _Chromium < 72_ unterschiedlich. Siehe [diesen Bug](https://crbug.com/124187) für
> weitere Details.

## Beispiele

In diesem Beispiel wird ein Verzeichnisauswähler präsentiert, der es dem Benutzer ermöglicht, ein oder mehrere
Verzeichnisse auszuwählen. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auftritt, wird eine Liste aller Dateien, die in den ausgewählten Verzeichnishierarchien enthalten sind, generiert und angezeigt.

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
