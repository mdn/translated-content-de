---
title: Proxy Auto-Configuration (PAC)-Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: f8ccc0ae0f29d206eea0666fd5081bf41810116d
---

Eine **Proxy Auto-Configuration (PAC)**-Datei ist eine JavaScript-Funktion, die bestimmt, ob Anfragen des Webbrowsers (HTTP, HTTPS und FTP) direkt zum Ziel oder über einen Webproxy-Server weitergeleitet werden. Die JavaScript-Funktion, die sich in der PAC-Datei befindet, definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die aufgerufene URL. Die Pfad- und Abfragekomponenten von `https://`-URLs werden entfernt. In Chrome (Versionen 52 bis 73) kann dies deaktiviert werden, indem `PacHttpsUrlStrippingEnabled` in den Richtlinien auf `false` gesetzt oder mit dem Befehlszeilen-Flag `--unsafe-pac-url` gestartet wird (in Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit, das Pfad-Entfernen zu deaktivieren; seit Chrome 81 gilt das Pfad-Entfernen nicht für HTTP-URLs, es besteht jedoch Interesse daran, dieses Verhalten an HTTPS anzupassen); in Firefox lautet die Präferenz `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur der Bequemlichkeit; es ist derselbe String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im Abschnitt **Rückgabewert Format** unten definiert.

### Rückgabewert Format

- Die JavaScript-Funktion gibt einen einzelnen String zurück
- Wenn der String null ist, sollten keine Proxys verwendet werden
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt und ohne Proxys hergestellt werden
- `PROXY host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server sollte verwendet werden

Neuere Versionen von Firefox unterstützen auch:

