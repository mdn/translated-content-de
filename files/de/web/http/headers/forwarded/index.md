---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Forwarded`** {{Glossary("request_header", "Request-Header")}} enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Proxy_servers_and_tunneling) (Load-Balancer, CDNs usw.) hinzugefügt werden können und die ansonsten verändert oder verloren gehen würden, wenn Proxy-Server im Pfad der Anfrage beteiligt sind.

Wenn beispielsweise ein Client über einen HTTP-Proxy (oder Load-Balancer) eine Verbindung zu einem Webserver herstellt, enthalten Serverprotokolle nur die IP-Adresse, die Hostadresse und das Protokoll des Proxys. Dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren. Der Header ist optional und kann von jedem der Proxy-Server auf dem Weg zum Server hinzugefügt, modifiziert oder entfernt werden.

Dieser Header wird für das Debugging, die Statistik und die Erstellung standortabhängiger Inhalte verwendet. Er legt absichtlich datenschutzsensible Informationen offen, wie z. B. die IP-Adresse des Clients. Daher muss bei der Verwendung dieses Headers die Privatsphäre des Benutzers berücksichtigt werden.

Die alternativen und de-facto-Standardversionen dieses Headers sind die {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}} Header.

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

Die Syntax für den Weiterleitungs-Header von einem einzelnen Proxy ist unten gezeigt. Direktiven sind `key=value` Paare, getrennt durch ein Semikolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Wenn sich mehrere Proxy-Server zwischen Client und Server befinden, können sie jeweils ihre eigenen Weiterleitungsinformationen angeben. Dies kann durch Hinzufügen eines neuen `Forwarded` Headers am Ende des Header-Blocks erfolgen oder durch Anhängen der Informationen am Ende des letzten `Forwarded` Headers in einer durch Kommas getrennten Liste.

## Direktiven

- `by` {{optional_inline}}

  - : Die Schnittstelle, über die die Anfrage an den Proxy-Server gelangte.
    Der Bezeichner kann sein:

    - ein verschleierter Bezeichner (wie "hidden" oder "secret").
      Dies sollte als Standard behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit Port, und ipv6 zitiert und in eckigen Klammern eingeschlossen)
    - "unknown", wenn die vorhergehende Entität nicht bekannt ist (und Sie dennoch angeben möchten, dass die Weiterleitung der Anfrage erfolgt ist)

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage initiiert hat, und nachfolgende Proxys in einer Proxy-Kette.
    Der Bezeichner hat dieselben möglichen Werte wie die `by` Direktive.
- `host` {{optional_inline}}
  - : Das {{HTTPHeader("Host")}} Request-Header-Feld, wie es vom Proxy empfangen wurde.
- `proto` {{optional_inline}}
  - : Gibt an, welches Protokoll verwendet wurde, um die Anfrage durchzuführen (typischerweise "http" oder "https").

## Beispiele

### Verwendung des `Forwarded` Headers

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

Wenn Ihre Anwendung, Ihr Server oder Proxy den standardisierten `Forwarded` Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}} Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse in `Forwarded` zitiert und in eckige Klammern eingeschlossen wird (anders als im {{HTTPHeader("X-Forwarded-For")}} Header).

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
- {{HTTPHeader("Via")}} – liefert Informationen über den Proxy selbst, nicht über den Client, der eine Verbindung zu ihm herstellt.
