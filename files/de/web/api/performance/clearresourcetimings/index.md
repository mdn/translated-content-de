---
title: "Performance: clearResourceTimings() Methode"
short-title: clearResourceTimings()
slug: Web/API/Performance/clearResourceTimings
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`clearResourceTimings()`** Methode entfernt alle Performance-Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"` aus der Performance-Timeline des Browsers und setzt die Größe des Performance-Ressourcen-Datenpuffers auf null.

Um die Größe des Ressourcen-Datenpuffers des Browsers festzulegen, verwenden Sie die
[`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize) Methode.

Um benachrichtigt zu werden, wenn der Ressourcen-Timing-Puffer des Browsers voll ist, hören Sie auf das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event) Ereignis.

## Syntax

```js-nolint
clearResourceTimings()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Leeren des Performance-Ressourcen-Datenpuffers

Um alle Ressourcen-Performance-Einträge aus dem Puffer zu entfernen, rufen Sie `clearResourceTimings()` zu einem geeigneten Zeitpunkt in Ihrem Code auf oder fügen Sie es in die Konsole ein.

```js
performance.clearResourceTimings();
performance.getEntriesByType("resource").length; // 0
```

### Aufzeichnen von Einträgen und Leeren von Performance-Observern

Bei der Verwendung von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) Objekten (insbesondere mit dem `buffered`-Flag auf `true` gesetzt), kann der Performance-Ressourcen-Puffer schnell voll werden. Anstatt den Puffer zu leeren, können Sie jedoch auch die aktuelle Liste der Performance-Einträge speichern und den Performance-Observer mit der [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) Methode leeren. Diese Methode funktioniert mit allen Arten von Performance-Einträgen, nicht nur mit `"resource"` Einträgen.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    // do something with the entries
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });

// Store entries and empty performance observer
const records = observer.takeRecords();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
- [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)
