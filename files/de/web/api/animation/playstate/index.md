---
title: "Animation: playState Eigenschaft"
short-title: playState
slug: Web/API/Animation/playState
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

Die schreibgeschützte **`Animation.playState`** Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt einen enumerierten Wert zurück, der den Wiedergabestatus einer Animation beschreibt.

## Wert

- `idle`
  - : Die aktuelle Zeit der Animation ist nicht aufgelöst, und es gibt keine ausstehenden Aufgaben.
- `running`
  - : Die Animation läuft.
- `paused`
  - : Die Animation wurde angehalten, und die [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) Eigenschaft wird nicht aktualisiert.
- `finished`
  - : Die Animation hat eine ihrer Grenzen erreicht, und die [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) Eigenschaft wird nicht aktualisiert.

Früher definierte Web Animations einen **`pending`** Wert, um anzuzeigen, dass ein asynchroner Vorgang wie das Initiieren der Wiedergabe noch nicht abgeschlossen war. Dies wird nun durch die separate [`Animation.pending`](/de/docs/Web/API/Animation/pending) Eigenschaft angezeigt.

## Beispiele

Im [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) Beispiel können die Spieler ein Ende erleben, in dem [Alice in einen Tränenpool weint](https://codepen.io/rachelnabors/pen/EPJdJx?editors=0010). Im Spiel sollten aus Leistungsgründen die Tränen nur animiert werden, wenn sie sichtbar sind. Daher müssen sie sofort pausiert werden, sobald sie animiert sind, wie folgt:

```js
// Setting up the tear animations

tears.forEach((el) => {
  el.animate(tearsFalling, {
    delay: getRandomMsRange(-1000, 1000), // randomized for each tear
    duration: getRandomMsRange(2000, 6000), // randomized for each tear
    iterations: Infinity,
    easing: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  });
  el.pause();
});

// Play the tears falling when the ending needs to be shown.

tears.forEach((el) => {
  el.play();
});

// Reset the crying tears animations and pause them.

tears.forEach((el) => {
  el.pause();
  el.currentTime = 0;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Web-Seiten-Animationen verwenden können.
