---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der **`Forwarded`** Request-Header enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Proxy_servers_and_tunneling) (Load Balancers, CDNs usw.) hinzugefügt werden können und die ansonsten geändert oder verloren gehen würden, wenn Proxy-Server am Pfad der Anfrage beteiligt sind.

Zum Beispiel, wenn ein Client über einen HTTP-Proxy (oder Load Balancer) eine Verbindung zu einem Webserver herstellt, werden in den Server-Logs nur die IP-Adresse, Hostadresse und das Protokoll des Proxys enthalten sein; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren. Der Header ist optional und kann von jedem der Proxy-Server auf dem Weg zum Server hinzugefügt, modifiziert oder entfernt werden.

Dieser Header wird für Debugging, Statistiken und die Erstellung standortabhängiger Inhalte verwendet. Er enthüllt bewusst datenschutzsensible Informationen, wie die IP-Adresse des Clients. Daher muss bei der Implementierung dieses Headers die Privatsphäre des Nutzers berücksichtigt werden.

Die alternativen und de-facto Standardversionen dieses Headers sind die {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}} Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax für den Forwarding-Header von einem einzelnen Proxy wird unten gezeigt. Direktiven sind `key=value` Paare, getrennt durch ein Semikolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Wenn es mehrere Proxy-Server zwischen Client und Server gibt, kann jeder seine eigene Weiterleitungsinformationen angeben. Dies kann erfolgen, indem ein neuer `Forwarded`-Header an das Ende des Header-Blocks hinzugefügt oder indem die Informationen am Ende des letzten `Forwarded`-Headers in einer Komma-getrennten Liste angehängt werden.

## Direktiven

- `by` {{optional_inline}}

  - : Die Schnittstelle, an der die Anfrage beim Proxy-Server eingegangen ist. Der Bezeichner kann sein:

    - ein verschleierter Bezeichner (wie "hidden" oder "secret"). Dies sollte als Standard behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit einem Port, wobei ipv6 in Anführungszeichen und in eckigen Klammern eingeschlossen ist).
    - "unknown", wenn die vorhergehende Entität nicht bekannt ist (und trotzdem angezeigt werden soll, dass die Weiterleitung der Anfrage erfolgt ist).

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage initiiert hat und die nachfolgenden Proxies in einer Proxy-Kette.
    Der Bezeichner hat die gleichen möglichen Werte wie die `by`-Direktive.
- `host` {{optional_inline}}
  - : Der {{HTTPHeader("Host")}} Request-Header-Feld, wie vom Proxy empfangen.
- `proto` {{optional_inline}}
  - : Gibt an, welches Protokoll verwendet wurde, um die Anfrage zu stellen (typischerweise "http" oder "https").

## Beispiele

### Verwendung des `Forwarded`-Headers

```http
Forwarded: for="_mdn"

# case insensitive
Forwarded: For="[2001:db8:cafe::17]:4711"

# separated by semicolon
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# Values from multiple proxy servers can be appended using a comma
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### Übergang von `X-Forwarded-For` zu `Forwarded`

Wenn Ihre Anwendung, Ihr Server oder Ihr Proxy den standardisierten `Forwarded`-Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}}-Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse im `Forwarded`-Header in Anführungszeichen gesetzt und in eckige Klammern eingeschlossen wird (anders als im {{HTTPHeader("X-Forwarded-For")}}-Header).

```http
X-Forwarded-For: 192.0.2.172
Forwarded: for=192.0.2.172

X-Forwarded-For: 192.0.2.43, 2001:db8:cafe::17
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}} – liefert Informationen über den Proxy selbst, nicht über den Client, der sich damit verbindet.
