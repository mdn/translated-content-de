---
title: Proxy-Auto-Konfigurations-Datei (PAC)
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{HTTPSidebar}}

Eine **Proxy Auto-Configuration (PAC)** Datei ist eine JavaScript-Funktion, die bestimmt, ob Anfragen des Webbrowsers (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder an einen Webproxy-Server weitergeleitet werden. Die in der PAC-Datei enthaltene JavaScript-Funktion definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die zugegriffene URL. Die Pfad- und Abfragekomponenten von `https://` URLs werden entfernt. In Chrome (Versionen 52 bis 73) können Sie dies deaktivieren, indem Sie `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` setzen oder mit dem `--unsafe-pac-url` Kommandozeilen-Flag starten (in Chrome 74 funktioniert nur das Flag, und ab 75 gibt es keine Möglichkeit mehr, das Pfad-Stripping zu deaktivieren; ab Chrome 81 gilt das Pfad-Stripping nicht mehr für HTTP-URLs, aber es gibt Bestrebungen, dieses Verhalten an HTTPS anzupassen); in Firefox ist die Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies ist nur der Bequemlichkeit halber; es ist der gleiche String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im Abschnitt **Rückgabewert-Format** unten definiert.

### Rückgabewert-Format

- Die JavaScript-Funktion gibt einen einzelnen String zurück.
- Wenn der String null ist, sollten keine Proxies verwendet werden.
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, getrennt durch ein Semikolon:

<!---->

- `DIRECT`
  - : Verbindungen sollten direkt, ohne Proxies, hergestellt werden.
- `PROXY host:port`
  - : Der angegebene Proxy sollte verwendet werden.
- `SOCKS host:port`
  - : Der angegebene SOCKS-Server sollte verwendet werden.

Neuere Versionen von Firefox unterstützen außerdem:

- `HTTP host:port`
  - : Der angegebene Proxy sollte verwendet werden.
- `HTTPS host:port`
  - : Der angegebene HTTPS-Proxy sollte verwendet werden.
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCKS-Version) sollte verwendet werden.

Wenn es mehrere Semikolon-getrennte Einstellungen gibt, wird die linkeste Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet usw.

Der Browser versucht automatisch, einen zuvor nicht ansprechbaren Proxy nach 30 Minuten erneut zu erreichen. Weitere Versuche beginnen nach einer Stunde, wobei immer 30 Minuten zu der zwischen den Versuchen verstrichenen Zeit hinzugefügt werden.

Wenn alle Proxies nicht erreichbar sind und keine DIRECT-Option angegeben wurde, wird der Browser fragen, ob Proxies vorübergehend ignoriert werden sollten, und direkte Verbindungen versuchen. Nach 20 Minuten fragt der Browser, ob die Proxies erneut versucht werden sollen, und fragt weitere 40 Minuten später erneut. Die Anfragen werden fortgesetzt, wobei immer 20 Minuten zur verstrichenen Zeit zwischen den Anfragen hinzugefügt werden.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Der primäre Proxy ist w3proxy:8080; wenn dieser ausfällt, beginnt die Nutzung von mozilla:8081, bis der primäre Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Dasselbe wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben wird Netscape den Benutzer um Bestätigung bitten, ob direkte Verbindungen hergestellt werden sollen; in diesem Fall erfolgt keine Benutzerintervention.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : Verwende SOCKS, wenn der primäre Proxy ausfällt.

Die Autokonfigurationsdatei sollte in einer Datei mit der Dateinamenerweiterung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Als Nächstes sollten Sie Ihren Server so konfigurieren, dass er die Dateinamenerweiterung .pac dem MIME-Typ zuordnet.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer allein in einer Datei gespeichert werden, sie sollte nicht in eine HTML-Datei oder irgendeine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es sind keine zusätzlichen Syntaxregeln erforderlich, um sie in eine Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um den Domainnamen und/oder die Subnetze Ihrer Website widerzuspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Hostname basierte Bedingungen

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

