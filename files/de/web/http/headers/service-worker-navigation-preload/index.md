---
title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP-**`Service-Worker-Navigation-Preload`**-{{Glossary("request_header", "Request-Header")}} zeigt an, dass die Anfrage das Ergebnis eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgangs ist, der während des Preloadings der Service Worker Navigation durchgeführt wurde. Er ermöglicht einem Server, mit einer anderen Ressource zu antworten als bei einem normalen `fetch()`.

Wenn das Setzen dieses Headers zu einer anderen Antwort führen könnte, muss der Server einen {{HTTPHeader("Vary", "Vary: Service-Worker-Navigation-Preload")}} Header in die Antworten einfügen, um sicherzustellen, dass unterschiedliche Antworten zwischengespeichert werden.

Für weitere Informationen siehe [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) (und [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein beliebiger Wert, der angibt, welche Daten in der Antwort auf die Preload-Anfrage gesendet werden sollen. Dieser Wert ist standardmäßig `true`. Er kann im Service Worker auf jeden anderen Zeichenfolgenwert gesetzt werden, unter Verwendung von [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue).

## Beispiele

### Service-Worker-Navigation-Preload-Header

Der folgende Request-Header wird standardmäßig in Navigation-Preload-Anfragen gesendet:

```http
Service-Worker-Navigation-Preload: true
```

Der Service Worker kann einen anderen Header-Wert mittels [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) setzen. Um beispielsweise anzufordern, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird, könnte der Wert mit der Zeichenkette `json_fragment1` gesetzt werden.

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
