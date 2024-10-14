---
title: "PerformanceResourceTiming: encodedBodySize-Eigenschaft"
short-title: encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`encodedBodySize`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die die Größe (in Oktetten) des beim Fetch (HTTP oder Cache) empfangenen Nutzlastkörpers darstellt, bevor jegliche angewandten Inhaltskodierungen (wie gzip oder Brotli) entfernt werden. Wenn die Ressource aus einem Anwendungs-Cache oder einer lokalen Ressource abgerufen wird, muss die Größe des Nutzlastkörpers vor der Entfernung jeglicher angewandten Inhaltskodierungen zurückgegeben werden.

## Wert

Die `encodedBodySize`-Eigenschaft kann die folgenden Werte haben:

- Eine Zahl, die die Größe (in Oktetten) des beim Fetch (HTTP oder Cache) empfangenen Nutzlastkörpers darstellt, bevor jegliche angewandte Inhaltskodierungen entfernt werden.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwort-Header verwendet wird.

## Beispiele

### Überprüfung, ob der Inhalt komprimiert wurde

Wenn die Eigenschaften `encodedBodySize` und [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) nicht null sind und sich unterscheiden, wurde der Inhalt komprimiert (zum Beispiel gzip oder Brotli).

Ein Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge informiert, wenn sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const uncompressed =
      entry.decodedBodySize && entry.decodedBodySize === entry.encodedBodySize;
    if (uncompressed) {
      console.log(`${entry.name} was not compressed!`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Ein Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const uncompressed =
    entry.decodedBodySize && entry.decodedBodySize === entry.encodedBodySize;
  if (uncompressed) {
    console.log(`${entry.name} was not compressed!`);
  }
});
```

### Informationen zur Größe von Cross-Origin-Inhalten

Wenn der Wert der `encodedBodySize`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Cross-Origin-Informationsgrößen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwort-Header gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` die Inhaltsgrößen zu zeigen, senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
