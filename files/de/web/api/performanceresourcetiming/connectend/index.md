---
title: "PerformanceResourceTiming: connectEnd-Eigenschaft"
short-title: connectEnd
slug: Web/API/PerformanceResourceTiming/connectEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`connectEnd`** gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Abschluss der Verbindung zum Server durch den Browser zurück, um die Ressource abzurufen. Der Zeitstempelwert umfasst das Zeitintervall, das benötigt wird, um die Transportverbindung herzustellen, sowie andere Zeitintervalle wie TLS-Handshake und [SOCKS](https://en.wikipedia.org/wiki/SOCKS)-Authentifizierung.

## Wert

Die `connectEnd`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit nach der Herstellung einer Verbindung darstellt.
- `0`, wenn die Ressource unmittelbar aus einem Cache abgerufen wurde.
- `0`, wenn es sich bei der Ressource um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der TCP-Handshake-Zeit

Die Eigenschaften `connectEnd` und [`connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) können verwendet werden, um zu messen, wie lange der TCP-Handshake dauert.

```js
const tcp = entry.connectEnd - entry.connectStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge informiert, sobald sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tcp = entry.connectEnd - entry.connectStart;
  if (tcp > 0) {
    console.log(`${entry.name}: TCP handshake duration: ${tcp}ms`);
  }
});
```

### Timing-Informationen bei Cross-Origin-Anfragen

Wenn der Wert der `connectEnd`-Eigenschaft `0` ist, könnte es sich bei der Ressource um eine Cross-Origin-Anfrage handeln. Um Timing-Informationen bei Cross-Origin-Anfragen sichtbar zu machen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` den Zugriff auf Timing-Ressourcen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
