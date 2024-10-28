---
title: "Metadaten: modificationTime-Eigenschaft"
short-title: modificationTime
slug: Web/API/Metadata/modificationTime
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_header}}{{SeeCompatTable}}

Die schreibgeschützte **`modificationTime`**-Eigenschaft der [`Metadata`](/de/docs/Web/API/Metadata)-Schnittstelle ist ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der der Dateisystemeintrag (oder die vom Eintrag referenzierten Daten) zuletzt geändert wurde. Ein Dateisystemeintrag gilt als geändert, wenn die Metadaten oder der Inhalt der referenzierten Datei (oder des Verzeichnisses oder einer anderen Art von Dateisystemeintrag, die auf der verwendeten Plattform existieren könnte) verändert wurden.

## Wert

Ein {{jsxref("Date")}}-Zeitstempel, der anzeigt, wann der Dateisystemeintrag zuletzt geändert wurde.

## Beispiele

Dieses Beispiel versucht, eine bestimmte Arbeitsdatei unter `tmp/work-file.json` zu erhalten. Sobald diese Datei gefunden wurde, werden ihre Metadaten abgerufen und das Änderungsjahr des Zeitstempels der Datei mit dem aktuellen Jahr verglichen. Wenn sie in einem Jahr geändert wurde, das mindestens fünf Jahre vor dem aktuellen Jahr liegt, wird die Datei entfernt und eine neue erstellt.

```js
workingDirectory.getFile(
  "tmp/work-file.json",
  { create: true },
  (fileEntry) => {
    fileEntry.getMetadata((metadata) => {
      if (
        new Date().getFullYear() - metadata.modificationTime.getFullYear() >=
        5
      ) {
        fileEntry.remove(() => {
          workingDirectory.getFile(
            "tmp/work-file.json",
            { create: true },
            (newEntry) => {
              fileEntry = newEntry;
            },
          );
        });
      }
    });
  },
  handleError,
);
```

## Spezifikationen

Diese Funktion wurde aus allen Spezifikationen entfernt und befindet sich nicht im Prozess der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`Metadata`](/de/docs/Web/API/Metadata)
- [`FileSystemEntry.getMetadata()`](/de/docs/Web/API/FileSystemEntry/getMetadata)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)
