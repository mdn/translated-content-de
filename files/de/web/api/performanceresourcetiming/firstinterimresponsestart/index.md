---
title: "PerformanceResourceTiming: firstInterimResponseStart-Eigenschaft"
short-title: firstInterimResponseStart
slug: Web/API/PerformanceResourceTiming/firstInterimResponseStart
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`firstInterimResponseStart`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der vorläufigen 1xx-Antwort (zum Beispiel 100 Continue oder 103 Early Hints) vom Server erhält, zurück.

Es gibt keine _end_-Eigenschaft für `firstInterimResponseStart`.

## Wert

Die `firstInterimResponseStart`-Eigenschaft kann folgende Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die ersten vorläufigen Bytes der Antwort vom Server erhält.
- `0`, wenn die Ressource keine vorläufige Antwort gesendet hat.
- `0`, wenn die Ressource eine Cross-Origin-Anforderung ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

> [!NOTE]
> Da Early Hints typischerweise nur bei der Hauptnavigationsanfrage unterstützt werden, die per Definition same-origin ist, zeigt `0` typischerweise an, dass Early Hints **nicht** verwendet wurden.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `firstInterimResponseStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können genutzt werden, um zu messen, wie lange es dauert, bis der Browser eine vorläufige Antwort nach dem Senden der Anfrage erhält.

```js
const request = entry.firstInterimResponseStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu benachrichtigen, während sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs der Methode in der Performance-Zeitachse des Browsers vorhanden sind.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.firstInterimResponseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Interim response time: ${request}ms`);
  }
});
```

### Cross-Origin-Timing-Informationen

Wenn der Wert der `firstInterimResponseStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anforderung sein. Um Cross-Origin-Timing-Informationen sichtbar zu machen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` das Sehen von Timing-Ressourcen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
