---
title: "AudioEncoder: reset()-Methode"
short-title: reset()
slug: Web/API/AudioEncoder/reset
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`reset()`**-Methode der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle setzt alle Zustände zurück, einschließlich der Konfiguration, Steuerungsnachrichten in der Steuerungsnachrichtenwarteschlange und alle ausstehenden Rückrufe.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird der `AudioEncoder` zurückgesetzt.

```js
AudioEncoder.reset();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
