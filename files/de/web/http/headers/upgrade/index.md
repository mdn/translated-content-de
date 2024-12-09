---
title: Upgrade
slug: Web/HTTP/Headers/Upgrade
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP `Upgrade`-{{Glossary("request_header", "Anfrage")}} und {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um eine bereits bestehende Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Zum Beispiel kann ein Client damit eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf eine WebSocket-Verbindung upgraden.

> [!WARNING]
> HTTP/2 verbietet ausdrücklich die Verwendung dieses Mechanismus und Headers; es ist spezifisch für HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Protokolle werden in absteigender Präferenz aufgelistet und durch Kommas getrennt.
- `<protocol_version>` {{optional_inline}}
  - : Eine optionale Protokollversion kann angegeben werden, vorangestellt durch einen Schrägstrich `/`.

## Beschreibung

Das `Upgrade`-Header-Feld kann von Clients verwendet werden, um einen Server einzuladen, zu einem (oder mehreren) der aufgelisteten Protokolle in absteigender Präferenzordnung zu wechseln. Zum Beispiel könnte der Client eine `GET`-Anfrage senden, wie gezeigt, und die bevorzugten Protokolle angeben, zu denen gewechselt werden soll (in diesem Fall `example/1` und `foo/2`):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> [!NOTE]
> Der {{HTTPHeader("Connection")}}-Header mit Typ `upgrade` muss _immer_ mit dem `Upgrade`-Header gesendet werden.

Der Server kann die Anfrage aus irgendeinem Grund ignorieren, in diesem Fall sollte er antworten, als wäre der `Upgrade`-Header nicht gesendet worden (zum Beispiel mit einem {{HTTPStatus(200, "200 OK")}}). Wenn der Server die Verbindung upgraden möchte, muss er:

1. Einen {{HTTPStatus(101, "101 Switching Protocols")}} Antwortstatus mit einem `Upgrade`-Header zurücksenden, der die Protokolle angibt, zu denen gewechselt wird. Zum Beispiel:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Eine Antwort auf die ursprüngliche Anfrage _unter Verwendung des neuen Protokolls_ senden (der Server kann nur zu einem Protokoll wechseln, mit dem er die ursprüngliche Anfrage abschließen kann).

Ein Server kann den Header auch als Teil einer {{HTTPStatus("426")}} `Upgrade Required`-Antwort senden, um anzuzeigen, dass der Server die Anfrage nicht mit dem aktuellen Protokoll ausführen wird, aber dies möglicherweise tut, wenn das Protokoll geändert wird. Der Client kann dann eine Protokolländerung mit dem oben beschriebenen Prozess anfordern.

Mehr Details und Beispiele finden Sie im Thema [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Beispiele

### Upgrade-Header mit mehreren Protokollen

Die folgende Anfrage listet mehrere Protokolle in absteigender Präferenz auf:

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### Upgrade zu WebSocket

Dies ist eine häufige Kombination von Headern, um mit dem Upgrade einer HTTP-Verbindung zu WebSockets zu beginnen. Weitere Informationen finden Sie unter [Upgrade zu einer WebSocket-Verbindung](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#upgrading_to_a_websocket_connection).

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
- {{HTTPStatus(101, "101 Switching Protocols")}}
- {{HTTPStatus(426, "426 Upgrade Required")}}
- {{HTTPHeader("Connection")}}
