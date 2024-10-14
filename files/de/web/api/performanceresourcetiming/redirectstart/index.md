---
title: "PerformanceResourceTiming: redirectStart-Eigenschaft"
short-title: redirectStart
slug: Web/API/PerformanceResourceTiming/redirectStart
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`redirectStart`**-Eigenschaft gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Startzeit des Abrufs repräsentiert, der die Umleitung initiiert.

Wenn es HTTP-Umleitungen beim Abrufen der Ressource gibt und wenn eine der Umleitungen nicht vom gleichen Ursprung wie das aktuelle Dokument stammt, aber der Timing-Allow-Check-Algorithmus für jede umgeleitete Ressource besteht, gibt diese Eigenschaft die Startzeit des Abrufs zurück, der die Umleitung initiiert; andernfalls wird null zurückgegeben.

Um die Anzahl der Umleitungen zu ermitteln, siehe auch [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount).

## Wert

Die `redirectStart`-Eigenschaft kann folgende Werte haben:

- Ein [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Abrufs darstellt, der die Umleitung initiiert.
- `0`, wenn es keine Umleitung gibt.
- `0`, wenn die Ressource eine anfrageübergreifende Abfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Umleitungszeit

Die Eigenschaften `redirectStart` und [`redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) können verwendet werden, um zu messen, wie lange die Umleitung dauert.

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `resource` Performance-Einträge meldet, sobald sie in der Leistungszeitleiste des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const redirect = entry.redirectEnd - entry.redirectStart;
    if (redirect > 0) {
      console.log(`${entry.name}: Redirect time: ${redirect}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource` Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const redirect = entry.redirectEnd - entry.redirectStart;
  if (redirect > 0) {
    console.log(`${entry.name}: Redirect time: ${redirect}ms`);
  }
});
```

### Timing-Informationen bei anfrageübergreifenden Anfragen

Wenn der Wert der `redirectStart`-Eigenschaft `0` ist, könnte die Ressource eine anfrageübergreifende Anfrage sein. Um anfrageübergreifende Timing-Informationen zu sehen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` den Zugriff auf Timing-Ressourcen zu erlauben, sollte die anfrageübergreifende Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount)
- {{HTTPHeader("Timing-Allow-Origin")}}
