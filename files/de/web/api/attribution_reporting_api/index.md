---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Conversions zu messen - zum Beispiel wenn ein Benutzer auf eine in eine Webseite eingebettete Anzeige klickt und das Produkt anschließend auf der Website des Anbieters kauft - und dann Berichte über diese Conversions zu erstellen. Dies geschieht ohne die Verwendung von Drittanbieter-Tracking-Cookies.

## Konzepte und Verwendung

Werbetreibende möchten häufig messen, wie viele Benutzer eine Anzeige sehen und anschließend ein Produkt ansehen und kaufen (Conversions). Dadurch können sie herausfinden, welche Werbeplatzierungen ihnen die größte Rendite (ROI) bringen, um ihre Werbestrategie entsprechend anzupassen. Der Prozess der Messung von Conversions erfasst in der Regel Daten wie:

- Welche Benutzer konvertierten (z.B. ein Produkt gekauft oder sich für einen Dienst angemeldet haben) und wie viele.
- Die geografischen Regionen, in denen sie sich befinden.
- Auf welchen Websites die Anzeigen platziert wurden.
- Wie viele Produkte verkauft, Dienstleistungen angemeldet usw. wurden.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Conversion-Messung mit Hilfe von Drittanbieter-Tracking-Cookies durchgeführt. Eine Anzeige wird typischerweise in eine Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie setzen kann, das Informationen über den Benutzer und seine Interaktion mit der Anzeige enthält.

Wenn der Benutzer später die Website des Werbetreibenden besucht, vorausgesetzt, es handelt sich um dieselbe Domain wie die Anzeige, kann diese Website auf das zuvor von der Anzeige gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann dann die Daten aus der Anzeige mit seinen eigenen Erstanbieterdaten verknüpfen, um Fragen wie "Hat der Benutzer ein Produkt gekauft, nachdem er mit einer Anzeige für das Produkt von einer anderen Website interagiert hat?" zu beantworten.

Dies ist schlecht für die [Datenschutz](/de/docs/Web/Privacy) der Benutzer. Zu diesem Zeitpunkt kann jede Seite von derselben Domain auf dieses Cookie zugreifen, plus Informationen von Websites, die diese Seiten einbetten. Eine überraschend große Anzahl von Parteien kann auf diese Daten zugreifen und andere Daten über den Benutzer anhand seiner Surfgewohnheiten ableiten.

Die Attribution Reporting API bietet eine Möglichkeit, Anzeigencovertionen auf eine Weise zu messen, die die Privatsphäre der Benutzer schützt.

### Wie funktioniert es?

Lassen Sie uns anhand eines Beispiels veranschaulichen, wie die Attribution Reporting API funktioniert.

Angenommen, wir haben einen Online-Shop, `shop.example` (auch eine Werbeanbieter genannt), der eine Anzeige für eines seiner Produkte auf einer Content-Seite, `news.example` (auch ein Publisher genannt), einbettet. Der Anzeigeninhalt befindet sich unter `ad.shop.example`.

Die Besitzer des Online-Shops möchten messen, wie viele Conversions sie von Benutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Warenkorb legen.

![Bildliche Darstellung der unten beschriebenen Schritte](ara-flow.png)

Die Schritte sind wie folgt:

1. Wenn ein Benutzer die `news.example`-Seite besucht, kann eine **Attributionsquelle** für spezifische Benutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt mehrere Möglichkeiten, wie ein Benutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Anzeigeinteraktion eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header senden, um anzugeben, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header enthält. Die Attributionsquelle kann zum Beispiel sein:
   - Ein Link. In diesem Fall ist die Interaktion das Klicken des Benutzers auf den Link (direkt über ein {{htmlelement("a")}} Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open) Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild, wie ein Werbebanner oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch des Benutzers auf der Seite. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion als was auch immer für Ihre App sinnvoll ist spezifiziert werden - zum Beispiel könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Attributionsquellen-Interaktion auftritt, werden die Quelldaten, die im {{httpheader("Attribution-Reporting-Register-Source")}} Header zurückgegeben werden, in einem privaten lokalen Cache gespeichert, der nur vom Browser zugänglich ist. Diese Daten umfassen die kontextbezogenen und erstanbieterbezogenen Daten, die der Seite und dem Werbetreibenden zur Verfügung stehen, den Ursprung des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt, und ein oder mehrere Ziele ({{Glossary("eTLD", "eTLD+1")}}s), an denen Sie die Konversion von dieser Anzeige erwarten (d.h. die Website(s) des Werbetreibenden, z.B. `shop.example`).
