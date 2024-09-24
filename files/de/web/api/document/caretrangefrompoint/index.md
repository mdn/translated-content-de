---
title: "Document: caretRangeFromPoint()-Methode"
short-title: caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die **`caretRangeFromPoint()`**-Methode des {{domxref("Document")}}-Interfaces gibt ein {{domxref("Range")}}-Objekt für das Dokumentfragment unter den angegebenen Koordinaten zurück.

Diese Methode ist die WebKit-eigene Implementierung der Methode {{domxref("Document.caretPositionFromPoint")}}.

## Syntax

```js-nolint
caretRangeFromPoint(x, y)
```

### Parameter

- `x`
  - : Eine horizontale Position innerhalb des aktuellen Ansichtsfensters.
- `y`
  - : Eine vertikale Position innerhalb des aktuellen Ansichtsfensters.

### Rückgabewert

Eines der folgenden:

- Ein {{domxref("Range")}}.
- `Null`, wenn _x_ oder _y_ negativ sind, außerhalb des Ansichtsfensters liegen oder es keinen Texteingabeknoten gibt.

## Beispiele

Besuchen Sie die Seite {{domxref("Document.caretPositionFromPoint#Examples", "Document.caretPositionFromPoint")}}, um ein Live-Beispiel dieser Methode zu sehen.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
