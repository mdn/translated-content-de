---
title: "Animation: finish() Methode"
short-title: finish()
slug: Web/API/Animation/finish
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Web Animations")}}

Die **`finish()`** Methode des [Web Animations API](/de/docs/Web/API/Web_Animations_API)-[`Animation`](/de/docs/Web/API/Animation)-Interfaces setzt die aktuelle Wiedergabezeit auf das Ende der Animation entsprechend der aktuellen Wiedergaberichtung.

Das heißt, wenn die Animation vorwärts läuft, wird die Wiedergabezeit auf die Länge der Animationssequenz gesetzt. Wenn die Animation rückwärts läuft (nachdem ihre [`reverse()`](/de/docs/Web/API/Animation/reverse)-Methode aufgerufen wurde), wird die Wiedergabezeit auf 0 gesetzt.

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
  - : Die Abspielrate des Players ist 0 oder die Wiedergaberate der Animation ist größer als 0 und die Endzeit der Animation ist unendlich.

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
      logMyErrors(e); // Pass exception object to error handler
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
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Animationen auf Webseiten verwenden können.
- [`Animation.play()`](/de/docs/Web/API/Animation/play), um eine Animation vorwärts abzuspielen.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse), um eine Animation rückwärts abzuspielen.
