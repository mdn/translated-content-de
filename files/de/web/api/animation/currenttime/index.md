---
title: "Animation: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/Animation/currentTime
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("Web Animations")}}

Die **`Animation.currentTime`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt den aktuellen Zeitwert der Animation in Millisekunden zurück und setzt diesen, unabhängig davon, ob die Animation läuft oder pausiert ist.

Wenn der Animation eine [`timeline`](/de/docs/Web/API/AnimationTimeline) fehlt, sie inaktiv ist oder noch nicht abgespielt wurde, ist der Rückgabewert von `currentTime` `null`.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`, um die Animation zu deaktivieren.

## Beispiele

Im [Drink Me/Eat Me-Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) wird die Größe von Alice animiert, sodass sie von klein auf groß oder von groß auf klein wechseln kann. Am Anfang des Spiels wird ihre Größe zwischen den beiden Extremen festgelegt, indem `currentTime` ihrer Animation auf die Hälfte der Dauer ihres `KeyframeEffect` gesetzt wird:

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

Ein allgemeinerer Ansatz, um zur 50% Marke einer Animation zu springen, wäre:

```js
animation.currentTime =
  animation.effect.getComputedTiming().delay +
  animation.effect.getComputedTiming().activeDuration / 2;
```

## Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerabdrücke")}} zu bieten, kann die Präzision von `animation.currentTime` je nach Browsereinstellungen reduziert werden.

Der Wert dieser Eigenschaft kann aus zwei Quellen stammen: bereitgestellt durch Skript oder berechnet aus [`AnimationTimeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), [`startTime`](/de/docs/Web/API/Animation/startTime) und [`playbackRate`](/de/docs/Web/API/Animation/playbackRate). Die zugrundeliegende Uhr der Zeitleiste kann bereits vor der Berechnung gerundet werden; siehe [die reduzierte Zeitpräzision der Zeitleiste](/de/docs/Web/API/AnimationTimeline/currentTime#reduced_time_precision) für ihre Rundungsintervalle.

In Chrome wendet der Browser keine zusätzliche Timer-Rundung an. In Safari rundet der Browser den zurückgegebenen Wert auf 0.001 ms, die Auflösung, die zur Darstellung von Animationszeiten verwendet wird.

In Firefox rundet der Browser den zurückgegebenen Wert standardmäßig auf 0.02 ms, auch in kontextübergreifend isolierten Kontexten. Wenn `privacy.resistFingerprinting` aktiviert ist, beträgt das Rundungsintervall 16.667 ms oder das Intervall, das durch `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` konfiguriert wurde, je nachdem, welches größer ist.

Zum Beispiel sind dies mögliche Werte in Firefox:

```js
// Reduced time precision (0.02 ms) with default settings
animation.currentTime;
// Might be:
// 23.4
// 24.18
// 25.5
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
animation.currentTime;
// Might be:
// 50.001
// 66.668
// 83.335
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## siehe auch

- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webpage-Animationen verwenden können.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime) für die Zeit, zu der eine Animation gestartet werden soll.
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
