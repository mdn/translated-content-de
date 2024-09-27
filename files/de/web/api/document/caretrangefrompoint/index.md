---
title: "Document: caretRangeFromPoint() Methode"
short-title: caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die **`caretRangeFromPoint()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt für das Dokumentfragment zurück, das sich unter den angegebenen Koordinaten befindet.

Diese Methode ist die WebKit-eigene Implementierung der [`Document.caretPositionFromPoint`](/de/docs/Web/API/Document/caretPositionFromPoint)-Methode.

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

Einer der folgenden:

- Ein [`Range`](/de/docs/Web/API/Range).
- `Null`, wenn _x_ oder _y_ negativ, außerhalb des Viewports sind oder es keinen Texteingabenknoten gibt.

## Beispiele

Besuchen Sie die [`Document.caretPositionFromPoint`](/de/docs/Web/API/Document/caretPositionFromPoint#Examples) Seite, um ein Live-Beispiel dieser Methode zu sehen.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
