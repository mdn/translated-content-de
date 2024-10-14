---
title: "PerformanceResourceTiming: firstInterimResponseStart-Eigenschaft"
short-title: firstInterimResponseStart
slug: Web/API/PerformanceResourceTiming/firstInterimResponseStart
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`firstInterimResponseStart`** schreibgeschützte Eigenschaft gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der vorläufigen 1xx-Antwort (z.B. 100 Continue oder 103 Early Hints) vom Server empfängt, zurück.

Es gibt keine _end_-Eigenschaft für `firstInterimResponseStart`.

## Wert

Die `firstInterimResponseStart`-Eigenschaft kann folgende Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die ersten vorläufigen Bytes der Antwort vom Server empfängt.
- `0`, wenn die Ressource keine vorläufige Antwort gesendet hat
- `0`, wenn es sich bei der Ressource um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

> [!NOTE]
> Da Early Hints typischerweise nur bei der Hauptnavigationsanfrage unterstützt werden, die definitionsgemäß same-origin ist, weist `0` typischerweise darauf hin, dass Early Hints **nicht** verwendet wurden.

## Beispiele

### Messung der Anforderungszeit

Die `firstInterimResponseStart`- und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)-Eigenschaften können verwendet werden, um zu messen, wie lange es dauert, bis der Browser eine vorläufige Antwort nach dem Senden der Anfrage erhält.

```js
const request = entry.firstInterimResponseStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu informieren, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs der Methode in der Leistungstimeline des Browsers vorhanden sind.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.firstInterimResponseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Interim response time: ${request}ms`);
  }
});
```

### Cross-Origin-Zeiteninformationen

Wenn der Wert der `firstInterimResponseStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Cross-Origin-Zeiteninformationen sehen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource Folgendes senden, um `https://developer.mozilla.org` den Zugriff auf Zeiteninformationen zu erlauben:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
