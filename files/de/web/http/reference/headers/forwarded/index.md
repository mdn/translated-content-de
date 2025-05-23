---
title: Forwarded header
short-title: Forwarded
slug: Web/HTTP/Reference/Headers/Forwarded
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Forwarded`**-{{Glossary("request_header", "Request-Header")}} enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling) (Load Balancer, CDNs, usw.) hinzugefügt werden können und die sonst verändert oder verloren gehen würden, wenn Proxy-Server am Pfad der Anfrage beteiligt sind.

Zum Beispiel, wenn ein Client über einen HTTP-Proxy (oder Load Balancer) mit einem Webserver verbunden ist, werden in den Serverprotokollen nur die IP-Adresse, die Host-Adresse und das Protokoll des Proxys enthalten sein; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren. Der Header ist optional und kann von jedem der Proxy-Server auf dem Pfad zum Server hinzugefügt, geändert oder entfernt werden.

Dieser Header wird für Debugging, Statistiken und die Erstellung von standortabhängigen Inhalten verwendet. Er legt absichtlich datenschutzrelevante Informationen offen, wie z.B. die IP-Adresse des Clients. Daher muss der Datenschutz des Nutzers berücksichtigt werden, wenn dieser Header verwendet wird.

Die alternativen und de-facto Standardversionen dieses Headers sind die {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}} Header.

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

Die Syntax für den Forwarding-Header eines einzelnen Proxys wird unten gezeigt. Direktiven sind `key=value`-Paare, getrennt durch ein Semikolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Wenn es mehrere Proxy-Server zwischen dem Client und dem Server gibt, können diese jeweils ihre eigenen Weiterleitungsinformationen angeben. Dies kann durch Hinzufügen eines neuen `Forwarded`-Headers am Ende des Header-Blocks oder durch Anhängen der Informationen an das Ende des letzten `Forwarded`-Headers in einer durch Kommas getrennten Liste erfolgen.

## Direktiven

- `by` {{optional_inline}}

  - : Die Schnittstelle, über die die Anfrage in den Proxy-Server einging.
    Der Bezeichner kann sein:

    - ein verschlüsselter Bezeichner (wie "hidden" oder "secret").
      Dies sollte als Standard behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit Port, und ipv6 in Anführungszeichen und in eckigen Klammern eingeschlossen)
    - "unknown", wenn die vorherige Entität nicht bekannt ist (und Sie trotzdem darauf hinweisen möchten, dass eine Weiterleitung der Anfrage erfolgt ist)

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage initiiert hat und nachfolgende Proxys in einer Kette von Proxys.
    Der Bezeichner hat die gleichen möglichen Werte wie die `by`-Direktive.
- `host` {{optional_inline}}
  - : Das {{HTTPHeader("Host")}}-Request-Header-Feld, wie es vom Proxy empfangen wurde.
- `proto` {{optional_inline}}
  - : Gibt an, welches Protokoll verwendet wurde, um die Anfrage zu stellen (in der Regel "http" oder "https").

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

Wenn Ihre Anwendung, Ihr Server oder Ihr Proxy den standardisierten `Forwarded`-Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}}-Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse in `Forwarded` in Anführungszeichen gesetzt und in eckigen Klammern eingeschlossen wird (im Gegensatz zum {{HTTPHeader("X-Forwarded-For")}}-Header).

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
- {{HTTPHeader("Via")}} – bietet Informationen über den Proxy selbst, nicht über den Client, der ihn verbindet.
