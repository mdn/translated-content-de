---
title: "Event: Eigenschaft timeStamp"
short-title: timeStamp
slug: Web/API/Event/timeStamp
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`timeStamp`** der {{domxref("Event")}}-Schnittstelle gibt die Zeit (in Millisekunden) an, zu der das Ereignis erstellt wurde.

## Wert

Dieser Wert ist die Anzahl der Millisekunden, die vom Beginn des Zeitursprungs bis zur Erstellung des Ereignisses verstrichen sind.
Wenn das globale Objekt {{domxref("Window")}} ist, ist der Zeitursprung der Moment, in dem der Benutzer auf den Link geklickt hat, oder das Skript, das das Laden des Dokuments initiiert hat.
In einem Worker ist der Zeitursprung der Moment der Erstellung des Workers.

Der Wert ist ein {{domxref("DOMHighResTimeStamp")}}, genau bis zu 5 Mikrosekunden (0,005 ms), aber die [Genauigkeit wird reduziert](#reduzierte_zeitgenauigkeit), um [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu verhindern.

## Beispiel

### HTML

```html
<p>
  Fokusieren Sie dieses iframe und drücken Sie eine beliebige Taste, um den aktuellen Zeitstempel für das
  keypress-Ereignis zu erhalten.
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

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Genauigkeit von `event.timeStamp` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt standardmäßig 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, bei dem die Genauigkeit 100 ms oder dem Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` entspricht, je nachdem, welcher Wert größer ist.

Zum Beispiel wird bei reduzierter Zeitgenauigkeit das Ergebnis von `event.timeStamp` immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduzierte Zeitgenauigkeit (2ms) in Firefox 60
event.timeStamp;
// Könnte sein:
// 9934
// 10362
// 11670
// …

// reduzierte Zeitgenauigkeit mit `privacy.resistFingerprinting` aktiviert
event.timeStamp;
// Könnte sein:
// 53500
// 58900
// 64400
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
