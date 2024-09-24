---
title: "Animation: playState-Eigenschaft"
short-title: playState
slug: Web/API/Animation/playState
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

Die schreibgeschützte **`Animation.playState`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt einen enumerierten Wert zurück, der den Wiedergabestatus einer Animation beschreibt.

## Wert

- `idle`
  - : Die aktuelle Zeit der Animation ist nicht aufgelöst und es gibt keine ausstehenden Aufgaben.
- `running`
  - : Die Animation läuft.
- `paused`
  - : Die Animation wurde angehalten und die {{domxref("Animation.currentTime")}}-Eigenschaft wird nicht aktualisiert.
- `finished`
  - : Die Animation hat eine ihrer Grenzen erreicht und die {{domxref("Animation.currentTime")}}-Eigenschaft wird nicht aktualisiert.

Früher definierte Web Animations einen **`pending`**-Wert, um anzuzeigen, dass einige asynchrone Operationen wie das Starten der Wiedergabe noch nicht abgeschlossen waren. Dies wird nun durch die separate {{domxref("Animation.pending")}}-Eigenschaft angezeigt.

## Beispiele

Im [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)-Beispiel können Spieler ein Ende erreichen, bei dem [Alice in einen Tränensee weint](https://codepen.io/rachelnabors/pen/EPJdJx?editors=0010). Im Spiel sollten aus Leistungsgründen die Tränen nur animiert werden, wenn sie sichtbar sind. Daher müssen sie wie folgt angehalten werden, sobald sie animiert werden:

```js
// Einrichten der Tränenanimationen

tears.forEach((el) => {
  el.animate(tearsFalling, {
    delay: getRandomMsRange(-1000, 1000), // für jede Träne zufällig
    duration: getRandomMsRange(2000, 6000), // für jede Träne zufällig
    iterations: Infinity,
    easing: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  });
  el.pause();
});

// Lässt die Tränen fallen, wenn das Ende gezeigt werden soll.

tears.forEach((el) => {
  el.play();
});

// Setzt die weinenden Tränenanimationen zurück und pausiert sie.

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
- {{domxref("Animation")}} für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseitenanimationen verwenden können.
