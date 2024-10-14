---
title: "PerformanceResourceTiming: nextHopProtocol-Eigenschaft"
short-title: nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`nextHopProtocol`** schreibgeschützte Eigenschaft ist ein String, der das Netzwerkprotokoll repräsentiert, das zum Abrufen der Ressource verwendet wird, wie durch die [ALPN-Protokoll-ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids) identifiziert.

Wenn ein Proxy verwendet wird und eine Tunnelverbindung hergestellt wurde, gibt diese Eigenschaft die ALPN-Protokoll-ID des getunnelten Protokolls zurück. Andernfalls gibt diese Eigenschaft die ALPN-Protokoll-ID des ersten Hops zum Proxy zurück.

## Wert

Die `nextHopProtocol`-Eigenschaft kann die folgenden Werte haben:

- Ein String, der das Netzwerkprotokoll repräsentiert, das zum Abrufen der Ressource verwendet wird, wie durch die [ALPN-Protokoll-ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids) identifiziert. Typische Werte sind:
  - `"http/0.9"`
  - `"http/1.0"`
  - `"http/1.1"`
  - `"h2"`
  - `"h2c"`
  - `"h3"`
- Ein leerer String, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Protokollierung von Ressourcen, die weder HTTP/2 noch HTTP/3 verwenden

Die `nextHopProtocol`-Eigenschaft kann verwendet werden, um Ressourcen zu sehen, die nicht die HTTP/2- oder HTTP/3-Protokolle verwenden.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, wenn sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const protocol = entry.nextHopProtocol;
    if (protocol && !(protocol === "h2" || protocol === "h3")) {
      console.log(`${entry.name} uses ${protocol}.`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const protocol = entry.nextHopProtocol;
  if (protocol && !(protocol === "h2" || protocol === "h3")) {
    console.log(`${entry.name} uses ${protocol}.`);
  }
});
```

### Informationen zum Cross-Origin-Netzwerkprotokoll

Wenn der Wert der `nextHopProtocol`-Eigenschaft ein leerer String ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Informationen zum Cross-Origin-Netzwerkprotokoll offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Netzwerkprotokollinformationen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- {{Glossary("HTTP_2", "HTTP/2")}}
- {{Glossary("HTTP_3", "HTTP/3")}}
