---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{HTTPSidebar}}

Der **`Forwarded`**-Anfrage-Header enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Proxy_servers_and_tunneling) (Load Balancers, CDNs usw.) hinzugefügt werden können, die andernfalls geändert oder verloren gehen würden, wenn Proxy-Server im Pfad der Anfrage involviert sind.

Zum Beispiel, wenn ein Client über einen HTTP-Proxy (oder Load Balancer) mit einem Webserver verbunden ist, enthalten die Serverprotokolle nur die IP-Adresse, Hostadresse und das Protokoll des Proxys; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren. Der Header ist optional und kann von jedem Proxy-Server auf dem Weg zum Server hinzugefügt, geändert oder entfernt werden.

Dieser Header wird für Debugging, Statistiken und die Generierung von standortabhängigen Inhalten verwendet. Er legt von Natur aus sensible Informationen zur Privatsphäre offen, wie die IP-Adresse des Nutzers. Daher muss die Privatsphäre des Nutzers bei der Bereitstellung dieses Headers beachtet werden.

Die alternativen und de-facto-Standardversionen dieses Headers sind die Header {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax für den Weiterleitungsheader von einem einzelnen Proxy wird unten gezeigt. Direktiven sind `key=value`-Paare, getrennt durch ein Semikolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Wenn es mehrere Proxy-Server zwischen dem Client und dem Server gibt, kann jeder seine eigenen Weiterleitungsinformationen angeben. Dies kann geschehen, indem ein neuer `Forwarded`-Header am Ende des Headerblocks hinzugefügt wird oder indem die Informationen am Ende des letzten `Forwarded`-Headers in einer kommaseparierten Liste angehängt werden.

## Direktiven

- `by` {{optional_inline}}

  - : Die Schnittstelle, an der die Anfrage beim Proxy-Server eingegangen ist.
    Der Bezeichner kann sein:

    - ein verschlüsselter Bezeichner (wie "hidden" oder "secret").
      Dies sollte als Standard betrachtet werden.
    - eine IP-Adresse (v4 oder v6, optional mit einem Port, wobei ipv6 in Anführungszeichen und in eckigen Klammern eingeschlossen ist)
    - "unknown", wenn die vorhergehende Entität nicht bekannt ist (und Sie dennoch anzeigen möchten, dass eine Weiterleitung der Anfrage erfolgt ist)

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage initiiert hat, und nachfolgende Proxys in einer Proxy-Kette.
    Der Bezeichner hat die gleichen möglichen Werte wie die `by`-Direktive.
- `host` {{optional_inline}}
  - : Der {{HTTPHeader("Host")}}-Anfrage-Header-Feld, wie er vom Proxy empfangen wurde.
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

Wenn Ihre Anwendung, Ihr Server oder Ihr Proxy den standardisierten `Forwarded`-Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}}-Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse in `Forwarded` in Anführungszeichen und in eckigen Klammern eingeschlossen ist (anders als im {{HTTPHeader("X-Forwarded-For")}}-Header).

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
