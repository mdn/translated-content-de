---
title: "PerformanceResourceTiming: decodedBodySize-Eigenschaft"
short-title: decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`decodedBodySize`**-Eigenschaft gibt die Größe (in Oktetten) des beim Abrufen (HTTP oder Cache) empfangenen Nachrichtenkörpers nach Entfernung jeglicher angewandter Inhaltscodierung (wie gzip oder Brotli) zurück. Wenn die Ressource aus einem Anwendungscache oder lokalen Ressourcen abgerufen wird, wird die Größe der Nutzlast nach Entfernung der angewandten Inhaltscodierung zurückgegeben.

## Wert

Die `decodedBodySize`-Eigenschaft kann folgende Werte haben:

- Eine Zahl, die die Größe (in Oktetten) des beim Abrufen (HTTP oder Cache) empfangenen Nachrichtenkörpers nach Entfernung jeglicher angewandter Inhaltscodierung darstellt.
- `0`, wenn es sich bei der Ressource um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Überprüfung, ob der Inhalt komprimiert wurde

Wenn die Eigenschaften `decodedBodySize` und [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) nicht null sind und sich unterscheiden, wurde der Inhalt komprimiert (zum Beispiel gzip oder Brotli).

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge informiert, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die in der Performance-Zeitleiste des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

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

Wenn der Wert der `decodedBodySize`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Informationen zur Größe von Cross-Origin-Inhalten freizulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` die Anzeige von Inhaltsgrößen zu ermöglichen, senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
