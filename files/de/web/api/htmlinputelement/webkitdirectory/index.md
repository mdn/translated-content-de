---
title: "HTMLInputElement: webkitdirectory-Eigenschaft"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
l10n:
  sourceCommit: 74eef2f7f9c7153af83d95e3a0b30adb17abfcee
---

{{APIRef("File and Directory Entries API")}}

Die **`HTMLInputElement.webkitdirectory`**-Eigenschaft spiegelt das [`webkitdirectory`](/de/docs/Web/HTML/Element/input/file#webkitdirectory) HTML-Attribut wider und zeigt an, dass das {{HTMLElement("input")}}-Element dem Benutzer ermöglichen sollte, Verzeichnisse anstelle von Dateien auszuwählen. Wenn ein Verzeichnis ausgewählt wird, wird das gesamte Verzeichnis inklusive seiner gesamten Inhaltsstruktur in die ausgewählten Elemente einbezogen. Die ausgewählten Dateisystemeinträge können mit der {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}}-Eigenschaft abgerufen werden.

> [!NOTE]
> Diese Eigenschaft wird in der Spezifikation `webkitdirectory` genannt, da sie ihren Ursprung als Google Chrome-spezifische API hat. Es ist wahrscheinlich, dass sie irgendwann umbenannt wird.

## Wert

Ein Boolean; `true`, wenn das {{HTMLElement("input")}}-Element nur das Auswählen von Verzeichnissen erlauben soll, oder `false`, wenn nur Dateien auswählbar sein sollen.

## Verstehen der Ergebnisse

Nachdem der Benutzer eine Auswahl getroffen hat, wird für jedes {{domxref("File")}}-Objekt in `files` die Eigenschaft {{domxref("File.webkitRelativePath")}} auf den relativen Pfad innerhalb des ausgewählten Verzeichnisses gesetzt, in dem sich die Datei befindet. Zum Beispiel, betrachten Sie dieses Dateisystem:

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

Wenn der Benutzer `Fotoalben` auswählt, dann enthält die von `files` berichtete Liste {{domxref("File")}}-Objekte für jede oben aufgeführte Datei – jedoch nicht die Verzeichnisse. Der Eintrag für `PIC2343.jpg` wird einen `webkitRelativePath` von `Fotoalben/Geburtstage/Dons 40. Geburtstag/PIC2343.jpg` haben. Dies ermöglicht es, die Hierarchie zu kennen, obwohl das {{domxref("FileList")}} flach ist.

> [!NOTE]
> Das Verhalten von `webkitRelativePath` ist in _Chromium < 72_ anders. Siehe [diesen Fehler](https://crbug.com/124187) für weitere Details.

## Beispiele

In diesem Beispiel wird ein Verzeichniswähle vorgestellt, der es dem Benutzer ermöglicht, ein oder mehrere Verzeichnisse auszuwählen. Wenn das {{domxref("HTMLElement/change_event", "change")}}-Ereignis auftritt, wird eine Liste aller Dateien innerhalb der ausgewählten Verzeichnishierarchien erstellt und angezeigt.

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
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("File.webkitRelativePath")}}
