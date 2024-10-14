---
title: "PerformanceResourceTiming: connectEnd-Eigenschaft"
short-title: connectEnd
slug: Web/API/PerformanceResourceTiming/connectEnd
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`connectEnd`** gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Abschluss der Verbindungserstellung durch den Browser mit dem Server, um die Ressource abzurufen, zurück. Der Zeitstempelwert umfasst das Zeitintervall zum Aufbau der Transportverbindung sowie andere Zeitintervalle wie TLS-Handshake und [SOCKS](https://en.wikipedia.org/wiki/SOCKS)-Authentifizierung.

## Wert

Die `connectEnd`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit nach dem Aufbau einer Verbindung darstellt.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der TCP-Handshake-Zeit

Die Eigenschaften `connectEnd` und [`connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) können verwendet werden, um die Dauer des TCP-Handshakes zu messen.

```js
const tcp = entry.connectEnd - entry.connectStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `resource`-Performance-Einträge meldet, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), die nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

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

Wenn der Wert der `connectEnd`-Eigenschaft `0` ist, könnte es sich um eine Cross-Origin-Anfrage handeln. Um Cross-Origin-Zeitinformationen sichtbar zu machen, muss der HTTP-Antwort-Header {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource Folgendes senden, um `https://developer.mozilla.org` das Einsehen von Timing-Ressourcen zu erlauben:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
