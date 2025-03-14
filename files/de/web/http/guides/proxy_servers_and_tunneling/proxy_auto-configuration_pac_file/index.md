---
title: Proxy Auto-Configuration (PAC) Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

Eine **Proxy Auto-Configuration (PAC)** Datei ist eine JavaScript-Funktion, die bestimmt, ob Anfragen von Webbrowsern (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder an einen Web-Proxy-Server weitergeleitet werden. Die JavaScript-Funktion in der PAC-Datei definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die aufgerufene URL. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) kann dies deaktiviert werden, indem `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` gesetzt wird oder indem man Chrome mit dem `--unsafe-pac-url` Kommandozeilen-Flag startet (in Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit, das Entfernen des Pfads zu deaktivieren; ab Chrome 81 gilt das Entfernen des Pfads nicht für HTTP-URLs, aber es gibt Bestrebungen, das Verhalten an HTTPS anzupassen); in Firefox heißt die Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur der Bequemlichkeit; es ist der gleiche String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings wird im **Rückgabewert-Format** unten definiert.

### Rückgabewert-Format

- Die JavaScript-Funktion gibt einen einzigen String zurück.
- Ist der String null, sollen keine Proxies verwendet werden.
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollen direkt, ohne Proxies, hergestellt werden.
- `PROXY host:port`
  - : Der angegebene Proxy soll verwendet werden.
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server soll verwendet werden.

Neuere Versionen von Firefox unterstützen außerdem:

- `HTTP host:port`
  - : Der angegebene Proxy soll verwendet werden.
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy soll verwendet werden.
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) soll verwendet werden.

Wenn es mehrere durch Semikolon getrennte Einstellungen gibt, wird die linkeste Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser wird automatisch einen zuvor nicht ansprechbaren Proxy nach 30 Minuten erneut versuchen. Weitere Versuche beginnen nach einer Stunde, wobei dem zwischen den Versuchen verstrichenen Zeit immer 30 Minuten hinzugefügt werden.

Wenn alle Proxies ausfallen und keine DIREKTE Option angegeben wurde, wird der Browser fragen, ob Proxies vorübergehend ignoriert werden sollen und direkte Verbindungen versucht werden sollen. Nach 20 Minuten fragt der Browser, ob Proxies erneut ausprobiert werden sollen, und fragt nach weiteren 40 Minuten erneut. Diese Abfragen werden fortgesetzt, wobei dem zwischen den Abfragen verstrichenen Zeit immer 20 Minuten hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Der primäre Proxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Gleich wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben fragt Netscape den Benutzer um Bestätigung für direkte Verbindungen; in diesem Fall gibt es keine Benutzereingriffe.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : SOCKS wird verwendet, wenn der primäre Proxy ausfällt.

Die Auto-Konfigurationsdatei sollte mit der Dateinamenerweiterung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als Nächstes sollten Sie Ihren Server so konfigurieren, dass die Dateinamenerweiterung .pac auf den MIME-Typ gemappt wird.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer in einer separaten Datei gespeichert werden und nicht in einer HTML-Datei oder einer anderen Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domänennamen und/oder die Subnetze Ihrer Site zu reflektieren.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Bedingungen, basierend auf Hostnamen

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

