---
title: "PerformanceResourceTiming: firstInterimResponseStart-Eigenschaft"
short-title: firstInterimResponseStart
slug: Web/API/PerformanceResourceTiming/firstInterimResponseStart
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`firstInterimResponseStart`** gibt einen [`Timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) sofort nach dem Eintreffen des ersten Bytes der vorläufigen 1xx-Antwort (zum Beispiel 100 Continue oder 103 Early Hints) vom Server zurück.

Es gibt keine _end_ Eigenschaft für `firstInterimResponseStart`.

## Wert

Die Eigenschaft `firstInterimResponseStart` kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) sofort nachdem der Browser die ersten vorläufigen Bytes der Antwort vom Server erhält.
- `0`, wenn die Ressource keine vorläufige Antwort gesendet hat
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

> [!NOTE]
> Da Early Hints typischerweise nur bei der Hauptnavigationsanfrage unterstützt werden, die per Definition gleichherkunftlich ist, weist ein `0` typischerweise darauf hin, dass Early Hints **nicht** verwendet wurden.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `firstInterimResponseStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können verwendet werden, um zu messen, wie lange es dauert, bis der Browser eine vorläufige Antwort nach dem Versenden der Anfrage erhält.

```js
const request = entry.firstInterimResponseStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um auf neue `resource` Leistungsnachträge hinzuweisen, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters existierten.

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

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), welches nur `resource` Leistungsnachträge zeigt, die zum Zeitpunkt des Methodenanrufs in der Leistungstimeline des Browsers vorhanden sind.

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

Wenn der Wert der Eigenschaft `firstInterimResponseStart` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Cross-Origin-Timing-Informationen anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` das Ansehen von Timing-Ressourcen zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
