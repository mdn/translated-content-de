---
title: Upgrade
slug: Web/HTTP/Headers/Upgrade
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der HTTP 1.1 (nur) `Upgrade`-Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über das gleiche Transportprotokoll) zu upgraden. Zum Beispiel kann ein Client eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- bzw. HTTPS-Verbindung in einen WebSocket aufrüsten.

> [!WARNING]
> HTTP/2 verbietet ausdrücklich die Verwendung dieses Mechanismus/Headers; es ist spezifisch für HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        [Response-Header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Überblick

Das `Upgrade`-Headerfeld kann von Clients verwendet werden, um einen Server einzuladen, zu einem oder mehreren der aufgeführten Protokolle in absteigender Präferenzreihenfolge zu wechseln.

Zum Beispiel könnte der Client eine `GET`-Anfrage wie gezeigt senden und die bevorzugten Protokolle zur Umstellung auflisten (in diesem Fall "example/1" und "foo/2"):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> **Hinweis:** `Connection: upgrade` muss gesetzt sein, wann immer `Upgrade` gesendet wird.

Der Server kann die Anfrage aus beliebigen Gründen ignorieren und sollte dann so antworten, als wäre der `Upgrade`-Header nicht gesendet worden (zum Beispiel mit einem {{HTTPStatus(200, "200 OK")}}).

Wenn der Server entscheidet, die Verbindung zu upgraden, muss er:

1. Einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem `Upgrade`-Header zurückschicken, der das oder die Protokolle angibt, zu denen gewechselt wird. Zum Beispiel:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Eine Antwort auf die ursprüngliche Anfrage _mit dem neuen Protokoll_ senden (der Server darf nur zu einem Protokoll wechseln, mit dem er die ursprüngliche Anfrage abschließen kann).

Ein Server kann auch den Header als Teil einer {{HTTPStatus("426")}} `Upgrade Required`-Antwort senden, um anzuzeigen, dass der Server die Anfrage nicht mit dem aktuellen Protokoll ausführen wird, dies aber möglicherweise tut, wenn das Protokoll geändert wird. Der Client kann dann einen Protokollwechsel wie oben beschrieben anfordern.

Weitere Details und Beispiele finden Sie im Thema [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Syntax

```http
Connection: upgrade
Upgrade: protocol_name[/protocol_version]
```

Anmerkungen:

- Der {{HTTPHeader("Connection")}}-Header mit dem Typ `upgrade` muss _immer_ mit dem `Upgrade`-Header gesendet werden (wie oben gezeigt).
- Protokolle werden kommasepariert in absteigender Präferenzreihenfolge aufgeführt. Die Protokollversion ist optional. Zum Beispiel:

```http
Connection: upgrade
Upgrade: a_protocol/1, example, another_protocol/2.2
```

## Direktiven

- jede kommaseparierte Liste von Protokollnamen (jeweils mit optionaler Protokollversion)
  - : Ein oder mehrere Protokollnamen mit optionaler Version ("/"-getrennt). Die Protokolle werden in absteigender Präferenzreihenfolge aufgelistet.

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
