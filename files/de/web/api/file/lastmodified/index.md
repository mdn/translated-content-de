---
title: LastModified-Eigenschaft der Datei
short-title: lastModified
slug: Web/API/File/lastModified
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`lastModified`** schreibgeschützte Eigenschaft der [`File`](/de/docs/Web/API/File)-Schnittstelle gibt das Datum der letzten Änderung der Datei als Anzahl von Millisekunden seit dem Unix-Epoch (1. Januar 1970 um Mitternacht) an. Dateien ohne bekanntes Änderungsdatum geben das aktuelle Datum zurück.

## Wert

Eine Zahl, die die Anzahl der Millisekunden seit dem Unix-Epoch darstellt.

## Beispiele

Das folgende Beispiel wird durch die von Ihnen ausgewählten Dateien iterieren und anzeigen, ob jede Datei innerhalb des letzten Jahres geändert wurde.

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

Wenn eine Datei dynamisch erstellt wird, kann die Zeit der letzten Änderung in der [`File()`](/de/docs/Web/API/File/File)-Konstruktorfunktion übergeben werden. Wenn sie fehlt, erbt `lastModified` die aktuelle Zeit von {{jsxref("Date.now()")}} im Moment der Erstellung des `File`-Objekts.

```js
const fileWithDate = new File([], "file.bin", {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); // returns 1485903600000

const fileWithoutDate = new File([], "file.bin");
console.log(fileWithoutDate.lastModified); // returns current time
```

## Reduzierte Zeitpräzision

Zum Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} kann die Präzision von `someFile.lastModified` je nach Browsereinstellungen gerundet werden. In Firefox ist die Voreinstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms gesetzt. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Präzision 100ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitpräzision das Ergebnis von `someFile.lastModified` immer ein Vielfaches von 2 oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) sein, wenn `privacy.resistFingerprinting` aktiviert ist.

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
