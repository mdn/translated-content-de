---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`X-Forwarded-For`** (XFF)-Request-Header ist ein de-facto Standard-Header zur Identifikation der ursprünglichen IP-Adresse eines Clients, der über einen Proxy-Server eine Verbindung zu einem Webserver herstellt.

> [!WARNING]
> Unsachgemäße Verwendung dieses Headers kann ein Sicherheitsrisiko darstellen. Einzelheiten finden Sie im Abschnitt [Sicherheits- und Datenschutzbedenken](#sicherheits-_und_datenschutzbedenken).

Wenn ein Client direkt eine Verbindung zu einem Server herstellt, wird die IP-Adresse des Clients an den Server gesendet (und oft in den Zugriffsprotokollen des Servers gespeichert). Wenn jedoch eine Client-Verbindung über [Forward- oder Reverse-](https://en.wikipedia.org/wiki/Proxy_server) Proxys geleitet wird, sieht der Server nur die IP-Adresse des letzten Proxys, die oft wenig nützlich ist. Dies gilt insbesondere, wenn der letzte Proxy ein Load Balancer ist, der Teil derselben Installation wie der Server ist. Um dem Server eine nützlichere IP-Adresse des Clients bereitzustellen, wird der `X-Forwarded-For`-Request-Header verwendet.

Für detaillierte Anleitungen zur Verwendung dieses Headers, siehe die Abschnitte [Parsing](#parsing) und [Auswahl einer IP-Adresse](#auswahl_einer_ip-adresse).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Eine standardisierte Version dieses Headers ist der HTTP {{HTTPHeader("Forwarded")}}-Header.

## Sicherheits- und Datenschutzbedenken

Dieser Header gibt von Natur aus datenschutzsensible Informationen preis, wie zum Beispiel die IP-Adresse des Clients. Daher muss der Datenschutz des Benutzers berücksichtigt werden, wenn dieser Header eingesetzt wird.

Der `X-Forwarded-For`-Header ist unzuverlässig, wenn kein vertrauenswürdiger Reverse-Proxy (z.B. ein Load Balancer) zwischen dem Client und dem Server steht. Wenn der Client und alle Proxys gutartig und korrekt konfiguriert sind, hat die Liste der IP-Adressen im Header die im Abschnitt [Direktiven](#direktiven) beschriebene Bedeutung. Besteht jedoch das Risiko, dass der Client oder irgendein Proxy bösartig oder falsch konfiguriert ist, kann es sein, dass irgendein Teil (oder der gesamte) Header gefälscht wurde (und möglicherweise keine Liste oder IP-Adressen enthält).

Stehen zwischen dem Client und dem Server vertrauenswürdige Reverse-Proxys, sind die finalen `X-Forwarded-For`-IP-Adressen (eine für jeden vertrauenswürdigen Proxy) vertrauenswürdig, da sie von vertrauenswürdigen Proxys hinzugefügt wurden. (Das gilt, solange der Server _nur_ durch diese Proxys zugänglich ist und nicht auch direkt).

Jede sicherheitsbezogene Verwendung von `X-Forwarded-For` (wie zur Ratenbegrenzung oder IP-basierten Zugriffskontrolle) _darf nur_ IP-Adressen verwenden, die von einem vertrauenswürdigen Proxy hinzugefügt wurden. Die Verwendung unzuverlässiger Werte kann zu Umgehung der Ratenbegrenzung, Umgehung der Zugriffskontrolle, Speichererschöpfung oder anderen negativen Sicherheits- oder Verfügbarkeitsfolgen führen.

Im Umkehrschluss dürfen die linken (unzuverlässigen) Werte nur verwendet werden, wenn keine negativen Auswirkungen durch die Möglichkeit gefälschter Werte auftreten werden.

## Syntax

```http
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

Die Elemente sind durch Kommas getrennt, mit optionalen Leerzeichen um die Kommas.

## Direktiven

- \<client>
  - : Die IP-Adresse des Clients
- \<proxy1>, \<proxy2>
  - : Falls eine Anfrage durch mehrere Proxys geht, werden die IP-Adressen jedes aufeinanderfolgenden Proxys aufgelistet. Das bedeutet, dass bei gut konfigurierten Client und Proxys die rechte IP-Adresse die des zuletzt verwendeten Proxys ist und die linke IP-Adresse die des ursprünglichen Clients.

## Beispiele

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Parsing

Unsachgemäßes Parsing des `X-Forwarded-For`-Headers kann dazu führen, dass gefälschte Werte für sicherheitsrelevante Zwecke verwendet werden, was zu den oben genannten negativen Konsequenzen führen kann.

Eine Anfrage kann mehrere `X-Forwarded-For`-Header enthalten. Die IP-Adressen in diesen Headern müssen als eine einzige Liste behandelt werden, beginnend mit der ersten IP-Adresse des ersten Headers und weiter zur letzten IP-Adresse des letzten Headers. Es gibt zwei Möglichkeiten, diese einzelne Liste zu erstellen:

- Die vollständigen `X-Forwarded-For`-Headerwerte mit Kommas verbinden und dann nach Komma trennen, um eine Liste zu erstellen, oder
- Jeden `X-Forwarded-For`-Header nach Komma trennen und dann die Listen verbinden

Es reicht nicht aus, nur einen von mehreren `X-Forwarded-For`-Headers zu verwenden.

(Einige Reverse-Proxys werden automatisch mehrere `X-Forwarded-For`-Header zu einem zusammenfügen, aber es ist am sichersten, nicht davon auszugehen, dass dies der Fall ist.)

## Auswahl einer IP-Adresse

Bei der Auswahl einer Adresse muss die vollständige Liste der IPs — aus allen `X-Forwarded-For`-Headers — verwendet werden.

Bei der Auswahl der `X-Forwarded-For`-Client-IP-Adresse am nächsten zum Client (unzuverlässig und _nicht_ für sicherheitsrelevante Zwecke) sollte die erste IP von der linkesten ausgewählt werden, die _eine gültige Adresse_ ist und _nicht privat/intern_ ist. ("Gültig", weil gefälschte Werte möglicherweise überhaupt keine IP-Adressen sind; "nicht intern/privat", weil Clients Proxys in ihrem internen Netzwerk verwendet haben könnten, die Adressen aus dem [privaten IP-Bereich](https://en.wikipedia.org/wiki/Private_network) hinzugefügt haben könnten.)

Bei der Auswahl der ersten _vertrauenswürdigen_ `X-Forwarded-For`-Client-IP-Adresse ist eine zusätzliche Konfiguration erforderlich. Es gibt zwei gängige Methoden:

- **Anzahl der vertrauenswürdigen Proxys**: Die Anzahl der Reverse-Proxys zwischen dem Internet und dem Server wird konfiguriert. Die `X-Forwarded-For`-IP-Liste wird von der rechten Seite durchsucht, um eins abzüglich dieser Anzahl. (Zum Beispiel, wenn es nur einen Reverse-Proxy gibt, wird dieser Proxy die IP-Adresse des Clients hinzufügen, sodass die rechte Adresse verwendet werden sollte. Gibt es drei Reverse-Proxys, sind die letzten beiden IP-Adressen intern.)
- **Liste vertrauenswürdiger Proxys**: Die IPs oder IP-Bereiche der vertrauenswürdigen Reverse-Proxys werden konfiguriert. Die `X-Forwarded-For`-IP-Liste wird von der rechten Seite durchsucht, wobei alle Adressen übersprungen werden, die auf der Liste vertrauenswürdiger Proxys stehen. Die erste nicht übereinstimmende Adresse ist das Ziel.

Die erste vertrauenswürdige `X-Forwarded-For`-IP-Adresse kann zu einem unzuverlässigen Zwischenproxy gehören, anstatt zum tatsächlichen Client-Rechner, aber sie ist die einzige IP, die für sicherheitsrelevante Zwecke geeignet ist.

Beachten Sie, dass, wenn der Server direkt aus dem Internet erreichbar ist — auch wenn er hinter einem vertrauenswürdigen Reverse-Proxy steht — _kein Teil_ der `X-Forwarded-For`-IP-Liste als vertrauenswürdig oder sicher für sicherheitsrelevante Verwendungen angesehen werden kann.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
