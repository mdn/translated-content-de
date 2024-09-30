---
title: "PerformanceResourceTiming: responseStart-Eigenschaft"
short-title: responseStart
slug: Web/API/PerformanceResourceTiming/responseStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`responseStart`**-Eigenschaft gibt eine schreibgeschützte [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server, Cache oder lokalen Ressource erhalten hat, zurück.

## Wert

Die `responseStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhalten hat.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn es sich um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `responseStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können verwendet werden, um zu messen, wie lange die Anfrage dauert.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), die nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### Cross-Origin-Zeitinformationen

Wenn der Wert der `responseStart`-Eigenschaft `0` ist, könnte es sich um eine Cross-Origin-Anfrage handeln. Um Cross-Origin-Zeitinformationen anzeigen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Zeitinformationen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
