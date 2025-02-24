---
title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`X-Permitted-Cross-Domain-Policies`** {{Glossary("response_header", "Antwort-Header")}} definiert eine Meta-Policy, die steuert, ob Website-Ressourcen von einem Dokument, das in einem Web-Client wie Adobe Acrobat oder Microsoft Silverlight läuft, domänenübergreifend zugegriffen werden können.

Er kann in Fällen verwendet werden, in denen die Website eine domänenübergreifende Policy erklären muss, aber nicht auf das Stammverzeichnis der Domain zugreifen kann.

Die Verwendung dieses Headers ist weniger verbreitet, da Adobe Flash Player und Microsoft Silverlight veraltet sind. Einige Sicherheitstest-Tools überprüfen immer noch das Vorhandensein eines `X-Permitted-Cross-Domain-Policies: none` Headers, da er das Risiko einer versehentlich oder durch böswillige Handlungen hinzugefügten, zu freizügigen Policy-Datei auf Ihrer Website mindern kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Keine Policy-Dateien sind auf dem Zielserver, einschließlich einer Master-Policy-Datei, erlaubt.
- `master-only`
  - : Ermöglicht den Zugriff auf die Master-Policy-Datei, die auf derselben Domain definiert ist.
- `by-content-type` (nur HTTP/HTTPS)
  - : Nur mit `Content-Type: text/x-cross-domain-policy` bereitgestellte Policy-Dateien sind erlaubt.
- `by-ftp-filename` (nur FTP)
  - : Nur Policy-Dateien mit dem Dateinamen `crossdomain.xml` (URLs die auf `/crossdomain.xml` enden) sind erlaubt.
- `all`
  - : Alle Policy-Dateien auf dieser Zieldomain sind erlaubt.
- `none-this-response`
  - : Gibt an, dass das aktuelle Dokument trotz anderer Header oder dessen Inhalt nicht als Policy-Datei verwendet werden sollte. Dieser Wert ist nur im HTTP-Header einzigartig.

## Beschreibung

Web-Clients wie Adobe Acrobat oder Apache Flex können Web-Dokumente laden, die wiederum Ressourcen von derselben oder anderen Websites laden können.
Der Zugriff ist standardmäßig auf Ressourcen derselben Seite beschränkt durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy), aber andere Ursprünge können wählen, einige oder alle ihrer Ressourcen für Clients domänenübergreifend verfügbar zu machen, indem spezielle Dateien verwendet werden, die als domänenübergreifende Policy-Dateien bezeichnet werden.

Eine "Master" domänenübergreifende Policy-Datei kann als `crossdomain.xml` Datei im Stamm der Domain definiert werden, zum Beispiel: `http://example.com/crossdomain.xml`.
Die Master-Datei definiert die _Meta-Policy_ für die gesamte Website anhand des `permitted-cross-domain-policies` Attributs des `<site-control>` Tags.
Die Meta-Policy steuert, ob irgendwelche Policies erlaubt sind, und die Bedingungen, damit die anderen "Sub" domänenübergreifenden Policy-Dateien verwendet werden dürfen.
Diese anderen Policy-Dateien könnten in bestimmten Verzeichnissen erstellt werden, um Zugriff auf die Dateien in ihrem jeweiligen Verzeichnisbaum zu gewähren.

Zum Beispiel, dies ist die am wenigsten freizügige Master-Policy-Definition, die keinen Zugriff erlaubt und die Verwendung von anderen "Sub"-Policy-Dateien nicht gestattet.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Der `X-Permitted-Cross-Domain-Policies` Header kann eine Meta-Policy für die HTTP-Antwort angeben, in die er eingebunden ist, oder eine im Master-Cross-Domain-Policy-Datei definierte Meta-Policy überschreiben, falls vorhanden.
Er übernimmt die gleichen Werte wie das `permitted-cross-domain-policies` Attribut der Datei und zusätzlich `none-this-response`.

Am häufigsten wird er verwendet, um jeglichen Zugriff auf Website-Ressourcen zu verhindern, wenn der Entwickler keinen Zugang hat, um eine Master-Cross-Domain-Policy-Datei im Stammbereich der Website zu erstellen.

## Beispiele

### Deaktivieren von domänenübergreifenden Policy-Dateien

Wenn Sie keine Anwendungsdaten in Clients wie Adobe Flash Player oder Adobe Acrobat (oder älteren Clients) laden müssen, sollte der Header als `X-Permitted-Cross-Domain-Policies: none` konfiguriert werden:

```http
X-Permitted-Cross-Domain-Policies: none
```

## Spezifikationen

Dokumentiert in der [Adobe Cross Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [Praktische Sicherheitsimplementierungs-Leitfäden](/de/docs/Web/Security/Practical_implementation_guides)
- [HTTP Observatory](/en-US/observatory/) Header-Testtool
- [Cross Domain Configuration](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) auf adobe.com
- [X-Permitted-Cross-Domain-Policies](https://github.com/OWASP/www-project-secure-headers/blob/master/tab_headers.md#x-permitted-cross-domain-policies) im OWASP Secure Headers Project
