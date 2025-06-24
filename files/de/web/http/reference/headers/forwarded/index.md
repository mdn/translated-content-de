---
title: Forwarded header
short-title: Forwarded
slug: Web/HTTP/Reference/Headers/Forwarded
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP **`Forwarded`** {{Glossary("request_header", "Anforderungs-Header")}} enthält Informationen, die möglicherweise von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling) (Load-Balancer, CDNs usw.) hinzugefügt werden, die andernfalls verändert oder verloren gehen würden, wenn Proxy-Server im Pfad der Anforderung beteiligt sind.

Zum Beispiel, wenn ein Client über einen HTTP-Proxy (oder Load-Balancer) mit einem Webserver verbunden ist, enthalten die Server-Logs nur die IP-Adresse, Host-Adresse und das Protokoll des Proxys; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren. Der Header ist optional und kann von jedem der Proxy-Server auf dem Weg zum Server hinzugefügt, modifiziert oder entfernt werden.

Dieser Header wird für Debugging, Statistiken und die Generierung von standortabhängigen Inhalten verwendet. Aufgrund seines Designs exponiert er sensible Daten, wie beispielsweise die IP-Adresse des Clients. Daher muss der Datenschutz des Benutzers berücksichtigt werden, wenn dieser Header verwendet wird.

Die alternativen und de-facto Standard-Versionen dieses Headers sind die Header {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax für den Forwarding-Header von einem einzelnen Proxy wird unten gezeigt. Direktiven sind `key=value` Paare, getrennt durch Semikolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Wenn es mehrere Proxy-Server zwischen dem Client und Server gibt, können sie jeweils ihre eigenen Weiterleitungsinformationen angeben. Dies kann durch Hinzufügen eines neuen `Forwarded`-Headers am Ende des Header-Blocks oder durch Anfügen der Informationen am Ende des letzten `Forwarded`-Headers in einer komma-separierten Liste geschehen.

## Direktiven

- `by` {{optional_inline}}

  - : Die Schnittstelle, über die die Anfrage beim Proxy-Server einging.
    Die Kennung kann sein:
    - ein verschleierter Bezeichner (wie "hidden" oder "secret").
      Dies sollte als Standard behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit einem Port, und ipv6 zitiert und in eckigen Klammern eingeschlossen)
    - "unknown", wenn die vorhergehende Entität nicht bekannt ist (und Sie dennoch angeben möchten, dass die Weiterleitung der Anfrage durchgeführt wurde)

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage initiiert hat und die nachfolgenden Proxys in einer Kette von Proxys.
    Die Kennung hat die gleichen möglichen Werte wie die `by`-Directive.
- `host` {{optional_inline}}
  - : Das {{HTTPHeader("Host")}}-Anforderungs-Headerfeld, wie es vom Proxy empfangen wurde.
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

Wenn Ihre Anwendung, Ihr Server oder Proxy den standardisierten `Forwarded`-Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}}-Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse in `Forwarded` zitiert und in eckige Klammern eingefasst wird (anders als im {{HTTPHeader("X-Forwarded-For")}}-Header).

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
