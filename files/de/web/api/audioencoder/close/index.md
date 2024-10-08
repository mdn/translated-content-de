---
title: "AudioEncoder: close()-Methode"
short-title: close()
slug: Web/API/AudioEncoder/close
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`**-Methode der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle beendet alle anstehenden Arbeiten und gibt die Systemressourcen frei.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel schließt den `AudioEncoder`.

```js
AudioEncoder.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
