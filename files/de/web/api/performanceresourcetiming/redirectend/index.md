---
title: "PerformanceResourceTiming: redirectEnd-Eigenschaft"
short-title: redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`redirectEnd`** gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung zurück.

Beim Abrufen einer Ressource, wenn es mehrere HTTP-Weiterleitungen gibt und eine der Weiterleitungen einen Ursprung hat, der sich von dem des aktuellen Dokuments unterscheidet, und der Timing-Allow-Algorithmus für jede weitergeleitete Ressource erfolgreich ist, gibt diese Eigenschaft die Zeit unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung zurück; andernfalls wird null zurückgegeben.

Um die Anzahl der Weiterleitungen zu erhalten, siehe auch [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount).

## Wert

Die Eigenschaft `redirectEnd` kann folgende Werte haben:

- Ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung.
- `0`, wenn es keine Weiterleitung gibt.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Weiterleitungszeit

Die Eigenschaften `redirectEnd` und [`redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) können verwendet werden, um zu messen, wie lange die Weiterleitung dauert.

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `resource`-Performance-Einträge meldet, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const redirect = entry.redirectEnd - entry.redirectStart;
  if (redirect > 0) {
    console.log(`${entry.name}: Redirect time: ${redirect}ms`);
  }
});
```

### Informationen zur Cross-Origin-Zeitmessung

Wenn der Wert der `redirectEnd`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Anzeige von Zeitmessungsinformationen über Cross-Origin hinweg zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt sein.

Zum Beispiel, um `https://developer.mozilla.org` zu ermöglichen, Zeitmessungsressourcen zu sehen, sollte die Cross-Origin-Ressource senden:

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
