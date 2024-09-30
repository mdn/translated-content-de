---
title: "PerformanceResourceTiming: secureConnectionStart-Eigenschaft"
short-title: secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`secureConnectionStart`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser den Handshake-Prozess startet, um die aktuelle Verbindung zu sichern, zurück. Wenn keine sichere Verbindung verwendet wird, gibt die Eigenschaft null zurück.

## Wert

Die Eigenschaft `secureConnectionStart` kann folgende Werte haben:

- Einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der Browser den Handshake-Prozess startet, um die aktuelle Verbindung zu sichern, angibt, wenn die Ressource über eine sichere Verbindung abgerufen wird.
- `0`, wenn keine sichere Verbindung verwendet wird.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messen der TLS-Verhandlungszeit

Die Eigenschaften `secureConnectionStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können verwendet werden, um zu messen, wie lange die TLS-Verhandlung dauert.

```js
const tls = entry.requestStart - entry.secureConnectionStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die sich zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers befinden:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tls = entry.requestStart - entry.secureConnectionStart;
  if (tls > 0) {
    console.log(`${entry.name}: TLS negotiation duration: ${tls}ms`);
  }
});
```

### Cross-Origin Zeitinformationen

Wenn der Wert der Eigenschaft `secureConnectionStart` `0` ist, wird die Ressource entweder nicht über eine sichere Verbindung abgerufen oder es handelt sich um eine Cross-Origin-Anfrage. Um die Anzeige von Cross-Origin-Zeitinformationen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt sein.

Beispielsweise sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
