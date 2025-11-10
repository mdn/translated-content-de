---
title: "Navigator: mimeTypes Eigenschaft"
short-title: mimeTypes
slug: Web/API/Navigator/mimeTypes
l10n:
  sourceCommit: 9cbfa7fc0051724913e92958b712425db77291a8
---

{{ ApiRef("HTML DOM") }}

Gibt ein [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)-Objekt zurück, das eine Liste von [`MimeType`](/de/docs/Web/API/MimeType)-Objekten enthält, die die vom Browser erkannten und unterstützten MIME-Typen repräsentieren. Das Array kann abgefragt werden, um Informationen über das aktivierte Plugin zu erhalten, das verwendet wird, um eine Datei des angegebenen Typs zu bearbeiten. Benannte Eigenschaften des zurückgegebenen Objekts sind nicht aufzählbar (außer in sehr alten Browserversionen).

Neuere Versionen der Spezifikation kodieren die zurückgegebene Menge an MIME-Typen fest. Wenn PDF-Dateien inline angezeigt werden können, werden `application/pdf` und `text/pdf` aufgelistet. Andernfalls wird eine leere Liste zurückgegeben.

> [!NOTE]
> Verwenden Sie [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled), um festzustellen, ob die Inline-Anzeige von PDF-Dateien unterstützt wird. Schließen Sie daraus nicht von dieser Eigenschaft.

Alte Browserversionen kodieren die Liste, die von der Eigenschaft zurückgegeben wird, nicht fest und könnten andere MIME-Typen zurückgeben.

## Wert

Ein `MimeTypeArray`-Objekt, das eine `length`-Eigenschaft sowie die Methoden `item(index)` und `namedItem(name)` hat.

Wenn die Inline-Anzeige von PDF unterstützt wird, enthält dies Einträge für die MIME-Typen `application/pdf` und `text/pdf`. Andernfalls wird ein leeres `MimeTypeArray` zurückgegeben. Die Beschreibung und die von aktivierten Plugins unterstützten Dateisuffixe sind fest auf `'pdf'` und `'Portable Document Format'` kodiert.

## Beispiele

Der untenstehende Code prüft, ob PDF-Dateien inline angezeigt werden können, und gibt dann die Beschreibung des Plugins und die Dateisuffixe aus, die er unterstützt.

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.

  const { description, suffixes } = navigator.mimeTypes["application/pdf"];
  console.log(`Description: ${description}, Suffix: ${suffixes}`);
  // expected output: Description: Portable Document Format, Suffix: pdf
}
```

Beachten Sie, dass der obige Code `application/pdf` testet, Sie jedoch genauso gut `text/pdf` überprüfen könnten. (Entweder sind beide oder keiner der MIME-Typen wahr.) Außerdem müssen Sie bei aktuellen Browsern die Plugin-Beschreibung und -Suffixe nicht tatsächlich abrufen, da diese Informationen ebenfalls fest kodiert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
