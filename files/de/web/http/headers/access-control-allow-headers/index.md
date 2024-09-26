---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Headers`** Antwort-Header wird als Antwort auf eine {{glossary("Preflight-Anfrage")}} verwendet, die den {{HTTPHeader("Access-Control-Request-Headers")}} enthält, um anzugeben, welche HTTP-Header während der eigentlichen Anfrage verwendet werden können.

Dieser Header ist erforderlich, wenn die Anfrage einen {{HTTPHeader("Access-Control-Request-Headers")}} Header enthält.

> **Note:** {{glossary("CORS-safelisted_request_header", "CORS-sichere Anfrage-Header")}} sind immer erlaubt und werden üblicherweise nicht in `Access-Control-Allow-Headers` aufgelistet (es sei denn, es besteht die Notwendigkeit, die Safelist [zusätzliche Einschränkungen](/de/docs/Glossary/CORS-safelisted_request_header#additional_restrictions) zu umgehen).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Headername")}}</th>
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
  - : Der Name eines unterstützten Anfrage-Headers. Der Header kann eine beliebige Anzahl von Headern auflisten, die durch Kommas getrennt sind.
- `*` (Wildcard)
  - : Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen). Bei Anfragen mit Anmeldeinformationen wird er als der literale Headername `*` ohne besondere Semantik behandelt. Beachten Sie, dass der {{HTTPHeader("Authorization")}} Header nicht als Wildcard zulässig ist und immer explizit aufgeführt werden muss.

## Beispiele

### Ein benutzerdefinierter Header

Hier ist ein Beispiel, wie ein `Access-Control-Allow-Headers` Header aussehen könnte. Er zeigt an, dass ein benutzerdefinierter Header namens `X-Custom-Header` von CORS-Anfragen an den Server unterstützt wird (zusätzlich zu den {{glossary("CORS-safelisted_request_header", "CORS-sicheren Anfrage-Headern")}}).

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Mehrere Header

Dieses Beispiel zeigt den `Access-Control-Allow-Headers`, wenn er Unterstützung für mehrere Header angibt.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Zusätzliche Einschränkungen umgehen

Obwohl {{glossary("CORS-safelisted_request_header", "CORS-sichere Anfrage-Header")}} immer erlaubt sind und normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt werden müssen, wird ihre Auflistung dennoch die [zusätzlichen Einschränkungen](/de/docs/Glossary/CORS-safelisted_request_header#additional_restrictions) umgehen, die gelten.

```http
Access-Control-Allow-Headers: Accept
```

### Beispiel einer Preflight-Anfrage

Betrachten wir ein Beispiel einer {{glossary("Preflight-Anfrage")}}, die `Access-Control-Allow-Headers` beinhaltet.

#### Anfrage

Zuerst die Anfrage. Die Preflight-Anfrage ist eine {{HTTPMethod("OPTIONS")}} Anfrage, die eine Kombination aus den drei Preflight-Anfrage-Headern enthält: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}} und {{HTTPHeader("Origin")}}.

Die folgende Preflight-Anfrage teilt dem Server mit, dass wir eine CORS `GET` Anfrage mit den im {{HTTPHeader("Access-Control-Request-Headers")}} Header aufgelisteten Headern ({{HTTPHeader("Content-Type")}} und `X-Requested-With`) senden möchten.

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://foo.bar.org
```

#### Antwort

Wenn die CORS-Anfrage, die durch die Preflight-Anfrage angezeigt wird, autorisiert ist, antwortet der Server auf die Preflight-Anfrage mit einer Nachricht, die den erlaubten Ursprung, Methoden und Header anzeigt. Unten sehen wir, dass `Access-Control-Allow-Headers` die angeforderten Header beinhaltet.

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
