---
title: Proxy Auto-Configuration (PAC) Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

Eine **Proxy Auto-Configuration (PAC)** Datei ist eine JavaScript-Funktion, die bestimmt, ob Browseranfragen (HTTP, HTTPS und FTP) direkt an das Ziel gesendet oder an einen Webproxy-Server weitergeleitet werden. Die in der PAC-Datei enthaltene JavaScript-Funktion definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die zugegriffene URL. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) können Sie dies deaktivieren, indem Sie `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` setzen oder beim Starten den Kommandozeilen-Flag `--unsafe-pac-url` verwenden (in Chrome 74 funktioniert nur noch der Flag, und ab 75 gibt es keine Möglichkeit mehr, das Entfernen des Pfads zu deaktivieren; ab Chrome 81 gilt das Entfernen des Pfads nicht für HTTP-URLs, aber es besteht Interesse, dieses Verhalten an HTTPS anzupassen); in Firefox ist die Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur der Bequemlichkeit; es ist derselbe String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings wird im Abschnitt **Rückgabewert-Format** unten definiert.

### Rückgabewert-Format

- Die JavaScript-Funktion gibt einen einzelnen String zurück
- Ist der String null, sollen keine Proxys verwendet werden
- Der String kann beliebig viele der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollen direkt hergestellt werden, ohne Proxys
- `PROXY host:port`
  - : Der angegebene Proxy soll verwendet werden
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server soll verwendet werden

Neuere Versionen von Firefox unterstützen außerdem:

- `HTTP host:port`
  - : Der angegebene Proxy soll verwendet werden
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy soll verwendet werden
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) soll verwendet werden

Wenn es mehrere durch Semikolon getrennte Einstellungen gibt, wird die ganz links stehende Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser wird nach 30 Minuten automatisch einen zuvor nicht reagierenden Proxy erneut versuchen. Zusätzliche Versuche setzen sich ab einer Stunde fort, wobei immer 30 Minuten zur verstrichenen Zeit zwischen den Versuchen hinzugefügt werden.

