---
title: "PerformanceResourceTiming: encodedBodySize-Eigenschaft"
short-title: encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`encodedBodySize`** repräsentiert die Größe (in Oktetten) des empfangenen Payload-Körpers aus dem Abruf (HTTP oder Cache), bevor jegliche angewandte Inhaltscodierungen (wie gzip oder Brotli) entfernt werden. Wenn die Ressource aus einem Anwendungscache oder einer lokalen Ressource abgerufen wird, muss die Größe des Payload-Körpers vor dem Entfernen jeglicher angewandten Inhaltscodierungen zurückgegeben werden.

## Wert

Die `encodedBodySize`-Eigenschaft kann die folgenden Werte haben:

- Eine Zahl, die die Größe (in Oktetten) des empfangenen Payload-Körpers aus dem Abruf (HTTP oder Cache) repräsentiert, bevor jegliche angewandten Inhaltscodierungen entfernt werden.
- `0`, wenn die Ressource eine Cross-Origin-Anforderung ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Überprüfen, ob der Inhalt komprimiert wurde

Wenn die Eigenschaften `encodedBodySize` und [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) nicht null sind und sich unterscheiden, wurde der Inhalt komprimiert (zum Beispiel mit gzip oder Brotli).

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der Benachrichtigungen über neue `resource`-Performance-Einträge gibt, während sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um Einträge aus der Zeit vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

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

### Informationen zur Größe von Inhalten über Cross-Origin-Anfragen

Wenn der Wert der `encodedBodySize`-Eigenschaft `0` ist, könnte es sich um eine Cross-Origin-Anforderung handeln. Um Informationen zur Größe von Cross-Origin-Inhalten offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header festgelegt sein.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Inhaltsgrößen zu sehen, sollte die Cross-Origin-Ressource Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
