---
title: Proxy Auto-Configuration (PAC)-Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Eine **Proxy Auto-Configuration (PAC)-Datei** ist eine JavaScript-Funktion, die entscheidet, ob Webbrowser-Anfragen (HTTP, HTTPS und FTP) direkt an das Ziel gesendet oder an einen Webproxy-Server weitergeleitet werden. Die in der PAC-Datei enthaltene JavaScript-Funktion definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die aufgerufene URL. Die Pfad- und Abfragekomponenten von `https://`-URLs werden entfernt. In Chrome (Versionen 52 bis 73) kann dies deaktiviert werden, indem die Einstellung `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` gesetzt oder mit dem `--unsafe-pac-url` Befehlszeilen-Flag gestartet wird (in Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit, das Pfad-Strippen zu deaktivieren; ab Chrome 81 gilt das Pfad-Strippen nicht für HTTP-URLs, es besteht jedoch Interesse daran, dieses Verhalten an HTTPS anzupassen). In Firefox ist die Präferenz `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur zur Bequemlichkeit; es ist der gleiche String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im folgenden Abschnitt **Rückgabewert-Format** definiert.

### Rückgabewert-Format

- Die JavaScript-Funktion gibt einen einzelnen String zurück.
- Wenn der String null ist, sollten keine Proxys verwendet werden.
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, die durch ein Semikolon getrennt sind:

<!---->

- `DIRECT`
  - : Verbindungen sollen direkt, ohne Proxys hergestellt werden.
- `PROXY host:port`
  - : Der angegebene Proxy soll verwendet werden.
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server soll verwendet werden.

Neuere Versionen von Firefox unterstützen auch:

- `HTTP host:port`
  - : Der angegebene Proxy soll verwendet werden.
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy soll verwendet werden.
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) soll verwendet werden.

Wenn es mehrere Semikolon-getrennte Einstellungen gibt, wird die am weitesten links stehende Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser versucht automatisch nach 30 Minuten einen zuvor nicht reagierenden Proxy erneut. Zusätzliche Versuche beginnen nach einer Stunde und es werden immer 30 Minuten zur verstrichenen Zeit zwischen den Versuchen hinzugefügt.

Wenn alle Proxies ausgefallen sind und keine DIRECT-Option angegeben wurde, fragt der Browser, ob Proxies vorübergehend ignoriert werden sollen und direkte Verbindungen versucht werden sollen. Nach 20 Minuten fragt der Browser, ob die Proxies erneut versucht werden sollen, und fragt erneut nach weiteren 40 Minuten. Anfragen werden fortgesetzt, wobei immer 20 Minuten zur verstrichenen Zeit zwischen den Anfragen hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primärer Proxy ist w3proxy:8080; wenn dieser ausfällt, beginnt die Verwendung von mozilla:8081, bis der primäre Proxy wieder aktiv ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben wird Netscape den Benutzer um Bestätigung für die Herstellung direkter Verbindungen bitten; in diesem Fall erfolgt keine Benutzereingabe.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Auto-Konfigurationsdatei sollte unter einem Dateinamen mit der Endung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als nächstes sollten Sie Ihren Server so konfigurieren, dass die Dateinamenserweiterung .pac dem MIME-Typ zugeordnet wird.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer allein in einer Datei gespeichert werden und nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es sind keine zusätzlichen Syntaxelemente erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, damit sie die Domain und/oder Subnetze Ihrer Website widerspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können zum Aufbau der PAC-Datei verwendet werden:

- Auf Hostname basierende Bedingungen

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

- Auf URL/Hostname basierende Bedingungen

  - [`shExpMatch()`](#shexpmatch)

- Auf Zeit basierende Bedingungen

  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Protokollierungsdienstprogramm

  - [`alert()`](#alert)

- Es gab ein assoziatives Array (Objekt), das bereits definiert war, weil im damaligen JavaScript-Code nicht dieses selbst definiert werden konnte:

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
  - : Der Hostname von der URL (ohne Portnummer).

#### Beschreibung

True, wenn und nur wenn es keinen Domainnamen im Hostnamen gibt (keine Punkte).

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
localHostOrDomainIs(host, hostDom)
```

#### Parameter

- host
  - : Der Hostname aus der URL.
- hostDom
  - : Voll qualifizierter Hostname zum Abgleich.

