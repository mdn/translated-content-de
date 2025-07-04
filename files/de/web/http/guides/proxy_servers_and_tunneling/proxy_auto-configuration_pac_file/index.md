---
title: Proxy Auto-Configuration (PAC)-Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Eine **Proxy Auto-Configuration (PAC)**-Datei ist eine JavaScript-Funktion, die bestimmt, ob Anforderungen des Webbrowsers (HTTP, HTTPS und FTP) direkt an das Ziel gehen oder an einen Webproxy-Server weitergeleitet werden. Die JavaScript-Funktion, die in der PAC-Datei enthalten ist, definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die aufgerufene URL. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) kann dies deaktiviert werden, indem `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` gesetzt wird oder durch Starten mit dem `--unsafe-pac-url` Befehlszeilen-Flag. (In Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit mehr, das Entfernen des Pfads zu deaktivieren; seit Chrome 81 gilt das Entfernen des Pfads nicht mehr für HTTP-URLs, es besteht jedoch Interesse, dieses Verhalten an HTTPS anzugleichen); in Firefox lautet die Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur der Bequemlichkeit; es ist derselbe String zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im Abschnitt **Format des Rückgabewerts** unten definiert.

### Format des Rückgabewerts

- Die JavaScript-Funktion gibt einen einzelnen String zurück.
- Ist der String null, sollten keine Proxys verwendet werden.
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt hergestellt werden, ohne Proxys
- `PROXY host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server sollte verwendet werden

Neuere Versionen von Firefox unterstützen ebenfalls:

- `HTTP host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy sollte verwendet werden
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCK-Version) sollte verwendet werden

Wenn es mehrere durch Semikolons getrennte Einstellungen gibt, wird die am weitesten links stehende Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet, usw.

Der Browser versucht automatisch, einen zuvor nicht reagierenden Proxy nach 30 Minuten erneut zu kontaktieren. Weitere Versuche werden nach einer Stunde fortgesetzt, wobei jedes Mal 30 Minuten zur verstrichenen Zeit zwischen den Versuchen hinzugefügt werden.

Wenn alle Proxys ausfallen und keine DIRECT-Option angegeben wurde, wird der Browser fragen, ob Proxys vorübergehend ignoriert werden sollen und direkte Verbindungen versucht werden sollen. Nach 20 Minuten fragt der Browser, ob Proxys erneut versucht werden sollen, und fragt erneut nach weiteren 40 Minuten. Abfragen werden fortgesetzt, wobei jedes Mal 20 Minuten zur verstrichenen Zeit zwischen den Anfragen hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Der primäre Proxy ist w3proxy:8080; falls dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Selbe wie oben, aber wenn beide Proxys ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im obigen ersten Beispiel würde Netscape eine Benutzerbestätigung zum Herstellen direkter Verbindungen anfordern; in diesem Fall ist keine Benutzereingabe erforderlich.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Auto-Konfigurationsdatei sollte mit der Dateinamenerweiterung .pac gespeichert werden: `proxy.pac`.

