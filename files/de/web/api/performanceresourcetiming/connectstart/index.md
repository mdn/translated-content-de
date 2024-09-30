---
title: "PerformanceResourceTiming: connectStart-Eigenschaft"
short-title: connectStart
slug: Web/API/PerformanceResourceTiming/connectStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`connectStart`**-Eigenschaft, die nur gelesen werden kann, gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Benutzeragent die Verbindung zum Server herstellt, um die Ressource abzurufen.

## Wert

Die `connectStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Verbindung zum Server herstellt, um die Ressource abzurufen.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der TCP-Handshake-Zeit

Die `connectStart`- und [`connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd)-Eigenschaften können verwendet werden, um zu messen, wie lange der TCP-Handshake dauert.

```js
const tcp = entry.connectEnd - entry.connectStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge informiert, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const tcp = entry.connectEnd - entry.connectStart;
    if (tcp > 0) {
      console.log(`${entry.name}: TCP handshake duration: ${tcp}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tcp = entry.connectEnd - entry.connectStart;
  if (tcp > 0) {
    console.log(`${entry.name}: TCP handshake duration: ${tcp}ms`);
  }
});
```

### Informationen zum Cross-Origin-Timing

Wenn der Wert der `connectStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Anzeige von Cross-Origin-Timing-Informationen zu erlauben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` die Anzeige von Timing-Ressourcen zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
