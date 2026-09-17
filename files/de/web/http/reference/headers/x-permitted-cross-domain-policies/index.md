---
title: X-Permitted-Cross-Domain-Policies header
short-title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Reference/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Der HTTP-**`X-Permitted-Cross-Domain-Policies`**-{{Glossary("response_header", "Response-Header")}} definiert eine Meta-Richtlinie, die steuert, ob Website-Ressourcen von einem Dokument, das in einem Webclient wie Adobe Acrobat oder Microsoft Silverlight ausgeführt wird, ursprungsübergreifend abgerufen werden können.

Er kann in Fällen verwendet werden, in denen die Website eine Cross-Domain-Richtlinie deklarieren muss, aber nicht in das Stammverzeichnis der Domain schreiben kann.

Die Verwendung dieses Headers ist weniger verbreitet, seit Adobe Flash Player und Microsoft Silverlight als veraltet eingestuft wurden.
Einige Sicherheitstesttools prüfen weiterhin auf das Vorhandensein eines `X-Permitted-Cross-Domain-Policies: none`-Headers, da er das Risiko einer übermäßig freizügigen Richtliniendatei mindern kann, die versehentlich oder durch böswillige Handlungen zu Ihrer Website hinzugefügt wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Permitted-Cross-Domain-Policies: <permitted-cross-domain-policy>
```

## Direktiven

- `none`
  - : Es sind keine Richtliniendateien irgendwo auf dem Zielserver erlaubt, einschließlich in einer Master-Richtliniendatei.
- `master-only`
  - : Ermöglicht ursprungsübergreifenden Zugriff auf die Master-Richtliniendatei, die auf derselben Domain definiert ist.
- `by-content-type` (nur HTTP/HTTPS)
  - : Nur Richtliniendateien, die mit `Content-Type: text/x-cross-domain-policy` bereitgestellt werden, sind erlaubt.
- `by-ftp-filename` (nur FTP)
  - : Nur Richtliniendateien, deren Dateinamen `crossdomain.xml` sind (URLs, die auf `/crossdomain.xml` enden), sind erlaubt.
- `all`
  - : Alle Richtliniendateien auf dieser Ziel-Domain sind erlaubt.
- `none-this-response`
  - : Gibt an, dass das aktuelle Dokument trotz anderer Header oder seines Inhalts nicht als Richtliniendatei verwendet werden soll.
    Dieser Wert ist ausschließlich für den HTTP-Header verfügbar.

## Beschreibung

Webclients wie Adobe Acrobat oder Apache Flex können Webdokumente laden, die ihrerseits Ressourcen von derselben Website oder von anderen Websites laden können.
Der Zugriff ist aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) standardmäßig auf Ressourcen derselben Website beschränkt, aber ursprungsübergreifende Websites können entscheiden, einige oder alle ihrer Ressourcen mithilfe spezieller Dateien, die als Cross-Domain-Richtliniendateien bezeichnet werden, für Clients ursprungsübergreifend verfügbar zu machen.

Eine „Master“-Cross-Domain-Richtliniendatei kann als `crossdomain.xml`-Datei im Stammverzeichnis der Domain definiert werden, zum Beispiel: `http://example.com/crossdomain.xml`.
Die Master-Datei definiert die _Meta-Richtlinie_ für die gesamte Website mithilfe des Attributs `permitted-cross-domain-policies` des Tags `<site-control>`.
Die Meta-Richtlinie steuert, ob Richtlinien zulässig sind, sowie die Bedingungen, unter denen die anderen „Unter“-Cross-Domain-Richtliniendateien verwendet werden können.
Diese anderen Richtliniendateien können in bestimmten Verzeichnissen erstellt werden, um den Zugriff auf die Dateien in ihrem jeweiligen Verzeichnisbaum festzulegen.

Dies ist beispielsweise die am wenigsten freizügige Master-Richtliniendefinition, die keinen Zugriff erlaubt und die Verwendung anderer „Unter“-Richtliniendateien nicht zulässt.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Der `X-Permitted-Cross-Domain-Policies`-Header kann eine Meta-Richtlinie für die HTTP-Antwort angeben, in der er enthalten ist, oder eine Meta-Richtlinie überschreiben, die gegebenenfalls in der Master-Cross-Domain-Richtliniendatei definiert ist.
Er akzeptiert dieselben Werte wie das Attribut `permitted-cross-domain-policies` der Datei sowie zusätzlich `none-this-response`.

Am häufigsten wird er verwendet, um jeglichen Zugriff auf Website-Ressourcen zu verhindern, wenn der Entwickler keinen Zugriff darauf hat, eine Master-Cross-Domain-Richtliniendatei im Stammverzeichnis der Website zu erstellen.

## Beispiele

### Cross-Domain-Richtliniendateien verbieten

Wenn Sie keine Anwendungsdaten in Clients wie Adobe Flash Player oder Adobe Acrobat (oder älteren Clients) laden müssen, sollte der Header als `X-Permitted-Cross-Domain-Policies: none` konfiguriert werden:

```http
X-Permitted-Cross-Domain-Policies: none
```

## Spezifikationen

Dokumentiert in der [Adobe Cross Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Leitfäden zur praktischen Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides)
- Testtool für den [HTTP Observatory](/en-US/observatory/)-Header
- [Cross Domain Configuration](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) auf adobe.com
- [X-Permitted-Cross-Domain-Policies](https://owasp.github.io/www-project-secure-headers/response-headers/#x-permitted-cross-domain-policies) im OWASP Secure Headers Project
