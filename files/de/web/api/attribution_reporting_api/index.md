---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen – zum Beispiel, wenn ein Benutzer auf eine auf einer Website eingebettete Anzeige klickt und dann auf der Website des Anbieters das Produkt kauft – und anschließend Berichte über diese Konversionen zu erhalten. Dies geschieht, ohne auf Drittanbieter-Tracking-Cookies angewiesen zu sein.

## Konzepte und Nutzung

Werbetreibende wollen in der Regel messen, wie viele Benutzer eine Anzeige sehen und dann ein Produkt ansehen und kaufen (Konversionen). So können sie herausfinden, welche Werbeplatzierungen ihnen den größten Return on Investment (ROI) bieten, damit sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Messung von Konversionen umfasst normalerweise die Erfassung von Daten wie:

- Welche Benutzer konvertiert haben (zum Beispiel ein Produkt gekauft oder sich für einen Dienst angemeldet haben) und wie viele.
- Die geografischen Regionen, in denen sie sich befinden.
- Auf welchen Websites die Anzeigen platziert wurden.
- Wie viele Produkte verkauft wurden, Dienste angemeldet wurden, etc.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mit Hilfe von Drittanbieter-Tracking-Cookies gemessen. Eine Anzeige wird typischerweise auf einer Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie mit Informationen über den Benutzer und seine Interaktion mit der Anzeige setzen kann.

Später, wenn der Benutzer die Website des Werbetreibenden besucht, vorausgesetzt, es handelt sich um dieselbe Domain wie die der Anzeige, kann diese Website auf das zuvor von der Anzeige gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann die Daten der Anzeige mit seinen eigenen Erstanbieterdaten verknüpfen, um Fragen wie "Hat der Benutzer ein Produkt gekauft, nachdem er mit einer Anzeige für das Produkt von einer anderen Website interagiert hat?" zu beantworten.

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) der Benutzer. Zu diesem Zeitpunkt kann jede Seite derselben Domain auf dieses Cookie zugreifen, plus Informationen von Websites, die diese Seiten einbetten. Eine überraschend große Anzahl von Parteien wird in der Lage sein, auf diese Daten zuzugreifen und andere Daten über den Benutzer basierend auf seinen Browsergewohnheiten abzuleiten.

Die Attribution Reporting API bietet eine Möglichkeit, Anzeigenkonversionen auf eine Art und Weise zu messen, die die Privatsphäre der Benutzer schützt.

### Wie funktioniert es?

Lassen Sie uns anhand eines Beispiels erläutern, wie die Attribution Reporting API funktioniert.

Angenommen, wir haben einen Online-Shop, `shop.example` (alias der Werbetreibende), der eine Anzeige für eines seiner Produkte auf einer Content-Site, `news.example` (alias der Publisher), einbettet. Der Anzeigeninhalt befindet sich auf `ad.shop.example`.

Die Online-Shop-Besitzer möchten messen, wie viele Konversionen sie von Benutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website besuchen und das Produkt in ihren Warenkorb legen.

![Bildliche Darstellung der unten beschriebenen Schritte](ara-flow.png)

Die Schritte sind wie folgt:

