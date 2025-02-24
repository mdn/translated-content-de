---
title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Service-Worker-Navigation-Preload`** {{Glossary("request_header", "Request-Header")}} zeigt an, dass die Anfrage das Ergebnis eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgangs ist, der während des Service-Worker-Navigations-Preloadings durchgeführt wurde. Es ermöglicht einem Server, mit einer anderen Ressource als bei einem normalen `fetch()` zu antworten.

Wenn eine andere Antwort durch das Setzen dieses Headers resultieren könnte, muss der Server einen {{HTTPHeader("Vary", "Vary: Service-Worker-Navigation-Preload")}} Header in Antworten einschließen, um sicherzustellen, dass unterschiedliche Antworten zwischengespeichert werden.

Für weitere Informationen siehe [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) (und [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)).

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
  - : Ein beliebiger Wert, der angibt, welche Daten in der Antwort auf die Preload-Anfrage gesendet werden sollen. Standardmäßig ist dies `true`. Es kann im Service-Worker auf einen anderen Zeichenfolgenwert gesetzt werden, indem [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet wird.

## Beispiele

### Service-Worker-Navigationspreload-Header

Der folgende Request-Header wird standardmäßig in Navigationspreload-Anfragen gesendet:

```http
Service-Worker-Navigation-Preload: true
```

Der Service-Worker kann einen anderen Header-Wert setzen, indem er [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet. Zum Beispiel, um zu verlangen, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird, könnte der Wert mit der Zeichenfolge `json_fragment1` gesetzt werden.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
