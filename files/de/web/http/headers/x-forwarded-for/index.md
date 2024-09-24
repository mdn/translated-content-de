---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`X-Forwarded-For`** (XFF) Request-Header ist ein de-facto Standard-Header zur Identifizierung der ursprünglichen IP-Adresse eines Clients, der über einen Proxy-Server eine Verbindung zu einem Webserver herstellt.

> [!WARNING]
> Der unsachgemäße Gebrauch dieses Headers kann ein Sicherheitsrisiko darstellen. Einzelheiten finden Sie im Abschnitt [Sicherheits- und Datenschutzbedenken](#sicherheits-_und_datenschutzbedenken).

Wenn ein Client direkt eine Verbindung zu einem Server herstellt, wird die
IP-Adresse des Clients an den Server gesendet (und häufig in den Zugriffsprotokollen des Servers vermerkt). Aber wenn eine Client-Verbindung über [Forward oder Reverse](https://en.wikipedia.org/wiki/Proxy_server) Proxies läuft, sieht der Server nur
die IP-Adresse des letzten Proxies, die oft wenig hilfreich ist. Dies gilt insbesondere, wenn der letzte Proxy ein Load Balancer ist, der Teil derselben Installation
wie der Server ist. Um dem Server eine nützlichere Client-IP-Adresse bereitzustellen, wird der `X-Forwarded-For` Request-Header
verwendet.

Detaillierte Anleitungen zur Verwendung dieses Headers finden Sie in den Abschnitten [Parsing](#parsing) und [Auswahl einer IP-Adresse](#auswahl_einer_ip-adresse).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

Eine standardisierte Version dieses Headers ist der HTTP {{HTTPHeader("Forwarded")}} Header.

## Sicherheits- und Datenschutzbedenken

Dieser Header enthüllt von Natur aus datenschutzsensible Informationen wie die IP-Adresse
des Clients. Daher muss der Datenschutz der Nutzer berücksichtigt werden, wenn dieser
Header eingesetzt wird.

Der `X-Forwarded-For` Header ist unzuverlässig, wenn kein vertrauenswürdiger Reverse Proxy (z.B. ein Load Balancer) zwischen dem Client und dem Server steht. Wenn der Client und alle Proxies gutartig und regelkonform sind, dann hat die Liste der IP-Adressen im Header
die im Abschnitt [Direktiven](#direktiven) beschriebene Bedeutung. Gibt es jedoch ein Risiko, dass der Client oder irgendein Proxy böswillig oder fehlkonfiguriert ist, dann kann es möglich sein, dass irgendein Teil (oder der gesamte) Header gefälscht wurde (und möglicherweise keine Liste oder IP-Adressen enthält).

Wenn zwischen dem Client und dem Server vertrauenswürdige Reverse Proxies stehen, sind die finalen `X-Forwarded-For` IP-Adressen (jeweils eine für jeden vertrauenswürdigen Proxy) vertrauenswürdig, da sie von den vertrauenswürdigen Proxies hinzugefügt wurden. (Das gilt, solange der Server _nur_ über diese Proxies zugänglich ist und nicht auch direkt).

Jede sicherheitsbezogene Verwendung von `X-Forwarded-For` (wie zum Beispiel für Rate Limiting oder IP-basierten Zugriffsschutz) _darf nur_ IP-Adressen nutzen, die von einem vertrauenswürdigen Proxy hinzugefügt wurden. Die Verwendung unzuverlässiger Werte kann zur Umgehung der Rate-Limitierung, zum Zugriffskontrollumgehung, zu Speichererschöpfung oder anderen negativen Sicherheits- oder Verfügbarkeitsfolgen führen.

Umgekehrt dürfen linkserste (unzuverlässige) Werte nur dort verwendet werden, wo es keine negativen Auswirkungen durch die Möglichkeit der Verwendung gefälschter Werte gibt.

## Syntax

```http
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

Elemente sind kommagetrennt, mit optionalen Leerzeichen um die Kommata.

## Direktiven

- \<client>
  - : Die Client-IP-Adresse
- \<proxy1>, \<proxy2>
  - : Wenn eine Anfrage durch mehrere Proxies geht, werden die IP-Adressen jedes nachfolgenden Proxies aufgelistet. Dies bedeutet, dass bei einem gut funktionierenden Client und Proxies die rechteste IP-Adresse die IP-Adresse des zuletzt durchlaufenen Proxies ist und die linkeste IP-Adresse die IP-Adresse des ursprünglichen Clients ist.

## Beispiele

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Parsing

Unsachgemäßes Parsen des `X-Forwarded-For` Headers kann dazu führen, dass gefälschte Werte für sicherheitsrelevante Zwecke verwendet werden, was zu den oben genannten negativen Konsequenzen führt.

Es kann mehrere `X-Forwarded-For` Header in einer Anfrage geben. Die IP-Adressen in
diesen Headern müssen als eine einzige Liste behandelt werden, beginnend mit der ersten IP-Adresse des ersten Headers und fortsetzend bis zur letzten IP-Adresse des letzten Headers. Es gibt zwei Wege, um diese einzelne Liste zu erstellen:

- die vollen `X-Forwarded-For` Header-Werte mit Kommas verbinden und dann durch Komma in eine Liste teilen, oder
- jeden `X-Forwarded-For` Header durch Komma in Listen aufteilen und dann die Listen zusammenfügen

Es reicht nicht aus, nur einen von mehreren `X-Forwarded-For` Headers zu verwenden.

(Einige Reverse Proxies fügen mehrere `X-Forwarded-For` Header automatisch in einen zusammen, aber es ist sicherer, nicht davon auszugehen, dass dies der Fall ist.)

## Auswahl einer IP-Adresse

Bei der Auswahl einer Adresse muss die vollständige Liste der IPs — aus allen `X-Forwarded-For` Headern — verwendet werden.

Bei der Auswahl der `X-Forwarded-For` Client-IP-Adresse, die dem Client am nächsten ist (unzuverlässig und _nicht_ für sicherheitsrelevante Zwecke), sollte die erste IP von links, die _eine gültige Adresse_ ist und _nicht privat/intern_ ist, ausgewählt werden. ("Gültig", da gefälschte Werte möglicherweise gar keine IP-Adressen sind; "nicht intern/privat", da Clients möglicherweise Proxies in ihrem internen Netzwerk verwendet haben, die Adressen aus dem [privaten IP-Adressraum](https://en.wikipedia.org/wiki/Private_network) hinzugefügt haben könnten.)

Bei der Auswahl der ersten _vertrauenswürdigen_ `X-Forwarded-For` Client-IP-Adresse ist zusätzliche Konfiguration erforderlich. Es gibt zwei gängige Methoden:

- **Vertrauenswürdige Proxy-Anzahl**: Die Anzahl der Reverse Proxies zwischen dem Internet und dem
  Server wird konfiguriert. Die `X-Forwarded-For` IP-Liste wird von der rechtesten um diese Anzahl minus eins durchsucht. (Zum Beispiel, wenn es nur einen Reverse Proxy gibt, wird dieser Proxy die Client-IP-Adresse hinzufügen, sodass die rechteste Adresse verwendet werden sollte. Wenn es drei Reverse Proxies gibt, werden die letzten zwei IP-Adressen intern sein.)
- **Vertrauenswürdige Proxy-Liste**: Die IPs oder IP-Bereiche der vertrauenswürdigen Reverse Proxies werden
  konfiguriert. Die `X-Forwarded-For` IP-Liste wird von rechts durchsucht, wobei alle
  Adressen übersprungen werden, die auf der Liste der vertrauenswürdigen Proxies stehen. Die erste nicht übereinstimmende Adresse ist die gesuchte Adresse.

Die erste vertrauenswürdige `X-Forwarded-For` IP-Adresse kann einem unzuverlässigen Zwischen-Proxy anstelle des tatsächlichen Client-Computers gehören, aber es ist die einzige IP, die für sicherheitsrelevante Zwecke geeignet ist.

Beachten Sie, dass wenn der Server direkt aus dem Internet ansprechbar ist — auch wenn er hinter einem vertrauenswürdigen Reverse Proxy steht — _kein Teil_ der `X-Forwarded-For` IP-Liste als vertrauenswürdig oder sicher für sicherheitsrelevante Zwecke angesehen werden kann.

## Spezifikationen

Teil keiner aktuellen Spezifikation. Die standardisierte Version dieses Headers ist
{{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
