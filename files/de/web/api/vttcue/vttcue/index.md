---
title: "VTTCue: VTTCue() Konstruktor"
short-title: VTTCue()
slug: Web/API/VTTCue/VTTCue
l10n:
  sourceCommit: e5cd1cab36e2fdcf5dfe28e10b0a7cb235354e62
---

{{APIRef("WebVTT")}}

Der **`VTTCue()`** Konstruktor erstellt und gibt ein neues [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekt zurück.

## Syntax

```js-nolint
new VTTCue(startTime, endTime, text)
```

### Parameter

- `startTime`
  - : Dies ist ein `double`, das die anfängliche Startzeit der Textspur-Cue darstellt.
    Dies ist die Zeit, angegeben in Sekunden und Bruchteilen von Sekunden, die den Beginn
    des Bereichs der Mediendaten markiert, auf die sich diese Cue bezieht. Zum Beispiel, wenn eine Cue
    von 50 Sekunden bis zu einer Minute und fünfeinhalb Sekunden in der Medienwiedergabe
    sichtbar sein soll, wird `startTime` 50.0 sein.
- `endTime`
  - : Dies ist ein `double`, das die Endzeit für diese Textspur-Cue darstellt.
    Dies ist die Zeit, zu der die Cue nicht mehr dem Benutzer präsentiert werden soll, angegeben in
    Sekunden und deren Bruchteilen. Angesichts des unter `startTime` genannten Beispiel-Cues
    wäre der Wert von `endTime` 65.5.
- `text`
  - : Ein String, der den Text bereitstellt, der während der durch `startTime` und `endTime` angegebenen Zeitspanne gezeigt wird.

### Rückgabewert

Ein neues [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekt, das eine Cue darstellt, die während der angegebenen Zeitspanne präsentiert wird.

## Beispiele

```js
// Create a cue that is shown from 2 to 3 seconds and uses the given text.
let cue = new VTTCue(2, 3, "Cool text to be displayed");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
