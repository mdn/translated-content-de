---
title: "ScreenOrientation: unlock() Methode"
short-title: unlock()
slug: Web/API/ScreenOrientation/unlock
l10n:
  sourceCommit: 0e825c9d36e8598691198a6cd3983c4c860ba42a
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

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Das Versprechen kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments "versteckt" ist oder wenn das Dokument nicht berechtigt ist, die Funktion zu verwenden (zum Beispiel durch das Auslassen des Schlüsselworts `allow-orientation-lock` des `sandbox`-Attributs des `<iframe>`-Elements).

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn eine andere `lock()`-Methode aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
