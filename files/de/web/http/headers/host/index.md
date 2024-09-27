---
title: Host
slug: Web/HTTP/Headers/Host
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Host`**-Anforderungsheader gibt den Host und die Portnummer des Servers an, an den die Anfrage gesendet wird.

Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst angenommen (z. B. `443` für eine HTTPS-URL und `80` für eine HTTP-URL).

Ein `Host`-Header-Feld muss in allen HTTP/1.1-Anforderungsnachrichten gesendet werden. Ein {{HTTPStatus("400")}} (Bad Request)-Statuscode kann für jede HTTP/1.1-Anforderungsnachricht gesendet werden, die fehlt oder mehr als ein `Host`-Header-Feld enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : der Domainname des Servers (für virtuelles Hosting).
- \<port> {{optional_inline}}
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
