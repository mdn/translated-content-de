---
title: "Performance: clearResourceTimings() Methode"
short-title: clearResourceTimings()
slug: Web/API/Performance/clearResourceTimings
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`clearResourceTimings()`** Methode entfernt alle Performance-Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"` aus der Performance-Zeitleiste des Browsers und setzt die Größe des Performance-Ressourcendatenpuffers auf null.

Um die Größe des Performance-Ressourcendatenpuffers des Browsers festzulegen, verwenden Sie die
[`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize) Methode.

Um benachrichtigt zu werden, wenn der Ressourcentiming-Puffer des Browsers voll ist, hören Sie auf das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event) Ereignis.

## Syntax

```js-nolint
clearResourceTimings()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Den Performance-Ressourcendatenpuffer löschen

Um alle Ressourcen-Performance-Einträge aus dem Puffer zu entfernen, rufen Sie `clearResourceTimings()` zu einem passenden Zeitpunkt in Ihrem Code auf oder fügen Sie ihn in die Konsole ein.

```js
performance.clearResourceTimings();
performance.getEntriesByType("resource").length; // 0
```

### Aufzeichnungen machen und Performance-Observer leeren

Bei der Verwendung von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) Objekten (insbesondere mit dem `buffered` Flag auf `true` gesetzt), kann der Performance-Ressourcenpuffer schnell voll werden. Anstatt jedoch den Puffer zu löschen, können Sie auch die aktuelle Liste der Performance-Einträge speichern und den Performance-Observer mit der Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) leeren. Dies funktioniert mit allen Arten von Performance-Eintragstypen, nicht nur mit `"resource"` Einträgen.

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
