---
title: Weitergeleitet
slug: Web/HTTP/Headers/Forwarded
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der **`Forwarded`**-Request-Header enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Proxy_servers_and_tunneling) (Load Balancer, CDNs usw.) hinzugefügt werden können und die sonst verändert oder verloren gehen würden, wenn Proxy-Server am Pfad der Anfrage beteiligt sind.

Zum Beispiel, wenn ein Client über einen HTTP-Proxy (oder Load Balancer) zu einem Webserver verbindet, enthalten die Serverprotokolle nur die IP-Adresse, die Host-Adresse und das Protokoll des Proxys; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren. Der Header ist optional und kann von jedem Proxy-Server auf dem Weg zum Server hinzugefügt, modifiziert oder entfernt werden.

Dieser Header wird zur Fehlerbehebung, für Statistiken und zur Erstellung standortabhängiger Inhalte verwendet. Er legt per Design datenschutzrelevante Informationen offen, wie z.B. die IP-Adresse des Clients. Daher muss die Privatsphäre des Nutzers beim Einsatz dieses Headers berücksichtigt werden.

Die alternativen und de-facto Standardversionen dieses Headers sind die Header {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}}.

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

Die Syntax für den Weiterleitungs-Header von einem einzelnen Proxy ist unten dargestellt. Direktiven sind `key=value`-Paare, getrennt durch ein Semikolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Wenn es mehrere Proxy-Server zwischen dem Client und dem Server gibt, kann jeder seine eigene Weiterleitungsinformation angeben. Dies kann durch das Hinzufügen eines neuen `Forwarded`-Headers am Ende des Header-Blocks erfolgen oder durch Anhängen der Informationen an das Ende des letzten `Forwarded`-Headers in einer durch Komma getrennten Liste.

## Direktiven

- `by` {{optional_inline}}

  - : Das Interface, über das die Anfrage beim Proxy-Server eingegangen ist. Der Bezeichner kann sein:

    - ein verschleierter Bezeichner (wie "hidden" oder "secret"). Dies sollte als Standard behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit Port, und ipv6 in Anführungszeichen und in eckigen Klammern eingeschlossen)
    - "unknown" wenn die vorhergehende Entität nicht bekannt ist (und Sie dennoch anzeigen möchten, dass eine Weiterleitung der Anfrage erfolgt ist)

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage initiiert hat und nachfolgende Proxies in einer Proxy-Kette. Der Bezeichner hat die gleichen möglichen Werte wie die `by`-Direktive.
- `host` {{optional_inline}}
  - : Das {{HTTPHeader("Host")}}-Request-Header-Feld, wie es vom Proxy empfangen wurde.
- `proto` {{optional_inline}}
  - : Gibt an, welches Protokoll verwendet wurde, um die Anfrage zu stellen (typischerweise "http" oder "https").

## Beispiele

### Verwendung des `Forwarded`-Headers

```http
Forwarded: for="_mdn"

# nicht case-sensitiv
Forwarded: For="[2001:db8:cafe::17]:4711"

# getrennt durch Semikolon
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# Werte von mehreren Proxy-Servern können durch ein Komma angehängt werden
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### Übergang von `X-Forwarded-For` zu `Forwarded`

Wenn Ihre Anwendung, Ihr Server oder Proxy den standardisierten `Forwarded`-Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}}-Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse in `Forwarded` in Anführungszeichen gesetzt und in eckigen Klammern eingeschlossen ist (im Gegensatz zum {{HTTPHeader("X-Forwarded-For")}}-Header).

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
- {{HTTPHeader("Via")}} – bietet Informationen über den Proxy selbst, nicht über den Client, der sich mit ihm verbindet.
