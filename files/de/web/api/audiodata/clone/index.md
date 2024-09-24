---
title: "AudioData: clone()-Methode"
short-title: clone()
slug: Web/API/AudioData/clone
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`clone()`**-Methode der {{domxref("AudioData")}}-Schnittstelle erzeugt ein neues `AudioData`-Objekt mit Verweis auf dieselbe Medienressource wie das Original.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Das geklonte {{domxref("AudioData")}}-Objekt.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das `AudioData`-Objekt [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.

## Beispiele

Das folgende Beispiel klont eine Kopie von `AudioData` als `audioData2`.

```js
let audioData2 = AudioData.clone();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
