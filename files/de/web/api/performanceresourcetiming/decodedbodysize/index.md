---
title: "PerformanceResourceTiming: Eigenschaft decodedBodySize"
short-title: decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`decodedBodySize`** gibt die Größe (in Oktetten) des vom Abruf (HTTP oder Cache) empfangenen Nachrichtenkörpers zurück, nachdem jegliche angewandte Inhaltskodierung (wie gzip oder Brotli) entfernt wurde. Wenn die Ressource aus einem Anwendungscache oder lokalen Ressourcen abgerufen wird, gibt sie die Größe der Nutzlast nach Entfernung aller angewandten Inhaltskodierungen zurück.

## Wert

Die `decodedBodySize`-Eigenschaft kann folgende Werte haben:

- Eine Zahl, die die Größe (in Oktetten) des vom Abruf (HTTP oder Cache) empfangenen Nachrichtenkörpers darstellt, nachdem jegliche angewandte Inhaltskodierung entfernt wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Überprüfung, ob der Inhalt komprimiert wurde

Wenn die Eigenschaften `decodedBodySize` und [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) nicht null sind und sich unterscheiden, wurde der Inhalt komprimiert (zum Beispiel gzip oder Brotli).

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Leistungseinträge benachrichtigt, sobald sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge zeigt, die sich zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitleiste des Browsers befinden:

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

### Größeninformationen zu Cross-Origin-Inhalten

Wenn der Wert der `decodedBodySize`-Eigenschaft `0` ist, könnte es sich um eine Cross-Origin-Anfrage handeln. Um Größeninformationen zu Cross-Origin-Inhalten offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` den Zugriff auf Inhaltsgrößen zu ermöglichen, folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
