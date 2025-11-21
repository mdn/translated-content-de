---
title: X-Permitted-Cross-Domain-Policies header
short-title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Reference/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-**`X-Permitted-Cross-Domain-Policies`**-{{Glossary("Response_header", "Response-Header")}} definiert eine Metarichtlinie, die kontrolliert, ob Site-Ressourcen von einem Dokument, das in einem Webclient wie Adobe Acrobat oder Microsoft Silverlight läuft, domänenübergreifend zugegriffen werden können.

Er kann in Fällen verwendet werden, in denen die Website eine domänenübergreifende Richtlinie erklären muss, aber nicht in das Stammverzeichnis der Domain schreiben kann.

Die Verwendung dieses Headers ist weniger verbreitet, da Adobe Flash Player und Microsoft Silverlight nicht mehr unterstützt werden. Einige Sicherheitstest-Tools prüfen dennoch auf das Vorhandensein eines `X-Permitted-Cross-Domain-Policies: none`-Headers, da er das Risiko abmildern kann, dass eine zu permissive Richtliniendatei versehentlich oder durch böswillige Handlungen auf Ihrer Site hinzugefügt wird.

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
  - : Keine Richtliniendateien sind irgendwo auf dem Zielserver erlaubt, einschließlich in einer Master-Richtliniendatei.
- `master-only`
  - : Erlaubt domänenübergreifenden Zugriff auf die Master-Richtliniendatei, die auf derselben Domain definiert ist.
- `by-content-type` (nur HTTP/HTTPS)
  - : Nur Richtliniendateien, die mit `Content-Type: text/x-cross-domain-policy` bereitgestellt werden, sind erlaubt.
- `by-ftp-filename` (nur FTP)
  - : Nur Richtliniendateien, deren Dateinamen `crossdomain.xml` sind (URLs, die mit `/crossdomain.xml` enden), sind erlaubt.
- `all`
  - : Alle Richtliniendateien auf dieser Zieldomain sind erlaubt.
- `none-this-response`
  - : Gibt an, dass das aktuelle Dokument trotz anderer Header oder seines Inhalts nicht als Richtliniendatei verwendet werden sollte.
    Dieser Wert ist einzigartig nur für den HTTP-Header.

## Beschreibung

Webclients wie Adobe Acrobat oder Apache Flex können Webdokumente laden, die wiederum Ressourcen von derselben Site oder anderen Sites laden können. Der Zugriff ist standardmäßig auf Site-interne Ressourcen beschränkt, aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy), aber domänenübergreifende Sites können entscheiden, einige oder alle ihrer Ressourcen für Clients domänenübergreifend verfügbar zu machen, indem spezielle Dateien, sogenannte Cross-Domain-Richtliniendateien, verwendet werden.

Eine "Master"-Cross-Domain-Richtliniendatei kann als `crossdomain.xml`-Datei im Stammverzeichnis der Domain definiert werden, zum Beispiel: `http://example.com/crossdomain.xml`. Die Master-Datei definiert die _Metarichtlinie_ für die gesamte Site mit dem Attribut `permitted-cross-domain-policies` des `<site-control>`-Tags. Die Metarichtlinie kontrolliert, ob überhaupt Richtlinien erlaubt sind und die Bedingungen für die Nutzung anderer "Sub"-Cross-Domain-Richtliniendateien. Diese anderen Richtliniendateien könnten in bestimmten Verzeichnissen erstellt werden, um den Zugriff auf die Dateien in ihrem jeweiligen Verzeichnisbaum zu spezifizieren.

Zum Beispiel ist dies die am wenigsten permissive Definition der Master-Richtlinie, die keinen Zugang erlaubt und nicht die Nutzung anderer "Sub"-Richtliniendateien zulässt.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Der `X-Permitted-Cross-Domain-Policies`-Header kann eine Metarichtlinie für die HTTP-Antwort spezifizieren, in die er eingeschlossen ist, oder eine im Master-Cross-Domain-Richtliniendokument definierte Metarichtlinie überschreiben, falls vorhanden. Er nimmt die gleichen Werte wie das `permitted-cross-domain-policies`-Attribut der Datei und zusätzlich `none-this-response`.

Am häufigsten wird er verwendet, um jeglichen Zugriff auf Site-Ressourcen zu verhindern, in Fällen, in denen der Entwickler keinen Zugriff darauf hat, eine Master-Cross-Domain-Richtliniendatei im Stamm der Site zu erstellen.

## Beispiele

### Domänenübergreifende Richtliniendateien ablehnen

Wenn Sie keine Anwendungsdaten in Clients wie Adobe Flash Player oder Adobe Acrobat (oder Legacy-Clients) laden müssen, sollte der Header als `X-Permitted-Cross-Domain-Policies: none` konfiguriert werden:

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
