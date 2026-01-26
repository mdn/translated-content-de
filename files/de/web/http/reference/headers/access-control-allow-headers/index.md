---
title: Access-Control-Allow-Headers header
short-title: Access-Control-Allow-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Access-Control-Allow-Headers`** {{Glossary("response_header", "Antwort-Header")}} wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um die HTTP-Header anzugeben, die während der tatsächlichen Anfrage verwendet werden können. Dieser Header ist erforderlich, wenn die Preflight-Anfrage {{HTTPHeader("Access-Control-Request-Headers")}} enthält.

> [!NOTE]
> Die {{Glossary("CORS-safelisted_request_header", "CORS-sicheren Anforderungs-Header")}} sind immer erlaubt und werden normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt, es sei denn, es besteht die Notwendigkeit, die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Sicherheitsbeschränkungen")}} zu umgehen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Der Name eines unterstützten Anforderungs-Headers. Der Header kann eine beliebige Anzahl von Headers auflisten, getrennt durch Kommas.
- `*` (Wildcard)
  - : Jeder Header.
    Der Wert `*` zählt nur als spezieller Platzhalterwert für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldeinformationen wird es als der wörtliche Header-Name `*` ohne spezielle Semantik behandelt.
    Der {{HTTPHeader("Authorization")}}-Header akzeptiert keinen Wildcard und muss immer explizit aufgeführt werden.

## Beispiele

### Implementierung eines benutzerdefinierten Headers

Unten ist ein Beispiel für einen `Access-Control-Allow-Headers`-Header. Er zeigt an, dass ein benutzerdefinierter Header mit dem Namen `X-Custom-Header` von CORS-Anfragen an den Server unterstützt wird, zusätzlich zu den {{Glossary("CORS-safelisted_request_header", "CORS-sicheren Anforderungs-Header")}}.

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Unterstützung mehrerer Header

Dieses Beispiel zeigt `Access-Control-Allow-Headers`, wenn es Unterstützung für mehrere Header angibt.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Umgehen zusätzlicher Einschränkungen bei CORS-sicheren Headern

Obwohl {{Glossary("CORS-safelisted_request_header", "CORS-sichere Anforderungs-Header")}} immer erlaubt sind und normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt werden müssen, wird durch deren Auflistung dennoch die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Einschränkungen")}} umgangen, die gelten.

```http
Access-Control-Allow-Headers: Accept
```

### Verarbeitung von Preflight-Anfragen

Schauen wir uns ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} an, die `Access-Control-Allow-Headers` beinhaltet.

#### Anfrage

Zuerst ist die Preflight-Anfrage eine {{HTTPMethod("OPTIONS")}}-Anfrage, die eine Kombination der drei Preflight-Header umfasst: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}} und {{HTTPHeader("Origin")}}.

Die nachstehende Preflight-Anfrage teilt dem Server mit, dass wir eine CORS-`GET`-Anfrage mit den in {{HTTPHeader("Access-Control-Request-Headers")}} aufgeführten Headern ({{HTTPHeader("Content-Type")}} und `X-Requested-With`) senden möchten.

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://www.example.com
```

#### Antwort

Wenn die durch die Preflight-Anfrage angegebene CORS-Anfrage autorisiert ist, wird der Server auf die Preflight-Anfrage mit einer Nachricht antworten, die den erlaubten Ursprung, die Methoden und die Header anzeigt. Unten sehen wir, dass `Access-Control-Allow-Headers` die angeforderten Header enthält.

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://www.example.com
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: Content-Type, x-requested-with
Access-Control-Max-Age: 86400
```

Wenn die angeforderte Methode nicht unterstützt wird, antwortet der Server mit einem Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
