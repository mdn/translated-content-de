---
title: "PerformanceResourceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`requestStart`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurückgibt, der den Zeitpunkt unmittelbar vor dem Start der Anforderung des Browsers an den Server, den Cache oder die lokale Ressource darstellt. Wenn die Transportverbindung fehlschlägt und der Browser die Anforderung erneut versucht, wird der Beginn der erneuten Anforderung als Wert zurückgegeben.

Es gibt keine _end_-Eigenschaft für `requestStart`. Um die Anforderungszeit zu messen, berechnen Sie [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) - `requestStart` (siehe Beispiel unten).

## Wert

Die `requestStart`-Eigenschaft kann folgende Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar vor dem Start der Anforderung des Browsers an den Server darstellt.
- `0`, wenn die Ressource unmittelbar aus einem Cache abgerufen wurde.
- `0`, wenn es sich um eine Cross-Origin-Anforderung handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `requestStart` und [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) können verwendet werden, um zu messen, wie lange die Anforderung dauert.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erzeugung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), die nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### Cross-Origin-Timing-Informationen

Wenn der Wert der `requestStart`-Eigenschaft `0` ist, könnte es sich bei der Ressource um eine Cross-Origin-Anforderung handeln. Um Cross-Origin-Timing-Informationen anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Beispielsweise sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` den Zugriff auf Timing-Ressourcen zu ermöglichen, Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
