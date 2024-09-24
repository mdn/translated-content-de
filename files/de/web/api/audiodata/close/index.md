---
title: "AudioData: close()-Methode"
short-title: close()
slug: Web/API/AudioData/close
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`**-Methode der {{domxref("AudioData")}}-Schnittstelle löscht alle Zustände und gibt die Referenz zur Medienressource frei.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Undefiniert.

## Beispiele

Das folgende Beispiel zeigt das Schließen des `AudioData`-Objekts.

```js
AudioData.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
