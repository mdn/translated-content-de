---
title: Upgrade header
short-title: Upgrade
slug: Web/HTTP/Reference/Headers/Upgrade
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}

Der HTTP `Upgrade`-{{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} kann verwendet werden, um eine bereits hergestellte Client/Server-Verbindung zu einem anderen Protokoll (über dasselbe Transportprotokoll) aufzurüsten.
Zum Beispiel kann ein Client ihn verwenden, um eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf eine WebSocket-Verbindung aufzurüsten.

> [!WARNING]
> HTTP/2 verbietet ausdrücklich die Verwendung dieses Mechanismus und Headers; er ist spezifisch für HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Upgrade: <protocol>[/<protocol_version>]
Upgrade: <protocol>[/<protocol_version>], …, <protocolN>[/<protocol_versionN>]
```

## Direktiven

- `<protocol>`
  - : Protokolle werden kommasepariert in absteigender Präferenzreihenfolge aufgelistet.
- `<protocol_version>` {{optional_inline}}
  - : Eine optionale Protokollversion kann mit einem `/`-Schrägstrich vorangestellt werden.

## Beschreibung

Das `Upgrade`-Header-Feld kann von Clients verwendet werden, um einen Server einzuladen, zu einem (oder mehreren) der aufgelisteten Protokolle zu wechseln, in absteigender Präferenzreihenfolge.
Zum Beispiel könnte der Client eine `GET`-Anfrage wie gezeigt senden und die bevorzugten Protokolle zum Wechsel auflisten (in diesem Fall `example/1` und `foo/2`):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> [!NOTE]
> Der {{HTTPHeader("Connection")}}-Header mit Typ `upgrade` muss _immer_ mit dem `Upgrade`-Header gesendet werden.

Der Server kann die Anfrage aus irgendeinem Grund ignorieren, in welchem Fall er antworten sollte, als wäre der `Upgrade`-Header nicht gesendet worden (zum Beispiel mit einem {{HTTPStatus(200, "200 OK")}}).
Wenn der Server die Verbindung aufrüstet, muss er:

1. Einen {{HTTPStatus(101, "101 Switching Protocols")}}-Response-Status mit einem `Upgrade`-Header zurücksenden, der das Protokoll bzw. die Protokolle spezifiziert, zu denen gewechselt wird. Zum Beispiel:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Eine Antwort auf die ursprüngliche Anfrage _unter Verwendung des neuen Protokolls_ senden (der Server darf nur zu einem Protokoll wechseln, mit dem er die ursprüngliche Anfrage abschließen kann).

Ein Server kann den Header auch als Teil einer {{HTTPStatus("426")}} `Upgrade Required`-Antwort senden, um anzuzeigen, dass der Server die Anfrage mit dem aktuellen Protokoll nicht ausführen wird, dies aber möglicherweise tut, wenn das Protokoll geändert wird. Der Client kann dann eine Protokolländerung mit dem oben beschriebenen Prozess anfordern.

Mehr Details und Beispiele finden Sie im Thema [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism).

## Beispiele

### Upgrade-Header mit mehreren Protokollen

Die folgende Anfrage listet mehrere Protokolle in absteigender Präferenz auf:

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### Aufrüstung zu WebSocket

Dies ist eine gängige Kombination von Headern, um eine HTTP-Verbindung zu WebSockets aufzurüsten.
Weitere Informationen finden Sie unter [Aufrüstung zu einer WebSocket-Verbindung](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#upgrading_to_a_websocket_connection).

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