#### Beschreibung

Ist true, wenn der Hostname _genau_ dem angegebenen Hostnamen entspricht, oder wenn im Hostnamen kein Domainnamensteil vorhanden ist, aber der unqualifizierte Hostname übereinstimmt.

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
  - : Ein DNS-Hostname oder eine IP-Adresse. Wenn ein Hostname übergeben wird, wird er von dieser Funktion in eine IP-Adresse aufgelöst.
- pattern
  - : Ein IP-Adressmuster im punktgetrennten Format.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet abgleichen.

True, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressenmuster übereinstimmt.

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
  - : Hostname zum Auflösen.

Löst den angegebenen DNS-Hostname in eine IP-Adresse auf und gibt sie im punktgetrennten Format als String zurück.

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

(none)

#### Rückgabewert

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox ausgeführt wird, als String im punktgetrennten Integer-Format. Um hilfreicher zu sein, werden mehrere Alternativen ausprobiert, bevor auf die Loopback-Adresse (wie `127.0.0.1`) zurückgegriffen wird.

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
  - : ist ein beliebiger String, mit dem verglichen wird (z. B. die URL oder der Hostname).
- shExp
  - : ist ein Shell-Ausdruck, mit dem verglichen wird.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für besondere Glob-Ausdrucks-Syntax variiert zwischen den Browsern:
