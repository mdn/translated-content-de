---
title: Proxy-Auto-Konfigurationsdatei (PAC)
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

Eine **Proxy-Auto-Konfigurationsdatei (PAC)** ist eine JavaScript-Funktion, die bestimmt, ob Browser-Anfragen (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder an einen Webproxy-Server weitergeleitet werden. Die JavaScript-Funktion in der PAC-Datei definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die aufgerufene URL. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) können Sie dies deaktivieren, indem Sie `PacHttpsUrlStrippingEnabled` in den Richtlinien auf `false` setzen oder Chrome mit dem `--unsafe-pac-url`-Befehlszeilen-Flag starten (in Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit, das Entfernen des Pfads zu deaktivieren; seit Chrome 81 gilt das Entfernen des Pfads nur noch für HTTP-URLs, es gibt jedoch Interesse daran, dieses Verhalten mit HTTPS gleichzusetzen); in Firefox ist die Präferenz `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der Hostname, der aus der URL extrahiert wurde. Dies dient nur der Bequemlichkeit; es ist derselbe String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im Folgenden unter **Rückgabeformat** definiert.

### Rückgabeformat

- Die JavaScript-Funktion gibt einen einzelnen String zurück.
- Wenn der String null ist, sollten keine Proxies verwendet werden.
- Der String kann beliebig viele der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt hergestellt werden, ohne jegliche Proxies.
- `PROXY host:port`
  - : Der angegebene Proxy sollte verwendet werden.
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server sollte verwendet werden.

Neuere Versionen von Firefox unterstützen ebenfalls:

- `HTTP host:port`
  - : Der angegebene Proxy sollte verwendet werden.
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy sollte verwendet werden.
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) sollte verwendet werden.

Wenn es mehrere semikolon-getrennte Einstellungen gibt, wird die linke Einstellungsseite verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet, usw.

Der Browser wird automatisch nach 30 Minuten einen zuvor nicht reagierenden Proxy erneut versuchen. Weitere Versuche werden nach einer Stunde fortgesetzt, wobei die verstrichene Zeit zwischen den Versuchen immer um 30 Minuten erhöht wird.

Wenn alle Proxies ausfallen und keine DIREKT-Option angegeben wurde, fragt der Browser, ob Proxies vorübergehend ignoriert und direkte Verbindungen versucht werden sollen. Nach 20 Minuten fragt der Browser, ob die Proxies erneut versucht werden sollen, und fragt erneut nach weiteren 40 Minuten. Die Anfragen setzen sich fort, wobei die verstrichene Zeit zwischen den Anfragen immer um 20 Minuten erhöht wird.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Der primäre Proxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Gleich wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben wird Netscape den Benutzer fragen, ob direkte Verbindungen hergestellt werden sollen; in diesem Fall ist keine Benutzereingabe erforderlich.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Auto-Konfigurationsdatei sollte in einer Datei mit der Erweiterung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als nächstes sollten Sie Ihren Server so konfigurieren, dass die .pac-Dateierweiterung dem MIME-Typ zugeordnet wird.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer alleine in einer Datei gespeichert werden, darf jedoch nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es sind keine zusätzlichen Syntaxen erforderlich, um es in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder Subnetze Ihrer Website widerzuspiegeln.)

## Vorgegebene Funktionen und Umgebung

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

- Es gab ein assoziatives Array (Objekt), das bereits definiert war, da der JavaScript-Code es zu dieser Zeit nicht selbst definieren konnte:

  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> Pactester (Teil des [pacparser](https://github.com/manugarg/pacparser)-Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
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

True, wenn und nur wenn kein Domainname im Hostnamen enthalten ist (keine Punkte).

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
  - : Der Domainname, gegen den der Hostname getestet werden soll.

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

Gibt true zurück, wenn der Hostname exakt mit dem angegebenen Hostnamen übereinstimmt, oder wenn kein Domainname im Hostnamen enthalten ist, aber der unqualifizierte Hostname übereinstimmt.

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
  - : Der Hostname aus der URL.

Versucht, den Hostnamen aufzulösen. Gibt true zurück, wenn dies gelingt.

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
  - : Ein IP-Adressmuster im punktgetrennten Format.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet Übereinstimmung.

Gibt true zurück, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

Muster- und Maskenspezifikation erfolgt auf dieselbe Weise wie bei der SOCKS-Konfiguration.

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

Löst den angegebenen DNS-Hostnamen in eine IP-Adresse auf und gibt ihn im punktgetrennten Format als String zurück.

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

Verkettet die vier punktgetrennten Bytes zu einem 4-Byte-Wort und wandelt es in eine Dezimalzahl um.

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

Gibt die Server-IP-Adresse des Computers zurück, auf dem Firefox ausgeführt wird, als String im punktgetrennten Integerformat. Um hilfreicher zu sein, werden mehrere Alternativen ausprobiert, bevor auf die Loopback-Adresse zurückgefallen wird (wie `127.0.0.1`).

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
  - : Der Hostname aus der URL.

Gibt die Anzahl (Ganzzahl) der DNS-Domain-Ebenen (Anzahl der Punkte) im Hostnamen zurück.

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
  - : Ein beliebiger String zum Vergleichen (z.B. die URL oder der Hostname).
- shExp
  - : Ein Shell-Ausdruck zum Vergleichen.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung der Syntax für bestimmte Glob-Ausdrücke variiert zwischen den Browsern:
`*` (Beliebige Anzahl von Zeichen) und `?` (ein Zeichen) werden immer unterstützt,
während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Reguläre-Ausdrücke normalerweise eine leistungsfähigere und konsistentere Möglichkeit, URLs (und andere Strings) zu mustern.

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
> (Vor Firefox 49) wd1 muss kleiner als wd2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentags-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Entweder der String "GMT" oder wird ausgelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können ausgelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion einen Wert von true am WochenTag, den der Parameter darstellt, zurück. Wenn der String "GMT" als zweiter Parameter angegeben ist, werden die Zeiten als GMT angenommen. Andernfalls werden sie als in der lokalen Zeitzone liegend angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung true, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Die Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden die Zeiten als in GMT liegend angenommen. Andernfalls wird die lokale Zeitzone verwendet.

> **Warnung:** _Die Reihenfolge der Tage ist wichtig_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer auf `true` ausgewertet.
> Jetzt wird `weekdayRange("WED", "SUN")` nur auf `true` ausgewertet,
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
> (Vor Firefox 49) day1 muss kleiner als day2, month1 muss kleiner als month2, und year1 muss kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Der geordnete Tag des Monats zwischen 1 und 31 (als Ganzzahl).

```plain
1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
```

- month
  - : Ist einer der geordneten Monats-Strings unten.

```plain
"JAN"|"FEB"|"MAR"|"APR"|"MAY"|"JUN"|"JUL"|"AUG"|"SEP"|"OCT"|"NOV"|"DEC"
```

- year
  - : Ist die geordnete vollständige Jahreszahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Entweder der String "GMT", wodurch der Zeitvergleich in der GMT-Zeitzone erfolgt, oder nicht spezifiziert. Wenn nicht angegeben, werden die Zeiten als in der lokalen Zeitzone liegend angenommen.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion einen true-Wert nur an Tagen zurück, die diese Spezifikation erfüllen. Wenn beide Werte angegeben sind, ist das Ergebnis true zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge von Tagen, Monaten und Jahren ist wichtig**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer auf `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur auf true ausgewertet, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für die GMT-Zeitzone, oder nicht spezifiziert, für die lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion einen true-Wert nur zu Zeiten zurück, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis true zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge von Stunde, Minute, Sekunde ist wichtig**; Vor Firefox 49 wird `timeRange(0, 23)` immer als true ausgewertet. Jetzt wird `timeRange(23, 0)` nur als true ausgewertet, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

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

