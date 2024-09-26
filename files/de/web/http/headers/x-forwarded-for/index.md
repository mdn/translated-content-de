---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`X-Forwarded-For`** (XFF) Request-Header ist ein De-facto-Standard-Header zur Identifizierung der ursprünglichen IP-Adresse eines Clients, der über einen Proxy-Server eine Verbindung zu einem Webserver herstellt.

> [!WARNING]
> Unsachgemäße Verwendung dieses Headers kann ein Sicherheitsrisiko darstellen. Einzelheiten finden Sie im Abschnitt [Sicherheits- und Datenschutzbedenken](#sicherheits-_und_datenschutzbedenken).

Wenn ein Client direkt eine Verbindung zu einem Server herstellt, wird die IP-Adresse des Clients an den Server gesendet (und häufig in den Server-Zugriffsprotokollen gespeichert). Wenn jedoch eine Client-Verbindung über beliebige [Forward- oder Reverse-Proxies](https://en.wikipedia.org/wiki/Proxy_server) verläuft, sieht der Server nur die IP-Adresse des letzten Proxys, die oft wenig hilfreich ist. Dies ist besonders der Fall, wenn der letzte Proxy ein Load Balancer ist, der Teil derselben Installation wie der Server ist. Um dem Server eine nützlichere Client-IP-Adresse bereitzustellen, wird der `X-Forwarded-For` Request-Header verwendet.

Detaillierte Anleitungen zur Verwendung dieses Headers finden Sie in den Abschnitten [Parsing](#parsing) und [Auswahl einer IP-Adresse](#auswahl_einer_ip-adresse).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Eine standardisierte Version dieses Headers ist der HTTP {{HTTPHeader("Forwarded")}} Header.

## Sicherheits- und Datenschutzbedenken

Dieser Header offenbart von Natur aus datenschutzsensible Informationen, wie die IP-Adresse des Clients. Daher muss bei der Einführung dieses Headers der Datenschutz des Benutzers berücksichtigt werden.

Der `X-Forwarded-For` Header ist nicht vertrauenswürdig, wenn sich kein vertrauenswürdiger Reverse-Proxy (z. B. ein Load Balancer) zwischen dem Client und dem Server befindet. Wenn der Client und alle Proxys gutartig und gut konfiguriert sind, dann hat die Liste der IP-Adressen im Header die im Abschnitt [Direktiven](#direktiven) beschriebene Bedeutung. Aber wenn das Risiko besteht, dass der Client oder ein Proxy bösartig oder falsch konfiguriert ist, dann ist es möglich, dass Teile (oder der gesamte Header) gefälscht sind (und möglicherweise keine Liste oder keine IP-Adressen enthalten).

Wenn sich vertrauenswürdige Reverse-Proxys zwischen dem Client und dem Server befinden, sind die letzten `X-Forwarded-For` IP-Adressen (jeweils eine für jeden vertrauenswürdigen Proxy) vertrauenswürdig, da sie von vertrauenswürdigen Proxys hinzugefügt wurden. (Das gilt, solange der Server _nur_ über diese Proxys und nicht auch direkt zugänglich ist).

Jede sicherheitsbezogene Verwendung von `X-Forwarded-For` (wie beispielsweise für Ratenbegrenzungen oder IP-basierte Zugriffskontrolle) _darf nur_ IP-Adressen verwenden, die von einem vertrauenswürdigen Proxy hinzugefügt wurden. Die Verwendung unzuverlässiger Werte kann dazu führen, dass Ratenbegrenzungen umgangen werden, Zugangskontrollen durchbrochen werden, Speicher erschöpft wird oder andere negative Sicherheits- oder Verfügbarkeitsfolgen eintreten.

Umgekehrt dürfen die linksstehenden (nicht vertrauenswürdigen) Werte nur dort verwendet werden, wo es keine negativen Auswirkungen von der Möglichkeit gefälschter Werte gibt.

## Syntax

```http
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

Elemente sind kommagetrennt, mit optionalem Leerraum um die Kommata herum.

## Direktiven

- \<client>
  - : Die IP-Adresse des Clients
- \<proxy1>, \<proxy2>
  - : Wenn eine Anfrage mehrere Proxys durchläuft, werden die IP-Adressen jedes aufeinanderfolgenden Proxys aufgelistet. Dies bedeutet, dass bei gutem Verhalten von Client und Proxys die rechtseste IP-Adresse die IP-Adresse des zuletzt verwendeten Proxys ist und die linkseste IP-Adresse die IP-Adresse des ursprünglichen Clients ist.

## Beispiele

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Parsing

Unsachgemäße Analyse des `X-Forwarded-For` Headers kann dazu führen, dass gefälschte Werte für sicherheitsrelevante Zwecke verwendet werden, was zu den oben genannten negativen Folgen führen kann.

In einer Anfrage können mehrere `X-Forwarded-For`-Header vorhanden sein. Die IP-Adressen in diesen Headers müssen als eine einzige Liste behandelt werden, beginnend mit der ersten IP-Adresse des ersten Headers und endend mit der letzten IP-Adresse des letzten Headers. Es gibt zwei Möglichkeiten, diese Liste zu erstellen:

- Verbinden Sie die vollständigen Header-Werte `X-Forwarded-For` mit Kommata und teilen Sie sie dann durch Komma in eine Liste auf, oder
- Teilen Sie jeden `X-Forwarded-For`-Header durch Komma in Listen auf und verbinden Sie dann die Listen

Es reicht nicht aus, nur einen von mehreren `X-Forwarded-For`-Headern zu verwenden.

(Einige Reverse-Proxys verbinden mehrere `X-Forwarded-For`-Header automatisch in einen einzigen, es ist jedoch am sichersten, nicht davon auszugehen, dass dies der Fall ist.)

## Auswahl einer IP-Adresse

Bei der Auswahl einer Adresse muss die vollständige Liste der IPs — aus allen `X-Forwarded-For`-Headern — verwendet werden.

Bei der Auswahl der dem Client am nächsten gelegenen `X-Forwarded-For`-Client-IP-Adresse (die nicht zuverlässig und _nicht_ für sicherheitsrelevante Zwecke geeignet ist) sollte die erste linksstehende IP ausgewählt werden, die _eine gültige Adresse_ ist und _nicht privat/intern_ ist. („Gültig“, weil gefälschte Werte möglicherweise überhaupt keine IP-Adressen sind; „nicht intern/privat“, weil Clients möglicherweise Proxys in ihrem internen Netzwerk verwendet haben, die Adressen aus dem [privaten IP-Raum](https://en.wikipedia.org/wiki/Private_network) hinzugefügt haben.)

Wenn die erste _vertrauenswürdige_ `X-Forwarded-For`-Client-IP-Adresse ausgewählt wird, ist eine zusätzliche Konfiguration erforderlich. Es gibt zwei gängige Methoden:

- **Anzahl vertrauenswürdiger Proxys**: Die Anzahl der Reverse-Proxys zwischen dem Internet und dem Server wird konfiguriert. Die `X-Forwarded-For`-IP-Liste wird von rechts nach links um diese Anzahl minus eins durchsucht. (Wenn es beispielsweise nur einen Reverse-Proxy gibt, fügt dieser Proxy die IP-Adresse des Clients hinzu, sodass die rechtsstehende Adresse verwendet werden sollte. Wenn es drei Reverse-Proxys gibt, werden die letzten beiden IP-Adressen intern sein.)
- **Vertrauenswürdige Proxy-Liste**: Die IPs oder IP-Bereiche der vertrauenswürdigen Reverse-Proxys werden konfiguriert. Die `X-Forwarded-For`-IP-Liste wird von rechts nach links durchsucht und alle Adressen übersprungen, die sich auf der vertrauenswürdigen Proxy-Liste befinden. Die erste nicht übereinstimmende Adresse ist die Zieladresse.

Die erste vertrauenswürdige `X-Forwarded-For`-IP-Adresse kann zu einem unzuverlässigen Zwischen-Proxy gehören und nicht zum tatsächlichen Client-Computer, aber sie ist die einzige IP, die für Sicherheitszwecke geeignet ist.

Beachten Sie, dass, wenn der Server direkt vom Internet aus erreichbar ist — auch wenn er sich hinter einem vertrauenswürdigen Reverse-Proxy befindet — _kein Teil_ der `X-Forwarded-For`-IP-Liste als vertrauenswürdig oder sicher für sicherheitsrelevante Zwecke angesehen werden kann.

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
