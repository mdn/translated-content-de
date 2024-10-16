---
title: "File: lastModifiedDate-Eigenschaft"
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`lastModifiedDate`**-Eigenschaft des [`File`](/de/docs/Web/API/File)-Interfaces gibt das Datum der letzten Änderung der Datei zurück. Dateien ohne bekanntes Änderungsdatum geben das aktuelle Datum zurück.

## Wert

Ein {{JSXRef("Global_Objects/Date", "Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde.

## Beispiele

```js
// fileInput is a HTMLInputElement: <input type="file" multiple id="my-file-input">
const fileInput = document.getElementById("my-file-input");

for (const file of fileInput.files) {
  console.log(
    `${file.name} has a last modified date of ${file.lastModifiedDate}`,
  );
}
```

## Reduzierte Zeitgenauigkeit

Zum Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerabdruckerkennung")}} könnte die Genauigkeit von `someFile.lastModifiedDate` abhängig von den Browsereinstellungen gerundet werden. In Firefox ist die `privacy.reduceTimerPrecision`-Einstellung standardmäßig aktiviert und auf 2ms voreingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Genauigkeit 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` beträgt, je nachdem, welcher größer ist.

Beispielsweise wird bei reduzierter Zeitgenauigkeit das Ergebnis von `someFile.lastModifiedDate.getTime()` immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

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

_Obwohl in frühen Entwürfen der File API Spezifikation vorhanden, wurde diese Eigenschaft daraus entfernt und ist jetzt nicht standardisiert. Verwenden Sie stattdessen [`File.lastModified`](/de/docs/Web/API/File/lastModified)._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`File`](/de/docs/Web/API/File)
