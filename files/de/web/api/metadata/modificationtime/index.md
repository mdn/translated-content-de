---
title: "Metadata: modificationTime-Eigenschaft"
short-title: modificationTime
slug: Web/API/Metadata/modificationTime
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_header}}{{SeeCompatTable}}

Die schreibgeschützte **`modificationTime`**
Eigenschaft des [`Metadata`](/de/docs/Web/API/Metadata)-Interfaces ist ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, wann der Dateisystemeintrag (oder die vom Eintrag referenzierten Daten) zuletzt geändert wurde. Ein Dateisystemeintrag gilt als geändert, wenn sich die Metadaten oder der Inhalt der referenzierten Datei (oder des Verzeichnisses oder einer anderen Art von Dateisystemeintrag, die auf der verwendeten Plattform existieren kann) geändert haben.

## Wert

Ein {{jsxref("Date")}}-Zeitstempel, der angibt, wann der Dateisystemeintrag zuletzt geändert wurde.

## Beispiele

In diesem Beispiel wird versucht, eine bestimmte Arbeitsdatei unter `tmp/workfile.json` zu erhalten. Sobald diese Datei gefunden wurde, werden deren Metadaten abgerufen, und das Jahr des Änderungszeitstempels der Datei wird mit dem aktuellen Jahr verglichen. Wenn die Datei zuletzt in einem Jahr geändert wurde, das mindestens fünf Jahre vor dem aktuellen Jahr liegt, wird die Datei entfernt und eine neue erstellt.

```js
workingDirectory.getFile(
  "tmp/workfile.json",
  { create: true },
  (fileEntry) => {
    fileEntry.getMetadata((metadata) => {
      if (
        new Date().getFullYear() - metadata.modificationTime.getFullYear() >=
        5
      ) {
        fileEntry.remove(() => {
          workingDirectory.getFile(
            "tmp/workfile.json",
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

Dieses Merkmal wurde aus allen Spezifikationen entfernt und ist nicht im Prozess der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`Metadata`](/de/docs/Web/API/Metadata)
- [`FileSystemEntry.getMetadata()`](/de/docs/Web/API/FileSystemEntry/getMetadata)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)
