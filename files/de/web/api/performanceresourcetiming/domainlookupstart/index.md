---
title: "PerformanceResourceTiming: domainLookupStart-Eigenschaft"
short-title: domainLookupStart
slug: Web/API/PerformanceResourceTiming/domainLookupStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`domainLookupStart`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) direkt vor dem Start der DNS-Abfrage des Browsers für die Ressource zurückgibt.

## Wert

Die `domainLookupStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) direkt bevor der Browser die DNS-Abfrage für die Ressource startet.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn es sich um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der DNS-Lookup-Zeit

Die Eigenschaften `domainLookupStart` und [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) können verwendet werden, um zu messen, wie lange die DNS-Abfrage dauert.

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `resource`-Performance-Einträge zeigt, die in der Performance-Timeline des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart;
  if (dns > 0) {
    console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
  }
});
```

### Cross-Origin Zeitinformationen

Wenn der Wert der `domainLookupStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um es zu ermöglichen, Cross-Origin Zeitinformationen zu sehen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` das Anzeigen von Timing-Ressourcen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
