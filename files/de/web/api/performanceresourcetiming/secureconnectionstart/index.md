---
title: "PerformanceResourceTiming: Eigenschaft secureConnectionStart"
short-title: secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`secureConnectionStart`** gibt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} zurück, der unmittelbar bevor der Browser den Handshake-Prozess zur Sicherung der aktuellen Verbindung startet, liegt. Wenn keine sichere Verbindung verwendet wird, gibt die Eigenschaft null zurück.

## Wert

Die Eigenschaft `secureConnectionStart` kann folgende Werte haben:

- Einen {{domxref("DOMHighResTimeStamp")}}, der die Zeit unmittelbar bevor der Handshake-Prozess zur Sicherung der aktuellen Verbindung startet, angibt, wenn die Ressource über eine sichere Verbindung abgerufen wird.
- `0`, wenn keine sichere Verbindung verwendet wird.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Messen der TLS-Aushandlungszeit

Die Eigenschaften `secureConnectionStart` und {{domxref("PerformanceResourceTiming.requestStart", "requestStart")}} können verwendet werden, um zu messen, wie lange die TLS-Aushandlung dauert.

```js
const tls = entry.requestStart - entry.secureConnectionStart;
```

Beispiel unter Verwendung eines {{domxref("PerformanceObserver")}}, der über neue `resource`-Leistungseinträge benachrichtigt, sobald diese in der Leistungschronik des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const tls = entry.requestStart - entry.secureConnectionStart;
    if (tls > 0) {
      console.log(`${entry.name}: TLS Verhandlungsdauer: ${tls}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel unter Verwendung von {{domxref("Performance.getEntriesByType()")}}, die nur `resource`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungschronik des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tls = entry.requestStart - entry.secureConnectionStart;
  if (tls > 0) {
    console.log(`${entry.name}: TLS Verhandlungsdauer: ${tls}ms`);
  }
});
```

### Cross-Origin-Timing-Informationen

Wenn der Wert der `secureConnectionStart`-Eigenschaft `0` ist, verwendet die Ressource entweder keine sichere Verbindung oder es handelt sich um eine Cross-Origin-Anfrage. Um Cross-Origin-Timing-Informationen sehen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel muss die Cross-Origin-Ressource, um `https://developer.mozilla.org` zu erlauben, Leistungstiming-Ressourcen zu sehen, senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
