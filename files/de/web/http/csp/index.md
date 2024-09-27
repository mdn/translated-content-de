---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{HTTPSidebar}}

Die **Content Security Policy** ([CSP](/de/docs/Glossary/CSP)) ist eine zusätzliche Sicherheitsschicht, die hilft, bestimmte Arten von Angriffen zu erkennen und zu mindern, einschließlich Cross-Site Scripting ([XSS](/de/docs/Glossary/Cross-site_scripting)) und Dateninjektionsangriffen. Diese Angriffe werden für alles von Datendiebstahl über die Verschandelung von Websites bis hin zur Verbreitung von Malware verwendet.

CSP ist so konzipiert, dass es vollständig rückwärtskompatibel ist (außer CSP-Version 2, bei der es einige explizit erwähnte Inkonsistenzen in der Rückwärtskompatibilität gibt; mehr Details finden Sie [hier](https://www.w3.org/TR/CSP2/) in Abschnitt 1.1). Browser, die es nicht unterstützen, funktionieren weiterhin mit Servern, die es implementieren, und umgekehrt. Browser, die CSP nicht unterstützen, ignorieren es und funktionieren wie gewohnt; sie wenden nur die Schutzmaßnahmen der Standard-[Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) an, ohne die weiteren Einschränkungen, die CSP hinzufügen würde.

Um CSP zu aktivieren, müssen Sie Ihren Webserver so konfigurieren, dass er den HTTP-Header {{HTTPHeader("Content-Security-Policy")}} zurückgibt. (Manchmal sehen Sie Erwähnungen des `X-Content-Security-Policy`-Headers, aber das ist eine ältere Version und Sie müssen ihn nicht mehr angeben.)

Alternativ kann das {{HTMLElement("meta")}}-Element verwendet werden, um eine Richtlinie zu konfigurieren, zum Beispiel:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';" />
```

> [!NOTE]
> Einige Funktionen, wie das Senden von CSP-Verletzungsberichten, sind nur bei Verwendung der HTTP-Header verfügbar.

## Bedrohungen

### Abschwächung von Cross-Site-Scripting

Ein Hauptziel von CSP ist es, XSS-Angriffe zu mindern und zu melden. XSS-Angriffe nutzen das Vertrauen des Browsers in den vom Server empfangenen Inhalt aus. Schädliche Skripte werden vom Browser des Opfers ausgeführt, weil der Browser die Quelle des Inhalts vertraut, selbst wenn er nicht von dort stammt, wo er zu sein scheint.

CSP ermöglicht es Serveradministratoren, die Vektoren zu reduzieren oder zu eliminieren, durch die XSS auftreten kann, indem sie die Domains angeben, die der Browser als gültige Quellen ausführbarer Skripte betrachten soll. Ein CSP-kompatibler Browser wird dann nur Skripte aus Quelldateien ausführen, die von diesen erlaubten Domains empfangen wurden, und alle anderen Skripte ignorieren (einschließlich Inline-Skripten und HTML-Attribute zur Ereignisbehandlung).

Als ultimative Schutzmaßnahme können Websites, die niemals die Ausführung von Skripten erlauben möchten, die Ausführung von Skripten global untersagen.

### Abschwächung von Paket-Sniffing-Angriffen

Zusätzlich zur Beschränkung der Domains, von denen Inhalte geladen werden können, kann der Server festlegen, welche Protokolle verwendet werden dürfen; zum Beispiel (und idealerweise, aus Sicherheitsgründen) kann ein Server festlegen, dass alle Inhalte über HTTPS geladen werden müssen. Eine vollständige Sicherheitsstrategie für die Datenübertragung umfasst nicht nur die Durchsetzung von HTTPS für die Datenübertragung, sondern auch das Markieren aller [Cookies mit dem `secure`-Attribut](/de/docs/Web/HTTP/Cookies) und das Bereitstellen automatischer Weiterleitungen von HTTP-Seiten zu ihren HTTPS-Pendants. Websites können auch den {{HTTPHeader("Strict-Transport-Security")}} HTTP-Header verwenden, um sicherzustellen, dass Browser nur über einen verschlüsselten Kanal auf sie zugreifen.

## Verwendung von CSP

Die Konfiguration der Content Security Policy umfasst das Hinzufügen des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers zu einer Webseite und das Festlegen von Werten zur Steuerung, welche Ressourcen der Benutzeragent für diese Seite laden darf. Zum Beispiel könnte eine Seite, die Bilder hochlädt und anzeigt, Bilder von überall erlauben, aber eine Formularaktion auf einen bestimmten Endpunkt beschränken. Eine ordnungsgemäß gestaltete Content Security Policy schützt eine Seite vor einem Cross-Site-Scripting-Angriff. Dieser Artikel erklärt, wie man solche Header richtig konstruiert und gibt Beispiele.

### Ihre Richtlinie festlegen

Sie können den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, so:

```http
Content-Security-Policy: policy
```

Die Richtlinie ist eine Zeichenkette, die die Richtlinienanweisungen beschreibt, welche Ihre Content Security Policy festlegen.

### Schreiben einer Richtlinie

Eine Richtlinie wird mit einer Reihe von Richtlinienanweisungen beschrieben, von denen jede die Richtlinie für einen bestimmten Ressourcentyp oder ein Richtliniengebiet beschreibt. Ihre Richtlinie sollte eine {{CSP("default-src")}}-Richtlinienanweisung enthalten, die als Rückfalloption für andere Ressourcentypen dient, wenn diese keine eigene Richtlinie haben (für eine vollständige Liste siehe die Beschreibung der {{CSP("default-src")}}-Richtlinie). Eine Richtlinie muss eine {{CSP("default-src")}}- oder {{CSP("script-src")}}-Anweisung enthalten, um zu verhindern, dass Inline-Skripte ausgeführt werden und die Verwendung von `eval()` zu blockieren. Eine Richtlinie muss eine {{CSP("default-src")}}- oder {{CSP("style-src")}}-Anweisung enthalten, um zu beschränken, dass Inline-Stile aus einem {{HTMLElement("style")}}-Element oder einem `style`-Attribut angewendet werden. Es gibt spezifische Richtlinien für eine Vielzahl von Elementtypen, so dass jeder Typ eine eigene Richtlinie haben kann, einschließlich Schriftarten, Frames, Bilder, Audio- und Videomedien, Skripte und Worker.

Für eine vollständige Liste der Richtlinienanweisungen siehe die Referenzseite für den [Content-Security-Policy Header](/de/docs/Web/HTTP/Headers/Content-Security-Policy).

## Beispiele: Häufige Anwendungsfälle

Dieser Abschnitt gibt Beispiele für einige gängige Szenarien der Sicherheitspolitik.

### Beispiel 1

Ein Website-Administrator möchte, dass alle Inhalte aus dem eigenen Ursprung der Website stammen (dies schließt Subdomains aus.)

```http
Content-Security-Policy: default-src 'self'
```

### Beispiel 2

Ein Website-Administrator möchte Inhalte von einer vertrauenswürdigen Domain und allen ihren Subdomains erlauben (es muss nicht die gleiche Domain sein, auf der die CSP gesetzt ist.)

```http
Content-Security-Policy: default-src 'self' example.com *.example.com
```

### Beispiel 3

Ein Website-Administrator möchte den Benutzern einer Webanwendung erlauben, Bilder aus jedem Ursprung in ihre eigenen Inhalte einzufügen, aber Audio- oder Videomedien auf vertrauenswürdige Anbieter und alle Skripte nur auf einen bestimmten Server, der vertrauenswürdigen Code hostet, beschränken.

```http
Content-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com
```

Hier ist standardmäßig nur Inhalt vom Dokumentursprung erlaubt, mit den folgenden Ausnahmen:

- Bilder können von überall geladen werden (beachten Sie das "\*"-Wildcard).
- Medien sind nur von example.org und example.net erlaubt (und nicht von Subdomains dieser Seiten).
- Ausführbare Skripte sind nur von userscripts.example.com erlaubt.

### Beispiel 4

Ein Website-Administrator für eine Online-Banking-Site möchte sicherstellen, dass alle Inhalte mit TLS geladen werden, um zu verhindern, dass Angreifer die Anfragen abhören.

```http
Content-Security-Policy: default-src https://onlinebanking.example.com
```

Der Server erlaubt den Zugriff nur auf Dokumente, die spezifisch über HTTPS durch den einzelnen Ursprung onlinebanking.example.com geladen werden.

### Beispiel 5

Ein Website-Administrator einer Webmail-Site möchte HTML in E-Mails zulassen sowie Bilder von überall laden, aber JavaScript oder andere potenziell gefährliche Inhalte dürfen nur aus demselben Ursprung wie der E-Mail-Server stammen.

```http
Content-Security-Policy: default-src 'self' *.example.com; img-src *
```

Beachten Sie, dass dieses Beispiel keine {{CSP("script-src")}} spezifiziert, daher wird die {{CSP("default-src")}}-Richtlinie als Rückfalloption für JavaScript-Quellen verwendet.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Bericht-Only-Modus bereitgestellt werden. Die Richtlinie wird nicht erzwungen, aber alle Verstöße werden an eine angegebene URI gemeldet. Zusätzlich kann ein Bericht-Only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie wie folgt festzulegen:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header als auch ein {{HTTPHeader("Content-Security-Policy")}}-Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt. Die im `Content-Security-Policy`-Header angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only`-Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

## Meldung von Verstößen

Die empfohlene Methode zur Meldung von CSP-Verletzungen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), wobei Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer von ihnen als Ziel für CSP-Meldungen mithilfe der {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers angegeben wird.

> [!WARNING]
> Sie können auch die CSP-{{CSP("report-uri")}}-Direktive verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben. Dies sendet ein leicht abweichendes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`. Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird. Weitere Informationen zu diesem Ansatz finden Sie im Thema {{CSP("report-uri")}}.

Ein Server kann Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er den HTTP-Antwort-Header {{HTTPHeader("Reporting-Endpoints")}} verwendet. Dieser Header definiert ein oder mehrere Endpunkt-URLs als kommaseparierte Liste. Zum Beispiel, um einen Meldeendpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwort-Header des Servers so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten behandeln, würden Sie sie so angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Dann können Sie die `Content-Security-Policy`-Header-Direktive {{CSP("report-to")}} verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll. Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für die `default-src` zu senden, könnten Sie Antwort-Header senden, die wie folgt aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn eine CSP-Verletzung auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts, das eine `type`-Eigenschaft mit einem Wert von `"csp-violation"` enthält, und ein `body`, das die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte im angegebenen JSON-Format und Content-Type zu empfangen. Der Server, der diese Anfragen behandelt, kann die eingehenden Berichte dann speichern oder in einer Weise verarbeiten, die Ihren Bedürfnissen am besten entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

Es gibt eine spezifische Inkompatibilität in einigen Versionen des Safari-Webbrowsers, bei der ein Content Security Policy Header gesetzt ist, aber kein Same Origin Header, wodurch der Browser selbst gehostete Inhalte und externe Inhalte blockiert und fälschlicherweise meldet, dass dies auf die Content Security Policy zurückzuführen ist, die den Inhalt nicht erlaubt.

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP Header
- {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP Header
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [CSP in Web Workers](/de/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluieren Sie Ihre Content Security Policy
