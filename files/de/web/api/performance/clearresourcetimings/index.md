---
title: "Performance: clearResourceTimings()-Methode"
short-title: clearResourceTimings()
slug: Web/API/Performance/clearResourceTimings
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

Die **`clearResourceTimings()`**-Methode entfernt alle Performance-Einträge mit einem {{domxref("PerformanceEntry.entryType","entryType")}} von "`resource`" aus der Performance-Timeline des Browsers und setzt die Größe des Performance-Ressourcen-Datenpuffers auf null.

Um die Größe des Ressourcen-Datenpuffers des Browsers festzulegen, verwenden Sie die
{{domxref("Performance.setResourceTimingBufferSize()")}}-Methode.

Um benachrichtigt zu werden, wenn der Ressourcen-Timing-Puffer des Browsers voll ist, überwachen Sie das {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}-Ereignis.

## Syntax

```js-nolint
clearResourceTimings()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen des Ressourcen-Datenpuffers

Um alle Ressourcenleistungs-Einträge aus dem Puffer zu entfernen, rufen Sie `clearResourceTimings()` zu einem geeigneten Zeitpunkt in Ihrem Code auf oder fügen Sie es in die Konsole ein.

```js
performance.clearResourceTimings();
performance.getEntriesByType("resource").length; // 0
```

### Aufzeichnen und Leeren von Performance-Observern

Bei der Verwendung von {{domxref("PerformanceObserver")}}-Objekten (insbesondere mit dem `buffered`-Flag auf `true` gesetzt) kann der Performance-Ressourcenpuffer schnell voll werden. Anstatt den Puffer zu löschen, können Sie die aktuelle Liste der Performance-Einträge speichern und den Performance-Observer mit der {{domxref("PerformanceObserver.takeRecords()")}}-Methode leeren. Dies funktioniert mit allen Arten von Performance-Eintragstypen, nicht nur mit "`resource`"-Einträgen.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    // Do something with the entries
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });

// Einträge speichern und Performance-Observer leeren
const records = observer.takeRecords();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Performance.setResourceTimingBufferSize()")}}
- {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
