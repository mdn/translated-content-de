---
title: "PerformanceResourceTiming: decodedBodySize-Eigenschaft"
short-title: decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`decodedBodySize`**-Eigenschaft (nur lesbar) gibt die Größe (in Oktetten) des empfangenen Nachrichtentextes vom Abruf (HTTP oder Cache) nach Entfernung jeglicher angewandter Inhaltskodierung (wie gzip oder Brotli) zurück. Wenn die Ressource aus einem Anwendungscache oder lokalen Ressourcen abgerufen wird, gibt sie die Größe der Nutzlast nach Entfernung jeglicher angewandter Inhaltskodierung zurück.

## Wert

Die `decodedBodySize`-Eigenschaft kann folgende Werte haben:

- Eine Zahl, die die Größe (in Oktetten) des empfangenen Nachrichtentextes vom Abruf (HTTP oder Cache) nach Entfernung jeglicher angewandter Inhaltskodierung darstellt.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Überprüfung, ob der Inhalt komprimiert wurde

Wenn die Eigenschaften `decodedBodySize` und [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) nicht null sind und sich unterscheiden, wurde der Inhalt komprimiert (zum Beispiel mit gzip oder Brotli).

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

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

### Größeninformationen für Inhalte von anderen Ursprüngen

Wenn der Wert der `decodedBodySize`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Größeninformationen für Inhalte von anderen Ursprüngen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt sein.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` zu erlauben, Inhaltsgrößen zu sehen, senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
