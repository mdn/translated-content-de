---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP-**`Forwarded`**-{{Glossary("request_header", "Anforderungsheader")}} enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Proxy_servers_and_tunneling) (Load Balancer, CDNs, etc.) hinzugefügt werden können und andernfalls geändert oder verloren gehen würden, wenn Proxy-Server im Pfad der Anforderung involviert sind.

Wenn zum Beispiel ein Client über einen HTTP-Proxy (oder Load Balancer) mit einem Webserver verbunden ist, enthalten die Serverprotokolle nur die IP-Adresse, Host-Adresse und das Protokoll des Proxys. Dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anforderung zu identifizieren. Der Header ist optional und kann von jedem der Proxy-Server auf dem Weg zum Server hinzugefügt, geändert oder entfernt werden.

Dieser Header wird für Debugging, Statistiken und die Generierung standortabhängiger Inhalte verwendet. Designbedingt werden dabei datenschutzsensible Informationen offengelegt, wie z.B. die IP-Adresse des Clients. Daher sollte der Datenschutz des Nutzers berücksichtigt werden, wenn dieser Header eingesetzt wird.

Die alternativen und De-facto-Standardversionen dieses Headers sind die {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}} Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Nicht erlaubter Headername")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax des Weiterleitungsheaders von einem einzelnen Proxy wird unten gezeigt. Direktiven sind `key=value`-Paare, getrennt durch ein Semikolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Gibt es mehrere Proxy-Server zwischen dem Client und dem Server, können sie jeweils ihre eigenen Weiterleitungsinformationen angeben. Dies kann geschehen, indem ein neuer `Forwarded`-Header an das Ende des Headerblocks angehängt oder die Informationen am Ende des letzten `Forwarded`-Headers in eine durch Kommas getrennte Liste hinzugefügt werden.

## Direktiven

- `by` {{optional_inline}}

  - : Die Schnittstelle, über die die Anforderung beim Proxy-Server eingetroffen ist. Der Bezeichner kann sein:

    - ein verschleierter Bezeichner (wie "hidden" oder "secret").
      Dies sollte als Standard behandelt werden.
    - eine IP-Adresse (v4 oder v6, optional mit einem Port, wobei ipv6 in Anführungszeichen und in eckige Klammern gesetzt wird)
    - "unknown", wenn die vorhergehende Einheit nicht bekannt ist (und Sie trotzdem angeben möchten, dass die Weiterleitung der Anforderung erfolgt ist)

- `for` {{optional_inline}}
  - : Der Client, der die Anforderung initiiert hat und nachfolgende Proxys in einer Kette von Proxys. Der Bezeichner hat die gleichen möglichen Werte wie die `by`-Direktive.
- `host` {{optional_inline}}
  - : Das {{HTTPHeader("Host")}}-Anforderungsheaderfeld, wie es vom Proxy empfangen wurde.
- `proto` {{optional_inline}}
  - : Gibt an, welches Protokoll verwendet wurde, um die Anforderung zu stellen (typischerweise "http" oder "https").

## Beispiele

### Verwenden des `Forwarded`-Headers

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

Wenn Ihre Anwendung, Ihr Server oder Ihr Proxy den standardisierten `Forwarded`-Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}}-Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse in `Forwarded` in Anführungszeichen gesetzt und in eckige Klammern eingeschlossen wird (anders als im {{HTTPHeader("X-Forwarded-For")}}-Header).

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
- {{HTTPHeader("Via")}} – liefert Informationen über den Proxy selbst, nicht über den Client, der sich mit ihm verbindet.
