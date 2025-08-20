---
title: Proxy Auto-Configuration (PAC)-Datei
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Eine **Proxy Auto-Configuration (PAC)**-Datei ist eine JavaScript-Funktion, die festlegt, ob Anfragen von Webbrowsern (HTTP, HTTPS und FTP) direkt an das Ziel gesendet oder an einen Webproxy-Server weitergeleitet werden. Die JavaScript-Funktion, die in der PAC-Datei enthalten ist, definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die URL, auf die zugegriffen wird. Der Pfad und die Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) können Sie dies deaktivieren, indem Sie `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` setzen oder Chrome mit dem Kommandozeilen-Flag `--unsafe-pac-url` starten (ab Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit mehr, das Pfad-Stripping zu deaktivieren; ab Chrome 81 gilt das Pfad-Stripping nicht mehr für HTTP-URLs, es gibt jedoch Überlegungen, dieses Verhalten an HTTPS anzupassen); in Firefox ist die Präferenz `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der Hostname, der aus der URL extrahiert wurde. Dies ist nur eine Bequemlichkeit; es ist derselbe String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im Abschnitt **Format des Rückgabewerts** unten definiert.

### Format des Rückgabewerts

- Die JavaScript-Funktion gibt einen einzelnen String zurück.
- Wenn der String null ist, sollten keine Proxies verwendet werden.
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, die durch ein Semikolon getrennt sind:

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

Wenn es mehrere durch Semikolon getrennte Einstellungen gibt, wird die linkste Einstellung verwendet, bis es Firefox nicht gelingt, die Verbindung zum Proxy herzustellen. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser versucht, einen zuvor nicht reagierenden Proxy nach 30 Minuten automatisch erneut zu verwenden. Zusätzliche Versuche beginnen nach einer Stunde, wobei die verstrichene Zeit zwischen den Versuchen immer um 30 Minuten verlängert wird.

Wenn alle Proxies ausgefallen sind und keine DIRECT-Option angegeben wurde, fragt der Browser, ob Proxies vorübergehend ignoriert und direkte Verbindungen versucht werden sollen. Nach 20 Minuten fragt der Browser, ob Proxies erneut versucht werden sollen, und fragt nach weiteren 40 Minuten erneut. Die Abfragen werden fortgesetzt, wobei die verstrichene Zeit zwischen den Abfragen immer um 20 Minuten verlängert wird.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primärer Proxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben fragt Netscape den Benutzer, ob direkte Verbindungen hergestellt werden sollen; in diesem Fall erfolgt keine Benutzereingabe.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwenden Sie SOCKS, wenn der primäre Proxy ausfällt.

Die Auto-Config-Datei sollte in eine Datei mit der Erweiterung .pac gespeichert werden: `proxy.pac`.

Der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als Nächstes sollten Sie Ihren Server so konfigurieren, dass die .pac-Dateierweiterung dem MIME-Typ zugeordnet wird.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer allein in eine Datei gespeichert werden, nicht in eine HTML-Datei oder eine andere Datei eingebettet.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um sie in eine Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder die Subnetze Ihrer Website widerzuspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Bedingungen basierend auf Hostnamen
  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- Verwandte Dienstfunktionen
  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- Bedingungen basierend auf URL/Hostname
  - [`shExpMatch()`](#shexpmatch)

- Zeitbasierte Bedingungen
  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Logging-Dienstfunktion
  - [`alert()`](#alert)

- Es war bereits ein assoziatives Array (Objekt) definiert, da der JavaScript-Code zu der Zeit nicht in der Lage war, es selbst zu definieren:
  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser)-Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
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

Gibt true zurück, wenn und nur wenn kein Domainname im Hostnamen vorhanden ist (keine Punkte).

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
  - : Vollständig qualifizierter Hostname, mit dem verglichen werden soll.

#### Beschreibung

Ist true, wenn der Hostname _genau_ mit dem angegebenen Hostnamen übereinstimmt oder wenn kein Domainname-Teil im Hostnamen vorhanden ist, aber der unqualifizierte Hostname übereinstimmt.

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
  - : ein IP-Adressmuster im punktgetrennten Format.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse abgeglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet abgleichen.

Gibt true zurück, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

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

Verkettet die vier punktgetrennten Bytes in ein 4-Byte-Wort und konvertiert es in Dezimal.

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

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox läuft, im punktgetrennten Ganzzahlenformat. Um hilfreicher zu sein, versucht es mehrere Alternativen, bevor auf die Loopback-Adresse zurückgefallen wird (wie `127.0.0.1`).

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
shExpMatch(str, shExp)
```

