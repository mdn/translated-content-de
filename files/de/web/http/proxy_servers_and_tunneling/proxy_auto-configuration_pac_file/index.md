---
title: Proxy Auto-Configuration (PAC) Datei
slug: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

Eine **Proxy Auto-Configuration (PAC)** Datei ist eine JavaScript-Funktion, die bestimmt, ob Anfragen des Browsers (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder zu einem Webproxy-Server weitergeleitet werden. Die JavaScript-Funktion in der PAC-Datei definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die zu erreichende URL. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) können Sie dies deaktivieren, indem Sie `PacHttpsUrlStrippingEnabled` in der Policy auf `false` setzen oder Chrome mit dem Kommandozeilen-Flag `--unsafe-pac-url` starten (in Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit mehr zur Deaktivierung des Pfad-Strippings; seit Chrome 81 gilt das Pfad-Stripping nicht mehr für HTTP-URLs, es besteht jedoch Interesse, dieses Verhalten an HTTPS anzupassen); in Firefox ist die Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur zur Bequemlichkeit; es ist derselbe String, der zwischen `://` und dem ersten `:` oder `/` danach liegt. Die Portnummer ist in diesem Parameter nicht enthalten, kann jedoch bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings wird im folgenden Abschnitt **Rückgabewertformat** definiert.

### Rückgabewertformat

- Die JavaScript-Funktion gibt einen einzelnen String zurück
- Ist der String null, sollten keine Proxys verwendet werden
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt ohne Proxys hergestellt werden
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

Wenn es mehrere durch Semikolons getrennte Einstellungen gibt, wird die am weitesten links stehende Einstellung verwendet, bis Firefox beim Herstellen der Verbindung mit dem Proxy fehlschlägt. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser wird automatisch einen zuvor nicht antwortenden Proxy nach 30 Minuten erneut versuchen. Weitere Versuche beginnen nach einer Stunde, wobei jedes Mal 30 Minuten zur verstrichenen Zeit zwischen den Versuchen hinzugefügt werden.

Wenn alle Proxys ausgefallen sind und keine DIRECT-Option angegeben wurde, fragt der Browser, ob Proxys vorübergehend ignoriert und direkte Verbindungen versucht werden sollen. Nach 20 Minuten fragt der Browser, ob Proxys erneut versucht werden sollen, und fragt nach weiteren 40 Minuten erneut. Diese Abfragen setzen sich fort, wobei jedes Mal 20 Minuten zur verstrichenen Zeit zwischen den Abfragen hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primärer Proxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxys ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben fragt Netscape nach der Bestätigung des Benutzers über direkte Verbindungen; in diesem Fall gibt es keine Benutzerintervention.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Autokonfigurationsdatei sollte in einer Datei mit der Erweiterung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als nächstes sollten Sie Ihren Server so konfigurieren, dass die .pac-Dateiendung auf diesen MIME-Typ abgebildet wird.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer für sich allein in einer Datei gespeichert, aber nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts so bearbeitet werden, dass sie den Domainnamen und/oder die Subnetze Ihrer Website widerspiegeln.)

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

- URL/Hostname-basierte Bedingungen

  - [`shExpMatch()`](#shexpmatch)

- Zeitbasierte Bedingungen

  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Protokollierungshilfe

  - [`alert()`](#alert)

- Es gab ein assoziatives Array (Objekt), das bereits definiert war, weil zu der Zeit JavaScript-Code es nicht selbst definieren konnte:

  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser) Paketes) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei heißt `proxy.pac`
> - Kommandozeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (überträgt den `host`-Parameter `www.mozilla.org` und den `url`-Parameter `https://www.mozilla.org`)

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
  - : Ist der Hostname aus der URL.
- domain
  - : Der Domainname, gegen den der Hostname getestet wird.

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
  - : Vollständiger Hostname für Abgleich.

#### Beschreibung

Ist true, wenn der Hostname _genau_ mit dem angegebenen Hostnamen übereinstimmt, oder wenn keine Domainname-Teil im Hostnamen enthalten ist, aber der unqualifizierte Hostname übereinstimmt.

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
  - : Ein DNS-Hostname oder eine IP-Adresse. Wenn ein Hostname übergeben wird, wird er von dieser Funktion in eine IP-Adresse aufgelöst.
- pattern
  - : Ein IP-Adressmuster im punktseparierten Format.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet abgleichen.

