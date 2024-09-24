---
title: "ScreenOrientation: unlock()-Methode"
short-title: unlock()
slug: Web/API/ScreenOrientation/unlock
l10n:
  sourceCommit: 0e825c9d36e8598691198a6cd3983c4c860ba42a
---

{{APIRef("Screen Orientation")}}

Die **`unlock()`**-Methode der {{domxref("ScreenOrientation")}}-Schnittstelle entsperrt die Ausrichtung des enthaltenen Dokuments aus seiner Standardeinstellung.

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

- `InvalidStateError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.

- `SecurityError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn der Sichtbarkeitsstatus des Dokuments verborgen ist oder wenn das Dokument die Verwendung der Funktion untersagt ist (zum Beispiel durch das Weglassen des Schlüsselworts `allow-orientation-lock` im `sandbox`-Attribut des `iframe`-Elements).

- `AbortError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn eine andere `lock()`-Methode aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
