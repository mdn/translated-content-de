---
title: "HTMLMediaElement: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.readyState`**-Eigenschaft gibt den Bereitschaftszustand des Medienobjekts an.

## Wert

Eine Zahl, die eine der fünf möglichen Zustandskonstanten ist, die auf der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle definiert sind:

- `HTMLMediaElement.HAVE_NOTHING` (0)
  - : Es sind keine Informationen über die Medienquelle verfügbar.
- `HTMLMediaElement.HAVE_METADATA` (1)
  - : Genug von der Medienquelle wurde abgerufen, sodass die Metadatenattribute initialisiert sind. Das Suchen wird keine Ausnahme mehr auslösen.
- `HTMLMediaElement.HAVE_CURRENT_DATA` (2)
  - : Daten sind für die aktuelle Wiedergabeposition verfügbar, aber nicht genug, um mehr als einen Frame abzuspielen.
- `HTMLMediaElement.HAVE_FUTURE_DATA` (3)
  - : Daten für die aktuelle Wiedergabeposition sowie für mindestens ein kleines Stück Zeit in die Zukunft sind verfügbar (zum Beispiel mindestens zwei Videoframes).
- `HTMLMediaElement.HAVE_ENOUGH_DATA` (4)
  - : Es sind genügend Daten verfügbar—und die Downloadgeschwindigkeit ist hoch genug—, sodass das Medium ohne Unterbrechung bis zum Ende abgespielt werden kann.

## Beispiele

Dieses Beispiel wird auf das Laden von Audiodaten für das Element `example` warten. Es wird dann überprüfen, ob mindestens die aktuelle Wiedergabeposition geladen wurde. Wenn dies der Fall ist, wird die Audio-Wiedergabe gestartet.

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("loadeddata", () => {
  if (obj.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    obj.play();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.readyState`-Eigenschaft