Wahr, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

Pattern- und Maskenspezifikation werden auf die gleiche Weise wie für die SOCKS-Konfiguration vorgenommen.

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

Löst den angegebenen DNS-Hostnamen in eine IP-Adresse auf und gibt diese im punktseparierten Format als Zeichenkette zurück.

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
  - : Eine beliebige gepunktete Adresse wie eine IP-Adresse oder Maske.

Verkettet die vier gepunkteten Bytes zu einem 4-Byte-Wort und konvertiert es in Dezimal.

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

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox läuft, als Zeichenkette im punktseparierten Integerformat.

> **Warnung:** `myIpAddress()` liefert dieselbe IP-Adresse wie die Serveradresse, die durch **`nslookup localhost`** auf einer Linux-Maschine zurückgegeben wird. Es liefert nicht die öffentliche IP-Adresse.

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
  - : Ist der Hostname aus der URL.

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
  - : Ist ein beliebiger String zum Vergleich (z.B. die URL oder der Hostname).
- shExp
  - : Ein Shell-Ausdruck zum Vergleich.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung der bestimmten Glob-Ausdrucks-Syntax variiert zwischen Browsern:
`*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) werden immer unterstützt,
während `[Zeichen]` und `[^Zeichen]` zusätzlich von einigen Implementierungen unterstützt werden (einschließlich Firefox).

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-reguläre Ausdrücke in der Regel eine stärkere und konsistentere Möglichkeit, URLs (und andere Strings) zu mustern.

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
  - : Einer der geordneten Wochentage-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Entweder der String "GMT" oder wird weggelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Wochentag, den der Parameter darstellt, einen wahren Wert zurück. Wenn der String "GMT" als zweiter Parameter angegeben wird, werden die Zeiten als GMT betrachtet. Andernfalls werden sie als Lokalzeiten angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden die Zeiten in GMT betrachtet. Andernfalls wird die lokale Zeitzone verwendet.

> **Warnung:** _Die Reihenfolge der Tage ist entscheidend_.
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
dateRange(<day> | <month> | <year>, [gmt])  // ambiguity is resolved by assuming year is greater than 31
dateRange(<day1>, <day2>, [gmt])
dateRange(<month1>, <month2>, [gmt])
dateRange(<year1>, <year2>, [gmt])
dateRange(<day1>, <month1>, <day2>, <month2>, [gmt])
dateRange(<month1>, <year1>, <month2>, <year2>, [gmt])
dateRange(<day1>, <month1>, <year1>, <day2>, <month2>, <year2>, [gmt])
```

> [!NOTE]
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 muss kleiner als month2 sein und year1 muss kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Integer).

```plain
1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
```

- month
  - : Ist einer der geordneten Monats-Strings unten.

```plain
"JAN"|"FEB"|"MAR"|"APR"|"MAY"|"JUN"|"JUL"|"AUG"|"SEP"|"OCT"|"NOV"|"DEC"
```

- year
  - : Ist die geordnete vollständige Jahreszahl als Ganzzahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Entweder der String "GMT", wodurch der Zeitvergleich in GMT-Zeitzone erfolgt, oder wird weggelassen. Wenn nicht angegeben, werden die Zeiten als Lokalzeiten betrachtet.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion nur an Tagen, die dieser Spezifikation entsprechen, einen wahren Wert zurück. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Tage, Monate und Jahre ist entscheidend**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer als `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur als wahr ausgewertet, wenn der aktuelle Monat Dezember oder Januar ist.

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
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 11 Uhr abends.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für GMT-Zeitzone, oder nicht angegeben, für lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion nur zu Zeiten, die dieser Spezifikation entsprechen, einen wahren Wert zurück. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Stunde, Minute, Sekunde ist entscheidend**; Vor Firefox 49 wird `timeRange(0, 23)` immer als wahr ausgewertet. Jetzt wird `timeRange(23, 0)` nur als wahr ausgewertet, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

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
alert("Error: shouldn't reach this clause.") // log a simple message
```

## Beispiel 1

### Verwenden Sie den Proxy für alles außer lokalen Hosts

> [!NOTE]
> Da alle nachfolgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollqualifiziert sind oder sich in der lokalen Domain befinden, werden direkt verbunden. Alles andere geht über `w3proxy.mozilla.org:8080`. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

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

