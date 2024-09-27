---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen – beispielsweise wenn ein Benutzer auf eine Anzeige auf einer Website klickt und das Produkt anschließend auf der Website des Anbieters kauft – und dann Berichte über diese Konversionen abzurufen. Dies geschieht ohne den Einsatz von Drittanbieter-Tracking-Cookies.

## Konzepte und Nutzung

Werbetreibende möchten häufig messen, wie viele Benutzer eine Anzeige sehen und dann ein Produkt (Konversionen) ansehen und kaufen. Dies ermöglicht es ihnen, herauszufinden, welche Werbeplatzierungen den größten Return on Investment (ROI) bieten, sodass sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Konversionsmessung umfasst in der Regel das Erfassen von Daten wie:

- Welche Benutzer konvertierten (z.B. ein Produkt gekauft oder sich für einen Dienst angemeldet) und wie viele.
- Die geografischen Regionen, in denen sie ansässig sind.
- Auf welchen Websites die Anzeigen platziert wurden.
- Wie viele Produkte verkauft, für Dienste angemeldet wurden usw.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mithilfe von Drittanbieter-Tracking-Cookies gemessen. Eine Anzeige wird typischerweise auf einer Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie setzt, das Informationen über den Benutzer und seine Interaktion mit der Anzeige enthält.

Besucht der Benutzer später die Website des Werbetreibenden, vorausgesetzt, sie gehört zur gleichen Domain wie die Anzeige, kann diese Website auf das zuvor von der Anzeige gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann dann die Daten der Anzeige mit seinen eigenen Erstanbieterdaten verknüpfen, um Fragen zu beantworten wie „Hat der Benutzer ein Produkt gekauft, nachdem er mit einer Anzeige für das Produkt auf einer anderen Website interagiert hat?“

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) des Benutzers. An diesem Punkt kann jede Seite derselben Domain auf dieses Cookie zugreifen, plus Informationen von Seiten, die diese Seiten einbetten. Überraschend viele Parteien können auf diese Daten zugreifen und andere Daten über den Benutzer basierend auf seinen Surfgewohnheiten ableiten.

Die Attribution Reporting API bietet eine Möglichkeit, Anzeigenkonversionen auf eine Weise zu messen, die die Privatsphäre der Benutzer schützt.

### Wie funktioniert es?

Lassen Sie uns veranschaulichen, wie die Attribution Reporting API funktioniert, anhand eines Beispiels.

Angenommen, wir haben einen Online-Shop, `shop.example` (auch bekannt als der Werbetreibende), der eine Anzeige für eines seiner Produkte auf einer Inhaltsseite, `news.example` (auch bekannt als der Publisher), einbettet. Der Anzeigeninhalt befindet sich unter `ad.shop.example`.

Die Inhaber des Online-Shops möchten messen, wie viele Konversionen sie von Benutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Warenkorb legen.

![Bildliche Darstellung der unten beschriebenen Schritte](ara-flow.png)

Die folgenden Schritte sind beteiligt:

1. Wenn ein Benutzer die `news.example` Seite besucht, kann eine **Attributionsquelle** für spezifische Benutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt mehrere Möglichkeiten, wie ein Benutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Interaktion mit der Anzeige eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header senden, um anzuzeigen, dass die Antwort Anspruch auf das Registrieren einer Attributionsquelle hat. Die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header enthält. Die Attributionsquelle kann beispielsweise sein:
   - Ein Link. In diesem Fall ist die Interaktion das Klicken des Benutzers auf den Link (direkt über ein {{htmlelement("a")}} Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open) Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild, wie ein Werbebanner oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion das Besuchen der Seite durch den Benutzer. Die Quelle wird registriert, wenn das Bild geladen wird, also wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll erscheint – beispielsweise könnte die Fetch-Anfrage durch ein `click` oder `submit` Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Attributionsquellen-Interaktion auftritt, werden die Quelldaten, die im {{httpheader("Attribution-Reporting-Register-Source")}} Header zurückgegeben werden, in einem privaten lokalen Cache gespeichert, auf den nur der Browser zugreifen kann. Diese Daten umfassen die kontextuellen und Erstanbieterdaten, die für die Seite und den Werbetreibenden verfügbar sind, den Ursprung des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt, und eine oder mehrere Ziele ([eTLD+1](/de/docs/Glossary/eTLD)s), bei denen Sie die Konversion von dieser Anzeige erwarten (d.h. die Site(s) des Werbetreibenden, z.B. `shop.example`).
