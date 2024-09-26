---
title: "FileSystemEntry: fullPath-Eigenschaft"
short-title: fullPath
slug: Web/API/FileSystemEntry/fullPath
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`fullPath`**-Eigenschaft des {{domxref("FileSystemEntry")}}-Interfaces gibt einen String zurück, der den vollständigen, absoluten Pfad vom Stamm des Dateisystems zu der Datei angibt, die durch den Eintrag repräsentiert wird.

Dies kann auch als ein Pfad angesehen werden, der relativ zum Stammverzeichnis ist, mit einem vorangestellten "/" um ihn absolut zu machen.

## Wert

Ein String, der den vollständigen Pfad des Eintrags angibt.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die mit einem Dateisystem aufgerufen wird; sie erhält dann ein {{domxref("FileSystemFileEntry")}} für eine Datei namens `data.json` und gibt deren vollständigen Pfad zurück.

```js
function gotFileSystem(fs) {
  let path = "";

  fs.root.getFile(
    "data.json",
    { create: true, exclusive: true },
    (entry) => {
      path = fullPath;
    },
    handleError(error),
  );

  return path;
}
```

Offensichtlich ist dies etwas konstruiert, da wir wissen, dass der vollständige Pfad der Datei `"/data.json"` ist, da wir ihn uns gerade selbst angesehen haben, aber das Konzept gilt für Szenarien, in denen Sie es nicht wissen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}