- URL/hostname basierte Bedingungen

  - [`shExpMatch()`](#shexpmatch)

- Zeit basierte Bedingungen

  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- Logging-Dienstprogramm

  - [`alert()`](#alert)

- Es gab ein assoziatives Array (Objekt), das bereits definiert war, da JavaScript-Code zu dieser Zeit nicht in der Lage war, es selbst zu definieren:

  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> pactester (Teil des [pacparser](https://github.com/manugarg/pacparser) Pakets) wurde verwendet, um die folgenden Syntaxbeispiele zu testen.
>
> - Die PAC-Datei heißt `proxy.pac`
> - Befehlszeile: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (überträgt den `host` Parameter `www.mozilla.org` und den `url` Parameter `https://www.mozilla.org`)

### isPlainHostName()

#### Syntax

```js-nolint
isPlainHostName(host)
```

#### Parameter

- host
  - : Der Hostname von der URL (ohne Portnummer).

#### Beschreibung

Wahr nur und ausschließlich, wenn kein Domainname im Hostnamen vorhanden ist (keine Punkte).

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
  - : Der Domainname, um gegen den Hostnamen zu prüfen.

#### Beschreibung

Gibt true zurück, wenn die Domain des Hostnamens übereinstimmt, und nur dann.

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

Ist wahr, wenn der Hostname _exakt_ mit dem angegebenen Hostnamen übereinstimmt oder wenn es keinen Domänennamensanteil im Hostnamen gibt, der unqualifizierte Hostname jedoch übereinstimmt.

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
  - : ein IP-Adressmuster im punktgetrennten Format.
- mask
  - : Maske für das IP-Adressmuster, die angibt, welche Teile der IP-Adresse verglichen werden sollen. 0 bedeutet ignorieren, 255 bedeutet vergleichen.

Wahr nur und ausschließlich, wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

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
  - : Hostname, der aufgelöst werden soll.

Löst den angegebenen DNS-Hostname in eine IP-Adresse auf und gibt ihn im punktgetrennten Format als String zurück.

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
  - : Eine beliebige punktierte Adresse wie eine IP-Adresse oder Maske.

Verbindet die vier punktgetrennten Bytes zu einem 4-Byte-Wort und konvertiert es in Dezimal.

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

Gibt die Server-IP-Adresse der Maschine zurück, auf der Firefox läuft, als String im punktgetrennten Ganzzahlenformat. Um nützlicher zu sein, wird es mehrere Alternativen versuchen, bevor es auf die Loopback-Adresse (wie `127.0.0.1`) zurückfällt.

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

Gibt die Anzahl (Ganzzahl) der DNS-Domain Levels (Anzahl der Punkte) im Hostnamen zurück.

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
  - : ist ein zu vergleichender Shell-Ausdruck.

Gibt `true` zurück, wenn der String dem angegebenen Shell-Glob-Ausdruck entspricht.

Unterstützung für bestimmte Glob-Ausdrucks-Syntaxen variiert zwischen Browsern:
`*` (Übereinstimmung mit einer beliebigen Anzahl von Zeichen) und `?` (Übereinstimmung mit einem Zeichen) werden immer unterstützt,
während `[characters]` und `[^characters]` von einigen Implementierungen zusätzlich unterstützt werden (einschließlich Firefox).

> [!NOTE]
> Wenn es vom Client unterstützt wird, bieten JavaScript-Reguläre Ausdrücke üblicherweise eine stärkere und konsistentere Möglichkeit, URLs (und andere Strings) zu vergleichen.

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
> (Vor Firefox 49) wd1 muss kleiner als wd2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- wd1 und wd2
  - : Einer der geordneten Wochentag-Strings: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder der String "GMT" oder wird weggelassen.

Nur der erste Parameter ist obligatorisch. Entweder der zweite, der dritte oder beide dürfen weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Wochentag, den der Parameter darstellt, einen wahren Wert zurück. Wenn der String "GMT" als zweiter Parameter angegeben ist, werden die Zeiten als GMT betrachtet. Andernfalls werden sie als Ortszeit angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _geordneten_ Wochentagen liegt. Die Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der Parameter "GMT" angegeben ist, werden die Zeiten als GMT angesehen. Andernfalls wird die lokale Zeitzone verwendet.

> **Warnung:** _Die Reihenfolge der Tage ist wichtig_.
> Vor Firefox 49 wertet `weekdayRange("SUN", "SAT")` immer zu `true`.
> Jetzt wertet `weekdayRange("WED", "SUN")` nur zu `true`,
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
> (Vor Firefox 49) day1 muss kleiner als day2, month1 muss kleiner als month2 und year1 muss kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- day
  - : Ist der geordnete Tag des Monats zwischen 1 und 31 (als Ganzzahl).
- month
  - : Ist einer der geordneten Monatsstrings: `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"`.
- year
  - : Ist die geordnete vollständige Jahreszahl. Zum Beispiel, 2016 (**nicht** 16).
- gmt
  - : Ist entweder der String "GMT", wodurch der Zeitvergleich in GMT erfolgt, oder wird weggelassen. Wenn er nicht angegeben wird, wird die lokale Zeitzone angenommen.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion einen wahren Wert nur an Tagen zurück, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis wahr zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Ordnung der Tage, Monate und Jahre spielt eine Rolle**; Vor Firefox 49 wertet `dateRange("JAN", "DEC")` immer zu `true`. Jetzt wertet `dateRange("DEC", "JAN")` nur dann zu `true`, wenn der aktuelle Monat Dezember oder Januar ist.

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
> (Vor Firefox 49) die Kategorie hour1, min1, sec1 muss kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich bewertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 23 Uhr.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder der String "GMT" für die GMT-Zeitzone, oder nicht angegeben, für die lokale Zeitzone.

Wenn nur ein einzelner Wert angegeben wird (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion einen wahren Wert nur zu Zeiten zurück, die dieser Spezifikation entsprechen. Wenn beide Werte angegeben sind, ist das Ergebnis wahr zwischen diesen Zeiten, einschließlich der Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Ordnung der Stunde, der Minute, der Sekunde ist wichtig**; Vor Firefox 49 wertet `timeRange(0, 23)` immer zu true. Jetzt wertet `timeRange(23, 0)` nur dann zu true, wenn die aktuelle Stunde 23:00 Uhr oder Mitternacht ist.

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
alert("Error: shouldn't reach this clause.") // log a message
```

## Beispiel 1

### Verwenden Sie den Proxy für alles außer lokale Hosts

> [!NOTE]
> Da alle der folgenden Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind oder die sich in der lokalen Domäne befinden, werden direkt verbunden. Alles andere wird über `w3proxy.mozilla.org:8080` geleitet. Wenn der Proxy ausfällt, werden die Verbindungen automatisch direkt:

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

### Wie oben, aber verwenden Sie den Proxy für lokale Server, die außerhalb der Firewall sind

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domäne gehören, aber außerhalb der Firewall liegen und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der Funktion `localHostOrDomainIs()` behandelt werden:

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

Das obige Beispiel wird den Proxy für alles verwenden, außer lokalen Hosts in der mozilla.org-Domäne, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy gehen.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen für Effizienz: `localHostOrDomainIs()` Funktionen werden nur für URLs in der lokalen Domäne ausgeführt, nicht für jede URL. Achten Sie darauf, die Klammern um den _or_ Ausdruck vor dem _and_ Ausdruck zu bemerken, um das oben genannte effiziente Verhalten zu erreichen.

## Beispiel 3

### Verwenden Sie den Proxy nur, wenn der Host nicht auflösbar ist

Dieses Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist es, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das oben Genannte erfordert bei jeder Anfrage eine DNS-Abfrage; es kann intelligent mit anderen Regeln gruppiert werden, sodass DNS nur bei fehlendem Ergebnis aus anderen Regeln abgefragt wird:

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

### Subnetbasierte Entscheidungen

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere werden über den Proxy verbunden:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Auch hier kann der Einsatz des DNS-Servers durch Hinzufügen redundanter Regeln am Anfang minimiert werden:

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

Dieses Beispiel ist komplexer. Es gibt vier (4) Proxyserver; einer davon ist ein Hot-Stand-by für alle anderen, sodass wenn jeder der verbleibenden drei ausfällt, der vierte ihn übernimmt. Darüber hinaus teilen die drei verbleibenden Proxyserver die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird folgendermaßen verteilt:

| Proxy | Zweck                |
| ----- | -------------------- |
| #1    | .com-Domänen         |
| #2    | .edu-Domänen         |
| #3    | alle anderen Domänen |
| #4    | Hot-Stand-by         |

Alle lokalen Zugriffe sollen direkt sein. Alle Proxy-Server laufen auf dem Port 8080 (sie müssen nicht, Sie können den Port einfach ändern, aber denken Sie daran, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Strings im JavaScript mit dem **`+`** Operator verkettet werden können.

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

Die meisten der Standard-JavaScript-Funktionalitäten stehen zur Verwendung in der `FindProxyForURL()`-Funktion zur Verfügung. Als Beispiel kann die Funktion {{jsxref("String.prototype.startsWith()", "startsWith()")}} verwendet werden, um verschiedene Proxys basierend auf dem Protokoll festzulegen:

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
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist nützlich, wenn die Autokonfigurationsdatei zum Beispiel abhängig von der Client-IP-Adresse unterschiedlich handeln soll (die `REMOTE_ADDR` Umgebungsvariable im CGI).
>
> Die Verwendung von `isInNet()`, `isResolvable()` und `dnsResolve()`-Funktionen sollte sorgfältig erwogen werden, da sie eine DNS-Abfrage erfordern. Alle anderen autokonfigurationsbezogenen Funktionen sind reine Stringvergleichs-Funktionen, die keine Verwendung eines DNS-Servers erfordern. Wenn ein Proxy verwendet wird, führt der Proxy seine DNS-Abfrage durch, was die Belastung des DNS-Servers verdoppeln würde. Diese Funktionen sind meistens nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Proxy-Auto-Konfiguration wurde Ende der 1990er Jahre in Netscape Navigator 2.0 eingeführt, gleichzeitig mit der Einführung von JavaScript. Die Open-Source-Freigabe von Netscape führte letztendlich zu Firefox selbst.

Die "ursprünglichste" Implementierung von PAC und seinen JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, das in frühen Versionen von Firefox zu finden ist. Diese Hilfsprogramme sind in vielen anderen Open-Source-Systemen zu finden, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox integrierte die Datei später in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-Stringliteral. Um sie in eine eigene Datei zu extrahieren, reicht es aus, den Abschnitt in JavaScript mit einer `console.log`-Anweisung zu kopieren, um ihn zu drucken.

Microsoft hat im Allgemeinen seine eigene Implementierung erstellt. Es gab [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind mittlerweile behoben. Sie haben [einige neue mit "Ex" endende Funktionen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) für die Adresshandhabung zur Unterstützung von IPv6 definiert. Die Funktion wird von Chromium unterstützt, aber noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).

## Siehe auch

- {{Glossary("Proxy_server", "Proxy-Server")}}
- [MIME-Typen (IANA Media Types)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Automatische Proxy-HTTP-Serverkonfiguration in Webbrowsern](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
