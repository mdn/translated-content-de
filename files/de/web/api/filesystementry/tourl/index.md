---
title: "FileSystemEntry: toURL() Methode"
short-title: toURL()
slug: Web/API/FileSystemEntry/toURL
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entry API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`toURL()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interfaces erstellt und gibt einen String zurück, der eine URL enthält, die zur Identifizierung des Dateisystemeintrags verwendet werden kann. Dies erfolgt durch die Einführung eines neuen URL-Schemas—`filesystem:`—das als Wert der `src` und `href` Attribute verwendet werden kann.

## Syntax

```js-nolint
toURL()
toURL(mimeType)
```

### Parameter

- `mimeType` {{optional_inline}}
  - : Ein optionaler String, der den MIME-Typ angibt, der bei der Interpretation der Datei verwendet werden soll. Dies kann verwendet werden, um mit Dateien umzugehen, deren Typen nicht automatisch vom Benutzeragenten erkannt werden. Wenn dieser Parameter weggelassen wird, verwendet der Benutzeragent seine Standardalgorithmen, um die Datei zu identifizieren.

### Rückgabewert

Ein String, der eine URL enthält, die dann als Dokumentreferenz in HTML-Inhalten verwendet werden kann, oder ein leerer String, wenn die URL nicht generiert werden kann (z.B. wenn die Dateisystemimplementierung `toURL()` nicht unterstützt).

## Beispiele

Wenn Sie ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) haben, das einer Bilddatei in einem Dateisystem entspricht, das Ihrer Website oder App zur Verfügung steht, können Sie `toURL()` aufrufen, um ihre URL für die Verwendung in HTML zu erhalten. Wenn sich Ihre Seite unter `http://my-awesome-website.woot` befindet und Sie ein temporäres Dateisystem haben, das eine Bilddatei namens `awesome-sauce.jpg` enthält, könnte die von `toURL()` zurückgegebene URL (abhängig von der Implementierung des Browsers) ungefähr so aussehen: `"filesystem:http://my-awesome-website.woot/temporary/awesome-sauce.jpg"`.

Code, der dies nutzt, könnte folgendermaßen aussehen:

```js
let img = document.createElement("img");

img.src = imageFileEntry.toURL();
document.body.appendChild(img);
```

Angenommen, das zuvor erwähnte Szenario vor dem Code wird umgesetzt, würde das Ergebnis HTML wie dieses sein, das an das Ende des Dokuments angehängt wird:

```html
<img
  src="filesystem:http://my-awesome-website.woot/temporary/awesome-sauce.jpg" />
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively)
