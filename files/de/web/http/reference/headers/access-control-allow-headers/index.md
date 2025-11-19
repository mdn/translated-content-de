---
title: Access-Control-Allow-Headers header
short-title: Access-Control-Allow-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Der HTTP **`Access-Control-Allow-Headers`** {{Glossary("response_header", "Antwort-Header")}} wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um die HTTP-Header anzugeben, die während der tatsächlichen Anfrage verwendet werden können.
Dieser Header ist erforderlich, wenn die Preflight-Anfrage {{HTTPHeader("Access-Control-Request-Headers")}} enthält.

> [!NOTE]
> Die {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}} sind immer erlaubt und werden normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt, es sei denn, es besteht die Notwendigkeit, die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Safelist-Einschränkungen")}} zu umgehen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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

## Direktiven

- `<header-name>`
  - : Der Name eines unterstützten Anfrage-Headers. Der Header kann eine beliebige Anzahl von Headern auflisten, die durch Kommata getrennt sind.
- `*` (Wildcard)
  - : Jeder Header.
    Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldedaten (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldedaten wird er als der buchstäbliche Headername `*` ohne besondere Semantik behandelt.
    Der {{HTTPHeader("Authorization")}}-Header akzeptiert keine Wildcard und muss immer explizit aufgelistet werden.

## Beispiele

### Implementierung eines benutzerdefinierten Headers

Im Folgenden sehen Sie ein Beispiel für einen `Access-Control-Allow-Headers`-Header.
Er gibt an, dass ein benutzerdefinierter Header namens `X-Custom-Header` von CORS-Anfragen an den Server unterstützt wird, zusätzlich zu den {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Headern")}}.

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Unterstützung mehrerer Header

Dieses Beispiel zeigt `Access-Control-Allow-Headers`, wenn es die Unterstützung für mehrere Header spezifiziert.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Umgehung zusätzlicher Einschränkungen für CORS-safelisted Header

Obwohl {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}} immer erlaubt sind und normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt werden müssen, wird ihre Auflistung dennoch die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Einschränkungen")}} umgehen, die gelten.

```http
Access-Control-Allow-Headers: Accept
```

### Umgang mit Preflight-Anfragen

Werfen wir einen Blick auf ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}}, die `Access-Control-Allow-Headers` beinhaltet.

#### Anfrage

Zuerst ist die Preflight-Anfrage eine {{HTTPMethod("OPTIONS")}}-Anfrage, die eine Kombination der drei Preflight-Anfrage-Header enthält: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, und {{HTTPHeader("Origin")}}.

Die Preflight-Anfrage unten teilt dem Server mit, dass wir eine CORS-`GET`-Anfrage mit den Headers senden möchten, die in {{HTTPHeader("Access-Control-Request-Headers")}} aufgelistet sind ({{HTTPHeader("Content-Type")}} und `X-Requested-With`).

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://www.example.com
```

#### Antwort

Wenn die durch die Preflight-Anfrage angezeigte CORS-Anfrage autorisiert ist, wird der Server auf die Preflight-Anfrage mit einer Nachricht antworten, die den erlaubten Ursprung, die Methoden und die Header anzeigt. Unten sehen wir, dass `Access-Control-Allow-Headers` die angeforderten Header enthält.

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://www.example.com
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
