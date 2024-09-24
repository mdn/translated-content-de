---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren. Sie werden häufig als Ziele von [HTTP](/de/docs/Web/HTTP)-Anfragen verwendet, wobei die URI einen Ort für eine physische Ressource darstellt, wie ein Dokument, ein Foto, Binärdaten usw. URIs können auch verwendet werden, um Verhaltensweisen auszulösen, die nicht mit dem Abrufen einer Ressource zusammenhängen, wie das Öffnen des E-Mail-Clients, das Versenden von Textnachrichten oder das Ausführen von JavaScript, wenn sie an anderen Stellen verwendet werden, wie z.B. im [`href`](/de/docs/Web/HTML/Element/a#href) eines HTML-`<a>`-Links.

## URLs und URNs

### URLs

Die gebräuchlichste Form von URI ist der Uniform Resource Locator ({{Glossary("URL")}}), der als _Webadresse_ bekannt ist.

```url
https://developer.mozilla.org
https://developer.mozilla.org/de/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

Jede dieser URLs kann in die Adressleiste Ihres Browsers eingegeben werden, um dem Browser mitzuteilen, dass die zugehörige Seite (Ressource) geladen werden soll.

Eine URL besteht aus verschiedenen Teilen, von denen einige obligatorisch und andere optional sind. Ein komplexeres Beispiel könnte so aussehen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URNs

Ein Uniform Resource Name (URN) ist eine URI, die eine Ressource durch ihren Namen in einem bestimmten Namensraum identifiziert.

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

Die beiden URNs entsprechen:

- dem Buch Neunzehnhundertvierundachtzig von George Orwell,
- der IETF-Spezifikation 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.

## Syntax von Uniform Resource Identifiers (URIs)

Wir werden die folgende URL in ihre Bestandteile zerlegen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### Scheme

![Protokoll](mdn-url-protocol@x2.png)

`http://` ist das [_Scheme_](/de/docs/Web/URI/Schemes) der URL, das angibt, welches Protokoll der Browser verwenden muss. Üblicherweise ist es das HTTP-Protokoll oder seine gesicherte Version HTTPS. Das Web erfordert eines dieser beiden, aber Browser können auch mit anderen Protokollen umgehen, wie `mailto:` (um einen Mail-Client zu öffnen) oder `ftp:`, um einen Dateitransfer zu bearbeiten. Die Referenz [Schemes](/de/docs/Web/URI/Schemes) bietet eine Liste der gebräuchlichsten Schemes und deren Dokumentation.

Wenn Sie URLs in {{Glossary("HTML")}}-Inhalten verwenden, sollten Sie im Allgemeinen nur einige dieser URL-Schemes verwenden. Bei Verweis auf Subressourcen — also Dateien, die als Teil eines größeren Dokuments geladen werden — sollten Sie nur die HTTP- und HTTPS-Schemes verwenden. Immer mehr Browser entfernen die Unterstützung für die Verwendung von FTP zum Laden von Subressourcen aus Sicherheitsgründen.

FTP ist auf oberster Ebene noch akzeptabel (wie direkt in die URL-Leiste des Browsers eingegeben oder das Ziel eines Links), obwohl einige Browser das Laden von FTP-Inhalten an eine andere Anwendung delegieren könnten.

### Authority

Die URI [_authority_](/de/docs/Web/URI/Authority) besteht aus Benutzerinformationen (optional und normalerweise nicht angegeben), dem Hostnamen und dem Port.

![Domain Name](mdn-url-domain@x2.png)

`www.example.com` ist der _Host-Name_ der URI, der angibt, welcher Webserver angefragt wird. Hier verwenden wir einen Domainnamen. Es ist auch möglich, direkt eine {{Glossary("IP address")}} zu verwenden, aber weil dies weniger praktisch ist, ist es selten, es sei denn, der Server hat keinen registrierten Domainnamen.

![Port](mdn-url-port@x2.png)

`:80` ist der _Port_ der URL, der das technische "Tor" angibt, das verwendet wird, um auf die Ressourcen des Webservers zuzugreifen. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um auf seine Ressourcen zuzugreifen. Andernfalls ist er zwingend erforderlich.

### Path

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der _Pfad_ der URL, der den Ort der Ressource auf dem Webserver angibt. In den frühen Tagen des Webs war dies ein tatsächlicher Verzeichnispfad zu einem physischen Ort auf dem Webserver. Heutzutage abstrahieren Webserver dies normalerweise zu einem willkürlichen Ort.

### Query

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` ist die _Query_ der URL, bei der es sich um zusätzliche Parameter handelt, die dem Webserver bereitgestellt werden. Die Parameter sind eine Liste von Schlüssel/Wert-Paaren, die mit dem `?`-Symbol vorangestellt und mit dem `&`-Symbol getrennt sind. Diese können verwendet werden, um zusätzlichen Kontext über die angeforderte Ressource zu bieten. Jeder Ressourcenstandort kann seine eigenen Regeln bezüglich der Parameter haben, und der einzige verlässliche Weg, um zu wissen, wie bestimmte Parameter behandelt werden, besteht darin, den Eigentümer des Servers zu fragen, z. B. durch Lesen seiner Dokumentation.

### Fragment

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist das [_Fragment_](/de/docs/Web/URI/Fragment) der URL, das einen Anker für einen anderen Teil der Ressource selbst darstellt. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser die Anweisung, den Inhalt an der "markierten" Stelle anzuzeigen. In einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist; in einem Video- oder Audiodokument versucht der Browser, zur Zeit zu gehen, die das Anker darstellt. Es ist wichtig zu beachten, dass der Teil nach dem #, auch als Fragmentbezeichner bekannt, niemals mit der Anfrage an den Server gesendet wird.

Es gibt ein spezielles [Textfragment](/de/docs/Web/URI/Fragment/Text_fragments)-Feature, das es Ihnen ermöglicht, auf einen spezifischen Teil einer Webseite zu verlinken, der durch seinen Textinhalt identifiziert wird.

## Beispiele

```url
https://developer.mozilla.org/de/docs/Learn
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
