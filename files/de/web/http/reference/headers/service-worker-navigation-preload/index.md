---
title: Service-Worker-Navigation-Preload header
short-title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Reference/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: f0179562ad8e2a4dd1f0916c529792198d7e06b2
---

Der HTTP-**`Service-Worker-Navigation-Preload`**-{{Glossary("request_header", "Request-Header")}} zeigt an, dass die Anfrage das Ergebnis einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation während des Preloadings der Navigation im Service Worker war. Es ermöglicht einem Server, mit einer anderen Ressource zu antworten als bei einem normalen `fetch()`.

Wenn durch das Setzen dieses Headers eine andere Antwort resultieren kann, muss der Server einen {{HTTPHeader("Vary", "Vary: Service-Worker-Navigation-Preload")}}-Header in den Antworten einschließen, um sicherzustellen, dass unterschiedliche Antworten zwischengespeichert werden.

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
  - : Ein beliebiger Wert, der angibt, welche Daten in der Antwort auf die Preload-Anfrage gesendet werden sollen. Standardmäßig ist dieser `true`. Er kann im Service Worker auf jeden anderen Zeichenfolgenwert gesetzt werden, mithilfe von [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue).

## Beispiele

### Service Worker Navigation Preloading Headers

Der folgende Request-Header wird standardmäßig in Preload-Navigationsanfragen gesendet:

```http
Service-Worker-Navigation-Preload: true
```

Der Service Worker kann einen anderen Header-Wert mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festlegen. Beispielweise könnte, um zu beantragen, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird, der Wert mit der Zeichenfolge `json_fragment1` gesetzt werden.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
