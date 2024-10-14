---
title: "PerformanceResourceTiming: secureConnectionStart-Eigenschaft"
short-title: secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`secureConnectionStart`** gibt einen [`Timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Zeitpunkt zurück, an dem der Browser den Handshake-Prozess zur Sicherung der aktuellen Verbindung startet. Wenn keine sichere Verbindung verwendet wird, gibt die Eigenschaft Null zurück.

## Wert

Die Eigenschaft `secureConnectionStart` kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar vor dem Start des Handshake-Prozesses zur Sicherung der aktuellen Verbindung angibt, wenn die Ressource über eine sichere Verbindung abgerufen wird.
- `0`, wenn keine sichere Verbindung verwendet wird.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der TLS-Aushandlungszeit

Die Eigenschaften `secureConnectionStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können verwendet werden, um zu messen, wie lange die TLS-Aushandlung dauert.

```js
const tls = entry.requestStart - entry.secureConnectionStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tls = entry.requestStart - entry.secureConnectionStart;
  if (tls > 0) {
    console.log(`${entry.name}: TLS negotiation duration: ${tls}ms`);
  }
});
```

### Informationen zur Zeitmessung bei Cross-Origin

Wenn der Wert der Eigenschaft `secureConnectionStart` `0` ist, wird entweder keine sichere Verbindung verwendet oder es handelt sich um eine Cross-Origin-Anfrage. Um die Anzeige von Cross-Origin-Zeitinformationen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel sollte, um `https://developer.mozilla.org` den Zugriff auf Zeitressourcen zu ermöglichen, die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
