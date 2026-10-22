---
title: CONNECT request method
short-title: CONNECT
slug: Web/HTTP/Reference/Methods/CONNECT
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

Die HTTP-Methode **`CONNECT`** fordert einen {{Glossary("Proxy_server", "Proxy")}} auf, einen HTTP-Tunnel zu einem Zielserver aufzubauen und bei Erfolg Daten in beide Richtungen unverändert weiterzuleiten, bis der Tunnel geschlossen wird.

Das Anfrageziel ist bei dieser Methode einzigartig: Es besteht nur aus dem Host und der Portnummer des Tunnelziels, getrennt durch einen Doppelpunkt (Einzelheiten finden Sie unter [Syntax](#syntax)).
Jeder [2XX-Erfolgsstatuscode](/de/docs/Web/HTTP/Reference/Status#successful_responses) bedeutet, dass der Proxy in den „Tunnelmodus“ wechselt. Alle Daten im Body der erfolgreichen Antwort stammen von dem Server, der durch das Anfrageziel angegeben wird.

Wenn sich eine Website hinter einem Proxy befindet und Netzwerkregeln vorschreiben, dass der gesamte externe Datenverkehr über den Proxy laufen muss, können Sie mit der Methode `CONNECT` eine {{Glossary("TLS", "TLS")}}-Verbindung ({{Glossary("HTTPS", "HTTPS")}}) zu dieser Website herstellen:

- Der Client fordert den Proxy auf, die {{Glossary("TCP", "TCP")}}-Verbindung zum gewünschten Ziel zu tunneln.
- Der Proxyserver stellt im Auftrag des Clients eine sichere Verbindung zum Server her.
- Sobald die Verbindung hergestellt ist, leitet der Proxyserver den TCP-Datenstrom weiterhin vom und zum Client weiter.

Ein HTTP-Tunnel ermöglicht nicht nur den sicheren Zugriff auf Websites hinter Proxys, sondern auch die Übertragung von Datenverkehr, der andernfalls eingeschränkt wäre (etwa SSH oder FTP), über das HTTP(S)-Protokoll.

`CONNECT` ist eine Hop-by-Hop-Methode. Das bedeutet, dass Proxys die `CONNECT`-Anfrage nur weiterleiten, wenn sich vor dem Ursprungsserver ein weiterer eingehender Proxy befindet, da die meisten Ursprungsserver `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, beschränken Sie dessen Verwendung auf bekannte Ports oder eine konfigurierbare Liste sicherer Anfrageziele.
> Der Aufbau eines Tunnels zu beliebigen Servern birgt erhebliche Risiken, insbesondere wenn das Ziel ein bekannter oder reservierter TCP-Port ist, der nicht für Web-Datenverkehr vorgesehen ist.
> Ein zu großzügig konfigurierter Proxy könnte beispielsweise missbraucht werden, um SMTP-Datenverkehr weiterzuleiten und so Spam-E-Mails zu versenden.

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
      <th scope="row">{{Glossary("Cacheable", "Cachefähig")}}</th>
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
  - : Eine Portnummer in Dezimalschreibweise (z. B. `80`, `443`). Es gibt keinen Standardport; ein Client **muss** daher eine Portnummer angeben.

## Beispiele

### Proxy-Authentifizierung

Eine Anfrage an einen Proxyserver, der für den Aufbau eines Tunnels eine Authentifizierung verlangt, sieht wie folgt aus.
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
