---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Headers`** {{Glossary("response_header", "Antwort-Header")}} wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um die HTTP-Header anzugeben, die während der eigentlichen Anfrage verwendet werden können. Dieser Header ist erforderlich, wenn die Preflight-Anfrage {{HTTPHeader("Access-Control-Request-Headers")}} enthält.

> [!NOTE]
> Die {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} sind immer erlaubt und werden normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt, es sei denn, es besteht die Notwendigkeit, die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Safelist-Beschränkungen")}} zu umgehen.

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
  - : Der Name eines unterstützten Anfrage-Headers. Der Header kann eine beliebige Anzahl von Headers enthalten, getrennt durch Kommas.
- `*` (Wildcard)
  - : Jeder Header.
    Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldedaten (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldedaten wird es als der wörtliche Header-Name `*` ohne spezielle Semantik behandelt.
    Der {{HTTPHeader("Authorization")}}-Header kann nicht als Wildcard verwendet werden und muss immer explizit aufgelistet werden.

## Beispiele

### Implementierung eines benutzerdefinierten Headers

Nachfolgend finden Sie ein Beispiel für einen `Access-Control-Allow-Headers`-Header. Er gibt an, dass ein benutzerdefinierter Header namens `X-Custom-Header` von CORS-Anfragen an den Server zusätzlich zu den {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} unterstützt wird.

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Unterstützung mehrerer Header

Dieses Beispiel zeigt `Access-Control-Allow-Headers`, wenn es Unterstützung für mehrere Headers spezifiziert.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Umgehung zusätzlicher Einschränkungen bei CORS-safelisted Headers

Obwohl {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} immer erlaubt sind und normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt werden müssen, wird deren Auflistung dennoch die {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Einschränkungen")}} umgehen, die gelten.

```http
Access-Control-Allow-Headers: Accept
```

### Umgang mit Preflight-Anfragen

Lassen Sie uns ein Beispiel für eine {{Glossary("preflight_request", "Preflight-Anfrage")}} mit `Access-Control-Allow-Headers` betrachten.

#### Anfrage

Zuerst ist die Preflight-Anfrage eine {{HTTPMethod("OPTIONS")}}-Anfrage, die eine Kombination der drei Preflight-Anfrage-Header enthält: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}} und {{HTTPHeader("Origin")}}.

Die folgende Preflight-Anfrage teilt dem Server mit, dass wir eine CORS-`GET`-Anfrage mit den in {{HTTPHeader("Access-Control-Request-Headers")}} aufgelisteten Headers ({{HTTPHeader("Content-Type")}} und `X-Requested-With`) senden möchten.

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://foo.bar.org
```

#### Antwort

Wenn die durch die Preflight-Anfrage angegebene CORS-Anfrage genehmigt ist, antwortet der Server auf die Preflight-Anfrage mit einer Nachricht, die Ursprung, Methoden und erlaubte Headers anzeigt. Unten sehen wir, dass `Access-Control-Allow-Headers` die angeforderten Headers enthält.

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
