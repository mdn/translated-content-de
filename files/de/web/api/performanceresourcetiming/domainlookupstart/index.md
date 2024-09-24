---
title: "PerformanceResourceTiming: domainLookupStart-Eigenschaft"
short-title: domainLookupStart
slug: Web/API/PerformanceResourceTiming/domainLookupStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`domainLookupStart`** gibt den {{domxref("DOMHighResTimeStamp","Zeitstempel")}} unmittelbar bevor der Browser mit der DNS-Abfrage für die Ressource beginnt, zurück.

## Wert

Die Eigenschaft `domainLookupStart` kann die folgenden Werte haben:

- Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar bevor der Browser mit der DNS-Abfrage für die Ressource beginnt.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

## Beispiele

### Messung der DNS-Abfragezeit

Die Eigenschaften `domainLookupStart` und {{domxref("PerformanceResourceTiming.domainLookupEnd", "domainLookupEnd")}} können genutzt werden, um zu messen, wie lange die DNS-Abfrage dauert.

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Leistungseinträge informiert, wenn sie in der Performance-Zeitlinie des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const dns = entry.domainLookupEnd - entry.domainLookupStart;
    if (dns > 0) {
      console.log(`${entry.name}: DNS-Abfragedauer: ${dns}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Leistungseinträge zeigt, die in der Performance-Zeitlinie des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart;
  if (dns > 0) {
    console.log(`${entry.name}: DNS-Abfragedauer: ${dns}ms`);
  }
});
```

### Informationen zur Cross-Origin-Zeitmessung

Wenn der Wert der Eigenschaft `domainLookupStart` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Informationen zur Cross-Origin-Zeitmessung anzuzeigen, muss das {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

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
