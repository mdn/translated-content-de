---
title: "PerformanceResourceTiming: firstInterimResponseStart-Eigenschaft"
short-title: firstInterimResponseStart
slug: Web/API/PerformanceResourceTiming/firstInterimResponseStart
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`firstInterimResponseStart`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der vorläufigen 1xx-Antwort (zum Beispiel 100 Continue oder 103 Early Hints) vom Server erhält, zurück.

Es gibt keine _end_-Eigenschaft für `firstInterimResponseStart`.

## Wert

Die Eigenschaft `firstInterimResponseStart` kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die ersten vorläufigen Bytes der Antwort vom Server erhält.
- `0`, wenn die Ressource keine vorläufige Antwort gesendet hat.
- `0`, wenn es sich bei der Ressource um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

> [!NOTE]
> Da Early Hints typischerweise nur bei der Hauptnavigationsanforderung unterstützt werden, die per Definition gleichherkunft ist, bedeutet ein Wert von `0` typischerweise, dass Early Hints **nicht** verwendet wurden.

Wenn `firstInterimResponseStart` ungleich null ist, weist dies darauf hin, dass es den gleichen Wert wie [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) für [unterstützende Browser](#browser-kompatibilität) haben sollte.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `firstInterimResponseStart` und `requestStart` können verwendet werden, um zu messen, wie lange es dauert, bis der Browser eine vorläufige Antwort nach dem Senden der Anfrage erhält.

```js
const request = entry.firstInterimResponseStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue Leistungseinträge von `resource` zu informieren, sobald sie in der Leistungstimeline des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.firstInterimResponseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Interim response time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge anzeigt, die in der Leistungstimeline des Browsers zum Zeitpunkt des Aufrufs der Methode vorhanden sind.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.firstInterimResponseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Interim response time: ${request}ms`);
  }
});
```

### Informationen zum Timing bei Cross-Origin-Anfragen

Wenn der Wert der Eigenschaft `firstInterimResponseStart` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um das Timing bei Cross-Origin-Anfragen sichtbar zu machen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart)
