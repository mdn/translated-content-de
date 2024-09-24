---
title: "PerformanceResourceTiming: firstInterimResponseStart Eigenschaft"
short-title: firstInterimResponseStart
slug: Web/API/PerformanceResourceTiming/firstInterimResponseStart
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`firstInterimResponseStart`** gibt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} zurück, unmittelbar nachdem der Browser das erste Byte der vorläufigen 1xx-Antwort (zum Beispiel 100 Continue oder 103 Early Hints) vom Server erhält.

Es gibt keine _Ende_-Eigenschaft für `firstInterimResponseStart`.

## Wert

Die Eigenschaft `firstInterimResponseStart` kann die folgenden Werte haben:

- Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar nachdem der Browser die ersten vorläufigen Bytes der Antwort vom Server erhält.
- `0`, wenn die Ressource keine vorläufige Antwort gesendet hat.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

> [!NOTE]
> Da Early Hints in der Regel nur bei der Hauptnavigationsanfrage unterstützt werden, die per Definition same-origin ist, zeigt `0` typischerweise an, dass Early Hints **nicht** verwendet wurden.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `firstInterimResponseStart` und {{domxref("PerformanceResourceTiming.requestStart", "requestStart")}} können verwendet werden, um zu messen, wie lange es dauert, bis der Browser nach dem Senden der Anfrage eine vorläufige Antwort erhält.

```js
const request = entry.firstInterimResponseStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen {{domxref("PerformanceObserver")}}, um über neue `resource`-Performance-Einträge zu benachrichtigen, sobald diese in der Performancelinie des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

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

Das folgende Beispiel verwendet {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Performancelinie des Browsers vorhanden sind.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.firstInterimResponseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Interim response time: ${request}ms`);
  }
});
```

### Zeitmessungsinformationen für Cross-Origin

Wenn der Wert der Eigenschaft `firstInterimResponseStart` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Zeitmessungsinformationen für Cross-Origin sehen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource die folgende Antwort senden, um `https://developer.mozilla.org` die Ansichtszeiten der Ressourcen zu ermöglichen:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
