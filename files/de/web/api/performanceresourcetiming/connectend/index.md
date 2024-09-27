---
title: "PerformanceResourceTiming: connectEnd-Eigenschaft"
short-title: connectEnd
slug: Web/API/PerformanceResourceTiming/connectEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`connectEnd`**-Eigenschaft, die nur gelesen werden kann, gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach Abschluss der Verbindung zwischen Browser und Server zur Ressourcenerfassung zurück. Der Zeitstempelwert umfasst das Zeitintervall für die Herstellung der Transportverbindung sowie andere Zeitintervalle wie TLS-Handshake und [SOCKS](https://en.wikipedia.org/wiki/SOCKS)-Authentifizierung.

## Wert

Die `connectEnd`-Eigenschaft kann folgende Werte aufweisen:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit nach Herstellung einer Verbindung darstellt.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn es sich um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

## Beispiele

### Messen der TCP-Handshake-Zeit

Die Eigenschaften `connectEnd` und [`connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) können verwendet werden, um zu messen, wie lange der TCP-Handshake dauert.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource` Performance-Einträge informiert, sobald diese in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource` Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Performance-Zeitleiste des Browsers vorhanden sind:

### Informationen zur Cross-Origin-Timing

Wenn der Wert der `connectEnd`-Eigenschaft `0` ist, könnte es sich um eine Cross-Origin-Anfrage handeln. Um Cross-Origin-Timing-Informationen einsehen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` das Einsehen von Timing-Ressourcen zu erlauben, sollte die Cross-Origin-Ressource folgendes senden:

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
