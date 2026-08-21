---
title: "FileSystemEntry: toURL() Methode"
short-title: toURL()
slug: Web/API/FileSystemEntry/toURL
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File and Directory Entry API")}}{{Non-standard_Header}}

Die Methode **`toURL()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interfaces erstellt und gibt einen Zeichenfolgen-URL zurück, der verwendet werden kann, um das Dateisystem-Eintrag zu identifizieren. Dies geschieht, indem ein neues URL-Schema—`filesystem:`—eingeführt wird, das als Wert der Attribute `src` und `href` verwendet werden kann.

## Syntax

```js-nolint
toURL()
toURL(mimeType)
```

### Parameter

- `mimeType` {{optional_inline}}
  - : Ein optionaler String, der den MIME-Typ angibt, der beim Interpretieren der Datei verwendet werden soll. Dies kann dazu verwendet werden, mit Dateien umzugehen, deren Typen vom Benutzeragenten nicht automatisch erkannt werden. Wenn dieser Parameter weggelassen wird, verwendet der Benutzeragent seine Standardalgorithmen, um die Datei zu identifizieren.

### Rückgabewert

Ein String, der eine URL enthält, die dann als Dokumentreferenz in HTML-Inhalten verwendet werden kann, oder ein leerer String, wenn die URL nicht generiert werden kann (zum Beispiel, wenn die Dateisystemimplementierung `toURL()` nicht unterstützt).

## Beispiele

Wenn Sie ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) haben, das einer Bilddatei in einem Dateisystem entspricht, das Ihrer Website oder App zur Verfügung steht, können Sie `toURL()` aufrufen, um seine URL für die Verwendung in HTML zu erhalten. Wenn sich Ihre Seite unter `http://my-awesome-website.woot` befindet und Sie ein temporäres Dateisystem haben, das eine Bilddatei mit dem Namen `awesome-sauce.jpg` enthält, könnte die von `toURL()` zurückgegebene URL (je nach Implementierung des Browsers) so aussehen: `"filesystem:http://my-awesome-website.woot/temporary/awesome-sauce.jpg"`.

Code, der dies verwendet, könnte so aussehen:

```js
const img = document.createElement("img");
img.src = imageFileEntry.toURL();
img.alt = "";
document.body.appendChild(img);
```

Angenommen, das vor dem Code erwähnte Szenario würde das Resultat HTML sein, das folgendermaßen aussieht und am Ende des Dokuments angehängt wird:

```html
<img
  src="filesystem:http://my-awesome-website.woot/temporary/awesome-sauce.jpg"
  alt="" />
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively)
