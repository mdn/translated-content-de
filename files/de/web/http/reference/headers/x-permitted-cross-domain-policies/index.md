---
title: X-Permitted-Cross-Domain-Policies header
short-title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Reference/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`X-Permitted-Cross-Domain-Policies`** {{Glossary("response_header", "Antwort-Header")}} definiert eine Metapolitik, die kontrolliert, ob auf Ressourcen der Website von einem Dokument, das in einem Web-Client wie Adobe Acrobat oder Microsoft Silverlight läuft, über Cross-Origin zugegriffen werden kann.

Es kann in Fällen verwendet werden, in denen die Website eine Cross-Domain-Politik erklären muss, aber nicht in das Stammverzeichnis der Domain schreiben kann.

Die Verwendung dieses Headers ist weniger gebräuchlich, seit Adobe Flash Player und Microsoft Silverlight veraltet sind. Einige Sicherheitstest-Tools prüfen dennoch auf das Vorhandensein eines `X-Permitted-Cross-Domain-Policies: none` Headers, da dadurch das Risiko einer zu großzügigen Richtliniendatei, die Ihrer Website versehentlich oder durch böswillige Aktionen hinzugefügt wurde, gemindert werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Keine Richtliniendateien sind irgendwo auf dem Zielserver erlaubt, einschließlich einer Master-Richtliniendatei.
- `master-only`
  - : Ermöglicht den Zugriff auf die Cross-Domain-Master-Richtliniendatei, die auf derselben Domain definiert ist.
- `by-content-type` (nur HTTP/HTTPS)
  - : Nur Richtliniendateien, die mit `Content-Type: text/x-cross-domain-policy` bedient werden, sind erlaubt.
- `by-ftp-filename` (nur FTP)
  - : Nur Richtliniendateien, deren Dateinamen `crossdomain.xml` sind (URLs, die auf `/crossdomain.xml` enden), sind erlaubt.
- `all`
  - : Alle Richtliniendateien auf dieser Zieldomain sind erlaubt.
- `none-this-response`
  - : Gibt an, dass das aktuelle Dokument trotz anderer Header oder seines Inhalts nicht als Richtliniendatei verwendet werden sollte.
    Dieser Wert ist einzigartig nur für den HTTP-Header.

## Beschreibung

Web-Clients wie Adobe Acrobat oder Apache Flex können Web-Dokumente laden, die wiederum Ressourcen von derselben oder anderen Websites laden können. Der Zugriff ist standardmäßig auf Ressourcen derselben Website beschränkt, aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy), aber Websites mit Cross-Origin können wählen, einige oder alle ihrer Ressourcen für Clients Cross-Origin zugänglich zu machen, indem sie spezielle Dateien verwenden, die als Cross-Domain-Richtliniendateien bezeichnet werden.

Eine "Master"-Cross-Domain-Richtliniendatei kann als `crossdomain.xml` Datei im Stamm der Domain definiert werden, zum Beispiel: `http://example.com/crossdomain.xml`. Die Master-Datei definiert die _Metapolitik_ für die gesamte Seite mittels des `permitted-cross-domain-policies` Attributs des `<site-control>` Tags. Die Metapolitik kontrolliert, ob Richtlinien zugelassen sind und die Bedingungen, unter denen die anderen "Sub" Cross-Domain-Richtliniendateien verwendet werden können. Diese anderen Richtliniendateien könnten in bestimmten Verzeichnissen erstellt werden, um den Zugriff auf die Dateien in ihrem jeweiligen Verzeichnisbaum anzugeben.

Beispielsweise ist dies die am wenigsten permissive Master-Politik-Definition, die keinen Zugriff erlaubt und die Verwendung anderer "Sub"-Richtliniendateien nicht zulässt.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Der `X-Permitted-Cross-Domain-Policies` Header kann eine Metapolitik für die HTTP-Antwort spezifizieren, in der er enthalten ist, oder eine Metapolitik überschreiben, die in der Master-Cross-Domain-Richtliniendatei definiert ist, falls vorhanden. Er nimmt die gleichen Werte an wie das `permitted-cross-domain-policies` Attribut der Datei und zusätzlich `none-this-response`.

Am häufigsten wird er verwendet, um jeglichen Zugriff auf die Ressourcen der Website zu verhindern, in Fällen, in denen der Entwickler keinen Zugang hat, um eine Master-Cross-Domain-Richtliniendatei im Stamm der Website zu erstellen.

## Beispiele

### Verhindern von Cross-Domain-Richtliniendateien

Wenn Sie keine Anwendungsdaten in Clients wie Adobe Flash Player oder Adobe Acrobat (oder älteren Clients) laden müssen, sollte der Header als `X-Permitted-Cross-Domain-Policies: none` konfiguriert werden:

```http
X-Permitted-Cross-Domain-Policies: none
```

## Spezifikationen

Dokumentiert in der [Adobe Cross Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Praktische Sicherheitsimplementierungsanleitungen](/de/docs/Web/Security/Practical_implementation_guides)
- [HTTP Observatory](/en-US/observatory/) Header-Testwerkzeug
- [Cross Domain Configuration](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) auf adobe.com
- [X-Permitted-Cross-Domain-Policies](https://github.com/OWASP/www-project-secure-headers/blob/master/tab_headers.md#x-permitted-cross-domain-policies) im OWASP Secure Headers Project
