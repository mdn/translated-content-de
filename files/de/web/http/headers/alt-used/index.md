---
title: Alt-Used
slug: Web/HTTP/Headers/Alt-Used
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Alt-Used`** {{Glossary("request_header", "Request-Header")}} wird verwendet, um den alternativen Dienst zu identifizieren, der genutzt wird, ähnlich wie das {{HTTPHeader("Host")}} HTTP-Header-Feld den Host und Port des Ursprungs identifiziert.

Dies soll es alternativen Diensten ermöglichen, Schleifen zu erkennen, den Datenverkehr zur Lastverteilung zu differenzieren und allgemein sicherzustellen, dass das beabsichtigte Ziel des Datenverkehrs identifiziert werden kann, da das Einführen dieser Informationen nach der Verwendung eines Protokolls problematisch war.

Wenn ein Client einen alternativen Dienst für eine Anfrage verwendet, kann er dies dem Server über den `Alt-Used` HTTP-Header anzeigen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Der Domain-Name des Servers.
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
