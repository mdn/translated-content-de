---
title: X-Forwarded-For header
short-title: X-Forwarded-For
slug: Web/HTTP/Reference/Headers/X-Forwarded-For
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`X-Forwarded-For`** (XFF) {{Glossary("request_header", "Anforderungsheader")}} ist ein de-facto Standard-Header, um die ursprüngliche IP-Adresse eines Clients zu identifizieren, der über einen {{Glossary("proxy_server", "Proxy-Server")}} mit einem Webserver verbindet.

Eine standardisierte Version dieses Headers ist der HTTP {{HTTPHeader("Forwarded")}}-Header, obwohl dieser viel seltener verwendet wird.

> [!WARNING]
> Unsachgemäßer Gebrauch dieses Headers kann ein Sicherheitsrisiko darstellen.
> Details finden Sie im Abschnitt [Sicherheits- und Datenschutzbedenken](#sicherheits-_und_datenschutzbedenken).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Forwarded-For: <client>, <proxy>
X-Forwarded-For: <client>, <proxy>, …, <proxyN>
```

Ein Beispiel: Eine IPV6-Client-IP im ersten Header, eine IPV4-Client-IP im zweiten Header und eine IPV4-Client-IP sowie eine IPV6-Proxy-IP im dritten Beispiel:

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
    Wenn eine Anfrage durch mehrere Proxys verläuft, werden die IP-Adressen jedes aufeinanderfolgenden Proxys aufgelistet.
    Das bedeutet, dass die rechteste IP-Adresse die IP-Adresse des neuesten Proxys ist und die linkeste IP-Adresse die Adresse des ursprünglichen Clients ist (bei gutem Verhalten von Client und Proxys).

## Beschreibung

Wenn ein Client direkt mit einem Server verbindet, wird die IP-Adresse des Clients an den Server gesendet und oft in Serverzugriffsprotokollen notiert.
Wenn eine Clientverbindung über einen oder mehrere Forward- oder Reverse-Proxys läuft, sieht der Server nur die IP-Adresse des letzten Proxys, was oft wenig nützlich ist.
Das gilt besonders, wenn der letzte Proxy ein Load-Balancer ist, der Teil derselben Bereitstellung wie der Server ist.
Um eine nützlichere Client-IP-Adresse an den Server zu übermitteln, wird der `X-Forwarded-For` Anforderungsheader verwendet.

Für eine detaillierte Anleitung zur Verwendung von `X-Forwarded-For` siehe die Abschnitte [Parsing](#parsing) und [Auswahl einer IP-Adresse](#auswahl_einer_ip-adresse).

### Sicherheits- und Datenschutzbedenken

Dieser Header gibt von Natur aus datenschutzsensible Informationen preis, wie z.B. die IP-Adresse des Clients.
Daher muss beim Einsatz dieses Headers der Datenschutz des Benutzers berücksichtigt werden.

Wenn Sie wissen, dass alle Proxys in der Anforderungskette vertrauenswürdig sind (d.h. Sie kontrollieren sie) und korrekt konfiguriert sind, können die Teile des Headers, die von Ihren Proxys hinzugefügt werden, als vertrauenswürdig angesehen werden.
Wenn ein Proxy bösartig oder fehlkonfiguriert ist, kann jeder Teil des Headers, der nicht von einem vertrauenswürdigen Proxy hinzugefügt wurde, gefälscht oder in einem unerwarteten Format oder mit unerwartetem Inhalt versehen sein.
Wenn der Server direkt vom Internet aus erreichbar ist – selbst wenn er sich auch hinter einem vertrauenswürdigen Reverse-Proxy befindet – kann **kein Teil** der `X-Forwarded-For`-IP-Liste als vertrauenswürdig oder sicher für sicherheitsrelevante Zwecke angesehen werden.

Jede sicherheitsrelevante Nutzung von `X-Forwarded-For` (wie Rate Limiting oder IP-basierte Zugangskontrolle) _darf nur_ die IP-Adressen verwenden, die von einem vertrauenswürdigen Proxy hinzugefügt wurden.
Die Verwendung nicht vertrauenswürdiger Werte kann zu einer Umgehung des Ratenbegrenzers, einer Umgehung der Zugangskontrolle, einem Erschöpfen des Speichers oder anderen negativen Sicherheits- oder Verfügbarkeitsfolgen führen.

Linkeste (nicht vertrauenswürdige) Werte dürfen nur in Fällen verwendet werden, in denen die Verwendung gefälschter Werte keine negativen Auswirkungen hat.

### Parsing

Unsachgemäße Verarbeitung des `X-Forwarded-For`-Headers kann negative Sicherheitsfolgen haben, wie im vorherigen Abschnitt beschrieben.
Aus diesem Grund sollten die folgenden Punkte bei der Verarbeitung der Header-Werte berücksichtigt werden.

Es können mehrere `X-Forwarded-For`-Header in einer Anfrage vorhanden sein.
Die IP-Adressen in diesen Headers müssen als eine einzige Liste behandelt werden, beginnend mit der ersten IP-Adresse des ersten Headers und weiter zur letzten IP-Adresse des letzten Headers.
Es gibt zwei Möglichkeiten, diese Einzel-Liste zu erstellen:

- Verbinden Sie die vollständigen `X-Forwarded-For`-Headerwerte mit Kommas und teilen Sie sie dann durch Komma in eine Liste auf, oder
- teilen Sie jeden `X-Forwarded-For`-Header durch Komma in Listen auf und verbinden Sie dann die Listen.

Es ist unzureichend, nur einen der mehreren `X-Forwarded-For`-Headers zu verwenden.

Einige Reverse-Proxys fügen automatisch mehrere `X-Forwarded-For`-Headers zu einem zusammen, aber es ist sicherer, nicht davon auszugehen, dass dies der Fall ist.

### Auswahl einer IP-Adresse

Bei der Auswahl einer Adresse muss die vollständige Liste der IPs (aus allen `X-Forwarded-For`-Headers) verwendet werden.

Bei der Auswahl der `X-Forwarded-For`-IP-Adresse, die dem Client am nächsten ist (nicht vertrauenswürdig und _nicht_ für sicherheitsrelevante Zwecke), sollte die erste IP von links, die _eine gültige Adresse_ und _nicht privat/intern_ ist, ausgewählt werden.

> [!NOTE]
> Wir sagen "eine gültige Adresse" oben, weil gefälschte Werte möglicherweise keine tatsächlichen IP-Adressen sind.
> Zusätzlich sagen wir "nicht intern/privat", weil Clients möglicherweise Proxys in ihrem internen Netzwerk verwendet haben, die Adressen aus dem [privaten IP-Bereich](https://en.wikipedia.org/wiki/Private_network) hinzugefügt haben.

Um die erste _vertrauenswürdige_ `X-Forwarded-For`-Client-IP-Adresse auszuwählen, ist zusätzliche Konfiguration erforderlich.
Es gibt zwei gängige Methoden:

- Vertrauenswürdige Proxy-Anzahl
  - : Die Anzahl der Reverse-Proxys zwischen dem Internet und dem Server wird konfiguriert.
    Die `X-Forwarded-For`-IP-Liste wird von rechts nach links nach dieser Anzahl minus eins durchsucht.
    Zum Beispiel, wenn es nur einen Reverse-Proxy gibt, wird dieser Proxy die IP-Adresse des Clients hinzufügen, sodass die rechteste Adresse verwendet werden sollte.
    Wenn es drei Reverse-Proxys gibt, werden die letzten zwei IP-Adressen intern sein.
- Vertrauenswürdige Proxy-Liste
  - : Die IPs oder IP-Bereiche der vertrauenswürdigen Reverse-Proxys werden konfiguriert.
    Die `X-Forwarded-For`-IP-Liste wird von rechts nach links durchsucht und alle Adressen, die sich in der vertrauenswürdigen Proxy-Liste befinden, werden übersprungen.
    Die erste nicht übereinstimmende Adresse ist die Zieladresse.

Die erste vertrauenswürdige `X-Forwarded-For`-IP-Adresse kann zu einem nicht vertrauenswürdigen Zwischenproxy gehören und nicht zum eigentlichen Client, aber sie ist die einzige IP, die für Sicherheitszwecke geeignet ist, um einen Client zu identifizieren.

## Beispiele

### Client- und Proxy-IPs

Aus dem folgenden `X-Forwarded-For`-Anforderungsheader können wir entnehmen, dass die Client-IP-Adresse `203.0.113.195` ist und die Anfrage durch zwei Proxys gegangen ist.
Der erste Proxy hat eine IPv6-Adresse von `2001:db8:85a3:8d3:1319:8a2e:370:7348` und der letzte Proxy in der Anforderungskette hat eine IPv4-Adresse von `198.51.100.178`:

```http
X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}} Headers
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
- [What is X-Forwarded-For and when can you trust it?](https://httptoolkit.com/blog/what-is-x-forwarded-for/) httptoolkit.com (2024)