`*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) wird immer unterstützt,
während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen unterstützt werden (einschließlich Firefox).

> [!NOTE]
> Wenn sie vom Client unterstützt werden, bieten JavaScript-Reguläre-Ausdrücke typischerweise eine stärkere und konsistentere Möglichkeit, URLs (und andere Strings) abzugleichen.

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
  - : Einer der geordneten Wochentage-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Entweder der string "GMT" oder leer lassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Wochentag, den der Parameter darstellt, einen Wahrheitswert zurück. Wenn der String "GMT" als zweiter Parameter angegeben ist, werden die Zeiten als GMT genommen. Andernfalls werden sie als lokale Zeitzone angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Grenzen sind einschließlich, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden die Zeiten in GMT angenommen. Andernfalls wird die lokale Zeitzone verwendet.

> **Warnung:** _Die Reihenfolge der Tage ist wichtig_.
> Vor Firefox 49 wird `weekdayRange("SUN", "SAT")` immer als `true` bewertet.
> Jetzt wird `weekdayRange("WED", "SUN")` nur dann als `true` bewertet, wenn der aktuelle Tag Mittwoch oder Sonntag ist.

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
> (Vor Firefox 49) day1 muss kleiner als day2 sein, month1 muss kleiner als month2 sein, und year1 muss kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als ganze Zahl).

```plain
1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
```

- month
  - : Ist einer der geordneten Monats-Strings unten.

```plain
"JAN"|"FEB"|"MAR"|"APR"|"MAY"|"JUN"|"JUL"|"AUG"|"SEP"|"OCT"|"NOV"|"DEC"
```

- year
  - : Ist die geordnete ganze Jahreszahl. Zum Beispiel, 2016 (**nicht** 16).
- gmt
  - : Entweder der String "GMT", der den Zeitvergleich in GMT-Zeitzone macht, oder leer lassen. Wenn nicht angegeben, werden die Zeiten als lokale Zeitzone angenommen.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Tag, Monat, Jahr), ist der Rückgabewert der Funktion nur an den Tagen wahr, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten einschließlich der Grenzen wahr, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Tage, Monate und Jahre ist wichtig**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer als `true` bewertet. Jetzt wird `dateRange("DEC", "JAN")` nur dann als wahr bewertet, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) muss die Kategorie hour1, min1, sec1 kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für die GMT-Zeitzone oder nicht angegeben, für die lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), ist der Rückgabewert der Funktion nur zu Zeiten wahr, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis zwischen diesen Zeiten einschließlich der Grenzen wahr, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Stunde, Minute, Sekunde ist wichtig**; Vor Firefox 49 wird `timeRange(0, 23)` immer als wahr bewertet. Jetzt wird `timeRange(23, 0)` nur dann als wahr bewertet, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

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

### Proxy für alles verwenden außer lokale Hosts

> [!NOTE]
> Da alle folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind oder sich in der lokalen Domain befinden, werden direkt verbunden. Alles andere wird über `w3proxy.mozilla.org:8080` geleitet. Wenn der Proxy ausfällt, werden Verbindungen automatisch direkt:

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

### Wie oben, aber Proxy für lokale Server verwenden, die sich außerhalb der Firewall befinden

Wenn es Hosts (wie den Haupt-Webserver) gibt, die zur lokalen Domain gehören, sich aber außerhalb der Firewall befinden und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel wird den Proxy für alles verwenden außer lokale Hosts in der mozilla.org-Domain, mit der Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen zur Effizienz: `localHostOrDomainIs()`-Funktionen werden nur für URLs in der lokalen Domain ausgeführt, nicht für jede URL. Achten Sie darauf, die Klammern um den _or_-Ausdruck vor dem _and_-Ausdruck zu beachten, um das oben genannte effiziente Verhalten zu erzielen.

## Beispiel 3

### Proxy nur verwenden, wenn der Host nicht aufgelöst werden kann

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist, einen Proxy nur für nicht auflösbare Hosts zu verwenden:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Dies erfordert, dass der DNS jedes Mal konsultiert wird; es kann intelligent mit anderen Regeln gruppiert werden, sodass der DNS nur konsultiert wird, wenn andere Regeln kein Ergebnis liefern:

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

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere werden über den Proxy hergestellt:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Die Nutzung des DNS-Servers im obigen Beispiel kann minimiert werden, indem redundante Regeln am Anfang hinzugefügt werden:

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

Dieses Beispiel ist ausgefeilter. Es gibt vier (4) Proxy-Server; einer von ihnen ist ein Hot-Standby für alle anderen, sodass, wenn einer der verbleibenden drei ausfällt, der vierte übernimmt. Darüber hinaus teilen sich die verbleibenden drei Proxy-Server die Last basierend auf URL-Mustern, was ihren Cache effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com-Domain          |
| #2    | .edu-Domain          |
| #3    | alle anderen Domains |
| #4    | Hot-Standby          |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf Port 8080 (sie müssen nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten zu ändern). Beachten Sie, wie Strings mit dem **`+`** Operator in JavaScript verkettet werden können.

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

### Einen Proxy für ein bestimmtes Protokoll festlegen

Die meisten standardmäßigen JavaScript-Funktionen stehen für die Verwendung in der Funktion `FindProxyForURL()` zur Verfügung. Um beispielsweise unterschiedliche Proxys basierend auf dem Protokoll festzulegen, kann die Funktion {{jsxref("String.prototype.startsWith()", "startsWith()")}} verwendet werden:

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
> Dasselbe kann mit der zuvor beschriebenen Funktion [`shExpMatch()`](#shexpmatch) erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, wenn die Autokonfigurationsdatei beispielsweise basierend auf der Client-IP-Adresse unterschiedlich agieren soll (die `REMOTE_ADDR`-Umgebungsvariable in CGI).
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig abgewogen werden, da sie das Konsultieren des DNS-Servers erfordern. Alle anderen autokonfigurationsbezogenen Funktionen sind lediglich String-Matching-Funktionen, die keinen DNS-Server erfordern. Wenn ein Proxy verwendet wird, führt der Proxy seine DNS-Abfrage durch, was den Einfluss auf den DNS-Server verdoppeln würde. Meistens sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Proxy-Auto-Konfiguration wurde in den späten 1990er Jahren in Netscape Navigator 2.0 eingeführt, gleichzeitig mit der Einführung von JavaScript. Die Open-Source-Initiative von Netscape führte letztendlich zu Firefox selbst.

Die "ursprünglichste" Implementierung von PAC und seinen JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, wie sie in frühen Versionen von Firefox gefunden wurde. Diese Hilfsprogramme befinden sich in vielen anderen Open-Source-Systemen, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox integrierte später die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-String-Literal. Um es in eine eigene Datei zu extrahieren, reicht es aus, das Stück in JavaScript mit einer `console.log`-Anweisung zu kopieren, um es auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung gemacht. Es gab einige Probleme mit ihren Bibliotheken, aber die meisten sind inzwischen behoben. Sie haben einige neue "Ex" Suffix-Funktionen rund um die Addresshandling-Teile zur Unterstützung von IPv6 definiert. Das Feature wird von Chromium unterstützt, aber noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy-HTTP-Serverkonfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
