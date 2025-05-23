---
title: Access-Control-Allow-Headers header
short-title: Access-Control-Allow-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Headers`** {{Glossary("response_header", "Antwortheader")}} wird als Reaktion auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um die HTTP-Header anzugeben, die während der eigentlichen Anfrage verwendet werden können. Dieser Header ist erforderlich, wenn die Preflight-Anfrage {{HTTPHeader("Access-Control-Request-Headers")}} enthält.

> [!NOTE]
> Die {{Glossary("CORS-safelisted_request_header", "CORS-safelisted-Anforderungsheader")}} sind immer erlaubt und werden normalerweise nicht in `Access-Control-Allow-Headers` aufgelistet, es sei denn, es besteht die Notwendigkeit, die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Safelist-Beschränkungen")}} zu umgehen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Headers: <header-name>
Access-Control-Allow-Headers: <header-name>, <header-name>
Access-Control-Allow-Headers: *
```

## Anweisungen

- `<header-name>`
  - : Der Name eines unterstützten Anforderungsheaders. Der Header kann eine beliebige Anzahl von Headern enthalten, die durch Kommas getrennt sind.
- `*` (Wildcard)
  - : Jeder Header.
    Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldeinformationen wird es als der wörtliche Headername `*` ohne spezielle Semantik behandelt.
    Der {{HTTPHeader("Authorization")}}-Header akzeptiert keine Wildcard und muss immer explizit aufgeführt werden.

## Beispiele

### Implementierung eines benutzerdefinierten Headers

Hierunter folgt ein Beispiel für einen `Access-Control-Allow-Headers`-Header. Es zeigt an, dass ein benutzerdefinierter Header namens `X-Custom-Header` von CORS-Anfragen an den Server unterstützt wird, zusätzlich zu den {{Glossary("CORS-safelisted_request_header", "CORS-safelisted-Anforderungsheadern")}}.

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Unterstützung mehrerer Header

Dieses Beispiel zeigt `Access-Control-Allow-Headers`, wenn es die Unterstützung für mehrere Header spezifiziert.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Umgehung zusätzlicher Beschränkungen für CORS-safelisted-Headers

Obwohl {{Glossary("CORS-safelisted_request_header", "CORS-safelisted-Anforderungsheader")}} immer erlaubt sind und normalerweise nicht in `Access-Control-Allow-Headers` aufgelistet werden müssen, wird ihre Auflistung dennoch die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Beschränkungen")}}, die gelten, umgehen.

```http
Access-Control-Allow-Headers: Accept
```

### Umgang mit Preflight-Anfragen

Lassen Sie uns ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} betrachten, die `Access-Control-Allow-Headers` einbezieht.

#### Anfrage

Zuerst ist die Preflight-Anfrage eine {{HTTPMethod("OPTIONS")}}-Anfrage, die eine Kombination der drei Preflight-Anforderungsheader enthält: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}} und {{HTTPHeader("Origin")}}.

Die folgende Preflight-Anfrage teilt dem Server mit, dass wir eine CORS-`GET`-Anfrage mit den in {{HTTPHeader("Access-Control-Request-Headers")}} aufgelisteten Headers ({{HTTPHeader("Content-Type")}} und `X-Requested-With`) senden möchten.

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://foo.bar.org
```

#### Antwort

Wenn die durch die Preflight-Anfrage angezeigte CORS-Anfrage autorisiert ist, wird der Server auf die Preflight-Anfrage mit einer Nachricht antworten, die den erlaubten Ursprung, die Methoden und die Header angibt. Unten sehen wir, dass `Access-Control-Allow-Headers` die angeforderten Header enthält.

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: Content-Type, x-requested-with
Access-Control-Max-Age: 86400
```

Wenn die angeforderte Methode nicht unterstützt wird, wird der Server mit einem Fehler antworten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
