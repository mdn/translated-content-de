---
title: "Animation: finish() Methode"
short-title: finish()
slug: Web/API/Animation/finish
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

Die **`finish()`**-Methode der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) setzt die aktuelle Wiedergabezeit auf das Ende der Animation entsprechend der aktuellen Wiedergaberichtung.

Das heißt, wenn die Animation vorwärts abgespielt wird, wird die Wiedergabezeit auf die Länge der Animationssequenz gesetzt. Wenn die Animation rückwärts abgespielt wird (nachdem die [`reverse()`](/de/docs/Web/API/Animation/reverse)-Methode aufgerufen wurde), wird die Wiedergabezeit auf 0 gesetzt.

## Syntax

```js-nolint
finish()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidState`
  - : Die Wiedergabegeschwindigkeit des Players beträgt 0 oder die Wiedergabegeschwindigkeit der Animation ist größer als 0 und die Endzeit der Animation ist unendlich.

## Beispiele

Das folgende Beispiel zeigt, wie Sie die `finish()`-Methode verwenden und einen `InvalidState`-Fehler abfangen.

```js
interfaceElement.addEventListener("mousedown", () => {
  try {
    player.finish();
  } catch (e) {
    if (e instanceof InvalidState) {
      console.log("finish() called on paused or finished animation.");
    } else {
      logMyErrors(e); //pass exception object to error handler
    }
  }
});
```

Das folgende Beispiel schließt alle Animationen auf einem einzelnen Element ab, unabhängig von ihrer Wiedergaberichtung.

```js
elem.getAnimations().forEach((animation) => animation.finish());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für weitere Methoden und Eigenschaften, die zur Steuerung von Webseiten-Animationen verwendet werden können.
- [`Animation.play()`](/de/docs/Web/API/Animation/play), um eine Animation vorwärts abzuspielen.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse), um eine Animation rückwärts abzuspielen.
