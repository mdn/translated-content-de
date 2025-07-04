---
title: Service-Worker-Navigation-Preload header
short-title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Reference/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Service-Worker-Navigation-Preload`**-{{Glossary("request_header", "Anforderungsheader")}} gibt an, dass die Anfrage das Ergebnis eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgangs ist, der während der Navigation-Preload eines Service Workers durchgeführt wurde. Er ermöglicht es einem Server, mit einer anderen Ressource zu antworten als bei einem normalen `fetch()`.

Wenn das Setzen dieses Headers zu einer unterschiedlichen Antwort führen kann, muss der Server einen {{HTTPHeader("Vary", "Vary: Service-Worker-Navigation-Preload")}}-Header in die Antworten aufnehmen, um sicherzustellen, dass unterschiedliche Antworten zwischengespeichert werden.

Weitere Informationen finden Sie unter [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) (und [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
    Standardmäßig ist dieser Wert `true`.
    Er kann im Service Worker auf jeden anderen Zeichenfolgenwert gesetzt werden, indem [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet wird.

## Beispiele

### Service Worker Navigation Preloading Header

Der folgende Anforderungsheader wird standardmäßig in Navigation-Preload-Anfragen gesendet:

```http
Service-Worker-Navigation-Preload: true
```

Der Service Worker kann einen anderen Header-Wert setzen, indem er [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet. Zum Beispiel könnte der Wert auf die Zeichenfolge `json_fragment1` gesetzt werden, um zu verlangen, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
