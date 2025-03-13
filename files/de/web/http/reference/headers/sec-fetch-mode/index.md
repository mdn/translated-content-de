---
title: Sec-Fetch-Mode
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Mode
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Sec-Fetch-Mode`** {{Glossary("fetch_metadata_request_header", "fetch metadata request header")}} gibt den [Modus](/de/docs/Web/API/Request/mode) der Anfrage an.

Im Großen und Ganzen ermöglicht dies einem Server, zwischen Anfragen zu unterscheiden, die von einem Nutzer stammen, der zwischen HTML-Seiten navigiert, und Anfragen zum Laden von Bildern und anderen Ressourcen. Zum Beispiel würde dieser Header `navigate` für Navigationsanfragen auf oberster Ebene enthalten, während `no-cors` für das Laden eines Bildes verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-erlaubte Anforderungsheader")}}
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
  - : Die Anfrage ist eine [CORS-Protokoll](/de/docs/Web/HTTP/Guides/CORS) Anfrage.
- `navigate`
  - : Die Anfrage wird durch die Navigation zwischen HTML-Dokumenten initiiert.
- `no-cors`
  - : Die Anfrage ist eine no-cors-Anfrage (siehe [`Request.mode`](/de/docs/Web/API/Request/mode#value)).
- `same-origin`
  - : Die Anfrage wird vom gleichen Ursprung wie die angeforderte Ressource gestellt.
- `websocket`
  - : Die Anfrage dient der Herstellung einer [WebSocket](/de/docs/Web/API/WebSockets_API) Verbindung.

## Beispiele

### Verwendung von Sec-Fetch-Mode

Wenn ein Nutzer auf einen Seitenlink zu einer anderen Seite im gleichen Ursprung klickt, hätte die resultierende Anfrage die folgenden Header (beachten Sie, dass der Modus `navigate` ist):

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

Eine cross-site Anfrage, die durch ein {{HTMLElement("img")}} Element generiert wird, würde zu einer Anfrage mit den folgenden HTTP-Anforderungs-Headern führen (beachten Sie, dass der Modus `no-cors` ist):

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

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} fetch metadata request headers
- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
