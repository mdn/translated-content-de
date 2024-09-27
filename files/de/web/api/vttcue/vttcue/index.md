---
title: "VTTCue: VTTCue() Konstruktor"
short-title: VTTCue()
slug: Web/API/VTTCue/VTTCue
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Der **`VTTCue()`** Konstruktor erstellt und gibt ein neues [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekt zurück.

## Syntax

```js-nolint
new VTTCue(startTime, endTime, text)
```

### Parameter

- `startTime`
  - : Dies ist ein `double`, das die Anfangszeit des Text-Track-Cues darstellt. Dies ist die Zeit, angegeben in Sekunden und Bruchteilen von Sekunden, die den Beginn des Medienbereichs angibt, auf den sich dieser Cue bezieht. Zum Beispiel, wenn ein Cue von 50 Sekunden bis zu einer Minute, fünf und einer halben Sekunde in der Medienwiedergabe sichtbar sein soll, wird `startTime` 50.0 sein.
- `endTime`
  - : Dies ist ein `double`, das die Endzeit dieses Text-Track-Cues darstellt. Dies ist die Zeit, zu der der Cue nicht mehr dem Benutzer angezeigt werden sollte, angegeben in Sekunden und deren Bruchteilen. Nach dem unter `startTime` genannten Beispiel-Cue wäre der Wert von `endTime` 65.5.
- `text`
  - : Ein String, der den Text liefert, der während des durch `startTime` und `endTime` angegebenen Zeitraums angezeigt wird.

### Rückgabewert

Ein neues [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekt, das einen Cue darstellt, der während des angegebenen Zeitraums präsentiert wird.

## Beispiele

```js
// Create a cue that is shown from 2 to 3 seconds and uses the given text.
let cue = new VTTCue(2, 3, "Cool text to be displayed");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
