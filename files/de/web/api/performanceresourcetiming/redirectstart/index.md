---
title: "PerformanceResourceTiming: redirectStart-Eigenschaft"
short-title: redirectStart
slug: Web/API/PerformanceResourceTiming/redirectStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`redirectStart`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurückgibt, der die Startzeit des Abrufs darstellt, welcher die Weiterleitung initiiert.

Wenn es beim Abrufen der Ressource HTTP-Weiterleitungen gibt und eine der Weiterleitungen nicht vom gleichen Ursprung wie das aktuelle Dokument stammt, aber der Timing Allow Check Algorithmus für jede weitergeleitete Ressource besteht, gibt diese Eigenschaft die Startzeit des Abrufs zurück, der die Weiterleitung initiiert; andernfalls wird null zurückgegeben.

Um die Anzahl der Weiterleitungen zu ermitteln, siehe auch [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount).

## Wert

Die `redirectStart`-Eigenschaft kann folgende Werte haben:

- Ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Abrufs darstellt, welcher die Weiterleitung initiiert.
- `0`, wenn es keine Weiterleitung gibt.
- `0`, wenn es sich bei der Ressource um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Weiterleitungszeit

Die Eigenschaften `redirectStart` und [`redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) können verwendet werden, um zu messen, wie lange die Weiterleitung dauert.

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

Ein Beispiel, das einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, der über neue `resource`-Leistungen benachrichtigt, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erzeugung des Observers zuzugreifen.

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

Ein Beispiel, das [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwendet, das nur die `resource`-Leistungseinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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

Wenn der Wert der `redirectStart`-Eigenschaft `0` ist, könnte es sich bei der Ressource um eine Cross-Origin-Anfrage handeln. Um Cross-Origin-Timing-Informationen sehen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` die Sicht auf Timing-Ressourcen zu erlauben, senden:

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
