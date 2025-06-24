---
title: Proxy Auto-Configuration (PAC) Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTTPSidebar}}

Eine **Proxy Auto-Configuration (PAC)** Datei ist eine JavaScript-Funktion, die bestimmt, ob Anfragen eines Webbrowsers (HTTP, HTTPS und FTP) direkt zum Ziel geleitet oder an einen Webproxy-Server weitergeleitet werden. Die JavaScript-Funktion, die in der PAC-Datei enthalten ist, definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die aufgerufene URL. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) können Sie dies deaktivieren, indem Sie `PacHttpsUrlStrippingEnabled` in den Richtlinien auf `false` setzen oder mit dem Kommandozeilen-Flag `--unsafe-pac-url` starten (in Chrome 74 funktioniert nur das Flag, und ab Version 75 gibt es keine Möglichkeit mehr, das Entfernen von Pfaden zu deaktivieren; seit Chrome 81 gilt das Entfernen von Pfaden nicht mehr für HTTP-URLs, aber es gibt Bestrebungen, dieses Verhalten an HTTPS anzupassen); in Firefox ist die entsprechende Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur zur Bequemlichkeit; es ist derselbe String, der zwischen `://` und dem ersten `:` oder `/` danach liegt. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im Abschnitt **Rückgabewertformat** unten definiert.

### Rückgabewertformat

- Die JavaScript-Funktion gibt einen einzelnen String zurück.
- Ist der String null, sollten keine Proxies verwendet werden.
- Der String kann beliebig viele der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt hergestellt werden, ohne Proxies
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
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) sollte verwendet werden

Wenn mehrere Semikolon-getrennte Einstellungen vorhanden sind, wird die ganz links stehende Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet, usw.

Der Browser wird automatisch einen zuvor nicht reagierenden Proxy nach 30 Minuten erneut versuchen. Weitere Versuche beginnen nach einer Stunde, wobei immer 30 Minuten zur verstrichenen Zeit zwischen den Versuchen hinzugefügt werden.

