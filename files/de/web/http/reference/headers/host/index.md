---
title: Host
slug: Web/HTTP/Reference/Headers/Host
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Host`** {{Glossary("request_header", "Request-Header")}} gibt den Host und die Portnummer des Servers an, an den die Anfrage gesendet wird.

Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst impliziert (z.B. `443` für eine HTTPS-URL und `80` für eine HTTP-URL).

Ein `Host`-Header-Feld muss in allen HTTP/1.1-Anforderungsnachrichten gesendet werden. Ein {{HTTPStatus("400", "400 Bad Request")}}-Statuscode kann an jede HTTP/1.1-Anforderungsnachricht gesendet werden, die fehlt oder mehr als ein `Host`-Header-Feld enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Host: <host>:<port>
```

## Direktiven

- `<host>`
  - : Der Domainname des Servers (für virtuelles Hosting).
- `<port>` {{optional_inline}}
  - : TCP-Portnummer, an dem der Server lauscht.

## Beispiele

```http
Host: developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("400")}}
- {{HTMLElement("base")}}
