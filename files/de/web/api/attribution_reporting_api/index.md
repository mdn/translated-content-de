---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}{{deprecated_header}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Conversions zu messen - zum Beispiel, wenn ein Nutzer auf eine Anzeige auf einer Website klickt und dann das Produkt auf der Seite des Anbieters kauft - und dann Berichte über diese Conversions zu erhalten. Dies geschieht, ohne sich auf Cookies von Drittanbietern zu stützen.

## Konzepte und Verwendung

Werbetreibende wollen oft messen, wie viele Nutzer eine Anzeige sehen und dann ein Produkt ansehen und kaufen (Conversions). Dies erlaubt ihnen herauszufinden, welche Werbeplatzierungen den größten Return on Investment (ROI) bieten, damit sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Messung von Conversions umfasst normalerweise das Erfassen von Daten, wie zum Beispiel:

- Welche Nutzer konvertierten (zum Beispiel ein Produkt kauften oder sich für einen Dienst anmeldeten) und wie viele.
- Die geografischen Regionen, in denen sie sich befinden.
- Auf welchen Websites die Anzeigen platziert wurden.
- Wie viele Produkte verkauft wurden, Dienste abgeschlossen wurden, etc.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Conversion mit Cookies von Drittanbietern gemessen. Eine Anzeige wird in der Regel auf einer Webseite in einem {{htmlelement("iframe")}} eingebettet, welches ein Cookie setzen kann, das Informationen über den Nutzer und seine Interaktion mit der Anzeige enthält.

Später, wenn der Nutzer sich entscheidet, die Seite des Werbetreibenden zu besuchen, kann diese, sofern sie von derselben Domain stammt wie die Anzeige, auf das zuvor von der Anzeige gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann dann die Daten von der Anzeige mit seinen eigenen Erstanbieterdaten verknüpfen, um Fragen wie "Hat der Nutzer ein Produkt gekauft, nachdem er eine Anzeige für das Produkt auf einer anderen Seite gesehen hat?" zu beantworten.

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) des Nutzers. Zu diesem Zeitpunkt kann jede Seite von derselben Domain auf dieses Cookie zugreifen sowie auf Informationen von Seiten, die diese Seiten einbetten. Eine überraschend große Anzahl von Parteien wird in der Lage sein, auf diese Daten zuzugreifen und andere Daten über den Nutzer basierend auf seinen Surfgewohnheiten abzuleiten.

Die Attribution Reporting API bietet eine Möglichkeit, Anzeigen-Conversions in einer Weise zu messen, die die Privatsphäre der Nutzer schützt.

### Wie funktioniert es?

Lassen Sie uns illustrieren, wie die Attribution Reporting API funktioniert, anhand eines Beispiels.

Angenommen, wir haben einen Online-Shop, `shop.example` (auch bekannt als der Werbetreibende), der eine Anzeige für eines seiner Produkte auf einer Inhaltsseite, `news.example` (auch bekannt als der Publisher), einbettet. Der Werbeinhalt befindet sich unter `ad.shop.example`.

Die Besitzer des Online-Shops möchten messen, wie viele Conversions sie von Nutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Site ansehen und das Produkt in ihren Einkaufswagen legen.

![Darstellung der unten beschriebenen Schritte](/shared-assets/images/diagrams/api/attribution-reporting/ara-flow.svg)

Die involvierten Schritte sind wie folgt:

