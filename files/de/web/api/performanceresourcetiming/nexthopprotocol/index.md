---
title: "PerformanceResourceTiming: nextHopProtocol-Eigenschaft"
short-title: nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`nextHopProtocol`** Nur-Lese-Eigenschaft ist ein String, der das Netzwerkprotokoll repräsentiert, das zum Abrufen der Ressource verwendet wurde, identifiziert durch die [ALPN-Protokoll-ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids).

Wenn ein Proxy verwendet wird, gibt diese Eigenschaft, falls eine Tunnelverbindung hergestellt ist, die ALPN-Protokoll-ID des getunnelten Protokolls zurück. Andernfalls gibt diese Eigenschaft die ALPN-Protokoll-ID des ersten Hops zum Proxy zurück.

## Wert

Die `nextHopProtocol`-Eigenschaft kann die folgenden Werte annehmen:

- Ein String, der das Netzwerkprotokoll repräsentiert, das zum Abrufen der Ressource verwendet wurde, identifiziert durch die [ALPN-Protokoll-ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids). Typische Werte sind:
  - `"http/0.9"`
  - `"http/1.0"`
  - `"http/1.1"`
  - `"h2"`
  - `"h2c"`
  - `"h3"`
- Ein leerer String, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

## Beispiele

### Protokollierung von Ressourcen, die weder HTTP/2 noch HTTP/3 verwenden

Die `nextHopProtocol`-Eigenschaft kann verwendet werden, um Ressourcen zu ermitteln, die die Protokolle HTTP/2 oder HTTP/3 nicht verwenden.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Leistungseinträge informiert, die in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

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

Wenn der Wert der `nextHopProtocol`-Eigenschaft ein leerer String ist, könnte es sich bei der Ressource um eine Cross-Origin-Anfrage handeln. Um Informationen über das Cross-Origin-Netzwerkprotokoll offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Informationen über das Netzwerkprotokoll zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- {{Glossary("HTTP 2", "HTTP/2")}}
- {{Glossary("HTTP 3", "HTTP/3")}}
