---
title: Sec-Fetch-Mode header
short-title: Sec-Fetch-Mode
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Mode
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Sec-Fetch-Mode`** {{Glossary("fetch_metadata_request_header", "fetch metadata request header")}} gibt den [Modus](/de/docs/Web/API/Request/mode) der Anfrage an.

Im Allgemeinen ermöglicht dies einem Server, zwischen Anfragen zu unterscheiden, die von einem Benutzer stammen, der zwischen HTML-Seiten navigiert, und Anfragen zum Laden von Bildern und anderen Ressourcen. Zum Beispiel würde dieser Header `navigate` für Anfragen bei der Top-Level-Navigation enthalten, während `no-cors` zum Laden eines Bildes verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}}
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
  - : Die Anfrage ist eine no-cors Anfrage (siehe [`Request.mode`](/de/docs/Web/API/Request/mode#value)).
- `same-origin`
  - : Die Anfrage erfolgt von demselben Ursprung wie die Ressource, die angefordert wird.
- `websocket`
  - : Die Anfrage wird gemacht, um eine [WebSocket](/de/docs/Web/API/WebSockets_API) Verbindung herzustellen.

## Beispiele

### Verwendung von Sec-Fetch-Mode

Wenn ein Benutzer auf einen Link zu einer anderen Seite desselben Ursprungs klickt, hätte die resultierende Anfrage die folgenden Header (beachten Sie, dass der Modus `navigate` ist):

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

Eine Cross-Site-Anfrage, die durch ein {{HTMLElement("img")}}-Element generiert wird, würde zu einer Anfrage mit den folgenden HTTP-Anfrage-Headern führen (beachten Sie, dass der Modus `no-cors` ist):

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
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Spielwiese](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
