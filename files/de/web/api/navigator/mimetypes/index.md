---
title: "Navigator: mimeTypes-Eigenschaft"
short-title: mimeTypes
slug: Web/API/Navigator/mimeTypes
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ ApiRef("HTML DOM") }}{{deprecated_header}}

Gibt ein [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)-Objekt zurück, das eine Liste von [`MimeType`](/de/docs/Web/API/MimeType)-Objekten enthält, welche die vom Browser erkannten und unterstützten MIME-Typen repräsentieren. Das Array kann abgefragt werden, um Informationen über das aktivierte Plugin zu erhalten, das verwendet wird, um eine Datei des angegebenen Typs zu handhaben. Benannte Eigenschaften des zurückgegebenen Objekts sind nicht aufzählbar (außer in sehr alten Browserversionen).

In neueren Versionen der Spezifikation ist die zurückgegebene Menge von MIME-Typen fest kodiert. Wenn PDF-Dateien inline angezeigt werden können, dann werden `application/pdf` und `text/pdf` aufgelistet. Andernfalls wird eine leere Liste zurückgegeben.

> [!NOTE]
> Verwenden Sie [`Navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled), um festzustellen, ob die Inline-Anzeige von PDF-Dateien unterstützt wird. Leiten Sie dies nicht von dieser Eigenschaft ab.

Ältere Browserversionen kodieren die von der Eigenschaft zurückgegebene Liste nicht fest und könnten andere MIME-Typen zurückgeben.

## Wert

Ein `MimeTypeArray`-Objekt, das eine `length`-Eigenschaft sowie die Methoden `item(index)` und `namedItem(name)` hat.

Wenn die Inline-Anzeige von PDF unterstützt wird, enthält dies Einträge für die MIME-Typen `application/pdf` und `text/pdf`. Andernfalls wird ein leeres `MimeTypeArray` zurückgegeben. Die Beschreibung und Dateisuffixe, die von aktivierten Plugins unterstützt werden, sind fest auf `'pdf'` und `'Portable Document Format'` kodiert.

## Beispiele

Der unten stehende Code testet, ob PDF-Dateien inline angezeigt werden können, und gibt dann die Beschreibung des Plugins und die von ihm unterstützten Dateisuffixe aus.

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.

  const { description, suffixes } = navigator.mimeTypes["application/pdf"];
  console.log(`Description: ${description}, Suffix: ${suffixes}`);
  // expected output: Description: Portable Document Format, Suffix: pdf
}
```

Beachten Sie, dass der obige Code zwar auf `application/pdf` testet, Sie ebenso `text/pdf` prüfen könnten. (Entweder beide oder keiner der MIME-Typen wird wahr sein.) Zudem müssen Sie in aktuellen Browsern die Plugin-Beschreibung und Suffixe nicht tatsächlich abrufen, da diese Informationen ebenfalls fest kodiert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
