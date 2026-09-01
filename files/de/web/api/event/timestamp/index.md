---
title: "Ereignis: timeStamp-Eigenschaft"
short-title: timeStamp
slug: Web/API/Event/timeStamp
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`timeStamp`**-Eigenschaft der [`Event`](/de/docs/Web/API/Event)-Schnittstelle gibt die Zeit (in Millisekunden) zurück, zu der das Ereignis erstellt wurde.

## Wert

Der Wert ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Anzahl der Millisekunden darstellt, die vom [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin) des relevanten globalen Objekts bis zur Erstellung des Ereignisses vergangen sind. Die [Genauigkeit kann reduziert sein](#reduzierte_zeitgenauigkeit), um Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu verhindern.

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

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Genauigkeit von `event.timeStamp` je nach Browsereinstellungen reduziert sein.

Bruchteilig angezeigte Millisekunden bedeuten nicht zwangsläufig, dass die Zeitgenauigkeit nicht reduziert wurde.

In Chrome beträgt das Rundungsintervall 0,1 ms oder 0,005 ms in kontextübergreifend isolierten Umgebungen. In Safari beträgt es 1 ms oder 0,02 ms in kontextübergreifend isolierten Umgebungen.

In Firefox ist die Option `privacy.reduceTimerPrecision` standardmäßig aktiviert und verwendet ein Rundungsintervall von 1 ms oder 0,02 ms in kontextübergreifend isolierten Umgebungen. Wenn `privacy.resistFingerprinting` aktiviert ist, beträgt das Rundungsintervall 16,667 ms oder das Intervall, das durch `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` konfiguriert ist, je nachdem, welches größer ist.

Zum Beispiel sind dies mögliche Werte in Firefox:

```js
// Reduced time precision (1 ms) in a non-isolated context
event.timeStamp;
// Might be:
// 9934
// 10363
// 11671
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
event.timeStamp;
// Might be:
// 10000.2
// 10016.867
// 10033.534
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