### Proxy für alles außer lokalen Hosts verwenden

> [!NOTE]
> Da alle folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind oder die sich in der lokalen Domain befinden, werden direkt verbunden. Alles andere wird über `w3proxy.mozilla.org:8080` geführt. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

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
> Dies ist die einfachste und effizienteste Autokonfigurationsdatei für Fälle, in denen nur ein Proxy verwendet wird.

## Beispiel 2

### Wie oben, aber Proxy für lokale Server verwenden, die sich außerhalb der Firewall befinden

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domain gehören, sich aber außerhalb der Firewall befinden und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel verwendet den Proxy für alles außer lokalen Hosts in der mozilla.org-Domain, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy geleitet werden.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen aus Effizienzgründen: `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die sich in der lokalen Domain befinden, nicht für jede URL. Achten Sie darauf, die Klammern um den _oder_-Ausdruck vor dem _und_-Ausdruck zu setzen, um das oben erwähnte effiziente Verhalten zu erzielen.

## Beispiel 3

### Proxy nur verwenden, wenn Host nicht aufgelöst werden kann

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das oben Genannte erfordert die Konsultation des DNS jedes Mal; es kann intelligent mit anderen Regeln gruppiert werden, sodass das DNS nur abgefragt wird, wenn andere Regeln keine Ergebnisse liefern:

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

Dieses Beispiel ist anspruchsvoller. Es gibt vier (4) Proxy-Server; einer davon ist ein heißer Standby für alle anderen, sodass der vierte übernimmt, wenn einer der anderen drei ausfällt. Darüber hinaus teilen die übrigen drei Proxy-Server die Last basierend auf URL-Mustern, was ihre Zwischenspeicherung effektiver macht (es gibt nur eine Kopie jedes Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com Domain          |
| #2    | .edu Domain          |
| #3    | alle anderen Domains |
| #4    | heißer Standby       |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf dem Port 8080 (sie müssen dies nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten zu ändern). Beachten Sie, wie Strings mit dem **`+`**-Operator in JavaScript verkettet werden können.

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

### Proxy für ein bestimmtes Protokoll festlegen

Die meisten der standardmäßigen JavaScript-Funktionalitäten können in der `FindProxyForURL()`-Funktion verwendet werden. Um zum Beispiel unterschiedliche Proxies basierend auf dem Protokoll festzulegen, kann die {{jsxref("String.prototype.startsWith()", "startsWith()")}}-Funktion verwendet werden:

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
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, um beispielsweise die Autokonfigurationsdatei basierend auf der Client-IP-Adresse (die `REMOTE_ADDR`-Umgebungsvariable in CGI) unterschiedlich zu gestalten.
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig abgewogen werden, da sie eine Abfrage des DNS-Servers erfordern. Alle anderen autokonfigurationsbezogenen Funktionen sind lediglich String-Matching-Funktionen, die keine Verwendung eines DNS-Servers erfordern. Wenn ein Proxy verwendet wird, führt der Proxy seine DNS-Auflösung durch, was die Auswirkungen auf den DNS-Server verdoppeln würde. Meistens sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Die Proxy-Auto-Konfiguration wurde in den späten 1990er Jahren mit der Einführung von JavaScript in den Netscape Navigator 2.0 eingeführt. Die Open-Source-Veröffentlichung von Netscape führte letztendlich zu Firefox selbst.

Die "originellste" Implementierung von PAC und seiner JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, die in frühen Versionen von Firefox zu finden ist. Diese Dienstprogramme finden sich in vielen anderen Open-Source-Systemen, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Später integrierte Firefox die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-Stringliteral. Um sie in eine eigene Datei zu extrahieren, genügt es, den Ausschnitt in JavaScript mit einer `console.log`-Anweisung zu kopieren, um sie auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung erstellt. Es gab früher [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind inzwischen behoben. Sie haben [einige neue Funktionen mit dem Suffix "Ex"](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) definiert, um IPv6 zu unterstützen. Das Feature wird von Chromium unterstützt, jedoch noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy HTTP-Server-Konfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
