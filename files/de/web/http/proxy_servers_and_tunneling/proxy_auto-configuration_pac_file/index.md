---
title: Proxy Auto-Configuration (PAC) Datei
slug: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Eine **Proxy Auto-Configuration (PAC)** Datei ist eine JavaScript-Funktion, die bestimmt, ob Anfragen eines Webbrowsers (HTTP, HTTPS und FTP) direkt an das Ziel gesendet oder an einen Webproxy-Server weitergeleitet werden. Die in der PAC-Datei enthaltene JavaScript-Funktion definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die abgerufene URL. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) kann dies deaktiviert werden, indem `PacHttpsUrlStrippingEnabled` in den Richtlinien auf `false` gesetzt oder mit dem `--unsafe-pac-url` Befehlszeilenflag gestartet wird (ab Chrome 74 funktioniert nur noch das Flag und ab Version 75 gibt es keine Möglichkeit mehr, das Entfernen des Pfads zu deaktivieren; ab Chrome 81 gilt das Entfernen des Pfads nicht für HTTP-URLs, es wird jedoch erwogen, dieses Verhalten an HTTPS anzupassen); in Firefox ist die Option `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies ist nur zur Vereinfachung; es ist der gleiche String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten, kann jedoch bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im Abschnitt **Format des Rückgabewertes** unten definiert.

### Format des Rückgabewertes

- Die JavaScript-Funktion gibt einen einzelnen String zurück
- Ist der String `null`, sollen keine Proxys verwendet werden
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, die durch ein Semikolon getrennt sind:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt hergestellt werden, ohne Proxys
- `PROXY host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server sollte verwendet werden

Neuere Versionen von Firefox unterstützen zusätzlich:

- `HTTP host:port`
  - : Der angegebene Proxy sollte verwendet werden
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy sollte verwendet werden
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) sollte verwendet werden

Wenn es mehrere durch Semikolon getrennte Einstellungen gibt, wird die ganz links stehende Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser versucht automatisch nach 30 Minuten, einen zuvor nicht ansprechbaren Proxy erneut zu verwenden. Weitere Versuche beginnen nach einer Stunde und es werden immer 30 Minuten zur verstrichenen Zeit zwischen den Versuchen hinzugefügt.

