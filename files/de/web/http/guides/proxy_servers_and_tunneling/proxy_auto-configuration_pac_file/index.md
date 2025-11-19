---
title: Proxy Auto-Configuration (PAC)-Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Eine **Proxy Auto-Configuration (PAC)**-Datei ist eine JavaScript-Funktion, die bestimmt, ob Anfragen des Webbrowsers (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder an einen Web-Proxy-Server weitergeleitet werden. Die in der PAC-Datei enthaltene JavaScript-Funktion definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die URL, auf die zugegriffen wird. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) können Sie dies deaktivieren, indem Sie `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` setzen oder beim Starten das Befehlszeilen-Flag `--unsafe-pac-url` verwenden (in Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit mehr, das Entfernen des Pfades zu deaktivieren; seit Chrome 81 gilt das Entfernen des Pfades nicht mehr für HTTP-URLs, es besteht jedoch Interesse, dieses Verhalten an HTTPS anzugleichen); in Firefox ist die Option `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies ist nur der Bequemlichkeit halber; es ist derselbe String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings wird im Abschnitt **Return-Wert-Format** unten definiert.

### Return-Wert-Format

- Die JavaScript-Funktion gibt einen einzelnen String zurück
- Wenn der String null ist, sollten keine Proxies verwendet werden
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt hergestellt werden, ohne Proxies
- `PROXY host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server sollte verwendet werden

Neuere Versionen von Firefox unterstützen außerdem:

- `HTTP host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy sollte verwendet werden
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) sollte verwendet werden

Wenn es mehrere Semikolon-getrennte Einstellungen gibt, wird die ganz links stehende Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser wird automatisch einen zuvor nicht ansprechbaren Proxy nach 30 Minuten erneut versuchen. Weitere Versuche werden alle Stunde gestartet, wobei immer 30 Minuten zur vergangenen Zeit zwischen den Versuchen hinzugefügt werden.

Wenn alle Proxies ausfallen und keine DIRECT-Option angegeben war, wird der Browser fragen, ob die Proxies vorübergehend ignoriert und direkte Verbindungen versucht werden sollen. Nach 20 Minuten wird der Browser fragen, ob die Proxies erneut versucht werden sollen, und dies nach weiteren 40 Minuten wiederholen. Abfragen werden fortgesetzt und es werden immer 20 Minuten zur vergangenen Zeit zwischen den Abfragen hinzugefügt.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primär-Proxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der Primär-Proxy wieder funktioniert.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Gleich wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben wird Netscape den Benutzer bitten zu bestätigen, ob direkte Verbindungen hergestellt werden sollen; in diesem Fall ist keine Benutzerintervention erforderlich.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : SOCKS wird verwendet, wenn der Primär-Proxy ausfällt.

Die Auto-Konfigurationsdatei sollte in einer Datei mit der Endung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als Nächstes sollten Sie Ihren Server so konfigurieren, dass er die .pac-Dateierweiterung dem MIME-Typ zuordnet.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer in einer eigenen Datei gespeichert werden und nicht in eine HTML-Datei oder eine andere Datei eingebettet sein.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es sind keine weiteren Syntaxangaben erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder Unternetzwerke Ihrer Website widerzuspiegeln.)

## Vorgefertigte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Bedingte Regeln basierend auf Hostnamen
  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Zugehörige Dienstprogrammfunktionen
  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- Bedingte Regeln basierend auf URL/Hostnamen
  - [`shExpMatch()`](#shexpmatch)

- Bedingte Regeln basierend auf Zeit
  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Logging-Dienstprogramm
  - [`alert()`](#alert)

- Es gab ein assoziatives Array (Objekt), das bereits definiert war, da zum Zeitpunkt des JavaScript-Codes es selbst nicht definiert werden konnte:
  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des Pakets [pacparser](https://github.com/manugarg/pacparser)) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei heißt `proxy.pac`
> - Kommandozeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (übergibt den `host`-Parameter `www.mozilla.org` und den `url`-Parameter `https://www.mozilla.org`)

### isPlainHostName()

#### Syntax

```js-nolint
isPlainHostName(host)
```

#### Parameter

- host
  - : Der Hostname aus der URL (exklusive Portnummer).

#### Beschreibung

Wahr, wenn und nur wenn kein Domainname im Hostnamen vorhanden ist (keine Punkte).

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

Gibt nur dann `true` zurück, wenn die Domain des Hostnames übereinstimmt.

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
  - : Vollständig qualifizierter Hostname, mit dem verglichen werden soll.