3. Wenn der Benutzer später `shop.example` besucht, kann diese Site einen **Attributionsauslöser** registrieren, wenn eine Interaktion anzeigt, dass eine Konversion stattgefunden hat (z.B. wenn der Benutzer auf den Button „In den Warenkorb“ auf `shop.example` klickt). Der Browser sendet dann eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header, um anzuzeigen, dass die Antwort Anspruch auf das Registrieren eines Attributionsauslösers hat, und die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}} Header enthält. Der Attributionsauslöser kann beispielsweise sein:
   - Ein Bild, wie ein Einkaufswagen-Symbol oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion das Besuchen der Seite durch den Benutzer. Der Auslöser wird registriert, wenn das Bild geladen wird, also wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). Auch hier kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll erscheint – zum Beispiel könnte die Fetch-Anfrage durch ein `click` oder `submit` Ereignis ausgelöst werden. Der Auslöser wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Attributionsauslösung abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger) Header mit einem Quelldateneintrag im privaten lokalen Cache abzugleichen (siehe 2.). Siehe [Registrierung von Attributionsauslösern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für die Abgleichmethodik und Anforderungen.
5. Wird ein Abgleich erzielt, sendet der Browser die Berichtsdaten an einen Endpunkt auf einem Berichtsserver, der typischerweise dem Ad-Tech-Anbieter gehört, wo sie sicher analysiert werden können. Im Gegensatz zu Cookies sind die Daten nur für die spezifische Website verfügbar, an die Sie sie senden - es werden keine Daten anderswohin geteilt. Diese Berichte können entweder sein:
   - **Ereignisbasierte Berichte**: Berichte, die auf einem Ereignis der Attributionsquelle basieren, bei dem detaillierte Quelldaten mit groben Auslöserdaten verknüpft werden. Ein Bericht könnte beispielsweise lauten „Klick-ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`“, wobei „Klick-ID 200498“ die detaillierten Quelldaten sind und „Kauf“ die groben Auslöserdaten darstellt. Die detaillierten Quelldaten können Erst- oder kontextuelle Daten von der Quellseite kodieren, und die Auslöserdaten können das Ereignis von der Auslöserseite kodieren.
   - **Zusammenfassungsberichte**: Detailliertere Berichte, die Daten von mehreren Konversionen sowohl auf der Quell- als auch auf der Auslöserseite zusammenfassen. Beispielsweise „Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Benutzern in Italien geführt, mit einem Gesamtumsatz von $9540.“ Das Erstellen eines Zusammenfassungsberichts erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für mehr Informationen zur Implementierung der für die obigen Schritte erforderlichen Funktionalität siehe:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attributionsauslösern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Berichte erstellen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen eindeutigen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc` Eigenschaft ermöglicht es Ihnen, das `attributionsrc` Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}} und {{htmlelement("script")}} Elementen programmatisch zu setzen und abzurufen. Es reflektiert den Wert dieses Attributs.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor, die `attributionReporting` Option
  - : Beim Erstellen einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) gibt dies an, dass Sie die Antwort registrieren möchten, um eine Attributionsquelle oder einen Auslöser zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Beim Erstellen einer Anfrage über [[XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) gibt dies an, dass Sie die Antwort registrieren möchten, um eine Attributionsquelle oder einen Auslöser zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc` Feature-Schlüsselwort
  - : Verursacht den Abschluss der Registrierung einer Attributionsquelle _und_ veranlasst den Browser, die zugeordneten Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader bereitgestellt), wenn die `open()` Methode abgeschlossen ist. Beachten Sie, dass `Window.open()` Anrufe nicht zum Registrieren von Attributionsauslösern verwendet werden können.

## HTML Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc` Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der zugehörigen Ressourcenanfrage sendet. Auf der Serverseite wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributionsauslösers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver zur Ressource angeben möchten, auf die das `src` Attribut zeigt. Beachten Sie, dass `<a>` Elemente nicht zur Registrierung von Attributionsauslösern verwendet werden können.

## HTTP Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP Anfrage, die darauf hinweist, dass die entsprechende Antwort eine Attributionsquelle oder einen Auslöser registrieren kann.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP Antwort, die eine Seitenfunktion als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP Antwort, die eine Seitenfunktion als Attributionsauslöser registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} Direktive
  - : Kontrolliert, ob das aktuelle Dokument Berechtigung zur Verwendung von Attributionsberichten hat.

## Anmeldung und lokales Testen

Um die Attribution Reporting API auf Ihren Websites zu verwenden, müssen Sie diese im [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Ablauf zur Antwortzeit blockiert, d.h. die Antwortheader werden ignoriert und Quellen und Auslöser werden nicht registriert.

Sie können Ihren Attribution Reporting API-Code dennoch lokal ohne Anmeldung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Siehe [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung (siehe auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validierungstool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attributionsberichterstattung](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/) auf developers.google.com (2023)
- [Konversionsmessung aktivieren](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/enable-conversion-measurement) auf developers.google.com (2023)
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox/) auf developers.google.com (2023)
