---
title: Host
slug: Web/HTTP/Headers/Host
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Host`**-{{Glossary("request_header", "Anforderungsheader")}} spezifiziert den Host und die Portnummer des Servers, an den die Anfrage gesendet wird.

Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst angenommen (z. B. `443` für eine HTTPS-URL und `80` für eine HTTP-URL).

Ein `Host`-Headerfeld muss in allen HTTP/1.1-Anfragen gesendet werden. Ein {{HTTPStatus("400", "400 Bad Request")}}-Statuscode kann auf jede HTTP/1.1-Anfrage gesendet werden, die kein oder mehr als ein `Host`-Headerfeld enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
