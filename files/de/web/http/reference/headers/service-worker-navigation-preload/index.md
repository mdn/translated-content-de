---
title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Reference/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Service-Worker-Navigation-Preload`** {{Glossary("request_header", "Request-Header")}} zeigt an, dass die Anfrage das Ergebnis einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation ist, die während des Preloadings einer Service-Worker-Navigation ausgeführt wurde.
Es ermöglicht einem Server, mit einer anderen Ressource als bei einem normalen `fetch()` zu antworten.

Wenn das Setzen dieses Headers zu einer anderen Antwort führen kann, muss der Server einen {{HTTPHeader("Vary", "Vary: Service-Worker-Navigation-Preload")}}-Header in Antworten einschließen, um sicherzustellen, dass unterschiedliche Antworten zwischengespeichert werden.

Weitere Informationen finden Sie unter [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) (und [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Service-Worker-Navigation-Preload: <value>
```

## Direktiven

- `<value>`
  - : Ein beliebiger Wert, der angibt, welche Daten in die Antwort auf die Preload-Anfrage gesendet werden sollen.
    Dieser Wert ist standardmäßig auf `true` gesetzt.
    Er kann im Service Worker mit jeder anderen Zeichenkette gesetzt werden, indem [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet wird.

## Beispiele

### Navigations-Preload-Header des Service Workers

Der folgende Request-Header wird standardmäßig in Preload-Anfragen der Navigation gesendet:

```http
Service-Worker-Navigation-Preload: true
```

Der Service Worker kann einen anderen Headerwert setzen, indem [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet wird. Um beispielsweise zu verlangen, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird, könnte der Wert mit der Zeichenfolge `json_fragment1` gesetzt werden.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
