---
title: "Datei: lastModified Eigenschaft"
short-title: lastModified
slug: Web/API/File/lastModified
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`lastModified`**-Eigenschaft der [`File`](/de/docs/Web/API/File)-Schnittstelle liefert das Datum der letzten Änderung der Datei als Anzahl an Millisekunden seit dem Unix-Epoch (1. Januar 1970 um Mitternacht). Dateien ohne bekanntes Änderungsdatum geben das aktuelle Datum zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl an Millisekunden seit dem Unix-Epoch darstellt.

## Beispiele

Das folgende Beispiel durchläuft die von Ihnen ausgewählten Dateien und gibt an, ob jede Datei innerhalb des letzten Jahres geändert wurde.

### HTML

```html
<input type="file" id="file-picker" name="fileList" multiple />
<output id="output"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const output = document.getElementById("output");
const filePicker = document.getElementById("file-picker");

filePicker.addEventListener("change", (event) => {
  const files = event.target.files;
  const now = new Date();
  output.textContent = "";

  for (const file of files) {
    const date = new Date(file.lastModified);
    // true if the file hasn't been modified for more than 1 year
    const stale = now.getTime() - file.lastModified > 31_536_000_000;
    output.textContent += `${file.name} is ${
      stale ? "stale" : "fresh"
    } (${date}).\n`;
  }
});
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

### Dynamisch erstellte Dateien

Wenn eine Datei dynamisch erstellt wird, kann die letzte Änderungszeit in der [`File()`](/de/docs/Web/API/File/File)-Konstruktorfunktion angegeben werden. Wenn diese fehlt, wird `lastModified` normalerweise auf die aktuelle Zeit gesetzt, sobald das `File`-Objekt erstellt wird.

In Firefox kann die neue Datei, wenn die Dateiteile eine von der Festplatte gelesene Datei enthalten, diese Änderungszeit erben.

```js
const fileWithDate = new File([], "file.bin", {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); // returns 1485903600000

const fileWithoutDate = new File([], "file.bin");
console.log(fileWithoutDate.lastModified); // returns current time
```

## Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Präzision von `lastModified` je nach Browsereinstellungen reduziert werden.

Wenn ein `lastModified`-Wert dem [`File()`](/de/docs/Web/API/File/File)-Konstruktor übergeben wird, wendet der Browser keine Timer-Rundung auf die übergebene Zeit an. Dies gilt auch für von der Festplatte gelesene Änderungszeiten, deren Präzision vom Dateisystem abhängt, einschließlich derjenigen, die in Firefox von Dateiteilen ererbt werden.

Wenn der Konstruktor die aktuelle Zeit als Standard-`lastModified` verwendet, ermittelt er die aktuelle Zeit auf die gleiche Weise wie {{jsxref("Date.now()")}}. Er übernimmt die Präzision dieser Uhrenablesung ohne zusätzliche Ungenauigkeit einzuführen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`File`](/de/docs/Web/API/File)
