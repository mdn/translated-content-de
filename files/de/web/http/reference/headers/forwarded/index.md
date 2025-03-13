---
title: Forwarded
slug: Web/HTTP/Reference/Headers/Forwarded
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Forwarded`**-{{Glossary("request_header", "Anforderungsheader")}} enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling) (Load-Balancer, CDNs usw.) hinzugefügt werden können, die andernfalls verändert oder verloren gehen würden, wenn Proxy-Server im Pfad der Anforderung beteiligt sind.

Zum Beispiel, wenn ein Client über einen HTTP-Proxy (oder Load Balancer) mit einem Webserver verbunden ist, enthalten die Serverprotokolle nur die IP-Adresse, die Hostadresse und das Protokoll des Proxys; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anforderung zu identifizieren. Der Header ist optional und kann hinzugefügt, geändert oder entfernt werden von jedem der Proxy-Server auf dem Weg zum Server.

Dieser Header wird für Debugging, Statistiken und zur Generierung von standortabhängigem Inhalt verwendet. Er legt bewusst datenschutzrelevante Informationen offen, wie etwa die IP-Adresse des Clients. Daher muss der Datenschutz des Benutzers im Auge behalten werden, wenn dieser Header verwendet wird.

Die alternativen und de-facto Standardversionen dieses Headers sind die Header {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}}.

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

Die Syntax für den Weiterleitungsheader von einem einzelnen Proxy wird unten gezeigt. Direktiven sind `key=value` Paare, getrennt durch einen Strichpunkt.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Wenn sich mehrere Proxy-Server zwischen dem Client und dem Server befinden, kann jeder seine eigene Weiterleitungsinformation angeben. Dies kann entweder durch Hinzufügen eines neuen `Forwarded`-Headers am Ende des Header-Blocks oder durch Anhängen der Informationen am Ende des letzten `Forwarded`-Headers in einer durch Komma getrennten Liste erfolgen.

## Direktiven

- `by` {{optional_inline}}

  - : Die Schnittstelle, über die die Anforderung an den Proxy-Server einging. Der Bezeichner kann sein:

    - ein verschleierter Bezeichner (wie "hidden" oder "secret"). Dies sollte als Standard behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit einem Port, wobei ipv6 in Anführungszeichen gesetzt und in eckige Klammern eingeschlossen ist)
    - "unknown", wenn die vorhergehende Einheit nicht bekannt ist (und Sie dennoch anzeigen möchten, dass die Weiterleitung der Anforderung erfolgte)

- `for` {{optional_inline}}
  - : Der Client, der die Anforderung initiiert hat, und nachfolgende Proxys in einer Proxy-Kette. Der Bezeichner hat die gleichen möglichen Werte wie die `by`-Direktive.
- `host` {{optional_inline}}
  - : Das {{HTTPHeader("Host")}}-Anforderungsheaderfeld, wie es vom Proxy empfangen wurde.
- `proto` {{optional_inline}}
  - : Gibt an, welches Protokoll verwendet wurde, um die Anforderung zu stellen (typischerweise "http" oder "https").

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

Wenn Ihre Anwendung, Ihr Server oder Ihr Proxy den standardisierten `Forwarded`-Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}}-Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse in `Forwarded` in Anführungszeichen gesetzt und in eckige Klammern eingeschlossen ist (im Gegensatz zum {{HTTPHeader("X-Forwarded-For")}}-Header).

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
- {{HTTPHeader("Via")}} – gibt Informationen über den Proxy selbst, nicht über den Client, der damit verbunden ist.
