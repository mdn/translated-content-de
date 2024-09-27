---
title: "PerformanceResourceTiming: redirectStart-Eigenschaft"
short-title: redirectStart
slug: Web/API/PerformanceResourceTiming/redirectStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`redirectStart`** schreibgeschützte Eigenschaft gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Startzeit des Abrufs darstellt, der die Umleitung einleitet.

Wenn es beim Abrufen der Ressource HTTP-Weiterleitungen gibt und wenn eine der Weiterleitungen nicht von demselben Ursprung wie das aktuelle Dokument stammt, aber der Timing-Allow-Check-Algorithmus für jede umgeleitete Ressource besteht, gibt diese Eigenschaft die Startzeit des Abrufs zurück, der die Umleitung einleitet; andernfalls wird null zurückgegeben.

Um die Anzahl der Umleitungen zu ermitteln, siehe auch [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount).

## Wert

Die `redirectStart`-Eigenschaft kann folgende Werte annehmen:

- Ein [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Abrufs darstellt, der die Umleitung einleitet.
- `0`, wenn es keine Umleitung gibt.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Umleitungszeit

Die Eigenschaften `redirectStart` und [`redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) können verwendet werden, um zu messen, wie lange die Umleitung dauert.

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource` Performance-Einträge benachrichtigt, sobald sie in der Leistungs-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters vorhanden sind.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource` Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungs-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const redirect = entry.redirectEnd - entry.redirectStart;
  if (redirect > 0) {
    console.log(`${entry.name}: Redirect time: ${redirect}ms`);
  }
});
```

### Timing-Informationen bei Cross-Origin-Anfragen

Wenn der Wert der `redirectStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Anzeige von Timing-Informationen für Cross-Origin-Anfragen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` den Zugriff auf Timing-Ressourcen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

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
