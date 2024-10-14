---
title: "PerformanceResourceTiming: transferSize-Eigenschaft"
short-title: transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`transferSize`** repräsentiert die Größe (in Oktetten) der abgerufenen Ressource. Die Größe umfasst die Antwort-Header-Felder plus den Antwort-Nutzlastkörper (wie in [RFC7230](https://httpwg.org/specs/rfc7230.html#message.body) definiert).

Wenn die Ressource aus einem lokalen Cache abgerufen oder wenn es sich um eine Cross-Origin-Ressource handelt, gibt diese Eigenschaft null zurück.

## Wert

Die `transferSize`-Eigenschaft kann die folgenden Werte haben:

- Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe beinhaltet die Antwort-Header-Felder plus den [Antwort-Nutzlastkörper](https://httpwg.org/specs/rfc7230.html#message.body) (RFC7230).
- `0`, wenn die Ressource augenblicklich aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Überprüfen, ob ein Cache-Treffer vorliegt

Für Umgebungen, die die [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus)-Eigenschaft nicht unterstützen, kann die `transferSize`-Eigenschaft verwendet werden, um Cache-Treffer zu bestimmen. Wenn `transferSize` null ist und die Ressource eine nicht-null dekodierte Körpergröße hat (bedeutet, die Ressource ist gleich-origin oder hat {{HTTPHeader("Timing-Allow-Origin")}}), wurde die Ressource aus einem lokalen Cache abgerufen.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellungs des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
      console.log(`${entry.name} was loaded from cache`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), welches nur `resource`-Performance-Einträge zeigt, die sich zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers befinden:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

### Informationen zur Größe von Cross-Origin-Inhalten

Wenn der Wert der `transferSize`-Eigenschaft `0` ist und nicht aus einem lokalen Cache geladen wurde, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Informationen zur Größe von Cross-Origin-Inhalten offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt sein.

Zum Beispiel, um `https://developer.mozilla.org` die Ansicht von Inhaltsgrößen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
