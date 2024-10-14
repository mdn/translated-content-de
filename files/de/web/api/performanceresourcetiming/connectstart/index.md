---
title: "PerformanceResourceTiming: connectStart-Eigenschaft"
short-title: connectStart
slug: Web/API/PerformanceResourceTiming/connectStart
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`connectStart`**-Eigenschaft ist nur lesbar und gibt den [`Timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der User-Agent damit beginnt, die Verbindung zum Server zur Ressourcenerfassung herzustellen, zurück.

## Wert

Die `connectStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Verbindung zum Server herzustellen, um die Ressource abzurufen.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine cross-origin Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messen der TCP-Handshake-Zeit

Die Eigenschaften `connectStart` und [`connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) können verwendet werden, um zu messen, wie lange es dauert, bis der TCP-Handshake erfolgt.

```js
const tcp = entry.connectEnd - entry.connectStart;
```

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, während sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tcp = entry.connectEnd - entry.connectStart;
  if (tcp > 0) {
    console.log(`${entry.name}: TCP handshake duration: ${tcp}ms`);
  }
});
```

### Cross-Origin-Zeitinformationen

Wenn der Wert der `connectStart`-Eigenschaft `0` ist, könnte die Ressource eine cross-origin Anfrage sein. Um die Anzeige der Cross-Origin-Zeitinformationen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Beispielsweise sollte die cross-origin Ressource diesen Header senden, um `https://developer.mozilla.org` zu ermöglichen, Zeitdaten zu sehen:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