Der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Konfigurieren Sie anschließend Ihren Server, um die .pac Dateinamenerweiterung dem MIME-Typ zuzuordnen.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer in einer eigenen Datei gespeichert werden und nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Die JavaScripts müssen natürlich bearbeitet werden, um den Domainnamen und/oder die Subnetze Ihrer Website widerzuspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Auf Hostnamen basierende Bedingungen
  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Verwandte Hilfsfunktionen
  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- Auf URL/Hostname basierende Bedingungen
  - [`shExpMatch()`](#shexpmatch)

- Zeitbasierte Bedingungen
  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Protokollierungs-Hilfsdienstprogramm
  - [`alert()`](#alert)

- Es gab ein vordefiniertes assoziatives Array (Objekt), das bereits definiert war, weil es zur damaligen Zeit in JavaScript nicht möglich war, es selbst zu definieren:
  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser)-Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei heißt `proxy.pac`
> - Befehlszeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (übergibt den `host`-Parameter `www.mozilla.org` und den `url`-Parameter `https://www.mozilla.org`)

### isPlainHostName()

#### Syntax

```js-nolint
isPlainHostName(host)
```

#### Parameter

- host
  - : Der Hostname aus der URL (ohne Portnummer).

#### Beschreibung

Gibt `true` zurück, wenn und nur wenn kein Domainname im Hostnamen vorhanden ist (keine Punkte).

#### Beispiele

```js
isPlainHostName("www.mozilla.org"); // false
isPlainHostName("www"); // true
```

### `dnsDomainIs()`

#### Syntax

```js-nolint
dnsDomainIs(host, domain)
```

#### Parameter

- host
  - : Ist der Hostname aus der URL.
- domain
  - : Ist der Domainname, gegen den der Hostname getestet wird.

#### Beschreibung

Gibt `true` zurück, wenn und nur wenn die Domäne des Hostnamens übereinstimmt.

#### Beispiele

```js-nolint
dnsDomainIs("www.mozilla.org", ".mozilla.org") // true
dnsDomainIs("www", ".mozilla.org") // false
```

### localHostOrDomainIs()

#### Syntax

```js-nolint
localHostOrDomainIs(host, hostDom)
```

#### Parameter

- host
  - : Der Hostname aus der URL.
- hostDom
  - : Vollständig qualifizierter Hostname zum Abgleich.

#### Beschreibung

Ist `true`, wenn der Hostname _genau_ mit dem angegebenen Hostnamen übereinstimmt oder wenn im Hostnamen kein Domainname-Teil vorhanden ist, aber der unqualifizierte Hostname übereinstimmt.

#### Beispiele

```js-nolint
localHostOrDomainIs("www.mozilla.org", "www.mozilla.org") // true (exact match)
localHostOrDomainIs("www", "www.mozilla.org") // true (hostname match, domain not specified)
localHostOrDomainIs("www.google.com", "www.mozilla.org") // false (domain name mismatch)
localHostOrDomainIs("home.mozilla.org", "www.mozilla.org") // false (hostname mismatch)
```

### isResolvable()

#### Syntax

```js-nolint
isResolvable(host)
```

#### Parameter

- host
  - : ist der Hostname aus der URL.

Versucht, den Hostnamen aufzulösen. Gibt `true` zurück, falls erfolgreich.

#### Beispiele

```js-nolint
isResolvable("www.mozilla.org") // true
```

### isInNet()

#### Syntax

```js-nolint
isInNet(host, pattern, mask)
```

#### Parameter

- host
  - : ein DNS-Hostname oder eine IP-Adresse. Wenn ein Hostname übergeben wird, wird er von dieser Funktion in eine IP-Adresse aufgelöst.
- pattern
  - : ein IP-Adressmuster im Punkt-Getrennt-Format.
- mask
  - : Maske für das IP-Adressmuster, die informiert, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet übereinstimmen.

`True`, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

Das Spezifizieren von Pattern und Maske erfolgt auf die gleiche Weise wie bei der SOCKS-Konfiguration.

#### Beispiele

```js
function FindProxyForURL(url, host) {
  alert(isInNet(host, "192.0.2.172", "255.255.255.255"));
  // "PAC-alert: true"
}
```

### dnsResolve()

```js-nolint
dnsResolve(host)
```

#### Parameter

- host
  - : Aufzulösender Hostname.

Löst den gegebenen DNS-Hostnamen in eine IP-Adresse auf und gibt ihn im Punkt-Getrennt-Format als String zurück.

#### Beispiel

```js
dnsResolve("www.mozilla.org"); // returns the string "104.16.41.2"
```

### convert_addr()

#### Syntax

```js-nolint
convert_addr(ipaddr)
```

#### Parameter

- ipaddr
  - : Jede gepunktete Adresse wie eine IP-Adresse oder Maske.

Verkettet die vier durch Punkte getrennten Bytes zu einem 4-Byte-Wort und konvertiert es in dezimale Darstellung.

#### Beispiel

```js
convert_addr("192.0.2.172"); // returns the decimal number 1745889538
```

### myIpAddress()

#### Syntax

```js-nolint
myIpAddress()
```

#### Parameter

(none)

#### Rückgabewert

Gibt die Server-IP-Adresse des Computers zurück, auf dem Firefox ausgeführt wird, als String im Punkt-Getrennt-Integer-Format. Um hilfreicher zu sein, versucht es mehrere Alternativen, bevor es auf die Loopback-Adresse (wie `127.0.0.1`) zurückfällt.

#### Beispiel

```js-nolint
myIpAddress()
```

### dnsDomainLevels()

#### Syntax

```js-nolint
dnsDomainLevels(host)
```

#### Parameter

- host
  - : ist der Hostname aus der URL.

Gibt die Anzahl (Ganzzahl) der DNS-Domänenebenen (Anzahl der Punkte) im Hostnamen zurück.

#### Beispiele

```js-nolint
dnsDomainLevels("www") // 0
dnsDomainLevels("mozilla.org") // 1
dnsDomainLevels("www.mozilla.org"); // 2
```

### shExpMatch()

#### Syntax

```js-nolint
shExpMatch(str, shExp)
```

#### Parameter

- str
  - : ist ein beliebiger zu vergleichender String (z. B. die URL oder der Hostname).
- shExp
  - : ist ein Shell-Ausdruck, gegen den verglichen wird.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für bestimmte Glob-Ausdruck-Syntax variiert zwischen den Browsern:
`*` (passt auf beliebig viele Zeichen) und `?` (passt auf ein Zeichen) werden immer unterstützt,
während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Reguläre Ausdrücke typischerweise eine mächtigere und konsistentere Möglichkeit, URLs (und andere Strings) zu mustern.

#### Beispiele

```js
shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // returns true
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // returns false
```

### weekdayRange()

#### Syntax

```js-nolint
weekdayRange(wd1, wd2)
weekdayRange(wd1, wd2, gmt)
```

> [!NOTE]
> (Vor Firefox 49) wd1 muss kleiner als wd2 sein, wenn die Funktion diese Parameter als Bereich auswerten soll. Siehe die untenstehende Warnung.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentags-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder der String "GMT" oder wird weggelassen.

Nur der erste Parameter ist obligatorisch. Der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Wochentag, den der Parameter darstellt, einen Wert von `true` zurück. Wenn als zweiter Parameter der String "GMT" angegeben wird, werden die Zeiten als GMT-Zeiten angenommen. Andernfalls werden sie als lokale Zeitzone angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der Parameter "GMT" angegeben ist, werden die Zeiten als GMT-Zeiten angenommen. Andernfalls wird die lokale Zeitzone verwendet.

> [!WARNING]
> _Die Reihenfolge der Tage spielt eine Rolle_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer als `true` ausgewertet.
> Jetzt wird `weekdayRange("WED", "SUN")` nur als `true` ausgewertet,
> wenn der aktuelle Tag Mittwoch oder Sonntag ist.

#### Beispiele

```js-nolint
weekdayRange("MON", "FRI") // returns true Monday through Friday (local timezone)
weekdayRange("MON", "FRI", "GMT") // returns true Monday through Friday (GMT timezone)
weekdayRange("SAT") // returns true on Saturdays local time
weekdayRange("SAT", "GMT") // returns true on Saturdays GMT time
weekdayRange("FRI", "MON") // returns true Friday and Monday only (note, the order does matter!)
```

### dateRange()

#### Syntax

```js-nolint
dateRange(dayOrMonthOrYear)
dateRange(dayOrMonthOrYear, gmt)  // ambiguity is resolved by assuming year is greater than 31
dateRange(day1, day2)
dateRange(day1, day2, gmt)
dateRange(month1, month2)
dateRange(month1, month2, gmt)
dateRange(year1, year2)
dateRange(year1, year2, gmt)
dateRange(day1, month1, day2, month2)
dateRange(day1, month1, day2, month2, gmt)
dateRange(month1, year1, month2, year2)
dateRange(month1, year1, month2, year2, gmt)
dateRange(day1, month1, year1, day2, month2, year2)
dateRange(day1, month1, year1, day2, month2, year2, gmt)
```

> [!NOTE]
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 muss kleiner als month2 sein, und year1 muss kleiner als year2 sein, wenn die Funktion diese Parameter als Bereich auswerten soll. Siehe die untenstehende Warnung.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Ganzzahl).
- month
  - : Ist einer der geordneten Monats-Strings: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- year
  - : Ist die geordnete vollständige Jahreszahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Ist entweder der String "GMT", was den Zeitvergleich in der GMT-Zeitzone stattfinden lässt, oder wird weggelassen. Wenn nicht angegeben, werden die Zeiten als lokale Zeitzone angenommen.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion an Tagen, die dieser Spezifikation entsprechen, einen wahren Wert zurück. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge der Tage, Monate und Jahre spielt eine Rolle**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer als `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur als `true` ausgewertet, wenn der aktuelle Monat Dezember oder Januar ist.

#### Beispiele

```js-nolint
dateRange(1) // returns true on the first day of each month, local timezone
dateRange(1, "GMT") // returns true on the first day of each month, GMT timezone
dateRange(1, 15) // returns true on the first half of each month
dateRange(24, "DEC");// returns true on 24th of December each year
dateRange("JAN", "MAR"); // returns true on the first quarter of the year

