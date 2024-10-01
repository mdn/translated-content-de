---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Headers`** Antwort-Header wird als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, die den {{HTTPHeader("Access-Control-Request-Headers")}} enthält, um anzuzeigen, welche HTTP-Header während der eigentlichen Anfrage verwendet werden dürfen.

Dieser Header ist erforderlich, wenn die Anfrage einen {{HTTPHeader("Access-Control-Request-Headers")}} Header enthält.

> **Note:** {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anforderungs-Header")}} sind immer zulässig und werden normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt (es sei denn, es besteht die Notwendigkeit, die sicheren Listen zu umgehen {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzliche Einschränkungen")}}).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Der Name eines unterstützten Anforderungs-Headers. Der Header kann eine beliebige Anzahl von Headern auflisten, getrennt durch Kommas.
- `*` (Wildcard)
  - : Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen). Bei Anfragen mit Anmeldeinformationen wird er als der buchstäbliche Header-Name `*` ohne spezielle Semantik behandelt. Beachten Sie, dass der {{HTTPHeader("Authorization")}} Header nicht per Wildcard zugelassen werden kann und immer explizit aufgelistet werden muss.

## Beispiele

### Ein benutzerdefinierter Header

Hier ist ein Beispiel dafür, wie ein `Access-Control-Allow-Headers` Header aussehen könnte. Er zeigt an, dass ein benutzerdefinierter Header namens `X-Custom-Header` von CORS-Anfragen an den Server unterstützt wird (zusätzlich zu den {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelisteten Anforderungs-Headern")}}).

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Mehrere Header

Dieses Beispiel zeigt `Access-Control-Allow-Headers`, wenn es die Unterstützung für mehrere Header angibt.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Zusätzliche Einschränkungen umgehen

Obwohl {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anforderungs-Header")}} immer zulässig sind und normalerweise nicht in `Access-Control-Allow-Headers` aufgelistet werden müssen, wird durch die Auflistung dennoch das Umgehen der {{Glossary("CORS-safelisted_request_header#additional_restrictions", "zusätzlichen Einschränkungen")}} ermöglicht, die gelten.

```http
Access-Control-Allow-Headers: Accept
```

### Beispiel einer Preflight-Anfrage

Betrachten wir ein Beispiel einer {{Glossary("preflight_request", "Preflight-Anfrage")}}, die `Access-Control-Allow-Headers` beinhaltet.

#### Anfrage

Zuerst die Anfrage. Die Preflight-Anfrage ist eine {{HTTPMethod("OPTIONS")}} Anfrage, die eine Kombination der drei Preflight-Request-Header enthält: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}} und {{HTTPHeader("Origin")}}.

Die Preflight-Anfrage unten teilt dem Server mit, dass wir eine CORS `GET` Anfrage mit den im {{HTTPHeader("Access-Control-Request-Headers")}} ({{HTTPHeader("Content-Type")}} und `X-Requested-With`) aufgeführten Headern senden möchten.

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://foo.bar.org
```

#### Antwort

Wenn die durch die Preflight-Anfrage angezeigte CORS-Anfrage autorisiert ist, antwortet der Server auf die Preflight-Anfrage mit einer Nachricht, die den erlaubten Ursprung, die Methoden und die Header angibt. Unten sehen wir, dass `Access-Control-Allow-Headers` die angeforderten Header enthält.

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
