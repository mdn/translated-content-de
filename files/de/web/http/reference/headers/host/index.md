---
title: Host header
short-title: Host
slug: Web/HTTP/Reference/Headers/Host
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Host`**-{{Glossary("request_header", "Anforderungs-Header")}} gibt den Host und die Portnummer des Servers an, an den die Anfrage gesendet wird.

Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst angenommen (z. B. `443` für eine HTTPS-URL und `80` für eine HTTP-URL).

Ein `Host`-Header-Feld muss in allen HTTP/1.1-Anforderungsnachrichten gesendet werden.
Ein {{HTTPStatus("400", "400 Bad Request")}} Statuscode kann an jede HTTP/1.1-Anforderungsnachricht gesendet werden, die kein oder mehr als ein `Host`-Header-Feld enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : TCP-Portnummer, auf dem der Server lauscht.

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