Sind alle Proxys ausgefallen und es wurde keine DIRECT-Option angegeben, fragt der Browser, ob Proxys vorübergehend ignoriert und Direktverbindungen versucht werden sollen. Nach 20 Minuten fragt der Browser, ob die Proxys erneut versucht werden sollen, und fragt erneut nach 40 weiteren Minuten. Die Fragen gehen weiter und fügen immer 20 Minuten zur verstrichenen Zeit zwischen den Fragen hinzu.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Der Hauptproxy ist w3proxy:8080; falls dieser ausfällt, wird mozilla:8081 verwendet, bis der Hauptproxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber falls beide Proxys ausfallen, werden automatisch Direktverbindungen hergestellt. (Im ersten Beispiel oben wird Netscape den Benutzer um Bestätigung bitten, ob Direktverbindungen hergestellt werden sollen; in diesem Fall ist keine Benutzereingabe erforderlich.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : SOCKS verwenden, wenn der Hauptproxy ausfällt.

Die Auto-Konfigurationsdatei sollte unter einer Datei mit der Endung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als nächstes sollten Sie Ihren Server so konfigurieren, dass er die .pac-Dateierweiterung auf den MIME-Typ abbildet.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer allein in einer Datei gespeichert werden und nicht in einer HTML-Datei oder einer anderen Datei eingebettet sein.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es sind keine zusätzlichen Syntaxelemente erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domänennamen und/oder die Subnetze Ihrer Website widerzuspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können zur Erstellung der PAC-Datei verwendet werden:

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

- URL/Hostname basierte Bedingungen

  - [`shExpMatch()`](#shexpmatch)

- Zeitbasierte Bedingungen

  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Protokollierungs-Dienstprogramm

  - [`alert()`](#alert)

- Es gab ein bereits definiertes assoziatives Array (Objekt), da zum Zeitpunkt JavaScript-Code es nicht selbst definieren konnte:

  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser) Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei lautet `proxy.pac`
> - Befehlszeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (übermittelt den `host` Parameter `www.mozilla.org` und den `url` Parameter `https://www.mozilla.org`)

### isPlainHostName()

#### Syntax

```js-nolint
isPlainHostName(host)
```

#### Parameter

- host
  - : Der Hostname aus der URL (ohne Portnummer).

#### Beschreibung

Wahr, wenn und nur wenn kein Domänenname im Hostnamen vorhanden ist (keine Punkte).

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
  - : Ist der Domänenname, gegen den der Hostname getestet wird.

#### Beschreibung

Gibt `true` zurück, wenn und nur wenn die Domäne des Hostnamens übereinstimmt.

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
  - : Vollständig qualifizierter Hostname zum Abgleich.

#### Beschreibung

Ist `true`, wenn der Hostname _genau_ mit dem angegebenen Hostname übereinstimmt, oder wenn im Hostnamen kein Domänenteil enthalten ist, der nicht qualifizierte Hostname jedoch übereinstimmt.

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

Versucht, den Hostnamen aufzulösen. Gibt `true` zurück, wenn er erfolgreich ist.

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
  - : ein DNS-Hostname oder eine IP-Adresse. Wird ein Hostname übergeben, wird er von dieser Funktion in eine IP-Adresse umgewandelt.
- pattern
  - : ein IP-Adresse-Muster im punktienten Format.
- mask
  - : Maske für das IP-Adresse-Muster, die angibt, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet übereinstimmen.

Wahr, wenn und nur wenn die IP-Adresse des Hosts dem angegebenen IP-Adresse-Muster entspricht.

Die Angabe von Muster und Maske erfolgt auf die gleiche Weise wie bei der SOCKS-Konfiguration.

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

Löst den angegebenen DNS-Hostnamen in eine IP-Adresse auf und gibt diesen im punktierten Format als String zurück.

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

Verkettet die vier punktierten Bytes in ein 4-Byte-Wort und wandelt es in dezimal um.

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

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox läuft, als String im punktierten Ganzzahlformat.

> **Warnung:** `myIpAddress()` gibt dieselbe IP-Adresse zurück, wie die Serveradresse, die von **`nslookup localhost`** auf einer Linux-Maschine zurückgegeben wird. Es gibt nicht die öffentliche IP-Adresse zurück.

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

Gibt die Anzahl (Ganzzahl) der DNS-Domänenebenen (Anzahl der Punkte) im Hostnamen zurück.

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
  - : ist ein beliebiger String zum Vergleich (z.B. die URL oder der Hostname).
- shExp
  - : ist ein Shell-Ausdruck, gegen den verglichen werden soll.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für bestimmte Glob-Ausdrücke variiert zwischen den Browsern: `*` (übereinstimmen mit einer beliebigen Anzahl von Zeichen) und `?` (übereinstimmen mit einem Zeichen) werden immer unterstützt, während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Reguläre Ausdrücke typischerweise eine mächtigere und konsistentere Möglichkeit, um URLs (und andere Strings) zu vergleichen.

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
> (Vor Firefox 49) wd1 muss kleiner als wd2 sein, wenn die Funktion diese Parameter als Bereich auswerten soll. Siehe die Warnung unten.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentags-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder der String "GMT" oder wird ausgelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Wochentag, den der Parameter darstellt, `true` zurück. Wird der String "GMT" als zweiter Parameter angegeben, werden die Zeiten als GMT-Zeiten erkannt. Andernfalls werden sie als Zeiten in der lokalen Zeitzone angenommen.

Sind sowohl **wd1** als auch **wd2** definiert, ist die Bedingung `true`, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind einschließlich, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden die Zeiten als GMT-Zeiten erkannt. Andernfalls wird die lokale Zeitzone verwendet.

> **Warnung:** _Die Reihenfolge der Tage ist relevant_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer zu `true` auswerten.
> Jetzt wird `weekdayRange("WED", "SUN")` nur dann zu `true` auswerten,
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
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 muss kleiner als month2 sein, und year1 muss kleiner als year2 sein, wenn die Funktion diese Parameter als Bereich auswerten soll. Siehe die Warnung unten.

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
  - : Ist die geordnete vollständige Jahreszahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Ist entweder der String "GMT", wodurch der Zeitvergleich in GMT-Zeitzone erfolgt, oder wird ausgelassen. Wenn nicht angegeben, werden Zeiten in der lokalen Zeitzone berücksichtigt.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion nur an den Tagen, die dieser Angabe entsprechen, `true` zurück. Sind beide Werte angegeben, ist das Ergebnis zwischen diesen Zeiten einschließlich der Grenzen `true`, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Tage, Monate und Jahre ist relevant**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer zu `true` auswerten. Jetzt wird `dateRange("DEC", "JAN")` nur dann zu `true` auswerten, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn die Funktion diese Parameter als Bereich auswerten soll. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für die GMT-Zeitzone oder nicht spezifiziert, für die lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion nur zu Zeiten zurück, die dieser Angabe entsprechen, `true` zurück. Sind beide Werte angegeben, ist das Ergebnis zwischen diesen Zeiten einschließlich der Grenzen `true`, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Stunde, Minute, Sekunde ist relevant**; Vor Firefox 49 wird `timeRange(0, 23)` immer zu `true` auswerten. Jetzt wird `timeRange(23, 0)` nur dann zu `true` auswerten, wenn die aktuelle Stunde 23:00 oder Mitternacht ist.

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

### Proxy für alles außer lokale Hosts verwenden

> [!NOTE]
> Da alle nachfolgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind oder die sich in der lokalen Domäne befinden, werden direkt verbunden. Alles andere wird durch `w3proxy.mozilla.org:8080` geleitet. Fällt der Proxy aus, werden die Verbindungen automatisch direkt:

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

### Wie oben, aber Proxy für lokale Server verwenden, die außerhalb der Firewall sind

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domäne gehören, aber außerhalb der Firewall sind und nur über den Proxyserver erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel verwendet den Proxy für alles außer lokale Hosts in der mozilla.org-Domäne, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` durch den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen für die Effizienz: `localHostOrDomainIs()` Funktionen werden nur für URLs ausgeführt, die sich in der lokalen Domäne befinden, nicht für jede URL. Achten Sie darauf, die Klammern um den _or_-Ausdruck vor dem _and_-Ausdruck zu setzen, um das oben erwähnte effiziente Verhalten zu erreichen.

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

Oben muss bei jeder Abfrage DNS konsultiert werden; es kann intelligent mit anderen Regeln gruppiert werden, sodass DNS nur konsultiert wird, wenn andere Regeln keine Ergebnisse liefern:

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

### Auf Subnetzen basierende Entscheidungen

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere über den Proxy:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Wieder kann die Nutzung des DNS-Servers oben minimiert werden, indem redundant Regeln am Anfang hinzugefügt werden:

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

Dieses Beispiel ist komplexer. Es gibt vier (4) Proxy-Server; einer davon ist ein Hot-Standby für alle anderen, sodass, wenn einer der verbleibenden drei ausfällt, der vierte die Kontrolle übernimmt. Darüber hinaus teilen die verbleibenden drei Proxy-Server die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com Domäne          |
| #2    | .edu Domäne          |
| #3    | alle anderen Domänen |
| #4    | Hot-Standby          |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf Port 8080 (das müssen sie nicht, Sie können einfach Ihren Port ändern, denken Sie jedoch daran, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Strings im JavaScript mit dem **`+`** Operator verkettet werden können.

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

### Einen Proxy für ein spezifisches Protokoll festlegen

Der größte Teil der Standard-JavaScript-Funktionalität kann in der `FindProxyForURL()` Funktion verwendet werden. Um zum Beispiel unterschiedliche Proxys basierend auf dem Protokoll festzulegen, kann die Funktion {{jsxref("String.prototype.startsWith()", "startsWith()")}} verwendet werden:

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
> Dasselbe kann mit der [`shExpMatch()`](#shexpmatch) Funktion erreicht werden, die vorher beschrieben wurde.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, wenn beispielsweise die Autokonfigurationsdatei je nach Client-IP-Adresse (die `REMOTE_ADDR` Umgebungsvariable in CGI) anders agiert.
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig bedacht werden, da sie die Konsultation des DNS-Servers erfordern. Alle anderen autokonfigurationsbezogenen Funktionen sind bloße Stringvergleichsfunktionen, die keinen DNS-Server benötigen. Wenn ein Proxy verwendet wird, führt der Proxy seine eigene DNS-Suche durch, was die Auswirkungen auf den DNS-Server verdoppelt. Meistens sind diese Funktionen nicht erforderlich, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Proxy autoconfig wurde in den späten 1990ern mit Netscape Navigator 2.0 eingeführt, gleichzeitig mit der Einführung von JavaScript. Die Open-Source-Freigabe von Netscape führte schließlich zu Firefox selbst.

Die "originalste" Implementierung von PAC und seinen JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, wie in frühen Versionen von Firefox zu finden. Diese Dienstprogramme sind in vielen anderen Open-Source-Systemen zu finden, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Später integrierte Firefox die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++ Stringliteral. Um es in eine eigene Datei zu extrahieren, reicht es aus, das Stück in JavaScript mit einer `console.log`-Anweisung zu übertragen, um es auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung entwickelt. Es gab [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind inzwischen gelöst. Sie haben [einige neue Funktionen mit "Ex"-Suffixen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) rund um die Adressbearbeitungsteile definiert, um IPv6 zu unterstützen. Das Feature wird von Chromium unterstützt, aber noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).
