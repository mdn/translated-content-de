---
title: CONNECT request method
short-title: CONNECT
slug: Web/HTTP/Reference/Methods/CONNECT
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die **`CONNECT`** HTTP-Methode fordert, dass ein {{Glossary("Proxy_server", "Proxy")}} einen HTTP-Tunnel zu einem Zielserver erstellt und bei Erfolg Daten blind in beide Richtungen weiterleitet, bis der Tunnel geschlossen wird.

Das Anforderungsziel ist bei dieser Methode einzigartig, da es nur aus dem Host und der Portnummer des Tunnelziels besteht, getrennt durch einen Doppelpunkt (siehe [Syntax](#syntax) für Einzelheiten).
Jeder [2XX erfolgreiche Antwort-Statuscode](/de/docs/Web/HTTP/Reference/Status#successful_responses) bedeutet, dass der Proxy in den "Tunnelmodus" wechselt und alle Daten im Erfolgsantwortkörper von dem Server stammen, der durch das Anforderungsziel identifiziert wird.

Wenn sich eine Website hinter einem Proxy befindet und es durch Netzwerkregeln erzwungen wird, dass der gesamte externe Verkehr durch den Proxy geleitet werden muss, ermöglicht die `CONNECT` Methode Ihnen, eine {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) Verbindung mit dieser Website herzustellen:

- Der Client bittet den Proxy, die {{Glossary("TCP", "TCP")}} Verbindung zum gewünschten Ziel zu tunneln.
- Der Proxy-Server stellt eine sichere Verbindung zum Server im Namen des Clients her.
- Sobald die Verbindung hergestellt ist, leitet der Proxy-Server den TCP-Stream weiterhin an den Client und zurück weiter.

Neben dem Ermöglichen eines sicheren Zugriffs auf Websites hinter Proxys bietet ein HTTP-Tunnel eine Möglichkeit, Verkehr zuzulassen, der sonst über das HTTP(S)-Protokoll eingeschränkt wäre (SSH oder FTP).

`CONNECT` ist eine hop-by-hop Methode, was bedeutet, dass Proxys die `CONNECT` Anfrage nur weiterleiten, wenn sich ein anderer eingehender Proxy vor dem Ursprungsserver befindet, da die meisten Ursprungsserver `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, beschränken Sie dessen Nutzung auf eine Reihe bekannter Ports oder eine konfigurierbare Liste sicherer Anforderungsziele.
> Es gibt erhebliche Risiken bei der Erstellung eines Tunnels zu beliebigen Servern, insbesondere wenn das Ziel ein bekannter oder reservierter TCP-Port ist, der nicht für Web-Verkehr vorgesehen ist.
> Ein locker konfigurierter Proxy kann missbraucht werden, um Verkehr wie SMTP weiterzuleiten, um beispielsweise Spam-E-Mails zu versenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
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
      <th scope="row">{{Glossary("Cacheable", "Cachbar")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        Erlaubt in <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a>
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
  - : Ein Host, der ein registrierter Hostname (z.B. `example.com`) oder eine IP-Adresse (IPv4, IPv6) sein kann.
- `<port>`
  - : Eine Portnummer in Dezimal (z.B. `80`, `443`). Es gibt keinen Standardport, daher **muss** ein Client einen senden.

## Beispiele

### Proxy-Autorisierung

Eine Anfrage für Proxy-Server, die eine Autorisierung zur Erstellung eines Tunnels erfordern, sieht wie folgt aus.
Weitere Informationen finden Sie im {{HTTPHeader("Proxy-Authorization")}} Header.

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
- [HTTP-Antwort-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- Eintrag im {{Glossary("Proxy_server", "Proxy-Server")}} Glossar
- {{HTTPHeader("Proxy-Authorization")}} Header
- [Anleitung zur Nutzung von SSH über einen HTTP-Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
