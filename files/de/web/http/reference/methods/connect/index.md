---
title: CONNECT request method
short-title: CONNECT
slug: Web/HTTP/Reference/Methods/CONNECT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die **`CONNECT`** HTTP-Methode fordert, dass ein {{Glossary("Proxy_server", "Proxy")}} einen HTTP-Tunnel zu einem Zielserver einrichtet und im Erfolgsfall blind Daten in beide Richtungen weiterleitet, bis der Tunnel geschlossen wird.

Das Anforderungsziel ist einzigartig für diese Methode, da es nur aus dem Host und der Portnummer des Tunnel-Ziels besteht, getrennt durch einen Doppelpunkt (siehe [Syntax](#syntax) für Details).
Jeder [2XX Erfolgs-Statuscode](/de/docs/Web/HTTP/Reference/Status#successful_responses) bedeutet, dass der Proxy in den 'Tunnelmodus' wechselt und alle Daten im Erfolgsantwortkörper von dem Server stammen, der durch das Anforderungsziel identifiziert wurde.

Wenn eine Website hinter einem Proxy steht und es durch Netzwerkregeln erzwungen wird, dass der gesamte externe Datenverkehr den Proxy passieren muss, ermöglicht die `CONNECT`-Methode, eine {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) Verbindung mit dieser Website herzustellen:

- Der Client bittet den Proxy, die {{Glossary("TCP", "TCP")}}-Verbindung zum gewünschten Ziel weiterzuleiten.
- Der Proxy-Server stellt im Auftrag des Clients eine sichere Verbindung zum Server her.
- Sobald die Verbindung hergestellt ist, leitet der Proxy-Server den TCP-Datenstrom zum und vom Client weiter.

Neben der Ermöglichung des sicheren Zugriffs auf Webseiten hinter Proxies bietet ein HTTP-Tunnel eine Möglichkeit, Datenverkehr zuzulassen, der sonst eingeschränkt wäre (SSH oder FTP) über das HTTP(S)-Protokoll.

`CONNECT` ist eine Hop-by-Hop-Methode, was bedeutet, dass Proxies die `CONNECT`-Anfrage nur weiterleiten, wenn ein weiterer eingehender Proxy vor dem Ursprungsserver vorhanden ist, da die meisten Ursprungsserver `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, beschränken Sie dessen Nutzung auf eine Reihe bekannter Ports oder eine konfigurierbare Liste sicherer Anforderungsziele.
> Es gibt erhebliche Risiken beim Aufbau eines Tunnels zu beliebigen Servern, insbesondere wenn das Ziel ein wohlbekannter oder reservierter TCP-Port ist, der nicht für Webtraffic vorgesehen ist.
> Ein locker konfigurierter Proxy kann missbraucht werden, um Traffic wie SMTP weiterzuleiten, um beispielsweise Spam-E-Mails zu versenden.

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
      <th scope="row">{{Glossary("Cacheable", "Cachefähig")}}</th>
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
  - : Ein Host, der ein registrierter Hostname (z. B. `example.com`) oder eine IP-Adresse (IPv4, IPv6) sein kann.
- `<port>`
  - : Eine Portnummer im Dezimalformat (z. B. `80`, `443`). Es gibt keinen Standardport, daher **muss** ein Client einen senden.

## Beispiele

### Proxy-Authentifizierung

Eine Anfrage an Proxy-Server, die eine Autorisierung zur Erstellung eines Tunnels erfordern, sieht wie folgt aus.
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
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{Glossary("Proxy_server", "Proxy-Server")}} Glossar-Eintrag
- {{HTTPHeader("Proxy-Authorization")}} Header
- [Anleitung zur Nutzung von SSH über einen HTTP-Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
