---
title: X-Forwarded-For
slug: Web/HTTP/Reference/Headers/X-Forwarded-For
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`X-Forwarded-For`** (XFF) {{Glossary("request_header", "Anforderungsheader")}} ist ein de-facto Standard-Header zur Identifizierung der ursprünglichen IP-Adresse eines Clients, der über einen {{Glossary("proxy_server", "Proxy-Server")}} eine Verbindung zu einem Webserver herstellt.

Eine standardisierte Version dieses Headers ist der HTTP-{{HTTPHeader("Forwarded")}}-Header, obwohl er viel seltener verwendet wird.

> [!WARNING]
> Unsachgemäßer Gebrauch dieses Headers kann ein Sicherheitsrisiko darstellen.
> Für Details siehe den Abschnitt [Sicherheits- und Datenschutzbedenken](#sicherheits-_und_datenschutzbedenken).

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

Zum Beispiel eine IPV6-Client-IP im ersten Header, eine IPV4-Client-IP im zweiten Header und eine IPV4-Client-IP sowie eine IPV6-Proxy-IP im dritten Beispiel:

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
    Wenn eine Anfrage durch mehrere Proxies geleitet wird, werden die IP-Adressen jedes aufeinanderfolgenden Proxys aufgelistet.
    Das bedeutet, dass die rechte IP-Adresse die IP-Adresse des zuletzt durchlaufenen Proxys ist und die linke IP-Adresse die Adresse des ursprünglichen Clients (vorausgesetzt, der Client und die Proxies verhalten sich korrekt) ist.

## Beschreibung

Wenn ein Client direkt mit einem Server verbunden ist, wird die IP-Adresse des Clients an den Server gesendet und oft in den Zugriffsprotokollen des Servers festgehalten.
Wenn eine Client-Verbindung durch Forward- oder Reverse-Proxies geleitet wird, sieht der Server nur die IP-Adresse des letzten Proxys, was oft wenig hilfreich ist.
Das gilt besonders, wenn der letzte Proxy ein Lastverteiler ist, der Teil derselben Bereitstellung wie der Server ist.
Um eine nützlichere Client-IP-Adresse an den Server zu liefern, wird der `X-Forwarded-For`-Anforderungsheader verwendet.

Für detaillierte Anleitungen zur Verwendung von `X-Forwarded-For`, siehe die Abschnitte [Analyse](#analyse) und [IP-Adresse auswählen](#ip-adresse_auswählen).

### Sicherheits- und Datenschutzbedenken

Dieser Header legt von Natur aus datenschutzsensible Informationen offen, wie zum Beispiel die IP-Adresse des Clients.
Daher muss der Schutz der Privatsphäre des Benutzers beim Verwenden dieses Headers beachtet werden.

Wenn Sie wissen, dass alle Proxies in der Anfragekette vertrauenswürdig sind (d. h. Sie kontrollieren sie) und ordnungsgemäß konfiguriert sind, können die von Ihren Proxies hinzugefügten Teile des Headers als vertrauenswürdig betrachtet werden.
Wenn ein Proxy böswillig oder fehlkonfiguriert ist, können alle Teile des Headers, die nicht von einem vertrauenswürdigen Proxy hinzugefügt wurden, gefälscht sein oder ein unerwartetes Format oder Inhalt haben.
Wenn der Server direkt aus dem Internet erreichbar ist – auch wenn er sich hinter einem vertrauenswürdigen Reverse-Proxy befindet – kann **kein Teil** der `X-Forwarded-For`-IP-Liste als vertrauenswürdig oder sicher für sicherheitsrelevante Verwendungen angesehen werden.

Jede sicherheitsrelevante Verwendung von `X-Forwarded-For` (z. B. zur Ratenbegrenzung oder IP-basierten Zugriffskontrolle) _muss nur_ IP-Adressen verwenden, die von einem vertrauenswürdigen Proxy hinzugefügt wurden.
Die Verwendung von nicht vertrauenswürdigen Werten kann zu Umgehungen der Ratenbegrenzung, Umgehungen der Zugriffskontrolle, Speichererschöpfung oder anderen negativen Sicherheits- oder Verfügbarkeitsfolgen führen.

Linke (nicht vertrauenswürdige) Werte dürfen nur in Fällen verwendet werden, in denen die Verwendung gefälschter Werte keine negativen Auswirkungen hat.

### Analyse

Unsachgemäße Analyse des `X-Forwarded-For`-Headers kann negative Sicherheitsauswirkungen haben, wie im vorherigen Abschnitt beschrieben wurde.
Deshalb sollten die folgenden Punkte bei der Analyse der Header-Werte berücksichtigt werden.

Es können mehrere `X-Forwarded-For`-Header in einer Anfrage vorhanden sein.
Die IP-Adressen in diesen Headern müssen als eine einzige Liste behandelt werden, beginnend mit der ersten IP-Adresse des ersten Headers und endend mit der letzten IP-Adresse des letzten Headers.
Es gibt zwei Möglichkeiten, diese einzelne Liste zu erstellen:

- Verbinden der gesamten Werte der `X-Forwarded-For`-Header mit Kommata und anschließendem Teilen der Liste durch Kommata, oder
- jedes `X-Forwarded-For`-Header durch Kommata teilen und dann die Listen verbinden.

Es ist unzureichend, nur einen von mehreren `X-Forwarded-For`-Headern zu verwenden.

Einige Reverse-Proxies verbinden automatisch mehrere `X-Forwarded-For`-Header zu einem, aber es ist sicherer, nicht davon auszugehen, dass dies der Fall ist.

### IP-Adresse auswählen

Beim Auswählen einer Adresse muss die vollständige Liste der IPs (aus allen `X-Forwarded-For`-Headern) verwendet werden.

Beim Auswählen der `X-Forwarded-For`-IP-Adresse, die dem Client am nächsten kommt (nicht vertrauenswürdig und _nicht_ für sicherheitsrelevante Zwecke), sollte die erste IP-Adresse von links gewählt werden, die _eine gültige Adresse_ und _nicht privat/intern_ ist.

> [!NOTE]
> Wir verwenden den Begriff "eine gültige Adresse", weil gefälschte Werte möglicherweise keine tatsächlichen IP-Adressen sind.
> Außerdem sagen wir "nicht intern/privat", weil Clients möglicherweise Proxies in ihrem internen Netzwerk verwendet haben, die Adressen aus dem [privaten IP-Bereich](https://en.wikipedia.org/wiki/Private_network) hinzugefügt haben könnten.

Bei der Auswahl der ersten _vertrauenswürdigen_ `X-Forwarded-For`-Client-IP-Adresse ist eine zusätzliche Konfiguration erforderlich.
Es gibt zwei gängige Methoden:

- Anzahl der vertrauenswürdigen Proxies
  - : Die Anzahl der Reverse-Proxies zwischen dem Internet und dem Server wird konfiguriert.
    Die `X-Forwarded-For`-IP-Liste wird von ganz rechts um diese Anzahl minus eins durchsucht.
    Wenn beispielsweise nur ein Reverse-Proxy vorhanden ist, fügt dieser Proxy die IP-Adresse des Clients hinzu, sodass die Adresse ganz rechts verwendet werden sollte.
    Wenn es drei Reverse-Proxies gibt, werden die letzten beiden IP-Adressen intern sein.
- Liste vertrauenswürdiger Proxies
  - : Die IPs oder IP-Bereiche der vertrauenswürdigen Reverse-Proxies werden konfiguriert.
    Die `X-Forwarded-For`-IP-Liste wird von ganz rechts durchsucht, wobei alle Adressen, die auf der Liste der vertrauenswürdigen Proxies stehen, übersprungen werden.
    Die erste nicht übereinstimmende Adresse ist die Zieladresse.

Die erste vertrauenswürdige `X-Forwarded-For`-IP-Adresse kann zu einem nicht vertrauenswürdigen Zwischenproxy gehören und nicht zum tatsächlichen Client, aber sie ist die einzige IP, die für sicherheitsrelevante Zwecke geeignet ist, um einen Client zu identifizieren.

## Beispiele

### Client- und Proxy-IPs

Aus dem folgenden `X-Forwarded-For`-Anforderungsheader können wir ableiten, dass die Client-IP-Adresse `203.0.113.195` ist und die Anfrage durch zwei Proxies geleitet wurde.
Der erste Proxy hat eine IPv6-Adresse von `2001:db8:85a3:8d3:1319:8a2e:370:7348` und der letzte Proxy in der Anfragenkette hat eine IPv4-Adresse von `198.51.100.178`:

```http
X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}} Header
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
- [Was ist X-Forwarded-For und wann ist es vertrauenswürdig?](https://httptoolkit.com/blog/what-is-x-forwarded-for/) httptoolkit.com (2024)
