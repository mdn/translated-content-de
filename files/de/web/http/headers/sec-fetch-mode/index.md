---
title: Sec-Fetch-Mode
slug: Web/HTTP/Headers/Sec-Fetch-Mode
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP **`Sec-Fetch-Mode`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} gibt den [Modus](/de/docs/Web/API/Request/mode) der Anfrage an.

Im Allgemeinen ermöglicht dies einem Server, zwischen Anfragen zu unterscheiden, die von einem Benutzer beim Navigieren zwischen HTML-Seiten stammen, und Anfragen zum Laden von Bildern und anderen Ressourcen. Beispielsweise würde dieser Header `navigate` für Anfragen auf oberster Navigationsebene enthalten, während `no-cors` für das Laden eines Bildes verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-Mode: cors
Sec-Fetch-Mode: navigate
Sec-Fetch-Mode: no-cors
Sec-Fetch-Mode: same-origin
Sec-Fetch-Mode: websocket
```

Server sollten diesen Header ignorieren, wenn er einen anderen Wert enthält.

## Direktiven

> [!NOTE]
> Diese Direktiven entsprechen den Werten in [`Request.mode`](/de/docs/Web/API/Request/mode#value).

- `cors`
  - : Die Anfrage ist eine [CORS-Protokoll](/de/docs/Web/HTTP/CORS) Anfrage.
- `navigate`
  - : Die Anfrage wird durch die Navigation zwischen HTML-Dokumenten initiiert.
- `no-cors`
  - : Die Anfrage ist eine no-cors Anfrage (siehe [`Request.mode`](/de/docs/Web/API/Request/mode#value)).
- `same-origin`
  - : Die Anfrage wird von demselben Ursprung wie die angeforderte Ressource gestellt.
- `websocket`
  - : Die Anfrage wird gestellt, um eine [WebSocket](/de/docs/Web/API/WebSockets_API) Verbindung herzustellen.

## Beispiele

### Verwendung von Sec-Fetch-Mode

Wenn ein Benutzer auf einen Seitenlink zu einer anderen Seite auf demselben Ursprung klickt, würde die resultierende Anfrage die folgenden Header haben (beachten Sie, dass der Modus `navigate` ist):

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

Eine Cross-Site-Anfrage, die von einem {{HTMLElement("img")}}-Element generiert wird, würde zu einer Anfrage mit den folgenden HTTP-Anforderungs-Headern führen (beachten Sie, dass der Modus `no-cors` ist):

```http
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch-Metadaten-Anforderungs-Header
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
