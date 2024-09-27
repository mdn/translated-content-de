---
title: "PerformanceResourceTiming: secureConnectionStart-Eigenschaft"
short-title: secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`secureConnectionStart`**-Eigenschaft ist schreibgeschützt und gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Beginn des Handshake-Prozesses des Browsers zurück, um die aktuelle Verbindung zu sichern. Wenn keine sichere Verbindung verwendet wird, gibt die Eigenschaft null zurück.

## Wert

Die `secureConnectionStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor dem Beginn des Handshake-Prozesses des Browsers angibt, um die aktuelle Verbindung zu sichern, falls die Ressource über eine sichere Verbindung abgerufen wird.
- `0`, wenn keine sichere Verbindung verwendet wird.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anforderung ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Messung der TLS-Verhandlungszeit

Die `secureConnectionStart`- und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)-Eigenschaften können verwendet werden, um zu messen, wie lange die TLS-Verhandlung dauert.

```js
const tls = entry.requestStart - entry.secureConnectionStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `resource`-Leistungseinträge benachrichtigt, sobald diese in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Beobachters zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const tls = entry.requestStart - entry.secureConnectionStart;
    if (tls > 0) {
      console.log(`${entry.name}: TLS negotiation duration: ${tls}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge zeigt, die in der Leistungstimeline des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tls = entry.requestStart - entry.secureConnectionStart;
  if (tls > 0) {
    console.log(`${entry.name}: TLS negotiation duration: ${tls}ms`);
  }
});
```

### Cross-Origin-Zeitinformationen

Wenn der Wert der `secureConnectionStart`-Eigenschaft `0` ist, wird entweder keine sichere Verbindung verwendet oder es handelt sich um eine Cross-Origin-Anforderung. Um das Anzeigen von Cross-Origin-Zeitinformationen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` das Anzeigen von Zeitressourcen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
