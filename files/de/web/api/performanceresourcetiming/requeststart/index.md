---
title: "PerformanceResourceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`requestStart`**-Eigenschaft (nur lesbar) gibt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} der Zeit unmittelbar vor dem Beginn der Anforderung der Ressource durch den Browser vom Server, Cache oder lokalen Ressource zurück. Wenn die Transportverbindung fehlschlägt und der Browser die Anforderung erneut versucht, wird der Anfang der erneuten Anforderung zurückgegeben.

Es gibt keine _end_-Eigenschaft für `requestStart`. Um die Anforderungszeit zu messen, berechnen Sie {{domxref("PerformanceResourceTiming.responseStart", "responseStart")}} - `requestStart` (siehe das Beispiel unten).

## Wert

Die `requestStart`-Eigenschaft kann die folgenden Werte haben:

- Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit unmittelbar vor dem Beginn der Anforderung der Ressource durch den Browser vom Server darstellt.
- `0` wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0` wenn die Ressource eine Cross-Origin-Anforderung ist und kein {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwortheader verwendet wird.

## Beispiele

### Anforderungszeit messen

Die `requestStart`- und {{domxref("PerformanceResourceTiming.responseStart", "responseStart")}}-Eigenschaften können verwendet werden, um zu messen, wie lange die Anforderung dauert.

```js
const request = entry.responseStart - entry.requestStart;
```

Ein Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Performance-Einträge informiert, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.responseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Request time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Ein Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge zeigt, die in der Performance-Zeitleiste des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### Timing-Informationen für Cross-Origin

Wenn der Wert der `requestStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anforderung sein. Um Timing-Informationen für Cross-Origin zu sehen, muss der {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwortheader gesetzt werden.

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
