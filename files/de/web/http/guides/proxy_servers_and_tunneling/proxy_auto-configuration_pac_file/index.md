---
title: Proxy Auto-Configuration (PAC) Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{HTTPSidebar}}

Eine **Proxy Auto-Configuration (PAC)** Datei ist eine JavaScript-Funktion, die bestimmt, ob die Anfragen des Webbrowsers (HTTP, HTTPS und FTP) direkt an das Ziel gesendet werden oder an einen Webproxy-Server weitergeleitet werden. Die JavaScript-Funktion in der PAC-Datei definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die aufgerufene URL. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) können Sie dies deaktivieren, indem Sie `PacHttpsUrlStrippingEnabled` auf `false` in den Richtlinien setzen oder mit dem `--unsafe-pac-url` Kommandozeilen-Flag starten (in Chrome 74 funktioniert nur das Flag, und ab Version 75 gibt es keine Möglichkeit mehr, das Stripping zu deaktivieren; seit Chrome 81 gilt das Stripping nicht mehr für HTTP-URLs, aber es gibt Bestrebungen, dieses Verhalten anzupassen), in Firefox ist die Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der Hostname, der aus der URL extrahiert wird. Dies dient nur der Bequemlichkeit; es ist derselbe String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings wird im Abschnitt **Rückgabewertformat** unten definiert.

### Rückgabewertformat

- Die JavaScript-Funktion gibt einen einzelnen String zurück
- Wenn der String null ist, sollten keine Proxies verwendet werden
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, die durch Semikolon getrennt sind:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt ohne Proxies hergestellt werden
- `PROXY host:port`
  - : Der angegebene Proxy soll verwendet werden
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server soll verwendet werden

Neuere Versionen von Firefox unterstützen ebenfalls:

- `HTTP host:port`
  - : Der angegebene Proxy soll verwendet werden
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy soll verwendet werden
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) soll verwendet werden

Wenn es mehrere durch Semikolon getrennte Einstellungen gibt, wird die linkeste Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet, usw.

Der Browser wird automatisch einen zuvor nicht ansprechbaren Proxy nach 30 Minuten erneut versuchen. Weitere Versuche werden nach einer Stunde fortgesetzt, wobei die verstrichene Zeit zwischen den Versuchen um 30 Minuten erhöht wird.

Wenn alle Proxies ausgefallen sind und keine DIREKT-Option angegeben wurde, fragt der Browser, ob Proxies vorübergehend ignoriert werden sollen, und versucht direkte Verbindungen. Nach 20 Minuten fragt der Browser, ob Proxies erneut versucht werden sollen, und fragt erneut nach weiteren 40 Minuten. Die Abfragen setzen sich fort, wobei die verstrichene Zeit zwischen den Abfragen um 20 Minuten erhöht wird.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Hauptproxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der Hauptproxy wieder funktioniert.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben wird Netscape die Benutzerbestätigung zum Herstellen direkter Verbindungen anfordern; in diesem Fall erfolgt keine Benutzereingabe.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der Hauptproxy ausfällt.

