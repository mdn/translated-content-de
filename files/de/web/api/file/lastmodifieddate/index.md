---
title: "Datei: lastModifiedDate-Eigenschaft"
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`lastModifiedDate`**-Eigenschaft der {{domxref("File")}}-Schnittstelle gibt das Datum der letzten Änderung der Datei zurück. Dateien ohne bekanntes Datum der letzten Änderung geben das aktuelle Datum zurück.

## Wert

Ein {{JSXRef("Global_Objects/Date", "Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu denen die Datei zuletzt geändert wurde.

## Beispiele

```js
// fileInput ist ein HTMLInputElement: <input type="file" multiple id="myfileinput">
const fileInput = document.getElementById("myfileinput");

for (const file of fileInput.files) {
  console.log(
    `${file.name} hat ein letztes Änderungsdatum von ${file.lastModifiedDate}`,
  );
}
```

## Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und [Fingerabdruck-Erstellung](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Präzision von `someFile.lastModifiedDate` je nach Browsereinstellungen gerundet werden. In Firefox ist die Präferenz `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, wobei dann die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, was größer ist, beträgt.

Zum Beispiel wird bei reduzierter Zeitpräzision das Ergebnis von `someFile.lastModifiedDate.getTime()` immer ein Vielfaches von 2 oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting` sein.

```js
// reduzierte Zeitpräzision (2ms) in Firefox 60
someFile.lastModifiedDate.getTime();
// Möglicherweise:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduzierte Zeitpräzision mit aktiviertem `privacy.resistFingerprinting`
someFile.lastModifiedDate.getTime();
// Möglicherweise:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Spezifikationen

_Obwohl in einem frühen Entwurf der File API-Spezifikation vorhanden, wurde diese Eigenschaft daraus entfernt und ist nun nicht standardisiert. Verwenden Sie stattdessen {{domxref("File.lastModified")}}._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("File")}}
