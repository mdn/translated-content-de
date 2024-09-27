---
title: "PerformanceResourceTiming: encodedBodySize-Eigenschaft"
short-title: encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`encodedBodySize`**-Eigenschaft stellt die Größe (in Oktetten) dar, die vom Abruf (HTTP oder Cache) des Nutzlastkörpers empfangen wurde, bevor angewandte Inhaltskodierungen (wie gzip oder Brotli) entfernt werden. Wenn die Ressource aus einem Anwendungscache oder einer lokalen Ressource abgerufen wird, muss die Größe des Nutzlastkörpers vor dem Entfernen einer angewandten Inhaltskodierung zurückgegeben werden.

## Wert

Die `encodedBodySize`-Eigenschaft kann folgende Werte haben:

- Eine Zahl, die die Größe (in Oktetten) darstellt, die vom Abruf (HTTP oder Cache) des Nutzlastkörpers empfangen wurde, bevor die angewandte Inhaltskodierung entfernt wird.
- `0`, wenn es sich um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwortheader verwendet wird.

## Beispiele

### Überprüfung, ob Inhalte komprimiert wurden

Wenn die Eigenschaften `encodedBodySize` und [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) nicht null sind und sich unterscheiden, wurden die Inhalte komprimiert (z. B. gzip oder Brotli).

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Leistungseinträge informiert, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Beobachters zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

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

Wenn der Wert der `encodedBodySize`-Eigenschaft `0` ist, könnte es sich um eine Cross-Origin-Anfrage handeln. Um Informationen zur Größe von Cross-Origin-Inhalten freizugeben, muss der HTTP-Antwortheader {{HTTPHeader("Timing-Allow-Origin")}} gesetzt sein.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` die Ansicht der Inhaltsgrößen zu erlauben, senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