Die Auto-Config-Datei sollte unter Verwendung einer .pac-Erweiterung gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Konfigurieren Sie als Nächstes Ihren Server, um die .pac-Dateierweiterung dem MIME-Typ zuzuordnen.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer als eigenständige Datei gespeichert, aber nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um es in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder die Subnetze Ihrer Seite widerzuspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Hostname basierte Bedingungen

  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Verwandte Dienstfunktionen

  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- URL/Hostname basierte Bedingungen

  - [`shExpMatch()`](#shexpmatch)

- Zeitabhängige Bedingungen

  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Logging-Dienstprogramm

  - [`alert()`](#alert)

- Es gab bereits ein assoziatives Array (Objekt), da JavaScript-Code zu dieser Zeit nicht in der Lage war, es selbst zu definieren:

  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser) Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei wird `proxy.pac` genannt
> - Kommandozeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (überträgt den `host` Parameter `www.mozilla.org` und den `url` Parameter `https://www.mozilla.org`)

### isPlainHostName()

#### Syntax

```js-nolint
isPlainHostName(host)
```

#### Parameter

- host
  - : Der Hostname aus der URL (ohne Portnummer).

#### Beschreibung

True, wenn und nur wenn der Hostname keinen Domainnamen enthält (keine Punkte).

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
  - : Ist der Domainname, gegen den der Hostname getestet werden soll.

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
  - : Vollständig qualifizierter Hostname, gegen den abgeglichen werden soll.

#### Beschreibung

Ist true, wenn der Hostname _genau_ mit dem angegebenen Hostname übereinstimmt oder wenn im Hostname kein Domainname-Teil vorhanden ist, aber der unqualifizierte Hostname übereinstimmt.

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

Versucht, den Hostnamen zu lösen. Gibt true zurück, wenn erfolgreich.

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
  - : ein IP-Adressmuster im durch Punkte getrennten Format.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet abgleichen.

True, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

Muster- und Maskenspezifikation erfolgt identisch wie bei der SOCKS-Konfiguration.

#### Beispiele

```js
function alertEval(str) {
  alert(`${str} is ${eval(str)}`);
}
function FindProxyForURL(url, host) {
  alertEval('isInNet(host, "192.0.2.172", "255.255.255.255")');
  // "PAC-alert: isInNet(host, "192.0.2.172", "255.255.255.255") is true"
}
```

### dnsResolve()

```js-nolint
dnsResolve(host)
```

#### Parameter

- host
  - : Hostname, der aufgelöst werden soll.

Löst den angegebenen DNS-Hostnamen in eine IP-Adresse auf und gibt sie im durch Punkte getrennten Format als String zurück.

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
  - : Jede Punktadresse wie eine IP-Adresse oder Maske.

Verkettet die vier durch Punkte getrennten Bytes zu einem 4-Byte-Wort und wandelt es in dezimale Form um.

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

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox ausgeführt wird, als String im durch Punkte getrennten Ganzzahlenformat. Um hilfreicher zu sein, versucht sie mehrere Alternativen, bevor sie auf die Loopback-Adresse (wie `127.0.0.1`) zurückfällt.

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

Gibt die Anzahl (Ganzzahl) der DNS-Domainlevels (Anzahl der Punkte) im Hostnamen zurück.

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
  - : ist ein beliebiger String zum Vergleichen (zum Beispiel die URL oder der Hostname).
- shExp
  - : ist ein Shell-Ausdruck, gegen den verglichen werden soll.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für bestimmte Glob-Ausdruck-Syntaxen variiert zwischen den Browsern: `*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) werden immer unterstützt, während `[Zeichen]` und `[^Zeichen]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Reguläre Ausdrücke normalerweise eine leistungsfähigere und konsistentere Möglichkeit, URLs (und andere Strings) zu mustern.

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
> (Vor Firefox 49) wd1 muss kleiner als wd2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentag-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder der String "GMT" oder wird ausgelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Wochentag, den der Parameter darstellt, einen Wert von true zurück. Ist der String "GMT" als zweiter Parameter angegeben, werden Zeiten als in GMT angesehen. Andernfalls werden sie als in der lokalen Zeitzone angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wird der "GMT"-Parameter angegeben, gelten Zeiten als in GMT. Andernfalls wird die lokale Zeitzone verwendet.

> **Achtung:** _Die Reihenfolge der Tage ist relevant_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer mit `true` ausgewertet.
> Jetzt wird `weekdayRange("WED", "SUN")` nur mit `true` ausgewertet,
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
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 kleiner als month2, und year1 kleiner als year2, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Ganzzahl).
- month
  - : Ist einer der geordneten Monats-Strings: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- year
  - : Ist die geordnete vollständige Jahreszahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Ist entweder der String "GMT", was bedeutet, dass der Zeitvergleich in der GMT-Zeitzone erfolgt, oder wird ausgelassen. Wenn es nicht angegeben ist, werden Zeiten als in der lokalen Zeitzone betrachtet.

