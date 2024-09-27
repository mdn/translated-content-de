---
title: "FileSystemEntry: toURL()-Methode"
short-title: toURL()
slug: Web/API/FileSystemEntry/toURL
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{APIRef("File and Directory Entry API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`toURL()`**-Methode der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Schnittstelle erstellt und gibt einen String zurück, der eine URL enthält, die zur Identifizierung des Dateisystemeintrags verwendet werden kann. Dies geschieht durch die Einführung eines neuen URL-Schemas—`filesystem:`—das als Wert für `src` und `href` Attribute verwendet werden kann.

## Syntax

```js-nolint
toURL()
toURL(mimeType)
```

### Parameter

- `mimeType` {{optional_inline}}
  - : Ein optionaler String, der den MIME-Typ angibt, der bei der Interpretation der Datei verwendet werden soll. Dies kann verwendet werden, um mit Dateien umzugehen, deren Typen nicht automatisch vom Benutzeragenten erkannt werden. Wenn dieser Parameter weggelassen wird, verwendet der Benutzeragent seine Standardalgorithmen zur Identifizierung der Datei.

### Rückgabewert

Ein String, der eine URL enthält, die dann als Dokumentreferenz in HTML-Inhalten verwendet werden kann, oder ein leerer String, wenn die URL nicht generiert werden kann (zum Beispiel, wenn die Dateisystemimplementierung `toURL()` nicht unterstützt).

## Beispiele

Wenn Sie eine [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) haben, die zu einer Bilddatei in einem Dateisystem gehört, das Ihrer Website oder App zur Verfügung steht, können Sie `toURL()` aufrufen, um ihre URL für die Verwendung in HTML zu erhalten. Wenn sich Ihre Website unter `http://my-awesome-website.woot` befindet und Sie ein temporäres Dateisystem haben, das eine Bilddatei namens `awesomesauce.jpg` enthält, könnte die von `toURL()` zurückgegebene URL (abhängig von der Implementierung des Browsers) in etwa so aussehen: `"filesystem:http://my-awesome-website.woot/temporary/awesomesauce.jpg"`.

Der Code, der dies verwendet, könnte so aussehen:

```js
let img = document.createElement("img");

img.src = imageFileEntry.toURL();
document.body.appendChild(img);
```

Angenommen, das zuvor erwähnte Szenario, das Ergebnis wäre HTML, das dem Dokument hinzugefügt wird und folgendermaßen aussieht:

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
