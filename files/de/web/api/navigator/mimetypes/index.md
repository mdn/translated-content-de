---
title: "Navigator: mimeTypes-Eigenschaft"
short-title: mimeTypes
slug: Web/API/Navigator/mimeTypes
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ ApiRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`mimeTypes`** des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)-Objekt zurück. Dieses enthält eine Liste von [`MimeType`](/de/docs/Web/API/MimeType)-Objekten, die die vom Browser erkannten und unterstützten MIME-Typen repräsentieren.
Das Array kann abgefragt werden, um Informationen über das aktivierte Plugin zu erhalten, das eine Datei des angegebenen Typs verarbeitet.
Benannte Eigenschaften des zurückgegebenen Objekts sind nicht aufzählbar (außer in sehr alten Browserversionen).

Neuere Versionen der Spezifikation legen die zurückgegebene Menge an MIME-Typen fest.
Wenn PDF-Dateien direkt im Browser angezeigt werden können, enthält sie `application/pdf` und `text/pdf`.
Andernfalls wird eine leere Liste zurückgegeben.

> [!NOTE]
> Verwenden Sie [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled), um festzustellen, ob die direkte Anzeige von PDF-Dateien unterstützt wird. Leiten Sie dies nicht aus dieser Eigenschaft ab.

Ältere Browserversionen verwenden keine fest vorgegebene Liste für den Rückgabewert dieser Eigenschaft und geben möglicherweise weitere MIME-Typen zurück.

## Wert

Ein `MimeTypeArray`-Objekt mit einer `length`-Eigenschaft sowie den Methoden `item(index)` und `namedItem(name)`.

Wenn die direkte Anzeige von PDF-Dateien unterstützt wird, enthält es Einträge für die MIME-Typen `application/pdf` und `text/pdf`.
Andernfalls wird ein leeres `MimeTypeArray` zurückgegeben.
Die Beschreibung und die Dateiendungen, die von aktivierten Plugins unterstützt werden, sind fest auf `'pdf'` beziehungsweise `'Portable Document Format'` gesetzt.

## Beispiele

Der folgende Code prüft, ob PDF-Dateien direkt im Browser angezeigt werden können, und gibt anschließend die Beschreibung des Plugins und die von ihm unterstützten Dateiendungen aus.

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.

  const { description, suffixes } = navigator.mimeTypes["application/pdf"];
  console.log(`Description: ${description}, Suffix: ${suffixes}`);
  // expected output: Description: Portable Document Format, Suffix: pdf
}
```

Beachten Sie, dass der obige Code zwar `application/pdf` prüft, Sie aber ebenso `text/pdf` prüfen könnten. (Entweder sind beide MIME-Typen vorhanden oder keiner von beiden.)
Außerdem müssen Sie in aktuellen Browsern die Plugin-Beschreibung und die Dateiendungen nicht abfragen, da auch diese Informationen fest vorgegeben sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
