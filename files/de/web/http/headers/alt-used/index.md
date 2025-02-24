---
title: Alt-Used
slug: Web/HTTP/Headers/Alt-Used
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Alt-Used`**-{{Glossary("request_header", "Request-Header")}} wird verwendet, um den alternativen Dienst zu identifizieren, genauso wie das {{HTTPHeader("Host")}} HTTP-Header-Feld den Host und Port des Ursprungs identifiziert.

Er soll es ermöglichen, dass alternative Dienste Schleifen erkennen, den Datenverkehr für Lastausgleichszwecke differenzieren und allgemein sicherstellen können, dass es möglich ist, das beabsichtigte Ziel des Datenverkehrs zu identifizieren. Das Einführen dieser Information, nachdem ein Protokoll bereits in Verwendung ist, hat sich als problematisch erwiesen.

Wenn ein Client für eine Anfrage einen alternativen Dienst verwendet, kann er dies dem Server mithilfe des `Alt-Used` HTTP-Headers anzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Alt-Used: <host>:<port>
```

## Direktiven

- `<host>`
  - : Der Domainname des Servers.
- `<port>` {{optional_inline}}
  - : Die TCP-Portnummer, auf der der Server lauscht.

## Beispiele

```http
Alt-Used: alternate.example.net
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Alt-Svc")}}
- {{HTTPHeader("Host")}}
