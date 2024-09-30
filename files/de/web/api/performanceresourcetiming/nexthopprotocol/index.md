---
title: "PerformanceResourceTiming: nextHopProtocol-Eigenschaft"
short-title: nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`nextHopProtocol`** ist ein String, der das Netzwerkprotokoll repräsentiert, das zur Ressourcenerfassung verwendet wurde, identifiziert durch die [ALPN Protocol ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids).

Wenn ein Proxy verwendet wird und eine Tunnelverbindung hergestellt ist, gibt diese Eigenschaft die ALPN Protocol ID des getunnelten Protokolls zurück. Andernfalls wird die ALPN Protocol ID des ersten Hops zum Proxy zurückgegeben.

## Wert

Die `nextHopProtocol`-Eigenschaft kann die folgenden Werte haben:

- Ein String, der das Netzwerkprotokoll repräsentiert, das zur Ressourcenerfassung verwendet wurde, identifiziert durch die [ALPN Protocol ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids). Typische Werte sind:
  - `"http/0.9"`
  - `"http/1.0"`
  - `"http/1.1"`
  - `"h2"`
  - `"h2c"`
  - `"h3"`
- Ein leerer String, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Protokollierung von Ressourcen, die weder HTTP/2 noch HTTP/3 verwenden

Die `nextHopProtocol`-Eigenschaft kann verwendet werden, um Ressourcen zu sehen, die nicht die Protokolle HTTP/2 oder HTTP/3 verwenden.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

### Cross-Origin-Netzwerkprotokollinformationen

Wenn der Wert der `nextHopProtocol`-Eigenschaft ein leerer String ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Cross-Origin-Netzwerkprotokollinformationen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` zu erlauben, Netzwerkprotokollinformationen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- [HTTP/2](/de/docs/Glossary/HTTP_2)
- [HTTP/3](/de/docs/Glossary/HTTP_3)