Wenn alle Proxys ausgefallen sind und keine DIREKT-Option angegeben war, wird der Browser fragen, ob Proxys vorübergehend ignoriert und direkte Verbindungen versucht werden sollen. Nach 20 Minuten wird der Browser fragen, ob Proxys erneut versucht werden sollen, und fragt nach weiteren 40 Minuten erneut. Die Abfragen setzen sich fort, wobei immer 20 Minuten zur verstrichenen Zeit zwischen den Abfragen hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Der primäre Proxy ist w3proxy:8080; falls dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxys ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben wird Netscape die Nutzer um Bestätigung fragen, um direkte Verbindungen herzustellen; in diesem Fall erfolgt kein Eingriff des Nutzers.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Auto-Konfigurationsdatei sollte in einer Datei mit der Erweiterung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als nächstes sollten Sie Ihren Server so konfigurieren, dass die .pac-Dateierweiterung auf den MIME-Typ verweist.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer eigenständig in einer Datei gespeichert, aber nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder die Subnetze Ihrer Website widerzuspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Hostname-basierte Bedingungen
  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Bezogene Dienstprogramme
  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- URL/Hostname-basierte Bedingungen
  - [`shExpMatch()`](#shexpmatch)

- Zeitbasierte Bedingungen
  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Protokollierungsdienst
  - [`alert()`](#alert)

- Es gab ein vordefiniertes assoziatives Array (Objekt), da JavaScript-Code zu diesem Zeitpunkt nicht in der Lage war, es selbst zu definieren:
  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser) Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
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

True, wenn und nur wenn kein Domain-Name im Hostnamen vorhanden ist (keine Punkte).

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
  - : Ist der Hostname der URL.
- domain
  - : Ist der Domain-Name, gegen den der Hostname geprüft werden soll.

#### Beschreibung

Gibt true zurück, wenn und nur wenn die Domain des Hostnamens übereinstimmt.

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
  - : Vollständig qualifizierter Hostname zum Abgleichen.

#### Beschreibung

Ist true, wenn der Hostname _genau_ mit dem angegebenen Hostnamen übereinstimmt oder wenn der Hostname keinen Domain-Teil hat, aber der nicht qualifizierte Hostname übereinstimmt.

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

Versucht, den Hostnamen aufzulösen. Gibt true zurück, wenn es erfolgreich ist.

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
  - : ein IP-Adressmuster im punktgetrennten Format.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet abgleichen.

True, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

Die Muster- und Maskenspezifikation erfolgt auf die gleiche Weise wie bei der SOCKS-Konfiguration.

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
  - : Hostname, der aufgelöst werden soll.

Löst den angegebenen DNS-Hostname in eine IP-Adresse auf und gibt ihn im punktgetrennten Format als String zurück.

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
  - : Jede punktierte Adresse wie eine IP-Adresse oder eine Maske.

Verkettet die vier punktgetrennten Bytes zu einem 4-Byte-Wort und konvertiert es in Dezimal.

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

(keine)

#### Rückgabewert

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox läuft, als String im formatierenden Punktformat zurück. Um hilfreicher zu sein, werden mehrere Alternativen ausprobiert, bevor auf die Loopback-Adresse (wie `127.0.0.1`) zurückgegriffen wird.

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

Gibt die Anzahl (Integer) der DNS-Domainlevel (Anzahl der Punkte) im Hostnamen zurück.

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
  - : ist ein beliebiger String, der verglichen werden soll (z. B. die URL oder der Hostname).
- shExp
  - : ist ein Shell-Ausdruck, gegen den er verglichen werden soll.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für bestimmte Glob-Ausdruckssyntax variiert zwischen den Browsern:
`*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) sind immer unterstützt,
während `[Zeichen]` und `[^Zeichen]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Reguläre Ausdrücke in der Regel eine leistungsfähigere und konsistentere Möglichkeit zur Mustererkennung von URLs (und anderen Strings).

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
> (Vor Firefox 49) wd1 muss kleiner als wd2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentags-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Entweder der String "GMT" oder wird weggelassen.

Nur der erste Parameter ist obligatorisch. Der zweite, dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion einen true-Wert am Wochentag zurück, den der Parameter repräsentiert. Wenn der String "GMT" als zweiter Parameter angegeben ist, werden die Zeiten in GMT genommen. Andernfalls werden sie im lokalen Zeitzonen angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Die Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden die Zeiten in GMT genommen. Andernfalls wird die lokale Zeitzone verwendet.

> [!WARNING]
> _Die Reihenfolge der Tage spielt eine Rolle_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer als `true` ausgewertet.
> Jetzt wird `weekdayRange("WED", "SUN")` nur dann als `true` ausgewertet,
> wenn es sich dabei um Mittwoch oder Sonntag handelt.

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
> (Vor Firefox 49) day1 muss kleiner als day2, month1 kleiner als month2 und year1 kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Integer).
- month
  - : Ist einer der geordneten Monatsstrings: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- year
  - : Ist die geordnete volle Jahreszahl als Ganzzahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Entweder der String "GMT", der die Zeitvergleich in GMT-Zeitzone vornimmt, oder weggelassen. Wenn nicht angegeben, werden die Zeiten in der lokalen Zeitzone genommen.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion nur an Tagen, die dieser Spezifikation entsprechen, einen true-Wert zurück. Wenn beide Werte angegeben sind, wird das Ergebnis einschließlich der Grenzen wahr, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge von Tagen, Monaten und Jahren spielt eine Rolle**. Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer als `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur dann wahr, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 11 Uhr abends.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für die GMT-Zeitzone, oder nicht angegeben, für die lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion nur zu Zeiten, die dieser Spezifikation entsprechen, einen true-Wert zurück. Wenn beide Werte angegeben sind, wird das Ergebnis inklusive der Grenzen wahr, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge von Stunde, Minute und Sekunde spielt eine Rolle**. Vor Firefox 49 wird `timeRange(0, 23)` immer als true ausgewertet. Jetzt wird `timeRange(23, 0)` nur dann wahr, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

#### Beispiele

```js-nolint
timeRange(12); // returns true from noon to 1pm
timeRange(12, 13) // returns true from noon to 1pm
timeRange(12, "GMT") // returns true from noon to 1pm, in the GMT timezone
timeRange(9, 17) // returns true from 9am to 5pm
timeRange(8, 30, 17, 0) // returns true from 8:30am to 5:00pm
timeRange(0, 0, 0, 0, 0, 30) // returns true between midnight and 30 seconds past midnight
```

### alert()

#### Syntax

```js-nolint
alert(message)
```

#### Parameter

- message
  - : Der zu protokollierende String

Protokolliert die Nachricht in der Browser-Konsole.

#### Beispiele

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // logs the host name and its IP address
alert("Error: shouldn't reach this clause.") // log a message
```

## Beispiel 1

### Verwenden Sie Proxy für alles außer lokale Hosts

> [!NOTE]
> Da alle nachfolgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind, oder solche, die in lokalen Domainen sind, werden direkt verbunden. Alles andere wird über `w3proxy.mozilla.org:8080` geleitet. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

> [!NOTE]
> Dies ist die einfachste und effizienteste Autokonfigurationsdatei für Fälle, in denen nur ein Proxy vorhanden ist.

## Beispiel 2

### Wie oben, aber Proxy für lokale Server verwenden, die sich außerhalb der Firewall befinden

Wenn es Hosts gibt (wie z.B. den Haupt-Webserver), die zur lokalen Domäne gehören, sich jedoch außerhalb der Firewall befinden und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel wird den Proxy für alles verwenden, außer lokale Hosts in der mozilla.org Domain, wobei die weiteren Ausnahmen `www.mozilla.org` und `merchant.mozilla.org` durch den Proxy geleitet werden.

> [!NOTE]
> Die Reihenfolge der oben genannten Ausnahmen zur Effizienz: `localHostOrDomainIs()` Funktionen werden nur für URLs in der lokalen Domain ausgeführt, nicht für jede URL. Achten Sie darauf, die Klammern um den _oder_ Ausdruck vor dem _und_ Ausdruck erst zu erstellen, um das oben genannte effiziente Verhalten zu erreichen.

