---
title: "HTMLInputElement: webkitdirectory Eigenschaft"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
l10n:
  sourceCommit: 1f8d3bebb12dfb1e982ff907956b27c4a986b02b
---

{{APIRef("File and Directory Entries API")}}

Die **`webkitdirectory`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interfaces spiegelt das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) HTML-Attribut wider, welches angibt, dass [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Elemente dem Benutzer erlauben sollen, Verzeichnisse anstelle von Dateien auszuwählen.

Wenn ein Verzeichnis ausgewählt wird, werden das Verzeichnis und seine gesamte Hierarchie von Inhalten in die Menge der ausgewählten Elemente aufgenommen. Die ausgewählten Dateisystemeinträge können mit der [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) Eigenschaft abgerufen werden.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitdirectory` genannt aufgrund ihrer Ursprünge als spezifische API von Google Chrome.
> Es ist wahrscheinlich, dass sie irgendwann umbenannt wird.

## Wert

Ein Boolean; `true`, wenn das {{HTMLElement("input")}} Element nur die Auswahl von Verzeichnissen erlauben soll, oder `false`, wenn nur Dateien auswählbar sein sollen.

## Beschreibung

Wenn `webkitdirectory` auf true gesetzt ist, bietet das Eingabefeld den Benutzern Verzeichnisse zur Auswahl an, anstatt Dateien.

Nachdem der Benutzer eine Auswahl getroffen hat, wird für jedes [`File`](/de/docs/Web/API/File) Objekt in `files` dessen [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) Eigenschaft auf den relativen Pfad innerhalb des ausgewählten Verzeichnisses gesetzt, an dem sich die Datei befindet.

Beispielsweise, betrachten Sie dieses Dateisystem:

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

  - Urlaube

    - Mars

      - PIC5533.jpg
      - PIC5534.jpg
      - PIC5556.jpg
      - PIC5684.jpg
      - PIC5712.jpg

Wenn der Benutzer `Fotoalben` wählt, enthält die von `files` gemeldete Liste [`File`](/de/docs/Web/API/File) Objekte für jede oben aufgelistete Datei—aber nicht für die Verzeichnisse. Der Eintrag für `PIC2343.jpg` wird einen `webkitRelativePath` von `Fotoalben/Geburtstage/Dons 40. Geburtstag/PIC2343.jpg` haben. Dies ermöglicht es, die Hierarchie zu kennen, obwohl die [`FileList`](/de/docs/Web/API/FileList) flach ist.

> [!NOTE]
> Das Verhalten von `webkitRelativePath` ist in _Chromium < 72_ unterschiedlich.
> Weitere Details finden Sie in [diesem Bug](https://crbug.com/124187).

## Beispiele

In diesem Beispiel wird ein Verzeichniswähler präsentiert, der es dem Benutzer ermöglicht, eines oder mehrere Verzeichnisse auszuwählen. Wenn das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis auftritt, wird eine Liste aller Dateien innerhalb der ausgewählten Verzeichnishierarchien erstellt und angezeigt.

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