- Bedingungen, basierend auf URL/Hostname

  - [`shExpMatch()`](#shexpmatch)

- Bedingungen, basierend auf Zeit

  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Protokollierungswerkzeug

  - [`alert()`](#alert)

- Es gab ein assoziatives Array (Objekt), das bereits definiert war, weil zur Zeit der JavaScript-Code es nicht selbst definieren konnte:

  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser)-Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei heißt `proxy.pac`
> - Kommandozeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (übergibt den `host` Parameter `www.mozilla.org` und den `url` Parameter `https://www.mozilla.org`)

### isPlainHostName()

#### Syntax

```js-nolint
isPlainHostName(host)
```

#### Parameter

- host
  - : Der Hostname aus der URL (außer Portnummer).

#### Beschreibung

Ist nur dann wahr, wenn im Hostnamen kein Domainname vorhanden ist (keine Punkte).

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

Gibt wahr zurück, wenn und nur wenn die Domain des Hostnamens übereinstimmt.

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
  - : Vollqualifizierter Hostname, gegen den verglichen wird.

#### Beschreibung

Ist wahr, wenn der Hostname _genau_ dem angegebenen Hostnamen entspricht, oder wenn kein Domainname im Hostnamen vorhanden ist, aber der unqualifizierte Hostname übereinstimmt.

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

Versucht den Hostnamen zu aufzulösen. Gibt wahr zurück, wenn erfolgreich.

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
  - : Ein IP-Adressenmuster im durch Punkte getrennten Format.
- mask
  - : Maske für das IP-Adressenmuster, die angibt, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet abgleichen.

Ist nur dann wahr, wenn die IP-Adresse des Hosts dem angegebenen IP-Adressenmuster entspricht.

Die Muster- und Maskenspezifikation erfolgt auf die gleiche Weise wie bei der SOCKS-Konfiguration.

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
  - : Aufzulösender Hostname.

Löst den angegebenen DNS-Hostnamen in eine IP-Adresse auf und gibt diese im durch Punkte getrennten Format als String zurück.

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
  - : Jede durch Punkte getrennte Adresse wie eine IP-Adresse oder Maske.

Verkettet die vier durch Punkte getrennten Bytes zu einem 4-Byte-Wort und konvertiert es in Dezimalzahl.

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

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox ausgeführt wird, als String im durch Punkte getrennten Ganzzahlenformat. Um hilfreicher zu sein, werden mehrere Alternativen versucht, bevor auf die Loopback-Adresse (wie `127.0.0.1`) zurückgegriffen wird.

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

Gibt die Anzahl (Ganzzahl) der DNS-Domainebenen (Anzahl der Punkte) im Hostnamen zurück.

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
  - : Ist ein Shell-Ausdruck, gegen den verglichen werden soll.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für bestimmte Glob-Ausdrucksyntax variiert zwischen den Browsern:
`*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) werden immer unterstützt,
während `[Zeichen]` und `[^Zeichen]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Regular-Expressions typischerweise eine leistungsfähigere und konsistentere Möglichkeit, URLs (und andere Strings) zu mustern.

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
> (Vor Firefox 49) wd1 muss kleiner als wd2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentagszeichenfolgen: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder die Zeichenkette "GMT" oder wird weggelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Wochentag, den der Parameter darstellt, einen wahren Wert zurück. Wenn die Zeichenkette "GMT" als zweiter Parameter angegeben wird, werden Zeiten in GMT angenommen. Andernfalls wird davon ausgegangen, dass sie sich in der lokalen Zeitzone befinden.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind inbegriffen, aber die Grenzen sind geordnet. Wenn der Parameter "GMT" angegeben ist, werden Zeiten in GMT angenommen. Andernfalls wird die lokale Zeitzone verwendet.

> **Warnung:** _Die Reihenfolge der Tage ist wichtig_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer als `true` ausgewertet.
> Jetzt wird `weekdayRange("WED", "SUN")` nur `true` auswerten,
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
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 muss kleiner als month2, und year1 muss kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Ganzzahl).

```plain
1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
```

- month
  - : Ist einer der geordneten Monatszeichenfolgen unten.

```plain
"JAN"|"FEB"|"MAR"|"APR"|"MAY"|"JUN"|"JUL"|"AUG"|"SEP"|"OCT"|"NOV"|"DEC"
```

- year
  - : Ist das geordnete volle Jahresganzzahl. Zum Beispiel, 2016 (**nicht** 16).
- gmt
  - : Ist entweder die Zeichenkette "GMT", die den Zeitvergleich in der GMT-Zeitzone durchführt, oder wird weggelassen. Wenn nicht angegeben, werden Zeiten in der lokalen Zeitzone angenommen.

Wenn nur ein einzelner Wert (aus jeder Kategorie: Tag, Monat, Jahr) angegeben ist, gibt die Funktion einen echten Wert nur an Tagen zurück, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Tage, Monate und Jahre ist wichtig**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer als `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur `true` auswerten, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) Die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder die Zeichenkette "GMT" für GMT-Zeitzone oder nicht angegeben für lokale Zeitzone.

Wenn nur ein einzelner Wert (aus jeder Kategorie: Stunde, Minute, Sekunde) angegeben ist, gibt die Funktion einen echten Wert nur zu Zeiten zurück, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Stunde, Minute, Sekunde ist wichtig**; Vor Firefox 49 wird `timeRange(0, 23)` immer als `true` ausgewertet. Jetzt wird `timeRange(23, 0)` nur `true` auswerten, wenn die aktuelle Stunde 23:00 oder Mitternacht ist.

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
  - : Die Zeichenfolge zum Protokollieren

Protokolliert die Nachricht in der Browser-Konsole.

#### Beispiele

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // logs the host name and its IP address
alert("Error: shouldn't reach this clause.") // log a message
```

## Beispiel 1

### Verwenden Sie Proxy für alles, außer lokale Hosts