dateRange(1, "JUN", 15, "AUG");
// returns true from June 1st until August 15th, each year
// (including June 1st and August 15th)

dateRange(1, "JUN", 1995, 15, "AUG", 1995);
// returns true from June 1st, 1995, until August 15th, same year

dateRange("OCT", 1995, "MAR", 1996);
// returns true from October 1995 until March 1996
// (including the entire month of October 1995 and March 1996)

dateRange(1995);
// returns true during the entire year of 1995

dateRange(1995, 1997);
// returns true from beginning of year 1995 until the end of year 1997
```

### timeRange()

#### Syntax

```js-nolint
// The full range of expansions is analogous to dateRange.
timeRange(hour1, min1, sec1, hour2, min2, sec2)
timeRange(hour1, min1, sec1, hour2, min2, sec2, gmt)
```

> [!NOTE]
> (Vor Firefox 49) Die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn die Funktion diese Parameter als Bereich auswerten soll. Siehe die untenstehende Warnung.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 11 Uhr abends.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für GMT-Zeitzone oder nicht spezifiziert für lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion zu Zeiten, die dieser Spezifikation entsprechen, einen wahren Wert zurück. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge der Stunde, Minute und Sekunde spielt eine Rolle**; Vor Firefox 49 wird `timeRange(0, 23)` immer als `true` ausgewertet. Jetzt wird `timeRange(23, 0)` nur als `true` ausgewertet, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

#### Beispiele

```js-nolint
timerange(12); // returns true from noon to 1pm
timerange(12, 13) // returns true from noon to 1pm
timerange(12, "GMT") // returns true from noon to 1pm, in the GMT timezone
timerange(9, 17) // returns true from 9am to 5pm
timerange(8, 30, 17, 0) // returns true from 8:30am to 5:00pm
timerange(0, 0, 0, 0, 0, 30) // returns true between midnight and 30 seconds past midnight
```

### alert()

#### Syntax

```js-nolint
alert(message)
```

#### Parameter

- message
  - : Der zu protokollierende String.

Protokolliert die Nachricht in der Browser-Konsole.

#### Beispiele

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // logs the host name and its IP address
alert("Error: shouldn't reach this clause.") // log a message
```

