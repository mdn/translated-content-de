---
title: "AudioData: clone() Methode"
short-title: clone()
slug: Web/API/AudioData/clone
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`clone()`**-Methode der [`AudioData`](/de/docs/Web/API/AudioData)-Schnittstelle erstellt ein neues `AudioData`-Objekt, das auf dieselbe Medienressource wie das Original verweist.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Das geklonte [`AudioData`](/de/docs/Web/API/AudioData)-Objekt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `AudioData`-Objekt [transferiert](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.

## Beispiele

Das folgende Beispiel klont eine Kopie von `AudioData` als `audioData2`.

```js
let audioData2 = AudioData.clone();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
