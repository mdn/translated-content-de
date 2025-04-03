---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

Die **Attribution Reporting API** ermöglicht Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Nutzer auf eine auf einer Website eingebettete Anzeige klickt und anschließend das Produkt auf der Website des Anbieters kauft — und anschließend Berichte über diese Konversionen zu erhalten. Dies geschieht ohne die Verwendung von Cookies für Drittanbieter-Tracking.

## Konzepte und Nutzung

Werbetreibende möchten häufig messen, wie viele Nutzer eine Anzeige sehen und anschließend ein Produkt ansehen und kaufen (Konversionen). Dies ermöglicht es ihnen festzustellen, welche Werbeplatzierungen ihnen den größten Return on Investment (ROI) bringen, sodass sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Konversionsmessung umfasst in der Regel das Erfassen solcher Daten wie:

- Welche Nutzer konvertiert haben (z.B. ein Produkt gekauft oder einen Service abonniert), und wie viele.
- In welchen geografischen Regionen sie sich befinden.
- Auf welchen Websites die Anzeigen geschaltet wurden.
- Wie viele Produkte verkauft, Dienstleistungen abonniert wurden usw.
- Wieviel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mit Hilfe von Drittanbieter-Tracking-Cookies gemessen. Eine Anzeige wird typischerweise auf einer Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie setzt, das Informationen über den Nutzer und seine Interaktion mit der Anzeige enthält.

Später, wenn der Nutzer sich entscheidet, die Website des Werbetreibenden zu besuchen, und vorausgesetzt, sie stammt aus derselben Domain wie die Anzeige, kann diese Website auf das zuvor von der Anzeige gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann dann die Daten aus der Anzeige mit seinen eigenen Erstanbieterdaten verknüpfen, um Fragen zu beantworten wie „Hat der Nutzer ein Produkt gekauft, nachdem er mit einer Anzeige für das Produkt auf einer anderen Website interagiert hat?“

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) der Nutzer. Zu diesem Zeitpunkt kann jede Seite aus derselben Domain auf dieses Cookie zugreifen, plus Informationen von Websites, die diese Seiten einbetten. Eine überraschend große Anzahl von Parteien wird in der Lage sein, auf diese Daten zuzugreifen und andere Daten über den Nutzer basierend auf seinen Surfgewohnheiten abzuleiten.

Die Attribution Reporting API bietet eine Möglichkeit, Anzeigenkonversionen zu messen, die die Privatsphäre der Nutzer schützt.

### Wie funktioniert es?

Lassen Sie uns anhand eines Beispiels veranschaulichen, wie die Attribution Reporting API funktioniert.

Angenommen, wir haben einen Online-Shop, `shop.example` (aka der Werbetreibende), der eine Anzeige für eines seiner Produkte auf einer Content-Website, `news.example` (aka der Publisher), einbettet. Die Anzeigeinhalte befinden sich unter `ad.shop.example`.

Die Inhaber des Online-Shops möchten messen, wie viele Konversionen sie von Nutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website aufrufen und das Produkt in ihren Einkaufswagen legen.

![Bilddarstellung der unten beschriebenen Schritte](ara-flow.png)

Die Schritte sind wie folgt:

1. Wenn ein Nutzer die `news.example` Website besucht, kann eine **Attributionsquelle** für spezifische Nutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt mehrere Möglichkeiten, wie ein Nutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Interaktion mit der Anzeige eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header senden, um anzugeben, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header enthält. Die Attributionsquelle kann beispielsweise sein:
   - Ein Link. In diesem Fall ist die Interaktion der Klick des Nutzers auf den Link (direkt über ein {{htmlelement("a")}} Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open) Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild, etwa ein Werbebanner oder ein 1x1 Pixel großes transparentes Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch des Nutzers auf der Seite. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist — beispielsweise könnte die Fetch-Anfrage durch ein `click` oder `submit` Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Interaktion mit der Attributionsquelle stattfindet, werden die Quelldaten, die im {{httpheader("Attribution-Reporting-Register-Source")}} Header zurückgegeben werden, in einem privaten lokalen Cache gespeichert, auf den nur der Browser zugreifen kann. Diese Daten enthalten die kontextuellen und Erstanbieter-Daten, die der Seite und dem Werbetreibenden zur Verfügung stehen, den Ursprung des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt, und ein oder mehrere Ziele ({{Glossary("eTLD", "eTLD+1")}}s), wo Sie erwarten, dass die Konversion von dieser Anzeige erfolgt (d.h. die Website(s) des Werbetreibenden, zum Beispiel `shop.example`).
