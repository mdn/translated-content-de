---
title: "PerformanceResourceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`requestStart`**-Eigenschaft gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt unmittelbar davor angibt, wenn der Browser die Ressource vom Server, Cache oder einer lokalen Ressource anfordert. Wenn die Transportverbindung fehlschlägt und der Browser die Anfrage erneut versucht, wird der Wert des Beginns der erneuten Anfrage zurückgegeben.

Es gibt keine _end_-Eigenschaft für `requestStart`. Um die Anforderungszeit zu messen, berechnen Sie [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) - `requestStart` (siehe das Beispiel unten).

## Wert

Die `requestStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar davor angibt, wenn der Browser die Ressource vom Server anfordert.
- `0`, wenn die Ressource augenblicklich aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Anforderungszeit messen

Die Eigenschaften `requestStart` und [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) können verwendet werden, um zu messen, wie lange die Anfrage dauert.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, wenn sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die in der Performance-Zeitleiste des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### Informationen über Cross-Origin-Timing

Wenn der Wert der `requestStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Informationen über Cross-Origin-Timings sehen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Um zum Beispiel `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
