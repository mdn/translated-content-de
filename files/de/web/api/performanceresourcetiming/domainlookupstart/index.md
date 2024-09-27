---
title: "PerformanceResourceTiming: domainLookupStart-Eigenschaft"
short-title: domainLookupStart
slug: Web/API/PerformanceResourceTiming/domainLookupStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`domainLookupStart`**-Eigenschaft, die nur lesbar ist, gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser mit der DNS-Abfrage für die Ressource beginnt, zurück.

## Wert

Die `domainLookupStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser mit der DNS-Abfrage für die Ressource beginnt.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der DNS-Abfragezeit

Die Eigenschaften `domainLookupStart` und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) können verwendet werden, um zu messen, wie lange die DNS-Abfrage dauert.

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `resource`-Performance-Einträge benachrichtigt, wenn sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Beobachters zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die in der Performance-Zeitleiste des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart;
  if (dns > 0) {
    console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
  }
});
```

### Cross-Origin-Timing-Informationen

Wenn der Wert der `domainLookupStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Anzeige von Cross-Origin-Timing-Informationen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource senden, um `https://developer.mozilla.org` das Anzeigen von Timing-Ressourcen zu erlauben:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
