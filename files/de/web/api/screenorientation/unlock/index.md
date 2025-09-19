---
title: "ScreenOrientation: unlock()-Methode"
short-title: unlock()
slug: Web/API/ScreenOrientation/unlock
l10n:
  sourceCommit: d62d7c62b44df2861852308385603d97586939ab
---

{{APIRef("Screen Orientation")}}

Die **`unlock()`**-Methode des [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Interfaces entriegelt die Ausrichtung des enthaltenen Dokuments, wodurch es effektiv auf die Standardbildschirmorientierung gesperrt wird.

## Syntax

```js-nolint
unlock()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments ausgeblendet ist oder wenn dem Dokument die Nutzung der Funktion untersagt ist (zum Beispiel durch das Fehlen des Schlüsselworts `allow-orientation-lock` im `sandbox`-Attribut des `iframe`-Elements).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
