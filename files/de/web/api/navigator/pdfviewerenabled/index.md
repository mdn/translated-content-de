---
title: "Navigator: Eigenschaft pdfViewerEnabled"
short-title: pdfViewerEnabled
slug: Web/API/Navigator/pdfViewerEnabled
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}}

Die **`pdfViewerEnabled`** schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt an, ob der Browser die Inline-Anzeige von PDF-Dateien beim Navigieren unterstützt.

Wenn die Inline-Anzeige nicht unterstützt wird, wird die PDF heruntergeladen und kann dann von einer externen Anwendung verarbeitet werden.

> [!NOTE]
> Diese Methode ersetzt eine Reihe von älteren Methoden zur Ermittlung der Unterstützung für die Inline-Anzeige von PDF-Dateien.

## Wert

`true`, wenn der Browser PDF-Dateien inline anzeigen kann, beim Navigieren zur Datei (entweder mit einem internen Viewer oder einer PDF-Viewer-Erweiterung); andernfalls `false`.

## Beispiele

Um die Unterstützung für die Inline-Anzeige von PDF zu überprüfen:

```js
if (!navigator.pdfViewerEnabled) {
  // The browser does not support inline viewing of PDF files.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
