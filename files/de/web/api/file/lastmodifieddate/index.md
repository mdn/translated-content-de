---
title: "Datei: lastModifiedDate-Eigenschaft"
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`lastModifiedDate`** der [`File`](/de/docs/Web/API/File)-Schnittstelle gibt das Datum der letzten Änderung der Datei zurück. Dateien ohne bekanntes Änderungsdatum geben das aktuelle Datum zurück.

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

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerabdruck-Techniken")}} zu bieten, könnte die Präzision von `someFile.lastModifiedDate` je nach Browser-Einstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` beträgt, je nachdem, welcher größer ist.

Zum Beispiel wird bei reduzierter Zeitpräzision das Ergebnis von `someFile.lastModifiedDate.getTime()` immer ein Vielfaches von 2 oder mit aktiviertem `privacy.resistFingerprinting` ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) sein.

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

_Obwohl in einem frühen Entwurf der File API-Spezifikation vorhanden, wurde diese Eigenschaft daraus entfernt und ist nun nicht standardisiert. Verwenden Sie stattdessen [`File.lastModified`](/de/docs/Web/API/File/lastModified)._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`File`](/de/docs/Web/API/File)
