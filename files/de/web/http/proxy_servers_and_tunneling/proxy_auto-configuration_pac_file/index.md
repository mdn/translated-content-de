---
title: Proxy Auto-Configuration (PAC)-Datei
slug: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Eine **Proxy Auto-Configuration (PAC)**-Datei ist eine JavaScript-Funktion, die bestimmt, ob Anfragen eines Webbrowsers (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder an einen Webproxy-Server weitergeleitet werden. Die JavaScript-Funktion, die in der PAC-Datei enthalten ist, definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die aufgerufene URL. Die Pfad- und Abfragekomponenten von `https://`-URLs werden entfernt. In Chrome (Versionen 52 bis 73) kann dies durch Setzen von `PacHttpsUrlStrippingEnabled` auf `false` in den Richtlinien oder durch Starten mit dem `--unsafe-pac-url`-Befehlszeilenflag deaktiviert werden (in Chrome 74 funktioniert nur das Flag, und ab Version 75 gibt es keine Möglichkeit, das Pfad-Entfernen zu deaktivieren; ab Chrome 81 gilt das Pfad-Entfernen nicht für HTTP-URLs, aber es besteht Interesse, dieses Verhalten an HTTPS anzupassen); in Firefox lautet die Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies ist nur zur Vereinfachung gedacht; es ist derselbe String, wie er zwischen `://` und dem ersten `:` oder `/` danach steht. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im Abschnitt **Rückgabewertformat** unten definiert.

### Rückgabewertformat

- Die JavaScript-Funktion gibt einen einzigen String zurück.
- Wenn der String null ist, sollten keine Proxys verwendet werden.
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt hergestellt werden, ohne Proxys.
- `PROXY host:port`
  - : Der angegebene Proxy sollte verwendet werden.
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server sollte verwendet werden.

Neuere Versionen von Firefox unterstützen auch:

- `HTTP host:port`
  - : Der angegebene Proxy sollte verwendet werden.
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy sollte verwendet werden.
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) sollte verwendet werden.

Wenn es mehrere durch Semikolon getrennte Einstellungen gibt, wird die links stehende Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet, usw.

Der Browser wird nach 30 Minuten automatisch einen zuvor nicht reagierenden Proxy erneut versuchen. Weitere Versuche beginnen nach einer Stunde und fügen der verstrichenen Zeit zwischen den Versuchen immer 30 Minuten hinzu.

Wenn alle Proxys ausgefallen sind und keine DIRECT-Option angegeben wurde, wird der Browser fragen, ob Proxys vorübergehend ignoriert werden sollen und direkte Verbindungen versucht werden sollen. Nach 20 Minuten wird der Browser fragen, ob Proxys erneut versucht werden sollen, und nach weiteren 40 Minuten erneut fragen. Die Abfragen werden fortgesetzt, wobei der verstrichenen Zeit zwischen den Abfragen immer 20 Minuten hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primärer Proxy ist w3proxy:8080; wenn dieser ausfällt, beginnt die Verwendung von mozilla:8081, bis der primäre Proxy wieder betriebsbereit ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxys ausfallen, beginnen automatisch direkte Verbindungen. (Im ersten Beispiel oben wird Netscape den Benutzer um Bestätigung für direkte Verbindungen bitten; in diesem Fall gibt es keine Benutzereingriffe.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Auto-Konfigurationsdatei sollte unter einer Datei mit der Erweiterung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als Nächstes sollten Sie Ihren Server so konfigurieren, dass er die Erweiterung .pac auf den MIME-Typ abbildet.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer separat in einer Datei gespeichert werden und nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder Subnetze Ihrer Website widerzuspiegeln.)

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

- Protokollierungshilfsprogramm

  - [`alert()`](#alert)

- Es gab ein assoziatives Array (Objekt), das bereits definiert war, da zu diesem Zeitpunkt JavaScript-Code nicht in der Lage war, es selbst zu definieren:

  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser)-Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei wird `proxy.pac` genannt
> - Befehlszeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (gibt den `host`-Parameter `www.mozilla.org` und den `url`-Parameter `https://www.mozilla.org` weiter)

### isPlainHostName()

#### Syntax

```js-nolint
isPlainHostName(host)
```

#### Parameter

- host
  - : Der Hostname aus der URL (ohne Portnummer).

#### Beschreibung

Wahr, wenn und nur wenn im Hostnamen kein Domainname vorhanden ist (keine Punkte).

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

Gibt true zurück, wenn und nur wenn die Domain des Hostnamens übereinstimmt.

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
  - : Vollqualifizierter Hostname, gegen den abgeglichen wird.