Wenn alle Proxies ausgefallen sind und keine DIRECT-Option angegeben wurde, wird der Browser fragen, ob Proxies vorübergehend ignoriert werden sollen und direkte Verbindungen versucht werden sollen. Nach 20 Minuten wird der Browser fragen, ob die Proxies erneut versucht werden sollen, und nach weiteren 40 Minuten erneut fragen. Die Abfragen gehen weiter, wobei immer 20 Minuten zur verstrichenen Zeit zwischen den Abfragen hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Der primäre Proxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben wird Netscape die Benutzerbestätigung für direkte Verbindungen anfordern; in diesem Fall erfolgt kein Benutzereingriff.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Autokonfigurationsdatei sollte in einer Datei mit der Erweiterung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` eingestellt werden.

Als nächstes sollten Sie Ihren Server so konfigurieren, dass er die .pac Dateierweiterung dem MIME-Typ zuordnet.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer in einer Datei für sich alleine gespeichert werden und darf nicht in einer HTML-Datei oder einer anderen Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts so bearbeitet werden, dass sie den Domainnamen und/oder die Subnetze Ihrer Site widerspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Hostname-basierte Bedingungen

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

- URL-/Hostname-basierte Bedingungen

  - [`shExpMatch()`](#shexpmatch)

- Zeitbasierte Bedingungen

  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Logging-Hilfsprogramm

  - [`alert()`](#alert)

- Es gab ein bereits definiertes assoziatives Array (Objekt), da der JavaScript-Code zu dieser Zeit nicht selbst in der Lage war, es zu definieren:
  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser) Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
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
  - : Der Hostname aus der URL (ohne Portnummer).

#### Beschreibung

True, wenn und nur wenn kein Domain-Name im Hostname enthalten ist (keine Punkte).

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
  - : Ist der Domain-Name, gegen den der Hostname getestet werden soll.

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
  - : Voll qualifizierter Hostname, der abgeglichen werden soll.

#### Beschreibung

Ist true, wenn der Hostname _genau_ mit dem angegebenen Hostnamen übereinstimmt, oder wenn kein Domain-Name-Teil im Hostname enthalten ist, aber der unqualifizierte Hostname übereinstimmt.

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
  - : ein IP-Adressmuster im Punkt-Trennformat.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet übereinstimmen.

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
  - : aufzulösender Hostname.

Löst den angegebenen DNS-Hostnamen in eine IP-Adresse auf und gibt sie im Punkt-Trennformat als String zurück.

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

Verkettet die vier punktgetrennten Bytes zu einem 4-Byte-Wort und konvertiert es in eine Dezimalzahl.

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

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox läuft, als String im Punkt-getrennten Ganzzahlformat. Um hilfreicher zu sein, wird es mehrere Alternativen ausprobieren, bevor es auf die Loopback-Adresse (wie `127.0.0.1`) zurückfällt.

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

Gibt die Anzahl (Ganzzahl) der DNS-Domain-Niveaus (Anzahl der Punkte) im Hostname zurück.

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
  - : ist ein beliebiger zu vergleichender String (z.B. die URL oder der Hostname).
- shExp
  - : ist ein Shell-Ausdruck, gegen den verglichen werden soll.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung bestimmter Glob-Ausdruckssyntaxen variiert zwischen den Browsern:
`*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) werden immer unterstützt,
während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Reguläre-Ausdrücke typischerweise eine mächtigere und stabilere Möglichkeit, URLs (und andere Zeichenketten) zu vergleichen.

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
> (Vor Firefox 49) wd1 muss kleiner sein als wd2, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentage-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder der String "GMT" oder wird weggelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Wochentag, den der Parameter darstellt, einen True-Wert zurück. Wenn der String "GMT" als zweiter Parameter angegeben ist, werden die Zeiten in GMT genommen. Andernfalls werden sie in der lokalen Zeitzone angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung erfüllt, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Die Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden die Zeiten in GMT genommen. Andernfalls wird die lokale Zeitzone verwendet.

> [!WARNING] > _Die Reihenfolge der Tage ist wichtig_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer auf `true` ausgewertet.
> Jetzt wird `weekdayRange("WED", "SUN")` nur dann auf `true` ausgewertet,
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
> (Vor Firefox 49) day1 muss kleiner sein als day2, month1 muss kleiner sein als month2, und year1 muss kleiner sein als year2, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Ganzzahl).
- month
  - : Ist einer der geordneten Monats-Strings: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- year
  - : Ist die geordnete vollständige Jahreszahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Ist entweder der String "GMT", wodurch der Zeitvergleich in GMT-Zeitzone erfolgt, oder wird weggelassen. Wenn nicht angegeben, wird angenommen, dass die Zeiten in der lokalen Zeitzone liegen.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion einen True-Wert nur an den Tagen zurück, die dieser Angabe entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING] > **Die Reihenfolge der Tage, Monate und Jahre ist wichtig**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer auf `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur dann auf `true` ausgewertet, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) die Kategorie hour1, min1, sec1 muss kleiner sein als die Kategorie hour2, min2, sec2, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für GMT-Zeitzone, oder nicht angegeben, für lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion einen True-Wert nur zu Zeiten zurück, die dieser Angabe entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING] > **Die Reihenfolge der Stunde, Minute, Sekunde ist wichtig**; Vor Firefox 49 wird `timeRange(0, 23)` immer auf `true` ausgewertet. Jetzt wird `timeRange(23, 0)` nur dann auf `true` ausgewertet, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

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

### Proxy für alles außer lokale Hosts verwenden

> [!NOTE]
> Da alle folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind, oder diejenigen, die sich in der lokalen Domain befinden, werden direkt verbunden. Alles andere wird über `w3proxy.mozilla.org:8080` geleitet. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

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

### Wie oben, aber Proxy für lokale Server verwenden, die außerhalb der Firewall sind

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domain gehören, sich jedoch außerhalb der Firewall befinden und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Im obigen Beispiel wird der Proxy für alles außer lokale Hosts in der mozilla.org-Domain verwendet, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen für die Effizienz: `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die sich in der lokalen Domain befinden, nicht für jede URL. Beachten Sie unbedingt die Klammern um den _or_-Ausdruck vor dem _and_-Ausdruck, um das oben genannte effiziente Verhalten zu erzielen.