#### Parameter

- str
  - : ist jeder String, der verglichen werden soll (z. B. die URL oder der Hostname).
- shExp
  - : ist ein Shell-Ausdruck, mit dem verglichen werden soll.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung bestimmter Glob-Ausdruck-Syntaxen variiert zwischen den Browsern:
`*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) werden immer unterstützt,
während `[characters]` und `[^characters]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn der Client dies unterstützt, bieten JavaScript-Regulärausdrücke in der Regel eine leistungsfähigere und konsistentere Möglichkeit, URLs (und andere Strings) abzugleichen.

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
  - : Einer der geordneten Wochentags-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Entweder der String "GMT" oder nicht angegeben.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter angegeben ist, gibt die Funktion an dem Wochentag, den der Parameter repräsentiert, einen Wert von true zurück. Wenn der String "GMT" als zweiter Parameter angegeben wird, werden die Zeiten in GMT betrachtet. Andernfalls wird die lokale Zeitzone verwendet.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Die Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden die Zeiten in GMT betrachtet. Andernfalls wird die lokale Zeitzone verwendet.

> [!WARNING]
> _Die Reihenfolge der Tage ist wichtig_.
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
  - : Ist der geordnete Tag im Monat zwischen 1 und 31 (als Ganzzahl).
- month
  - : Einer der geordneten Monats-Strings: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- year
  - : Ist die geordnete ganze Jahreszahl. Zum Beispiel, 2016 (**nicht** 16).
- gmt
  - : Entweder der String "GMT", was den Zeitvergleich in der GMT-Zeitzone stattfinden lässt, oder nicht angegeben. Wenn nicht angegeben, werden die Zeiten als in der lokalen Zeitzone betrachtet.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion nur an Tagen, die dieser Spezifikation entsprechen, einen wahren Wert zurück. Wenn beide Werte angegeben sind, ist das Ergebnis wahr zwischen diesen Zeiten, inklusive Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge der Tage, Monate und Jahre ist wichtig**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer als `true` ausgewertet. Jetzt wird `dateRange("DEC", "JAN")` nur dann als true ausgewertet, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für GMT-Zeitzone oder nicht angegeben für lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion nur zu Zeiten, die dieser Spezifikation entsprechen, einen wahren Wert zurück. Wenn beide Werte angegeben sind, ist das Ergebnis wahr zwischen diesen Zeiten, inklusive Grenzen, _aber die Grenzen sind geordnet_.

> [!WARNING]
> **Die Reihenfolge der Stunde, Minute, Sekunde ist wichtig**; Vor Firefox 49 wird `timeRange(0, 23)` immer als wahr ausgewertet. Jetzt wird `timeRange(23, 0)` nur dann als wahr ausgewertet, wenn die aktuelle Stunde 23:00 oder Mitternacht ist.

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
  - : Der String, der protokolliert werden soll

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

Alle Hosts, die nicht vollständig qualifiziert sind oder sich in der lokalen Domäne befinden, werden direkt verbunden. Alles andere geht über `w3proxy.mozilla.org:8080`. Wenn der Proxy ausfällt, werden Verbindungen automatisch direkt:

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

