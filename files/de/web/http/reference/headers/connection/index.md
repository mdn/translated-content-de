---
title: Connection header
short-title: Connection
slug: Web/HTTP/Reference/Headers/Connection
l10n:
  sourceCommit: 0e40ec22841891d42376ad8a6d29135953c5106c
---

Der HTTP-**`Connection`**-Header steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
Wenn der gesendete Wert `keep-alive` ist, bleibt die Verbindung bestehen und wird nicht geschlossen, was nachfolgende Anfragen an denselben Server auf derselben Verbindung ermöglicht.

> [!WARNING]
> Verbindungspezifische Header-Felder wie `Connection` und {{HTTPHeader("Keep-Alive")}} sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten.
> Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari hält sich an die Anforderungen der HTTP/2-Spezifikation und lädt keine Antworten, die sie enthalten.

Alle Hop-by-Hop-Header, einschließlich der standardmäßigen [Hop-by-Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) Header ({{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, `Connection`, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}}, und {{HTTPHeader("Proxy-Authenticate")}}) müssen im `Connection`-Header aufgelistet werden, damit der erste Proxy weiß, dass er sie konsumieren und nicht weiterleiten soll.

Der Standardwert von `Connection` änderte sich zwischen HTTP/1.0 und HTTP/1.1.
Um die Rückwärtskompatibilität zu gewährleisten, senden Browser oft ausdrücklich `Connection: keep-alive`, obwohl es der Standard in HTTP/1.1 ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request header")}},
        {{Glossary("Response_header", "Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Connection: keep-alive
Connection: close
```

## Direktiven

- `close`
  - : Gibt an, dass entweder der Client oder der Server die Verbindung schließen möchte.
    Dies ist der Standard bei HTTP/1.0-Anfragen.
- eine beliebige durch Kommas getrennte Liste von HTTP-Headern (üblicherweise nur `keep-alive`)
  - : Gibt an, dass der Client die Verbindung offen halten möchte. Das Offenhalten einer Verbindung ist der Standard bei HTTP/1.1-Anfragen.
    Die Liste der Header sind die Namen der Header, die vom ersten nicht-transparenten Proxy oder Cache dazwischen entfernt werden sollen: Diese Header definieren die Verbindung zwischen dem Absender und der ersten Instanz, nicht den Zielknoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
