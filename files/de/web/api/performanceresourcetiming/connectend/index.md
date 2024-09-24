---
title: "PerformanceResourceTiming: connectEnd-Eigenschaft"
short-title: connectEnd
slug: Web/API/PerformanceResourceTiming/connectEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`connectEnd`** gibt den {{domxref("DOMHighResTimeStamp","Zeitstempel")}} unmittelbar nach dem Herstellen der Verbindung des Browsers mit dem Server zurück, um die Ressource abzurufen. Der Zeitstempelwert umfasst das Zeitintervall zum Aufbau der Transportverbindung sowie andere Zeitintervalle, wie den TLS-Handshake und die [SOCKS](https://en.wikipedia.org/wiki/SOCKS)-Authentifizierung.

## Wert

Die Eigenschaft `connectEnd` kann die folgenden Werte haben:

- Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit nach dem Aufbau einer Verbindung darstellt.
- `0`, wenn die Ressource augenblicklich aus einem Cache abgerufen wurde.
- `0`, wenn es sich um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der TCP-Handshake-Zeit

Die Eigenschaften `connectEnd` und {{domxref("PerformanceResourceTiming.connectStart", "connectStart")}} können verwendet werden, um zu messen, wie lange der TCP-Handshake dauert.

```js
const tcp = entry.connectEnd - entry.connectStart;
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Leistungseinträge informiert, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Beobachtererstellung zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Leistungseinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tcp = entry.connectEnd - entry.connectStart;
  if (tcp > 0) {
    console.log(`${entry.name}: TCP-Handshake-Dauer: ${tcp}ms`);
  }
});
```

### Timing-Informationen bei Cross-Origin

Wenn der Wert der Eigenschaft `connectEnd` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Timing-Informationen bei Cross-Origin sichtbar zu machen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` das Erkennen von Timing-Ressourcen zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
