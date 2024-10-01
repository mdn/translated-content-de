---
title: "File: lastModified-Eigenschaft"
short-title: lastModified
slug: Web/API/File/lastModified
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`lastModified`**-Schreibgeschützte Eigenschaft des [`File`](/de/docs/Web/API/File)-Interfaces liefert das Datum der letzten Änderung der Datei als Anzahl der Millisekunden seit dem Unix-Epoch (1. Januar 1970 um Mitternacht). Dateien ohne ein bekanntes Änderungsdatum geben das aktuelle Datum zurück.

## Wert

Eine Zahl, die die Anzahl der Millisekunden seit dem Unix-Epoch darstellt.

## Beispiele

Im folgenden Beispiel wird durch die ausgewählten Dateien iteriert und angezeigt, ob jede Datei innerhalb des letzten Jahres geändert wurde.

### HTML

```html
<input type="file" id="filepicker" name="fileList" multiple />
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
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
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

Wenn eine Datei dynamisch erstellt wird, kann die Zeit der letzten Änderung im `File()`-Konstruktor angegeben werden. Fehlt diese, übernimmt `lastModified` die aktuelle Zeit von {{jsxref("Date.now()")}} in dem Moment, in dem das `File`-Objekt erstellt wird.

```js
const fileWithDate = new File([], "file.bin", {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); // returns 1485903600000

const fileWithoutDate = new File([], "file.bin");
console.log(fileWithoutDate.lastModified); // returns current time
```

## Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Genauigkeit von `someFile.lastModified` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms voreingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist, beträgt.

Zum Beispiel ist bei reduzierter Zeitpräzision das Ergebnis von `someFile.lastModified` immer ein Vielfaches von 2, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduced time precision (2ms) in Firefox 60
someFile.lastModified;
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModified;
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`File`](/de/docs/Web/API/File)
