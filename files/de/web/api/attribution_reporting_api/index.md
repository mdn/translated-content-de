---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}{{deprecated_header}}{{non-standard_header}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine auf einer Seite eingebettete Anzeige klickt und dann auf der Website des Anbieters den Artikel kauft — und anschließend Berichte über diese Konversionen abzurufen. Dies geschieht ohne den Einsatz von Drittanbieter-Tracking-Cookies.

## Konzepte und Nutzung

Werbetreibende möchten häufig messen, wie viele Benutzer eine Anzeige sehen und dann ein Produkt ansehen und kaufen (Konversionen). Auf diese Weise können sie ermitteln, welche Werbeplatzierungen ihnen die größte Kapitalrendite (ROI) bieten, damit sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Messung von Konversionen umfasst in der Regel das Erfassen von Daten wie:

- Welche Benutzer konvertiert haben (zum Beispiel einen Artikel gekauft oder sich für einen Dienst angemeldet haben) und wie viele.
- Die geografischen Regionen, in denen sie ansässig sind.
- Auf welchen Websites die Anzeigen geschaltet wurden.
- Wie viele Produkte verkauft oder Dienstleistungen gebucht wurden, usw.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mithilfe von Drittanbieter-Tracking-Cookies gemessen. Eine Anzeige wird typischerweise in einer {{htmlelement("iframe")}} auf einer Webseite eingebettet, die ein Cookie setzen kann, das Informationen über den Benutzer und seine Interaktion mit der Anzeige enthält.

Später, wenn der Benutzer die Website des Werbetreibenden besucht, sofern diese von derselben Domain wie die Anzeige stammt, kann diese Website auf das zuvor von der Anzeige gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann dann die Daten aus der Anzeige mit seinen eigenen Erstanbieterdaten verknüpfen, um Fragen zu beantworten wie "Hat der Benutzer ein Produkt gekauft, nachdem er auf eine Anzeige für das Produkt von einer anderen Website interagiert hat?"

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) des Benutzers. Zu diesem Zeitpunkt kann jede Seite derselben Domain auf dieses Cookie zugreifen, sowie Informationen von Websites, die diese Seiten einbetten. Eine überraschend große Anzahl von Parteien wird in der Lage sein, auf diese Daten zuzugreifen und basierend auf den Surfgewohnheiten des Benutzers andere Daten über diesen abzuleiten.

Die Attribution Reporting API bietet eine Möglichkeit, Anzeigenkonversionen zu messen, bei der die Privatsphäre der Benutzer geschützt wird.

### Wie funktioniert das?

Lassen Sie uns anhand eines Beispiels erläutern, wie die Attribution Reporting API funktioniert.

Angenommen, wir haben einen Online-Shop, `shop.example` (alias der Werbetreibende), der eine Anzeige für eines seiner Produkte auf einer Content-Website, `news.example` (alias der Publisher) einbettet. Der Anzeigeninhalt befindet sich unter `ad.shop.example`.

Die Online-Shop-Besitzer möchten messen, wie viele Konversionen sie von Benutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Warenkorb legen.

![Bilddarstellung der unten beschriebenen Schritte](/shared-assets/images/diagrams/api/attribution-reporting/ara-flow.svg)

Die Schritte sind wie folgt:

