---
title: "PerformanceResourceTiming: domainLookupEnd-Eigenschaft"
short-title: domainLookupEnd
slug: Web/API/PerformanceResourceTiming/domainLookupEnd
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`domainLookupEnd`** gibt den {{domxref("DOMHighResTimeStamp","Zeitstempel")}} unmittelbar nach Abschluss der Domain-Namensauflösung für die Ressource durch den Browser zurück.

Wenn der User-Agent die Domain-Informationen im Cache hat, stellen {{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}} und `domainLookupEnd` die Zeiten dar, zu denen der User-Agent die Domain-Daten aus dem Cache abruft und fertigstellt.

## Wert

Die `domainLookupEnd`-Eigenschaft kann die folgenden Werte haben:

- Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit unmittelbar nach Abschluss der Domain-Namensauflösung für die Ressource durch den Browser darstellt.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Messung der DNS-Auflösungszeit

Die Eigenschaften `domainLookupEnd` und {{domxref("PerformanceResourceTiming.domainLookupStart", "domainLookupStart")}} können verwendet werden, um zu messen, wie lange die DNS-Auflösung dauert.

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Performance-Einträge benachrichtigt, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const dns = entry.domainLookupEnd - entry.domainLookupStart;
    if (dns > 0) {
      console.log(`${entry.name}: DNS-Auflösungsdauer: ${dns}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart;
  if (dns > 0) {
    console.log(`${entry.name}: DNS-Auflösungsdauer: ${dns}ms`);
  }
});
```

### Cross-Origin-Timingsinformationen

Wenn der Wert der `domainLookupEnd`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Cross-Origin-Timingsinformationen anzeigen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource den folgenden Header senden, um `https://developer.mozilla.org` die Ansicht von Timing-Ressourcen zu ermöglichen:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
