---
title: Host
slug: Web/HTTP/Headers/Host
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP-**`Host`** {{Glossary("request_header", "Request-Header")}} spezifiziert den Host und die Portnummer des Servers, an den die Anfrage gesendet wird.

Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst impliziert (z. B. `443` für eine HTTPS-URL und `80` für eine HTTP-URL).

Ein `Host`-Header-Feld muss in allen HTTP/1.1-Anforderungsnachrichten gesendet werden. Ein {{HTTPStatus("400", "400 Bad Request")}}-Statuscode kann an jede HTTP/1.1-Anforderungsnachricht gesendet werden, die fehlt oder mehr als ein `Host`-Header-Feld enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : TCP-Portnummer, an dem der Server auf Anfragen wartet.

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