3. Wenn der Benutzer später `shop.example` besucht, kann diese Website einen **Attributionstrigger** registrieren, wenn eine Interaktion anzeigt, dass eine Konversion stattgefunden hat (z.B. der Benutzer klickt auf die Schaltfläche "In den Warenkorb" auf `shop.example`). Der Browser sendet dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header, um anzuzeigen, dass die Antwort berechtigt ist, einen Attributionstrigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}} Header enthält. Der Attributionstrigger kann zum Beispiel sein:
   - Ein Bild, wie ein Einkaufswagensymbol oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch des Benutzers auf der Seite. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion als was auch immer für Ihre App sinnvoll ist spezifiziert werden - zum Beispiel könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Trigger-Attribution abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger) Header mit einem Quelldatensatz aus dem privaten lokalen Cache (siehe 2.) abzugleichen. Siehe [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für die Zuordnungsmethodologie und Anforderungen.
5. Wenn ein Match gefunden wird, sendet der Browser Berichtsdaten zu einem Endpunkt auf einem Berichtsserver, der typischerweise im Besitz des Ad-Tech-Anbieters ist, wo sie sicher analysiert werden können. Anders als bei Cookies stehen die Daten nur der spezifischen Website zur Verfügung, an die Sie sie senden - es werden keine Daten anderswo geteilt. Diese Berichte können entweder sein:
   - **Ereignisbezogene Berichte**: Berichte basierend auf einem Attributionsquellen-Ereignis, bei dem detaillierte Quelldaten mit groben Triggerdaten verknüpft werden. Zum Beispiel könnte ein Bericht so aussehen: "Klick-ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`", wobei "Klick-ID 200498" die detaillierten Quelldaten sind, und "Kauf" die groben Triggerdaten sind. Die detaillierten Quelldaten können Erstanbieter- oder kontextbezogene Daten von der Quellseite kodieren, und die Triggerdaten können das Ereignis von der Triggerseite kodieren.
   - **Zusammenfassende Berichte**: Detailliertere Berichte, die Daten aus mehreren Konversionen auf sowohl der Quellen- als auch der Triggerseite kombinieren. Zum Beispiel: "Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Benutzern aus Italien geführt, mit einem Gesamterlös von $9540." Das Erstellen eines zusammenfassenden Berichts erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Implementierung der für die obigen Schritte erforderlichen Funktionen siehe:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Erzeugung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc` Eigenschaft ermöglicht es Ihnen, das `attributionsrc` Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} Elementen programmatisch zu setzen und abzurufen. Sie reflektiert den Wert dieses Attributs.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor, die `attributionReporting` Option
  - : Beim Erzeugen einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) gibt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Beim Erzeugen einer Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc` Feature-Schlüsselwort
  - : Verursacht den Abschluss der Registrierung einer Attributionsquelle _und_ veranlasst den Browser, die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader bereitgestellt) zu speichern, wenn die `open()` Methode abgeschlossen ist. Beachten Sie, dass `Window.open()` Aufrufe nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTML Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc` Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der zugehörigen Ressourcenanfrage sendet. Auf der Serverseite wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributionstriggers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver zur Ressource, auf die das `src` Attribut zeigt, spezifizieren möchten. Beachten Sie, dass `<a>` Elemente nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTTP Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die angibt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenelement als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenelement als Attributionstrigger registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} Direktive
  - : Steuert, ob das aktuelle Dokument Attribution Reporting verwenden darf.

## Registrierung und lokale Tests

Um die Attribution Reporting API auf Ihren Websites verwenden zu können, müssen Sie sie im [Privacy Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) spezifizieren. Wenn Sie dies nicht tun, wird der API-Flow zum Zeitpunkt der Antwort blockiert, d.h. die Antwortheader werden ignoriert und Quellen und Trigger nicht registriert.

Sie können Ihren Attribution Reporting API-Code jedoch weiterhin lokal ohne Registrierung testen. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Siehe [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung (siehe auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/) auf developers.google.com (2023)
- [Aktivierung der Conversion Messung](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/enable-conversion-measurement) auf developers.google.com (2023)
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox/) auf developers.google.com (2023)
