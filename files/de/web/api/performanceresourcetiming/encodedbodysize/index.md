---
title: "PerformanceResourceTiming: encodedBodySize Eigenschaft"
short-title: encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`encodedBodySize`** schreibgeschützte Eigenschaft repräsentiert die Größe (in Oktetten), die vom Abruf (HTTP oder Cache) des Nutzlastkörpers empfangen wurde, bevor jegliche angewandten Inhaltskodierungen (wie gzip oder Brotli) entfernt wurden. Wenn die Ressource aus einem Anwendungscache oder einer lokalen Ressource abgerufen wird, muss sie die Größe des Nutzlastkörpers vor der Entfernung jeglicher angewandter Inhaltskodierung zurückgeben.

## Wert

Die Eigenschaft `encodedBodySize` kann die folgenden Werte haben:

- Eine Zahl, die die Größe (in Oktetten) repräsentiert, die vom Abruf (HTTP oder Cache) des Nutzlastkörpers empfangen wurde, bevor jegliche angewandte Inhaltskodierung entfernt wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Überprüfung, ob der Inhalt komprimiert wurde

Wenn die Eigenschaften `encodedBodySize` und {{domxref("PerformanceResourceTiming.decodedBodySize", "decodedBodySize")}} nicht null sind und voneinander abweichen, wurde der Inhalt komprimiert (zum Beispiel gzip oder Brotli).

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource` Performance-Einträge benachrichtigt, sobald diese in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource` Performance-Einträge anzeigt, die zur Zeit des Methodenaufrufs in der Performance-Zeitleiste des Browsers vorhanden sind:

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

Wenn der Wert der Eigenschaft `encodedBodySize` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Größeninformationen von Cross-Origin-Inhalten freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Beispielsweise, um `https://developer.mozilla.org` zu ermöglichen, Inhaltsgrößen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
