---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der **`Forwarded`** Request-Header enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Proxy_servers_and_tunneling) (Load-Balancer, CDNs usw.) hinzugefügt werden können, die andernfalls verändert oder verloren gehen würden, wenn Proxy-Server an der Anfrage beteiligt sind.

Zum Beispiel, wenn ein Client über einen HTTP-Proxy (oder Load-Balancer) eine Verbindung zu einem Webserver herstellt, enthalten die Serverprotokolle nur die IP-Adresse, Hostadresse und das Protokoll des Proxys; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren.
Der Header ist optional und kann von jedem der Proxy-Server auf dem Weg zum Server hinzugefügt, modifiziert oder entfernt werden.

Dieser Header wird für Debugging, Statistiken und die Generierung von standortabhängigem Inhalt verwendet.
Durch das Design wird datenschutzsensible Information offengelegt, wie zum Beispiel die IP-Adresse des Clients.
Deshalb muss der Datenschutz des Benutzers beachtet werden, wenn dieser Header eingesetzt wird.

Die alternativen und faktischen Standardversionen dieses Headers sind die Header {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax für den Forwarded-Header von einem einzelnen Proxy wird unten gezeigt.
Direktiven sind `key=value` Paare, getrennt durch ein Semikolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Wenn sich mehrere Proxy-Server zwischen Client und Server befinden, kann jeder seine eigenen Weiterleitungsinformationen spezifizieren.
Dies kann erfolgen, indem ein neuer `Forwarded`-Header am Ende des Header-Blocks hinzugefügt wird, oder indem die Informationen am Ende des letzten `Forwarded`-Headers in einer durch Kommas getrennten Liste angehängt werden.

## Direktiven

- `by` {{optional_inline}}

  - : Die Schnittstelle, über die die Anfrage beim Proxy-Server einging.
    Der Bezeichner kann sein:

    - ein verschlüsselter Bezeichner (wie "hidden" oder "secret").
      Dies sollte als Standardeinstellung behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit Port, wobei IPv6-Adressen in Anführungszeichen und in eckige Klammern gefasst sind)
    - "unknown", wenn die vorhergehende Entität nicht bekannt ist (und trotzdem angezeigt werden soll, dass die Weiterleitung der Anfrage stattgefunden hat)

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage initiiert hat, und nachfolgende Proxies in einer Proxy-Kette.
    Der Bezeichner hat die gleichen möglichen Werte wie die `by` Direktive.
- `host` {{optional_inline}}
  - : Das {{HTTPHeader("Host")}} Request-Header-Feld, wie es vom Proxy empfangen wurde.
- `proto` {{optional_inline}}
  - : Gibt an, welches Protokoll verwendet wurde, um die Anfrage zu stellen (typischerweise "http" oder "https").

## Beispiele

### Verwendung des `Forwarded`-Headers

```http
Forwarded: for="_mdn"

# nicht case-sensitiv
Forwarded: For="[2001:db8:cafe::17]:4711"

# durch Semikolon getrennt
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# Werte von mehreren Proxy-Servern können durch Komma getrennt hinzugefügt werden
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### Übergang von `X-Forwarded-For` zu `Forwarded`

Wenn Ihre Anwendung, Ihr Server oder Proxy den standardisierten `Forwarded`-Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}} Header ersetzt werden.
Beachten Sie, dass eine IPv6-Adresse im `Forwarded`-Header in Anführungszeichen gesetzt und in eckige Klammern gefasst wird (anders als beim {{HTTPHeader("X-Forwarded-For")}} Header).

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
- {{HTTPHeader("Via")}} – bietet Informationen über den Proxy selbst, nicht über den damit verbundenen Client.
