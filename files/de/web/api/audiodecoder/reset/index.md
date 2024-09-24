---
title: "AudioDecoder: reset()-Methode"
short-title: reset()
slug: Web/API/AudioDecoder/reset
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`reset()`**-Methode der {{domxref("AudioDecoder")}}-Schnittstelle setzt alle Zustände zurück, einschließlich Konfiguration, Steuerungsmeldungen in der Steuerungsmeldungswarteschlange und alle ausstehenden Rückrufe.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel setzt den `AudioDecoder` zurück.

```js
AudioDecoder.reset();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
