---
title: Proxy-Auto-Konfigurationsdatei (PAC)
slug: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Eine **Proxy-Auto-Konfigurationsdatei (PAC)** ist eine JavaScript-Funktion, die bestimmt, ob Anfragen von Webbrowsern (HTTP, HTTPS und FTP) direkt an das Ziel gesendet oder an einen Web-Proxy-Server weitergeleitet werden. Die JavaScript-Funktion, die in der PAC-Datei enthalten ist, definiert die Funktion:

## Syntax

```js
function FindProxyForURL(url, host) {
  // …
}
```

### Parameter

- `url`
  - : Die URL, die aufgerufen wird. Die Pfad- und Abfragekomponenten von `https://`-URLs werden entfernt. In Chrome (Versionen 52 bis 73) kann dies deaktiviert werden, indem `PacHttpsUrlStrippingEnabled` in der Richtlinie auf `false` gesetzt wird oder durch Starten mit der Befehlszeilen-Option `--unsafe-pac-url` (in Chrome 74 funktioniert nur die Option, und ab 75 gibt es keine Möglichkeit mehr, das Entfernen des Pfades zu deaktivieren; ab Chrome 81 gilt das Entfernen des Pfades nicht für HTTP-URLs, aber es gibt Bestrebungen, dieses Verhalten an HTTPS anzupassen); in Firefox ist die entsprechende Einstellung `network.proxy.autoconfig_url.include_path`.
- `host`
  - : Der aus der URL extrahierte Hostname. Dies dient nur zur Bequemlichkeit; es ist derselbe String wie zwischen `://` und dem ersten `:` oder `/` danach. Die Portnummer ist in diesem Parameter nicht enthalten. Sie kann bei Bedarf aus der URL extrahiert werden.

## Beschreibung

Gibt einen String zurück, der die Konfiguration beschreibt. Das Format dieses Strings ist im Abschnitt **Rückgabewertformat** unten definiert.

### Rückgabewertformat

- Die JavaScript-Funktion gibt einen einzelnen String zurück
- Wenn der String null ist, sollten keine Proxies verwendet werden
- Der String kann eine beliebige Anzahl der folgenden Bausteine enthalten, die durch ein Semikolon getrennt sind:

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
  - : Der angegebene SOCKS-Server (mit der angegebenen SOCK-Version) sollte verwendet werden

Wenn es mehrere durch Semikolons getrennte Einstellungen gibt, wird die am weitesten links stehende Einstellung verwendet, bis Firefox die Verbindung zum Proxy nicht herstellen kann. In diesem Fall wird der nächste Wert verwendet, usw.

Der Browser wird automatisch einen zuvor nicht ansprechbaren Proxy nach 30 Minuten erneut versuchen. Weitere Versuche beginnen nach einer Stunde und addieren immer 30 Minuten zur verstrichenen Zeit zwischen den Versuchen.

Wenn alle Proxies ausfallen und keine DIREKT-Option angegeben wurde, wird der Browser fragen, ob Proxies vorübergehend ignoriert und direkte Verbindungen versucht werden sollen. Nach 20 Minuten wird der Browser fragen, ob Proxies erneut versucht werden sollen, und nach weiteren 40 Minuten erneut fragen. Die Abfragen werden fortgesetzt und addieren immer 20 Minuten zur verstrichenen Zeit zwischen den Abfragen.

#### Beispiele

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : Primärer Proxy ist w3proxy:8080; wenn dieser ausfällt, wird mozilla:8081 verwendet, bis der primäre Proxy wieder verfügbar ist.
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : Wie oben, aber wenn beide Proxies ausfallen, werden automatisch direkte Verbindungen hergestellt. (Im ersten Beispiel oben wird Netscape eine Benutzerbestätigung bezüglich direkter Verbindungen anfordern; in diesem Fall gibt es keine Benutzerintervention.)
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : SOCKS wird verwendet, wenn der primäre Proxy ausfällt.

Die Auto-Konfigurationsdatei sollte unter einem Dateinamen mit der Erweiterung .pac gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Anschließend sollten Sie Ihren Server so konfigurieren, dass die Dateierweiterung .pac auf den MIME-Typ abgebildet wird.

> [!NOTE]
>
> - Die JavaScript-Funktion sollte immer alleine in einer Datei gespeichert werden, jedoch nicht in eine HTML-Datei oder eine andere Datei eingebettet werden.
> - Die Beispiele am Ende dieses Dokuments sind vollständig. Es ist keine zusätzliche Syntax erforderlich, um sie in einer Datei zu speichern und zu verwenden. (Natürlich müssen die JavaScripts bearbeitet werden, um die Domainnamen und/oder Subnetze Ihrer Seite widerzuspiegeln.)

