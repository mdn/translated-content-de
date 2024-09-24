---
title: "VTTCue: VTTCue() Konstruktor"
short-title: VTTCue()
slug: Web/API/VTTCue/VTTCue
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Der **`VTTCue()`** Konstruktor erstellt und gibt ein neues
{{domxref("VTTCue")}} Objekt zurück.

## Syntax

```js-nolint
new VTTCue(startTime, endTime, text)
```

### Parameter

- `startTime`
  - : Dies ist ein `double`, das die Anfangszeit der Text-Track-Kennzeichnung darstellt.
    Dies ist die Zeit, angegeben in Sekunden und Bruchteilen von Sekunden, die den Beginn
    des Bereichs der Mediendaten angibt, auf die diese Kennzeichnung zutrifft. Zum Beispiel, wenn eine Kennzeichnung von 50 Sekunden bis eine Minute, fünf und eine halbe Sekunde
    in der Medienwiedergabe sichtbar sein soll, wird `startTime` 50.0 sein.
- `endTime`
  - : Dies ist ein `double`, das die Endzeit für diese Text-Track-Kennzeichnung darstellt.
    Dies ist die Zeit, zu der die Kennzeichnung nicht mehr dem Nutzer präsentiert werden soll, angegeben in Sekunden und deren Bruchteilen. Entsprechend dem unter
    `startTime` erwähnten Beispiel würde der Wert von `endTime` 65.5 betragen.
- `text`
  - : Ein String, der den Text bereitstellt, der während des durch `startTime` und `endTime` angegebenen Zeitraums angezeigt wird.

### Rückgabewert

Ein neues {{domxref("VTTCue")}} Objekt, das eine Kennzeichnung darstellt, die während des angegebenen Zeitraums präsentiert wird.

## Beispiele

```js
// Erstellen Sie eine Cue, die von 2 bis 3 Sekunden angezeigt wird und den angegebenen Text verwendet.
let cue = new VTTCue(2, 3, "Cool text to be displayed");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
