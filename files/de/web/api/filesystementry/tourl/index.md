---
title: "FileSystemEntry: toURL()-Methode"
short-title: toURL()
slug: Web/API/FileSystemEntry/toURL
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("File and Directory Entry API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`toURL()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces erstellt und
gibt einen String zurück, der eine URL enthält, die genutzt werden kann, um den Dateisystemeintrag zu identifizieren.
Dies geschieht, indem ein neues URL-Schema—`filesystem:`—freigelegt wird, das als
Wert der `src`- und `href`-Attribute verwendet werden kann.

## Syntax

```js-nolint
toURL()
toURL(mimeType)
```

### Parameter

- `mimeType` {{optional_inline}}
  - : Ein optionaler String, der den MIME-Typ angibt, der beim Interpretieren der Datei verwendet werden soll. Dies
    kann hilfreich sein, um mit Dateien umzugehen, deren Typen vom Benutzeragenten nicht automatisch erkannt werden. Wenn dieser Parameter weggelassen wird, verwendet der Benutzeragent seine Standardalgorithmen zur Erkennung der Datei.

### Rückgabewert

Ein String, der eine URL enthält, die dann als Dokumentreferenz in HTML-Inhalten verwendet werden kann, oder ein leerer String, wenn die URL nicht generiert werden kann (zum Beispiel, wenn die Dateisystemimplementierung `toURL()` nicht unterstützt).

## Beispiele

Wenn Sie einen [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) haben, der einer Bilddatei in einem
für Ihre Website oder App verfügbaren Dateisystem entspricht, können Sie `toURL()` aufrufen, um
deren URL zur Verwendung in HTML zu erhalten. Wenn Ihre Website unter
`http://my-awesome-website.woot` gelegen ist und Sie ein temporäres Dateisystem haben, das
eine Bilddatei namens `awesome-sauce.jpg` enthält, könnte die von
`toURL()` zurückgegebene URL (abhängig von der Implementierung des Browsers) etwa
`"filesystem:http://my-awesome-website.woot/temporary/awesome-sauce.jpg"` lauten.

Code, der dies verwendet, könnte so aussehen:

```js
const img = document.createElement("img");
img.src = imageFileEntry.toURL();
img.alt = "";
document.body.appendChild(img);
```

Angenommen, das oben erwähnte Szenario ist der Fall, wäre das Ergebnis HTML, das
wie folgt aussieht und an das Ende des Dokuments angehängt wird:

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