3. Wenn der Nutzer später `shop.example` besucht, kann diese Seite einen **Attributionstrigger** registrieren, wenn eine Interaktion darauf hindeutet, dass eine Konversion stattgefunden hat (zum Beispiel, wenn der Nutzer auf die "In den Einkaufswagen" Schaltfläche auf `shop.example` klickt). Der Browser wird dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header senden, um anzugeben, dass die Antwort berechtigt ist, einen Attributionstrigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}} Header enthält. Der Attributionstrigger kann beispielsweise sein:
   - Ein Bild wie ein Einkaufskorb-Icon oder ein 1x1 Pixel großes transparentes Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch des Nutzers auf der Seite. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist — beispielsweise könnte die Fetch-Anfrage durch ein `click` oder `submit` Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn der Trigger registriert ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger) Header mit einem im privaten lokalen Cache gespeicherten Quelldatensatz abzugleichen (siehe 2.). Siehe [Registrieren von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für die Methodik und Anforderungen des Abgleichs.
5. Wenn ein Abgleich erfolgt, sendet der Browser Berichtsdaten an einen Endpunkt auf einem Berichtsserver, der normalerweise dem Anbieter der Werbetechnologie gehört, wo er sicher analysiert werden kann. Im Gegensatz zu Cookies sind die Daten nur für die spezifische Website verfügbar, an die Sie sie senden - es werden keine Daten anderswo geteilt. Diese Berichte können entweder sein:
   - **Ereignisberichte**: Berichte, die auf einem Attributionsquellenereignis basieren, bei denen detaillierte Quelldaten mit groben Triggerdaten verknüpft werden. Ein Bericht könnte zum Beispiel wie folgt aussehen: „Click ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`“, wobei „Click ID 200498“ die detaillierten Quelldaten und „Kauf“ die groben Triggerdaten sind. Die detaillierten Quelldaten können Erstanbieter- oder kontextuelle Daten von der Quellseite verschlüsseln, und die Triggerdaten können das Ereignis von der Triggeseite verschlüsseln.
   - **Zusammenfassende Berichte**: Detailliertere Berichte, die Daten von mehreren Konversionen sowohl auf der Quellen- als auch auf der Triggerseite kombinieren. Zum Beispiel: „Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Nutzern in Italien geführt, mit einem Gesamtumsatz von 9540 $.“ Das Erstellen eines zusammenfassenden Berichts erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google-Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Umsetzung der für die obigen Schritte erforderlichen Funktionalität siehe:

1. [Registrieren von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrieren von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Generieren von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc` Eigenschaft erlaubt es Ihnen, das `attributionsrc` Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} Elementen programmatisch abzurufen und zu setzen. Sie reflektiert den Wert dieses Attributs.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor, die `attributionReporting` Option
  - : Wenn eine Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) generiert wird, zeigt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Wenn eine Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) generiert wird, zeigt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc` Feature-Keyword
  - : Die Registrierung einer Attributionsquelle wird abgeschlossen _und_ der Browser veranlasst, die zugehörigen Quelldaten zu speichern (wie sie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt werden), wenn die `open()` Methode abgeschlossen ist. Beachten Sie, dass `Window.open()` Aufrufe nicht zur Registrierung von Attributionstriggern verwendet werden können.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc` Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der zugehörigen Ressourcenanfrage sendet. Serverseitig wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributionstriggers nur, wenn Sie einen separaten Registrierungsserver zu der Ressource angeben möchten, auf die das `src` Attribut zeigt. Beachten Sie, dass `<a>` Elemente nicht zur Registrierung von Attributionstriggern verwendet werden können.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die anzeigt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die eine Seitenfunktion als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die eine Seitenfunktion als Attributionstrigger registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} Direktive
  - : Steuert, ob das aktuelle Dokument die Attributionsberichterstattung verwenden darf.

## Registrierung und lokales Testen

Um die Attribution Reporting API auf Ihren Websites zu nutzen, müssen Sie sie im [Privacy Sandbox Enrollment-Prozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Fluss zum Zeitpunkt der Antwort blockiert, d.h. die Antwortheader werden ignoriert und Quellen und Trigger nicht registriert.

Sie können Ihren Attribution Reporting API-Code dennoch lokal ohne Registrierung testen. Um das lokale Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Siehe [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung (siehe auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validierungstool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/) auf developers.google.com (2023)
- [Enable conversion measurement](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/enable-conversion-measurement) auf developers.google.com (2023)
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox/) auf developers.google.com (2023)