#### Beschreibung

Gilt als wahr, wenn der Hostname genau mit dem angegebenen Hostnamen übereinstimmt, oder wenn im Hostnamen kein Domainname vorhanden ist, aber der unqualifizierte Hostname übereinstimmt.

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

Versucht, den Hostnamen aufzulösen. Gibt wahr zurück, wenn erfolgreich.

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
  - : ein IP-Adressmuster im Punkt-getrennten Format.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse verglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet vergleichen.

Gibt nur dann `true` zurück, wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

Muster- und Maskenspezifikation erfolgt auf die gleiche Weise wie bei der SOCKS-Konfiguration.

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
  - : Hostname zur Auflösung.

Löst den angegebenen DNS-Hostname in eine IP-Adresse auf und gibt ihn im Punkt-getrennten Format als String zurück.

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
  - : Jede punktierte Adresse, wie eine IP-Adresse oder Maske.

Verkettet die vier Punkt-getrennten Bytes zu einem 4-Byte-Wort und konvertiert es in Dezimal.

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

Gibt die IP-Adresse des Servers der Maschine zurück, auf der Firefox läuft, als String im Punkt-getrennten Integer-Format. Um hilfreicher zu sein, versucht die Funktion mehrere Alternativen, bevor sie auf die Loopback-Adresse (wie `127.0.0.1`) zurückfällt.

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
  - : ist ein beliebiger String zum Vergleichen (z.B. die URL oder der Hostname).
- shExp
  - : ist ein Shell-Ausdruck, gegen den verglichen wird.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für spezielle Glob-Ausdrücke variiert zwischen den Browsern: `*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) werden immer unterstützt, während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn der Client dies unterstützt, bieten JavaScript-reguläre Ausdrücke normalerweise eine leistungsfähigere und konsistentere Möglichkeit, URLs (und andere Strings) zu Muster-abgleichen.

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
  - : Entweder der String "GMT" oder weggelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion einen `true`-Wert am Wochentag zurück, den der Parameter darstellt. Wenn der String "GMT" als zweiter Parameter angegeben ist, werden die Zeiten in GMT betrachtet. Andernfalls werden sie als lokale Zeitzone angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der Parameter "GMT" angegeben ist, werden die Zeiten in GMT betrachtet. Andernfalls wird die lokale Zeitzone verwendet.

> [!WARNING]
> _Die Reihenfolge der Tage spielt eine Rolle_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer `true` ergeben.
> Jetzt wird `weekdayRange("WED", "SUN")` nur dann `true` ergeben, wenn der aktuelle Tag Mittwoch oder Sonntag ist.

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

- tag
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Integer).
- monat
  - : Ist einer der geordneten Monats-Strings: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- jahr
  - : Ist die geordnete vollständige Jahreszahl als Ganzzahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Entweder der String "GMT", der dafür sorgt, dass Zeitvergleiche in der GMT-Zeitzone erfolgen, oder wird weggelassen. Wenn nicht angegeben, werden die Zeiten in der lokalen Zeitzone berücksichtigt.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion nur an Tagen, die dieser Spezifikation entsprechen, einen `true`-Wert zurück. Wenn beide Werte angegeben sind, ist das Ergebnis innerhalb dieser Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge der Tage, Monate und Jahre ist wichtig**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer `true` ergeben. Jetzt wird `dateRange("DEC", "JAN")` nur dann wahr ergeben, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) die Kategorie Stunde1, Min1, Sec1 muss kleiner als die Kategorie Stunde2, Min2, Sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- stunde
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sek
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für die GMT-Zeitzone oder nicht angegeben, für die lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion nur zu Zeiten, die dieser Spezifikation entsprechen, einen `true`-Wert zurück. Wenn beide Werte angegeben sind, ist das Ergebnis innerhalb dieser Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge der Stunde, Minute, Sekunde ist wichtig**; Vor Firefox 49 wird `timeRange(0, 23)` immer zu `true` werten. Jetzt wird `timeRange(23, 0)` nur dann `true` ergeben, wenn die aktuelle Uhrzeit 23:00 oder Mitternacht ist.

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

- meldung
  - : Der zu protokollierende String

Protokolliert die Meldung in der Browser-Konsole.

#### Beispiele

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // logs the host name and its IP address
alert("Error: shouldn't reach this clause.") // log a message
```

## Beispiel 1

### Verwenden Sie einen Proxy für alles außer lokalen Hosts

