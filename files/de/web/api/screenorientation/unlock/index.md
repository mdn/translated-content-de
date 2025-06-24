---
title: "ScreenOrientation: unlock() Methode"
short-title: unlock()
slug: Web/API/ScreenOrientation/unlock
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Screen Orientation")}}

Die **`unlock()`**-Methode der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle entsperrt die Ausrichtung des enthaltenen Dokuments von seiner Standardausrichtung.

## Syntax

```js-nolint
unlock()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

Das Promise kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments verborgen ist oder wenn das Dokument die Verwendung der Funktion nicht erlaubt ist (zum Beispiel, indem das Schlüsselwort `allow-orientation-lock` im `sandbox`-Attribut des `iframe`-Elements weggelassen wird).

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine andere `lock()`-Methode aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
