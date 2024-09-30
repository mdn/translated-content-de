---
title: "TransformStreamDefaultController: terminate()-Methode"
short-title: terminate()
slug: Web/API/TransformStreamDefaultController/terminate
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`terminate()`**-Methode der [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)-Schnittstelle schließt die lesbare Seite und erzeugt einen Fehler auf der beschreibbaren Seite des Streams.

## Syntax

```js-nolint
terminate()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

Im untenstehenden Beispiel wird die `terminate()`-Methode auf einem [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController) aufgerufen.

```js
controller.terminate();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
