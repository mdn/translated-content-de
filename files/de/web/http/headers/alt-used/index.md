---
title: Alt-Used
slug: Web/HTTP/Headers/Alt-Used
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der **`Alt-Used`** HTTP-Header wird in Anfragen verwendet, um den in Gebrauch befindlichen alternativen Dienst zu identifizieren, genauso wie das {{HTTPHeader("Host")}} HTTP-Header-Feld den Host und Port des Ursprungs identifiziert.

Er ist dazu gedacht, alternativen Diensten das Erkennen von Schleifen zu ermöglichen, den Verkehr zwecks Lastverteilung zu differenzieren und generell sicherzustellen, dass es möglich ist, das beabsichtigte Ziel des Verkehrs zu identifizieren, da die Einführung dieser Information nach der Verwendung eines Protokolls sich als problematisch erwiesen hat.

Wenn ein Client für eine Anfrage einen alternativen Dienst verwendet, kann er dies dem Server über den **`Alt-Used`** HTTP-Header mitteilen.

## Syntax

```http
Alt-Used: <host>:<port>
```

## Direktiven

- \<host>
  - : der Domainname des Servers.
- \<port> {{optional_inline}}
  - : TCP-Portnummer, an der der Server lauscht.

## Beispiele

```http
Alt-Used: alternate.example.net
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Alt-Svc")}}
- {{HTTPHeader("Host")}}
