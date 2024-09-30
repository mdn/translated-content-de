---
title: Alt-Used
slug: Web/HTTP/Headers/Alt-Used
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der **`Alt-Used`** HTTP-Header wird in Anfragen verwendet, um den genutzten alternativen Service zu identifizieren, ähnlich wie das {{HTTPHeader("Host")}} HTTP-Headerfeld den Host und Port des Ursprungs identifiziert.

Dies soll alternativen Diensten ermöglichen, Schleifen zu erkennen, den Datenverkehr zu differenzieren, um beispielsweise das Lastmanagement zu unterstützen, und generell sicherzustellen, dass das beabsichtigte Ziel des Datenverkehrs identifiziert werden kann, da das Einführen dieser Informationen nach der Verwendung eines Protokolls problematisch erwiesen hat.

Wenn ein Client einen alternativen Dienst für eine Anfrage verwendet, kann er dies dem Server mit dem **`Alt-Used`** HTTP-Header anzeigen.

## Syntax

```http
Alt-Used: <host>:<port>
```

## Direktiven

- \<host>
  - : Der Domain-Name des Servers.
- \<port> {{optional_inline}}
  - : TCP-Portnummer, auf der der Server hört.

## Beispiele

```http
Alt-Used: alternate.example.net
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Alt-Svc")}}
- {{HTTPHeader("Host")}}
