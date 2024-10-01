---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{HTTPSidebar}}

**Content Security Policy** ({{Glossary("CSP", "CSP")}}) ist eine zusätzliche Sicherheitsebene, die hilft, bestimmte Arten von Angriffen zu erkennen und zu mindern, einschließlich Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) und Dateninjektionsangriffen. Diese Angriffe werden für alles Mögliche genutzt, von Datendiebstahl über Webseitenschändung bis hin zur Malware-Verteilung.

CSP ist so konzipiert, dass es vollständig abwärtskompatibel ist (außer CSP Version 2, wo einige explizit erwähnte Inkonsistenzen in der Abwärtskompatibilität bestehen; mehr Details [hier](https://www.w3.org/TR/CSP2/) Abschnitt 1.1). Browser, die es nicht unterstützen, funktionieren weiterhin mit Servern, die es implementieren, und umgekehrt. Browser, die CSP nicht unterstützen, ignorieren es und funktionieren wie gewohnt; sie wenden nur die Schutzmaßnahmen der standardmäßigen [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) an, ohne die zusätzlichen Einschränkungen, die CSP hinzufügen würde.

Um CSP zu aktivieren, müssen Sie Ihren Webserver so konfigurieren, dass er den HTTP-Header {{HTTPHeader("Content-Security-Policy")}} zurückgibt. (Manchmal wird auch der `X-Content-Security-Policy` Header erwähnt, aber das ist eine ältere Version und muss nicht mehr angegeben werden.)

Alternativ kann das {{HTMLElement("meta")}} Element verwendet werden, um eine Richtlinie zu konfigurieren, zum Beispiel:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';" />
```

> [!NOTE]
> Einige Funktionen, wie das Senden von CSP-Verstoßberichten, sind nur verfügbar, wenn die HTTP-Header verwendet werden.

## Bedrohungen

### Abmilderung von Cross-Site Scripting

Ein Hauptziel von CSP ist es, XSS-Angriffe zu mindern und zu melden. XSS-Angriffe nutzen das Vertrauen des Browsers in den vom Server erhaltenen Inhalt aus. Schädliche Skripte werden vom Browser des Opfers ausgeführt, weil der Browser der Quelle des Inhalts vertraut, selbst wenn sie nicht von dem stammt, woher sie zu stammen scheint.

CSP ermöglicht es Serveradministratoren, die Vektoren, durch die XSS auftreten kann, zu reduzieren oder zu eliminieren, indem sie die Domains spezifizieren, die der Browser als gültige Quellen ausführbarer Skripte betrachten soll. Ein mit CSP kompatibler Browser führt dann nur Skripte aus, die in Quelldateien geladen sind, die von diesen erlaubten Domains empfangen wurden, und ignoriert alle anderen Skripte (einschließlich Inline-Skripte und HTML-Attribute zur Ereignisbehandlung).

Als ultimative Schutzmaßnahme können Sites, die niemals das Ausführen von Skripten zulassen wollen, wählen, das Ausführen von Skripten global zu verbieten.

### Abmilderung von Paketsniffing-Angriffen

Zusätzlich zur Beschränkung der Domains, von denen Inhalte geladen werden können, kann der Server auch spezifizieren, welche Protokolle verwendet werden dürfen; zum Beispiel (und idealerweise aus einer Sicherheitsperspektive) kann ein Server angeben, dass alle Inhalte über HTTPS geladen werden müssen. Eine vollständige Strategie für die Datensicherheit beim Übertragen von Daten umfasst nicht nur die Durchsetzung von HTTPS für die Datenübertragung, sondern auch das Markieren aller [Cookies mit dem `secure` Attribut](/de/docs/Web/HTTP/Cookies) und Bereitstellung von automatischen Weiterleitungen von HTTP-Seiten zu ihren HTTPS-Äquivalenten. Sites können auch den {{HTTPHeader("Strict-Transport-Security")}} HTTP-Header verwenden, um sicherzustellen, dass sich Browser nur über einen verschlüsselten Kanal mit ihnen verbinden.

## Nutzung von CSP

Die Konfiguration von Content Security Policy beinhaltet das Hinzufügen des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers zu einer Webseite und das Zuweisen von Werten, die steuern, welche Ressourcen der Benutzeragent für diese Seite laden darf. Beispielsweise könnte eine Seite, die Bilder hochlädt und anzeigt, Bilder von überall zulassen, aber eine Formularaktion auf einen bestimmten Endpunkt beschränken. Eine richtig gestaltete Content Security Policy hilft, eine Seite gegen einen Cross-Site Scripting Angriff zu schützen. Dieser Artikel erklärt, wie solche Header korrekt konstruiert werden und gibt Beispiele.

### Spezifizierung Ihrer Richtlinie

Sie können den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header verwenden, um Ihre Richtlinie zu spezifizieren, so:

```http
Content-Security-Policy: policy
```

Die Richtlinie ist eine Zeichenfolge, die die Richtlinienbeschreibungen Ihrer Content Security Policy enthält.

### Erstellung einer Richtlinie

Eine Richtlinie wird durch eine Reihe von Richtliniendirektiven beschrieben, von denen jede die Richtlinie für eine bestimmte Ressourcentyp oder einen Richtlinienbereich beschreibt. Ihre Richtlinie sollte eine {{CSP("default-src")}} Richtliniendirektive enthalten, die als Fallback für andere Ressourcentypen dient, wenn diese keine eigenen Richtlinien haben (für eine vollständige Liste siehe die Beschreibung der {{CSP("default-src")}} Direktive). Eine Richtlinie muss eine {{CSP("default-src")}} oder {{CSP("script-src")}} Direktive enthalten, um das Ausführen von Inline-Skripten zu verhindern sowie die Nutzung von `eval()` zu blockieren. Eine Richtlinie muss eine {{CSP("default-src")}} oder {{CSP("style-src")}} Direktive enthalten, um zu verhindern, dass Inline-Stile von einem {{HTMLElement("style")}} Element oder einem `style` Attribut angewendet werden. Es gibt spezifische Direktiven für eine Vielzahl von Artikeltypen, sodass jeder Typ seine eigene Richtlinie haben kann, einschließlich Schriftarten, Frames, Bilder, Audio- und Videomedien, Skripte und Worker.

Für eine vollständige Liste der Richtliniendirektiven, siehe die Referenzseite für den [Content-Security-Policy Header](/de/docs/Web/HTTP/Headers/Content-Security-Policy).

## Beispiele: Häufige Anwendungsfälle

Dieser Abschnitt bietet Beispiele für einige gängige Sicherheitsrichtlinienszenarien.

### Beispiel 1

Ein Webseitenadministrator möchte, dass alle Inhalte aus dem eigenen Ursprung der Seite stammen (dies schließt Unterdomains aus.)

```http
Content-Security-Policy: default-src 'self'
```

### Beispiel 2

Ein Webseitenadministrator möchte Inhalte von einer vertrauenswürdigen Domain und allen ihren Subdomains erlauben (es muss nicht dieselbe Domain sein, auf der CSP gesetzt ist.)

```http
Content-Security-Policy: default-src 'self' example.com *.example.com
```

### Beispiel 3

Ein Webseitenadministrator möchte den Nutzern einer Webanwendung erlauben, Bilder aus beliebigen Ursprüngen in ihren eigenen Inhalten einzufügen, aber Audio- oder Videomedien nur auf vertrauenswürdige Anbieter zu beschränken, und alle Skripte nur auf einen bestimmten Server, der vertrauenswürdigen Code hostet.

```http
Content-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com
```

Hier ist standardmäßig nur Inhalt von dem Ursprung des Dokuments erlaubt, mit den folgenden Ausnahmen:

- Bilder können von überall geladen werden (beachten Sie das "\*" Platzhalterzeichen).
- Medien sind nur von example.org und example.net erlaubt (und nicht von Subdomains dieser Seiten).
- Ausführbares Skript ist nur von userscripts.example.com erlaubt.

### Beispiel 4

Ein Webseitenadministrator für eine Online-Banking-Seite möchte sicherstellen, dass alle Inhalte mithilfe von TLS geladen werden, um zu verhindern, dass Angreifer Anfragen abhören.

```http
Content-Security-Policy: default-src https://onlinebanking.example.com
```

Der Server erlaubt den Zugriff nur auf Dokumente, die speziell über HTTPS vom einzelnen Ursprung onlinebanking.example.com geladen werden.

### Beispiel 5

Ein Webseitenadministrator einer Webmail-Seite möchte HTML in E-Mails erlauben sowie Bilder, die von überall geladen werden, aber JavaScript oder andere potenziell gefährliche Inhalte dürfen nur vom gleichen Ursprung wie der Mailserver kommen.

```http
Content-Security-Policy: default-src 'self' *.example.com; img-src *
```

Beachten Sie, dass dieses Beispiel keine {{CSP("script-src")}} Spezifizierung enthält, sodass die {{CSP("default-src")}} Direktive für JavaScript-Quellen als Fallback verwendet wird.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Report-Only-Modus eingesetzt werden. Die Richtlinie wird nicht durchgesetzt, aber Verstöße werden an eine angegebene URI gemeldet. Zusätzlich kann ein Report-Only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie wie folgt zu spezifizieren:

```http
Content-Security-Policy-Report-Only: policy
```

Sind sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden, werden beide Richtlinien beachtet. Die im `Content-Security-Policy` Header spezifizierte Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte erstellt, aber nicht durchgesetzt wird.

## Verstoßberichterstattung

Die empfohlene Methode zur Meldung von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), wobei Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer von ihnen als CSP-Meldungsziel mit der {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers festgelegt wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verstoßberichte anzugeben. Dies sendet ein leicht abweichendes JSON-Report-Format über eine `POST` Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`. Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird. Für weitere Informationen zu diesem Ansatz siehe das Thema {{CSP("report-uri")}}.

Ein Server kann Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader verwendet. Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste. Um zum Beispiel einen Berichterstattungsendpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwortheader des Servers so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Berichtstypen verarbeiten, würden Sie sie so angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll. Um beispielsweise CSP-Verstoßberichte an `https://example.com/csp-reports` für den `default-src` zu senden, könnten Sie Antwortheader folgendermaßen senden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Bei einem CSP-Verstoß sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt mittels einer HTTP `POST` Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts, das eine `type` Eigenschaft mit dem Wert `"csp-violation"` und einen `body` enthält, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte mit dem gegebenen JSON-Format und Inhaltstyp zu empfangen. Der Server, der diese Anfragen verarbeitet, kann die eingehenden Berichte dann in einer Weise speichern oder verarbeiten, die Ihren Bedürfnissen am besten entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätshinweise

In einigen Versionen des Safari-Browsers existiert eine spezifische Inkompatibilität, bei der, wenn ein Content Security Policy Header gesetzt ist, aber kein Same Origin Header, der Browser selbst gehostete Inhalte und Inhalte von externen Seiten blockiert und fälschlicherweise berichtet, dass dies auf die Content Security Policy zurückzuführen ist, die die Inhalte nicht zulässt.

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP-Header
- {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header
- [Content Security in WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [CSP in Web Workers](/de/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluieren Sie Ihre Content Security Policy