## Beispiel 3

### Verwende Proxy nur dann, wenn Host nicht auflösbar ist

Dieses Beispiel wird in einer Umgebung funktionieren, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist es, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

Das obige erfordert jedes Mal eine Abfrage des DNS; es kann intelligent mit anderen Regeln gruppiert werden, so dass der DNS nur dann abgefragt wird, wenn andere Regeln kein Ergebnis liefern:

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".example.com") ||
    isResolvable(host)
  ) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

## Beispiel 4

### Subnetz-basierte Entscheidungen

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere werden über den Proxy verbunden:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

Auch hier kann die Nutzung des DNS-Servers minimiert werden, indem redundante Regeln am Anfang hinzugefügt werden:

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".example.com") ||
    isInNet(host, "192.0.2.0", "255.255.0.0")
  ) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

## Beispiel 5

### Lastverteilung/Routing basierend auf URL-Mustern

Dieses Beispiel ist anspruchsvoller. Es gibt vier (4) Proxy-Server; einer davon ist ein Hot-Standby für alle anderen, so dass, wenn einer der verbleibenden drei ausfällt, der vierte übernimmt. Weiterhin teilen die drei verbleibenden Proxy-Server die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com Domain          |
| #2    | .edu Domain          |
| #3    | alle anderen Domains |
| #4    | Hot-Standby          |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf dem Port 8080 (sie müssen das nicht, Sie können Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Strings mit dem **`+`** Operator in JavaScript verknüpft werden können.

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".example.com")) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.com")) {
    return "PROXY proxy1.example.com:8080; PROXY proxy4.example.com:8080";
  } else if (shExpMatch(host, "*.edu")) {
    return "PROXY proxy2.example.com:8080; PROXY proxy4.example.com:8080";
  }
  return "PROXY proxy3.example.com:8080; PROXY proxy4.example.com:8080";
}
```

## Beispiel 6

### Einen Proxy für ein spezifisches Protokoll einstellen

Die meisten der Standard-JavaScript-Funktionalitäten stehen zur Nutzung in der `FindProxyForURL()`-Funktion zur Verfügung. Um beispielsweise verschiedene Proxys basierend auf dem Protokoll einzustellen, kann die {{jsxref("String.prototype.startsWith()", "startsWith()")}} Funktion verwendet werden:

```js
function FindProxyForURL(url, host) {
  if (url.startsWith("http:")) {
    return "PROXY http-proxy.example.com:8080";
  } else if (url.startsWith("ftp:")) {
    return "PROXY ftp-proxy.example.com:8080";
  } else if (url.startsWith("gopher:")) {
    return "PROXY gopher-proxy.example.com:8080";
  } else if (url.startsWith("https:") || url.startsWith("snews:")) {
    return "PROXY security-proxy.example.com:8080";
  }
  return "DIRECT";
}
```

> [!NOTE]
> Dasselbe kann mit der [`shExpMatch()`](#shexpmatch) Funktion erreicht werden, die früher beschrieben wurde.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.example.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, um zum Beispiel die Autokonfigurationsdatei unterschiedlich verhalten zu lassen, basierend auf der Client-IP-Adresse (die `REMOTE_ADDR` Umgebungsvariable in CGI).
>
> Der Einsatz der `isInNet()`, `isResolvable()` und `dnsResolve()` Funktionen sollte sorgfältig abgewogen werden, da sie eine Abfrage des DNS-Servers erfordern. Alle anderen mit Autokonfigurationsdateien verbundenen Funktionen sind reine String-Abgleich-Funktionen, die nicht die Nutzung eines DNS-Servers erfordern. Wenn ein Proxy verwendet wird, wird der Proxy seinen DNS-Lookup durchführen, wodurch der Einfluss auf den DNS-Server verdoppelt würde. Meistens sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Proxy Auto-Config wurde in Netscape Navigator 2.0 in den späten 1990er Jahren eingeführt, zur gleichen Zeit, als JavaScript eingeführt wurde. Das Open-Sourcen von Netscape führte letztlich dazu, dass Firefox selbst entstand.

Die "ursprünglichste" Implementierung von PAC und seinen JavaScript-Bibliotheken befindet sich daher in `nsProxyAutoConfig.js`, das in frühen Versionen von Firefox zu finden ist. Diese Hilfsprogramme werden in vielen anderen Open-Source-Systemen wie [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h) gefunden. Firefox integrierte die Datei später in [`ProxyAutoConfig.cpp`](https://searchfox.org/firefox-main/source/netwerk/base/ProxyAutoConfig.cpp) als C++ String-Literal. Um sie in eine eigene Datei zu extrahieren, genügt es, das Stück in JavaScript mit einer `console.log`-Anweisung zu kopieren, um es auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung erstellt. Es gab früher [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind inzwischen behoben. Sie haben einige neue, mit "Ex" endende Funktionen [definiert](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format), die die Adressverarbeitungsteile zur Unterstützung von IPv6 betreffen. Das Feature wird von Chromium unterstützt, jedoch noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME Typen (IANA Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy-HTTP-Serverkonfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
