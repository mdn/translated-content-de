---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`X-Forwarded-For`** (XFF)-Request-Header ist ein de-facto Standard-Header zur Identifizierung der Ursprungs-IP-Adresse eines Clients, der über einen Proxy-Server eine Verbindung zu einem Webserver herstellt.

> [!WARNING]
> Unsachgemäße Verwendung dieses Headers kann ein Sicherheitsrisiko darstellen. Für Details siehe den Abschnitt [Sicherheits- und Datenschutzbedenken](#sicherheits-_und_datenschutzbedenken).

Wenn sich ein Client direkt mit einem Server verbindet, wird die IP-Adresse des Clients an den Server gesendet (und oft in den Zugriffsprotokollen des Servers aufgezeichnet). Wenn jedoch eine Client-Verbindung über einen [Forward- oder Reverse-Proxy](https://en.wikipedia.org/wiki/Proxy_server) geleitet wird, sieht der Server nur die IP-Adresse des letzten Proxys, die oft wenig nützlich ist. Das gilt besonders, wenn der letzte Proxy ein Load-Balancer ist, der Teil derselben Installation wie der Server ist. Um dem Server eine nützlichere Client-IP-Adresse bereitzustellen, wird der `X-Forwarded-For`-Request-Header verwendet.

Für detaillierte Anleitungen zur Verwendung dieses Headers siehe die Abschnitte [Parsing](#parsing) und [Auswahl einer IP-Adresse](#auswahl_einer_ip-adresse).

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

Dieser Header gibt, dem Design nach, datenschutzsensible Informationen preis, wie z.B. die IP-Adresse des Clients. Daher muss der Schutz der Privatsphäre des Nutzers beachtet werden, wenn dieser Header implementiert wird.

Der `X-Forwarded-For`-Header ist unzuverlässig, wenn kein vertrauenswürdiger Reverse-Proxy (z.B. ein Load-Balancer) zwischen Client und Server steht. Sind der Client und alle Proxys harmlos und korrekt konfiguriert, hat die Liste der IP-Adressen im Header die Bedeutung, die im Abschnitt [Direktiven](#direktiven) beschrieben wird. Besteht jedoch das Risiko, dass der Client oder ein Proxy bösartig oder fehlerhaft konfiguriert ist, könnte jeder Teil (oder der gesamte Header) gefälscht sein (und möglicherweise keine Liste oder keine IP-Adressen enthalten).

Wenn sich jedoch vertrauenswürdige Reverse-Proxys zwischen Client und Server befinden, sind die letzten `X-Forwarded-For`-IP-Adressen (eine für jeden vertrauenswürdigen Proxy) vertrauenswürdig, da sie von vertrauenswürdigen Proxys hinzugefügt wurden. (Das gilt, solange der Server _nur_ über diese Proxys und nicht direkt zugänglich ist).

Jegliche sicherheitsbezogene Verwendung von `X-Forwarded-For` (wie z.B. für Drosselung oder auf IP basierende Zugangskontrolle) _muss nur_ IP-Adressen verwenden, die von einem vertrauenswürdigen Proxy hinzugefügt wurden. Die Verwendung unzuverlässiger Werte kann zur Umgehung von Zugriffsbeschränkungen, unnötiger Speicherbelastung oder anderen negativen Sicherheits- oder Verfügbarkeitskonsequenzen führen.

Im Gegensatz dazu dürfen linke (unzuverlässige) Werte nur verwendet werden, wenn das Risiko einer möglichen Verwendung gefälschter Werte keine negativen Folgen hat.

## Syntax

```http
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

Elemente sind durch Kommas getrennt, mit optionalen Leerzeichen um die Kommas herum.

## Direktiven

- \<client>
  - : Die Client-IP-Adresse
- \<proxy1>, \<proxy2>
  - : Geht eine Anfrage durch mehrere Proxys, werden die IP-Adressen jedes aufeinanderfolgenden Proxys aufgelistet. Das bedeutet, dass bei korrekt konfigurierten Client und Proxys die rechteste IP-Adresse die Adresse des letzten Proxys ist und die linkeste IP-Adresse die Adresse des ursprünglichen Clients.

## Beispiele

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Parsing

Unsachgemäßes Parsing des `X-Forwarded-For`-Headers kann dazu führen, dass gefälschte Werte zu sicherheitsrelevanten Zwecken verwendet werden, was die oben genannten negativen Folgen nach sich ziehen kann.

Es können mehrere `X-Forwarded-For`-Header in einer Anfrage vorhanden sein. Die IP-Adressen in diesen Headers müssen als eine einzige Liste behandelt werden, beginnend mit der ersten IP-Adresse des ersten Headers und fortsetzend bis zur letzten IP-Adresse des letzten Headers. Es gibt zwei Möglichkeiten, diese eine Liste zu erstellen:

- Verbinden Sie die kompletten `X-Forwarded-For`-Header-Werte mit Kommas und teilen Sie sie dann per Komma in eine Liste auf, oder
- teilen Sie jeden `X-Forwarded-For`-Header per Komma in Listen auf und verbinden Sie dann die Listen

Es ist unzureichend, nur einen von mehreren `X-Forwarded-For`-Headern zu verwenden.

(Einige Reverse-Proxys verbinden automatisch mehrere `X-Forwarded-For`-Header zu einem, aber es ist am sichersten, nicht davon auszugehen, dass dies der Fall ist.)

## Auswahl einer IP-Adresse

Bei der Auswahl einer Adresse muss die vollständige Liste der IPs — aus allen `X-Forwarded-For`-Headern — verwendet werden.

Bei der Auswahl der `X-Forwarded-For`-Client-IP-Adresse, die dem Client am nächsten liegt (unzuverlässig und _nicht_ für sicherheitsrelevante Zwecke), sollte die erste IP-Adresse von links, die _eine gültige Adresse_ ist und _nicht privat/intern_ ist, ausgewählt werden. ("Gültig", weil gefälschte Werte möglicherweise überhaupt keine IP-Adressen sind; "nicht intern/privat", weil Clients möglicherweise Proxys in ihrem internen Netzwerk verwendet haben, die Adressen aus dem [privaten IP-Bereich](https://en.wikipedia.org/wiki/Private_network) hinzugefügt haben.)

Wenn die erste _verlässliche_ `X-Forwarded-For`-Client-IP-Adresse ausgewählt werden soll, ist eine zusätzliche Konfiguration erforderlich. Es gibt zwei gängige Methoden:

- **Vertrauenswürdige Proxy-Anzahl**: Die Anzahl der Reverse-Proxys zwischen dem Internet und dem Server wird konfiguriert. Die `X-Forwarded-For`-IP-Liste wird von rechts dieser Anzahl minus eins durchsucht. (Zum Beispiel, wenn es nur einen Reverse-Proxy gibt, wird dieser Proxy die IP-Adresse des Clients hinzufügen, sodass die rechteste Adresse verwendet werden sollte. Gibt es drei Reverse-Proxys, werden die letzten beiden IP-Adressen intern sein.)
- **Vertrauenswürdige Proxy-Liste**: Die IPs oder IP-Bereiche der vertrauenswürdigen Reverse-Proxys werden konfiguriert. Die `X-Forwarded-For`-IP-Liste wird von rechts durchsucht, wobei alle Adressen, die sich auf der vertrauenswürdigen Proxy-Liste befinden, ausgelassen werden. Die erste nicht übereinstimmende Adresse ist die Zieladresse.

Die erste vertrauenswürdige `X-Forwarded-For`-IP-Adresse kann zu einem unzuverlässigen Zwischenproxy gehören und nicht zum tatsächlichen Client-Computer, ist aber die einzige IP, die für Sicherheitszwecke geeignet ist.

Beachten Sie, dass, wenn der Server direkt aus dem Internet erreichbar ist — selbst wenn er auch hinter einem vertrauenswürdigen Reverse-Proxy steht — _kein_ Teil der `X-Forwarded-For`-IP-Liste als zuverlässig oder sicher für sicherheitsrelevante Zwecke angesehen werden kann.

## Spezifikationen

Kein Teil einer aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