#### Beschreibung

Ist wahr, wenn der Hostname _genau_ mit dem angegebenen Hostnamen übereinstimmt oder wenn kein Domainnamensbestandteil im Hostnamen vorhanden ist, aber der unqualifizierte Hostname übereinstimmt.

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
  - : ein DNS-Hostname oder eine IP-Adresse. Wenn ein Hostname übergeben wird, wird er von dieser Funktion in eine IP-Adresse aufgelöst.
- pattern
  - : ein IP-Adressenmuster im punktgetrennten Format.
- mask
  - : Maske für das IP-Adressenmuster, die angibt, welche Teile der IP-Adresse verglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet vergleichen.

Wahr, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressenmuster übereinstimmt.

Die Spezifikation von Muster und Maske erfolgt auf die gleiche Weise wie bei der SOCKS-Konfiguration.

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

Löst den angegebenen DNS-Hostnamen in eine IP-Adresse auf und gibt sie im punktgetrennten Format als String zurück.

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

Verkettet die vier punktgetrennten Bytes zu einem 4-Byte-Wort und konvertiert es in dezimal.

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

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox läuft, als String im punktgetrennten Ganzzahlformat.

> **Warnung:** `myIpAddress()` gibt dieselbe IP-Adresse zurück wie die Serveradresse, die von **`nslookup localhost`** auf einer Linux-Maschine zurückgegeben wird. Es gibt nicht die öffentliche IP-Adresse zurück.

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

Gibt die Anzahl (Ganzzahl) der DNS-Domain-Level (Anzahl der Punkte) im Hostnamen zurück.

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
  - : ist ein beliebiger String zum Vergleich (z.B. die URL oder der Hostname).
- shexp
  - : ist ein Shell-Ausdruck, gegen den verglichen wird.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für bestimmte Globexpressions-Syntaxen variiert je nach Browser: `*` (übereinstimmen mit einer beliebigen Anzahl von Zeichen) und `?` (übereinstimmen mit einem Zeichen) werden immer unterstützt, während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn vom Client unterstützt, bieten JavaScript-Reguläre-Ausdrücke in der Regel eine leistungsfähigere und konsistentere Möglichkeit, URLs (und andere Zeichenfolgen) nach Mustern zu durchsuchen.

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
> (Vor Firefox 49) wd1 muss kleiner als wd2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich wertet. Siehe die Warnung unten.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentags-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder der String "GMT" oder wird weggelassen.

Nur der erste Parameter ist obligatorisch. Der zweite, dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Wochentag, den der Parameter darstellt, einen true-Wert zurück. Wenn der String "GMT" als zweiter Parameter angegeben wird, werden die Zeiten in GMT genommen. Andernfalls wird die lokale Zeitzone angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Die Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden die Zeiten in GMT genommen. Andernfalls wird die lokale Zeitzone verwendet.

> **Warnung:** _Die Reihenfolge der Tage ist von Bedeutung._
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer zu `true` auswerten.
> Jetzt wird `weekdayRange("WED", "SUN")` nur zu `true` auswerten,
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
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 muss kleiner als month2 sein, und year1 muss kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich wertet. Siehe die Warnung unten.

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
  - : Ist entweder der String "GMT", was den Zeitvergleich in der GMT-Zeitzone erfolgen lässt, oder wird weggelassen. Wenn er weggelassen wird, werden die Zeiten in der lokalen Zeitzone genommen.

