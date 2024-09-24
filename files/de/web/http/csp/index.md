---
title: Content-Security-Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{HTTPSidebar}}

**Content Security Policy** ({{Glossary("CSP")}}) ist eine zusätzliche Sicherheitsschicht, die hilft, bestimmte Arten von Angriffen zu erkennen und zu mindern, einschließlich Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffen. Diese Angriffe werden für alles Mögliche eingesetzt, vom Datendiebstahl über die Verunstaltung von Websites bis hin zur Verteilung von Malware.

CSP ist so konzipiert, dass es vollständig abwärtskompatibel ist (außer CSP Version 2, wo es einige ausdrücklich erwähnte Inkonsistenzen in der Abwärtskompatibilität gibt; mehr Details [hier](https://www.w3.org/TR/CSP2/) Abschnitt 1.1). Browser, die es nicht unterstützen, funktionieren dennoch mit Servern, die es implementieren, und umgekehrt. Browser, die CSP nicht unterstützen, ignorieren es und funktionieren wie gewohnt; sie wenden nur die Schutzmaßnahmen der standardmäßigen [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) an, ohne die zusätzlichen Einschränkungen, die CSP hinzufügen würde.

Um CSP zu aktivieren, müssen Sie Ihren Webserver so konfigurieren, dass er den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header zurückgibt. (Manchmal finden Sie Hinweise auf den `X-Content-Security-Policy`-Header, aber das ist eine ältere Version und Sie müssen diesen nicht mehr angeben.)

Alternativ kann das {{HTMLElement("meta")}}-Element verwendet werden, um eine Richtlinie zu konfigurieren, zum Beispiel:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';" />
```

> [!NOTE]
> Einige Features, wie das Senden von CSP-Verletzungsberichten, sind nur verfügbar, wenn HTTP-Header verwendet werden.

## Bedrohungen

### Cross-Site-Scripting-Angriffe abmildern

Ein Hauptziel von CSP ist es, XSS-Angriffe zu mindern und zu melden. XSS-Angriffe nutzen das Vertrauen des Browsers in den vom Server empfangenen Inhalt aus. Schadskripte werden vom Browser des Opfers ausgeführt, weil der Browser der Quelle des Inhalts vertraut, auch wenn dieser nicht von dem Ort kommt, von dem es scheint zu kommen.

CSP ermöglicht es Serveradministratoren, die Vektoren zu reduzieren oder zu eliminieren, durch die XSS auftreten kann, indem sie die Domains spezifizieren, die der Browser als gültige Quellen von ausführbaren Skripten betrachten soll. Ein CSP-kompatibler Browser führt dann nur Skripte aus, die in Quelldateien geladen sind, die von diesen zugelassenen Domains empfangen werden, und ignoriert alle anderen Skripte (einschließlich Inline-Skripten und HTML-Attributen zur Ereignisbehandlung).

Als ultimative Form des Schutzes können Websites, die niemals die Ausführung von Skripten zulassen wollen, die Ausführung von Skripten global verbieten.

### Abmilderung von Paket-Sniffing-Angriffen

Zusätzlich zur Einschränkung der Domains, von denen Inhalte geladen werden können, kann der Server festlegen, welche Protokolle verwendet werden dürfen; beispielsweise (und idealerweise aus Sicht der Sicherheit) kann ein Server festlegen, dass alle Inhalte über HTTPS geladen werden müssen. Eine vollständige Sicherheitsstrategie für die Datenübertragung umfasst nicht nur die Durchsetzung von HTTPS für die Datenübertragung, sondern auch die Markierung aller [Cookies mit dem `secure` Attribut](/de/docs/Web/HTTP/Cookies) und die Bereitstellung automatischer Umleitungen von HTTP-Seiten zu ihren HTTPS-Gegenstücken. Websites können auch den {{HTTPHeader("Strict-Transport-Security")}} HTTP-Header verwenden, um sicherzustellen, dass Browser nur über einen verschlüsselten Kanal auf sie zugreifen.

## Verwendung von CSP

Die Konfiguration der Content-Security-Policy beinhaltet das Hinzufügen des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers zu einer Webseite und das Festlegen von Werten, die bestimmen, welche Ressourcen der User-Agent für diese Seite laden darf. Zum Beispiel könnte eine Seite, die Bilder hochlädt und anzeigt, Bilder von überall erlauben, jedoch eine Formularaktion auf einen bestimmten Endpunkt beschränken. Eine gut gestaltete Content-Security-Policy hilft, eine Seite vor einem Cross-Site-Scripting-Angriff zu schützen. Dieser Artikel erklärt, wie solche Header korrekt konstruiert werden und bietet Beispiele.

### Spezifizierung Ihrer Richtlinie

Sie können den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header verwenden, um Ihre Richtlinie festzulegen, so:

```http
Content-Security-Policy: policy
```

Die Richtlinie ist ein String, der die Richtliniendirektiven enthält, die Ihre Content-Security-Policy beschreiben.

### Schreiben einer Richtlinie

Eine Richtlinie wird durch eine Reihe von Richtliniendirektiven beschrieben, von denen jede die Richtlinie für einen bestimmten Ressourcentyp oder Richtlinienbereich beschreibt. Ihre Richtlinie sollte eine {{CSP("default-src")}} Richtliniendirektive enthalten, die eine Rückfalloption für andere Ressourcentypen bietet, wenn sie keine eigenen Richtlinien haben (für eine vollständige Liste siehe die Beschreibung der {{CSP("default-src")}} Direktive). Eine Richtlinie muss eine {{CSP("default-src")}} oder {{CSP("script-src")}} Direktive enthalten, um zu verhindern, dass Inline-Skripte ausgeführt werden, sowie die Verwendung von `eval()` zu blockieren. Eine Richtlinie muss eine {{CSP("default-src")}} oder {{CSP("style-src")}} Direktive enthalten, um das Anwenden von Inline-Stilen aus einem {{HTMLElement("style")}}-Element oder einem `style` Attribut zu beschränken. Es gibt spezifische Direktiven für eine Vielzahl von Typen von Elementen, so dass jeder Typ seine eigene Richtlinie haben kann, einschließlich Schriften, Rahmen, Bilder, Audio- und Videomedien, Skripte und Arbeiter.

Für eine vollständige Liste der Richtliniendirektiven siehe die Referenzseite für den [Content-Security-Policy-Header](/de/docs/Web/HTTP/Headers/Content-Security-Policy).

## Beispiele: Häufige Anwendungsfälle

Dieser Abschnitt bietet Beispiele für einige gängige Szenarien der Sicherheitsrichtlinie.

### Beispiel 1

Ein Website-Administrator möchte, dass alle Inhalte von der eigenen Herkunft der Website stammen (dies schließt Subdomains aus.)

```http
Content-Security-Policy: default-src 'self'
```

### Beispiel 2

Ein Website-Administrator möchte Inhalte von einer vertrauenswürdigen Domain und all ihren Subdomains erlauben (es muss nicht die gleiche Domain sein, auf der die CSP eingestellt ist.)

```http
Content-Security-Policy: default-src 'self' example.com *.example.com
```

### Beispiel 3

Ein Website-Administrator möchte es den Benutzern einer Webanwendung ermöglichen, Bilder aus beliebigen Ursprüngen in ihren eigenen Inhalten zu verwenden, Medien wie Audio oder Video jedoch auf vertrauenswürdige Anbieter zu beschränken und alle Skripte nur auf einen bestimmten Server, der vertrauenswürdigen Code hostet.

```http
Content-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com
```

Hier sind standardmäßig nur Inhalte von der Herkunft des Dokuments erlaubt, mit folgenden Ausnahmen:

- Bilder dürfen von überall geladen werden (beachten Sie das "\*" Wildcard).
- Medien sind nur von example.org und example.net erlaubt (und nicht von Subdomains dieser Seiten).
- Ausführbare Skripte sind nur von userscripts.example.com erlaubt.

### Beispiel 4

Ein Website-Administrator einer Online-Banking-Site möchte sicherstellen, dass alle Inhalte mit TLS geladen werden, um zu verhindern, dass Angreifer Anfragen abhören.

```http
Content-Security-Policy: default-src https://onlinebanking.example.com
```

Der Server erlaubt nur den Zugriff auf Dokumente, die speziell über HTTPS über den einzigen Ursprung onlinebanking.example.com geladen werden.

### Beispiel 5

Ein Website-Administrator einer Webmail-Seite möchte HTML in E-Mails zulassen, ebenso wie Bilder, die von überall geladen werden, aber JavaScript oder andere potenziell gefährliche Inhalte dürfen nur aus demselben Ursprung wie der Mail-Server stammen.

```http
Content-Security-Policy: default-src 'self' *.example.com; img-src *
```

Beachten Sie, dass in diesem Beispiel keine {{CSP("script-src")}} angegeben ist, sodass die {{CSP("default-src")}} Direktive als Fallback für JavaScript-Quellen verwendet wird.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Nur-Berichtsmodus bereitgestellt werden. Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an eine bereitgestellte URI gemeldet. Zusätzlich kann ein Nur-Berichts-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie festzulegen, so:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt. Die in den `Content-Security-Policy`-Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only`-Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

## Verletzungsberichte

Die empfohlene Methode zur Meldung von CSP-Verstößen besteht darin, die [Reporting API](/de/docs/Web/API/Reporting_API) zu verwenden, Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} zu deklarieren und einen von ihnen als CSP-Meldungsziel mithilfe der {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers zu spezifizieren.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben. Dies sendet ein etwas anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`. Dieser Ansatz ist veraltet, aber Sie sollten beide angeben, bis {{CSP("report-to")}} in allen Browsern unterstützt wird. Für weitere Informationen über den Ansatz siehe das Thema {{CSP("report-uri")}}.

Ein Server kann Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er die {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader verwendet. Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste. Zum Beispiel könnte der Serverantwort-Header so aussehen, um einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Berichtsarten verwalten, würden Sie sie so spezifizieren:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für Berichte verwendet werden soll. Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für den `default-src` zu senden, könnten Sie Antwortheader senden, die folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serielle Form des {{domxref("Report")}} Objekts, das eine `type` Eigenschaft mit einem Wert von `"csp-violation"` enthält, und einen `body`, der die serielle Form eines {{domxref("CSPViolationReportBody")}} Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte mit dem angegebenen JSON-Format und Inhaltstyp zu empfangen. Der Server, der diese Anfragen verarbeitet, kann dann die eingehenden Berichte in einer Weise speichern oder verarbeiten, die Ihren Bedürfnissen am besten entspricht.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

### Kompatibilitätshinweise

Eine spezifische Inkompatibilität existiert in einigen Versionen des Safari-Webbrowsers, bei der, wenn ein Content-Security-Policy-Header gesetzt ist, aber kein Same-Origin-Header, der Browser selbst gehostete Inhalte und Off-Site-Inhalte blockiert und fälschlicherweise berichtet, dass dies daran liegt, dass die Content-Security-Policy die Inhalte nicht zulässt.

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP-Header
- {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header
- [Content-Sicherheit in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [CSP in Webworkern](/de/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Bewerten Sie Ihre Content-Security-Policy
