---
title: Alt-Used header
short-title: Alt-Used
slug: Web/HTTP/Reference/Headers/Alt-Used
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Alt-Used`**-{{Glossary("request_header", "Anforderungs-Header")}} wird verwendet, um den alternativen Dienst zu identifizieren, genauso wie das {{HTTPHeader("Host")}} HTTP-Header-Feld den Host und Port des Ursprungs identifiziert.

Dieser Header soll es alternativen Diensten ermöglichen, Schleifen zu erkennen, den Datenverkehr zu differenzieren, um Lastverteilung durchzuführen, und generell sicherzustellen, dass es möglich ist, das beabsichtigte Ziel des Datenverkehrs zu identifizieren. Denn es hat sich als problematisch erwiesen, diese Informationen nach der Einführung eines Protokolls hinzuzufügen.

Wenn ein Client für eine Anfrage einen alternativen Dienst verwendet, kann er dies dem Server über den `Alt-Used` HTTP-Header mitteilen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Die TCP-Portnummer, an der der Server lauscht.

## Beispiele

```http
Alt-Used: alternate.example.net
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Alt-Svc")}}
- {{HTTPHeader("Host")}}