- `HTTP host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy sollte verwendet werden
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) sollte verwendet werden

Wenn es mehrere durch Semikolons getrennte Einstellungen gibt, wird die am weitesten links stehende Einstellung verwendet, bis Firefox keine Verbindung zum Proxy herstellen kann. In diesem Fall wird der nächste Wert verwendet, usw.

Der Browser wird automatisch nach 30 Minuten einen zuvor nicht reagierenden Proxy erneut versuchen. Weitere Versuche beginnen nach einer Stunde, wobei dem Zeitablauf zwischen den Versuchen immer 30 Minuten hinzugefügt werden.

Wenn alle Proxys ausgefallen sind und keine DIREKT-Option angegeben wurde, wird der Browser fragen, ob Proxys vorübergehend ignoriert werden sollen und es wird versucht, direkte Verbindungen herzustellen. Nach 20 Minuten wird der Browser fragen, ob Proxys erneut versucht werden sollen, und nach weiteren 40 Minuten nochmals fragen. Anfragen setzen sich fort, wobei dem Zeitablauf zwischen den Anfragen jeweils 20 Minuten hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primär-Proxy ist w3proxy:8080; wenn dieser ausfällt, beginnt die Verwendung von mozilla:8081, bis der Primär-Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxys ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im obigen ersten Beispiel wird Netscape den Benutzer um Bestätigung bitten, um direkte Verbindungen herzustellen; in diesem Fall ist keine Benutzerintervention erforderlich.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Autokonfigurationsdatei sollte unter einem Dateinamen mit der Erweiterung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als Nächstes sollten Sie Ihren Server so konfigurieren, dass er die .pac-Dateinamenerweiterung dem MIME-Typ zuordnet.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer selbst in eine Datei gespeichert werden, jedoch nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um sie in eine Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder die Subnetze Ihrer Website widerzuspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Hostname-basierte Bedingungen
  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Verwandte Dienstprogrammfunktionen
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

- Protokollierungsdienstprogramm
  - [`alert()`](#alert)

- Es gab ein assoziatives Array (Objekt), das bereits definiert war, da zu dieser Zeit JavaScript-Code es nicht selbst definieren konnte:
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

Wahr, wenn und nur wenn kein Domainname im Hostnamen enthalten ist (keine Punkte).

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
  - : Der Hostname aus der URL.
- domain
  - : Der Domainname, um den Hostnamen zu testen.

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
  - : Vollständig qualifizierter Hostname, gegen den verglichen werden soll.

#### Beschreibung

Ist wahr, wenn der Hostname _genau_ dem angegebenen Hostnamen entspricht oder wenn kein Domainname im Hostnamen vorhanden ist, aber der unqualifizierte Hostname übereinstimmt.

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
  - : Ist der Hostname aus der URL.

Versucht, den Hostnamen aufzulösen. Gibt true zurück, wenn erfolgreich.

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
  - : Ein DNS-Hostname oder eine IP-Adresse. Wenn ein Hostname übergeben wird, wird er von dieser Funktion in eine IP-Adresse aufgelöst.
- pattern
  - : Ein IP-Adressmuster im Punkt-getrennten Format.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse verglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet vergleichen.

Wahr, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

Das Muster- und Maskenangaben erfolgt auf die gleiche Weise wie bei SOCKS-Konfigurationen.

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
  - : Zu auflösender Hostname.

Löst den angegebenen DNS-Hostnamen in eine IP-Adresse auf und gibt sie im Punkt-getrennten Format als String zurück.

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

Verkettet die vier Punkt-getrennten Bytes zu einem 4-Byte-Wort und wandelt es in Dezimal um.

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

Gibt die Server-IP-Adresse des Rechners zurück, auf dem Firefox läuft, als String im Punkt-getrennten Integer-Format. Um hilfreicher zu sein, versucht es mehrere Alternativen, bevor es auf die Loopback-Adresse (wie `127.0.0.1`) zurückgreift.

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
  - : Ist der Hostname aus der URL.

Gibt die Anzahl (Ganzzahl) der DNS-Domainlevel (Anzahl der Punkte) im Hostnamen zurück.

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
  - : Ist ein beliebiger String zum Vergleichen (z.B. die URL oder der Hostname).
- shExp
  - : Ist ein Schalenausdruck, gegen den verglichen wird.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für bestimmte Glob-Ausdruck-Syntax variiert zwischen Browsern:
`*` (beliebige Anzahl von Zeichen übereinstimmen) und `?` (ein Zeichen übereinstimmen) werden immer unterstützt,
während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Reguläre Ausdrücke typischerweise eine stärkere und konsistentere Möglichkeit, um URLs (und andere Strings) zu pattern-machen.

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
  - : Eine der geordneten Wochentag-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder der String "GMT" oder wird ausgelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion einen Wert von true am Wochentag zurück, den der Parameter repräsentiert. Wenn der String "GMT" als zweiter Parameter angegeben wird, werden Zeiten in GMT angenommen. Andernfalls wird angenommen, dass sie in der lokalen Zeitzone liegen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden Zeiten in GMT angenommen. Andernfalls wird die lokale Zeitzone verwendet.

> [!WARNING]
> _Die Reihenfolge der Tage zählt_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer als `true` ausgewertet.
> Jetzt wird `weekdayRange("WED", "SUN")` nur dann als `true` ausgewertet,
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
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 muss kleiner als month2 sein und year1 muss kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Ganzzahl).
- month
  - : Ist einer der geordneten Monats-Strings: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- year
  - : Ist die geordnete Ganzzahl des vollen Jahres. Zum Beispiel, 2016 (**nicht** 16).
- gmt
  - : Ist entweder der String "GMT", der den Vergleich von Zeiten in der GMT-Zeitzone vornimmt, oder wird ausgelassen. Wenn nicht angegeben, wird angenommen, dass Zeiten in der lokalen Zeitzone liegen.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion nur an Tagen, die dieser Spezifikation entsprechen, einen Wert von true zurück. Wenn beide Werte angegeben sind, ist das Ergebnis wahr zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> _Die Reihenfolge der Tage, Monate und Jahre zählt_; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer als `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur dann als true ausgewertet, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) Die Kategorie Stunde1, Min1, Sek1 muss kleiner als die Kategorie Stunde2, Min2, Sek2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für die GMT-Zeitzone oder nicht angegeben, für die lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion nur zu Zeiten, die dieser Spezifikation entsprechen, einen Wert von true zurück. Wenn beide Werte angegeben sind, ist das Ergebnis wahr zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> _Die Reihenfolge von Stunde, Minute, Sekunde zählt_; Vor Firefox 49 wird `timeRange(0, 23)` immer als true ausgewertet. Jetzt wird `timeRange(23, 0)` nur dann als true ausgewertet, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

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

### Verwenden Sie den Proxy für alles außer lokalen Hosts

> [!NOTE]
> Da alle folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind oder die sich im lokalen Netzwerk befinden, werden direkt verbunden. Alles andere wird über `w3proxy.mozilla.org:8080` geleitet. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

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

