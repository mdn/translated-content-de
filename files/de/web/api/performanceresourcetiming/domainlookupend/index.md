---
title: "PerformanceResourceTiming: domainLookupEnd-Eigenschaft"
short-title: domainLookupEnd
slug: Web/API/PerformanceResourceTiming/domainLookupEnd
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`domainLookupEnd`** gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach Abschluss der DNS-Abfrage für die Ressource durch den Browser zurück.

Wenn der User Agent die Domain-Informationen im Cache hat, geben [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und `domainLookupEnd` die Zeiten an, zu denen der User Agent die Abfrage der Domain-Daten aus dem Cache beginnt und beendet.

## Wert

Die `domainLookupEnd`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach Abschluss der DNS-Abfrage für die Ressource durch den Browser darstellt.
- `0`, wenn die Ressource unmittelbar aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Messung der DNS-Abfragezeit

Die Eigenschaften `domainLookupEnd` und [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) können verwendet werden, um zu messen, wie lange die DNS-Abfrage dauert.

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performanceeinträge benachrichtigt wird, wenn diese in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `resource`-Performanceeinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart;
  if (dns > 0) {
    console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
  }
});
```

### Cross-Origin-Zeitinformationen

Wenn der Wert der `domainLookupEnd`-Eigenschaft `0` ist, könnte es sich um eine Cross-Origin-Anfrage handeln. Um Cross-Origin-Zeitinformationen sichtbar zu machen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
