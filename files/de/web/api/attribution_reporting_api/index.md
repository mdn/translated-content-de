---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine auf einer Website eingebettete Werbung klickt und dann das Produkt auf der Website des Anbieters kauft — und anschließend Berichte über diese Konversionen zu erhalten. Dies geschieht, ohne auf Tracking-Cookies von Drittanbietern angewiesen zu sein.

## Konzepte und Nutzung

Werbetreibende möchten häufig messen, wie viele Benutzer eine Werbung sehen und dann ein Produkt ansehen und kaufen (Konversionen). Dies ermöglicht es ihnen herauszufinden, welche Werbeplatzierungen ihnen die größte Rendite bieten, sodass sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Konversionsmessung beinhaltet üblicherweise die Erfassung von Daten wie:

- Welche Benutzer konvertiert haben (z.B. ein Produkt gekauft oder sich für einen Dienst angemeldet), und wie viele.
- Die geografischen Regionen, in denen sie ansässig sind.
- Auf welchen Websites die Werbungen platziert wurden.
- Wie viele Produkte verkauft wurden, Dienstleistungen gebucht wurden, etc.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mithilfe von Tracking-Cookies von Drittanbietern gemessen. Eine Werbung wird typischerweise auf einer Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie setzen kann, das Informationen über den Benutzer und seine Interaktion mit der Werbung enthält.

Später, wenn der Benutzer die Website des Werbetreibenden besucht, sofern sie aus derselben Domain wie die Werbung stammt, kann diese Site auf das zuvor von der Werbung gesetzte Cookie zugreifen. Der Werbetreibende kann dann die Daten aus der Werbung mit seinen eigenen First-Party-Daten in Verbindung bringen, um Fragen wie "Hat der Benutzer ein Produkt gekauft, nachdem er mit einer Werbung für das Produkt von einer anderen Website interagiert hat?" zu beantworten.

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) des Benutzers. Zu diesem Zeitpunkt kann jede Seite von derselben Domain auf dieses Cookie zugreifen, sowie Informationen von Sites, die diese Seiten einbetten. Eine überraschend große Anzahl von Parteien wird in der Lage sein, auf diese Daten zuzugreifen und andere Daten über den Benutzer basierend auf dessen Surfverhalten abzuleiten.

Die Attribution Reporting API bietet eine Möglichkeit, Werbekonversionen auf eine Weise zu messen, die die Privatsphäre der Benutzer schützt.

### Wie funktioniert es?

Lassen Sie uns veranschaulichen, wie die Attribution Reporting API funktioniert, anhand eines Beispiels.

Angenommen, wir haben einen Online-Shop, `shop.example` (auch bekannt als der Werbetreibende), der eine Werbung für eines seiner Produkte auf einer Content-Website, `news.example` (auch bekannt als der Publisher), einbettet. Der Werbeinhalte ist unter `ad.shop.example` zu finden.

Die Besitzer des Online-Shops möchten messen, wie viele Konversionen sie von Benutzern erhalten, die mit der Werbung interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Warenkorb legen.

![Bilddarstellung der unten beschriebenen Schritte](ara-flow.png)

Die Schritte sind wie folgt:

1. Wenn ein Benutzer die `news.example`-Site besucht, kann eine **Attributionsquelle** für spezifische Benutzerinteraktionen mit der eingebetteten Werbung registriert werden. Es gibt mehrere Möglichkeiten, wie ein Benutzer mit Werbungen auf der Seite interagieren kann. Damit eine Werbeinteraktion eine Attributionsquelle registriert, muss die Werbung eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header senden, um anzuzeigen, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen passenden {{httpheader("Attribution-Reporting-Register-Source")}} Header enthält. Die Attributionsquelle kann zum Beispiel sein:
   - Ein Link. In diesem Fall ist die Interaktion das Anklicken des Links durch den Benutzer (direkt über ein {{htmlelement("a")}} Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open) Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild wie ein Werbebanner oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch der Seite durch den Benutzer. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (z.B. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, was für Ihre App sinnvoll ist — zum Beispiel könnte die Fetch-Anfrage durch ein `click` oder `submit` Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Attributionsquellen-Interaktion erfolgt, werden die in dem {{httpheader("Attribution-Reporting-Register-Source")}} Header zurückgegebenen Quelldaten in einem privaten lokalen Cache gespeichert, der nur vom Browser zugänglich ist. Diese Daten umfassen die kontextuellen und First-Party-Daten, die der Seite und dem Werbetreibenden zur Verfügung stehen, den Ursprung des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt, und eine oder mehrere Ziele ({{Glossary("eTLD", "eTLD+1")}}s), wo Sie die Konversion von dieser Werbung erwarten (d.h. die Seite(n) des Werbetreibenden, z.B. `shop.example`).
3. Wenn der Benutzer später `shop.example` besucht, kann diese Site einen **Attributionstrigger** registrieren, wenn eine Interaktion darauf hinweist, dass eine Konversion stattgefunden hat (z.B. der Benutzer klickt auf die "In den Warenkorb"-Schaltfläche auf `shop.example`). Der Browser sendet dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header, um anzuzeigen, dass die Antwort berechtigt ist, einen Attributionstrigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen passenden {{httpheader("Attribution-Reporting-Register-Trigger")}} Header enthält. Der Attributionstrigger kann zum Beispiel sein:
   - Ein Bild wie ein Warenkorbsymbol oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch der Seite durch den Benutzer. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (z.B. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, was für Ihre App sinnvoll ist — zum Beispiel könnte die Fetch-Anfrage durch ein `click` oder `submit` Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Attributierung abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger) Header mit einem Quelldatensatz abzugleichen, der im privaten lokalen Cache gespeichert ist (siehe 2.). Siehe [Registrieren von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für die Abgleichmethodik und Anforderungen.
5. Wenn eine Übereinstimmung gefunden wird, sendet der Browser Berichtsdaten an einen Endpunkt auf einem Berichterstellungsserver, der typischerweise dem Ad-Tech-Anbieter gehört, wo sie sicher analysiert werden können. Im Gegensatz zu Cookies sind die Daten nur für die spezifische Seite verfügbar, an die Sie sie senden - es werden keine Daten anderweitig geteilt. Diese Berichte können entweder sein:
   - **Ereignis-Ebene Berichte**: Berichte, die auf einem Attributionsquellen-Ereignis basieren, bei denen detaillierte Quelldaten mit groben Triggerdaten verknüpft sind. Zum Beispiel könnte ein Bericht aussehen wie "Klick-ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`", wobei "Klick-ID 200498" die detaillierten Quelldaten sind und "Kauf" die groben Triggerdaten sind. Die detaillierten Quelldaten können First-Party- oder kontextuelle Daten von der Quellseite codieren, und die Triggerdaten können das Ereignis von der Triggerseite codieren.
   - **Zusammenfassende Berichte**: Ausführlichere Berichte, die Daten aus mehreren Konversionen sowohl auf der Quell- als auch auf der Triggerseite kombinieren. Zum Beispiel "Kampagnen-ID 774653 auf `news.example` hat 654 Verkäufe von Widgets auf `shop.example` von Benutzern in Italien erzielt, mit einem Gesamtumsatz von 9540 $." Das Erstellen eines zusammenfassenden Berichts erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Implementierung der für die obigen Schritte erforderlichen Funktionalität siehe:

1. [Registrieren von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrieren von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Erstellung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc` Eigenschaft ermöglicht es Ihnen, das `attributionsrc` Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} Elementen programmatisch zu lesen und zu setzen. Es spiegelt den Wert dieses Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor, die `attributionReporting` Option
  - : Beim Erstellen einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) wird damit angegeben, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Beim Erstellen einer Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wird damit angegeben, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc` Feature-Keyword
  - : Verursacht das Abschließen der Registrierung einer Attributionsquelle _und_ veranlasst den Browser, die zugehörigen Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt), wenn die `open()` Methode abgeschlossen wird. Beachten Sie, dass `Window.open()` Aufrufe nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc` Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der zugehörigen Ressourcenanforderung sendet. Serverseitig wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen. Beim Registrieren einer Attributionsquelle ist dies erforderlich; beim Registrieren eines Attributionstriggers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver zur Ressource angeben möchten, auf die das `src` Attribut verweist. Beachten Sie, dass `<a>` Elemente nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die angibt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionstrigger registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} Direktive
  - : Kontrolliert, ob das aktuelle Dokument berechtigt ist, Attribution Reporting zu verwenden.

## Einschreibung und lokale Tests

Um die Attribution Reporting API auf Ihren Websites zu verwenden, müssen Sie sie im [Privacy Sandbox-Einschreibungsverfahren](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Ablauf zur Antwortzeit blockiert, d.h. die Antwort-Header werden ignoriert und Quellen und Trigger nicht registriert.

Sie können Ihren Attribution Reporting API-Code dennoch lokal testen, ohne sich einzuschreiben. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Sehen Sie sich [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung an (siehe auch den [Quellcode hier](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution Reporting](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/) auf developers.google.com (2023)
- [Aktivieren der Konversionsmessung](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/enable-conversion-measurement) auf developers.google.com (2023)
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox/) auf developers.google.com (2023)
