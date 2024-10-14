---
title: "PerformanceResourceTiming: domainLookupStart-Eigenschaft"
short-title: domainLookupStart
slug: Web/API/PerformanceResourceTiming/domainLookupStart
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`domainLookupStart`** gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Domain-Name-Abfrage für die Ressource startet, zurück.

## Wert

Die Eigenschaft `domainLookupStart` kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Domain-Name-Abfrage für die Ressource startet.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der DNS-Abfragezeit

Die Eigenschaften `domainLookupStart` und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) können verwendet werden, um zu messen, wie lange die DNS-Abfrage dauert.

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource` Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const dns = entry.domainLookupEnd - entry.domainLookupStart;
    if (dns > 0) {
      console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource` Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart;
  if (dns > 0) {
    console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
  }
});
```

### Cross-Origin Timing-Informationen

Wenn der Wert der Eigenschaft `domainLookupStart` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Cross-Origin-Timing-Informationen anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` das Anzeigen von Timing-Ressourcen zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
