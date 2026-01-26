---
title: Proxy Auto-Configuration (PAC) Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Eine **Proxy Auto-Configuration (PAC)** Datei ist eine JavaScript-Funktion, die bestimmt, ob die Anfragen des Webbrowsers (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder an einen Webproxy-Server weitergeleitet werden. Die in der PAC-Datei enthaltene JavaScript-Funktion definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die URL, auf die zugegriffen wird. Die Pfad- und Query-Komponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) können Sie dies deaktivieren, indem Sie `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` setzen oder mit dem `--unsafe-pac-url` Kommandozeilen-Flag starten (in Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit, das Entfernen von Pfaden zu deaktivieren; ab Chrome 81 gilt das Entfernen von Pfaden nicht für HTTP-URLs, es besteht jedoch Interesse daran, dieses Verhalten an HTTPS anzupassen); in Firefox ist die Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur der Bequemlichkeit; es ist die gleiche Zeichenfolge wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt eine Zeichenfolge zurück, die die Konfiguration beschreibt. Das Format dieser Zeichenfolge ist im Abschnitt **Rückgabewertformat** unten definiert.

### Rückgabewertformat

- Die JavaScript-Funktion gibt eine einzelne Zeichenfolge zurück.
- Wenn die Zeichenfolge null ist, sollten keine Proxies verwendet werden.
- Die Zeichenfolge kann eine beliebige Anzahl der folgenden Bausteine enthalten, die durch ein Semikolon getrennt sind:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt hergestellt werden, ohne Proxies
- `PROXY host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server sollte verwendet werden

Neuere Versionen von Firefox unterstützten ebenfalls:

- `HTTP host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy sollte verwendet werden
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) sollte verwendet werden

Wenn es mehrere durch Semikolon getrennte Einstellungen gibt, wird die linkeste Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser versucht automatisch, einen zuvor nicht reagierenden Proxy nach 30 Minuten erneut zu verwenden. Zusätzliche Versuche werden mit einem Abstand von einer Stunde fortgesetzt, wobei immer 30 Minuten zur verstrichenen Zeit zwischen den Versuchen hinzugefügt werden.

Sollten alle Proxies ausfallen und es keine DIRECT-Option geben, fragt der Browser, ob die Proxies vorübergehend ignoriert und direkte Verbindungen versucht werden sollen. Nach 20 Minuten fragt der Browser, ob die Proxies erneut versucht werden sollen, und fragt nach weiteren 40 Minuten erneut. Die Anfragen werden fortgesetzt, wobei immer 20 Minuten zur verstrichenen Zeit zwischen den Abfragen hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primärer Proxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder funktioniert.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben bittet Netscape um eine Bestätigung des Benutzers für direkte Verbindungen; in diesem Fall ist keine Benutzerintervention erforderlich.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Autokonfigurationsdatei sollte unter einem Dateinamen mit der Endung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als nächstes sollten Sie Ihren Server so konfigurieren, dass die .pac-Dateierweiterung dem MIME-Typ zugeordnet wird.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer in einer Datei für sich gespeichert werden und nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die am Ende dieses Dokuments bereitgestellten Beispiele sind vollständig. Es sind keine zusätzlichen Syntaxelemente erforderlich, um sie in eine Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder die Subnetze Ihrer Seite widerzuspiegeln.)

