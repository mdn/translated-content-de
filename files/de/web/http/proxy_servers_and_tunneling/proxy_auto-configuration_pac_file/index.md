---
title: Proxy Auto-Configuration (PAC) Datei
slug: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Eine **Proxy Auto-Configuration (PAC)**-Datei ist eine JavaScript-Funktion, die bestimmt, ob Webbrowser-Anfragen (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder zu einem Web-Proxy-Server weitergeleitet werden. Die JavaScript-Funktion, die in der PAC-Datei enthalten ist, definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die aufgerufene URL. Der Pfad und die Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) kann dies deaktiviert werden, indem `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` gesetzt oder mit dem `--unsafe-pac-url`-Kommandozeilenbefehl gestartet wird (in Chrome 74 funktioniert nur noch der Befehl, und ab 75 gibt es keine Möglichkeit mehr, das Pfad-Stripping zu deaktivieren; ab Chrome 81 gilt das Pfad-Stripping nicht mehr für HTTP-URLs, es besteht jedoch Interesse, dieses Verhalten bei HTTPS anzupassen); in Firefox ist die betreffende Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur zur Bequemlichkeit; es ist derselbe String zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings wird im Abschnitt **Return-Wert-Format** unten definiert.

### Return-Wert-Format

- Die JavaScript-Funktion gibt einen einzelnen String zurück
- Wenn der String null ist, sollten keine Proxies verwendet werden
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, die durch ein Semikolon getrennt sind:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt, ohne Proxy, hergestellt werden
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

Wenn es mehrere Semikolon-getrennte Einstellungen gibt, wird die linkeste Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser versucht automatisch erneut, einen vorher nicht reagierenden Proxy nach 30 Minuten zu kontaktieren. Weitere Versuche beginnen nach einer Stunde, wobei immer 30 Minuten zur verstrichenen Zeit zwischen den Versuchen hinzugefügt werden.

Wenn alle Proxies ausgefallen sind und keine DIREKT-Option angegeben wurde, fragt der Browser, ob Proxies vorübergehend ignoriert werden sollten und direkte Verbindungen versucht werden sollen. Nach 20 Minuten fragt der Browser, ob Proxies erneut versucht werden sollten, und fragt alle weiteren 40 Minuten erneut. Abfragen setzen sich fort, bei denen die verstrichene Zeit zwischen den Abfragen immer um 20 Minuten verlängert wird.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primärer Proxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder hergestellt ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben fragt Netscape nach Bestätigung des Benutzers, um direkte Verbindungen herzustellen; in diesem Fall ist keine Benutzerintervention erforderlich.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Auto-Konfigurationsdatei sollte in einer Datei mit der Endung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als Nächstes sollten Sie Ihren Server so konfigurieren, dass die .pac-Dateiendung dem MIME-Typ zugeordnet wird.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer selbst in eine Datei gespeichert werden und nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um es in eine Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder die Subnetze Ihrer Seite widerzuspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Hostname-basierte Bedingungen

  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Verwandte Dienstprogramme

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

- Es gab ein assoziatives Array (Objekt), das bereits definiert war, da JavaScript-Code zu dieser Zeit nicht in der Lage war, es selbst zu definieren:

  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser) Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei heißt `proxy.pac`
> - Befehlszeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (übergibt den `host` Parameter `www.mozilla.org` und den `url` Parameter `https://www.mozilla.org`)

### isPlainHostName()

#### Syntax

```js-nolint
isPlainHostName(host)
```

#### Parameter

- host
  - : Der Hostname aus der URL (ohne Portnummer).

#### Beschreibung

