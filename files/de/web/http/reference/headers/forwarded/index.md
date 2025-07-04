---
title: Forwarded header
short-title: Forwarded
slug: Web/HTTP/Reference/Headers/Forwarded
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Forwarded`**-{{Glossary("request_header", "Request-Header")}} enthält Informationen, die möglicherweise von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling) (Load Balancer, CDNs usw.) hinzugefügt werden, die ansonsten verändert oder verloren gehen würden, wenn Proxy-Server in den Pfad der Anfrage eingebunden sind.

Wenn ein Client beispielsweise über einen HTTP-Proxy (oder Load Balancer) mit einem Webserver verbunden ist, werden Serverprotokolle nur die IP-Adresse, die Host-Adresse und das Protokoll des Proxys enthalten; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren. Der Header ist optional und kann von den Proxy-Servern auf dem Weg zum Server hinzugefügt, geändert oder entfernt werden.

Dieser Header wird zur Fehlerbehebung, Statistik und Generierung von standortabhängigem Inhalt verwendet. Aufgrund seines Designs gibt er datenschutzsensible Informationen preis, wie die IP-Adresse des Clients. Daher muss der Datenschutz des Benutzers berücksichtigt werden, wenn dieser Header verwendet wird.

Die alternativen und de-facto Standardversionen dieses Headers sind die Header {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Direktiven sind `key=value` Paare, die durch ein Semikolon getrennt sind.

Wenn es zwischen Client und Server mehrere Proxy-Server gibt, können diese jeweils ihre eigenen Weiterleitungsinformationen angeben. Dies kann durch das Hinzufügen eines neuen `Forwarded`-Headers am Ende des Header-Blocks oder durch das Anhängen der Informationen am Ende des letzten `Forwarded`-Headers in einer durch Kommas getrennten Liste erfolgen.

## Direktiven

- `by` {{optional_inline}}
  - : Die Schnittstelle, über die die Anfrage am Proxy-Server einging.
    Der Bezeichner kann sein:
    - ein verschleierter Bezeichner (wie "hidden" oder "secret").
      Dies sollte als Standard behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit Port, wobei ipv6 in Anführungszeichen gesetzt und in eckige Klammern eingefasst ist)
    - "unknown", wenn die vorhergehende Entität nicht bekannt ist (und Sie dennoch anzeigen möchten, dass die Weiterleitung der Anfrage erfolgt ist)

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage initiiert hat, und nachfolgende Proxys in einer Kette von Proxys.
    Der Bezeichner hat die gleichen möglichen Werte wie die `by`-Direktive.
- `host` {{optional_inline}}
  - : Das {{HTTPHeader("Host")}} Request-Header-Feld, wie es vom Proxy empfangen wurde.
- `proto` {{optional_inline}}
  - : Gibt an, welches Protokoll zur Durchführung der Anfrage verwendet wurde (typischerweise "http" oder "https").

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

Wenn Ihre Anwendung, Ihr Server oder Ihr Proxy den standardisierten `Forwarded`-Header unterstützt, kann der Header {{HTTPHeader("X-Forwarded-For")}} ersetzt werden. Beachten Sie, dass eine IPv6-Adresse in `Forwarded` in Anführungszeichen gesetzt und in eckige Klammern eingefasst ist (im Gegensatz zum {{HTTPHeader("X-Forwarded-For")}}-Header).

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
- {{HTTPHeader("Via")}} – liefert Informationen über den Proxy selbst, nicht über den Client, der sich mit diesem verbindet.
