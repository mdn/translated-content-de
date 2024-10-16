---
title: "FileSystemEntry: toURL() Methode"
short-title: toURL()
slug: Web/API/FileSystemEntry/toURL
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("File and Directory Entry API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`toURL()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interfaces erstellt und gibt einen String zurück, der eine URL enthält, mit der der Dateisystemeintrag identifiziert werden kann. Dies geschieht durch das Bereitstellen eines neuen URL-Schemas—`filesystem:`—das als Wert für die Attribute `src` und `href` verwendet werden kann.

## Syntax

```js-nolint
toURL()
toURL(mimeType)
```

### Parameter

- `mimeType` {{optional_inline}}
  - : Ein optionaler String, der den MIME-Typ angibt, der beim Interpretieren der Datei verwendet werden soll. Dies kann hilfreich sein, um mit Dateien umzugehen, deren Typen vom Benutzeragenten nicht automatisch erkannt werden. Wenn dieser Parameter weggelassen wird, verwendet der Benutzeragent seine Standardalgorithmen, um die Datei zu identifizieren.

### Rückgabewert

Ein String, der eine URL enthält, die dann als Dokumentenreferenz in HTML-Inhalten verwendet werden kann, oder ein leerer String, wenn die URL nicht generiert werden kann (z. B. wenn die Dateisystemimplementierung `toURL()` nicht unterstützt).

## Beispiele

Wenn Sie einen [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) besitzen, der einer Bilddatei in einem für Ihre Website oder App verfügbaren Dateisystem entspricht, können Sie `toURL()` aufrufen, um dessen URL für die Verwendung in HTML zu erhalten. Wenn sich Ihre Website unter `http://my-awesome-website.woot` befindet und Sie ein temporäres Dateisystem haben, das eine Bilddatei namens `awesome-sauce.jpg` enthält, könnte die von `toURL()` zurückgegebene URL (abhängig von der Implementierung des Browsers) in etwa so aussehen: `"filesystem:http://my-awesome-website.woot/temporary/awesome-sauce.jpg"`.

Code, der dies verwendet, könnte so aussehen:

```js
let img = document.createElement("img");

img.src = imageFileEntry.toURL();
document.body.appendChild(img);
```

Unter der Annahme des vor dem Code genannten Szenarios würde das Ergebnis HTML sein, das so aussieht, als würde es am Ende des Dokuments angehängt:

```html
<img
  src="filesystem:http://my-awesome-website.woot/temporary/awesome-sauce.jpg" />
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File und Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively)
