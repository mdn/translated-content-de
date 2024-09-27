---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren. Sie werden häufig als Ziele von [HTTP](/de/docs/Web/HTTP)-Anfragen genutzt, wobei der URI einen Ort für eine physische Ressource wie ein Dokument, ein Foto, Binärdaten usw. darstellt. URIs können auch verwendet werden, um Verhaltensweisen auszulösen, die nicht das Abrufen einer Ressource betreffen, etwa das Öffnen des E-Mail-Clients, das Senden von Textnachrichten oder das Ausführen von JavaScript, wenn sie an anderen Stellen wie dem [`href`](/de/docs/Web/HTML/Element/a#href) eines HTML-`<a>`-Links verwendet werden.

## URLs und URNs

### URLs

Die gebräuchlichste Form von URI ist der Uniform Resource Locator ([URL](/de/docs/Glossary/URL)), der als _Webadresse_ bekannt ist.

```url
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um ihm zu sagen, dass er die zugehörige Seite (Ressource) laden soll.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Ein komplexeres Beispiel könnte so aussehen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URNs

Ein Uniform Resource Name (URN) ist ein URI, der eine Ressource durch einen Namen in einem bestimmten Namensraum identifiziert.

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

Die beiden URNs entsprechen

- dem Buch "Nineteen Eighty-Four" von George Orwell,
- der IETF-Spezifikation 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.

## Syntax von Uniform Resource Identifiers (URIs)

Wir werden die folgende URL in ihre Komponenten aufteilen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### Schema

![Protokoll](mdn-url-protocol@x2.png)

`http://` ist das [_schema_](/de/docs/Web/URI/Schemes) der URL, das angibt, welches Protokoll der Browser verwenden muss. Normalerweise ist dies das HTTP-Protokoll oder seine sichere Version HTTPS. Das Web erfordert eines dieser beiden, aber Browser wissen auch, wie sie mit anderen Protokollen umgehen können, wie `mailto:` (zum Öffnen eines E-Mail-Clients) oder `ftp:` zur Abwicklung eines Dateitransfers; daher seien Sie nicht überrascht, wenn Sie solche Protokolle sehen. Die [schemes](/de/docs/Web/URI/Schemes)-Referenz bietet eine Liste der gebräuchlichsten Schemas und Dokumentation für einige von ihnen.

Wenn Sie URLs in [HTML](/de/docs/Glossary/HTML)-Inhalten verwenden, sollten Sie im Allgemeinen nur wenige dieser URL-Schemen verwenden. Beim Verweisen auf Subressourcen — also Dateien, die als Teil eines größeren Dokuments geladen werden — sollten Sie nur die HTTP- und HTTPS-Schemas verwenden. Zunehmend entfernen Browser die Unterstützung für die Verwendung von FTP zum Laden von Subressourcen, aus Sicherheitsgründen.

FTP ist auf der obersten Ebene (z.B. direkt in die URL-Leiste des Browsers eingegeben oder das Ziel eines Links) noch akzeptabel, obwohl einige Browser das Laden von FTP-Inhalten an eine andere Anwendung delegieren können.

### Autorität

Die URI-[_authorität_](/de/docs/Web/URI/Authority) besteht aus Benutzerinformationen (optional und normalerweise nicht angegeben), dem Hostnamen und dem Port.

![Domain Name](mdn-url-domain@x2.png)

`www.example.com` ist der _Host-Name_ des URI, der angibt, welcher Webserver angefragt wird. Hier verwenden wir einen Domainnamen. Es ist auch möglich, direkt eine [IP-Adresse](/de/docs/Glossary/IP_address) zu verwenden, aber da dies weniger praktisch ist, ist es selten, es sei denn, der Server hat keinen registrierten Domainnamen.

![Port](mdn-url-port@x2.png)

`:80` ist der _Port_ der URL und gibt das technische "Tor" an, über das auf die Ressourcen des Webservers zugegriffen wird. Es wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um den Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist es obligatorisch.

### Pfad

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der _Pfad_ der URL, der den Speicherort der Ressource auf dem Webserver angibt. In den frühen Tagen des Webs war dies ein tatsächlicher Verzeichnispfad zu einem physischen Speicherort auf dem Webserver. Heutzutage abstrahieren Webserver dies normalerweise zu einem arbiträren Speicherort.

### Abfrage

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` ist die _Abfrage_ der URL, die zusätzliche Parameter bereitstellt, die dem Webserver übergeben werden. Die Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `?`-Symbol vorangestellt und mit dem `&`-Symbol getrennt werden. Diese können verwendet werden, um zusätzlichen Kontext zu der angeforderten Ressource bereitzustellen. Jeder Speicherort kann seine eigenen Regeln bezüglich der Parameter haben, und der einzige zuverlässige Weg, um zu wissen, wie bestimmte Parameter behandelt werden, besteht darin, den Inhaber des Servers, wie das Lesen seiner Dokumentation, zu fragen.

### Fragment

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist das [_fragment_](/de/docs/Web/URI/Fragment) der URL, das ein Anker zu einem anderen Teil der Ressource selbst ist. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser die Anweisungen, den Inhalt an der Stelle des "Lesezeichens" anzuzeigen. In einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist; in einem Video- oder Audiodokument versucht der Browser zur Zeit zu gehen, die der Anker repräsentiert. Es ist wichtig zu beachten, dass der Teil nach dem #, auch als Fragmentbezeichner bekannt, niemals mit der Anfrage an den Server gesendet wird.

Es gibt ein spezielles [Textfragment](/de/docs/Web/URI/Fragment/Text_fragments)-Feature, das es ermöglicht, auf einen bestimmten Teil einer Webseite zu verlinken, der durch seinen Textinhalt identifiziert wird.

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
