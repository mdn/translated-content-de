---
title: "PerformanceResourceTiming: transferSize-Eigenschaft"
short-title: transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`transferSize`** repräsentiert die Größe (in Oktetten) der abgerufenen Ressource. Die Größe umfasst die Antwortheaderfelder sowie den Antwortnutzlastkörper (wie in [RFC7230](https://httpwg.org/specs/rfc7230.html#message.body) definiert).

Wenn die Ressource aus einem lokalen Cache abgerufen wird oder eine Cross-Origin-Ressource ist, gibt diese Eigenschaft null zurück.

## Wert

Die Eigenschaft `transferSize` kann die folgenden Werte haben:

- Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Antwortheaderfelder sowie den [Antwortnutzlastkörper](https://httpwg.org/specs/rfc7230.html#message.body) (RFC7230).
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Überprüfung, ob ein Cache-Treffer vorliegt

Für Umgebungen, die die Eigenschaft {{domxref("PerformanceResourceTiming.responseStatus", "responseStatus")}} nicht unterstützen, kann die Eigenschaft `transferSize` verwendet werden, um Cache-Treffer zu bestimmen. Wenn `transferSize` null ist und die Ressource eine nicht-null dekodierte Körpergröße hat (was bedeutet, dass die Ressource mit gleicher Herkunft ist oder {{HTTPHeader("Timing-Allow-Origin")}} hat), wurde die Ressource aus einem lokalen Cache abgerufen.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der Benachrichtigungen über neue `resource` Leistungsbeiträge gibt, während sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource` Leistungsbeiträge zeigt, die in der Leistungstimeline des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

### Informationen zur Inhaltsgröße bei Cross-Origin

Wenn der Wert der Eigenschaft `transferSize` `0` ist und nicht aus einem lokalen Cache geladen wurde, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Informationen zur Inhaltsgröße von Cross-Origin-Ressourcen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu ermöglichen, Inhaltsgrößen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
