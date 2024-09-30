---
title: Sec-Fetch-Mode
slug: Web/HTTP/Headers/Sec-Fetch-Mode
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Sec-Fetch-Mode`** [Fetch-Metadaten-Anforderungsheader](/de/docs/Glossary/Fetch_metadata_request_header) gibt den [Modus](/de/docs/Web/API/Request/mode) der Anfrage an.

Grob gesagt, ermöglicht dies einem Server zwischen Anfragen zu unterscheiden, die von einem Benutzer stammen, der zwischen HTML-Seiten navigiert, und Anfragen zum Laden von Bildern und anderen Ressourcen. Beispielsweise würde dieser Header `navigate` für Anfragen zur obersten Navigationsebene enthalten, während `no-cors` für das Laden eines Bildes verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Fetch-Metadaten-Anforderungsheader](/de/docs/Glossary/Fetch_Metadata_Request_Header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-Angelsitelistungs-Anforderungsheader](/de/docs/Glossary/CORS-safelisted_request_header)
      </th>
      <td>nein</td>
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
  - : Die Anfrage wird vom gleichen Ursprung gemacht wie die Ressource, die angefordert wird.
- `websocket`
  - : Die Anfrage wird gestellt, um eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung herzustellen.

## Beispiele

Wenn ein Benutzer auf einen Seitenlink zu einer anderen Seite desselben Ursprungs klickt, enthält die resultierende Anfrage die folgenden Header (beachten Sie, dass der Modus `navigate` ist):

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

Eine Cross-Site-Anfrage, die durch ein {{HTMLElement("img")}}-Element generiert wird, würde zu einer Anfrage mit den folgenden HTTP-Anforderungsheadern führen (beachten Sie, dass der Modus `no-cors` ist):

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

- Verwandte Header

  - {{HTTPHeader("Sec-Fetch-Dest")}}
  - {{HTTPHeader("Sec-Fetch-Site")}}
  - {{HTTPHeader("Sec-Fetch-User")}}

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
