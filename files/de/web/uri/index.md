---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren.
URIs werden häufig als Ziele von [HTTP](/de/docs/Web/HTTP)-Anfragen verwendet. In diesem Fall stellt der URI einen Standort für eine physische Ressource dar, wie z. B. ein Dokument, ein Foto oder Binärdaten. Der häufigste Typ eines URI ist ein Uniform Resource Locator ({{Glossary("URL", "URL")}}), der als _Webadresse_ bekannt ist.

URIs können verwendet werden, um andere Verhaltensweisen auszulösen, als lediglich eine Ressource abzurufen, z. B. das Öffnen eines E-Mail-Clients, das Senden von Textnachrichten oder die Ausführung von JavaScript, wenn sie in anderen Kontexten wie dem [`href`](/de/docs/Web/HTML/Element/a#href) eines HTML-Links `<a>` verwendet werden.

## URLs und URNs

### URLs

Jede der folgenden URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihn anzuweisen, das zugehörige Dokument (die Ressource) zu laden:

```url
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Ein komplexeres Beispiel könnte folgendermaßen aussehen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URNs

Ein Uniform Resource Name (URN) ist ein URI, der eine Ressource in einem bestimmten Namensraum durch ihren Namen identifiziert.

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

Die beiden URNs entsprechen:

- dem Buch "1984" von George Orwell,
- der IETF-Spezifikation 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.

## Syntax von Uniform Resource Identifiers (URIs)

Wir werden die folgende URL in ihre Bestandteile zerlegen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### Scheme

![Protokoll](mdn-url-protocol@x2.png)

`http://` ist das [_Schema_](/de/docs/Web/URI/Reference/Schemes) der URL und gibt an, welches Protokoll der Browser verwenden muss. Normalerweise ist dies das HTTP-Protokoll oder seine sichere Version HTTPS. Das Web erfordert eines dieser beiden, aber Browser sind auch in der Lage, andere Protokolle wie `mailto:` (zum Öffnen eines Mail-Clients) oder `ftp:` (zum Handling eines Dateiübertrags) zu behandeln. Eine Liste der gebräuchlichsten Protokolle und Dokumentationen für einige davon finden Sie in der [Schemes-Referenz](/de/docs/Web/URI/Reference/Schemes).

Wenn Sie URLs in {{Glossary("HTML", "HTML")}}-Inhalten verwenden, sollten Sie im Allgemeinen nur einige wenige dieser URL-Schemas nutzen. Beim Verweisen auf Subressourcen — also Dateien, die als Teil eines größeren Dokuments geladen werden — sollten Sie ausschließlich die HTTP- und HTTPS-Schemas verwenden. Aus Sicherheitsgründen entfernen Browser zunehmend die Unterstützung für die Verwendung von FTP zum Laden von Subressourcen.

FTP ist immer noch auf oberster Ebene akzeptabel (z. B. direkt in die URL-Leiste des Browsers eingegeben oder als Ziel eines Links), obwohl einige Browser möglicherweise das Laden von FTP-Inhalten an eine andere Anwendung delegieren.

### Authority

Die URI [_Authority_](/de/docs/Web/URI/Reference/Authority) besteht aus Benutzerinformationen (optional und in der Regel nicht angegeben), dem Hostnamen und dem Port.

![Domainname](mdn-url-domain@x2.png)

`www.example.com` ist der _Hostname_ des URI, der angibt, welcher Webserver angefordert wird. Hier verwenden wir einen Domainnamen. Es ist auch möglich, direkt eine {{Glossary("IP_address", "IP-Adresse")}} zu verwenden, aber weil dies weniger praktisch ist, ist es selten, es sei denn, der Server hat keinen registrierten Domainnamen.

![Port](mdn-url-port@x2.png)

`:80` ist der _Port_ der URL, der das technische "Tor" angibt, über das auf die Ressourcen auf dem Webserver zugegriffen wird. Dieser wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um Zugriff zu gewähren. Andernfalls ist er obligatorisch.

### Path

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der _Pfad_ der URL, der den Speicherort der Ressource auf dem Webserver angibt. In den Anfangstagen des Webs war dies ein tatsächlicher Verzeichnispfad zu einem physischen Speicherort auf dem Webserver. Heutzutage abstrahieren Webserver dies in der Regel zu einem beliebigen Speicherort.

### Query

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` ist die _Query_ der URL, die zusätzliche Parameter bereitstellt, die dem Webserver übergeben werden. Die Parameter sind eine Liste von Schlüssel/Wert-Paaren, die durch das Symbol `?` eingeleitet und durch das Symbol `&` getrennt werden. Diese können verwendet werden, um zusätzliche Kontextinformationen über die angeforderte Ressource bereitzustellen. Jeder Ressourcenstandort kann eigene Regeln bezüglich der Parameter haben, und die einzige zuverlässige Möglichkeit, zu wissen, wie bestimmte Parameter behandelt werden, besteht darin, den Eigentümer des Servers zu fragen, z. B. durch Lesen seiner Dokumentation.

### Fragment

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist das [_Fragment_](/de/docs/Web/URI/Reference/Fragment) der URL, das einen Anker zu einem anderen Teil der Ressource selbst darstellt. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Ressource und gibt dem Browser die Anweisungen, den Inhalt an der "markierten" Stelle anzuzeigen. Bei einem HTML-Dokument scrollt der Browser beispielsweise an die Stelle, an der der Anker definiert ist; bei einem Video- oder Audiodokument versucht der Browser, zu dem Zeitpunkt zu gelangen, den der Anker darstellt. Es ist zu beachten, dass der Teil nach dem `#`, auch als Fragment-Identifikator bekannt, niemals zusammen mit der Anfrage an den Server gesendet wird.

Es gibt ein spezielles [Textfragment](/de/docs/Web/URI/Reference/Fragment/Text_fragments)-Feature, das es erlaubt, auf einen spezifischen Teil einer Webseite zu verlinken, der durch seinen Textinhalt definiert ist.

## Beispiele

```url
https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
