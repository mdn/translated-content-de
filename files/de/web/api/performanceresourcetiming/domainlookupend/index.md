---
title: "PerformanceResourceTiming: domainLookupEnd-Eigenschaft"
short-title: domainLookupEnd
slug: Web/API/PerformanceResourceTiming/domainLookupEnd
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`domainLookupEnd`** gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die Domain-Namensauflösung für die Ressource abgeschlossen hat, zurück.

Wenn der Benutzeragent die Domain-Informationen im Cache hat, stellen [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) und `domainLookupEnd` die Zeiten dar, zu denen der Benutzeragent die Abrufung der Domain-Daten aus dem Cache startet und beendet.

## Wert

Die `domainLookupEnd`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach Abschluss der Domain-Namensauflösung für die Ressource repräsentiert.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

## Beispiele

### Messung der DNS-Abrufzeit

Die `domainLookupEnd`- und [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart)-Eigenschaften können verwendet werden, um zu messen, wie lange die DNS-Auflösung dauert.

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Observer-Erstellung zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die in der Performance-Zeitleiste des Browsers zum Zeitpunkt des Methodenaufrufs vorhanden sind:

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

Wenn der Wert der `domainLookupEnd`-Eigenschaft `0` ist, könnte es sich um eine Cross-Origin-Anfrage handeln. Um Cross-Origin-Timing-Informationen sehen zu dürfen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Zum Beispiel sollte, um `https://developer.mozilla.org` das Anzeigen von Timing-Ressourcen zu erlauben, die Cross-Origin-Ressource folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
