---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Forwarded`** {{Glossary("request_header", "Request-Header")}} enthält Informationen, die von [Reverse-Proxy-Servern](/de/docs/Web/HTTP/Proxy_servers_and_tunneling) (Load Balancer, CDNs usw.) hinzugefügt werden können, die ansonsten verändert oder verloren gehen würden, wenn Proxy-Server im Pfad der Anfrage beteiligt sind.

Zum Beispiel, wenn ein Client über einen HTTP-Proxy (oder Load Balancer) auf einen Webserver zugreift, enthalten die Server-Logs nur die IP-Adresse, Host-Adresse und Protokoll des Proxys; dieser Header kann verwendet werden, um die IP-Adresse, den Host und das Protokoll der ursprünglichen Anfrage zu identifizieren. Der Header ist optional und kann von jedem der Proxy-Server auf dem Weg zum Server hinzugefügt, modifiziert oder entfernt werden.

Dieser Header wird für Debugging, Statistik und das Erzeugen von ortsabhängigem Inhalt verwendet. Er exponiert absichtlich datenschutzsensible Informationen, wie z.B. die IP-Adresse des Clients. Daher muss der Datenschutz der Nutzer beim Verwenden dieses Headers beachtet werden.

Die alternativen und de-facto Standardversionen dieses Headers sind die {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} und {{HTTPHeader("X-Forwarded-Proto")}} Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Die Syntax für den Weiterleitungs-Header von einem einzelnen Proxy ist unten gezeigt. Direktiven sind `key=value` Paare, getrennt durch ein Semikolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Wenn mehrere Proxy-Server zwischen Client und Server vorhanden sind, kann jeder seine eigene Weiterleitungsinformation angeben. Dies kann durch Hinzufügen eines neuen `Forwarded` Headers am Ende des Header-Blocks oder durch Anhängen der Informationen am Ende des letzten `Forwarded` Headers in einer durch Kommas getrennten Liste geschehen.

## Direktiven

- `by` {{optional_inline}}

  - : Die Schnittstelle, an der die Anfrage beim Proxy-Server einging. Der Bezeichner kann sein:

    - ein obfuskierter Bezeichner (wie "hidden" oder "secret").
      Dies sollte standardmäßig verwendet werden.
    - eine IP-Adresse (v4 oder v6, optional mit Port, und ipv6 in Anführungszeichen und in eckigen Klammern)
    - "unknown", wenn die vorhergehende Entität nicht bekannt ist (und Sie trotzdem anzeigen möchten, dass eine Weiterleitung der Anfrage stattgefunden hat)

- `for` {{optional_inline}}
  - : Der Client, der die Anfrage und nachfolgende Proxies in einer Kette von Proxies initiiert hat. Der Bezeichner hat die gleichen möglichen Werte wie die `by` Direktive.
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

Wenn Ihre Anwendung, Ihr Server oder Proxy den standardisierten `Forwarded` Header unterstützt, kann der {{HTTPHeader("X-Forwarded-For")}} Header ersetzt werden. Beachten Sie, dass eine IPv6-Adresse im `Forwarded` Header in Anführungszeichen und in eckigen Klammern eingeschlossen ist (anders als im {{HTTPHeader("X-Forwarded-For")}} Header).

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