## Vordefinierte Funktionen und Umgebung

Diese Funktionen können beim Erstellen der PAC-Datei verwendet werden:

- Bedingungen basierend auf Hostnamen

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

- Bedingungen basierend auf URL/Hostnamen

  - [`shExpMatch()`](#shexpmatch)

- Zeitbasierte Bedingungen

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

Liefert `true`, wenn und nur wenn kein Domainname im Hostnamen vorhanden ist (keine Punkte).

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

Liefert `true`, wenn und nur wenn die Domain des Hostnamens übereinstimmt.

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
  - : Vollständig qualifizierter Hostname zum Abgleichen.

#### Beschreibung

Ist `true`, wenn der Hostname genau mit dem angegebenen Hostnamen übereinstimmt, oder wenn kein Domainname im Hostnamen vorhanden ist, aber der nicht qualifizierte Hostname übereinstimmt.

#### Beispiele

```js-nolint
localHostOrDomainIs("www.mozilla.org", "www.mozilla.org") // true (genaue Übereinstimmung)
localHostOrDomainIs("www", "www.mozilla.org") // true (Hostname stimmt überein, Domain nicht angegeben)
localHostOrDomainIs("www.google.com", "www.mozilla.org") // false (Domainname stimmt nicht überein)
localHostOrDomainIs("home.mozilla.org", "www.mozilla.org") // false (Hostname stimmt nicht überein)
```

### isResolvable()

#### Syntax

```js-nolint
isResolvable(host)
```

#### Parameter

- host
  - : ist der Hostname aus der URL.

Versucht, den Hostnamen zu lösen. Gibt `true` zurück, wenn erfolgreich.

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

`True`, wenn und nur wenn die IP-Adresse des Hosts mit dem angegebenen IP-Adressmuster übereinstimmt.

Pattern- und Maskenspezifizierung erfolgt genauso wie für die SOCKS-Konfiguration.

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

Löst den angegebenen DNS-Hostname in eine IP-Adresse auf und gibt sie im punktgetrennten Format als String zurück.

#### Beispiel

```js
dnsResolve("www.mozilla.org"); // gibt den String "104.16.41.2" zurück
```

### convert_addr()

#### Syntax

```js-nolint
convert_addr(ipaddr)
```

#### Parameter

- ipaddr
  - : Jede punktierte Adresse wie eine IP-Adresse oder Maske.

Verkettet die vier durch Punkte getrennten Bytes zu einem 4-Byte-Wert und konvertiert ihn in dezimal.

#### Beispiel

```js
convert_addr("192.0.2.172"); // gibt die dezimale Zahl 1745889538 zurück
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
myIpAddress() // gibt den String "127.0.1.1" zurück, wenn Sie Firefox auf diesem localhost ausführen
```

### dnsDomainLevels()

#### Syntax

```js-nolint
dnsDomainLevels(host)
```

#### Parameter

- host
  - : ist der Hostname aus der URL.

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
shExpMatch(str, shexp)
```

#### Parameter

- str
  - : ist ein beliebiger String zum Vergleichen (z. B. die URL oder der Hostname).
- shexp
  - : ist ein Shell-Ausdruck, gegen den verglichen wird.

Gibt `true` zurück, wenn der String mit dem angegebenen Shell-Glob-Ausdruck übereinstimmt.

Die Unterstützung für spezifische Glob-Ausdrucks-Syntax variiert zwischen den Browsern:
`*` (beliebige Anzahl von Zeichen) und `?` (ein Zeichen) werden immer unterstützt,
während `[Zeichen]` und `[^Zeichen]` zusätzlich von einigen Implementierungen (einschließlich Firefox) unterstützt werden.

> [!NOTE]
> Wenn es vom Client unterstützt wird, bieten JavaScript-Reguläre-Ausdrücke in der Regel eine leistungsfähigere und konsistentere Möglichkeit, URLs (und andere Strings) zu vergleichen.

#### Beispiele

```js
shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // gibt true zurück
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // gibt false zurück
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
  - : Einer der geordneten Wochentagszeichenketten: `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"`
- gmt
  - : Ist entweder die Zeichenkette "GMT" oder wird weggelassen.

Nur der erste Parameter ist zwingend erforderlich. Entweder der zweite, der dritte oder beide können weggelassen werden.

Wenn nur ein Parameter vorhanden ist, gibt die Funktion an dem Tag, den dieser Parameter darstellt, einen `true`-Wert zurück. Wenn die Zeichenkette "GMT" als zweiter Parameter angegeben ist, werden die Zeiten in GMT angenommen. Andernfalls werden sie in der lokalen Zeitzone angenommen.

Wenn sowohl **wd1** als auch **wd2** definiert sind, ist die Bedingung wahr, wenn der aktuelle Wochentag zwischen diesen beiden _sortierten_ Wochentagen liegt. Die Grenzen sind inklusive, _aber die Grenzen sind geordnet_. Wenn der "GMT"-Parameter angegeben ist, werden die Zeiten in GMT angenommen. Andernfalls wird die lokale Zeitzone verwendet.

> **Warnung:** _Die Reihenfolge der Tage ist wichtig_.
> Vor Firefox 49 wertet `weekdayRange("SUN", "SAT")` immer zu `true` aus.
> Jetzt wertet `weekdayRange("WED", "SUN")` nur zu `true` aus,
> wenn es sich um Mittwoch oder Sonntag handelt.

#### Beispiele

```js-nolint
weekdayRange("MON", "FRI") // gibt true von Montag bis Freitag (lokale Zeitzone) zurück
weekdayRange("MON", "FRI", "GMT") // gibt true von Montag bis Freitag (GMT-Zeitzone) zurück
weekdayRange("SAT") // gibt true an Samstagen in lokaler Zeit zurück
weekdayRange("SAT", "GMT") // gibt true an Samstagen in GMT-Zeit zurück
weekdayRange("FRI", "MON") // gibt nur am Freitag und Montag true zurück (beachten Sie, die Reihenfolge ist wichtig!)
```

### dateRange()

#### Syntax

```js-nolint
dateRange(<day> | <month> | <year>, [gmt])  // Ambiguität wird dadurch gelöst, dass Jahr im Vergleich zu Monatstagen größer ist
dateRange(<day1>, <day2>, [gmt])
dateRange(<month1>, <month2>, [gmt])
dateRange(<year1>, <year2>, [gmt])
dateRange(<day1>, <month1>, <day2>, <month2>, [gmt])
dateRange(<month1>, <year1>, <month2>, <year2>, [gmt])
dateRange(<day1>, <month1>, <year1>, <day2>, <month2>, <year2>, [gmt])
```

> [!NOTE]
> (Vor Firefox 49) muss day1 kleiner als day2, month1 kleiner als month2 und year1 kleiner als year2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

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
  - : Ist die geordnete vierstellige Jahreszahl. Zum Beispiel 2016 (**nicht** 16).
- gmt
  - : Entweder die Zeichenkette "GMT", wodurch der Zeitvergleich in GMT-Zeitzone erfolgt, oder wird weggelassen. Wird es nicht angegeben, werden die Zeiten in der lokalen Zeitzone angenommen.

Wenn nur ein Wert angegeben ist (aus jeder Kategorie: Tag, Monat, Jahr), gibt die Funktion nur an Tagen, die dieser Spezifikation entsprechen, einen true-Wert zurück. Sind beide Werte angegeben, ist das Ergebnis wahr zwischen diesen Zeiten, inklusive Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Tage, Monate und Jahre spielt eine Rolle**; Vor Firefox 49 wird `dateRange("JAN", "DEC")` immer als `true` ausgewertet. Jetzt wertet `dateRange("DEC", "JAN")` nur dann true aus, wenn der aktuelle Monat Dezember oder Januar ist.

#### Beispiele

```js-nolint
dateRange(1) // gibt true am ersten Tag jedes Monats, lokale Zeitzone
dateRange(1, "GMT") // gibt true am ersten Tag jedes Monats, GMT-Zeitzone
dateRange(1, 15) // gibt true in der ersten Hälfte jedes Monats
dateRange(24, "DEC");// gibt true am 24. Dezember jedes Jahr zurück
dateRange("JAN", "MAR"); // gibt true im ersten Quartal des Jahres zurück

dateRange(1, "JUN", 15, "AUG");
// gibt true vom 1. Juni bis zum 15. August, jedes Jahr
// (einschließlich 1. Juni und 15. August)

dateRange(1, "JUN", 1995, 15, "AUG", 1995);
// gibt true vom 1. Juni 1995 bis zum 15. August desselben Jahres zurück

dateRange("OCT", 1995, "MAR", 1996);
// gibt true von Oktober 1995 bis März 1996 zurück
// (einschließlich des gesamten Monats Oktober 1995 und März 1996)

dateRange(1995);
// gibt true während des gesamten Jahres 1995 zurück

dateRange(1995, 1997);
// gibt true vom Beginn des Jahres 1995 bis zum Ende des Jahres 1997 zurück
```

### timeRange()

#### Syntax

```js-nolint
// Der volle Bereich der Erweiterungen ist analog zu dateRange.
timeRange(<hour1>, <min1>, <sec1>, <hour2>, <min2>, <sec2>, [gmt])
```

> [!NOTE]
> (Vor Firefox 49) muss die Kategorie hour1, min1, sec1 kleiner als die Kategorie hour2, min2, sec2 sein, wenn Sie möchten, dass die Funktion diese Parameter als Bereich auswertet. Siehe die Warnung unten.

#### Parameter

- hour
  - : Ist die Stunde von 0 bis 23. (0 ist Mitternacht, 23 ist 11 Uhr abends.)
- min
  - : Minuten von 0 bis 59.
- sec
  - : Sekunden von 0 bis 59.
- gmt
  - : Entweder die Zeichenkette "GMT" für GMT-Zeitzone oder nicht angegeben, für die lokale Zeitzone.

Wenn nur ein Wert angegeben ist (aus jeder Kategorie: Stunde, Minute, Sekunde), gibt die Funktion nur zu Zeiten, die dieser Spezifikation entsprechen, einen true-Wert zurück. Sind beide Werte angegeben, ist das Ergebnis wahr zwischen diesen Zeiten, inklusive Grenzen, _aber die Grenzen sind geordnet_.

> **Warnung:** **Die Reihenfolge der Stunde, Minute, Sekunde spielt eine Rolle**; Vor Firefox 49 wird `timeRange(0, 23)` immer als true ausgewertet. Jetzt wertet `timeRange(23, 0)` nur dann true aus, wenn es derzeit 23:00 Uhr oder Mitternacht ist.

#### Beispiele

```js-nolint
timerange(12); // gibt true von Mittag bis 13 Uhr zurück
timerange(12, 13) // gibt true von Mittag bis 13 Uhr zurück
timerange(12, "GMT") // gibt true von Mittag bis 13 Uhr, in der GMT-Zeitzone zurück
timerange(9, 17) // gibt true von 9 Uhr morgens bis 17 Uhr zurück
timerange(8, 30, 17, 0) // gibt true von 8:30 Uhr bis 17:00 Uhr zurück
timerange(0, 0, 0, 0, 0, 30) // gibt true zwischen Mitternacht und 30 Sekunden nach Mitternacht zurück
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
alert(`${host} = ${dnsResolve(host)}`) // protokolliert den Hostnamen und seine IP-Adresse
alert("Error: shouldn't reach this clause.") // protokolliert eine einfache Nachricht
```

## Beispiel 1

### Proxy für alles außer lokalen Hosts verwenden

> [!NOTE]
> Da alle in der Folge aufgeführten Beispiele sehr spezifisch sind, wurden sie nicht getestet.

Alle Hosts, die nicht vollständig qualifiziert sind, oder die, die in der lokalen Domain sind, werden direkt verbunden. Alles andere wird über `w3proxy.mozilla.org:8080` geleitet. Wenn der Proxy ausfällt, werden Verbindungen automatisch direkt:

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

### Wie oben, aber Proxy für lokale Server verwenden, die außerhalb der Firewall liegen

Wenn es Hosts gibt (wie den Haupt-Webserver), die zur lokalen Domain gehören, aber außerhalb der Firewall liegen und nur über den Proxy-Server erreichbar sind, können diese Ausnahmen mit der `localHostOrDomainIs()`-Funktion bearbeitet werden:

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

Das obige Beispiel wird den Proxy für alles außer lokale Hosts in der mozilla.org-Domain verwenden, mit der weiteren Ausnahme, dass die Hosts `www.mozilla.org` und `merchant.mozilla.org` über den Proxy geleitet werden.

> [!NOTE]
> Die Reihenfolge der obigen Ausnahmen sorgt für Effizienz: `localHostOrDomainIs()`-Funktionen werden nur für URLs ausgeführt, die sich in der lokalen Domain befinden und nicht für jede URL. Achten Sie darauf, die Klammern um den _oder_-Ausdruck vor dem _und_-Ausdruck zu bemerken, um das oben genannte effiziente Verhalten zu erzielen.

## Beispiel 3

### Proxy nur verwenden, wenn Host nicht aufgelöst werden kann

Dieses Beispiel wird in einer Umgebung funktionieren, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und der Zweck ist, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Das obige erfordert das Konsultieren des DNS, jedes Mal; es kann intelligent mit anderen Regeln gruppiert werden, so dass der DNS nur konsultiert wird, wenn andere Regeln zu keinem Ergebnis führen:

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

### Entscheidungen basierend auf Subnetz

In diesem Beispiel werden alle Hosts in einem bestimmten Subnetz direkt verbunden, andere werden über den Proxy verbunden:

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Die Verwendung des DNS-Servers in der obigen Situation kann minimiert werden, indem zu Beginn redundante Regeln hinzugefügt werden:

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

Dieses Beispiel ist anspruchsvoller. Es gibt vier (4) Proxy-Server; einer von ihnen ist eine aktive Ersatzlösung für alle anderen, so dass, wenn einer der verbleibenden drei ausfällt, der vierte übernehmen wird. Darüber hinaus teilen sich die drei verbleibenden Proxy-Server die Last basierend auf URL-Mustern, was ihr Caching effektiver macht (es gibt nur eine Kopie eines Dokuments auf den drei Servern - im Gegensatz zu einer Kopie auf jedem von ihnen). Die Last wird wie folgt verteilt:

| Proxy | Zweck            |
| ----- | ---------------- |
| #1    | .com-Domain      |
| #2    | .edu-Domain      |
| #3    | alle anderen Domains |
| #4    | Hot-Stand-by     |

Alle lokalen Zugriffe sollen direkt erfolgen. Alle Proxy-Server laufen auf dem Port 8080 (sie müssen nicht, Sie können Ihren Port ändern, aber erinnern Sie sich, Ihre Konfigurationen auf beiden Seiten anzupassen). Beachten Sie, wie Strings mit dem **`+`**-Operator in JavaScript verkettet werden können.

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

Die meisten der Standard-JavaScript-Funktionalitäten können in der `FindProxyForURL()`-Funktion verwendet werden. Als Beispiel kann die {{jsxref("String.prototype.startsWith()", "startsWith()")}}-Funktion verwendet werden, um verschiedene Proxies basierend auf dem Protokoll festzulegen:

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
> Dasselbe kann unter Verwendung der zuvor beschriebenen [`shExpMatch()`](#shexpmatch)-Funktion erreicht werden.

Zum Beispiel:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> Die Autokonfigurationsdatei kann von einem CGI-Skript ausgegeben werden. Dies ist z.B. nützlich, wenn die Autokonfigurationsdatei basierend auf der IP-Adresse des Clients unterschiedlich agieren soll (die `REMOTE_ADDR`-Umgebungsvariable in CGI).
>
> Der Einsatz der Funktionen `isInNet()`, `isResolvable()` und `dnsResolve()` sollte sorgfältig überlegt werden, da sie das Konsultieren des DNS-Servers erfordern. Alle anderen Autokonfigurations-Funktionen sind bloße String-Vergleichsfunktionen, die keinen DNS-Server erfordern. Wenn ein Proxy verwendet wird, führt der Proxy seine DNS-Abfrage durch, was die Belastung des DNS-Servers verdoppeln würde. In den meisten Fällen sind diese Funktionen nicht notwendig, um das gewünschte Ergebnis zu erzielen.

## Geschichte und Implementierung

Proxy-Autokonfig wurde in den späten 1990er Jahren in Netscape Navigator 2.0 eingeführt, zur gleichen Zeit, als JavaScript eingeführt wurde. Die Open-Source-Veröffentlichung von Netscape führte schließlich zu Firefox selbst.

Die "ursprünglichste" Implementierung von PAC und ihren JavaScript-Bibliotheken ist daher `nsProxyAutoConfig.js`, die in frühen Versionen von Firefox zu finden ist. Diese Dienstprogramme sind in vielen anderen Open-Source-Systemen zu finden, einschließlich [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h). Firefox hat später die Datei in [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) als C++-Stringliteral integriert. Um sie in eine eigene Datei zu extrahieren, reicht es aus, das Stück in JavaScript mit einer `console.log`-Anweisung zu kopieren, um es auszugeben.

Microsoft hat im Allgemeinen seine eigene Implementierung gemacht. Es gab früher [einige Probleme mit ihren Bibliotheken](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), aber die meisten sind mittlerweile behoben. Sie haben [einige neue Funktionen mit "Ex" Suffixen](https://learn.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) um den Umgang mit Adressen definiert, um IPv6 zu unterstützen. Die Funktion wird von Chromium unterstützt, jedoch noch nicht von Firefox ([bugzilla #558253](https://bugzil.la/558253)).
