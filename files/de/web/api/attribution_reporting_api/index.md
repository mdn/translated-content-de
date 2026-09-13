---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}{{non-standard_header}}

Die **Attribution Reporting API** ermöglicht Entwicklern, Conversions zu messen – zum Beispiel, wenn ein Benutzer auf eine Anzeige auf einer Website klickt und dann auf der Website des Verkäufers das Produkt erwirbt – und Berichte über diese Conversions abzurufen. Dies geschieht ohne den Einsatz von Drittanbieter-Tracking-Cookies.

## Konzepte und Verwendung

Werbetreibende möchten häufig messen, wie viele Nutzer eine Anzeige sehen und anschließend ein Produkt ansehen und kaufen (Conversions). Dies ermöglicht ihnen herauszufinden, welche Werbeplatzierungen ihnen den größten Return on Investment (ROI) liefern, sodass sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Conversion-Messung umfasst in der Regel das Erfassen von Daten wie:

- Welche Nutzer konvertierten (zum Beispiel ein Produkt kauften oder sich für einen Dienst registrierten), und wie viele.
- In welchen geografischen Regionen sie sich befinden.
- Auf welchen Websites die Anzeigen geschaltet wurden.
- Wie viele Produkte verkauft wurden, für welche Dienstleistungen sich registriert wurde usw.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Conversion mithilfe von Drittanbieter-Tracking-Cookies gemessen. Eine Anzeige wird typischerweise auf einer Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie mit Informationen über den Nutzer und seine Interaktion mit der Anzeige setzen kann.

Später kann, wenn der Nutzer beschließt, die Website des Werbetreibenden zu besuchen, vorausgesetzt, sie gehört zur gleichen Domain wie die Anzeige, diese Website auf das zuvor von der Anzeige gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann dann die Daten von der Anzeige mit seinen eigenen Erstdaten verknüpfen, um Fragen wie „Hat der Nutzer ein Produkt gekauft, nachdem er auf eine Anzeige für das Produkt auf einer anderen Website interagiert hat?“ zu beantworten.

Dies ist schlecht für den [Datenschutz](/de/docs/Web/Privacy) der Nutzer. Zu diesem Zeitpunkt kann jede Seite derselben Domain auf dieses Cookie zugreifen, plus Informationen von Websites, die diese Seiten einbetten. Eine überraschend große Anzahl von Parteien kann auf diese Daten zugreifen und andere Informationen über den Nutzer basierend auf seinen Surfgewohnheiten ableiten.

Die Attribution Reporting API bietet eine Möglichkeit, Anzeigen-Conversions auf eine Weise zu messen, die die Privatsphäre der Nutzer schützt.

### Wie funktioniert es?

Lassen Sie uns anhand eines Beispiels veranschaulichen, wie die Attribution Reporting API funktioniert.

Angenommen, wir haben einen Online-Shop, `shop.example` (aka der Werbetreibende), der eine Anzeige für eines seiner Produkte auf einer Content-Website, `news.example` (aka der Herausgeber) einbettet. Der Anzeigeninhalt befindet sich unter `ad.shop.example`.

Die Eigentümer des Online-Shops möchten messen, wie viele Conversions sie von Nutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Einkaufswagen legen.

![Bildliche Darstellung der unten beschriebenen Schritte](/shared-assets/images/diagrams/api/attribution-reporting/ara-flow.svg)

Die Schritte umfassen Folgendes:

