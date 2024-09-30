---
title: "FileSystemEntry: toURL()-Methode"
short-title: toURL()
slug: Web/API/FileSystemEntry/toURL
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{APIRef("File and Directory Entry API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`toURL()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces erstellt und gibt einen String zurück, der eine URL enthält, die zur Identifikation des Dateisystemeintrags verwendet werden kann. Dies geschieht durch die Einführung eines neuen URL-Schemas—`filesystem:`—das als Wert für `src`- und `href`-Attribute verwendet werden kann.

## Syntax

```js-nolint
toURL()
toURL(mimeType)
```

### Parameter

- `mimeType` {{optional_inline}}
  - : Ein optionaler String, der den zu verwendenden MIME-Typ angibt, wenn die Datei interpretiert wird. Dies kann helfen, mit Dateien umzugehen, deren Typen vom Benutzeragenten nicht automatisch erkannt werden. Wenn dieser Parameter weggelassen wird, verwendet der Benutzeragent seine Standardalgorithmen, um die Datei zu identifizieren.

### Rückgabewert

Ein String, der eine URL enthält, die dann als Dokumentreferenz in HTML-Inhalten verwendet werden kann, oder ein leerer String, wenn die URL nicht generiert werden kann (zum Beispiel, wenn die Dateisystemimplementierung `toURL()` nicht unterstützt).

## Beispiele

Wenn Sie ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) haben, das einer Bilddatei in einem Dateisystem entspricht, das Ihrer Website oder App zur Verfügung steht, können Sie `toURL()` aufrufen, um dessen URL für die Verwendung in HTML zu erhalten. Wenn sich Ihre Seite unter `http://my-awesome-website.woot` befindet und Sie ein temporäres Dateisystem mit einer Bilddatei namens `awesomesauce.jpg` haben, könnte die von `toURL()` zurückgegebene URL (je nach Implementierung des Browsers) in etwa so aussehen: `"filesystem:http://my-awesome-website.woot/temporary/awesomesauce.jpg"`.

Der Code, der dies nutzt, könnte folgendermaßen aussehen:

```js
let img = document.createElement("img");

img.src = imageFileEntry.toURL();
document.body.appendChild(img);
```

Angenommen, das zuvor erwähnte Szenario trifft zu, würde das Ergebnis etwa so aussehen, dass dieser HTML-Code am Ende des Dokuments angehängt wird:

```html
<img
  src="filesystem:http://my-awesome-website.woot/temporary/awesomesauce.jpg" />
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively)
