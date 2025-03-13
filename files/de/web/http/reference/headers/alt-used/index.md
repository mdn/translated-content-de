---
title: Alt-Used
slug: Web/HTTP/Reference/Headers/Alt-Used
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Alt-Used`** {{Glossary("request_header", "Anforderungsheader")}} wird verwendet, um den alternativen Dienst zu identifizieren, genau wie das {{HTTPHeader("Host")}} HTTP-Headerfeld den Host und Port des Ursprungs identifiziert.

Ziel ist es, alternativen Diensten zu ermöglichen, Schleifen zu erkennen, den Datenverkehr zu Zwecken des Lastenausgleichs zu unterscheiden und generell sicherzustellen, dass es möglich ist, das beabsichtigte Ziel des Datenverkehrs zu identifizieren, da die Einführung dieser Informationen nach der Verwendung eines Protokolls problematisch erwiesen hat.

Wenn ein Client einen alternativen Dienst für eine Anfrage verwendet, kann er dies dem Server mit dem `Alt-Used` HTTP-Header mitteilen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Die TCP-Portnummer, auf der der Server hört.

## Beispiele

```http
Alt-Used: alternate.example.net
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Alt-Svc")}}
- {{HTTPHeader("Host")}}
