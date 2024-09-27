---
title: "Metadata: size-Eigenschaft"
short-title: size
slug: Web/API/Metadata/size
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_header}}{{SeeCompatTable}}

Die schreibgeschützte **`size`**-Eigenschaft der [`Metadata`](/de/docs/Web/API/Metadata)-Schnittstelle gibt die Größe in Bytes der referenzierten Datei oder eines anderen Dateisystemobjekts auf der Festplatte an.

## Wert

Eine Zahl, die die Größe der Datei in Bytes angibt.

## Beispiele

Dieses Beispiel überprüft die Größe einer Protokolldatei und entfernt sie, wenn sie größer als ein Megabyte ist.

```js
workingDirectory.getFile(
  "log/important.log",
  {},
  (fileEntry) => {
    fileEntry.getMetadata((metadata) => {
      if (metadata.size > 1048576) {
        fileEntry.remove(() => {
          /* log file removed; do something clever here */
        });
      }
    });
  },
  handleError,
);
```

## Spezifikationen

Dieses Merkmal wurde aus allen Spezifikationen entfernt und befindet sich nicht im Prozess der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`Metadata`](/de/docs/Web/API/Metadata)
- [`FileSystemEntry.getMetadata()`](/de/docs/Web/API/FileSystemEntry/getMetadata)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)