1. Wenn ein Benutzer die Seite `news.example` besucht, kann eine **Attributionsquelle** für spezifische Benutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt mehrere Möglichkeiten, wie ein Benutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Anzeigenauslösung eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header senden, um anzugeben, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header enthält. Die Attributionsquelle kann zum Beispiel sein:
   - Ein Link. In diesem Fall ist die Interaktion, dass der Benutzer auf den Link klickt (direkt über ein {{htmlelement("a")}} Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open) Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild, wie ein Werbebanner oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion, dass der Benutzer die Seite besucht. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanforderung reagiert.
   - Ein Fetch-Request (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist – zum Beispiel könnte der Fetch-Request durch ein `click` oder `submit` Event initiiert werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Interaktion mit der Attributionsquelle erfolgt, werden die Quelldaten, die im {{httpheader("Attribution-Reporting-Register-Source")}} Header zurückgegeben werden, in einem privaten lokalen Cache gespeichert, der nur vom Browser zugänglich ist. Diese Daten umfassen die kontextuellen und erstparteiischen Daten, die der Seite und dem Werbetreibenden zur Verfügung stehen, den Ursprung des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt, und ein oder mehrere Ziele ({{Glossary("eTLD", "eTLD+1")}}s), bei denen Sie die Konversion von dieser Anzeige erwarten (d.h. die Seite(n) des Werbetreibenden, zum Beispiel `shop.example`).
3. Wenn der Benutzer später `shop.example` besucht, kann diese Seite einen **Attributionstrigger** registrieren, wenn eine Interaktion darauf hindeutet, dass eine Konversion stattgefunden hat (zum Beispiel klickt der Benutzer auf den "In den Warenkorb" Button auf `shop.example`). Der Browser sendet dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header, um anzugeben, dass die Antwort berechtigt ist, einen Attributionstrigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}} Header enthält. Der Attributionstrigger kann zum Beispiel sein:
   - Ein Bild, wie ein Warenkorb-Icon oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion, dass der Benutzer die Seite besucht. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanforderung reagiert.
   - Ein Fetch-Request (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist – zum Beispiel könnte der Fetch-Request durch ein `click` oder `submit` Event initiiert werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Auslösung des Triggers abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger) Header mit einem Quelldateneintrag abzugleichen, der im privaten lokalen Cache gespeichert ist (siehe 2.). Siehe [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für Abgleichmethodik und Anforderungen.
5. Wenn ein Abgleich erfolgt, sendet der Browser Berichtsdatensätze an einen Endpunkt auf einem Berichtsserver, der normalerweise dem Ad-Tech-Anbieter gehört, wo sie sicher analysiert werden können. Im Gegensatz zu Cookies sind die Daten nur für die spezifische Seite verfügbar, an die Sie sie senden - es werden keine Daten anderswo geteilt. Diese Berichte können entweder sein:
   - **Ereignisbasierte Berichte**: Berichte basierend auf einem Attributionsquellenereignis, bei dem detaillierte Quelldaten mit groben Triggerdaten verknüpft sind. Zum Beispiel könnte ein Bericht aussehen wie "Click ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`", wobei "Click ID 200498" die detaillierten Quelldaten sind und "Kauf" die groben Triggerdaten sind. Die detaillierten Quelldaten können erstparteiische oder kontextuelle Daten von der Quellseite codieren, und die Triggerdaten können das Ereignis von der Auslöseseite codieren.
   - **Zusammenfassende Berichte**: Detailliertere Berichte, die Daten aus mehreren Konversionen auf sowohl der Quell- als auch der Auslöseseite kombinieren. Zum Beispiel "Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Benutzern in Italien geführt, mit einem Gesamtumsatz von 9540 $." Das Erstellen eines zusammenfassenden Berichts erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Implementierung der für die obigen Schritte erforderlichen Funktionalitäten, siehe:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Erstellung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen, speziellen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc` Eigenschaft ermöglicht es Ihnen, das `attributionsrc` Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}} und {{htmlelement("script")}} Elementen programmatisch zu lesen und zu setzen. Es spiegelt den Wert dieses Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor, die `attributionReporting` Option
  - : Beim Erzeugen einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) zeigt dies an, dass die Antwort in der Lage sein soll, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Beim Erzeugen einer Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zeigt dies an, dass die Antwort in der Lage sein soll, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc` Feature-Schlüsselwort
  - : Verursacht den Abschluss der Registrierung einer Attributionsquelle _und_ löst aus, dass der Browser die zugeordneten Quelldaten speichert (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt), wenn die `open()` Methode abgeschlossen ist. Beachten Sie, dass `Window.open()` Aufrufe nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc` Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der zugehörigen Ressourcenanfrage sendet. Serverseitig wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributionstriggers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver zur Ressource angeben möchten, auf den das `src` Attribut verweist. Beachten Sie, dass `<a>` Elemente nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die anzeigt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die eine Seitenfunktion als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die eine Seitenfunktion als Attributionstrigger registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} Directive
  - : Kontrolliert, ob das aktuelle Dokument die Attributionsberichterstattung verwenden darf.

## Anmeldung und lokales Testen

Um die Attribution Reporting API in Ihren Websites zu nutzen, müssen Sie dies im [Datenschutz-Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Ablauf zur Antwortzeit blockiert, d.h. die Antwort-Header werden ignoriert und Quellen und Trigger nicht registriert.

Sie können Ihren Attribution Reporting API-Code trotzdem lokal testen, ohne angemeldet zu sein. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwicklerflag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Sehen Sie sich [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung an (siehe auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting](https://privacysandbox.google.com/private-advertising/attribution-reporting/) auf privacysandbox.google.com (2023)
- [Enable conversion measurement](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) auf privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
