---
title: "FileSystemEntry: toURL()-Methode"
short-title: toURL()
slug: Web/API/FileSystemEntry/toURL
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{APIRef("File and Directory Entry API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`toURL()`** der {{domxref("FileSystemEntry")}}-Schnittstelle erstellt und gibt einen String zurück, der eine URL enthält, die verwendet werden kann, um den Dateisystemeintrag zu identifizieren. Dies erfolgt durch die Einführung eines neuen URL-Schemas—`filesystem:`—das als Wert für `src`- und `href`-Attribute verwendet werden kann.

## Syntax

```js-nolint
toURL()
toURL(mimeType)
```

### Parameter

- `mimeType` {{optional_inline}}
  - : Ein optionaler String, der den MIME-Typ angibt, der bei der Interpretation der Datei verwendet werden soll. Dies kann verwendet werden, um mit Dateien umzugehen, deren Typen vom Benutzeragenten nicht automatisch erkannt werden. Wenn dieser Parameter weggelassen wird, verwendet der Benutzeragent seine Standardalgorithmen, um die Datei zu identifizieren.

### Rückgabewert

Ein String, der eine URL enthält, die dann als Dokumentverweis in HTML-Inhalten verwendet werden kann, oder ein leerer String, wenn die URL nicht generiert werden kann (z. B. wenn die Dateisystemimplementierung `toURL()` nicht unterstützt).

## Beispiele

Wenn Sie ein {{domxref("FileSystemFileEntry")}} haben, das einer Bilddatei in einem Dateisystem entspricht, das Ihrer Website oder App verfügbar ist, können Sie `toURL()` aufrufen, um seine URL für die Verwendung in HTML zu erhalten. Wenn sich Ihre Seite unter `http://my-awesome-website.woot` befindet und Sie ein temporäres Dateisystem haben, das eine Bilddatei namens `awesomesauce.jpg` enthält, könnte die von `toURL()` zurückgegebene URL (abhängig von der Implementierung des Browsers) etwa so aussehen: `"filesystem:http://my-awesome-website.woot/temporary/awesomesauce.jpg"`.

Der folgende Code könnte so aussehen:

```js
let img = document.createElement("img");

img.src = imageFileEntry.toURL();
document.body.appendChild(img);
```

Angenommen, das zuvor beschriebene Szenario, würde das Ergebnis HTML sein, das wie folgt zum Ende des Dokuments hinzugefügt wird:

```html
<img
  src="filesystem:http://my-awesome-website.woot/temporary/awesomesauce.jpg" />
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry.removeRecursively()")}}
