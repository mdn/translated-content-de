---
title: "Dokument: caretRangeFromPoint() Methode"
short-title: caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
l10n:
  sourceCommit: 1c7b8308c11efc3468214b997eb1ac4150f76c18
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die **`caretRangeFromPoint()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt für das Dokumentfragment unter den angegebenen Koordinaten zurück.

Diese Methode stammt aus der Zeit vor dem Konzept des Shadow DOM und liefert in einem Dokument, das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte enthält, unvorhersehbare und implementierungsspezifische Ergebnisse.

Verwenden Sie stattdessen [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) in unterstützenden Browsern, da es sich um eine standardisierte Methode handelt, die die Caret-Position innerhalb von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanzen zurückgeben kann, vorausgesetzt, die relevanten Shadow-Roots werden im `options`-Parameter übergeben.

## Syntax

```js-nolint
caretRangeFromPoint(x, y)
```

### Parameter

- `x`
  - : Eine horizontale Position innerhalb des aktuellen Viewports.
- `y`
  - : Eine vertikale Position innerhalb des aktuellen Viewports.

### Rückgabewert

Eines der folgenden:

- Ein [`Range`](/de/docs/Web/API/Range).
- `null`, wenn _x_ oder _y_ negativ sind, außerhalb des Viewports liegen oder kein Texteingabeknoten vorhanden ist.

## Beispiele

Besuchen Sie die Seite [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint#Examples), um ein Live-Beispiel dieser Methode zu sehen.

## Spezifikationen

Keine Spezifikation vorhanden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
