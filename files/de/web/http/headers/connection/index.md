---
title: Verbindung
slug: Web/HTTP/Headers/Connection
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

Der **`Connection`** Allgemein-Header steuert, ob die Netzwerkverbindung offen bleibt, nachdem die aktuelle Transaktion beendet ist. Wenn der gesendete Wert `keep-alive` lautet, bleibt die Verbindung bestehen und wird nicht geschlossen, was es ermöglicht, nachfolgende Anfragen an denselben Server zu senden.

> [!WARNING]
> Verbindungs-spezifische Header-Felder wie `Connection` und {{HTTPHeader("Keep-Alive")}} sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten. Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari hält sich an die HTTP/2-Spezifikationsanforderungen und lädt keine Antwort, die sie enthält.

Alle [Hop-by-hop-Header](/de/docs/Web/HTTP/Compression#hop-by-hop_compression), die von der Nachricht verwendet werden - einschließlich standardmäßiger Hop-by-hop-Header ({{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, `Connection`, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}} und {{HTTPHeader("Proxy-Authenticate")}}) - müssen im `Connection`-Header aufgelistet werden, sodass der erste Proxy weiß, dass er sie konsumieren und nicht weiterleiten soll.

Der Standardwert von `Connection` hat sich zwischen HTTP/1.0 und HTTP/1.1 geändert. Daher senden Browser oft `Connection: keep-alive` explizit, um die Abwärtskompatibilität zu gewährleisten, obwohl dies in HTTP/1.1 der Standard ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
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
  - : Gibt an, dass entweder der Client oder der Server die Verbindung schließen möchte. Dies ist der Standard bei HTTP/1.0-Anfragen.
- jede durch Kommas getrennte Liste von HTTP-Headern \[Üblicherweise nur `keep-alive`]
  - : Gibt an, dass der Client die Verbindung offen halten möchte. Das Offenhalten einer Verbindung ist der Standard bei HTTP/1.1-Anfragen. Die Liste der Header sind die Namen der Header, die vom ersten nicht transparenten Proxy oder Cache entfernt werden sollen: Diese Header definieren die Verbindung zwischen dem Absender und der ersten Entität, nicht dem Zielknoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
