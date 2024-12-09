---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`X-Forwarded-For`** (XFF) {{Glossary("request_header", "Anforderungsheader")}} ist ein de-facto Standard-Header zur Identifizierung der ursprünglichen IP-Adresse eines Clients, der über einen {{Glossary("proxy_server", "Proxy-Server")}} eine Verbindung zu einem Webserver herstellt.

Eine standardisierte Version dieses Headers ist der HTTP-{{HTTPHeader("Forwarded")}}-Header, obwohl dieser weitaus seltener verwendet wird.

> [!WARNING]
> Unsachgemäße Verwendung dieses Headers kann ein Sicherheitsrisiko darstellen.
> Einzelheiten finden Sie im Abschnitt [Sicherheits- und Datenschutzbedenken](#sicherheits-_und_datenschutzbedenken).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Die Client-IP-Adresse.
- `<proxy>`
  - : Eine Proxy-IP-Adresse.
    Wenn eine Anforderung mehrere Proxys durchläuft, werden die IP-Adressen jedes nachfolgenden Proxys aufgelistet.
    Das bedeutet, dass die rechteste IP-Adresse die IP-Adresse des zuletzt durchlaufenen Proxys ist und die linkeste IP-Adresse die Adresse des ursprünglichen Clients (unter der Annahme von gutem Verhalten von Clients und Proxys) ist.

## Beschreibung

Wenn ein Client direkt eine Verbindung zu einem Server aufbaut, wird die IP-Adresse des Clients an den Server gesendet und häufig in Serverzugriffsprotokollen festgehalten.
Wenn eine Client-Verbindung über Forward- oder Reverse-Proxys geleitet wird, sieht der Server nur die IP-Adresse des letzten Proxys, was oft wenig nützlich ist.
Das ist insbesondere dann der Fall, wenn der letzte Proxy ein Load Balancer ist, der Teil derselben Bereitstellung wie der Server ist.
Um dem Server eine nützlichere Client-IP-Adresse bereitzustellen, wird der `X-Forwarded-For`-Anforderungsheader verwendet.

Ausführliche Anleitungen zur Verwendung von `X-Forwarded-For` finden Sie in den Abschnitten [Parsing](#parsing) und [Auswahl einer IP-Adresse](#auswahl_einer_ip-adresse).

### Sicherheits- und Datenschutzbedenken

Dieser Header gibt von Haus aus privatheitsrelevante Informationen preis, wie z.B. die IP-Adresse des Clients.
Daher muss die Privatsphäre des Nutzers bei der Verwendung dieses Headers berücksichtigt werden.

Wenn Sie wissen, dass alle Proxys in der Anforderungskette vertrauenswürdig sind (d.h. Sie kontrollieren sie) und korrekt konfiguriert sind, können die Teile des Headers, die von Ihren Proxys hinzugefügt wurden, als vertrauenswürdig angesehen werden.
Wenn ein Proxy böswillig oder falsch konfiguriert ist, kann jeder Teil des Headers, der nicht von einem vertrauenswürdigen Proxy hinzugefügt wurde, gefälscht sein oder ein unerwartetes Format oder unerwartete Inhalte haben.
Wenn der Server direkt aus dem Internet erreichbar ist — selbst wenn er sich auch hinter einem vertrauenswürdigen Reverse-Proxy befindet — kann **kein Teil** der `X-Forwarded-For`-IP-Liste als vertrauenswürdig oder sicher für sicherheitsrelevante Zwecke angesehen werden.

Jegliche sicherheitsrelevante Verwendung von `X-Forwarded-For` (wie beispielsweise für Rate Limitierung oder IP-basierte Zugangskontrolle) _muss nur_ IP-Adressen verwenden, die von einem vertrauenswürdigen Proxy hinzugefügt wurden.
Die Verwendung unzuverlässiger Werte kann zu Umgehung von Ratenbegrenzern, Umgehung von Zugangskontrollen, Speicherauslastung oder anderen negativen Sicherheits- oder Verfügbarkeitsfolgen führen.

Linke (nicht vertrauenswürdige) Werte dürfen nur für Fälle genutzt werden, in denen eine Verwendung gefälschter Werte keine negativen Auswirkungen hat.

### Parsing

Fehlerhaftes Parsen des `X-Forwarded-For`-Headers kann negative Sicherheitsauswirkungen mit den im vorigen Abschnitt beschriebenen Folgen haben.
Deshalb sollten beim Parsen der Header-Werte die folgenden Punkte berücksichtigt werden.

Es können mehrere `X-Forwarded-For`-Header in einer Anforderung vorhanden sein.
Die IP-Adressen in diesen Headers müssen als eine einzige Liste behandelt werden, beginnend mit der ersten IP-Adresse des ersten Headers und fortfahrend bis zur letzten IP-Adresse des letzten Headers.
Es gibt zwei Methoden, um diese eine Liste zu erstellen:

- Verbinden Sie die vollständigen `X-Forwarded-For`-Header-Werte mit Kommas und teilen Sie sie dann durch Kommas in eine Liste auf, oder
- teilen Sie jeden `X-Forwarded-For`-Header durch Kommas in Listen und verbinden Sie dann die Listen.

Es ist unzureichend, nur einen von mehreren `X-Forwarded-For`-Headers zu verwenden.

Einige Reverse-Proxys verbinden automatisch mehrere `X-Forwarded-For`-Headers zu einem, aber es ist sicherer, nicht davon auszugehen, dass dies der Fall ist.

### Auswahl einer IP-Adresse

Bei der Adressauswahl muss die vollständige Liste der IPs (aus allen `X-Forwarded-For`-Headers) verwendet werden.

Beim Wählen der Ihrer Meinung nach _nicht vertrauenswürdigen_ `X-Forwarded-For`-IP-Adresse, die dem Client am nächsten ist (nicht für sicherheitsrelevante Zwecke), sollte die erste Adresse von der linken Seite genommen werden, die _eine gültige Adresse_ ist und _nicht privat/intern_ ist.

> [!NOTE]
> Wir sagen oben "eine gültige Adresse", weil gefälschte Werte möglicherweise keine tatsächlichen IP-Adressen sind.
> Außerdem sagen wir "nicht intern/privat", weil Clients möglicherweise Proxys in ihrem internen Netzwerk verwendet haben, die möglicherweise Adressen aus dem [privaten IP-Bereich](https://de.wikipedia.org/wiki/Privates_Netzwerk) hinzugefügt haben.

Für die Auswahl der ersten _vertrauenswürdigen_ `X-Forwarded-For`-Client-IP-Adresse ist eine zusätzliche Konfiguration erforderlich.
Es gibt zwei gängige Methoden:

- Zählung vertrauenswürdiger Proxys
  - : Die Anzahl der Reverse-Proxys zwischen dem Internet und dem Server wird konfiguriert.
    Die `X-Forwarded-For`-IP-Liste wird vom rechtesten Wert um diese Anzahl minus eins durchsucht.
    Zum Beispiel, wenn es nur einen Reverse-Proxy gibt, fügt dieser die Client-IP-Adresse hinzu, sodass die rechteste Adresse verwendet werden sollte.
    Wenn es drei Reverse-Proxys gibt, werden die letzten zwei IP-Adressen intern sein.
- Liste vertrauenswürdiger Proxys
  - : Die IPs oder IP-Bereiche der vertrauenswürdigen Reverse-Proxys werden konfiguriert.
    Die `X-Forwarded-For`-IP-Liste wird von rechts durchsucht, wobei alle Adressen übersprungen werden, die auf der Liste der vertrauenswürdigen Proxys stehen.
    Die erste nicht übereinstimmende Adresse ist die Zieladresse.

Die erste vertrauenswürdige `X-Forwarded-For`-IP-Adresse könnte zu einem untrusted Zwischen-Proxy gehören und nicht zum tatsächlichen Client, aber es ist die einzige IP, die geeignet ist, einen Client für sicherheitsrelevante Zwecke zu identifizieren.

## Beispiele

### Client- und Proxy-IPs

Aus dem folgenden `X-Forwarded-For`-Anforderungsheader können wir ableiten, dass die Client-IP-Adresse `203.0.113.195` lautet und die Anfrage durch zwei Proxys gegangen ist.
Der erste Proxy hat eine IPv6-Adresse von `2001:db8:85a3:8d3:1319:8a2e:370:7348` und der letzte Proxy in der Anforderungskette hat eine IPv4-Adresse von `198.51.100.178`:

```http
X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Spezifikationen

Kein Teil einer aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}} Überschrift
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
- [Was ist X-Forwarded-For und wann kann man ihm vertrauen?](https://httptoolkit.com/blog/what-is-x-forwarded-for/) httptoolkit.com (2024)