1. Wenn ein Nutzer die Website `news.example` besucht, kann eine **Attributionsquelle** für spezifische Nutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt mehrere Möglichkeiten, wie ein Nutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Anzeigeninteraktion eine Attributionsquelle registriert, muss die Anzeige eine Anforderung mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header senden, um anzuzeigen, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}-Header enthält. Die Attributionsquelle kann zum Beispiel sein:
   - Ein Link. In diesem Fall ist die Interaktion der Klick des Nutzers auf den Link (direkt über ein {{htmlelement("a")}}-Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf). Die Quelle wird über die Antwort auf die Navigationsanforderung registriert.
   - Ein Bild wie ein Werbebanner oder ein 1x1-Pixel-Tracking-Bild. In diesem Fall ist die Interaktion der Besuch der Seite durch den Nutzer. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanforderung antwortet.
   - Eine Fetch-Anforderung (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist – beispielsweise könnte die Fetch-Anforderung durch ein `click`- oder `submit`-Ereignis aufgerufen werden. Die Quelle wird registriert, sobald die Antwort eintrifft.
2. Wenn die Interaktion mit der Attributionsquelle stattfindet, werden die in dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header zurückgegebenen Quelldaten in einem privaten lokalen Cache gespeichert, der nur vom Browser zugänglich ist. Diese Daten umfassen die kontextuellen und Erstdaten, die der Seite und dem Werbetreibenden zur Verfügung stehen, den Ursprung des Werbetechnologieunternehmens, das die Conversion-Daten sammelt, und eine oder mehrere Zielorte ({{Glossary("registrable_domain", "registrable domains")}}), an denen Sie die Conversion von dieser Anzeige erwarten (d.h. die Website(s) des Werbetreibenden, zum Beispiel `shop.example`).
3. Wenn der Nutzer später `shop.example` besucht, kann diese Website einen **Attributionstrigger** registrieren, wenn eine Interaktion darauf hindeutet, dass eine Conversion stattgefunden hat (zum Beispiel, wenn der Nutzer auf die Schaltfläche "In den Warenkorb" auf `shop.example` klickt). Der Browser sendet dann eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header, um anzuzeigen, dass die Antwort berechtigt ist, einen Attributionstrigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header enthält. Der Attributionstrigger kann zum Beispiel sein:
   - Ein Bild wie ein Einkaufswagensymbol oder ein 1x1-Pixel-Tracking-Bild. In diesem Fall ist die Interaktion der Besuch der Seite durch den Nutzer. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanforderung antwortet.
   - Eine Fetch-Anforderung (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist – beispielsweise könnte die Fetch-Anforderung durch ein `click`- oder `submit`-Ereignis aufgerufen werden. Der Trigger wird registriert, sobald die Antwort eintrifft.
4. Wenn die Triggerattribution abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger)-Header mit einem in dem privaten lokalen Cache gespeicherten Quelldateneintrag abzugleichen (siehe Punkt 2). Siehe [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für die Abgleichsmethodik und Anforderungen.
5. Wenn ein Abgleich erfolgt, sendet der Browser Berichterstattungsdaten an einen Endpunkt auf einem Berichterstattungsserver, der typischerweise dem Werbetechnologieanbieter gehört, wo sie sicher analysiert werden können. Im Gegensatz zu Cookies stehen die Daten nur der spezifischen Site zur Verfügung, an die Sie sie senden – es werden keine Daten anderweitig geteilt. Diese Berichte können entweder sein:
   - **Ereignisbasierte Berichte**: Berichte basierend auf einem Ereignis der Attributionsquelle, bei dem detaillierte Quelldaten mit groben Triggerdaten verbunden sind. Zum Beispiel kann ein Bericht so aussehen: "Click ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`", wobei "Click ID 200498" die detaillierten Quelldaten sind und "Kauf" die groben Triggerdaten. Die detaillierten Quelldaten können Erstdaten oder kontextuelle Daten von der Quellseite encodieren, und die Triggerdaten können das Ereignis von der Triggerseite encodieren.
   - **Zusammenfassende Berichte**: Detailliertere Berichte, die Daten von mehreren Conversions auf beiden, der Quell- und der Triggerebene, kombinieren. Zum Beispiel: "Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Nutzern in Italien geführt, mit einem Gesamterlös von $9540." Das Erstellen eines zusammenfassenden Berichts erfordert die Nutzung eines Aggregationsdienstes (siehe beispielsweise den [Google-Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Implementierung der für die oben genannten Schritte erforderlichen Funktionalität, siehe:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Erstellung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc`-Eigenschaft ermöglicht das programmgesteuerte Abrufen und Setzen des `attributionsrc`-Attributs auf {{htmlelement("a")}}, {{htmlelement("img")}} und {{htmlelement("script")}}-Elementen. Es spiegelt den Wert dieses Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, die `attributionReporting`-Option
  - : Beim Erstellen einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) gibt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Beim Erstellen einer Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc`-Schlüsselwort als Feature
  - : Verursacht den Abschluss der Registrierung einer Attributionsquelle _und_ veranlasst den Browser, die zugehörigen Quelldaten zu speichern (wie sie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader angegeben sind), wenn die `open()`-Methode abgeschlossen ist. Beachten Sie, dass `Window.open()`-Aufrufe nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc`-Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der zugehörigen Ressourcensanforderung sendet. Serverseitig wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributionstriggers ist es nur erforderlich, wenn Sie möchten, dass ein separater Registrierungsserver von der Ressource angegeben wird, auf die das `src`-Attribut zeigt. Beachten Sie, dass `<a>`-Elemente nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anforderung, die angibt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anforderung, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionstrigger registriert. Dies ist Teil einer Antwort auf eine Anforderung, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} Direktive
  - : Kontrolliert, ob das aktuelle Dokument die Verwendung der Attribution Reporting zulässt.

## Registrierung und lokales Testen

Um die Attribution Reporting API auf Ihren Websites zu verwenden, müssen Sie sie im [Anmeldeprozess für die Datenschutz-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Fluss zur Antwortzeit blockiert, d.h. die Antwortheader werden ignoriert und Quellen und Trigger nicht registriert.

Sie können Ihren Attribution Reporting-API-Code weiterhin lokal ohne Registrierung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Entwickler-Flag in Chrome:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Siehe [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung (sehen Sie sich auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validierungstool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution Reporting](https://privacysandbox.google.com/private-advertising/attribution-reporting/) auf privacysandbox.google.com (2023)
- [Conversion-Messung aktivieren](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) auf privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
