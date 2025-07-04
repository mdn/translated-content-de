---
title: Host header
short-title: Host
slug: Web/HTTP/Reference/Headers/Host
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Host`**-{{Glossary("request_header", "Request-Header")}} gibt den Host und die Portnummer des Servers an, an den die Anfrage gesendet wird.

Wenn kein Port angegeben ist, wird der Standardport für den gewünschten Dienst angenommen (z.B. `443` für eine HTTPS-URL und `80` für eine HTTP-URL).

Ein `Host`-Header-Feld muss in allen HTTP/1.1-Anfragen gesendet werden. Ein {{HTTPStatus("400", "400 Bad Request")}}-Statuscode kann an jede HTTP/1.1-Anfrage gesendet werden, die kein oder mehr als ein `Host`-Header-Feld enthält.

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
  - : TCP-Portnummer, auf der der Server lauscht.

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