> [!NOTE]
> Da alle folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht voll qualifiziert sind, oder diejenigen, die in der lokalen Domain sind, werden direkt verbunden. Alles andere geht durch `w3proxy.mozilla.org:8080`. Wenn der Proxy ausfällt, werden Verbindungen automatisch direkt:

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

### Wie oben, aber verwenden Sie Proxy für lokale Server, die außerhalb der Firewall sind

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domain gehören, aber außerhalb der Firewall sind und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel wird den Proxy für alles außer lokale Hosts in der mozilla.org Domain verwenden, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` durch den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen für Effizienz: `localHostOrDomainIs()` Funktionen werden nur für URLs ausgeführt, die in lokalen Domains sind, nicht für jede URL. Beachten Sie sorgfältig die Klammern um den _oder_-Ausdruck vor dem _und_-Ausdruck, um das oben erwähnte effiziente Verhalten zu erzielen.

## Beispiel 3

### Verwenden Sie Proxy nur, wenn Host nicht auflösbar ist

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist es, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das obige erfordert die Konsultation des DNS bei jedem Mal; es kann intelligent mit anderen Regeln gruppiert werden, sodass das DNS nur konsultiert wird, wenn andere Regeln kein Ergebnis liefern:

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

### Subnet basierte Entscheidungen

In diesem Beispiel werden alle Hosts in einem bestimmten Subnet direkt verbunden, andere werden über den Proxy verbunden:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Hier kann erneut die Nutzung des DNS-Servers minimiert werden, indem redundante Regeln am Anfang hinzugefügt werden:

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

### Lastenausgleich/Routing basierend auf URL-Mustern

Dieses Beispiel ist anspruchsvoller. Es gibt vier (4) Proxy-Server; einer von ihnen ist eine heiße Reserve für alle anderen, sodass, wenn einer der verbleibenden drei ausfällt, der vierte übernimmt. Darüber hinaus teilen sich die drei verbleibenden Proxy-Server die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird so verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com Domain          |
| #2    | .edu Domain          |
| #3    | alle anderen Domains |
| #4    | heiße Reserve        |

Alle lokalen Zugriffe sollen direkt sein. Alle Proxy-Server laufen auf Port 8080 (sie müssen dies nicht, Sie können einfach Ihren Port ändern, vergessen Sie nicht, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Zeichenfolgen mit dem **`+`** Operator in JavaScript verkettet werden können.

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

### Einrichten eines Proxys für ein bestimmtes Protokoll

Die meisten der standardmäßigen JavaScript-Funktionalitäten sind in der `FindProxyForURL()` Funktion verfügbar. Um zum Beispiel unterschiedliche Proxys basierend auf dem Protokoll festzulegen, kann die {{jsxref("String.prototype.startsWith()", "startsWith()")}} Funktion verwendet werden:

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
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, wenn die Autokonfigurationsdatei sich basierend auf der Client-IP-Adresse (der `REMOTE_ADDR` Umgebungsvariable in CGI) unterschiedlich verhält.
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig abgewogen werden, da sie die Konsultation des DNS-Servers erfordern. Alle anderen autokonfigurationsbezogenen Funktionen sind reine Zeichenfolgenübereinstimmungsfunktionen, die keine Verwendung eines DNS-Servers erfordern. Wenn ein Proxy verwendet wird, wird der Proxy seine DNS-Abfrage durchführen, was die Auswirkung auf den DNS-Server verdoppeln würde. Diese Funktionen sind in der Regel nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Proxy auto-config wurde Ende der 1990er Jahre in Netscape Navigator 2.0 eingeführt, zur selben Zeit, als JavaScript eingeführt wurde. Die Open-Source-Freigabe von Netscape führte letztendlich zu Firefox selbst.

Die "originalste" Implementierung von PAC und seinen JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, das in frühen Versionen von Firefox gefunden wurde. Diese Dienstprogramme finden sich in vielen anderen Open-Source-Systemen einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox integrierte die Datei später in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als eine C++-Zeichenkette. Um sie in eine eigene Datei zu extrahieren, reicht es aus, den Block mit einer `console.log` Anweisung zu kopieren, um ihn auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung gemacht. Es gab früher [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind inzwischen gelöst. Sie haben [einige neue, mit "Ex" gekennzeichnete Funktionen definiert](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format), um die Adressbehandlungsteile zu unterstützen und IPv6 zu unterstützen. Die Funktion wird von Chromium unterstützt, aber noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA-Mediendateitypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy-HTTP-Server-Konfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
