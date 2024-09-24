---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Headers`** Antwort-Header wird als Reaktion auf eine {{glossary("preflight request","Vorabbefragungsanfrage")}} verwendet, die den {{HTTPHeader("Access-Control-Request-Headers")}} enthält, um anzugeben, welche HTTP-Header während der eigentlichen Anfrage verwendet werden können.

Dieser Header ist erforderlich, wenn die Anfrage einen {{HTTPHeader("Access-Control-Request-Headers")}} Header enthält.

> **Hinweis:** {{glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anforderungsheader")}} sind immer erlaubt und werden normalerweise nicht in `Access-Control-Allow-Headers` aufgeführt (es sei denn, es besteht die Notwendigkeit, die Sicherheitsliste [zusätzliche Einschränkungen](/de/docs/Glossary/CORS-safelisted_request_header#additional_restrictions) zu umgehen).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header","Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name","Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Headers: [<header-name>[, <header-name>]*]
Access-Control-Allow-Headers: *
```

## Anweisungen

- `<header-name>`
  - : Der Name eines unterstützten Anforderungsheaders. Der Header kann beliebig viele Headernamen, getrennt durch Kommas, auflisten.
- `*` (Wildcard)
  - : Der Wert "`*`" zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen). Bei Anfragen mit Anmeldeinformationen wird es als der wörtliche Headername "`*`" ohne besondere Semantik behandelt. Beachten Sie, dass der {{HTTPHeader("Authorization")}} Header nicht als Wildcard behandelt werden kann und immer explizit aufgeführt werden muss.

## Beispiele

### Ein benutzerdefinierter Header

Hier ist ein Beispiel dafür, wie ein `Access-Control-Allow-Headers` Header aussehen könnte. Es zeigt an, dass ein benutzerdefinierter Header namens `X-Custom-Header` von CORS-Anfragen an den Server unterstützt wird (zusätzlich zu den {{glossary("CORS-safelisted_request_header", "CORS-sicher gelisteten Anforderungsheadern")}}).

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Mehrere Header

Dieses Beispiel zeigt `Access-Control-Allow-Headers`, wenn Unterstützung für mehrere Header angegeben wird.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Zusätzliche Einschränkungen umgehen

Obwohl {{glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anforderungsheader")}} immer erlaubt sind und normalerweise nicht in `Access-Control-Allow-Headers` aufgelistet werden müssen, wird durch ihre Auflistung dennoch die [zusätzlichen Einschränkungen](/de/docs/Glossary/CORS-safelisted_request_header#additional_restrictions) umgangen die gelten.

```http
Access-Control-Allow-Headers: Accept
```

### Beispiel einer Vorabbefragungsanfrage

Betrachten wir ein Beispiel für eine {{glossary("preflight request","Vorabbefragungsanfrage")}}, die `Access-Control-Allow-Headers` betrifft.

#### Anfrage

Zuerst die Anfrage. Die Vorabbefragungsanfrage ist eine {{HTTPMethod("OPTIONS","OPTIONS")}} Anfrage, die eine Kombination aus den drei Vorabbefragungsanfrage-Headers enthält: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}} und {{HTTPHeader("Origin")}}.

Die folgende Vorabbefragungsanfrage informiert den Server darüber, dass wir eine CORS-`GET`-Anfrage mit den im {{HTTPHeader("Access-Control-Request-Headers")}} genannten Headern ({{HTTPHeader("Content-Type")}} und `X-Requested-With`) senden möchten.

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://foo.bar.org
```

#### Antwort

Wenn die CORS-Anfrage, die durch die Vorabbefragungsanfrage angezeigt wird, autorisiert ist, antwortet der Server auf die Vorabbefragungsanfrage mit einer Nachricht, die den erlaubten Ursprung, die Methoden und die Header anzeigt. Unten sehen wir, dass `Access-Control-Allow-Headers` die angeforderten Header enthält.

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
