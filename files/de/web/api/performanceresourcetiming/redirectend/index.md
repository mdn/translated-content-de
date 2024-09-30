---
title: "PerformanceResourceTiming: redirectEnd-Eigenschaft"
short-title: redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`redirectEnd`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Umleitung zurück.

Beim Abrufen einer Ressource, falls es mehrere HTTP-Umleitungen gibt und eine der Umleitungen einen anderen Ursprung als das aktuelle Dokument hat, und der Timing Allow Check-Algorithmus für jede umgeleitete Ressource besteht, gibt diese Eigenschaft die Zeit unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Umleitung zurück; andernfalls wird null zurückgegeben.

Um die Anzahl der Umleitungen zu ermitteln, siehe auch [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount).

## Wert

Die `redirectEnd`-Eigenschaft kann folgende Werte haben:

- Ein [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Umleitung.
- `0`, wenn es keine Umleitung gibt.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Messung der Umleitungszeit

Die `redirectEnd`- und [`redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart)-Eigenschaften können verwendet werden, um zu messen, wie lange die Umleitung dauert.

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const redirect = entry.redirectEnd - entry.redirectStart;
  if (redirect > 0) {
    console.log(`${entry.name}: Redirect time: ${redirect}ms`);
  }
});
```

### Cross-Origin-Timing-Informationen

Wenn der Wert der `redirectEnd`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Cross-Origin-Timing-Informationen anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt sein.

Beispielsweise sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` Zugriff auf Timing-Ressourcen zu gewähren, folgendes senden:

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
