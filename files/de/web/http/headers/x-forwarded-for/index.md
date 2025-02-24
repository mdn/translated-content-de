---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`X-Forwarded-For`** (XFF) {{Glossary("request_header", "Request-Header")}} ist ein de-facto Standard-Header zur Identifizierung der ursprünglichen IP-Adresse eines Clients, der über einen {{Glossary("proxy_server", "Proxy-Server")}} mit einem Webserver verbindet.

Eine standardisierte Version dieses Headers ist der HTTP-{{HTTPHeader("Forwarded")}}-Header, obwohl er viel seltener verwendet wird.

> [!WARNING]
> Unsachgemäße Verwendung dieses Headers kann ein Sicherheitsrisiko darstellen.
> Einzelheiten finden Sie im Abschnitt [Sicherheits- und Datenschutzbedenken](#sicherheits-_und_datenschutzbedenken).

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

Zum Beispiel eine IPV6-Client-IP im ersten Header, eine IPV4-Client-IP im zweiten Header und eine IPV4-Client-IP und eine IPV6-Proxy-IP im dritten Beispiel:

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348
X-Forwarded-For: 203.0.113.195
X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348
```

## Direktiven

- `<client>`
  - : Die IP-Adresse des Clients.
- `<proxy>`
  - : Eine Proxy-IP-Adresse.
    Wenn eine Anfrage über mehrere Proxies geht, werden die IP-Adressen jedes aufeinanderfolgenden Proxies aufgelistet.
    Dies bedeutet, dass die rechteste IP-Adresse die IP-Adresse des letzten Proxies ist und die linkeste IP-Adresse die Adresse des ursprünglichen Clients ist (sofern Client und Proxies korrekt arbeiten).

## Beschreibung

Wenn ein Client direkt eine Verbindung zu einem Server herstellt, wird die IP-Adresse des Clients an den Server gesendet und häufig in den Zugriffsprotokollen des Servers erfasst.
Wenn eine Client-Verbindung durch beliebige Forward- oder Reverse-Proxies erfolgt, sieht der Server nur die IP-Adresse des letzten Proxies, was häufig wenig nützlich ist.
Dies trifft insbesondere zu, wenn der letzte Proxy ein Load Balancer ist, der Teil derselben Bereitstellung wie der Server ist.
Um dem Server eine nützlichere Client-IP-Adresse bereitzustellen, wird der `X-Forwarded-For`-Request-Header verwendet.

Für detaillierte Anleitungen zur Verwendung von `X-Forwarded-For` siehe die Abschnitte [Parsing](#parsing) und [Auswahl einer IP-Adresse](#auswahl_einer_ip-adresse).

### Sicherheits- und Datenschutzbedenken

Dieser Header gibt durch das Design datenschutzsensiblen Informationen preis, wie zum Beispiel die IP-Adresse des Clients.
Daher muss der Datenschutz der Benutzer berücksichtigt werden, wenn dieser Header verwendet wird.

Wenn Sie wissen, dass alle Proxies in der Anfragenequest-Kette vertrauenswürdig sind (d.h., Sie kontrollieren sie) und korrekt konfiguriert sind, können die von Ihren Proxies hinzugefügten Teile des Headers als vertrauenswürdig angesehen werden.
Wenn ein Proxy böswillig oder falsch konfiguriert ist, kann jeder Teil des Headers, der nicht von einem vertrauenswürdigen Proxy hinzugefügt wurde, gefälscht sein oder ein unerwartetes Format oder unerwarteten Inhalt haben.
Wenn der Server direkt vom Internet aus erreichbar ist – selbst wenn er auch hinter einem vertrauenswürdigen Reverse-Proxy steht – kann **kein Teil** der `X-Forwarded-For`-IP-Liste als vertrauenswürdig oder sicher für sicherheitsbezogene Zwecke angesehen werden.

Jegliche sicherheitsrelevante Verwendung von `X-Forwarded-For` (wie z.B. für Ratenlimitierung oder IP-basierte Zugriffskontrolle) _darf nur_ IP-Adressen verwenden, die von einem vertrauenswürdigen Proxy hinzugefügt wurden.
Die Nutzung nicht vertrauenswürdiger Werte kann zur Umgehung von Ratenbegrenzern, Zugriffskontrollen, Speicherauslastung oder anderen negativen Sicherheits- oder Verfügbarkeitsproblemen führen.

Linke (nicht vertrauenswürdige) Werte dürfen nur für Fälle verwendet werden, bei denen die Verwendung gefälschter Werte keine negativen Auswirkungen hat.

### Parsing

Falsches Parsing des `X-Forwarded-For`-Headers kann negative Sicherheitsauswirkungen mit den im vorherigen Abschnitt beschriebenen Folgen haben.
Aus diesem Grund sollten beim Parsen der Header-Werte die folgenden Punkte beachtet werden.

Es können mehrere `X-Forwarded-For`-Header in einer Anfrage vorhanden sein.
Die IP-Adressen in diesen Headers müssen als eine einzige Liste behandelt werden, beginnend mit der ersten IP-Adresse des ersten Headers und weitergehend zur letzten IP-Adresse des letzten Headers.
Es gibt zwei Möglichkeiten, diese einzelne Liste zu erstellen:

- Kombinieren Sie die vollständigen `X-Forwarded-For`-Header-Werte mit Kommas und teilen Sie sie dann mit Kommata in einer Liste, oder
- teilen Sie jeden `X-Forwarded-For`-Header mit Kommata in Listen und kombinieren dann die Listen.

Es ist unzureichend, nur einen von mehreren `X-Forwarded-For`-Headers zu verwenden.

Einige Reverse-Proxies kombinieren automatisch mehrere `X-Forwarded-For`-Headers in einen, aber es ist sicherer, dies nicht als gegeben anzunehmen.

### Auswahl einer IP-Adresse

Beim Auswählen einer Adresse muss die vollständige Liste der IPs (aus allen `X-Forwarded-For`-Headers) verwendet werden.

Wenn man die `X-Forwarded-For`-IP-Adresse auswählt, die dem Client am nächsten ist (nicht vertrauenswürdig und _nicht_ für sicherheitsbezogene Zwecke), sollte die erste IP von links ausgewählt werden, die _eine gültige Adresse_ ist und _nicht privat/intern_ ist.

> [!NOTE]
> Wir sagen "eine gültige Adresse" oben, weil gefälschte Werte möglicherweise keine tatsächlichen IP-Adressen sind.
> Zusätzlich sagen wir "nicht intern/privat", weil Clients möglicherweise Proxies in ihrem internen Netzwerk verwendet haben, die Adressen aus dem [privaten IP-Bereich](https://en.wikipedia.org/wiki/Private_network) hinzugefügt haben könnten.

Um die erste _vertrauenswürdige_ `X-Forwarded-For`-Client-IP-Adresse auszuwählen, ist zusätzliche Konfiguration erforderlich.
Es gibt zwei gebräuchliche Methoden:

- Anzahl der vertrauenswürdigen Proxies
  - : Die Anzahl der Reverse-Proxies zwischen dem Internet und dem Server wird konfiguriert.
    Die `X-Forwarded-For`-IP-Liste wird von rechts nach links bis zu dieser Anzahl minus eins durchsucht.
    Zum Beispiel, wenn es nur einen Reverse-Proxy gibt, der diesen Proxy hinzugefügt hat, soll die Client-IP-Adresse verwendet werden, sodass die rechte Adresse verwendet werden soll.
    Wenn es drei Reverse-Proxies gibt, sind die letzten beiden IP-Adressen intern.
- Liste der vertrauenswürdigen Proxies
  - : Die IPs oder IP-Bereiche der vertrauenswürdigen Reverse-Proxies werden konfiguriert.
    Die `X-Forwarded-For`-IP-Liste wird von rechts nach links durchsucht, wobei alle Adressen übersprungen werden, die in der Liste der vertrauenswürdigen Proxies stehen.
    Die erste nicht übereinstimmende Adresse ist die Zieladresse.

Die erste vertrauenswürdige `X-Forwarded-For`-IP-Adresse kann zu einem nicht vertrauenswürdigen Zwischenproxy anstelle des tatsächlichen Clients gehören, aber es ist die einzige IP, die für sicherheitsbezogene Zwecke zur Identifizierung eines Clients geeignet ist.

## Beispiele

### Client- und Proxy-IPs

Aus dem folgenden `X-Forwarded-For`-Request-Header können wir schließen, dass die Client-IP-Adresse `203.0.113.195` ist und die Anfrage durch zwei Proxies geleitet wurde.
Der erste Proxy hat eine IPv6-Adresse von `2001:db8:85a3:8d3:1319:8a2e:370:7348` und der letzte Proxy in der Anfragenequest-Kette hat eine IPv4-Adresse von `198.51.100.178`:

```http
X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}} headers
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
- [Was ist X-Forwarded-For und wann können Sie ihm vertrauen?](https://httptoolkit.com/blog/what-is-x-forwarded-for/) httptoolkit.com (2024)
