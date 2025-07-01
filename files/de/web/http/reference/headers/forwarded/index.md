---
title: Forwarded header
short-title: Forwarded
slug: Web/HTTP/Reference/Headers/Forwarded
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}

Der HTTP-**`Forwarded`**-{{Glossary("request_header", "Anforderungsheader")}} enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling) (Load-Balancer, CDNs usw.) hinzugefügt werden können und ansonsten verändert oder verloren gehen würden, wenn Proxy-Server am Pfad der Anforderung beteiligt sind.

Wenn ein Client beispielsweise über einen HTTP-Proxy (oder Load-Balancer) auf einen Webserver zugreift, enthalten die Serverprotokolle nur die IP-Adresse, die Host-Adresse und das Protokoll des Proxys; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren. Der Header ist optional und kann von jedem Proxy-Server auf dem Weg zum Server hinzugefügt, modifiziert oder entfernt werden.

Dieser Header wird für Debugging, Statistiken und die Erstellung von standortabhängigem Inhalt verwendet. Er gibt bewusst datenschutzrelevante Informationen preis, wie die IP-Adresse des Clients. Daher muss der Datenschutz der Benutzer berücksichtigt werden, wenn dieser Header verwendet wird.

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

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Direktiven sind `key=value`-Paare, die durch Semikolons getrennt sind.

Wenn sich zwischen dem Client und dem Server mehrere Proxy-Server befinden, können diese jeweils ihre eigenen Weiterleitungsinformationen angeben. Dies kann durch Hinzufügen eines neuen `Forwarded`-Headers am Ende des Header-Blocks erfolgen oder indem die Informationen am Ende des letzten `Forwarded`-Headers in einer kommagetrennten Liste angehängt werden.

## Direktiven

- `by` {{optional_inline}}
  - : Die Schnittstelle, über die die Anfrage beim Proxy-Server eingegangen ist.
    Der Bezeichner kann sein:
    - ein verschlüsselter Bezeichner (wie "hidden" oder "secret").
      Dies sollte als Standard behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit Port, und ipv6 in Anführungszeichen und in eckigen Klammern)
    - "unknown", wenn die vorhergehende Entität nicht bekannt ist (und Sie dennoch angeben möchten, dass die Weiterleitung der Anfrage erfolgt ist)

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage initiiert hat, und nachfolgende Proxys in einer Kette von Proxys.
    Der Bezeichner hat die gleichen möglichen Werte wie die `by`-Direktive.
- `host` {{optional_inline}}
  - : Das {{HTTPHeader("Host")}} Anfrage-Headerfeld, wie es vom Proxy empfangen wurde.
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

Wenn Ihre Anwendung, Ihr Server oder Ihr Proxy den standardisierten `Forwarded`-Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}}-Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse im `Forwarded`-Header in Anführungszeichen steht und in eckige Klammern gesetzt wird (im Gegensatz zum {{HTTPHeader("X-Forwarded-For")}}-Header).

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