1. Wenn ein Benutzer die `news.example`-Seite besucht, kann eine **Attributionsquelle** für spezifische Benutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt verschiedene Möglichkeiten, wie ein Benutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Anzeigeninteraktion eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header senden, um anzuzeigen, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen geeigneten {{httpheader("Attribution-Reporting-Register-Source")}}-Header enthält. Die Attributionsquelle kann beispielsweise sein:
   - Ein Link. In diesem Fall ist die Interaktion das Klicken des Benutzers auf den Link (direkt über ein {{htmlelement("a")}}-Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild wie ein Werbebanner oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch der Seite durch den Benutzer. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (z.B. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion so spezifiziert werden, wie es für Ihre App sinnvoll ist — beispielsweise könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort eintrifft.
2. Wenn die Interaktion mit der Attributionsquelle stattfindet, werden die in dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header zurückgegebenen Quelldaten in einem privaten lokalen Cache gespeichert, der nur vom Browser zugänglich ist. Diese Daten umfassen die kontextabhängigen und Erstanbieterdaten, die der Seite und dem Werbetreibenden zur Verfügung stehen, den Ursprung des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt und eine oder mehrere Ziele (registrierbare Domains), bei denen Sie erwarten, dass die Konversion von dieser Anzeige erfolgt (z.B. die Website(s) des Werbetreibenden, z.B. `shop.example`).
3. Wenn der Benutzer später `shop.example` besucht, kann diese Site einen **Attributionstrigger** registrieren, wenn eine Interaktion anzeigt, dass eine Konversion stattgefunden hat (zum Beispiel klickt der Benutzer auf die Schaltfläche "In den Warenkorb" auf `shop.example`). Der Browser sendet dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header, um anzuzeigen, dass die Antwort berechtigt ist, einen Attributionstrigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen geeigneten {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header enthält. Der Attributionstrigger kann beispielsweise sein:
   - Ein Bild wie ein Warenkorb-Symbol oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch der Seite durch den Benutzer. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (z.B. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion so spezifiziert werden, wie es für Ihre App sinnvoll ist — beispielsweise könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort eintrifft.
4. Wenn die Triggerattribution abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger)-Header mit einem Quelldateneintrag abzugleichen, der im privaten lokalen Cache gespeichert ist (siehe 2.). Weitere Informationen zu Matching-Methodologie und Anforderungen finden Sie unter [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers).
5. Wenn ein Abgleich erfolgt, sendet der Browser BerichtsdatRien an einen Endpunkt auf einem Berichtsserver, der typischerweise dem Werbetechnologie-Anbieter gehört, wo sie sicher analysiert werden können. Im Gegensatz zu Cookies sind die Daten nur der spezifischen Seite verfügbar, an die Sie sie senden - es werden keine Daten an anderer Stelle geteilt. Diese Berichte können entweder sein:
   - **Ereignisberichte**: Berichte, die auf einem Attributionsquelle-Ereignis basieren, bei denen detaillierte Quelldaten mit groben Triggerdaten verknüpft sind. Beispielsweise könnte ein Bericht folgendermaßen aussehen: "Click ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`", wobei "Click ID 200498" die detaillierten Quelldaten und "Kauf" die groben Triggerdaten sind. Die detaillierten Quelldaten können Erstanbieter- oder kontextabhängige Daten von der Quellenseite kodieren, und die Triggerdaten können das Ereignis von der Triggerseite kodieren.
   - **Zusammenfassungsberichte**: Detailliertere Berichte, die Daten aus mehreren Konversionen auf der Quelle- und Triggerseite kombinieren. Beispielsweise "Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Benutzern in Italien geführt, mit einem Gesamterlös von 9540 $. Das Erstellen eines Zusammenfassungsberichts erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Weitere Informationen zur Implementierung der für die obigen Schritte erforderlichen Funktionalität finden Sie unter:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Erzeugung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen eindeutigen Schnittstellen.

### Erweiterungen anderer Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die Eigenschaft `attributionSrc` ermöglicht es Ihnen, das `attributionsrc` Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}} und {{htmlelement("script")}} Elementen programmgesteuert zu erhalten und zu setzen. Es spiegelt den Wert dieses Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor, die `attributionReporting` Option
  - : Beim Erstellen einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) wird angegeben, dass Sie möchten, dass die Antwort eine Attributionsquelle oder einen Trigger registrieren kann.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Beim Erstellen einer Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wird angegeben, dass Sie möchten, dass die Antwort eine Attributionsquelle oder einen Trigger registrieren kann.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc` Feature-Keyword
  - : Führt zur Vervollständigung der Registrierung einer Attributionsquelle _und_ veranlasst den Browser, die zugehörigen Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt), wenn die `open()`-Methode abgeschlossen ist. Beachten Sie, dass `Window.open()`-Aufrufe nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc` Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der zugehörigen Ressourcenanforderung sendet. Auf der Serverseite wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributionstriggers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver für die Ressource angeben möchten, auf die das `src` Attribut verweist. Beachten Sie, dass `<a>` Elemente nicht verwendet werden können, um Attributionstrigger zu registrieren.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anforderung, die anzeigt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenelement als Attributionsquelle registriert. Dies wird als Teil einer Antwort auf eine Anfrage gesendet, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenelement als Attributionstrigger registriert. Dies wird als Teil einer Antwort auf eine Anfrage gesendet, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} Direktive
  - : Bestimmt, ob das aktuelle Dokument berechtigt ist, die Attributionsberichterstattung zu verwenden.

## Registrierung und lokales Testen

Um die Attribution Reporting API auf Ihren Websites zu verwenden, müssen Sie sie im [Anmeldeprozess für die Privatsphäre-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Fluss zur Antwortzeit blockiert, d.h. die Antwort-Header werden ignoriert und Quellen und Trigger werden nicht registriert.

Sie können Ihren Attribution Reporting API-Code dennoch lokal testen, ohne dass eine Registrierung erforderlich ist. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwicklerflag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Sehen Sie sich [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung an (sehen Sie sich auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validation Tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution Reporting](https://privacysandbox.google.com/private-advertising/attribution-reporting/) auf privacysandbox.google.com (2023)
- [Aktivieren Sie die Konversionsmessung](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) auf privacysandbox.google.com (2023)
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
