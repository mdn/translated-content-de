---
title: "HTMLMediaElement: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`readyState`** der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt den Bereitschaftszustand des Mediums an.

## Wert

Eine Zahl, die einer der fünf möglichen Zustandskonstanten entspricht, die in der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) definiert sind:

- `HTMLMediaElement.HAVE_NOTHING` (0)
  - : Es sind keine Informationen über die Medienressource verfügbar.
- `HTMLMediaElement.HAVE_METADATA` (1)
  - : Von der Medienressource wurden genügend Daten abgerufen, um die Metadatenattribute zu initialisieren. Das Springen zu einer anderen Wiedergabeposition löst keine Ausnahme mehr aus.
- `HTMLMediaElement.HAVE_CURRENT_DATA` (2)
  - : Für die aktuelle Wiedergabeposition sind Daten verfügbar, aber nicht genug, um mehr als ein Einzelbild abzuspielen.
- `HTMLMediaElement.HAVE_FUTURE_DATA` (3)
  - : Für die aktuelle Wiedergabeposition sowie für zumindest einen kurzen Zeitraum danach sind Daten verfügbar (beispielsweise mindestens zwei Videobilder).
- `HTMLMediaElement.HAVE_ENOUGH_DATA` (4)
  - : Es sind genügend Daten verfügbar – und die Downloadrate ist hoch genug –, um das Medium ohne Unterbrechung bis zum Ende abzuspielen.

## Beispiele

Dieses Beispiel wartet darauf, dass Audiodaten für das Element `example` geladen werden. Anschließend prüft es, ob mindestens die Daten für die aktuelle Wiedergabeposition geladen wurden. Ist dies der Fall, wird das Audio abgespielt.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die die Eigenschaft `HTMLMediaElement.readyState` definiert
