---
title: "HTMLMediaElement: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.readyState`**-Eigenschaft gibt den Bereitschaftszustand des Mediums an.

## Wert

Eine Zahl, die eine der fünf möglichen Zustandskonstanten ist, die auf der {{domxref("HTMLMediaElement")}}-Schnittstelle definiert sind:

- `HTMLMediaElement.HAVE_NOTHING` (0)
  - : Es liegen keine Informationen über die Medienressource vor.
- `HTMLMediaElement.HAVE_METADATA` (1)
  - : Es wurde genug von der Medienressource abgerufen, sodass die Metadaten-Attribute initialisiert sind. Eine Suche führt nicht mehr zu einer Ausnahme.
- `HTMLMediaElement.HAVE_CURRENT_DATA` (2)
  - : Daten sind für die aktuelle Wiedergabeposition verfügbar, aber nicht genug, um tatsächlich mehr als einen Frame abzuspielen.
- `HTMLMediaElement.HAVE_FUTURE_DATA` (3)
  - : Daten für die aktuelle Wiedergabeposition sowie für mindestens ein wenig Zeit in die Zukunft sind verfügbar (mit anderen Worten, mindestens zwei Frames eines Videos, zum Beispiel).
- `HTMLMediaElement.HAVE_ENOUGH_DATA` (4)
  - : Genug Daten sind verfügbar—und die Downloadrate ist hoch genug—damit das Medium bis zum Ende ohne Unterbrechung abgespielt werden kann.

## Beispiele

Dieses Beispiel wird darauf warten, dass Audiodaten für das Element `example` geladen werden. Es wird dann überprüft, ob mindestens die aktuelle Wiedergabeposition geladen wurde. Falls dies der Fall ist, wird das Audio abgespielt.

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

- {{domxref("HTMLMediaElement")}}: Schnittstelle, die verwendet wird, um die `HTMLMediaElement.readyState`-Eigenschaft zu definieren
