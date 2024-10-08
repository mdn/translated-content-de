---
title: Upgrade
slug: Web/HTTP/Headers/Upgrade
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der HTTP 1.1 (nur) `Upgrade`-Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung zu einem anderen Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Zum Beispiel kann ein Client damit eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- bzw. HTTPS-Verbindung in einen WebSocket upgraden.

> [!WARNING]
> HTTP/2 untersagt ausdrücklich die Verwendung dieses Mechanismus/Headers; er ist spezifisch für HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Übersicht

Der `Upgrade`-Header kann von Clients verwendet werden, um einen Server einzuladen, zu einem (oder mehreren) der aufgelisteten Protokolle zu wechseln, in absteigender Reihenfolge der Präferenz.

Beispielsweise könnte der Client eine `GET`-Anfrage wie gezeigt senden und die bevorzugten Protokolle, zu denen gewechselt werden soll, angeben (in diesem Fall „example/1“ und „foo/2“):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> **Hinweis:** `Connection: upgrade` muss gesetzt werden, wann immer `Upgrade` gesendet wird.

Der Server kann die Anfrage aus beliebigem Grund ignorieren, in welchem Fall er einfach so antworten sollte, als wäre der `Upgrade`-Header nicht gesendet worden (zum Beispiel mit einem {{HTTPStatus(200, "200 OK")}}).

Wenn der Server sich entscheidet, die Verbindung zu aktualisieren, muss er:

1. Einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem `Upgrade`-Header senden, der das oder die Protokolle angibt, zu denen gewechselt wird. Zum Beispiel:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Eine Antwort auf die ursprüngliche Anfrage _unter Verwendung des neuen Protokolls_ senden (der Server darf nur zu einem Protokoll wechseln, mit dem er die ursprüngliche Anfrage abschließen kann).

Ein Server kann den Header auch als Teil einer {{HTTPStatus("426")}} `Upgrade Required`-Antwort senden, um anzuzeigen, dass der Server die Anfrage mit dem aktuellen Protokoll nicht ausführen wird, dies jedoch möglicherweise tut, wenn das Protokoll geändert wird. Der Client kann dann einen Protokollwechsel mit dem oben beschriebenen Prozess anfordern.

Weitere Details und Beispiele finden Sie im Thema [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Syntax

```http
Connection: upgrade
Upgrade: protocol_name[/protocol_version]
```

Anmerkungen:

- Der {{HTTPHeader("Connection")}}-Header mit dem Typ `upgrade` muss _immer_ zusammen mit dem `Upgrade`-Header gesendet werden (wie oben gezeigt).
- Protokolle werden kommasepariert in absteigender Präferenz aufgelistet. Die Protokollversion ist optional. Zum Beispiel:

```http
Connection: upgrade
Upgrade: a_protocol/1, example, another_protocol/2.2
```

## Direktiven

- jede kommaseparierte Liste von Protokollnamen (jeweils mit optionaler Protokollversion)
  - : Ein oder mehrere Protokollnamen mit optionaler Version (durch "/" getrennt). Die Protokolle sind in absteigender Präferenzreihenfolge aufgeführt.

## Beispiele

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

```http
Connection: Upgrade
Upgrade: websocket
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
- {{HTTPStatus("101")}} `Switching Protocol`
- {{HTTPStatus("426")}} `Upgrade Required`
- {{HTTPHeader("Connection")}}
