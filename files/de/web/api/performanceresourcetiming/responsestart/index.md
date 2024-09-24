---
title: "PerformanceResourceTiming: responseStart-Eigenschaft"
short-title: responseStart
slug: Web/API/PerformanceResourceTiming/responseStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`responseStart`**-Eigenschaft, welche nur gelesen werden kann, gibt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} zurück, der unmittelbar nach dem Empfang des ersten Bytes der Antwort vom Server, Cache oder einer lokalen Ressource durch den Browser erfolgt.

## Wert

Die `responseStart`-Eigenschaft kann folgende Werte haben:

- Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhält.
- `0`, wenn die Ressource augenblicklich aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Anforderungszeit messen

Die Eigenschaften `responseStart` und {{domxref("PerformanceResourceTiming.requestStart", "requestStart")}} können verwendet werden, um zu messen, wie lange die Anfrage benötigt.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der neue `resource`-Performance-Einträge benachrichtigt, während sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erzeugung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.responseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Anforderungszeit: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Anforderungszeit: ${request}ms`);
  }
});
```

### Cross-Origin Timing-Informationen

Wenn der Wert der `responseStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Cross-Origin Timing-Informationen sichtbar zu machen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Beispielsweise, um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
