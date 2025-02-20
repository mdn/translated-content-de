---
title: "FileSystemEntry: fullPath-Eigenschaft"
short-title: fullPath
slug: Web/API/FileSystemEntry/fullPath
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`fullPath`**-Eigenschaft
des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces gibt einen String zurück, der
den vollständigen, absoluten Pfad vom Wurzelverzeichnis des Dateisystems zu der Datei
spezifiziert, die durch den Eintrag repräsentiert wird.

Dies kann auch als ein Pfad betrachtet werden, der relativ zum Wurzelverzeichnis ist, mit einem
"/" davor, um ihn absolut zu machen.

## Wert

Ein String, der den vollständigen Pfad des Eintrags angibt.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die mit einem Dateisystem aufgerufen wird; sie erhält dann ein
[`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) für eine Datei namens `data.json` und gibt
deren vollständigen Pfad zurück.

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

Offensichtlich ist dies etwas konstruiert, da wir wissen, dass der vollständige Pfad der Datei
`"/data.json"` ist, nachdem wir ihn selbst nachgeschlagen haben, aber das Konzept gilt
für Szenarien, in denen Sie ihn nicht kennen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