### Wie oben, aber verwenden Sie den Proxy für lokale Server, die außerhalb der Firewall liegen

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domain gehören, aber außerhalb der Firewall liegen und nur über den Proxyserver erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel verwendet den Proxy für alles außer lokalen Hosts in der mozilla.org-Domain, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der oben genannten Ausnahmen aus Effizienzgründen: `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die sich in der lokalen Domain befinden, nicht für jede URL. Beachten Sie sorgfältig die Klammern um den _or_-Ausdruck vor dem _and_-Ausdruck, um das oben erwähnte effiziente Verhalten zu erreichen.

## Beispiel 3

### Verwenden Sie den Proxy nur, wenn der Host nicht aufgelöst werden kann

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist, einen Proxy nur für Hosts zu verwenden, die nicht aufgelöst werden können:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Die oben genannte erfordert eine DNS-Abfrage jedes Mal; es kann intelligent mit anderen Regeln gruppiert werden, sodass DNS nur abgefragt wird, wenn andere Regeln kein Ergebnis liefern:

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

### Subnetzbasierte Entscheidungen

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere werden über den Proxy verbunden:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Auch hier kann die Nutzung des DNS-Servers in den oben genannten durch Hinzufügen redundanter Regeln zu Beginn minimiert werden:

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

Dieses Beispiel ist ausgefeilter. Es gibt vier (4) Proxyserver; einer von ihnen ist ein heißer Standby für alle anderen, sodass, wenn einer der verbleibenden drei ausfällt, der vierte übernehmen wird. Außerdem teilen die drei verbleibenden Proxyserver die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt jeweils nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu je einer Kopie auf jedem von ihnen). Die Last wird so verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com Domain          |
| #2    | .edu Domain          |
| #3    | alle anderen Domains |
| #4    | heißer Standby       |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxyserver laufen auf Port 8080 (sie müssen es nicht, Sie können einfach Ihren Port ändern, aber behalten Sie im Kopf, Ihre Konfigurationen auf beiden Seiten zu ändern). Beachten Sie, wie Strings in JavaScript mit dem **`+`** Operator verkettet werden können.

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

### Einstellen eines Proxys für ein spezifisches Protokoll

Die meiste Standard-JavaScript-Funktionalität steht zur Verwendung in der Funktion `FindProxyForURL()` zur Verfügung. Als Beispiel kann die {{jsxref("String.prototype.startsWith()", "startsWith()")}} Funktion verwendet werden, um unterschiedliche Proxys basierend auf dem Protokoll einzustellen:

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
> Dasselbe kann mit Hilfe der [`shExpMatch()`](#shexpmatch) Funktion erreicht werden, die früher beschrieben wurde.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, wenn z.B. die Autokonfigurationsdatei basierend auf der IP-Adresse des Clients unterschiedlich aktiv ist (die `REMOTE_ADDR` Umweltvariable in CGI).
>
> Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollten sorgfältig abgewogen werden, da sie die Abfrage des DNS-Servers erfordern. Alle anderen auf Autokonfiguration bezogenen Funktionen sind reine String-Vergleichsfunktionen, die keine Verwendung eines DNS-Servers benötigen. Wenn ein Proxy verwendet wird, wird der Proxy seine eigene DNS-Abfrage durchführen, was die Last auf den DNS-Server verdoppeln würde. Meistens sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Proxy Auto-Configuration wurde in Netscape Navigator 2.0 in den späten 1990er Jahren eingeführt, als auch JavaScript eingeführt wurde. Die Open-Sourcing von Netscape führte schließlich zu Firefox selbst.

Die "originalste" Implementierung von PAC und dessen JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, die in frühen Versionen von Firefox zu finden ist. Diese Utilities sind in vielen anderen Open-Source-Systemen enthalten, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox integrierte die Datei später in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-Stringliteral. Um diese in eine eigene Datei zu extrahieren, genügt es, den Block in JavaScript zu kopieren und ein `console.log`-Kommando zu verwenden, um ihn auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung erstellt. Es gab früher [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind inzwischen behoben. Sie haben [einige neue Funktionen mit "Ex"-Suffixen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) rund um die Adresshandhabungsteile definiert, um IPv6 zu unterstützen. Die Funktion wird von Chromium unterstützt, jedoch noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/MIME_types)
- [Automatische Proxy-HTTP-Server-Konfiguration in Web-Browsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
