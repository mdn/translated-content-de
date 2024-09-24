---
title: "Metadaten: Eigenschaft size"
short-title: size
slug: Web/API/Metadata/size
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_header}}{{SeeCompatTable}}

Die schreibgeschützte **`size`**-Eigenschaft der {{domxref("Metadata")}}-Schnittstelle gibt die Größe in Bytes des referenzierten Datei- oder anderen Dateisystemobjekts auf der Festplatte an.

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
          /* Protokolldatei entfernt; hier etwas Cleveres tun */
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
- {{domxref("Metadata")}}
- {{domxref("FileSystemEntry.getMetadata()")}}
- {{domxref("FileSystemFileEntry")}}
