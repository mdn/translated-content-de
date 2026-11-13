---
title: CONNECT request method
short-title: CONNECT
slug: Web/HTTP/Reference/Methods/CONNECT
l10n:
  sourceCommit: 98b1752bbde3987c1c445b038aa4a463dccff6b8
---

Die HTTP-Methode **`CONNECT`** fordert einen {{Glossary("Proxy_server", "Proxy")}} auf, einen HTTP-Tunnel zu einem Zielserver einzurichten. Ist dies erfolgreich, leitet der Proxy Daten in beide Richtungen unverändert weiter, bis der Tunnel geschlossen wird.
In HTTP/2 und HTTP/3 wird eine [erweiterte `CONNECT`-Anfrage](#erweitertes_connect) auch verwendet, um Protokolle wie WebSockets und WebTransport über einen HTTP-Stream auszuführen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cachebar")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        In <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a> zulässig
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
CONNECT <host>:<port> HTTP/1.1
```

- `<host>`
  - : Ein Host, der ein registrierter Hostname (z. B. `example.com`) oder eine IP-Adresse (IPv4, IPv6) sein kann.
- `<port>`
  - : Eine Portnummer in Dezimalschreibweise (z. B. `80`, `443`). Es gibt keinen Standardport; daher **muss** ein Client eine Portnummer angeben.

## Beschreibung

Das Anfrageziel ist bei dieser Methode insofern einzigartig, als es nur aus dem Host und der Portnummer des Tunnelziels besteht, getrennt durch einen Doppelpunkt (siehe [Syntax](#syntax)).
Jeder [erfolgreiche 2XX-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status#successful_responses) bedeutet, dass der Proxy in den „Tunnelmodus“ wechselt. Alle Daten im Body der erfolgreichen Antwort stammen dann von dem Server, der durch das Anfrageziel angegeben ist.

Wenn sich eine Website hinter einem Proxy befindet und Netzwerkregeln vorschreiben, dass der gesamte externe Datenverkehr über den Proxy laufen muss, können Sie mit der Methode `CONNECT` eine {{Glossary("TLS", "TLS")}}-Verbindung ({{Glossary("HTTPS", "HTTPS")}}) zu dieser Website herstellen:

- Der Client fordert den Proxy auf, die {{Glossary("TCP", "TCP")}}-Verbindung zum gewünschten Ziel zu tunneln.
- Der Proxyserver stellt im Auftrag des Clients eine sichere Verbindung zum Server her.
- Sobald die Verbindung hergestellt ist, leitet der Proxyserver den TCP-Datenstrom weiterhin vom und zum Client weiter.

Ein HTTP-Tunnel ermöglicht nicht nur den sicheren Zugriff auf Websites hinter Proxys, sondern bietet auch eine Möglichkeit, Datenverkehr, der andernfalls eingeschränkt wäre (etwa SSH oder FTP), über das HTTP(S)-Protokoll zu übertragen.

`CONNECT` ist eine Hop-by-Hop-Methode. Das bedeutet, dass Proxys die `CONNECT`-Anfrage nur weiterleiten, wenn sich vor dem Ursprungsserver ein weiterer vorgeschalteter Proxy befindet, da die meisten Ursprungsserver `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, beschränken Sie dessen Verwendung auf eine Gruppe bekannter Ports oder eine konfigurierbare Liste sicherer Anfrageziele.
> Das Einrichten eines Tunnels zu beliebigen Servern birgt erhebliche Risiken, insbesondere wenn das Ziel ein bekannter oder reservierter TCP-Port ist, der nicht für Web-Datenverkehr vorgesehen ist.
> Ein unzureichend konfigurierter Proxy kann beispielsweise missbraucht werden, um Datenverkehr wie SMTP weiterzuleiten und so Spam-E-Mails zu versenden.

### Erweitertes CONNECT

HTTP/2 und HTTP/3 definieren außerdem eine _erweiterte_ `CONNECT`-Anfrage, mit der ein anderes Protokoll über einen einzelnen HTTP-Stream ausgeführt werden kann ({{rfc("8441")}} und {{rfc("9220")}}).
Die Anfrage enthält einen `:protocol`-Pseudo-Header, der das Protokoll benennt, sowie die Pseudo-Header `:scheme`, `:authority` und `:path`, die die Zielressource identifizieren.
Die Anfrage wird an den Ursprungsserver gesendet, der seine Unterstützung zunächst über die Einstellung `SETTINGS_ENABLE_CONNECT_PROTOCOL` bekannt geben muss.
Antwortet der Server mit einem [erfolgreichen 2XX-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status#successful_responses), übernimmt das benannte Protokoll den Stream.

Erweitertes `CONNECT` wird verwendet, um [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindungen über HTTP/2 und HTTP/3 zu öffnen (mit `:protocol` auf `websocket` gesetzt) und [WebTransport](/de/docs/Web/API/WebTransport_API)-Sitzungen einzurichten (mit `:protocol` auf `webtransport` gesetzt).

## Beispiele

### Proxy-Autorisierung

Eine Anfrage an Proxyserver, die eine Autorisierung zum Einrichten eines Tunnels erfordern, sieht wie folgt aus.
Weitere Informationen finden Sie unter dem Header {{HTTPHeader("Proxy-Authorization")}}.

```http
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- Glossareintrag {{Glossary("Proxy_server", "Proxyserver")}}
- Header {{HTTPHeader("Proxy-Authorization")}}
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [WebTransport API](/de/docs/Web/API/WebTransport_API)