1. Wenn ein Nutzer die Seite `news.example` besucht, kann eine **Attributionsquelle** für spezifische Nutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt mehrere Möglichkeiten, wie ein Nutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Anzeigeneraktion eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header senden, um anzuzeigen, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen angemessenen {{httpheader("Attribution-Reporting-Register-Source")}}-Header enthält. Die Attributionsquelle kann zum Beispiel sein:
   - Ein Link. In diesem Fall ist die Interaktion das Klicken des Nutzers auf den Link (direkt über ein {{htmlelement("a")}}-Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild wie ein Werbebanner oder ein 1x1 Pixel großes Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch der Seite durch den Nutzer. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, was für Ihre App sinnvoll ist - beispielsweise könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Interaktion mit der Attributionsquelle stattfindet, werden die Quelle-Daten, die im {{httpheader("Attribution-Reporting-Register-Source")}}-Header zurückgegeben werden, in einem privaten lokalen Cache gespeichert, der nur durch den Browser zugänglich ist. Diese Daten beinhalten die kontextbezogenen und Erstanbieterdaten, die für die Seite und den Werbetreibenden verfügbar sind, die Herkunft des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt, und ein oder mehrere Ziele ({{Glossary("eTLD", "eTLD+1")}}s), bei denen Sie erwarten, dass die Konversion durch diese Anzeige stattfindet (z. B. die Seite(n) des Werbetreibenden, zum Beispiel `shop.example`).
3. Wenn der Nutzer später `shop.example` besucht, kann diese Seite einen **Attribution-Trigger** registrieren, wenn eine Interaktion darauf hindeutet, dass eine Konversion stattgefunden hat (zum Beispiel, wenn der Nutzer auf `shop.example` auf die Schaltfläche "In den Warenkorb" klickt). Der Browser sendet dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header, um anzuzeigen, dass die Antwort berechtigt ist, einen Attribution-Trigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen angemessenen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header enthält. Der Attribution-Trigger kann zum Beispiel sein:
   - Ein Bild wie ein Einkaufswagensymbol oder ein 1x1 Pixel großes Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch der Seite durch den Nutzer. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, was für Ihre App sinnvoll ist - beispielsweise könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Attributierung des Triggers abgeschlossen ist, versucht der Browser, die Daten vom [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger)-Header mit einem Quellendatensatz im privaten lokalen Cache (siehe 2.) abzugleichen. Siehe [Registrierung von Attributions-Triggers](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für die Abgleichmethodik und Anforderungen.
5. Wenn eine Übereinstimmung gefunden wird, sendet der Browser Berichts-Daten zu einem Endpunkt auf einem Berichtsserver, der typischerweise dem Ad-Tech-Anbieter gehört, wo sie sicher analysiert werden können. Anders als bei Cookies sind die Daten nur für die spezifische Seite verfügbar, an die Sie sie senden - es werden keine Daten anderweitig geteilt. Diese Berichte können entweder sein:
   - **Ereignis-Level-Berichte**: Berichte basierend auf einem Attributionsquellen-Ereignis, bei denen detaillierte Quell-Daten mit groben Trigger-Daten verknüpft werden. Zum Beispiel könnte ein Bericht wie folgt aussehen: "Klick-ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`", wobei "Klick-ID 200498" die detaillierten Quell-Daten sind und "Kauf" die groben Trigger-Daten sind. Die detaillierten Quell-Daten können Erstanbieter- oder kontextbezogene Daten von der Quell-Seite kodieren, und die Trigger-Daten können das Ereignis von der Trigger-Seite kodieren.
   - **Zusammenfassende Berichte**: Detailliertere Berichte, die Daten von mehreren Konversionen sowohl auf der Quell- als auch auf der Trigger-Seite kombinieren. Zum Beispiel: "Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Nutzern in Italien geführt, mit einem Gesamtumsatz von $9540." Das Erstellen eines zusammenfassenden Berichts erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Implementierung der für die obigen Schritte erforderlichen Funktionalität, siehe:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attributions-Triggers](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Generierung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc`-Eigenschaft erlaubt Ihnen, das `attributionsrc`-Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}} und {{htmlelement("script")}}-Elementen programmatisch zu erhalten und zu setzen. Sie spiegelt den Wert dieses Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor, die Option `attributionReporting`
  - : Wenn Sie eine Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) generieren, gibt dies an, dass Sie möchten, dass die Antwort eine Attributionsquelle oder einen Trigger registrieren kann.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Wenn Sie eine Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) generieren, gibt dies an, dass Sie möchten, dass die Antwort eine Attributionsquelle oder einen Trigger registrieren kann.
- [`Window.open()`](/de/docs/Web/API/Window/open), das Schlüsselwort `attributionsrc`
  - : Verursacht den Abschluss der Registrierung einer Attributionsquelle _und_ veranlasst den Browser, die zugehörigen Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader angegeben), wenn die `open()`-Methode abgeschlossen wird. Beachten Sie, dass `Window.open()`-Aufrufe nicht zur Registrierung von Attributions-Triggers verwendet werden können.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc`-Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der zugehörigen Ressourcenanfrage sendet. Serverseitig wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributions-Triggers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver für die Ressource angeben möchten, auf die das `src`-Attribut zeigt. Beachten Sie, dass `<a>`-Elemente nicht zur Registrierung von Attributions-Triggers verwendet werden können.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die angibt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attribution-Trigger registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}}-Direktive
  - : Kontrolliert, ob das aktuelle Dokument die Attribution-Reporting-Funktion verwenden darf.

## Anmeldung und lokales Testen

Um die Attribution Reporting API auf Ihren Seiten zu verwenden, müssen Sie sie im [Anmeldeprozess der Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Ablauf zur Antwortzeit blockiert, d.h. die Antwort-Header werden ignoriert und Quellen und Trigger werden nicht registriert.

Sie können Ihren Attribution Reporting API-Code immer noch lokal testen, ohne angemeldet zu sein. Um lokales Testen zu erlauben, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Siehe [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung (sehen Sie sich auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting](https://privacysandbox.google.com/private-advertising/attribution-reporting/) auf privacysandbox.google.com (2023)
- [Enable conversion measurement](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) auf privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
