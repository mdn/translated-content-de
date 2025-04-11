---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren. URIs werden häufig als Ziele von [HTTP](/de/docs/Web/HTTP)-Anfragen verwendet, wobei der URI einen Ort für eine physische Ressource wie ein Dokument, ein Foto oder Binärdaten darstellt. Der gebräuchlichste URI-Typ ist ein Uniform Resource Locator ({{Glossary("URL", "URL")}}), der als _Webadresse_ bekannt ist.

URIs können verwendet werden, um andere Verhaltensweisen als das Abrufen einer Ressource auszulösen, einschließlich des Öffnens eines E-Mail-Clients, des Sendens von Textnachrichten oder der Ausführung von JavaScript, wenn sie an anderen Stellen wie im [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) eines HTML-`<a>`-Links verwendet werden.

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

Ein Uniform Resource Name (URN) ist ein URI, der eine Ressource anhand eines Namens in einem bestimmten Namensraum identifiziert.

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

Die beiden URNs entsprechen

- dem Buch Nineteen Eighty-Four von George Orwell,
- der IETF-Spezifikation 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.

## Syntax der Uniform Resource Identifiers (URIs)

Wir werden die folgende URL in ihre Bestandteile zerlegen:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### Scheme

![Protokoll](mdn-url-protocol@x2.png)

`http://` ist das [_scheme_](/de/docs/Web/URI/Reference/Schemes) der URL, das angibt, welches Protokoll der Browser verwenden muss. Üblicherweise ist es das HTTP-Protokoll oder seine gesicherte Version HTTPS. Das Web erfordert eines dieser beiden, aber Browser wissen auch, wie sie andere Protokolle wie `mailto:` (um einen Mail-Client zu öffnen) oder `ftp:` (um einen Dateitransfer zu bearbeiten) handhaben. Seien Sie also nicht überrascht, wenn Sie solche Protokolle sehen. Die [Schemes](/de/docs/Web/URI/Reference/Schemes)-Referenz bietet eine Liste der gängigsten Schemes und eine Dokumentation für einige davon.

Bei der Verwendung von URLs in {{Glossary("HTML", "HTML")}}-Inhalten sollten Sie im Allgemeinen nur einige wenige dieser URL-Schemes verwenden. Bei der Verweisung auf Subressourcen — also Dateien, die als Teil eines größeren Dokuments geladen werden — sollten Sie nur die HTTP- und HTTPS-Schemes verwenden. Immer häufiger entfernen Browser die Unterstützung für die Verwendung von FTP zum Laden von Subressourcen aus Sicherheitsgründen.

FTP ist auf der obersten Ebene (wie direkt in die URL-Leiste des Browsers eingegeben oder als Ziel eines Links) immer noch akzeptabel, obwohl einige Browser das Laden von FTP-Inhalten an eine andere Anwendung delegieren könnten.

### Authority

Die URI-[_authority_](/de/docs/Web/URI/Reference/Authority) besteht aus Benutzerinformationen (optional und normalerweise nicht spezifiziert), dem Hostnamen und dem Port.

![Domainname](mdn-url-domain@x2.png)

`www.example.com` ist der _Host-Name_ des URI, der angibt, welcher Webserver angefragt wird. Hier verwenden wir einen Domainnamen. Es ist auch möglich, direkt eine {{Glossary("IP_address", "IP-Adresse")}} zu verwenden, aber da dies weniger bequem ist, ist es selten, dies zu tun, es sei denn, der Server hat keinen registrierten Domainnamen.

![Port](mdn-url-port@x2.png)

`:80` ist der _Port_ der URL, der das technische "Tor" bezeichnet, das verwendet wird, um auf die Ressourcen auf dem Webserver zuzugreifen. Es wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um den Zugang zu seinen Ressourcen zu gewähren. Andernfalls ist es zwingend erforderlich.

### Path

![Pfad zur Datei](mdn-url-path@x2.png)

`/path/to/myfile.html` ist der _Pfad_ der URL, der den Speicherort der Ressource auf dem Webserver angibt. In den frühen Tagen des Webs war dies ein tatsächlicher Verzeichnispfad zu einem physischen Ort auf dem Webserver. Heutzutage abstrahieren Webserver dies normalerweise zu einem beliebigen Ort.

### Query

![Parameter](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` ist die _Query_ der URL, welche zusätzliche Parameter sind, die dem Webserver bereitgestellt werden. Die Parameter sind eine Liste von Schlüssel/Wert-Paaren, die durch das `?`-Symbol vorangestellt und durch das `&`-Symbol getrennt sind. Diese können verwendet werden, um zusätzlichen Kontext über die angeforderte Ressource bereitzustellen. Jeder Ressourcenort kann seine eigenen Regeln in Bezug auf Parameter haben, und der einzige zuverlässige Weg, um zu wissen, wie spezifische Parameter behandelt werden, besteht darin, den Besitzer des Servers zu fragen, z.B. durch Lesen der Dokumentation.

### Fragment

![Anker](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` ist das [_Fragment_](/de/docs/Web/URI/Reference/Fragment) der URL, das einen Anker zu einem anderen Teil der Ressource selbst darstellt. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Ressource und gibt dem Browser die Anweisungen, den Inhalt an der "markierten" Stelle zu zeigen. In einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist; in einem Video- oder Audio-Dokument versucht der Browser, zu der vom Anker repräsentierten Zeit zu gelangen. Es ist erwähnenswert, dass der Teil nach dem #, auch bekannt als Fragment-Identifier, niemals mit der Anfrage an den Server gesendet wird.

Es gibt ein spezielles [Textfragment](/de/docs/Web/URI/Reference/Fragment/Text_fragments), das es ermöglicht, auf einen bestimmten Teil einer Webseite zu verlinken, der durch seinen Textinhalt identifiziert wird.

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