## Beispiel 1

### Proxy für alles verwenden außer lokalen Hosts

> [!NOTE]
> Da alle folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind, oder solche, die sich in der lokalen Domäne befinden, werden direkt verbunden. Alles andere geht über `w3proxy.mozilla.org:8080`. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

> [!NOTE]
> Dies ist die einfachste und effizienteste Auto-Konfigurationsdatei für Fälle, in denen nur ein Proxy vorhanden ist.

## Beispiel 2

### Wie oben, jedoch Proxy für lokale Server verwenden, die außerhalb der Firewall liegen

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domäne gehören, aber außerhalb der Firewall liegen und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der `localHostOrDomainIs()` Funktion behandelt werden:

```js
function FindProxyForURL(url, host) {
  if (
    (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) &&
    !localHostOrDomainIs(host, "www.mozilla.org") &&
    !localHostOrDomainIs(host, "merchant.mozilla.org")
  ) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

Das obige Beispiel verwendet den Proxy für alles, außer lokale Hosts in der mozilla.org-Domäne, mit der weiteren Ausnahme, dass Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy laufen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen aus Effizienzgründen: `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die in der lokalen Domäne liegen, nicht für jede URL. Achten Sie darauf, die Klammern um den _oder_-Ausdruck vor dem _und_-Ausdruck hinzuzufügen, um das oben genannte effiziente Verhalten zu erreichen.

## Beispiel 3

### Proxy nur verwenden, wenn Host nicht auflösbar ist

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist es, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das Obige erfordert, dass der DNS jedes Mal konsultiert wird; es kann intelligent mit anderen Regeln gruppiert werden, sodass der DNS nur dann konsultiert wird, wenn andere Regeln kein Ergebnis liefern:

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isResolvable(host)
  ) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## Beispiel 4

