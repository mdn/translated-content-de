---
title: "AudioDecoder: close() Methode"
short-title: close()
slug: Web/API/AudioDecoder/close
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`**-Methode der {{domxref("AudioDecoder")}} Schnittstelle beendet alle ausstehenden Arbeiten und gibt Systemressourcen frei.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel schließt den `AudioDecoder`.

```js
AudioDecoder.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}