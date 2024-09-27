---
title: Alt-Used
slug: Web/HTTP/Headers/Alt-Used
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der **`Alt-Used`** HTTP-Header wird in Anfragen verwendet, um den alternativen Dienst zu identifizieren, der verwendet wird, ähnlich wie das {{HTTPHeader("Host")}} HTTP-Header-Feld den Host und Port des Ursprungs identifiziert.

Dieser ist dazu gedacht, alternativen Diensten zu ermöglichen, Schleifen zu erkennen, den Datenverkehr zu Lastverteilungszwecken zu differenzieren und generell sicherzustellen, dass es möglich ist, das beabsichtigte Ziel des Datenverkehrs zu identifizieren, da es sich als problematisch erwiesen hat, diese Informationen einzuführen, nachdem ein Protokoll verwendet wird.

Wenn ein Client einen alternativen Dienst für eine Anfrage verwendet, kann er dies dem Server mittels des **`Alt-Used`** HTTP-Headers anzeigen.

## Syntax

```http
Alt-Used: <host>:<port>
```

## Direktiven

- \<host>
  - : Der Domain-Name des Servers.
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
