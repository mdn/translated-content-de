---
title: lastModifiedDate-Eigenschaft
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Non-standard_Header}}

Die schreibgeschützte **`lastModifiedDate`**-Eigenschaft des [`File`](/de/docs/Web/API/File)-Interfaces gibt das Datum der letzten Änderung der Datei zurück. Dateien ohne bekanntes Änderungsdatum geben das aktuelle Datum zurück.

## Wert

Ein {{JSXRef("Global_Objects/Date", "Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde. Der von `someFile.lastModifiedDate.getTime()` zurückgegebene Zeitstempel erbt den Wert und die Präzision von [`File.lastModified`](/de/docs/Web/API/File/lastModified), ohne zusätzliche Ungenauigkeiten einzuführen.

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

## Spezifikationen

_Obwohl in frühen Entwürfen der File API-Spezifikation vorhanden, wurde diese Eigenschaft daraus entfernt und ist nun nicht standardisiert. Verwenden Sie stattdessen [`File.lastModified`](/de/docs/Web/API/File/lastModified)._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`File`](/de/docs/Web/API/File)
