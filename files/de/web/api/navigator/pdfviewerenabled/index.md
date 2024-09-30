---
title: "Navigator: pdfViewerEnabled-Eigenschaft"
short-title: pdfViewerEnabled
slug: Web/API/Navigator/pdfViewerEnabled
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`pdfViewerEnabled`** des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt an, ob der Browser die Inline-Anzeige von PDF-Dateien beim Navigieren zu ihnen unterstützt.

Wenn die Inline-Anzeige nicht unterstützt wird, wird das PDF heruntergeladen und kann dann möglicherweise von einer externen Anwendung verarbeitet werden.

> [!NOTE]
> Diese Methode ersetzt eine Reihe von veralteten Methoden, um die Unterstützung für die Inline-Anzeige von PDF-Dateien zu ermitteln.

## Wert

`true`, wenn der Browser PDF-Dateien beim Navigieren zur Datei inline anzeigen kann (entweder mit einem internen Viewer oder einer PDF-Viewer-Erweiterung); andernfalls `false`.

## Beispiele

Um die Unterstützung der Inline-Anzeige von PDFs zu überprüfen:

```js
if (!navigator.pdfViewerEnabled) {
  // The browser does not support inline viewing of PDF files.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
