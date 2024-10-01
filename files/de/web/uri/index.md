---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren. Sie werden häufig als Ziel von [HTTP](/de/docs/Web/HTTP)-Anfragen genutzt, wobei der URI einen Ort für eine physische Ressource wie ein Dokument, ein Foto, binäre Daten usw. darstellt. URIs können auch verwendet werden, um Verhaltensweisen zu triggern, die nicht das Abrufen einer Ressource beinhalten, wie z.B. das Öffnen des E-Mail-Clients, das Versenden von Textnachrichten oder das Ausführen von JavaScript, wenn sie an anderen Stellen wie im [`href`](/de/docs/Web/HTML/Element/a#href) eines HTML-`<a>`-Links verwendet werden.

## URLs und URNs

### URLs

Die gebräuchlichste Form eines URI ist der Uniform Resource Locator ({{Glossary("URL", "URL")}}), der als _Webadresse_ bekannt ist.

```url
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um die zugehörige Seite (Ressource) zu laden.

Eine URL setzt sich aus verschiedenen Teilen zusammen, von denen einige obligatorisch und andere optional sind. Ein komplexeres Beispiel könnte so aussehen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URNs

Ein Uniform Resource Name (URN) ist ein URI, der eine Ressource mit einem Namen in einem bestimmten Namensraum identifiziert.

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

Die beiden URNs entsprechen

- dem Buch "1984" von George Orwell,
- der IETF-Spezifikation 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.

## Syntax von Uniform Resource Identifiers (URIs)

Wir werden die folgende URL in ihre Komponenten zerlegen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### Schema

![Protokoll](mdn-url-protocol@x2.png)

`http://` ist das [_Schema_](/de/docs/Web/URI/Schemes) der URL und gibt an, welches Protokoll der Browser verwenden muss. Meistens handelt es sich um das HTTP-Protokoll oder seine gesicherte Version HTTPS. Das Web erfordert eines dieser beiden, aber Browser können auch andere Protokolle wie `mailto:` (zum Öffnen eines Mailclients) oder `ftp:` zum Behandeln eines Dateitransfers verarbeiten, daher sollten Sie nicht überrascht sein, solche Protokolle zu sehen. Die [Schema-Referenz](/de/docs/Web/URI/Schemes) bietet eine Liste der gebräuchlichsten Schemata und Dokumentationen zu einigen davon.

Bei der Verwendung von URLs in {{Glossary("HTML", "HTML")}}-Inhalten sollten Sie im Allgemeinen nur einige wenige dieser URL-Schemata verwenden. Bei der Referenzierung von Subressourcen – also Dateien, die als Teil eines größeren Dokuments geladen werden – sollten Sie nur die HTTP- und HTTPS-Schemata nutzen. Zunehmend entfernen Browser die Unterstützung für die Verwendung von FTP zum Laden von Subressourcen aus Sicherheitsgründen.

FTP ist noch auf oberster Ebene akzeptabel (z.B. direkt in die URL-Leiste des Browsers eingegeben oder als Ziel eines Links), obwohl einige Browser das Laden von FTP-Inhalten an eine andere Anwendung delegieren können.

### Autorität

Die URI-_Autorität_ ([Authority](/de/docs/Web/URI/Authority)) besteht aus Benutzerinformationen (optional und normalerweise nicht angegeben), dem Hostnamen und dem Port.

![Domain-Name](mdn-url-domain@x2.png)

`www.example.com` ist der _Hostname_ der URI und gibt an, welcher Webserver angefordert wird. Hier verwenden wir einen Domainnamen. Es ist auch möglich, direkt eine {{Glossary("IP_address", "IP-Adresse")}} zu verwenden, aber da dies weniger bequem ist, wird es selten gemacht, es sei denn, der Server hat keinen registrierten Domainnamen.

![Port](mdn-url-port@x2.png)

`:80` ist der _Port_ der URL und gibt das technische „Tor“ an, das zum Zugriff auf die Ressourcen auf dem Webserver verwendet wird. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) zum Zugriff auf seine Ressourcen nutzt. Andernfalls ist er obligatorisch.

### Pfad

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der _Pfad_ der URL, der den Ort der Ressource auf dem Webserver angibt. In den frühen Tagen des Webs war dies ein tatsächlicher Verzeichnispfad zu einem physischen Ort auf dem Webserver. Heutzutage abstrahieren Webserver diesen Pfad in der Regel zu einem beliebigen Ort.

### Abfrage

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` ist die _Abfrage_ der URL, die zusätzliche Parameter bereitstellt, die dem Webserver übergeben werden. Die Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `?`-Symbol vorangestellt und mit dem `&`-Symbol getrennt sind. Diese können verwendet werden, um zusätzlichen Kontext über die angeforderte Ressource bereitzustellen. Jede Ressourcenadresse kann ihre eigenen Regeln hinsichtlich der Parameter haben, und der einzige verlässliche Weg zu wissen, wie bestimmte Parameter behandelt werden, ist, den Eigentümer des Servers zu fragen, z.B. durch Lesen seiner Dokumentation.

### Fragment

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist das [_Fragment_](/de/docs/Web/URI/Fragment) der URL, das einen Anker zu einem anderen Teil der Ressource selbst darstellt. Ein Anker stellt eine Art „Lesezeichen“ innerhalb der Ressource dar und gibt dem Browser die Anweisung, den Inhalt an der „markierten“ Stelle anzuzeigen. In einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist. In einem Video- oder Audiodokument versucht der Browser, an die Zeit zu gehen, die der Anker darstellt. Es ist erwähnenswert, dass der Teil nach dem #, auch als Fragmentbezeichner bekannt, nie zusammen mit der Anfrage an den Server gesendet wird.

Es gibt eine spezielle [Textfragment](/de/docs/Web/URI/Fragment/Text_fragments)-Funktion, die es ermöglicht, zu einem bestimmten Teil einer Webseite zu verlinken, der durch seinen Textinhalt identifiziert wird.

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

- [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
