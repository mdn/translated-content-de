---
title: Sec-Fetch-Mode header
short-title: Sec-Fetch-Mode
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Mode
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

Der HTTP-[Fetch-Metadata-Request-Header](/de/docs/Web/HTTP/Guides/Fetch_metadata) **`Sec-Fetch-Mode`** gibt den [Modus](/de/docs/Web/API/Request/mode) der Anfrage an.

Damit kann ein Server grundsätzlich zwischen Anfragen unterscheiden, die durch die Navigation eines Benutzers zwischen HTML-Seiten entstehen, und Anfragen zum Laden von Bildern oder anderen Ressourcen. Bei einer Navigationsanfrage auf oberster Ebene enthält dieser Header beispielsweise `navigate`, beim Laden eines Bildes dagegen `no-cors`.

Der Header wird nur bei Anfragen an [potenziell vertrauenswürdige URLs](/de/docs/Web/Security/Defenses/Secure_Contexts#potentially_trustworthy_urls) übermittelt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadata-Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}
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
> Diese Direktiven entsprechen den Werten von [`Request.mode`](/de/docs/Web/API/Request/mode#value).

- `cors`
  - : Die Anfrage ist eine Anfrage nach dem [CORS-Protokoll](/de/docs/Web/HTTP/Guides/CORS).
- `navigate`
  - : Die Anfrage wird durch die Navigation zwischen HTML-Dokumenten ausgelöst.
- `no-cors`
  - : Die Anfrage ist eine no-cors-Anfrage (siehe [`Request.mode`](/de/docs/Web/API/Request/mode#value)).
- `same-origin`
  - : Die Anfrage stammt vom selben Ursprung wie die angeforderte Ressource.
- `websocket`
  - : Die Anfrage dient dem Aufbau einer [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung.

## Beispiele

### Sec-Fetch-Mode verwenden

Wenn ein Benutzer auf einen Link zu einer anderen Seite desselben Ursprungs klickt, enthält die daraus resultierende Anfrage die folgenden Header (beachten Sie, dass der Modus `navigate` ist):

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

Eine ursprungsübergreifende Anfrage, die durch ein {{HTMLElement("img")}}-Element erzeugt wird, enthält die folgenden HTTP-Request-Header (beachten Sie, dass der Modus `no-cors` ist):

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

- Die Fetch-Metadata-Request-Header {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Site")}} und {{HTTPHeader("Sec-Fetch-User")}}
- [Schützen Sie Ihre Ressourcen mit Fetch Metadata vor Webangriffen](https://web.dev/articles/fetch-metadata) (web.dev)
- [Testumgebung für Fetch-Metadata-Request-Header](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
