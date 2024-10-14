---
title: "PerformanceResourceTiming: redirectEnd-Eigenschaft"
short-title: redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`redirectEnd`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) direkt nach dem Empfang des letzten Bytes der Antwort der letzten Umleitung zurück.

Wenn beim Abrufen einer Ressource mehrere HTTP-Umleitungen auftreten und eine der Umleitungen einen Ursprung hat, der sich vom aktuellen Dokument unterscheidet, und der `timing allow check` Algorithmus für jede umgeleitete Ressource erfolgreich ist, gibt diese Eigenschaft die Zeit direkt nach dem Empfang des letzten Bytes der Antwort der letzten Umleitung zurück; andernfalls wird null zurückgegeben.

Um die Anzahl der Umleitungen zu ermitteln, siehe auch [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount).

## Wert

Die `redirectEnd`-Eigenschaft kann folgende Werte haben:

- Einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) direkt nach dem Empfang des letzten Bytes der Antwort der letzten Umleitung.
- `0`, wenn es keine Umleitung gibt.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Umleitungszeit

Die Eigenschaften `redirectEnd` und [`redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) können verwendet werden, um zu messen, wie lange die Umleitung dauert.

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, während sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const redirect = entry.redirectEnd - entry.redirectStart;
  if (redirect > 0) {
    console.log(`${entry.name}: Redirect time: ${redirect}ms`);
  }
});
```

### Cross-Origin Timing-Informationen

Wenn der Wert der `redirectEnd`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Anzeige von Timing-Informationen bei Cross-Origin zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` Zugriff auf Timing-Ressourcen zu gewähren, sollte die Cross-Origin-Ressource senden:

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