### Wie oben, aber Proxy für lokale Server verwenden, die sich außerhalb der Firewall befinden

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domäne gehören, sich jedoch außerhalb der Firewall befinden und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel verwendet den Proxy für alles außer lokale Hosts in der mozilla.org-Domäne, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der oben genannten Ausnahmen für Effizienz: Die `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die sich in der lokalen Domäne befinden, nicht für jede URL. Achten Sie darauf, die Klammern um die _oder_-Ausdruck vor dem _und_-Ausdruck zu beachten, um das oben genannte effiziente Verhalten zu erreichen.

## Beispiel 3

### Proxy nur bei nicht auflösbarem Host verwenden

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das obige erfordert die Abfrage des DNS jedes Mal; es kann intelligent mit anderen Regeln gruppiert werden, so dass das DNS nur konsultiert wird, wenn andere Regeln kein Ergebnis liefern:

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

Wiederum kann die Verwendung des DNS-Servers im obigen minimiert werden, indem zu Beginn redundante Regeln hinzugefügt werden:

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

### Lastverteilung/Weiterleitung basiert auf URL-Mustern

Dieses Beispiel ist komplexer. Es gibt vier (4) Proxy-Server; einer von ihnen ist ein heißer Stand-by für alle anderen, sodass der vierte die Kontrolle übernimmt, wenn einer der übrigen drei ausfällt. Außerdem teilen die drei verbleibenden Proxy-Server die Last basierend auf URL-Mustern auf, was das Caching effizienter macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com-Domäne          |
| #2    | .edu-Domäne          |
| #3    | alle anderen Domänen |
| #4    | heißer Standby       |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf dem Port 8080 (sie müssen das nicht, Sie können einfach Ihren Port ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Strings im JavaScript mit dem **`+`**-Operator verkettet werden können.

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

Die meisten der standardmäßigen JavaScript-Funktionalitäten sind in der `FindProxyForURL()`-Funktion verfügbar. Als Beispiel kann die {{jsxref("String.prototype.startsWith()", "startsWith()")}}-Funktion verwendet werden, um verschiedene Proxies basierend auf dem Protokoll festzulegen:

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
> Das Gleiche kann mit der bereits beschriebenen Funktion [`shExpMatch()`](#shexpmatch) erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, um die Autokonfigurationsdatei beispielsweise basierend auf der IP-Adresse des Clients unterschiedlich zu gestalten (die `REMOTE_ADDR`-Umgebungsvariable in CGI).
>
> Die Verwendung der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig abgewogen werden, da sie die Abfrage des DNS-Servers erfordern. Alle anderen mit der Autokonfiguration in Zusammenhang stehenden Funktionen sind einfache Zeichenfolgen-Vergleichsfunktionen, die keine Verwendung eines DNS-Servers erfordern. Wenn ein Proxy verwendet wird, führt der Proxy seine DNS-Abfrage durch, was die Auswirkungen auf den DNS-Server verdoppeln würde. Meist sind diese Funktionen nicht erforderlich, um das gewünschte Ergebnis zu erreichen.

## Geschichte und Implementierung

Proxy-Autokonfiguration wurde in den späten 1990er Jahren in Netscape Navigator 2.0 eingeführt, gleichzeitig mit der Einführung von JavaScript. Die Öffnung von Netscape führte letztendlich zu Firefox selbst.

Die "originalste" Implementierung von PAC und seinen JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, das in frühen Versionen von Firefox zu finden ist. Diese Dienstprogramme finden sich in vielen anderen Open-Source-Systemen, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Später integrierte Firefox die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/firefox-main/source/netwerk/base/ProxyAutoConfig.cpp) als C++-Stringliteral. Um sie in eine eigene Datei zu extrahieren, genügt es, das Stück in JavaScript mit einer `console.log`-Anweisung zu kopieren, um es auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung gemacht. Es gab einige Probleme mit ihren Bibliotheken, die jetzt aber größtenteils behoben sind. Sie haben einige neue "Ex"-Suffix-Funktionen [IPv6-Erweiterungen zum Navigator-Proxy-Autokonfigurationsdateiformat](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) definiert, die die Adressverarbeitungsdetails zur Unterstützung von IPv6 abdecken. Die Funktion wird von Chromium unterstützt, jedoch noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy-HTTP-Server-Konfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