## Vorgegebene Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Bedingte Hostname-Funktionen
  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Zugehörige Hilfsfunktionen
  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- Bedingte URL/Hostname-Funktionen
  - [`shExpMatch()`](#shexpmatch)

- Zeitbasierte Funktionen
  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Logging-Hilfsfunktion
  - [`alert()`](#alert)

- Es gab ein bereits definiertes assoziatives Array (Objekt), da der JavaScript-Code damals nicht in der Lage war, es selbst zu definieren:
  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser) Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei heißt `proxy.pac`
> - Kommandozeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (übernimmt den `host`-Parameter `www.mozilla.org` und den `url`-Parameter `https://www.mozilla.org`)

### isPlainHostName()

#### Syntax

```js-nolint
isPlainHostName(host)
```

#### Parameter

- host
  - : Der Hostname aus der URL (ohne Portnummer).

#### Beschreibung

Gibt `true` zurück, wenn und nur wenn es keinen Domainnamen im Hostnamen gibt (keine Punkte).

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
  - : Ist der Domainname zum Prüfen des Hostnamens.

#### Beschreibung

Gibt `true` zurück, wenn und nur wenn die Domain des Hostnamens übereinstimmt.

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

Ist `true`, wenn der Hostname _genau_ mit dem angegebenen Hostnamen übereinstimmt oder wenn es keinen Domainnamen-Teil im Hostnamen gibt, aber der nicht qualifizierte Hostname übereinstimmt.

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

Versucht, den Hostnamen aufzulösen. Gibt true zurück, wenn es gelingt.

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
  - : ein IP-Adressenmuster im Punkt-getrennten Format.
- mask
  - : Maske für das IP-Adressenmuster, die informiert, welche Teile der IP-Adresse mit dem Muster übereinstimmen sollen. 0 bedeutet ignorieren, 255 bedeutet übereinstimmen.

Gibt `true` zurück, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressenmuster übereinstimmt.

Das Muster- und die Maskenspezifikation erfolgt auf die gleiche Weise wie bei der SOCKS-Konfiguration.

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
  - : Hostname zum Auflösen.

Löst den angegebenen DNS-Hostname in eine IP-Adresse auf und gibt ihn im Punkt-getrennten Format als Zeichenfolge zurück.

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
  - : Jede punktierte Adresse wie eine IP-Adresse oder Maske.

Verkettet die vier Punkt-getrennten Bytes zu einem 4-Byte-Wort und konvertiert es in dezimal.

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

(Keine)

#### Rückgabewert

Gibt die Server-IP-Adresse des Computers zurück, auf dem Firefox ausgeführt wird, als Zeichenfolge im Punkt-getrennten Integerformat. Um hilfreicher zu sein, wird es mehrere Alternativen ausprobieren, bevor es auf die Loopback-Adresse (wie `127.0.0.1`) zurückgreift.

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

Gibt die Anzahl (Integer) der DNS-Domain-Level (Anzahl der Punkte) im Hostnamen zurück.

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
  - : ist eine beliebige Zeichenfolge zum Vergleich (z. B. die URL oder der Hostname).
- shExp
  - : ist ein Shell-Ausdruck zum Vergleich.

Gibt `true` zurück, wenn die Zeichenfolge dem angegebenen Shell-Glob-Ausdruck entspricht.

Die Unterstützung für die spezielle Glob-Ausdruckssyntax variiert je nach Browser:
`*` (übereinstimmen mit einer beliebigen Anzahl von Zeichen) und `?` (übereinstimmen mit einem Zeichen) werden immer unterstützt,
während `[Zeichen]` und `[^Zeichen]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Reguläre Ausdrücke in der Regel eine leistungsfähigere und konsistentere Möglichkeit, URLs (und andere Zeichenfolgen) zu prüfen.

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
  - : Einer der geordneten Wochentag-Zeichenfolgen: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder die Zeichenfolge "GMT" oder wird weggelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion einen `true` Wert am Wochentag zurück, den der Parameter darstellt. Wenn die Zeichenkette "GMT" als zweiter Parameter angegeben wird, werden Zeiten in GMT genommen. Andernfalls wird die lokale Zeitzone angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung `true`, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind inklusiv, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden Zeiten in GMT genommen. Andernfalls wird die lokale Zeitzone verwendet.

> [!WARNING]
> _Die Reihenfolge der Tage ist wichtig_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer als `true` ausgewertet.
> Jetzt wird `weekdayRange("WED", "SUN")` nur `true`, wenn der aktuelle Tag Mittwoch oder Sonntag ist.

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
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 muss kleiner als month2 sein, und year1 muss kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag im Monat zwischen 1 und 31 (als Integer).
- month
  - : Ist eine der geordneten Monats-Zeichenfolgen: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- year
  - : Ist die geordnete Ganzzahl des Jahres. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Ist entweder die Zeichenkette "GMT", die den Zeitvergleich in der GMT-Zeitzone vornimmt, oder wird weggelassen. Wird keine Angabe gemacht, werden die Zeiten in der lokalen Zeitzone angenommen.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion einen `true` Wert nur an Tagen zurück, die dieser Angabe entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis `true` zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge der Tage, Monate und Jahre zählen**. Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer als `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur `true`, wenn der aktuelle Monat Dezember oder Januar ist.

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
  - : Entweder die Zeichenkette "GMT" für GMT-Zeitzone oder nicht angegeben, für lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion einen `true` Wert nur zu den Zeiten zurück, die dieser Angabe entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis `true` zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge der Stunde, Minute, Sekunde zählt**. Vor Firefox 49 wird `timeRange(0, 23)` immer als `true` ausgewertet. Jetzt wird `timeRange(23, 0)` nur `true`, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

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
  - : Die Zeichenfolge zum Loggen

Protokolliert die Nachricht in der Browserkonsole.

#### Beispiele

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // logs the host name and its IP address
alert("Error: shouldn't reach this clause.") // log a message
```

## Beispiel 1

### Proxy für alles außer lokalen Hosts verwenden

> [!NOTE]
> Da alle folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind oder sich im lokalen Netzwerk befinden, werden direkt verbunden. Alles andere wird durch `w3proxy.mozilla.org:8080` geleitet. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

> [!NOTE]
> Dies ist die einfachste und effizienteste Autokonfigurationsdatei für Fälle, in denen es nur einen Proxy gibt.

## Beispiel 2

### Wie oben, aber Proxy für lokale Server verwenden, die außerhalb der Firewall sind

Wenn es Hosts gibt (wie den Hauptwebserver), die zur lokalen Domain gehören, aber außerhalb der Firewall liegen und nur über den Proxyserver erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel wird den Proxy für alles verwenden, außer für lokale Hosts in der mozilla.org-Domain, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` durch den Proxy geleitet werden.

> [!NOTE]
> Die Reihenfolge der oben genannten Ausnahmen zur Effizienz: `localHostOrDomainIs()` Funktionen werden nur für URLs ausgeführt, die in der lokalen Domain sind, nicht für jede URL. Achten Sie darauf, die Klammern um den _oder_ Ausdruck vor dem _und_ Ausdruck zu beachten, um das oben erwähnte effiziente Verhalten zu erreichen.

## Beispiel 3

### Proxy nur verwenden, wenn Host nicht aufgelöst werden kann

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann und das Ziel darin besteht, einen Proxy nur für nicht auflösbare Hosts zu verwenden:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

Das oben genannte erfordert die Konsultation des DNS jedes Mal; es kann intelligent mit anderen Regeln gruppiert werden, so dass das DNS nur konsultiert wird, wenn andere Regeln kein Ergebnis liefern:

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

### Subnetzbasierte Entscheidungen

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere über den Proxy:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

Auch hier kann die Nutzung des DNS-Servers durch Hinzufügen redundanter Regeln am Anfang minimiert werden:

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

Dieses Beispiel ist raffinierter. Es gibt vier (4) Proxyserver; einer von ihnen ist ein heiße Stand-by für alle anderen, so dass, wenn einer der anderen ausfällt, der vierte ihn übernimmt. Darüber hinaus teilen sich die drei verbleibenden Proxyserver die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com-Domain          |
| #2    | .edu-Domain          |
| #3    | alle anderen Domains |
| #4    | heiße Stand-by       |

Alle lokalen Zugriffe sollten direkt erfolgen. Alle Proxyserver laufen auf Port 8080 (sie müssen das nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Zeichenfolgen mit dem **`+`** Operator in JavaScript verknüpft werden können.

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

### Proxy für ein bestimmtes Protokoll festlegen

Die meisten der Standard-JavaScript-Funktionen sind in der `FindProxyForURL()` Funktion verfügbar. Zum Beispiel kann die Funktion {{jsxref("String.prototype.startsWith()", "startsWith()")}} verwendet werden, um unterschiedliche Proxies basierend auf dem Protokoll festzulegen:

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
> Dasselbe kann mit der zuvor beschriebenen Funktion [`shExpMatch()`](#shexpmatch) erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.example.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, um beispielsweise die Autokonfigurationsdatei je nach IP-Adresse des Clients (die `REMOTE_ADDR` Umgebungsvariable in CGI) unterschiedlich zu gestalten.
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig abgewogen werden, da sie die DNS-Serverabfrage voraussetzen. Alle anderen autokonfigurationsbezogenen Funktionen sind reine Zeichenfolgenabgleichsfunktionen, die keinen DNS-Server benötigen. Wenn ein Proxy verwendet wird, führt der Proxy seine DNS-Abfrage durch, was den Einfluss auf den DNS-Server verdoppeln würde. Meistens sind diese Funktionen nicht erforderlich, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Die Proxy-Auto-Konfiguration wurde in den späten 1990er Jahren gleichzeitig mit der Einführung von JavaScript in Netscape Navigator 2.0 eingeführt. Die Open-Source-Freigabe von Netscape führte letztendlich zu Firefox selbst.

Die "ursprünglichste" Implementierung von PAC und ihren JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, die in frühen Versionen von Firefox zu finden ist. Diese Utilities finden sich in vielen anderen Open-Source-Systemen einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox integrierte später die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/firefox-main/source/netwerk/base/ProxyAutoConfig.cpp) als C++-Zeichenfolgenliteral. Um diese in eine eigene Datei zu extrahieren, reicht es aus, das Stück in JavaScript mit einem `console.log` Befehl zu kopieren, um es auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung gemacht. Es gab [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind inzwischen behoben. Sie haben [einige neue "Ex"-suffigierte Funktionen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) um die Adressverarbeitungsteile herum definiert, um IPv6 zu unterstützen. Die Funktion wird von Chromium unterstützt, aber noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA Media-Typen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy-HTTP-Server-Konfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
