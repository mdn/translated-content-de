---
title: Alt-Used header
short-title: Alt-Used
slug: Web/HTTP/Reference/Headers/Alt-Used
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Alt-Used`**-{{Glossary("request_header", "Anforderungs-Header")}} wird verwendet, um den genutzten alternativen Dienst zu identifizieren, ähnlich wie das {{HTTPHeader("Host")}} HTTP-Header-Feld den Host und Port des Ursprungs identifiziert.

Der Zweck besteht darin, alternativen Diensten zu ermöglichen, Schleifen zu erkennen, den Datenverkehr zu Differenzierungszwecken wie Lastverteilung zu verwenden und im Allgemeinen sicherzustellen, dass das beabsichtigte Ziel des Datenverkehrs identifiziert werden kann, da es sich als problematisch herausgestellt hat, diese Informationen erst nach der Nutzung eines Protokolls einzuführen.

Wenn ein Client einen alternativen Dienst für eine Anfrage nutzt, kann er dies dem Server mittels des HTTP-Headers `Alt-Used` anzeigen.

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
