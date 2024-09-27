---
title: "Navigator: mimeTypes Eigenschaft"
short-title: mimeTypes
slug: Web/API/Navigator/mimeTypes
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ ApiRef("HTML DOM") }}{{deprecated_header}}

Gibt ein [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)-Objekt zurück, das eine Liste von [`MimeType`](/de/docs/Web/API/MimeType)-Objekten enthält, die die MIME-Typen darstellen, die vom Browser erkannt und unterstützt werden. Das Array kann abgefragt werden, um Informationen über das aktivierte Plugin zu erhalten, das verwendet wird, um eine Datei des angegebenen Typs zu verarbeiten. Benannte Eigenschaften des zurückgegebenen Objekts sind nicht aufzählbar (außer in sehr alten Browserversionen).

Neuere Versionen der Spezifikation kodieren die zurückgegebene Menge an MIME-Typen fest. Wenn PDF-Dateien inline angezeigt werden können, werden `application/pdf` und `text/pdf` aufgelistet. Andernfalls wird eine leere Liste zurückgegeben.

> [!NOTE]
> Verwenden Sie [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled), um festzustellen, ob die Inline-Anzeige von PDF-Dateien unterstützt wird. Schließen Sie dies nicht aus dieser Eigenschaft ab.

Veraltete Browserversionen kodieren die von der Eigenschaft zurückgegebene Liste nicht fest, und es könnten andere MIME-Typen zurückgegeben werden.

## Wert

Ein `MimeTypeArray`-Objekt, das eine `length`-Eigenschaft sowie `item(index)` und `namedItem(name)`-Methoden hat.

Wenn die PDF-Inline-Anzeige unterstützt wird, gibt es Einträge für die MIME-Typen `application/pdf` und `text/pdf`. Andernfalls wird ein leeres `MimeTypeArray` zurückgegeben. Die Beschreibung und die von aktivierten Plugins unterstützten Dateiendungen sind fest auf `'pdf'` und `'Portable Document Format'` kodiert.

## Beispiele

Der untenstehende Code testet, ob PDF-Dateien inline angezeigt werden können, und gibt dann die Beschreibung des Plugins und die unterstützten Dateiendungen aus.

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.

  const { description, suffixes } = navigator.mimeTypes["application/pdf"];
  console.log(`Description: ${description}, Suffix: ${suffixes}`);
  // expected output: Description: Portable Document Format, Suffix: pdf
}
```

Beachten Sie, dass der obige Code, während er `application/pdf` testet, ebenso gut `text/pdf` prüfen könnte. (Entweder sind beide MIME-Typen wahr oder keiner von beiden.) Darüber hinaus müssen Sie bei aktuellen Browsern die Plugin-Beschreibung und Dateiendungen nicht tatsächlich abrufen, da diese Informationen ebenfalls hart kodiert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
