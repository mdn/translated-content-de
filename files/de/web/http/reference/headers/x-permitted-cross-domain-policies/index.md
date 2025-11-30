---
title: X-Permitted-Cross-Domain-Policies header
short-title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Reference/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der HTTP **`X-Permitted-Cross-Domain-Policies`** {{Glossary("response_header", "Antwort-Header")}} definiert eine Meta-Policy, die steuert, ob auf Ressourcen der Website cross-origin von einem Dokument zugegriffen werden kann, das in einem Webclient wie Adobe Acrobat oder Microsoft Silverlight ausgeführt wird.

Er kann in Fällen verwendet werden, in denen die Website eine Cross-Domain-Policy deklarieren muss, aber nicht in das Stammverzeichnis der Domain schreiben kann.

Die Verwendung dieses Headers ist weniger verbreitet, da Adobe Flash Player und Microsoft Silverlight veraltet sind.
Einige Sicherheitstest-Tools prüfen trotzdem noch das Vorhandensein eines `X-Permitted-Cross-Domain-Policies: none` Headers, da er das Risiko einer übermäßig permissiven Policy-Datei, die versehentlich oder durch böswillige Aktionen zu Ihrer Website hinzugefügt wurde, mindern kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Permitted-Cross-Domain-Policies: <permitted-cross-domain-policy>
```

## Direktiven

- `none`
  - : Keine Policy-Dateien sind irgendwo auf dem Zielserver erlaubt, auch nicht in einer Master-Policy-Datei.
- `master-only`
  - : Erlaubt den Cross-Domain-Zugriff auf die Master-Policy-Datei, die auf derselben Domain definiert ist.
- `by-content-type` (nur HTTP/HTTPS)
  - : Es sind nur Policy-Dateien erlaubt, die mit `Content-Type: text/x-cross-domain-policy` ausgeliefert werden.
- `by-ftp-filename` (nur FTP)
  - : Es sind nur Policy-Dateien erlaubt, deren Dateinamen `crossdomain.xml` sind (URLs, die mit `/crossdomain.xml` enden).
- `all`
  - : Alle Policy-Dateien auf dieser Zieldomain sind erlaubt.
- `none-this-response`
  - : Gibt an, dass das aktuelle Dokument trotz anderer Header oder seines Inhalts nicht als Policy-Datei verwendet werden sollte. Dieser Wert ist nur spezifisch für den HTTP-Header.

## Beschreibung

Webclients wie Adobe Acrobat oder Apache Flex können Webdokumente laden, die wiederum Ressourcen von derselben Website oder anderen Websites laden können. Der Zugriff ist standardmäßig auf gleichseitige Ressourcen beschränkt, aufgrund der [Same Origin Policy](/de/docs/Web/Security/Defenses/Same-origin_policy), aber Cross-Origin-Seiten können wählen, einige oder alle ihrer Ressourcen für Cross-Origin-Klienten verfügbar zu machen, indem spezielle Dateien verwendet werden, die als Cross-Domain-Policy-Dateien bezeichnet werden.

Eine "Master"-Cross-Domain-Policy-Datei kann als `crossdomain.xml` Datei im Stamm der Domain definiert sein, zum Beispiel: `http://example.com/crossdomain.xml`. Die Master-Datei definiert die _Meta-Policy_ für die gesamte Website unter Verwendung des `permitted-cross-domain-policies` Attributs des `<site-control>` Tags. Die Meta-Policy kontrolliert, ob Policies erlaubt sind, und die Bedingungen, unter denen andere "Sub"-Cross-Domain-Policy-Dateien verwendet werden können. Diese anderen Policy-Dateien könnten in bestimmten Verzeichnissen erstellt werden, um den Zugriff über die Dateien in ihrem gegebenen Verzeichnisbaum zu spezifizieren.

Zum Beispiel, dies ist die am wenigsten permissive Master-Policy-Definition, die keinen Zugriff erlaubt und die Verwendung anderer "Sub"-Policy-Dateien nicht erlaubt.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Der `X-Permitted-Cross-Domain-Policies` Header kann eine Meta-Policy für die HTTP-Antwort spezifizieren, in der er enthalten ist, oder eine Meta-Policy überschreiben, die in der Master-Cross-Domain-Policy-Datei definiert ist, falls vorhanden. Er nimmt dieselben Werte an wie das `permitted-cross-domain-policies` Attribut der Datei und zusätzlich `none-this-response`.

Am häufigsten wird er verwendet, um jeglichen Zugriff auf Ressourcen der Website zu verhindern, in Fällen, in denen der Entwickler keinen Zugang hat, um eine Master-Cross-Domain-Policy-Datei im Stamm der Site zu erstellen.

## Beispiele

### Verweigern von Cross-Domain-Policy-Dateien

Wenn Sie keine Anwendungsdaten in Clients wie Adobe Flash Player oder Adobe Acrobat (oder älteren Clients) laden müssen, sollte der Header wie folgt konfiguriert werden: `X-Permitted-Cross-Domain-Policies: none`:

```http
X-Permitted-Cross-Domain-Policies: none
```

## Spezifikationen

Dokumentiert in der [Adobe Cross Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Praktische Sicherheitsimplementierungsleitfäden](/de/docs/Web/Security/Practical_implementation_guides)
- [HTTP Observatory](/en-US/observatory/) Header-Test-Tool
- [Cross Domain Configuration](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) auf adobe.com
- [X-Permitted-Cross-Domain-Policies](https://github.com/OWASP/www-project-secure-headers/blob/master/tab_headers.md#x-permitted-cross-domain-policies) im OWASP Secure Headers Project