### Subnetz-basierte Entscheidungen

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere über den Proxy:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Auch hier kann die Nutzung des DNS-Servers minimiert werden, indem redundante Regeln am Anfang hinzugefügt werden:

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isInNet(host, "192.0.2.0", "255.255.0.0")
  ) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## Beispiel 5

### Lastverteilung/Routing basierend auf URL-Mustern

Dieses Beispiel ist ausgefeilter. Es gibt vier (4) Proxy-Server; einer davon ist ein heißer Standby für alle anderen, sodass, wenn einer der verbleibenden drei ausfällt, der vierte übernimmt. Darüber hinaus teilen sich die drei verbleibenden Proxy-Server die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird folgendermaßen verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com-Domäne          |
| #2    | .edu-Domäne          |
| #3    | alle anderen Domänen |
| #4    | heißer Standby       |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf Port 8080 (sie müssen es nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten zu ändern). Beachten Sie, wie Strings mit dem **`+`**-Operator in JavaScript verkettet werden können.

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mydomain.com")) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.com")) {
    return "PROXY proxy1.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  } else if (shExpMatch(host, "*.edu")) {
    return "PROXY proxy2.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  }
  return "PROXY proxy3.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
}
```

## Beispiel 6

### Einen Proxy für ein bestimmtes Protokoll festlegen

Die meisten der standardmäßigen JavaScript-Funktionalitäten stehen zur Verwendung in der Funktion `FindProxyForURL()` zur Verfügung. Um beispielsweise unterschiedliche Proxys basierend auf dem Protokoll festzulegen, kann die Funktion {{jsxref("String.prototype.startsWith()", "startsWith()")}} verwendet werden:

```js
function FindProxyForURL(url, host) {
  if (url.startsWith("http:")) {
    return "PROXY http-proxy.mydomain.com:8080";
  } else if (url.startsWith("ftp:")) {
    return "PROXY ftp-proxy.mydomain.com:8080";
  } else if (url.startsWith("gopher:")) {
    return "PROXY gopher-proxy.mydomain.com:8080";
  } else if (url.startsWith("https:") || url.startsWith("snews:")) {
    return "PROXY security-proxy.mydomain.com:8080";
  }
  return "DIRECT";
}
```

> [!NOTE]
> Dasselbe kann mit der weiter oben beschriebenen [`shExpMatch()`](#shexpmatch) Funktion erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Auto-Konfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Das ist nützlich, wenn die Auto-Konfigurationsdatei beispielsweise basierend auf der Client-IP-Adresse unterschiedlich reagieren soll (die `REMOTE_ADDR` Umgebungvariable in CGI).
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig abgewogen werden, da sie erfordern, dass der DNS-Server konsultiert wird. Alle anderen mit der Auto-Konfiguration verwandten Funktionen sind lediglich String-Matching-Funktionen, die keinen DNS-Server erfordern. Wenn ein Proxy verwendet wird, führt der Proxy seine eigene DNS-Suche durch, was den Einfluss auf den DNS-Server verdoppeln würde. Meistens sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Die automatische Proxy-Konfiguration wurde in den späten 1990er Jahren in Netscape Navigator 2.0 eingeführt, zeitgleich mit der Einführung von JavaScript. Die Open-Source-Entwicklung von Netscape führte letztendlich zu Firefox selbst.

Die "originellste" Implementierung von PAC und ihrer JavaScript-Bibliotheken befindet sich daher in `nsProxyAutoConfig.js`, das in frühen Versionen von Firefox zu finden ist. Diese Dienstprogramme finden sich in vielen anderen Open-Source-Systemen, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox integrierte die Datei später in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-String-Literal. Um sie in eine eigene Datei zu extrahieren, genügt es, das Stück in JavaScript mit einer `console.log` Anweisung zum Drucken zu kopieren.

Microsoft hat im Allgemeinen eine eigene Implementierung entwickelt. Früher gab es [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind mittlerweile behoben. Sie haben [einige neue Funktionen mit dem Suffix "Ex"](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) rund um die Adressverarbeitungsteile definiert, um IPv6 zu unterstützen. Das Feature wird von Chromium unterstützt, jedoch noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxyserver")}}
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy HTTP-Serverkonfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
