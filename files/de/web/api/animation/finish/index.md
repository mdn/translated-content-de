---
title: "Animation: finish()-Methode"
short-title: finish()
slug: Web/API/Animation/finish
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

Die **`finish()`**-Methode der {{domxref("Animation")}}-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) setzt die aktuelle Wiedergabezeit auf das Ende der Animation entsprechend der aktuellen Wiedergaberichtung.

Das heißt, wenn die Animation vorwärts gespielt wird, wird die Wiedergabezeit auf die Länge der Animationssequenz gesetzt, und wenn die Animation rückwärts abgespielt wird (nachdem die {{domxref("Animation.reverse", "reverse()")}}-Methode aufgerufen wurde), wird die Wiedergabezeit auf 0 gesetzt.

## Syntax

```js-nolint
finish()
```

### Parameter

Keine.

### Rückgabewert

None ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidState`
  - : Die Wiedergabegeschwindigkeit des Players ist 0 oder die Wiedergabegeschwindigkeit der Animation ist größer als 0 und die Endzeit der Animation ist unendlich.

## Beispiele

Das folgende Beispiel zeigt, wie Sie die `finish()`-Methode verwenden und einen `InvalidState`-Fehler abfangen.

```js
interfaceElement.addEventListener("mousedown", () => {
  try {
    player.finish();
  } catch (e) {
    if (e instanceof InvalidState) {
      console.log("finish() auf eine pausierte oder beendete Animation aufgerufen.");
    } else {
      logMyErrors(e); //Ausnahmeobjekt an Fehlerhandler übergeben
    }
  }
});
```

Das folgende Beispiel beendet alle Animationen auf einem einzigen Element, unabhängig von ihrer Wiedergaberichtung.

```js
elem.getAnimations().forEach((animation) => animation.finish());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} für andere Methoden und Eigenschaften, mit denen Sie die Animation einer Webseite steuern können.
- {{domxref("Animation.play()")}} zum Vorwärtsspielen einer Animation.
- {{domxref("Animation.reverse()")}} zum Rückwärtsspielen einer Animation.
