---
title: "PerformanceResourceTiming: connectStart-Eigenschaft"
short-title: connectStart
slug: Web/API/PerformanceResourceTiming/connectStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`connectStart`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die den {{domxref("DOMHighResTimeStamp", "Zeitstempel")}} unmittelbar bevor der User Agent beginnt, die Verbindung zum Server herzustellen, um die Ressource abzurufen, zurückgibt.

## Wert

Die `connectStart`-Eigenschaft kann die folgenden Werte haben:

- Ein {{domxref("DOMHighResTimeStamp")}}, unmittelbar bevor der Browser beginnt, die Verbindung zum Server herzustellen, um die Ressource abzurufen.
- `0`, wenn die Ressource unmittelbar aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der TCP-Handshake-Zeit

Die `connectStart`- und {{domxref("PerformanceResourceTiming.connectEnd", "connectEnd")}}-Eigenschaften können verwendet werden, um zu messen, wie lange das TCP-Handshake dauert.

```js
const tcp = entry.connectEnd - entry.connectStart;
```

Ein Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erzeugung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const tcp = entry.connectEnd - entry.connectStart;
    if (tcp > 0) {
      console.log(`${entry.name}: TCP-Handshake-Dauer: ${tcp}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Ein Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tcp = entry.connectEnd - entry.connectStart;
  if (tcp > 0) {
    console.log(`${entry.name}: TCP-Handshake-Dauer: ${tcp}ms`);
  }
});
```

### Cross-Origin-Zeitinformationen

Wenn der Wert der `connectStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Anzeige von Cross-Origin-Zeitinformationen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` die Ansicht von Timing-Ressourcen zu erlauben, sollte die Cross-Origin-Ressource folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
