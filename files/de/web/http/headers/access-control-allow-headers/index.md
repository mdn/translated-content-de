---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Headers`** Antwort-Header wird als Antwort auf eine [Preflight-Anfrage](/de/docs/Glossary/preflight_request) verwendet, die den {{HTTPHeader("Access-Control-Request-Headers")}} beinhaltet, um anzuzeigen, welche HTTP-Header während der eigentlichen Anfrage verwendet werden können.

Dieser Header ist erforderlich, wenn die Anfrage einen {{HTTPHeader("Access-Control-Request-Headers")}}-Header enthält.

> **Note:** [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header) sind immer erlaubt und werden normalerweise nicht in `Access-Control-Allow-Headers` aufgelistet (es sei denn, es besteht die Notwendigkeit, die Safelist-[zusätzlichen Einschränkungen](/de/docs/Glossary/CORS-safelisted_request_header#additional_restrictions) zu umgehen).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Headers: [<header-name>[, <header-name>]*]
Access-Control-Allow-Headers: *
```

## Direktiven

- `<header-name>`
  - : Der Name eines unterstützten Anfrage-Headers. Der Header kann eine beliebige Anzahl von Headern auflisten, getrennt durch Kommata.
- `*` (Wildcard)
  - : Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Berechtigungsnachweise (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen). Bei Anfragen mit Berechtigungsnachweisen wird er als der wörtliche Headername `*` ohne spezielle Semantik behandelt. Beachten Sie, dass der {{HTTPHeader("Authorization")}}-Header nicht wildcardfähig ist und immer explizit aufgelistet werden muss.

## Beispiele

### Ein benutzerdefinierter Header

Hier ist ein Beispiel, wie ein `Access-Control-Allow-Headers`-Header aussehen könnte. Er zeigt an, dass ein benutzerdefinierter Header namens `X-Custom-Header` von CORS-Anfragen an den Server unterstützt wird (zusätzlich zu den [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header)).

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Mehrere Header

Dieses Beispiel zeigt `Access-Control-Allow-Headers`, wenn es die Unterstützung für mehrere Header angibt.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Umgehung zusätzlicher Beschränkungen

Obwohl [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header) immer erlaubt sind und in der Regel nicht in `Access-Control-Allow-Headers` aufgelistet werden müssen, wird durch das Auflisten dennoch die [zusätzlichen Einschränkungen](/de/docs/Glossary/CORS-safelisted_request_header#additional_restrictions) umgangen, die gelten.

```http
Access-Control-Allow-Headers: Accept
```

### Beispiel Preflight-Anfrage

Schauen wir uns ein Beispiel für eine [Preflight-Anfrage](/de/docs/Glossary/preflight_request) an, die `Access-Control-Allow-Headers` beinhaltet.

#### Anfrage

Zuerst die Anfrage. Die Preflight-Anfrage ist eine {{HTTPMethod("OPTIONS")}}-Anfrage, die eine Kombination der drei Preflight-Anfrage-Header enthält: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, und {{HTTPHeader("Origin")}}.

Die Preflight-Anfrage unten teilt dem Server mit, dass wir eine CORS-`GET`-Anfrage mit den im {{HTTPHeader("Access-Control-Request-Headers")}}-Header aufgelisteten Headers ({{HTTPHeader("Content-Type")}} und `X-Requested-With`) senden möchten.

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://foo.bar.org
```

#### Antwort

Wenn die durch die Preflight-Anfrage angegebene CORS-Anfrage autorisiert ist, wird der Server auf die Preflight-Anfrage mit einer Nachricht antworten, die den erlaubten Ursprung, Methoden und Header angibt. Unten sehen wir, dass `Access-Control-Allow-Headers` die angeforderten Header enthält.

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
