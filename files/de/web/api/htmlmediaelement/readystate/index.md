---
title: "HTMLMediaElement: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.readyState`**-Eigenschaft gibt den Bereitschaftszustand des Medienelements an.

## Wert

Eine Zahl, die einem der fünf möglichen Statuskonstanten entspricht, die in der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle definiert sind:

- `HTMLMediaElement.HAVE_NOTHING` (0)
  - : Es sind keine Informationen über die Medienressource verfügbar.
- `HTMLMediaElement.HAVE_METADATA` (1)
  - : Genug von der Medienressource wurde abgerufen, damit die Metadaten-Attribute initialisiert sind. Suchen wird keine Ausnahme mehr auslösen.
- `HTMLMediaElement.HAVE_CURRENT_DATA` (2)
  - : Daten für die aktuelle Wiedergabeposition sind verfügbar, aber nicht genügend, um mehr als einen Frame abzuspielen.
- `HTMLMediaElement.HAVE_FUTURE_DATA` (3)
  - : Daten für die aktuelle Wiedergabeposition und für zumindest etwas Zeit in der Zukunft sind verfügbar (mit anderen Worten, beispielsweise mindestens zwei Videoframes).
- `HTMLMediaElement.HAVE_ENOUGH_DATA` (4)
  - : Genug Daten sind verfügbar—und die Downloadgeschwindigkeit ist hoch genug—dass das Medium ohne Unterbrechung bis zum Ende abgespielt werden kann.

## Beispiele

Dieses Beispiel wartet darauf, dass Audiodaten für das Element `example` geladen werden. Es
überprüft dann, ob mindestens die aktuelle Wiedergabeposition geladen wurde. Wenn ja, wird das
Audio abgespielt.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die `HTMLMediaElement.readyState`-Eigenschaft zu definieren
