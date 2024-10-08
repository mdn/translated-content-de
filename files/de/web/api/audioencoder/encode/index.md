---
title: "AudioEncoder: encode() Methode"
short-title: encode()
slug: Web/API/AudioEncoder/encode
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`encode()`**-Methode der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle stellt eine Kontrollnachricht in die Warteschlange, um ein gegebenes [`AudioData`](/de/docs/Web/API/AudioData)-Objekt zu kodieren.

## Syntax

```js-nolint
encode(data)
```

### Parameter

- `data`
  - : Ein [`AudioData`](/de/docs/Web/API/AudioData)-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioEncoder/state) nicht `"configured"` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `AudioData`-Objekt [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.

## Beispiele

Im folgenden Beispiel wird `encode` ein `AudioData`-Objekt übergeben.

```js
encoder.encode(data);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
