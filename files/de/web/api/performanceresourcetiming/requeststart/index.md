---
title: "PerformanceResourceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
l10n:
  sourceCommit: db12ba7455d1897dc1ff5f5c1dbe36f6e2720805
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`requestStart`**-Eigenschaft gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Zeit unmittelbar bevor der Browser die Ressource vom Server, Cache oder lokalen Ressource anfordert, zurück. Wenn die Transportverbindung fehlschlägt und der Browser die Anforderung erneut ausführt, wird der Wert des Beginns der erneuten Anforderung zurückgegeben.

Es gibt keine _end_-Eigenschaft für `requestStart`. Um die Anforderungszeit zu messen, berechnen Sie [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) - `requestStart` (siehe das Beispiel unten).

## Wert

Die `requestStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der Browser die Ressource vom Server anfordert, darstellt.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anforderung ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

Wenn der `firstInterimResponseStart` ungleich null ist, zeigt dies an, dass er denselben Wert wie [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) für [unterstützte Browser](#browser-kompatibilität) haben sollte.

Wenn es keine Zwischenantworten gibt, ist `requestStart` derselbe wie `finalResponseHeadersStart` und `firstInterimResponseStart` ist 0.

## Beispiele

### Messen der Anforderungszeit

Die Eigenschaften `requestStart` und [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) können verwendet werden, um zu messen, wie lange die Anforderung dauert.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue Leistungsressourcen-Einträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), die nur `resource`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

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

Wenn der Wert der `requestStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anforderung sein. Um Cross-Origin-Zeitinformationen anzeigen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

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
