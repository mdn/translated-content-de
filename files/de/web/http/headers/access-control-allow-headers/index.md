---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Headers`** {{Glossary("response_header", "Antwort-Header")}} wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um die HTTP-Header anzugeben, die während der tatsächlichen Anfrage verwendet werden können. Dieser Header ist erforderlich, wenn die Preflight-Anfrage {{HTTPHeader("Access-Control-Request-Headers")}} enthält.

> [!NOTE]
> Die {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}} sind immer erlaubt und werden normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt, es sei denn, es besteht die Notwendigkeit, die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Safelist-Einschränkungen")}} zu umgehen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Der Name eines unterstützten Anfrage-Headers. Der Header kann eine beliebige Anzahl von Headern auflisten, getrennt durch Kommas.
- `*` (Wildcard)
  - : Jeder Header.
    Der Wert `*` wird nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldeinformationen gezählt (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldeinformationen wird es als der wörtliche Header-Name `*` ohne spezielle Semantik behandelt.
    Der {{HTTPHeader("Authorization")}} Header kann nicht als Wildcard verwendet werden und muss immer explizit aufgeführt werden.

## Beispiele

### Implementierung eines benutzerdefinierten Headers

Unten sehen Sie ein Beispiel für einen `Access-Control-Allow-Headers` Header. Er zeigt an, dass ein benutzerdefinierter Header namens `X-Custom-Header` zusätzlich zu den {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Headern")}} von CORS-Anfragen an den Server unterstützt wird.

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Unterstützung mehrerer Header

Dieses Beispiel zeigt `Access-Control-Allow-Headers`, wenn die Unterstützung für mehrere Header angegeben wird.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Umgehung zusätzlicher Einschränkungen bei CORS-safelisted Headern

Obwohl {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}} immer erlaubt sind und normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt werden müssen, wird das Auflisten dennoch die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Einschränkungen")}} umgehen, die gelten.

```http
Access-Control-Allow-Headers: Accept
```

### Umgang mit Preflight-Anfragen

Sehen wir uns ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} an, die `Access-Control-Allow-Headers` beinhaltet.

#### Anfrage

Zuerst ist die Preflight-Anfrage eine {{HTTPMethod("OPTIONS")}}-Anfrage, die eine Kombination der drei Preflight-Anfrage-Header beinhaltet: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, und {{HTTPHeader("Origin")}}.

Die Preflight-Anfrage unten teilt dem Server mit, dass wir eine CORS `GET`-Anfrage mit den in {{HTTPHeader("Access-Control-Request-Headers")}} aufgeführten Headern ({{HTTPHeader("Content-Type")}} und `X-Requested-With`) senden möchten.

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://foo.bar.org
```

#### Antwort

Wenn die durch die Preflight-Anfrage angegebene CORS-Anfrage autorisiert ist, antwortet der Server auf die Preflight-Anfrage mit einer Nachricht, die den erlaubten Ursprung, die Methoden und die Header angibt. Unten sehen wir, dass `Access-Control-Allow-Headers` die angeforderten Header enthält.

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
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
