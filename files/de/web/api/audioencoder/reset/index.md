---
title: "AudioEncoder: reset()-Methode"
short-title: reset()
slug: Web/API/AudioEncoder/reset
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`reset()`**-Methode der Schnittstelle {{domxref("AudioEncoder")}} setzt alle Zustände zurück, einschließlich der Konfiguration, der Steuerungsnachrichten in der Steuerungsnachrichtenwarteschlange und aller ausstehenden Rückrufe.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel setzt den `AudioEncoder` zurück.

```js
AudioEncoder.reset();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
