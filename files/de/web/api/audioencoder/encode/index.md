---
title: "AudioEncoder: encode()-Methode"
short-title: encode()
slug: Web/API/AudioEncoder/encode
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`encode()`**-Methode der {{domxref("AudioEncoder")}}-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um ein gegebenes {{domxref("AudioData")}}-Objekt zu kodieren.

## Syntax

```js-nolint
encode(data)
```

### Parameter

- `data`
  - : Ein {{domxref("AudioData")}}-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("AudioEncoder.state","state")}} nicht `"configured"` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `AudioData`-Objekt [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.

## Beispiele

Im folgenden Beispiel wird `encode` ein `AudioData`-Objekt übergeben.

```js
encoder.encode(data);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
