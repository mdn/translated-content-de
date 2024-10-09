---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

**Content Security Policy** ({{Glossary("CSP", "CSP")}}) ist eine zusätzliche Sicherheitsschicht, die hilft, bestimmte Arten von Angriffen zu erkennen und zu mildern, einschließlich Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Daten-Injektionsangriffe. Diese Angriffe werden für alles mögliche genutzt, von Datendiebstahl über das Verunstalten von Websites bis hin zur Verteilung von Malware.

CSP ist darauf ausgelegt, vollständig abwärtskompatibel zu sein (mit Ausnahme der CSP-Version 2, bei der einige ausdrücklich erwähnte Inkonsistenzen in der Abwärtskompatibilität bestehen; mehr Details [hier](https://www.w3.org/TR/CSP2/) Abschnitt 1.1). Browser, die es nicht unterstützen, funktionieren dennoch mit Servern, die es implementieren, und umgekehrt. Browser, die CSP nicht unterstützen, ignorieren es und funktionieren wie gewohnt; sie wenden nur den Schutz der standardmäßigen [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) an ohne die zusätzlichen Einschränkungen, die CSP hinzufügen würde.

Um CSP zu aktivieren, müssen Sie Ihren Webserver so konfigurieren, dass er den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header zurückgibt. (Manchmal sehen Sie möglicherweise Erwähnungen des `X-Content-Security-Policy` Headers, aber das ist eine ältere Version und Sie müssen diesen nicht mehr angeben.)

Alternativ kann das {{HTMLElement("meta")}} Element verwendet werden, um eine Richtlinie zu konfigurieren, zum Beispiel:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';" />
```

> [!NOTE]
> Einige Funktionen, wie das Senden von Berichten über CSP-Verletzungen, sind nur verfügbar, wenn HTTP-Header verwendet werden.

## Bedrohungen

### Minderung von Cross-Site Scripting

Ein Hauptziel von CSP ist es, XSS-Angriffe zu mildern und zu melden. XSS-Angriffe nutzen das Vertrauen des Browsers in den vom Server empfangenen Inhalt aus. Schädliche Skripte werden vom Browser des Opfers ausgeführt, weil der Browser der Quelle des Inhalts vertraut, auch wenn sie nicht von dort stammt, wo es scheint.

CSP ermöglicht es Serveradministratoren, die Vektoren, durch die XSS stattfinden kann, zu reduzieren oder zu eliminieren, indem sie die Domains angeben, die der Browser als gültige Quellen ausführbarer Skripte betrachten soll. Ein mit CSP kompatibler Browser führt dann nur Skripte aus, die in Quelldateien von diesen erlaubten Domains geladen wurden und ignoriert alle anderen Skripte (einschließlich Inline-Skripte und HTML-Attribute zur Ereignisbehandlung).

Als ultimative Form des Schutzes können Websites, die nie Skript-Ausführung erlauben wollen, die Ausführung von Skripten global verbieten.

### Minderung von Abhöraangriffen

Zusätzlich zur Einschränkung der Domains, von denen Inhalte geladen werden können, kann der Server die Protokolle angeben, die verwendet werden dürfen; beispielsweise kann ein Server aus Sicherheitsgründen angeben, dass alle Inhalte nur über HTTPS geladen werden müssen. Eine vollständige Sicherheitsstrategie für die Datenübertragung umfasst nicht nur die Durchsetzung von HTTPS für die Datenübertragung, sondern auch das Markieren aller [Cookies mit dem `secure` Attribut](/de/docs/Web/HTTP/Cookies) und das Bereitstellen automatischer Weiterleitungen von HTTP-Seiten zu ihren HTTPS-Pendants. Websites können auch den {{HTTPHeader("Strict-Transport-Security")}} HTTP-Header verwenden, um sicherzustellen, dass Browser ausschließlich über einen verschlüsselten Kanal auf sie zugreifen.

## Verwendung von CSP

Das Konfigurieren der Content Security Policy beinhaltet das Hinzufügen des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers zu einer Webseite und das Festlegen von Werten, um zu kontrollieren, welche Ressourcen der Benutzeragent für diese Seite laden darf. Zum Beispiel könnte eine Seite, die Bilder hochlädt und anzeigt, Bilder von überall erlauben, aber eine Formularaktion auf einen bestimmten Endpunkt beschränken. Eine gut gestaltete Content Security Policy schützt eine Seite vor einem Cross-Site Scripting Angriff. Dieser Artikel erklärt, wie solche Header korrekt konzipiert werden, und bietet Beispiele.

### Ihre Richtlinie festlegen

Sie können den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, zum Beispiel so:

```http
Content-Security-Policy: policy
```

Die Richtlinie ist eine Zeichenfolge, die die Richtliniendirektiven beschreibt, die Ihre Content Security Policy beschreiben.

### Eine Richtlinie schreiben

Eine Richtlinie wird mit einer Reihe von Richtliniendirektiven beschrieben, von denen jede die Richtlinie für eine bestimmte Ressourcentyp oder einen Richtlinienbereich beschreibt. Ihre Richtlinie sollte eine {{CSP("default-src")}} Richtliniendirektive enthalten, die als Fallback für andere Ressourcentypen dient, wenn diese keine eigene Richtlinie haben (für eine vollständige Liste siehe die Beschreibung der {{CSP("default-src")}} Direktive). Eine Richtlinie muss eine {{CSP("default-src")}} oder {{CSP("script-src")}} Direktive enthalten, um zu verhindern, dass Inline-Skripte ausgeführt werden, sowie die Verwendung von `eval()` zu blockieren. Eine Richtlinie muss eine {{CSP("default-src")}} oder {{CSP("style-src")}} Direktive enthalten, um zu verhindern, dass Inline-Stile von einem {{HTMLElement("style")}} Element oder einem `style` Attribut angewendet werden. Es gibt spezifische Direktiven für eine Vielzahl von Elementtypen, so dass jeder Typ seine eigene Richtlinie haben kann, einschließlich Schriftarten, Frames, Bilder, Audio- und Videomedien, Skripte und Worker.

Für eine vollständige Liste der Richtliniendirektiven siehe die Referenzseite für den [Content-Security-Policy Header](/de/docs/Web/HTTP/Headers/Content-Security-Policy).

## Beispiele: Häufige Anwendungsfälle

Dieser Abschnitt bietet Beispiele für einige häufige Szenarien mit Sicherheitsrichtlinien.

### Beispiel 1

Ein Website-Administrator möchte, dass alle Inhalte nur von der Ursprungsseite der Website kommen (dies schließt Subdomains aus).

```http
Content-Security-Policy: default-src 'self'
```

### Beispiel 2

Ein Website-Administrator möchte Inhalte von einer vertrauenswürdigen Domain und all deren Subdomains erlauben (es muss nicht dieselbe Domain sein, auf der die CSP gesetzt ist).

```http
Content-Security-Policy: default-src 'self' example.com *.example.com
```

### Beispiel 3

Ein Website-Administrator möchte Benutzern einer Webanwendung erlauben, Bilder von jedem Ursprung in ihren eigenen Inhalten einzuschließen, aber Audio- oder Videomedien auf vertrauenswürdige Anbieter zu beschränken und alle Skripte nur auf einen bestimmten Server zu beschränken, der vertrauenswürdigen Code hostet.

```http
Content-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscript.example.com
```

Hier ist standardmäßig nur Inhalt vom Dokumentursprung erlaubt, mit folgenden Ausnahmen:

- Bilder dürfen von überall geladen werden (beachten Sie das „\*“ Platzhalterzeichen).
- Medien sind nur von example.org und example.net erlaubt (nicht von Subdomains dieser Seiten).
- Ausführbares Script ist nur von userscript.example.com erlaubt.

### Beispiel 4

Ein Website-Administrator eines Online-Banking-Dienstes möchte sicherstellen, dass alle Inhalte über TLS geladen werden, um zu verhindern, dass Angreifer Anfragen abhören.

```http
Content-Security-Policy: default-src https://onlinebanking.example.com
```

Der Server erlaubt den Zugriff nur auf Dokumente, die speziell über HTTPS durch den einzigen Ursprung onlinebanking.example.com geladen werden.

### Beispiel 5

Ein Website-Administrator einer Webmail-Site möchte HTML in E-Mails erlauben, sowie Bilder, die von überall geladen werden, aber JavaScript oder andere potenziell gefährliche Inhalte dürfen nur vom gleichen Ursprung wie der Mail-Server stammen.

```http
Content-Security-Policy: default-src 'self' *.example.com; img-src *
```

Beachten Sie, dass dieses Beispiel keine {{CSP("script-src")}} spezifiziert, sodass die {{CSP("default-src")}} Direktive für JavaScript-Quellen als Fallback verwendet wird.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Nur-Berichtsmodus eingesetzt werden. Die Richtlinie wird nicht durchgesetzt, aber Verstöße werden an ein angegebenes URI gemeldet. Zusätzlich kann ein Nur-Berichts-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, zum Beispiel so:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien eingehalten. Die im `Content-Security-Policy` Header angegebenen Richtlinien werden durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

## Meldung von Verstößen

Die empfohlene Methode zur Meldung von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), indem Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert werden und einer davon als CSP-Berichtsziel mithilfe der {{CSP("report-to")}} Direktive im `Content-Security-Policy` Header angegeben wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben. Dies sendet ein etwas anderes JSON-Berichtsformat über eine `POST` Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`. Dieser Ansatz ist veraltet, aber Sie sollten beide erklären, bis {{CSP("report-to")}} in allen Browsern unterstützt wird. Für weitere Informationen zu diesem Ansatz siehe das Thema {{CSP("report-uri")}}.

Ein Server kann Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet. Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste. Zum Beispiel, um einen Berichtsendpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwort-Header des Servers so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten verarbeiten, würden Sie sie folgendermaßen angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}} Direktive im `Content-Security-Policy` Header verwenden, um zu spezifizieren, dass ein bestimmter definierter Endpunkt für Berichte verwendet werden soll. Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für `default-src` zu senden, könnten Sie Antwort-Header senden, die wie folgt aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST` Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts mit einer `type` Eigenschaft, die den Wert `"csp-violation"` hat, und einem `body`, das die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

Ein typisches Objekt könnte so aussehen:

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

Sie müssen einen Server einrichten, um Berichte mit dem angegebenen JSON-Format und Inhaltstyp zu empfangen. Der Server, der diese Anfragen verarbeitet, kann die eingehenden Berichte dann auf eine Weise speichern oder verarbeiten, die am besten zu Ihren Bedürfnissen passt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

In einigen Versionen des Safari Webbrowsers existiert eine spezifische Inkompatibilität, bei der der Browser selbstgehostete Inhalte und externe Inhalte blockiert, wenn ein Content Security Policy Header gesetzt ist, jedoch kein Same-Origin Header, und fälschlicherweise meldet, dass dies auf die Content Security Policy zurüchzuführen ist, die den Inhalt nicht erlaubt.

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP Header
- {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP Header
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [CSP in Web Workers](/de/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluieren Sie Ihre Content Security Policy