Wahr, wenn und nur wenn im Hostnamen kein Domain-Name vorhanden ist (keine Punkte).

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
  - : Ist der Domainname, um den Hostnamen zu testen.

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
localHostOrDomainIs(host, hostdom)
```

#### Parameter

- host
  - : Der Hostname aus der URL.
- hostdom
  - : Voll qualifizierter Hostname, um damit abzugleichen.

#### Beschreibung

Ist wahr, wenn der Hostname _genau_ mit dem angegebenen Hostnamen übereinstimmt oder wenn kein Domain-Name im Hostnamen vorhanden ist, aber der unqualifizierte Hostname mit ihm übereinstimmt.

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
  - : ein DNS-Hostname oder IP-Adresse. Wenn ein Hostname übergeben wird, wird er von dieser Funktion in eine IP-Adresse aufgelöst.
- pattern
  - : ein IP-Adressmuster im durch Punkte getrennten Format.
- mask
  - : Maske für das IP-Adressmuster, die informiert, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet Übereinstimmung.

Wahr, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

Pattern- und Maskenspezifikation erfolgen gleich wie bei der SOCKS-Konfiguration.

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
  - : Hostname zur Auflösung.

Löst den gegebenen DNS-Hostname in eine IP-Adresse auf und gibt sie im durch Punkte getrennten Format als String zurück.

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

Verkettet die vier durch Punkte getrennten Bytes zu einem 4-Byte-Wort und konvertiert es in Dezimal.

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

#### Return-Wert

Gibt die Server-IP-Adresse des Rechners zurück, auf dem Firefox läuft, als String im Format durch Punkte getrennte Ganzzahlen.

> **Warnung:** `myIpAddress()` gibt dieselbe IP-Adresse zurück wie die Serveradresse, die von **`nslookup localhost`** auf einem Linux-Rechner zurückgegeben wird. Sie gibt nicht die öffentliche IP-Adresse zurück.

#### Beispiel

```js-nolint
myIpAddress() //returns the string "127.0.1.1" if you were running Firefox on that localhost
```

### dnsDomainLevels()

#### Syntax

```js-nolint
dnsDomainLevels(host)
```

#### Parameter

- host
  - : ist der Hostname aus der URL.

Gibt die Anzahl (Ganzzahlen) der DNS-Domainlevel (Anzahl der Punkte) im Hostnamen zurück.

#### Beispiele

```js-nolint
dnsDomainLevels("www") // 0
dnsDomainLevels("mozilla.org") // 1
dnsDomainLevels("www.mozilla.org"); // 2
```

### shExpMatch()

#### Syntax

```js-nolint
shExpMatch(str, shexp)
```

#### Parameter

- str
  - : ist ein beliebiger String zum Vergleichen (z.B. die URL oder der Hostname).
- shexp
  - : ist ein Shell-Ausdruck zum Vergleichen.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für bestimmte Glob-Ausdrucks-Syntaxen variiert je nach Browser: `*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) werden immer unterstützt, während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Regulärausdrücke typischerweise eine mächtigere und konsistentere Möglichkeit des Pattern-Matching für URLs (und andere Strings).

#### Beispiele

```js
shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // returns true
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // returns false
```

### weekdayRange()

#### Syntax

```js-nolint
weekdayRange(wd1, wd2, [gmt])
```

> [!NOTE]
> (Vor Firefox 49) wd1 muss kleiner als wd2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich evaluiert. Siehe die Warnung unten.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentags-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder der String "GMT" oder wird weggelassen.

Nur der erste Parameter ist erforderlich. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion einen Wert von true am Wochentag zurück, den der Parameter darstellt. Wenn der String "GMT" als zweiter Parameter angegeben wird, werden Zeiten in GMT genommen. Andernfalls wird die lokale Zeitzone angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden Zeiten in GMT angenommen. Andernfalls wird die lokale Zeitzone verwendet.

> **Warnung:** _Die Reihenfolge der Tage spielt eine Rolle_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer zu `true` führen.
> Jetzt wird `weekdayRange("WED", "SUN")` nur dann zu `true` führen,
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
dateRange(<day> | <month> | <year>, [gmt])  // ambiguity is resolved by assuming year is greater than 31
dateRange(<day1>, <day2>, [gmt])
dateRange(<month1>, <month2>, [gmt])
dateRange(<year1>, <year2>, [gmt])
dateRange(<day1>, <month1>, <day2>, <month2>, [gmt])
dateRange(<month1>, <year1>, <month2>, <year2>, [gmt])
dateRange(<day1>, <month1>, <year1>, <day2>, <month2>, <year2>, [gmt])
```

> [!NOTE]
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 muss kleiner als month2 sein, und year1 muss kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich evaluiert. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Ganzzahl).

```plain
1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
```

- month
  - : Ist einer der geordneten Monats-Strings unten.

```plain
"JAN"|"FEB"|"MAR"|"APR"|"MAY"|"JUN"|"JUL"|"AUG"|"SEP"|"OCT"|"NOV"|"DEC"
```

- year
  - : Ist die geordnete volle Jahreszahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Ist entweder der String "GMT", der Vergleiche in GMT-Zeitzone durchführt, oder wird weggelassen. Wenn nicht angegeben, werden Zeiten in der lokalen Zeitzone genommen.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion einen wahren Wert nur an den Tagen zurück, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben werden, ist das Ergebnis wahr zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Tage, Monate und Jahre ist wichtig**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer zu `true` führen. Jetzt wird `dateRange("DEC", "JAN")` nur dann zu true führen, wenn der aktuelle Monat Dezember oder Januar ist.

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
timeRange(<hour1>, <min1>, <sec1>, <hour2>, <min2>, <sec2>, [gmt])
```

> [!NOTE]
> (Vor Firefox 49) die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich evaluiert. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 11 Uhr abends.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für die GMT-Zeitzone oder nicht angegeben, für die lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion einen wahren Wert nur zu Zeiten zurück, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben werden, ist das Ergebnis wahr zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Stunde, Minute, Sekunde spielt eine Rolle**; Vor Firefox 49 wird `timeRange(0, 23)` immer zu true führen. Jetzt wird `timeRange(23, 0)` nur dann zu true führen, wenn die aktuelle Stunde 23:00 oder Mitternacht ist.

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

Protokolliert die Nachricht in der Browserkonsole.

