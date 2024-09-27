---
title: "File: lastModifiedDate Eigenschaft"
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`lastModifiedDate`** der [`File`](/de/docs/Web/API/File)-Schnittstelle gibt das Datum der letzten Änderung der Datei zurück. Dateien ohne bekanntes Änderungsdatum geben das aktuelle Datum zurück.

## Wert

Ein {{JSXRef("Global_Objects/Date", "Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde.

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

## Präzisionsreduzierung der Zeit

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Genauigkeit von `someFile.lastModifiedDate` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms festgelegt. Sie können auch `privacy.resistFingerprinting` aktivieren, wobei die Präzision auf 100ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem welcher größer ist, gesetzt wird.

Zum Beispiel wird bei reduzierter Zeitpräzision das Ergebnis von `someFile.lastModifiedDate.getTime()` immer ein Vielfaches von 2 sein oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

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

_Obwohl in frühen Entwürfen der File API-Spezifikation enthalten, wurde diese Eigenschaft daraus entfernt und ist nun nicht standardisiert. Verwenden Sie stattdessen [`File.lastModified`](/de/docs/Web/API/File/lastModified)._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`File`](/de/docs/Web/API/File)
