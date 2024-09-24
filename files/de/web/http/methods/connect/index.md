---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`CONNECT`** HTTP-Methode fordert von einem {{Glossary("Proxy server", "Proxyserver")}}, einen HTTP-Tunnel zu einem Zielserver zu etablieren und, wenn erfolgreich, Daten in beide Richtungen blind weiterzuleiten, bis der Tunnel geschlossen wird.

Das Anfrageziel ist bei dieser Methode einzigartig, da es nur aus dem Host und der Portnummer des Tunnels besteht, getrennt durch einen Doppelpunkt (siehe [Syntax](#syntax) für Details).
Jeder [2XX erfolgreiche Antwortstatuscode](/de/docs/Web/HTTP/Status#successful_responses) bedeutet, dass der Proxy in den 'Tunnelmodus' wechselt und alle Daten im Erfolgskörper der Antwort stammen von dem durch das Anfrageziel identifizierten Server.

Wenn sich eine Website hinter einem Proxy befindet und es durch Netzwerkrichtlinien vorgeschrieben ist, dass der gesamte externe Verkehr durch den Proxy geleitet werden muss, ermöglicht die `CONNECT`-Methode Ihnen, eine {{Glossary("TLS")}} ({{Glossary("HTTPS")}})-Verbindung mit dieser Website herzustellen:

- Der Client fordert den Proxy auf, die {{Glossary("TCP")}}-Verbindung zum gewünschten Ziel zu tunneln.
- Der Proxyserver stellt im Auftrag des Clients eine sichere Verbindung zum Server her.
- Sobald die Verbindung hergestellt ist, leitet der Proxyserver den TCP-Strom weiterhin zum und vom Client weiter.

Abgesehen von der Ermöglichung des sicheren Zugriffs auf Websites hinter Proxies bietet ein HTTP-Tunnel eine Möglichkeit, Verkehr, der sonst eingeschränkt wäre (SSH oder FTP), über das HTTP(S)-Protokoll zu ermöglichen.

`CONNECT` ist eine Hop-by-Hop-Methode, was bedeutet, dass Proxies die `CONNECT`-Anfrage nur weiterleiten, wenn ein weiterer eingehender Proxy vor dem Ursprungsserver vorhanden ist, da die meisten Ursprungsserver `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, begrenzen Sie seine Nutzung auf eine festgelegte Anzahl bekannter Ports oder eine konfigurierbare Liste sicherer Anfragziele.
> Es gibt erhebliche Risiken bei der Etablierung eines Tunnels zu beliebigen Servern, insbesondere wenn das Ziel ein bekannter oder reservierter TCP-Port ist, der nicht für Webverkehr vorgesehen ist.
> Ein locker konfigurierter Proxy kann missbraucht werden, um Verkehr wie SMTP weiterzuleiten, um beispielsweise Spam-E-Mails zu versenden.

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
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        In <a href="/de/docs/Learn/Forms">HTML-Formularen</a> erlaubt
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
  - : Eine Portnummer in Dezimal (z.B. `80`, `443`). Es gibt keinen Standardport, daher **muss** ein Client einen Port senden.

## Beispiele

### Proxy-Authentifizierung

Eine Anfrage für Proxyserver, die zur Erstellung eines Tunnels eine Autorisierung erfordern, sieht wie folgt aus.
Siehe den {{HTTPHeader("Proxy-Authorization")}} Header für weitere Informationen.

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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- Eintrag zum {{Glossary("Proxy server")}} im Glossar
- {{HTTPHeader("Proxy-Authorization")}} Header
- [How To Use SSH Over An HTTP Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
