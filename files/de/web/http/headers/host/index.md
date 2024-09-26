---
title: Host
slug: Web/HTTP/Headers/Host
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Host`** Request-Header gibt den Host und die Portnummer des Servers an, an den die Anfrage gesendet wird.

Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst angenommen (z. B. `443` für eine HTTPS-URL und `80` für eine HTTP-URL).

Ein `Host`-Headerfeld muss in allen HTTP/1.1-Anfragen gesendet werden. Ein {{HTTPStatus("400")}} (Bad Request) Statuscode kann an jede HTTP/1.1-Anfrage gesendet werden, die kein oder mehr als ein `Host`-Headerfeld enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Host: <host>:<port>
```

## Direktiven

- \<host>
  - : Der Domainname des Servers (für virtuelles Hosting).
- \<port> {{optional_inline}}
  - : TCP-Portnummer, auf der der Server hört.

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
