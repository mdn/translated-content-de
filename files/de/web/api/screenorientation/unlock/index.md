---
title: "ScreenOrientation: unlock() Methode"
short-title: unlock()
slug: Web/API/ScreenOrientation/unlock
l10n:
  sourceCommit: 0e825c9d36e8598691198a6cd3983c4c860ba42a
---

{{APIRef("Screen Orientation")}}

Die **`unlock()`**-Methode des [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Interfaces entsperrt die Ausrichtung des enthaltenen Dokuments von seiner Standardausrichtung.

## Syntax

```js-nolint
unlock()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Das Versprechen kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Ausgelöst, wenn das Dokument nicht vollständig aktiv ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments verborgen ist oder wenn dem Dokument die Nutzung der Funktion untersagt ist (zum Beispiel durch das Weglassen des Schlüsselworts `allow-orientation-lock` im `sandbox`-Attribut des `iframe`-Elements).

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Ausgelöst, wenn eine andere `lock()`-Methode aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
