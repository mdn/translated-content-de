---
title: Upgrade
slug: Web/HTTP/Reference/Headers/Upgrade
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP `Upgrade` [Anforderungs]-(/de/docs/Glossary/request_header) und {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) zu aktualisieren.
Beispielsweise kann ein Client ihn verwenden, um eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf eine WebSocket-Verbindung aufzurüsten.

> [!WARNING]
> HTTP/2 verbietet ausdrücklich die Verwendung dieses Mechanismus und Headers; er ist spezifisch für HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von einem oder mehreren Protokollen:

```http
Upgrade: <protocol>[/<protocol_version>]
Upgrade: <protocol>[/<protocol_version>], …, <protocolN>[/<protocol_versionN>]
```

## Direktiven

- `<protocol>`
  - : Protokolle werden aufgelistet, durch Kommas getrennt, in absteigender Präferenzreihenfolge.
- `<protocol_version>` {{optional_inline}}
  - : Eine optionale Protokollversion kann mit einem `/` Schrägstrich vorangestellt werden.

## Beschreibung

Das `Upgrade`-Header-Feld kann von Clients verwendet werden, um einen Server einzuladen, zu einem (oder mehreren) der aufgelisteten Protokolle zu wechseln, in absteigender Präferenzreihenfolge.
Zum Beispiel könnte der Client eine `GET`-Anfrage senden, wie gezeigt, mit den aufgelisteten bevorzugten Protokollen, zu denen gewechselt werden soll (in diesem Fall `example/1` und `foo/2`):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> [!NOTE]
> Der {{HTTPHeader("Connection")}}-Header mit dem Typ `upgrade` muss _immer_ zusammen mit dem `Upgrade`-Header gesendet werden.

Der Server kann die Anfrage aus beliebigem Grund ignorieren, in diesem Fall sollte er antworten, als ob der `Upgrade`-Header nicht gesendet worden wäre (zum Beispiel mit einem {{HTTPStatus(200, "200 OK")}}).
Wenn der Server die Verbindung upgraden wird, muss er:

1. Einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem `Upgrade`-Header zurücksenden, der das/die Protokoll(e) angibt, zu dem/denen gewechselt wird. Zum Beispiel:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Eine Antwort auf die ursprüngliche Anfrage _unter Verwendung des neuen Protokolls_ senden (der Server darf nur auf ein Protokoll wechseln, mit dem er die ursprüngliche Anfrage abschließen kann).

Ein Server kann den Header auch als Teil einer {{HTTPStatus("426")}} `Upgrade Required`-Antwort senden, um anzuzeigen, dass der Server die Anfrage nicht mit dem aktuellen Protokoll ausführen wird, dies aber möglicherweise tun könnte, wenn das Protokoll geändert wird. Der Client kann dann einen Protokollwechsel anhand des oben beschriebenen Prozesses anfordern.

Weitere Details und Beispiele finden Sie im Thema [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism).

## Beispiele

### Upgrade-Header mit mehreren Protokollen

Die folgende Anfrage listet mehrere Protokolle in absteigender Präferenz auf:

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### Auf WebSocket upgraden

Dies ist eine gebräuchliche Kombination von Headers, um mit dem Upgrade einer HTTP-Verbindung auf WebSockets zu beginnen.
Weitere Informationen finden Sie unter [Upgrade zu einer WebSocket-Verbindung](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#upgrading_to_a_websocket_connection).

```http
Connection: Upgrade
Upgrade: websocket
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- {{HTTPStatus(101, "101 Switching Protocols")}}
- {{HTTPStatus(426, "426 Upgrade Required")}}
- {{HTTPHeader("Connection")}}
