---
title: "Animation: finish()-Methode"
short-title: finish()
slug: Web/API/Animation/finish
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

Die **`finish()`**-Methode der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) setzt die aktuelle Wiedergabezeit auf das Ende der Animation, entsprechend der aktuellen Abspielrichtung.

Das bedeutet, wenn die Animation vorwärts läuft, wird die Wiedergabezeit auf die Länge der Animationssequenz gesetzt. Läuft die Animation rückwärts (nachdem die Methode [`reverse()`](/de/docs/Web/API/Animation/reverse) aufgerufen wurde), wird die Wiedergabezeit auf 0 gesetzt.

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
  - : Die Wiedergabegeschwindigkeit des Players ist 0 oder die Wiedergabegeschwindigkeit der Animation ist größer als 0 und die Endzeit der Animation ist unendlich.

## Beispiele

Das folgende Beispiel zeigt, wie die `finish()`-Methode verwendet wird und ein `InvalidState`-Fehler abgefangen wird.

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

Das folgende Beispiel beendet alle Animationen auf einem einzelnen Element, unabhängig von ihrer Wiedergaberichtung.

```js
elem.getAnimations().forEach((animation) => animation.finish());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseiten-Animationen verwenden können.
- [`Animation.play()`](/de/docs/Web/API/Animation/play), um eine Animation vorwärts abzuspielen.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse), um eine Animation rückwärts abzuspielen.
