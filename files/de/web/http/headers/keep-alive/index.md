---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP **`Keep-Alive`** {{Glossary("request_header", "Anfrage-")}} und {{Glossary("response_header", "Antwort-Header")}} ermöglicht es dem Absender, Hinweise zu geben, wie eine Verbindung in Bezug auf ein Timeout und eine maximale Anzahl von Anfragen genutzt werden kann.

> [!NOTE]
> Damit `Keep-Alive` Wirkung zeigt, muss die Nachricht auch einen {{HTTPHeader("Connection", "Connection: keep-alive")}} Header enthalten.

HTTP/1.0 schließt die Verbindung nach jedem Anfrage-/Antwort-Austausch standardmäßig, daher müssen persistente Verbindungen in HTTP/1.0 explizit ausgehandelt werden.
Einige Clients und Server möchten möglicherweise mit früheren Ansätzen für persistente Verbindungen kompatibel sein und können dies mit einem `Connection: keep-alive` Anfrage-Header tun.
Zusätzliche Parameter für die Verbindung können mit dem `Keep-Alive` Header angefordert werden.

> [!WARNING]
> Verbindungsspezifische Headerfelder wie {{HTTPHeader("Connection")}} und `Keep-Alive` sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten.
> Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari hält sich an die Anforderungen der HTTP/2-Spezifikation und lädt keine Antwort, die sie enthält.

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

```http
Keep-Alive: <parameters>
```

## Direktiven

- `<parameters>`
  - : Eine durch Komma getrennte Liste von Parametern, die jeweils aus einem Bezeichner und einem durch das Gleichheitszeichen (`=`) getrennten Wert bestehen.
    Die folgenden Bezeichner sind möglich:
    - `timeout`
      - : Eine ganze Zahl, die die Zeit in Sekunden angibt, die der Host eine inaktive Verbindung offen halten darf, bevor sie geschlossen wird.
        Eine Verbindung ist inaktiv, wenn kein Datenverkehr vom Host gesendet oder empfangen wird. Ein Host kann eine inaktive Verbindung länger als `timeout` Sekunden offen halten, aber der Host sollte versuchen, die Verbindung für mindestens `timeout` Sekunden zu behalten.
    - `max`
      - : Eine ganze Zahl, die die maximale Anzahl von Anfragen angibt, die über diese Verbindung gesendet werden können, bevor sie geschlossen wird.
        Sofern nicht `0`, wird dieser Wert bei nicht-überlappenden Verbindungen ignoriert, da eine weitere Anfrage mit der nächsten Antwort gesendet wird.
        Eine HTTP-Pipeline kann sie verwenden, um das Pipeln zu begrenzen.

## Beispiele

Eine Antwort, die einen `Keep-Alive` Header enthält:

```http
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=200
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Connection")}}
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
