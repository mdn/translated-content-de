---
title: "PerformanceResourceTiming: redirectEnd-Eigenschaft"
short-title: redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`redirectEnd`**-Eigenschaft (nur lesbar) gibt einen {{domxref("DOMHighResTimeStamp", "Zeitstempel")}} unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung zurück.

Beim Abrufen einer Ressource, wenn es mehrere HTTP-Weiterleitungen gibt und eine der Weiterleitungen einen Ursprung hat, der sich vom aktuellen Dokument unterscheidet, und der Timing-Allow-Check-Algorithmus für jede umgeleitete Ressource besteht, gibt diese Eigenschaft die Zeit unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung zurück; andernfalls wird null zurückgegeben.

Um die Anzahl der Weiterleitungen zu erhalten, siehe auch {{domxref("PerformanceNavigationTiming.redirectCount")}}.

## Wert

Die `redirectEnd`-Eigenschaft kann die folgenden Werte haben:

- Ein {{domxref("DOMHighResTimeStamp", "Zeitstempel")}} unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung.
- `0`, wenn es keine Weiterleitung gibt.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Weiterleitungszeit

Die Eigenschaften `redirectEnd` und {{domxref("PerformanceResourceTiming.redirectStart", "redirectStart")}} können verwendet werden, um zu messen, wie lange die Weiterleitung dauert.

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

Beispiel unter Verwendung eines {{domxref("PerformanceObserver")}}, der über neue `resource`-Performance-Einträge informiert, während diese in der Leistungszeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel unter Verwendung von {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const redirect = entry.redirectEnd - entry.redirectStart;
  if (redirect > 0) {
    console.log(`${entry.name}: Redirect time: ${redirect}ms`);
  }
});
```

### Timing-Informationen für Cross-Origin

Wenn der Wert der `redirectEnd`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Timing-Informationen für Cross-Origin zuzulassen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu ermöglichen, Timing-Ressourcen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceNavigationTiming.redirectCount")}}
- {{HTTPHeader("Timing-Allow-Origin")}}
