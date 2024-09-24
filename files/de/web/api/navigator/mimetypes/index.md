---
title: "Navigator: mimeTypes-Eigenschaft"
short-title: mimeTypes
slug: Web/API/Navigator/mimeTypes
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ ApiRef("HTML DOM") }}{{deprecated_header}}

Gibt ein {{domxref("MimeTypeArray")}}-Objekt zurück, das eine Liste von {{domxref("MimeType")}}-Objekten enthält, die die vom Browser erkannten und unterstützten MIME-Typen darstellen. Das Array kann abgefragt werden, um Informationen über das aktivierte Plugin zu erhalten, das zum Verarbeiten einer Datei des angegebenen Typs verwendet wird. Benannte Eigenschaften des zurückgegebenen Objekts sind nicht aufzählbar (außer in sehr alten Browserversionen).

In den neuesten Versionen der Spezifikation sind die zurückgegebenen MIME-Typen festgelegt. Wenn PDF-Dateien inline angezeigt werden können, werden `application/pdf` und `text/pdf` aufgelistet. Andernfalls wird eine leere Liste zurückgegeben.

> [!NOTE]
> Verwenden Sie {{domxref("Navigator.pdfViewerEnabled")}}, um festzustellen, ob die Inline-Anzeige von PDF-Dateien unterstützt wird. Schließen Sie dies nicht aus dieser Eigenschaft.

Alte Browserversionen legen die durch die Eigenschaft zurückgegebene Liste nicht fest und könnten andere MIME-Typen zurückgeben.

## Wert

Ein `MimeTypeArray`-Objekt, das eine `length`-Eigenschaft sowie die Methoden `item(index)` und `namedItem(name)` hat.

Wenn die Inline-Anzeige von PDF unterstützt wird, enthält es Einträge für die MIME-Typen `application/pdf` und `text/pdf`. Andernfalls wird ein leeres `MimeTypeArray` zurückgegeben. Die Beschreibung und Dateisuffixe, die von aktivierten Plugins unterstützt werden, sind fest auf `'pdf'` und `'Portable Document Format'` codiert.

## Beispiele

Der untenstehende Code testet, ob PDF-Dateien inline angezeigt werden können, und gibt dann die Beschreibung des Plugins und die unterstützten Dateisuffixe aus.

```js
if ("application/pdf" in navigator.mimeTypes) {
  // Der Browser unterstützt die Inline-Anzeige von PDF-Dateien.

  const { description, suffixes } = navigator.mimeTypes["application/pdf"];
  console.log(`Description: ${description}, Suffix: ${suffixes}`);
  // erwartete Ausgabe: Description: Portable Document Format, Suffix: pdf
}
```

Beachten Sie, dass Sie in dem obigen Code zwar `application/pdf` testen, aber ebenso `text/pdf` prüfen könnten. (Entweder beide oder keiner der MIME-Typen wird wahr sein.) Zudem müssen Sie in aktuellen Browsern die Plugin-Beschreibung und Suffixe nicht unbedingt abrufen, da diese Informationen ebenfalls fest codiert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
