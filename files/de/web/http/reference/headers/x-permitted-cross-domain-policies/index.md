---
title: X-Permitted-Cross-Domain-Policies header
short-title: X-Permitted-Cross-Domain-Policies
slug: Web/HTTP/Reference/Headers/X-Permitted-Cross-Domain-Policies
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

Der HTTP-{{Glossary("response_header", "Response-Header")}} **`X-Permitted-Cross-Domain-Policies`** definiert eine Meta-Richtlinie, die steuert, ob ein Dokument, das in einem Webclient wie Adobe Acrobat oder Microsoft Silverlight ausgeführt wird, originübergreifend auf Ressourcen einer Website zugreifen kann.

Er kann verwendet werden, wenn eine Website eine Cross-Domain-Richtlinie festlegen muss, aber nicht in das Stammverzeichnis der Domain schreiben kann.

Die Verwendung dieses Headers ist seltener geworden, seit Adobe Flash Player und Microsoft Silverlight eingestellt wurden.
Einige Sicherheitstest-Tools prüfen weiterhin, ob der Header `X-Permitted-Cross-Domain-Policies: none` vorhanden ist. Er kann das Risiko mindern, dass versehentlich oder durch böswillige Handlungen eine zu freizügige Richtliniendatei zur Website hinzugefügt wird.

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
  - : Auf dem Zielserver sind keine Richtliniendateien zulässig, auch keine Master-Richtliniendatei.
- `master-only`
  - : Erlaubt originübergreifenden Zugriff gemäß der auf derselben Domain definierten Master-Richtliniendatei.
- `by-content-type` (nur HTTP/HTTPS)
  - : Nur Richtliniendateien, die mit `Content-Type: text/x-cross-domain-policy` ausgeliefert werden, sind zulässig.
- `by-ftp-filename` (nur FTP)
  - : Nur Richtliniendateien mit dem Dateinamen `crossdomain.xml` (URLs, die auf `/crossdomain.xml` enden) sind zulässig.
- `all`
  - : Alle Richtliniendateien auf dieser Zieldomain sind zulässig.
- `none-this-response`
  - : Gibt an, dass das aktuelle Dokument ungeachtet anderer Header oder seines Inhalts nicht als Richtliniendatei verwendet werden soll.
    Dieser Wert ist nur für den HTTP-Header verfügbar.

## Beschreibung

Webclients wie Adobe Acrobat oder Apache Flex können Webdokumente laden, die ihrerseits Ressourcen von derselben oder von anderen Websites laden können.
Aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) ist der Zugriff standardmäßig auf Ressourcen derselben Website beschränkt. Websites mit einer anderen Origin können jedoch mithilfe spezieller Dateien, sogenannter Cross-Domain-Richtliniendateien, einige oder alle ihrer Ressourcen für originübergreifende Zugriffe durch Clients freigeben.

Eine „Master“-Cross-Domain-Richtliniendatei kann als Datei `crossdomain.xml` im Stammverzeichnis der Domain definiert werden, beispielsweise unter `http://example.com/crossdomain.xml`.
Die Master-Datei legt mit dem Attribut `permitted-cross-domain-policies` des Tags `<site-control>` die _Meta-Richtlinie_ für die gesamte Website fest.
Die Meta-Richtlinie steuert, ob Richtlinien überhaupt zulässig sind und unter welchen Bedingungen andere „untergeordnete“ Cross-Domain-Richtliniendateien verwendet werden dürfen.
Solche weiteren Richtliniendateien können in bestimmten Verzeichnissen erstellt werden, um den Zugriff auf Dateien im jeweiligen Verzeichnisbaum festzulegen.

Das folgende Beispiel zeigt die restriktivste Definition einer Master-Richtlinie. Sie erlaubt keinerlei Zugriff und lässt auch die Verwendung anderer „untergeordneter“ Richtliniendateien nicht zu.

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">
<cross-domain-policy>
  <site-control permitted-cross-domain-policies="none"/>
</cross-domain-policy>
```

Der Header `X-Permitted-Cross-Domain-Policies` kann eine Meta-Richtlinie für die HTTP-Antwort festlegen, in der er enthalten ist. Er kann auch eine Meta-Richtlinie überschreiben, die in der Master-Cross-Domain-Richtliniendatei definiert ist, sofern eine solche Datei vorhanden ist.
Er akzeptiert dieselben Werte wie das Attribut `permitted-cross-domain-policies` der Datei sowie zusätzlich `none-this-response`.

Am häufigsten wird er verwendet, um jeglichen Zugriff auf Website-Ressourcen zu verhindern, wenn Entwickler keine Master-Cross-Domain-Richtliniendatei im Stammverzeichnis der Website erstellen können.

## Beispiele

### Cross-Domain-Richtliniendateien verbieten

Wenn Sie keine Anwendungsdaten in Clients wie Adobe Flash Player oder Adobe Acrobat (oder älteren Clients) laden müssen, sollten Sie den Header als `X-Permitted-Cross-Domain-Policies: none` konfigurieren:

```http
X-Permitted-Cross-Domain-Policies: none
```

## Spezifikationen

Dokumentiert in der [Adobe Cross Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Praxisleitfäden zur Implementierung von Sicherheitsmaßnahmen](/de/docs/Web/Security/Practical_implementation_guides)
- [HTTP Observatory](/en-US/observatory/), ein Tool zum Testen von Headern
- [Cross Domain Configuration](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html) auf adobe.com
- [X-Permitted-Cross-Domain-Policies](https://secure-headers-project.owasp.org/response-headers/#x-permitted-cross-domain-policies) im OWASP Secure Headers Project
