---
title: "File: lastModifiedDate-Eigenschaft"
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`lastModifiedDate`**-Eigenschaft des [`File`](/de/docs/Web/API/File)-Interfaces gibt das Datum der letzten Änderung der Datei zurück. Dateien ohne ein bekanntes Änderungsdatum geben das aktuelle Datum zurück.

## Wert

Ein {{JSXRef("Global_Objects/Date", "Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu denen die Datei zuletzt geändert wurde.

## Beispiele

```js
// fileInput is a HTMLInputElement: <input type="file" multiple id="myfileinput">
const fileInput = document.getElementById("myfileinput");

for (const file of fileInput.files) {
  console.log(
    `${file.name} has a last modified date of ${file.lastModifiedDate}`,
  );
}
```

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, könnte die Präzision von `someFile.lastModifiedDate` je nach Browser-Einstellungen gerundet werden. In Firefox ist die `privacy.reduceTimerPrecision`-Einstellung standardmäßig aktiviert und beträgt standardmäßig 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` beträgt, je nachdem, welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitpräzision das Ergebnis von `someFile.lastModifiedDate.getTime()` immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduced time precision (2ms) in Firefox 60
someFile.lastModifiedDate.getTime();
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModifiedDate.getTime();
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Spezifikationen

_Obwohl in frühen Entwürfen der File API-Spezifikation vorhanden, wurde diese Eigenschaft daraus entfernt und ist jetzt nicht standardisiert. Verwenden Sie stattdessen [`File.lastModified`](/de/docs/Web/API/File/lastModified)._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`File`](/de/docs/Web/API/File)