## Beispiel 3

### Proxy nur verwenden, wenn Host nicht aufgelöst werden kann

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel darin besteht, einen Proxy nur für Hosts zu verwenden, die nicht aufgelöst werden können:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Obiges erfordert eine Konsultation des DNS bei jeder Gelegenheit; es kann intelligent mit anderen Regeln gruppiert werden, sodass DNS nur dann konsultiert wird, wenn andere Regeln kein Ergebnis liefern:

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

Viele DNS-Anfragen im obigen Beispiel können minimiert werden, indem redundante Regeln am Anfang hinzugefügt werden:

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

Dieses Beispiel ist anspruchsvoller. Es gibt vier (4) Proxy-Server; einer davon ist ein Hot-Standby für alle anderen, sodass, wenn einer der anderen drei ausfällt, der vierte übernimmt. Darüber hinaus teilen sich die drei verbleibenden Proxy-Server die Last basierend auf URL-Mustern, wodurch ihr Caching effektiver wird (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com-Domain          |
| #2    | .edu-Domain          |
| #3    | alle anderen Domains |
| #4    | Hot-Standby          |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf Port 8080 (sie müssen es nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten zu ändern). Beachten Sie, wie Zeichenketten mit dem **`+`** Operator in JavaScript verkettet werden können.

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

### Proxy für ein bestimmtes Protokoll festlegen

Die meisten der standardmäßigen JavaScript-Funktionalitäten sind verwendbar in der Funktion `FindProxyForURL()`. Zum Beispiel, um unterschiedliche Proxies basierend auf dem Protokoll festzulegen, kann die {{jsxref("String.prototype.startsWith()", "startsWith()")}} Funktion verwendet werden:

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
> Das Gleiche kann mithilfe der zuvor beschriebenen Funktion [`shExpMatch()`](#shexpmatch) erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Das ist nützlich, wenn die Autokonfigurationsdatei z.B. auf die Client-IP-Adresse unterschiedlich reagieren soll (die `REMOTE_ADDR` Umgebungsvariable in CGI).
>
> Die Nutzung von Funktionen wie `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig bedacht werden, da diese eine Konsultation des DNS-Servers erfordern. Alle anderen Autokonfigurations-bezogenen Funktionen sind reine Zeichenkettenvergleichsfunktionen, die keinen DNS-Server verwenden müssen. Wenn ein Proxy verwendet wird, wird der Proxy seine eigene DNS-Abfrage durchführen, was die Belastung des DNS-Servers verdoppeln kann. Meistens sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementation

Proxy-Auto-Konfiguration wurde in Netscape Navigator 2.0 in den späten 1990er Jahren eingeführt, zur selben Zeit, als JavaScript eingeführt wurde. Die Open-Source-Veröffentlichung von Netscape führte letztendlich zu Firefox.

Die "ursprünglichste" Implementierung von PAC und deren JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, das in früheren Versionen von Firefox zu finden ist. Diese Hilfsmittel sind in vielen anderen Open-Source-Systemen enthalten, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox hat später die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-Stringliteral integriert. Um sie in eine eigene Datei zu extrahieren, genügt es, den Abschnitt in JavaScript mit einem `console.log` Befehl zu kopieren, um ihn auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung erstellt. Es gab früher [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind mittlerweile gelöst. Sie haben [einige neue "Ex"-suffixed Funktionen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) für die Adressbehandlungsteile zum IPv6-Support definiert. Die Funktion wird von Chromium unterstützt, aber noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy-HTTP-Server-Konfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