### Wie oben, aber verwenden Sie Proxy für lokale Server, die außerhalb der Firewall liegen

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domäne gehören, sich aber außerhalb der Firewall befinden und nur über den Proxyserver erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel verwendet den Proxy für alles außer lokalen Hosts in der mozilla.org-Domäne, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen zur Effizienz: `localHostOrDomainIs()`-Funktionen werden nur für URLs in der lokalen Domäne ausgeführt, nicht für jede URL. Achten Sie auf die Klammern um den _or_-Ausdruck vor dem _and_-Ausdruck, um das oben erwähnte effiziente Verhalten zu erzielen.

## Beispiel 3

### Verwenden Sie den Proxy nur, wenn der Host nicht auflösbar ist

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel darin besteht, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das Obige erfordert, dass bei jeder Gelegenheit der DNS abgefragt wird; es kann intelligent mit anderen Regeln gruppiert werden, sodass der DNS nur abgefragt wird, wenn andere Regeln kein Ergebnis liefern:

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

Auch hier kann die Verwendung des DNS-Servers im obigen Beispiel minimiert werden, indem redundante Regeln am Anfang hinzugefügt werden:

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

Dieses Beispiel ist ausgefeilter. Es gibt vier (4) Proxyserver; einer davon ist ein heißer Stand-by für alle anderen, sodass, wenn einer der verbleibenden drei ausfällt, der vierte übernimmt. Darüber hinaus teilen sich die drei verbleibenden Proxyserver die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com-Domäne          |
| #2    | .edu-Domäne          |
| #3    | alle anderen Domänen |
| #4    | heiße Stand-by       |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxyserver laufen auf dem Port 8080 (sie müssen es nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Strings mit dem **`+`**-Operator in JavaScript verkettet werden können.

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

### Festlegen eines Proxys für ein spezifisches Protokoll

Die meiste Standard-JavaScript-Funktionalität kann in der Funktion `FindProxyForURL()` verwendet werden. Beispielsweise kann zum Festlegen unterschiedlicher Proxys basierend auf dem Protokoll die Funktion {{jsxref("String.prototype.startsWith()", "startsWith()")}} verwendet werden:

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
> Dasselbe kann mit der zuvor beschriebenen [`shExpMatch()`](#shexpmatch) Funktion erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, wenn die Autokonfigurationsdatei basierend auf der Client-IP-Adresse unterschiedlich agieren soll (die Umgebungsvariable `REMOTE_ADDR` in CGI).
>
> Der Einsatz von `isInNet()`, `isResolvable()` und `dnsResolve()`-Funktionen sollte sorgfältig abgewogen werden, da sie die Konsultation des DNS-Servers erfordern. Alle anderen autokonfigurationsbezogenen Funktionen sind einfache Stringvergleichsfunktionen, die keinen DNS-Server erfordern. Wenn ein Proxy verwendet wird, wird der Proxy seine DNS-Abfrage durchführen, was die Auswirkungen auf den DNS-Server verdoppeln würde. Meistens sind diese Funktionen nicht erforderlich, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Die Proxy-Autokonfiguration wurde in den späten 1990er Jahren in den Netscape Navigator 2.0 eingeführt, zeitgleich mit der Einführung von JavaScript. Das Open-Sourcing von Netscape führte letztendlich zu Firefox selbst.

Die "ursprünglichste" Implementierung von PAC und seinen JavaScript-Bibliotheken ist also `nsProxyAutoConfig.js`, die in frühen Versionen von Firefox zu finden ist. Diese Dienstprogramme sind in vielen anderen Open-Source-Systemen zu finden, darunter [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox integrierte später die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/firefox-main/source/netwerk/base/ProxyAutoConfig.cpp) als C++-String-Literal. Um sie in eine eigene Datei zu extrahieren, reicht es aus, den Block in JavaScript mit einer `console.log`-Anweisung zu kopieren, um ihn anzuzeigen.

Microsoft hat im Allgemeinen seine eigene Implementierung vorgenommen. Es gab früher [einige Probleme mit ihren Bibliotheken](https://de.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind inzwischen behoben. Sie haben [einige neue "Ex"-Suffix-Funktionen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) im Bezug auf die Adressverarbeitungsteile definiert, um IPv6 zu unterstützen. Die Funktion wird von Chromium unterstützt, aber noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxyserver")}}
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy-Konfiguration für HTTP-Server in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
