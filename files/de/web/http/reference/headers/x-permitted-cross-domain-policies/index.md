---
title: X-Permitted-Cross-Domain-Policies header
short-title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Reference/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`X-Permitted-Cross-Domain-Policies`** {{Glossary("response_header", "Antwort-Header")}} definiert eine Meta-Richtlinie, die kontrolliert, ob Webseiten-Ressourcen von einem Dokument, das in einem Web-Client wie Adobe Acrobat oder Microsoft Silverlight läuft, cross-origin abgerufen werden können.

Er kann in Fällen verwendet werden, in denen die Webseite eine Cross-Domain-Richtlinie erklären muss, aber nicht in das Stammverzeichnis der Domain schreiben kann.

Die Nutzung dieses Headers ist weniger verbreitet, seit Adobe Flash Player und Microsoft Silverlight veraltet sind. Einige Sicherheitstest-Tools überprüfen dennoch das Vorhandensein eines `X-Permitted-Cross-Domain-Policies: none` Headers, da es das Risiko einer zu freizügigen Richtliniendatei, die versehentlich oder durch bösartige Aktionen auf Ihrer Webseite hinzugefügt wurde, mindern kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
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
  - : Erlaubt den Cross-Domain-Zugriff auf die Master-Richtliniendatei, die auf derselben Domain definiert ist.
- `by-content-type` (nur HTTP/HTTPS)
  - : Es sind nur Richtliniendateien zulässig, die mit `Content-Type: text/x-cross-domain-policy` bereitgestellt werden.
- `by-ftp-filename` (nur FTP)
  - : Es sind nur Richtliniendateien zulässig, deren Dateinamen `crossdomain.xml` sind (URLs, die mit `/crossdomain.xml` enden).
- `all`
  - : Alle Richtliniendateien auf dieser Zieldomain sind erlaubt.
- `none-this-response`
  - : Gibt an, dass das aktuelle Dokument trotz anderer Header oder dessen Inhalt nicht als Richtliniendatei verwendet werden soll. Dieser Wert ist einzigartig für den HTTP-Header.

## Beschreibung

Web-Clients wie Adobe Acrobat oder Apache Flex können Webdokumente laden, die wiederum Ressourcen von derselben oder anderen Seiten laden können. Der Zugriff ist standardmäßig auf Ressourcen derselben Seite eingeschränkt, aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy), aber Cross-Origin-Seiten können entscheiden, einige oder alle ihrer Ressourcen für Clients Cross-Origin verfügbar zu machen, indem spezielle Dateien verwendet werden, die als Cross-Domain-Richtliniendateien bezeichnet werden.

Eine "Master"-Cross-Domain-Richtliniendatei kann als `crossdomain.xml` Datei im Stammverzeichnis der Domain definiert werden, zum Beispiel: `http://example.com/crossdomain.xml`. Die Master-Datei definiert die _Meta-Richtlinie_ für die gesamte Site unter Verwendung des `permitted-cross-domain-policies`-Attributs des `<site-control>`-Tags. Die Meta-Richtlinie bestimmt, ob überhaupt Richtlinien erlaubt sind und die Bedingungen, unter denen die anderen "Sub"-Cross-Domain-Richtliniendateien verwendet werden können. Diese anderen Richtliniendateien können in bestimmten Verzeichnissen erstellt werden, um den Zugriff über die Dateien in ihrem bestimmten Verzeichnispfad anzugeben.

Zum Beispiel ist dies die restriktivste Definition der Master-Richtlinie, die keinen Zugriff erlaubt und die Verwendung anderer "Sub"-Richtliniendateien nicht zulässt.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Der `X-Permitted-Cross-Domain-Policies`-Header kann eine Meta-Richtlinie für die HTTP-Antwort festlegen, in die er eingefügt wird, oder eine im Master-Cross-Domain-Richtlinien-Datei definierte Meta-Richtlinie überschreiben, falls vorhanden. Er nimmt die gleichen Werte wie das `permitted-cross-domain-policies`-Attribut der Datei und zusätzlich `none-this-response`.

Am häufigsten wird er verwendet, um jeglichen Zugriff auf Site-Ressourcen zu verhindern, in Fällen, in denen der Entwickler keinen Zugang hat, um eine Master-Cross-Domain-Richtliniendatei im Site-Stamm zu erstellen.

## Beispiele

### Deaktivieren von Cross-Domain-Richtliniendateien

Wenn Sie keine Anwendungsdaten in Clients wie Adobe Flash Player oder Adobe Acrobat (oder ältere Clients) laden müssen, sollte der Header als `X-Permitted-Cross-Domain-Policies: none` konfiguriert werden:

```http
X-Permitted-Cross-Domain-Policies: none
```

## Spezifikationen

Dokumentiert in der [Adobe Cross Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Praktische Sicherheitsimplementierungsleitfäden](/de/docs/Web/Security/Practical_implementation_guides)
- [HTTP Observatory](/en-US/observatory/) Header-Testtool
- [Cross Domain Configuration](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) auf adobe.com
- [X-Permitted-Cross-Domain-Policies](https://github.com/OWASP/www-project-secure-headers/blob/master/tab_headers.md#x-permitted-cross-domain-policies) im OWASP Secure Headers Project