> [!NOTE]
> Da alle der folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind oder die sich in der lokalen Domain befinden, werden direkt verbunden. Alles andere geht über `w3proxy.mozilla.org:8080`. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

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

### Wie oben, aber verwenden Sie den Proxy für lokale Server, die außerhalb der Firewall liegen

Wenn es Hosts gibt (z.B. der Haupt-Webserver), die zur lokalen Domain gehören aber außerhalb der Firewall liegen und nur über den Proxyserver erreichbar sind, können diese Ausnahmen mit der `localHostOrDomainIs()`-Funktion behandelt werden:

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

Das obige Beispiel verwendet den Proxy für alles, außer für lokale Hosts in der Domain mozilla.org, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen aus Effizienzgründen: Die `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die sich in der lokalen Domain befinden, nicht für jede URL. Beachten Sie sorgfältig die Klammern um den _oder_-Ausdruck vor dem _und_-Ausdruck, um das oben erwähnte effiziente Verhalten zu erzielen.

## Beispiel 3

### Verwenden eines Proxies nur, wenn der Host nicht auflösbar ist

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

Das obige erfordert, dass der DNS jedes Mal konsultiert wird; es kann intelligent mit anderen Regeln gruppiert werden, so dass der DNS nur konsultiert wird, wenn andere Regeln kein Ergebnis liefern:

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

### Subnet-basierte Entscheidungen

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

### Lastenausgleich/Routing basierend auf URL-Mustern

Dieses Beispiel ist anspruchsvoller. Es gibt vier (4) Proxyserver; einer von ihnen ist ein Hot-Standby für alle anderen, sodass, wenn einer der restlichen drei ausfällt, der vierte einspringt. Darüber hinaus teilen sich die verbleibenden drei Proxyserver die Last basierend auf URL-Mustern, was das Caching effektiver macht (es gibt nur eine Kopie jedes Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com Domain          |
| #2    | .edu Domain          |
| #3    | alle anderen Domains |
| #4    | Hot Stand-by         |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxyserver laufen auf dem Port 8080 (sie müssen das nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Strings im JavaScript mit dem **`+`**-Operator verkettet werden können.

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

### Einen Proxy für ein bestimmtes Protokoll festlegen

Ein Großteil der Standardfunktionen von JavaScript steht zur Verwendung in der Funktion `FindProxyForURL()` zur Verfügung. Um beispielsweise verschiedene Proxies basierend auf dem Protokoll festzulegen, kann die Funktion {{jsxref("String.prototype.startsWith()", "startsWith()")}} verwendet werden:

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
> Das Gleiche kann mit der Funktion [`shExpMatch()`](#shexpmatch) erreicht werden, die früher beschrieben wurde.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.example.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, wenn die Autokonfigurationsdatei beispielsweise anders reagieren soll, je nach IP-Adresse des Clients (die `REMOTE_ADDR`-Umgebungsvariable in CGI).
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig abgewogen werden, da sie eine Konsultation des DNS-Servers erfordern. Alle anderen autokonfigurationsbezogenen Funktionen sind reine String-Abgleichsfunktionen, die nicht die Verwendung eines DNS-Servers erfordern. Wenn ein Proxy verwendet wird, wird der Proxy seine eigene DNS-Abfrage durchführen, was den Einfluss auf den DNS-Server verdoppeln würde. Meistens sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Die Proxy-Autokonfigurationsdatei wurde in den späten 1990er Jahren in Netscape Navigator 2.0 eingeführt, zur gleichen Zeit, als JavaScript eingeführt wurde. Das Open-Sourcing von Netscape führte letztendlich zu Firefox selbst.

Die "ursprünglichste" Implementierung von PAC und seinen JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, gefunden in frühen Versionen von Firefox. Diese Dienstprogramme finden sich in vielen anderen Open-Source-Systemen, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox integrierte später die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/firefox-main/source/netwerk/base/ProxyAutoConfig.cpp) als C++ String-Literal. Um sie in eine eigene Datei zu extrahieren, genügt es, das Stück in JavaScript mit einer `console.log`-Anweisung zu kopieren, um es auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung erstellt. Es gab früher [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind mittlerweile behoben. Sie haben [einige neue Funktionen mit "Ex"-Suffixen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) zur Adressverwaltung eingeführt, um IPv6 zu unterstützen. Die Funktion wird von Chromium unterstützt, aber noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy-HTTP-Server-Konfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
