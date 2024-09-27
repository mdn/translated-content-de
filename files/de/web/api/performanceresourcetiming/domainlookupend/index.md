---
title: "PerformanceResourceTiming: domainLookupEnd-Eigenschaft"
short-title: domainLookupEnd
slug: Web/API/PerformanceResourceTiming/domainLookupEnd
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`domainLookupEnd`** gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach Abschluss der Domainnamenauflösung für die Ressource durch den Browser zurück.

Wenn der Benutzeragent die Domaininformationen im Cache hat, stellen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und `domainLookupEnd` die Zeiten dar, zu denen der Benutzeragent mit dem Abrufen der Domaininformationen aus dem Cache beginnt und endet.

## Wert

Die Eigenschaft `domainLookupEnd` kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach dem Abschluss der Domainnamenauflösung für die Ressource durch den Browser darstellt.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der DNS-Lookup-Zeit

Die Eigenschaften `domainLookupEnd` und [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) können verwendet werden, um zu messen, wie lange der DNS-Lookup dauert.

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart;
  if (dns > 0) {
    console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
  }
});
```

### Timing-Informationen für Cross-Origin-Anfragen

Wenn der Wert der Eigenschaft `domainLookupEnd` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Timing-Informationen für Cross-Origin-Anfragen anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt sein.

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