Wenn nur ein einziger Wert angegeben ist (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion einen true-Wert nur an Tagen zurück, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Tage, Monate und Jahre ist von Bedeutung**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer zu `true` auswerten. Jetzt wird `dateRange("DEC", "JAN")` nur zu wahr ausgewertet, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich wertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für die GMT-Zeitzone oder nicht angegeben, für die lokale Zeitzone.

Wenn nur ein einziger Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion einen true-Wert nur zu Zeiten zurück, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten wahr, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge von Stunde, Minute und Sekunde ist von Bedeutung**; Vor Firefox 49 wird `timeRange(0, 23)` immer zu true ausgewertet. Jetzt wird `timeRange(23, 0)` nur zu wahr ausgewertet, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

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

### Verwenden Sie einen Proxy für alles außer lokale Hosts

> [!NOTE]
> Da alle folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind oder sich im lokalen Domain befinden, werden direkt verbunden. Alles andere geht über `w3proxy.mozilla.org:8080`. Wenn der Proxy ausfällt, werden Verbindungen automatisch direkt:

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
> Dies ist die einfachste und effizienteste autokonfig-Datei für Fälle, in denen nur ein Proxy vorhanden ist.

## Beispiel 2

### Wie oben, aber verwenden Sie Proxy für lokale Server, die sich außerhalb der Firewall befinden

Wenn es Hosts gibt (wie z. B. den Haupt-Webserver), die zur lokalen Domain gehören, sich jedoch außerhalb der Firewall befinden und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mithilfe der Funktion `localHostOrDomainIs()` gehandhabt werden:

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

Das obige Beispiel verwendet den Proxy für alles außer lokale Hosts in der mozilla.org-Domain, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen zur Effizienz: `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die sich in der lokalen Domain befinden, nicht für jede URL. Achten Sie darauf, die Klammern um den _oder_-Ausdruck vor dem _und_-Ausdruck zu setzen, um das oben erwähnte effiziente Verhalten zu erreichen.

## Beispiel 3

### Verwenden Sie einen Proxy nur, wenn der Host nicht aufgelöst werden kann

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann und das Ziel ist, einen Proxy nur für Hosts zu verwenden, die nicht aufgelöst werden können:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das Obige erfordert die Konsultation des DNS jedes Mal; es kann intelligent mit anderen Regeln gruppiert werden, sodass der DNS nur konsultiert wird, wenn andere Regeln kein Ergebnis liefern:

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

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere über den Proxy:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Erneut kann die Nutzung des DNS-Servers im obigen Beispiel durch Hinzufügen redundanter Regeln zu Beginn minimiert werden:

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

Dieses Beispiel ist komplexer. Es gibt vier (4) Proxy-Server; einer von ihnen ist ein Hot-Standby für alle anderen, sodass der vierte übernimmt, wenn einer der übrigen drei ausfällt. Außerdem teilen die restlichen drei Proxy-Server die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last ist folgendermaßen verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com-Domain          |
| #2    | .edu-Domain          |
| #3    | alle anderen Domains |
| #4    | Hot-Standby          |

Alle lokalen Zugriffe sollen direkt sein. Alle Proxy-Server laufen auf Port 8080 (sie müssen das nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten zu ändern). Beachten Sie, wie Strings in JavaScript mit dem **`+`**-Operator verkettet werden können.

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

### Festlegen eines Proxys für ein bestimmtes Protokoll

Der größte Teil der Standard-JavaScript-Funktionalität kann in der `FindProxyForURL()`-Funktion verwendet werden. Zum Beispiel, um unterschiedliche Proxys basierend auf dem Protokoll festzulegen, kann die {{jsxref("String.prototype.startsWith()", "startsWith()")}}-Funktion verwendet werden:

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
> Das Gleiche kann mit der oben beschriebenen [`shExpMatch()`](#shexpmatch)-Funktion erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, wenn die Autokonfigurationsdatei, z.B. basierend auf der Client-IP-Adresse (die `REMOTE_ADDR`-Umgebungsvariable in CGI), unterschiedlich agieren soll.
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig geprüft werden, da für sie der DNS-Server konsultiert werden muss. Alle anderen autokonfig-bezogenen Funktionen sind reine String-Matching-Funktionen, die keine Verwendung eines DNS-Servers erfordern. Wenn ein Proxy verwendet wird, wird der Proxy seine DNS-Abfrage durchführen, was die Auswirkung auf den DNS-Server verdoppeln würde. In den meisten Fällen sind diese Funktionen nicht erforderlich, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Die Proxy-Autokonfiguration wurde in den späten 1990er Jahren in den Netscape Navigator 2.0 eingeführt, zur gleichen Zeit wie JavaScript eingeführt wurde. Das Open-Sourcing von Netscape führte schließlich zu Firefox selbst.

Die "ursprünglichste" Implementierung von PAC und seinen JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, wie sie in frühen Versionen von Firefox zu finden ist. Diese Hilfsprogramme finden sich in vielen anderen Open-Source-Systemen, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox integrierte die Datei später in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-Stringliteral. Um sie in eine eigene Datei zu extrahieren, reicht es aus, das Fragment in JavaScript mit einer `console.log`-Anweisung zu kopieren, um es auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung erstellt. Es gab früher [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind inzwischen behoben. Sie haben [einige neue "Ex"-Suffix-Funktionen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) im Zusammenhang mit der Adresshandhabung definiert, um IPv6 zu unterstützen. Die Funktion wird von Chromium unterstützt, jedoch noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).