Wenn nur ein einzelner Wert spezifiziert wird (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion nur an Tagen, die dieser Spezifikation entsprechen, einen true-Wert zurück. Wenn für alle Werte ein Bereich angegeben ist, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Achtung:** **Die Reihenfolge der Tage, Monate und Jahre ist relevant**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer mit `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur mit true ausgewertet, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für GMT-Zeitzone oder nicht spezifiziert, für lokale Zeitzone.

Wenn nur ein einzelner Wert spezifiziert wird (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion nur zu Zeiten, die dieser Spezifikation entsprechen, einen true-Wert zurück. Wenn für alle Werte ein Bereich angegeben ist, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Achtung:** **Die Reihenfolge von Stunde, Minute und Sekunde ist relevant**; Vor Firefox 49 wird `timeRange(0, 23)` immer mit true ausgewertet. Jetzt wird `timeRange(23, 0)` nur mit true ausgewertet, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

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
  - : Der zu protokollierende String

Protokolliert die Nachricht in der Browser-Konsole.

#### Beispiele

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // logs the host name and its IP address
alert("Error: shouldn't reach this clause.") // log a message
```

## Beispiel 1

### Proxy für alles verwenden, außer für lokale Hosts

> [!NOTE]
> Da alle folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind oder die sich in einer lokalen Domain befinden, werden direkt verbunden. Alles andere wird über `w3proxy.mozilla.org:8080` geleitet. Wenn der Proxy ausfällt, werden automatisch direkte Verbindungen hergestellt:

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

> [!NOTE]
> Dies ist die einfachste und effizienteste Autoconfig-Datei für Fälle, in denen es nur einen Proxy gibt.

## Beispiel 2

### Wie oben, jedoch Proxy für lokale Server außerhalb der Firewall verwenden

Wenn es Hosts gibt (zum Beispiel den Hauptwebserver), die zur lokalen Domain gehören, aber außerhalb der Firewall liegen und nur über den Proxyserver erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel verwendet den Proxy für alles, außer für lokale Hosts in der Domain mozilla.org, mit der zusätzlichen Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy geleitet werden.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen für Effizienz: `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die in einer lokalen Domain liegen, nicht für jede URL. Achten Sie darauf, die Klammern um den _or_-Ausdruck vor dem _and_-Ausdruck zu setzen, um das oben erwähnte effiziente Verhalten zu erreichen.

## Beispiel 3

### Proxy nur verwenden, wenn Host nicht aufgelöst werden kann

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingestellt ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist es, einen Proxy nur für nicht auflösbare Hosts zu verwenden:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das oben genannte erfordert das Konsultieren des DNS jedes Mal; es kann intelligent mit anderen Regeln gruppiert werden, sodass DNS nur konsultiert wird, wenn andere Regeln kein Ergebnis liefern:

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

### Entscheidungen basierend auf Subnetzen

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere werden über den Proxy verbunden:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Wiederum kann die Verwendung des DNS-Servers im obigen Beispiel minimiert werden, indem redundante Regeln am Anfang hinzugefügt werden:

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

Dieses Beispiel ist anspruchsvoller. Es gibt vier (4) Proxy-Server; einer von ihnen ist ein Hot-Standby für alle anderen, sodass der vierte Server übernimmt, wenn einer der verbleibenden drei ausfällt. Darüber hinaus teilen sich die drei verbleibenden Proxy-Server die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com Domain          |
| #2    | .edu Domain          |
| #3    | Alle anderen Domains |
| #4    | Hot-Standby          |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf dem Port 8080 (sie müssen es nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten zu modifizieren). Beachten Sie, dass Strings in JavaScript mit dem **`+`** Operator verkettet werden können.

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

Der Großteil der Standard-JavaScript-Funktionalität kann in der `FindProxyForURL()` Funktion verwendet werden. Zum Beispiel kann die Funktion {{jsxref("String.prototype.startsWith()", "startsWith()")}} verwendet werden, um unterschiedliche Proxys basierend auf dem Protokoll festzulegen:

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
> Dasselbe kann mit der zuvor beschriebenen Funktion [`shExpMatch()`](#shexpmatch) erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autoconfig-Datei kann von einem CGI-Skript ausgegeben werden. Dies ist beispielsweise nützlich, wenn die Autoconfig-Datei basierend auf der IP-Adresse des Clients unterschiedlich agiert (die `REMOTE_ADDR` Umgebungsvariable in CGI).
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig in Betracht gezogen werden, da sie die Konsultation des DNS-Servers erfordern. Alle anderen autoconfig-bezogenen Funktionen sind reine String-Abgleichs-Funktionen, die keine Nutzung eines DNS-Servers erfordern. Wenn ein Proxy verwendet wird, wird der Proxy seine eigene DNS-Auflösung durchführen, was die Auswirkung auf den DNS-Server verdoppeln würde. Meistens sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Proxy-Autokonfiguration wurde in Netscape Navigator 2.0 in den späten 1990er Jahren eingeführt, zeitgleich mit der Einführung von JavaScript. Die Open-Source-Machung von Netscape führte letztendlich zu Firefox selbst.

Die "originalste" Implementierung von PAC und ihren JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, die in frühen Versionen von Firefox zu finden ist. Diese Hilfsmittel sind in vielen anderen Open-Source-Systemen wie [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h) zu finden. Firefox integrierte später die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-Stringliteral. Um sie in eine eigene Datei zu extrahieren, genügt es, das Stück in JavaScript mit einer `console.log` Anweisung zu kopieren, um es auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung gemacht. Es gab früher [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind inzwischen gelöst. Sie haben [einige neue "Ex" Suffixfunktionen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) rund um die Behandlung von Adressen definiert, um IPv6 zu unterstützen. Die Funktion wird von Chromium unterstützt, aber noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA-Mediatypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische HTTP-Proxy-Server-Konfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
