---
title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Reference/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`X-Permitted-Cross-Domain-Policies`** {{Glossary("response_header", "Antwort-Header")}} definiert eine Meta-Richtlinie, die steuert, ob Ressourcen einer Webseite cross-origin von einem Dokument abgerufen werden können, das in einem Web-Client wie Adobe Acrobat oder Microsoft Silverlight läuft.

Er kann in Fällen eingesetzt werden, in denen die Webseite eine Cross-Domain-Richtlinie deklarieren muss, aber nicht in das Stammverzeichnis der Domain schreiben kann.

Die Verwendung dieser Richtlinie ist seltener geworden, da Adobe Flash Player und Microsoft Silverlight veraltet sind. Einige Sicherheitstests werden weiterhin auf das Vorhandensein eines `X-Permitted-Cross-Domain-Policies: none` Headers prüfen, da er das Risiko einer versehentlich oder durch böswillige Aktionen hinzugefügten zu freizügigen Richtliniendatei auf Ihrer Seite mindern kann.

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
  - : Keine Richtliniendateien sind irgendwo auf dem Zielserver erlaubt, einschließlich in einer Master-Richtliniendatei.
- `master-only`
  - : Erlaubt den Cross-Domain-Zugang zur Master-Richtliniendatei, die auf derselben Domain definiert ist.
- `by-content-type` (nur HTTP/HTTPS)
  - : Nur Richtliniendateien, die mit `Content-Type: text/x-cross-domain-policy` ausgeliefert werden, sind erlaubt.
- `by-ftp-filename` (nur FTP)
  - : Nur Richtliniendateien, deren Dateinamen `crossdomain.xml` (URLs, die mit `/crossdomain.xml` enden) sind, sind erlaubt.
- `all`
  - : Alle Richtliniendateien auf dieser Zieldomain sind erlaubt.
- `none-this-response`
  - : Gibt an, dass das aktuelle Dokument nicht als Richtliniendatei verwendet werden sollte, trotz anderer Header oder seines Inhalts. Dieser Wert ist einzigartig nur für den HTTP-Header.

## Beschreibung

Web-Clients wie Adobe Acrobat oder Apache Flex können Web-Dokumente laden, die wiederum Ressourcen von derselben oder anderen Seiten laden können. Der Zugriff ist standardmäßig auf gleichseitige Ressourcen beschränkt, aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy), aber Cross-Origin-Seiten können entscheiden, einige oder alle ihrer Ressourcen mittels spezieller Dateien, Cross-Domain-Policy-Dateien genannt, für Clients cross-origin verfügbar zu machen.

Eine "Master"-Cross-Domain-Policy-Datei kann als `crossdomain.xml`-Datei im Stammverzeichnis der Domain definiert werden, zum Beispiel: `http://example.com/crossdomain.xml`. Die Master-Datei definiert die _Meta-Richtlinie_ für die gesamte Seite mithilfe des Attributs `permitted-cross-domain-policies` des `<site-control>` Tags. Die Meta-Richtlinie steuert, ob Richtlinien zugelassen sind und unter welchen Bedingungen die anderen "Sub"-Cross-Domain-Policy-Dateien verwendet werden dürfen. Diese anderen Richtliniendateien können in bestimmten Verzeichnissen erstellt werden, um den Zugriff über die Dateien in ihrem jeweiligen Verzeichnisbaum zu spezifizieren.

Zum Beispiel folgt hier die am wenigsten freizügige Master-Richtliniendefinition, die keinen Zugriff zulässt und die Verwendung anderer "Sub"-Richtliniendateien nicht erlaubt.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Der `X-Permitted-Cross-Domain-Policies` Header kann eine Meta-Richtlinie für die HTTP-Antwort, in der er enthalten ist, spezifizieren oder eine in der Master-Cross-Domain-Policy-Datei definierte Meta-Richtlinie, falls vorhanden, überschreiben. Er nimmt dieselben Werte wie das `permitted-cross-domain-policies` Attribut der Datei und zusätzlich `none-this-response` an.

Am häufigsten wird er verwendet, um jeglichen Zugriff auf Webseiten-Ressourcen in Fällen zu verhindern, in denen der Entwickler keinen Zugriff hat, um eine Master-Cross-Domain-Policy-Datei im Stammverzeichnis der Seite zu erstellen.

## Beispiele

### Cross-Domain-Policy-Dateien nicht zulassen

Wenn Sie keine Anwendungsdaten in Clients wie Adobe Flash Player oder Adobe Acrobat (oder älteren Clients) laden müssen, sollte der Header als `X-Permitted-Cross-Domain-Policies: none` konfiguriert werden:

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
