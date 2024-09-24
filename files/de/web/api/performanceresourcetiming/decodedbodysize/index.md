---
title: "PerformanceResourceTiming: decodedBodySize-Eigenschaft"
short-title: decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`decodedBodySize`**-Eigenschaft gibt die Größe (in Oktetten) zurück, die aus dem Abruf (HTTP oder Cache) des Nachrichtenkörpers empfangen wurde, nachdem jegliche angewandte Inhaltscodierung (wie gzip oder Brotli) entfernt wurde. Wenn die Ressource aus einem Anwendungscache oder lokalen Ressourcen abgerufen wird, wird die Größe der Nutzlast nach Entfernung jeglicher angewandter Inhaltscodierung zurückgegeben.

## Wert

Die `decodedBodySize`-Eigenschaft kann folgende Werte haben:

- Eine Zahl, die die Größe (in Oktetten) darstellt, die aus dem Abruf (HTTP oder Cache) des Nachrichtenkörpers empfangen wurde, nachdem jegliche angewandte Inhaltscodierung entfernt wurde.
- `0`, wenn es sich um eine Anforderung von einer anderen Herkunft handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Überprüfung, ob der Inhalt komprimiert wurde

Wenn die Eigenschaften `decodedBodySize` und {{domxref("PerformanceResourceTiming.encodedBodySize", "encodedBodySize")}} nicht null sind und sich unterscheiden, wurde der Inhalt komprimiert (zum Beispiel gzip oder Brotli).

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Leistungseinträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Leistungseinträge anzeigt, die im Leistungstimeline des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

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

### Größeninformationen von Cross-Origin-Inhalten

Wenn der Wert der `decodedBodySize`-Eigenschaft `0` ist, könnte die Ressource eine Anforderung von einer anderen Herkunft sein. Um Größeninformationen von Cross-Origin-Inhalten offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt sein.

Um beispielsweise `https://developer.mozilla.org` zu erlauben, die Inhaltsgrößen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
