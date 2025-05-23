---
title: X-Forwarded-For header
short-title: X-Forwarded-For
slug: Web/HTTP/Reference/Headers/X-Forwarded-For
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`X-Forwarded-For`** (XFF) {{Glossary("request_header", "Request-Header")}} ist ein de-facto Standard-Header zur Identifizierung der ursprünglichen IP-Adresse eines Clients, der über einen {{Glossary("proxy_server", "Proxy-Server")}} eine Verbindung zu einem Webserver herstellt.

Eine standardisierte Version dieses Headers ist der HTTP-{{HTTPHeader("Forwarded")}}-Header, obwohl dieser weitaus weniger häufig verwendet wird.

> [!WARNING]
> Unsachgemäßer Gebrauch dieses Headers kann ein Sicherheitsrisiko darstellen.
> Für Details siehe den Abschnitt [Sicherheits- und Datenschutzbedenken](#sicherheits-_und_datenschutzbedenken).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Forwarded-For: <client>, <proxy>
X-Forwarded-For: <client>, <proxy>, …, <proxyN>
```

Zum Beispiel: Eine IPV6-Client-IP im ersten Header, eine IPV4-Client-IP im zweiten Header und eine IPV4-Client-IP sowie eine IPV6-Proxy-IP im dritten Beispiel:

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348
X-Forwarded-For: 203.0.113.195
X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348
```

## Direktiven

- `<client>`
  - : Die Client-IP-Adresse.
- `<proxy>`
  - : Eine Proxy-IP-Adresse.
    Wenn eine Anfrage durch mehrere Proxys geht, werden die IP-Adressen jedes aufeinanderfolgenden Proxys aufgelistet.
    Das bedeutet, dass die rechteste IP-Adresse die IP-Adresse des zuletzt verwendeten Proxys ist und die linkeste IP-Adresse die Adresse des ursprünglichen Clients ist (vorausgesetzt, es handelt sich um einen gut konfigurierten Client und Proxys).

## Beschreibung

Wenn ein Client direkt mit einem Server verbindet, wird die IP-Adresse des Clients an den Server gesendet und oft in Server-Access-Logs geschrieben.
Wenn eine Client-Verbindung über irgendwelche Forward- oder Reverse-Proxys läuft, sieht der Server nur die IP-Adresse des letzten Proxys, die oft wenig nützlich ist.
Das gilt insbesondere dann, wenn der letzte Proxy ein Load Balancer ist, der Teil derselben Bereitstellung wie der Server ist.
Um dem Server eine nützlichere Client-IP-Adresse zu liefern, wird der `X-Forwarded-For` Request-Header verwendet.

Für detaillierte Anleitungen zur Verwendung von `X-Forwarded-For` siehe die Abschnitte [Parsing](#parsing) und [Auswahl einer IP-Adresse](#auswahl_einer_ip-adresse).

### Sicherheits- und Datenschutzbedenken

Dieser Header legt absichtlich datenschutzrelevante Informationen offen, wie die IP-Adresse des Clients. Daher muss der Schutz der Nutzerprivatsphäre beim Umgang mit diesem Header berücksichtigt werden.

Wenn Sie wissen, dass alle Proxys in der Anfragenkette vertrauenswürdig sind (d.h. Sie kontrollieren sie) und korrekt konfiguriert sind, können die von Ihren Proxys hinzugefügten Teile des Headers als vertrauenswürdig angesehen werden.
Wenn irgendein Proxy böswillig oder falsch konfiguriert ist, kann jeder Teil des Headers, der nicht von einem vertrauenswürdigen Proxy hinzugefügt wurde, gefälscht sein oder ein unerwartetes Format oder einen unerwarteten Inhalt haben.
Wenn der Server direkt vom Internet aus erreichbar ist – auch wenn er sich hinter einem vertrauenswürdigen Reverse-Proxy befindet – kann **kein Teil** der `X-Forwarded-For` IP-Liste als vertrauenswürdig oder sicher für sicherheitsrelevante Anwendungen angesehen werden.

Jede sicherheitsbezogene Verwendung von `X-Forwarded-For` (wie etwa zur Ratenbegrenzung oder IP-basierten Zugriffskontrolle) _darf nur_ IP-Adressen nutzen, die von einem vertrauenswürdigen Proxy hinzugefügt wurden.
Die Verwendung unzuverlässiger Werte kann zu einer Umgehung von Ratenbegrenzungen, zu einem Umgehen von Zugriffskontrollen, zu Erschöpfung von Arbeitsspeicher oder zu anderen negativen Sicherheits- oder Verfügbarkeitskonsequenzen führen.

Linke (nicht vertrauenswürdige) Werte dürfen nur in Fällen verwendet werden, bei denen die Verwendung gefälschter Werte keine negativen Auswirkungen hat.

### Parsing

Falsches Parsen des `X-Forwarded-For` Headers kann sich negativ auf die Sicherheit auswirken, wie im vorherigen Abschnitt beschrieben.
Aus diesem Grund sollten beim Parsen der Header-Werte die folgenden Punkte berücksichtigt werden.

Es können mehrere `X-Forwarded-For` Headers in einer Anfrage vorhanden sein.
Die IP-Adressen in diesen Headers müssen als eine einzige Liste behandelt werden, beginnend mit der ersten IP-Adresse des ersten Headers und fortsetzend bis zur letzten IP-Adresse des letzten Headers.
Es gibt zwei Möglichkeiten, diese einzige Liste zu erstellen:

- Verbinden Sie die vollständigen `X-Forwarded-For` Header-Werte mit Kommata und teilen Sie sie dann bei Kommata in eine Liste auf, oder
- teilen Sie jeden `X-Forwarded-For` Header bei Kommata in Listen auf und verbinden Sie dann die Listen.

Es reicht nicht aus, nur einen von mehreren `X-Forwarded-For` Headers zu verwenden.

Einige Reverse-Proxys verbinden automatisch mehrere `X-Forwarded-For` Headers zu einem einzigen, aber es ist sicherer nicht anzunehmen, dass dies der Fall ist.

### Auswahl einer IP-Adresse

Bei der Auswahl einer Adresse muss die vollständige Liste der IPs (aus allen `X-Forwarded-For` Headers) verwendet werden.

Bei der Auswahl der `X-Forwarded-For` IP-Adresse, die dem Client am nächsten ist (nicht vertrauenswürdig und _nicht_ für sicherheitsrelevante Zwecke), sollte die erste IP von links, die _eine gültige Adresse_ ist und _nicht privat/intern_ ist, ausgewählt werden.

> [!NOTE]
> Wir sagen oben "eine gültige Adresse", weil gefälschte Werte möglicherweise keine echten IP-Adressen sind.
> Zusätzlich sagen wir "nicht intern/privat", weil Clients möglicherweise Proxys in ihrem internen Netzwerk verwendet haben, die Adressen aus dem [privaten IP-Bereich](https://en.wikipedia.org/wiki/Private_network) hinzugefügt haben könnten.

Um die erste _vertrauenswürdige_ `X-Forwarded-For` Client-IP-Adresse auszuwählen, sind zusätzliche Konfigurationen erforderlich. Es gibt zwei gängige Methoden:

- Anzahl vertrauenswürdiger Proxys
  - : Die Anzahl der Reverse-Proxys zwischen dem Internet und dem Server wird konfiguriert.
    Die `X-Forwarded-For` IP-Liste wird von der rechtesten IP-Adresse, um diese Anzahl minus eins, durchsucht.
    Zum Beispiel, wenn es nur einen Reverse Proxy gibt, fügt dieser Proxy die Client-IP-Adresse hinzu, sodass die rechteste Adresse verwendet werden sollte.
    Wenn es drei Reverse-Proxys gibt, werden die letzten beiden IP-Adressen intern sein.
- Liste vertrauenswürdiger Proxys
  - : Die IPs oder IP-Bereiche der vertrauenswürdigen Reverse-Proxys werden konfiguriert.
    Die `X-Forwarded-For` IP-Liste wird von rechts nach links durchsucht, wobei alle Adressen, die auf der Liste der vertrauenswürdigen Proxys stehen, übersprungen werden.
    Die erste nicht zutreffende Adresse ist die Zieladresse.

Die erste vertrauenswürdige `X-Forwarded-For` IP-Adresse kann zu einem nicht vertrauenswürdigen Zwischenproxy gehören und nicht zum tatsächlichen Client, aber sie ist die einzige IP, die zur Identifizierung eines Clients zu Sicherheitszwecken geeignet ist.

## Beispiele

### Client- und Proxy-IPs

Aus dem folgenden `X-Forwarded-For` Request-Header können wir schließen, dass die Client-IP-Adresse `203.0.113.195` ist und die Anfrage durch zwei Proxys gegangen ist.
Der erste Proxy hat eine IPv6-Adresse von `2001:db8:85a3:8d3:1319:8a2e:370:7348` und der letzte Proxy in der Anfragenkette hat eine IPv4-Adresse von `198.51.100.178`:

```http
X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Spezifikationen

Teil keiner aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}} Headers
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
- [Was ist X-Forwarded-For und wann können Sie ihm vertrauen?](https://httptoolkit.com/blog/what-is-x-forwarded-for/) httptoolkit.com (2024)
