---
title: Alt-Used
slug: Web/HTTP/Headers/Alt-Used
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der **`Alt-Used`** HTTP-Header wird in Anfragen verwendet, um den verwendeten alternativen Dienst zu identifizieren, genau wie das {{HTTPHeader("Host")}} HTTP-Headerfeld den Host und Port des Ursprungs identifiziert.

Er soll alternativen Diensten ermöglichen, Schleifen zu erkennen, den Datenverkehr zu differenzieren, um Lastverteilung zu ermöglichen, und allgemein sicherzustellen, dass das beabsichtigte Ziel des Datenverkehrs erkennbar ist, da sich das Einführen dieser Information nach Einsetzen eines Protokolls als problematisch erwiesen hat.

Wenn ein Client für eine Anfrage einen alternativen Dienst verwendet, kann er dies dem Server über den **`Alt-Used`** HTTP-Header anzeigen.

## Syntax

```http
Alt-Used: <host>:<port>
```

## Direktiven

- \<host>
  - : Der Domainname des Servers.
- \<port> {{optional_inline}}
  - : TCP-Portnummer, auf dem der Server lauscht.

## Beispiele

```http
Alt-Used: alternate.example.net
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Alt-Svc")}}
- {{HTTPHeader("Host")}}
