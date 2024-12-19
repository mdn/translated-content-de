---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren. Sie werden häufig als Ziele von [HTTP](/de/docs/Web/HTTP)-Anfragen verwendet, wobei der URI einen Ort für eine physische Ressource darstellt, wie z.B. ein Dokument, ein Foto, Binärdaten usw. URIs können auch verwendet werden, um andere Aktionen auszulösen als das Abrufen einer Ressource, einschließlich des Öffnens eines E-Mail-Clients, des Sendens von Textnachrichten oder der Ausführung von JavaScript, wenn sie an anderen Stellen wie dem [`href`](/de/docs/Web/HTML/Element/a#href) eines HTML-`<a>`-Links verwendet werden.

## URLs und URNs

### URLs

Die gebräuchlichste Form von URI ist der Uniform Resource Locator ({{Glossary("URL", "URL")}}), der als _Webadresse_ bekannt ist.

```url
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihn anzuweisen, die zugehörige Seite (Ressource) zu laden.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Ein komplexeres Beispiel könnte so aussehen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URNs

Ein Uniform Resource Name (URN) ist ein URI, der eine Ressource durch ihren Namen in einem bestimmten Namensraum identifiziert.

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

Die beiden URNs beziehen sich auf

- das Buch Neunzehnhundertvierundachtzig von George Orwell,
- die IETF-Spezifikation 7230, Hypertext Transfer Protocol (HTTP/1.1): Nachrichtensyntax und Routenführung.

## Syntax von Uniform Resource Identifiers (URIs)

Wir werden die folgende URL in ihre Komponenten zerlegen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### Schema

![Protokoll](mdn-url-protocol@x2.png)

`http://` ist das [_Schema_](/de/docs/Web/URI/Schemes) der URL, das angibt, welches Protokoll der Browser verwenden muss. Normalerweise ist es das HTTP-Protokoll oder seine gesicherte Version, HTTPS. Das Web erfordert eines dieser beiden, aber Browser können auch mit anderen Protokollen wie `mailto:` (um einen E-Mail-Client zu öffnen) oder `ftp:` umgehen, um einen Dateitransfer durchzuführen. Seien Sie daher nicht überrascht, wenn Sie solche Protokolle sehen. Die [Schemes](/de/docs/Web/URI/Schemes)-Referenz bietet eine Liste der gebräuchlichsten Schemas und Dokumentation für einige von ihnen.

Wenn Sie URLs in {{Glossary("HTML", "HTML")}}-Inhalten verwenden, sollten Sie im Allgemeinen nur einige dieser URL-Schemata verwenden. Wenn Sie sich auf Subressourcen beziehen – also Dateien, die als Teil eines größeren Dokuments geladen werden – sollten Sie nur die HTTP- und HTTPS-Schemata verwenden. Zunehmend entfernen Browser die Unterstützung für die Verwendung von FTP zum Laden von Subressourcen aus Sicherheitsgründen.

FTP ist immer noch auf oberster Ebene akzeptabel (z.B. direkt in die URL-Leiste des Browsers eingegeben oder das Ziel eines Links), obwohl einige Browser das Laden von FTP-Inhalten an eine andere Anwendung delegieren könnten.

### Authority

Die URI-[_Authority_](/de/docs/Web/URI/Authority) besteht aus Benutzerinformationen (optional und meistens nicht angegeben), dem Hostnamen und dem Port.

![Domain Name](mdn-url-domain@x2.png)

`www.example.com` ist der _Host Name_ des URI, der angibt, welcher Webserver angefordert wird. Hier verwenden wir einen Domainnamen. Es ist auch möglich, eine {{Glossary("IP_address", "IP-Adresse")}} direkt zu verwenden, aber da dies weniger bequem ist, ist es selten, es sei denn, der Server hat keinen registrierten Domainnamen.

![Port](mdn-url-port@x2.png)

`:80` ist der _Port_ der URL, der das technische "Tor" angibt, das verwendet wird, um auf die Ressourcen auf dem Webserver zuzugreifen. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls verwendet (80 für HTTP und 443 für HTTPS), um den Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist er obligatorisch.

### Pfad

![Path to the file](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der _Pfad_ der URL und gibt den Standort der Ressource auf dem Webserver an. In den frühen Tagen des Webs war dies ein tatsächlicher Verzeichnispfad zu einem physischen Standort auf dem Webserver. Heutzutage abstrahieren Webserver dies meist zu einem beliebigen Ort.

### Anfrage

![Parameters](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` ist die _Anfrage_ der URL, welche zusätzliche Parameter bereitstellt, die an den Webserver übermittelt werden. Die Parameter sind eine Liste von Schlüssel/Werte-Paaren, die durch das `?`-Symbol vorangestellt und mit dem `&`-Symbol getrennt sind. Diese können verwendet werden, um zusätzliche Kontextinformationen über die angeforderte Ressource bereitzustellen. Jede Ressourcenlokation kann ihre eigenen Regeln bezüglich der Parameter haben, und der einzige zuverlässige Weg, um herauszufinden, wie spezifische Parameter behandelt werden, besteht darin, den Besitzer des Servers zu konsultieren, z.B. durch Lesen seiner Dokumentation.

### Fragment

![Anchor](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist das [_Fragment_](/de/docs/Web/URI/Fragment) der URL, das einen Anker zu einem anderen Teil der Ressource selbst darstellt. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser Anweisungen, den Inhalt an der "markierten" Stelle zu zeigen. Bei einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist; bei einem Video- oder Audiodokument versucht der Browser zu dem Zeitpunkt zu gehen, den der Anker darstellt. Es ist erwähnenswert, dass der Teil nach dem `#`, auch als Fragmentbezeichner bekannt, niemals mit der Anfrage an den Server gesendet wird.

Es gibt eine spezielle [Text-Fragment](/de/docs/Web/URI/Fragment/Text_fragments)-Funktion, die es ermöglicht, auf einen bestimmten Teil einer Webseite zu verlinken, der durch seinen Textinhalt identifiziert wird.

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
