---
title: "Event: timeStamp-Eigenschaft"
short-title: timeStamp
slug: Web/API/Event/timeStamp
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`timeStamp`**-Eigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces gibt die Zeit (in Millisekunden) zurück, zu der das Ereignis erstellt wurde.

## Wert

Dieser Wert ist die Anzahl der Millisekunden, die vom Anfang des Zeitursprungs bis zur Erstellung des Ereignisses vergangen sind. Wenn das globale Objekt [`Window`](/de/docs/Web/API/Window) ist, ist der Zeitursprung der Moment, in dem der Benutzer auf den Link geklickt hat oder das Skript, das das Laden des Dokuments initiiert hat. In einem Worker ist der Zeitursprung der Moment der Erstellung des Workers.

Der Wert ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der auf 5 Mikrosekunden (0,005 ms) genau ist, aber die [Genauigkeit wird reduziert](#reduzierte_zeitgenauigkeit), um [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu verhindern.

## Beispiel

### HTML

```html
<p>
  Focus this iframe and press any key to get the current timestamp for the
  keypress event.
</p>
<p>timeStamp: <span id="time">-</span></p>
```

### JavaScript

```js
function getTime(event) {
  const time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);
```

### Ergebnis

{{EmbedLiveSample("Example", "100%", 100)}}

## Reduzierte Zeitgenauigkeit

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Genauigkeit von `event.timeStamp` je nach Browsereinstellungen abgerundet werden. In Firefox ist die Präferenz `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt standardmäßig 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall ist die Genauigkeit 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird bei reduzierter Zeitgenauigkeit das Ergebnis von `event.timeStamp` immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

```js
// reduced time precision (2ms) in Firefox 60
event.timeStamp;
// Might be:
// 9934
// 10362
// 11670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
event.timeStamp;
// Might be:
// 53500
// 58900
// 64400
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
