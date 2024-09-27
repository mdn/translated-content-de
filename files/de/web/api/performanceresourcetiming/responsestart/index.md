---
title: "PerformanceResourceTiming: responseStart-Eigenschaft"
short-title: responseStart
slug: Web/API/PerformanceResourceTiming/responseStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`responseStart`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server, Cache oder einer lokalen Ressource erhalten hat, zurück.

## Wert

Die `responseStart`-Eigenschaft kann folgende Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhalten hat.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn es sich um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Anfragedauer

Die Eigenschaften `responseStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können verwendet werden, um die Dauer der Anfrage zu messen.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource` Performance-Einträge informiert, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource` Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### Cross-Origin Zeitinformationen

Wenn der Wert der `responseStart`-Eigenschaft `0` ist, könnte es sich um eine Cross-Origin-Anfrage handeln. Um Einsicht in Cross-Origin-Zeitinformationen zu erlauben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Beispielsweise, um `https://developer.mozilla.org` den Zugriff auf Ressourcenzeiten zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
