---
title: Service-Worker-Navigation-Preload header
short-title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Reference/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Service-Worker-Navigation-Preload`** {{Glossary("request_header", "Request-Header")}} zeigt an, dass die Anfrage das Ergebnis eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgangs war, der während des Preloadings der Navigation durch den Service Worker durchgeführt wurde. Dies ermöglicht es einem Server, mit einer anderen Ressource zu antworten als bei einem normalen `fetch()`.

Wenn durch das Setzen dieses Headers eine andere Antwort resultieren kann, muss der Server in den Antworten einen {{HTTPHeader("Vary", "Vary: Service-Worker-Navigation-Preload")}}-Header einschließen, um sicherzustellen, dass unterschiedliche Antworten zwischengespeichert werden.

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
  - : Ein beliebiger Wert, der angibt, welche Daten in der Antwort auf die Preload-Anfrage gesendet werden sollen.
    Dies ist standardmäßig `true`.
    Es kann im Service Worker auf einen anderen String-Wert gesetzt werden, indem [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet wird.

## Beispiele

### Headers für Service Worker-Navigations-Preloading

Der folgende Request-Header wird standardmäßig in Navigations-Preload-Anfragen gesendet:

```http
Service-Worker-Navigation-Preload: true
```

Der Service Worker kann einen anderen Header-Wert festlegen, indem er [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet. Um beispielsweise anzufordern, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird, könnte der Wert mit dem String `json_fragment1` gesetzt werden.

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
