---
title: "Navigator: pdfViewerEnabled Eigenschaft"
short-title: pdfViewerEnabled
slug: Web/API/Navigator/pdfViewerEnabled
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}}

Die **`pdfViewerEnabled`** Eigenschaft der {{domxref("Navigator")}} Schnittstelle gibt an, ob der Browser die Inline-Anzeige von PDF-Dateien unterstützt, wenn zu diesen navigiert wird.

Wenn die Inline-Anzeige nicht unterstützt wird, wird die PDF-Datei heruntergeladen und kann dann von einer externen Anwendung verarbeitet werden.

> [!NOTE]
> Diese Methode ersetzt eine Reihe veralteter Methoden, die zur Bestimmung der Unterstützung für die Inline-Anzeige von PDF-Dateien verwendet wurden.

## Wert

`true`, wenn der Browser PDF-Dateien inline anzeigen kann, wenn zu der Datei navigiert wird (entweder mit einem internen Viewer oder einer PDF-Viewer-Erweiterung); ansonsten `false`.

## Beispiele

Um die Unterstützung für die Inline-Anzeige von PDFs zu überprüfen:

```js
if (!navigator.pdfViewerEnabled) {
  // Der Browser unterstützt die Inline-Anzeige von PDF-Dateien nicht.
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