#### Beispiele

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // logs the host name and its IP address
alert("Error: shouldn't reach this clause.") // log a simple message
```

## Beispiel 1

### Proxy für alles außer lokale Hosts verwenden

> [!NOTE]
> Da alle der folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollqualifiziert sind, oder diejenigen, die sich in der lokalen Domain befinden, werden direkt verbunden. Alles andere wird über `w3proxy.mozilla.org:8080` geleitet. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  } else {
    return "PROXY w3proxy.mozilla.org:8080; DIRECT";
  }
}
```

> [!NOTE]
> Dies ist die einfachste und effizienteste Autokonfigurationsdatei für Fälle, in denen es nur einen Proxy gibt.

## Beispiel 2

### Wie oben, aber Proxy auch für lokale Server verwenden, die außerhalb der Firewall sind

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domain gehören, aber außerhalb der Firewall liegen und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

```js
function FindProxyForURL(url, host) {
  if (
    (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) &&
    !localHostOrDomainIs(host, "www.mozilla.org") &&
    !localHostOrDomainIs(host, "merchant.mozilla.org")
  ) {
    return "DIRECT";
  } else {
    return "PROXY w3proxy.mozilla.org:8080; DIRECT";
  }
}
```

Das obige Beispiel wird den Proxy für alles verwenden, außer lokale Hosts in der mozilla.org-Domain, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen für Effizienz: `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die sich in der lokalen Domain befinden, nicht für jede URL. Achten Sie darauf, die Klammern um den _oder_ Ausdruck vor dem _und_ Ausdruck beizubehalten, um das oben genannte effiziente Verhalten zu erreichen.

## Beispiel 3

### Proxy nur verwenden, wenn Host nicht aufgelöst werden kann

Dieses Beispiel wird in einer Umgebung funktionieren, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel darin besteht, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das obige erfordert, dass jedes Mal die DNS-Abfrage durchgeführt wird; es kann intelligent mit anderen Regeln gruppiert werden, so dass die DNS-Abfrage nur durchgeführt wird, wenn andere Regeln kein Ergebnis liefern:

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
  } else {
    return "PROXY proxy.mydomain.com:8080";
  }
}
```

## Beispiel 5

### Lastverteilung/Routing basierend auf URL-Mustern

Dieses Beispiel ist anspruchsvoller. Es gibt vier (4) Proxy-Server; einer von ihnen ist ein Hot-Standby für alle anderen, sodass der vierte einspringt, wenn einer der übrigen drei ausfällt. Darüber hinaus teilen die drei verbleibenden Proxy-Server die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck              |
| ----- | ------------------ |
| #1    | .com-Domain        |
| #2    | .edu-Domain        |
| #3    | alle anderen Domains |
| #4    | Hot-Standby        |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf dem Port 8080 (sie müssen das nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Strings im JavaScript mit dem **`+`** Operator verkettet werden können.

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mydomain.com")) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.com")) {
    return "PROXY proxy1.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  } else if (shExpMatch(host, "*.edu")) {
    return "PROXY proxy2.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  } else {
    return "PROXY proxy3.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  }
}
```

## Beispiel 6

### Proxy für ein spezifisches Protokoll einstellen

Die meisten der Standard-JavaScript-Funktionen sind für die Verwendung in der `FindProxyForURL()`-Funktion verfügbar. Um beispielsweise verschiedene Proxies basierend auf dem Protokoll einzustellen, kann die {{jsxref("String.prototype.startsWith()", "startsWith()")}}-Funktion verwendet werden:

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
> Dasselbe kann mit der zuvor beschriebenen [`shExpMatch()`](#shexpmatch)-Funktion erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist zum Beispiel nützlich, wenn Sie die Autokonfigurationsdatei abhängig von der Client-IP-Adresse anders verhalten lassen möchten (die `REMOTE_ADDR`-Umgebungsvariable in CGI).
>
> Die Verwendung der `isInNet()`, `isResolvable()` und `dnsResolve()` Funktionen sollte sorgfältig abgewogen werden, da sie eine Abfrage des DNS-Servers erfordern. Alle anderen mit der Autokonfiguration verwandten Funktionen sind reine String-Vergleichsfunktionen, die keine Verwendung eines DNS-Servers erfordern. Wenn ein Proxy verwendet wird, wird der Proxy seine DNS-Abfrage durchführen, was die Auswirkungen auf den DNS-Server verdoppeln würde. Meistens sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Proxy-Autokonfiguration wurde in den späten 1990er Jahren in Netscape Navigator 2.0 eingeführt, zeitgleich mit der Einführung von JavaScript. Das Open-Sourcing von Netscape führte schließlich zum Firefox selbst.

Die ursprünglichste Implementierung von PAC und seinen JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, die in frühen Versionen von Firefox zu finden ist. Diese Dienstprogramme sind in vielen anderen Open-Source-Systemen, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h), enthalten. Später integrierte Firefox die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-String-Literal. Um sie in eine eigene Datei zu extrahieren, genügt es, den Chunk in JavaScript mit einer `console.log`-Anweisung zu kopieren, um ihn auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung erstellt. Es gab [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind mittlerweile behoben. Sie haben einige neue "Ex" postfixe Funktionen definiert, um IPv6 zu unterstützen ([bugzilla #558253](https://bugzil.la/558253)).
