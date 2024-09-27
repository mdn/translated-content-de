---
title: "PerformanceResourceTiming: nextHopProtocol-Eigenschaft"
short-title: nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`nextHopProtocol`** ist ein String, der das Netzwerkprotokoll darstellt, das zum Abrufen der Ressource verwendet wurde, wie es durch die [ALPN Protocol ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids) identifiziert wird.

Wenn ein Proxy verwendet wird und eine Tunnelverbindung hergestellt wurde, gibt diese Eigenschaft die ALPN Protocol ID des getunnelten Protokolls zurück. Andernfalls gibt diese Eigenschaft die ALPN Protocol ID des ersten Hops zum Proxy zurück.

## Wert

Die `nextHopProtocol`-Eigenschaft kann die folgenden Werte haben:

- Ein String, der das Netzwerkprotokoll darstellt, das zum Abrufen der Ressource verwendet wurde, wie es durch die [ALPN Protocol ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids) identifiziert wird. Typische Werte sind:
  - `"http/0.9"`
  - `"http/1.0"`
  - `"http/1.1"`
  - `"h2"`
  - `"h2c"`
  - `"h3"`
- Ein leerer String, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Protokollierung von Ressourcen, die weder HTTP/2 noch HTTP/3 verwenden

Die `nextHopProtocol`-Eigenschaft kann verwendet werden, um Ressourcen zu sehen, die die Protokolle HTTP/2 oder HTTP/3 nicht verwenden.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers existieren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die sich zum Zeitpunkt des Methodenaufrufs in der Performance-Zeitleiste des Browsers befinden:

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

Wenn der Wert der `nextHopProtocol`-Eigenschaft ein leerer String ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Informationen über das Cross-Origin-Netzwerkprotokoll offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` den Zugriff auf Netzwerkinformationen zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- [HTTP/2](/de/docs/Glossary/HTTP_2)
- [HTTP/3](/de/docs/Glossary/HTTP_3)
