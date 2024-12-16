---
title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: a9686faf53ef37259a11e2d659622a6e0051ee89
---

{{HTTPSidebar}}

Der HTTP **`X-Permitted-Cross-Domain-Policies`** {{Glossary("response_header", "Antwort-Header")}} definiert eine Meta-Policy, die steuert, ob Site-Ressourcen von einem Dokument, das in einem Web-Client wie Adobe Acrobat oder Microsoft Silverlight ausgeführt wird, übergreifend aufgerufen werden können.

Dieser Header kann in Fällen verwendet werden, in denen eine Website eine Cross-Domain-Policy deklarieren muss, aber nicht in das Stammverzeichnis der Domain schreiben kann.

Die Verwendung dieses Headers ist weniger verbreitet, seit Adobe Flash Player und Microsoft Silverlight veraltet sind.
Einige Sicherheitstest-Tools prüfen dennoch auf die Präsenz eines `X-Permitted-Cross-Domain-Policies: none` Headers, da er das Risiko einer zu permissiven Policy-Datei, die versehentlich oder durch bösartiges Handeln zu Ihrer Website hinzugefügt wurde, verringern kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Keine Policy-Dateien sind irgendwo auf dem Zielserver erlaubt, einschließlich in einer Haupt-Policy-Datei.
- `master-only`
  - : Erlaubt den Zugriff auf die Haupt-Policy-Datei, die auf derselben Domain definiert ist.
- `by-content-type` (nur HTTP/HTTPS)
  - : Nur Policy-Dateien, die mit `Content-Type: text/x-cross-domain-policy` bedient werden, sind erlaubt.
- `by-ftp-filename` (nur FTP)
  - : Nur Policy-Dateien mit dem Dateinamen `crossdomain.xml` (URLs, die auf `/crossdomain.xml` enden) sind erlaubt.
- `all`
  - : Alle Policy-Dateien auf dieser Zieldomain sind erlaubt.
- `none-this-response`
  - : Gibt an, dass das aktuelle Dokument nicht als Policy-Datei verwendet werden sollte, trotz anderer Header oder seines Inhalts.
    Dieser Wert ist einzigartig für den HTTP-Header.

## Beschreibung

Web-Clients wie Adobe Acrobat oder Apache Flex können Web-Dokumente laden, die möglicherweise Ressourcen von derselben Seite oder anderen Seiten laden.
Zugriff ist standardmäßig auf dieselben Seitenressourcen beschränkt, aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy), aber Seiten mit anderen Ursprüngen können wählen, einige oder alle ihrer Ressourcen cross-origin über spezielle Dateien, sogenannte Cross-Domain-Policy-Dateien, verfügbar zu machen.

Eine "master" Cross-Domain-Policy-Datei kann als `crossdomain.xml` Datei im Stamm der Domain definiert werden, zum Beispiel: `http://example.com/crossdomain.xml`.
Die Master-Datei definiert die _Meta-Policy_ für die gesamte Seite mithilfe des `permitted-cross-domain-policies` Attributs des `<site-control>` Tags.
Die Meta-Policy steuert, ob irgendwelche Policies erlaubt sind und die Bedingungen für die Verwendung der anderen "Sub" Cross-Domain-Policy-Dateien.
Diese anderen Policy-Dateien könnten in bestimmten Verzeichnissen erstellt werden, um den Zugriff über die Dateien in ihrem gegebenen Verzeichnisbaum zu spezifizieren.

Zum Beispiel, dies ist die am wenigsten permissive Master-Policy-Definition, die keinen Zugriff erlaubt und die Verwendung anderer "Sub" Policy-Dateien nicht erlaubt.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Der `X-Permitted-Cross-Domain-Policies` Header kann eine Meta-Policy für die HTTP-Antwort spezifizieren, in der er enthalten ist, oder eine Meta-Policy überschreiben, die in der Master-Cross-Domain-Policy-Datei definiert ist, falls vorhanden.
Er nimmt die gleichen Werte wie das `permitted-cross-domain-policies` Attribut der Datei an und zusätzlich `none-this-response`.

Am häufigsten wird er verwendet, um jeglichen Zugriff auf Site-Ressourcen zu verhindern, in Fällen, in denen der Entwickler nicht die Möglichkeit hat, eine Master-Cross-Domain-Policy-Datei im Stammbereich der Site zu erstellen.

## Beispiele

### Verbot von Cross-Domain-Policy-Dateien

Wenn Sie keine Anwendungsdaten in Clients wie Adobe Flash Player oder Adobe Acrobat (oder Legacy-Clients) laden müssen, sollte der Header als `X-Permitted-Cross-Domain-Policies: none` konfiguriert werden:

```http
X-Permitted-Cross-Domain-Policies: none
```

## Spezifikationen

Dokumentiert in der [Adobe Cross Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [Praktische Sicherheitsimplementierungs-Leitfäden](/de/docs/Web/Security/Practical_implementation_guides)
- [HTTP Observatory](/en-US/observatory/) Header-Test-Tool
- [Cross Domain Konfiguration](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) auf adobe.com
- [X-Permitted-Cross-Domain-Policies](https://github.com/OWASP/www-project-secure-headers/blob/master/tab_headers.md#x-permitted-cross-domain-policies) im OWASP Secure Headers Projekt
