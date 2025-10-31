---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Nutzer auf eine Werbeanzeige auf einer Website klickt und anschließend das Produkt auf der Seite des Anbieters kauft — und dann Berichte über diese Konversionen abzurufen. Dies geschieht, ohne auf Drittanbieter-Tracking-Cookies angewiesen zu sein.

## Konzepte und Verwendung

Werbetreibende möchten häufig messen, wie viele Nutzer eine Anzeige sehen und anschließend ein Produkt ansehen und kaufen (Konversionen). Dies ermöglicht ihnen festzustellen, welche Werbeplatzierungen den größten Return on Investment (ROI) liefern, sodass sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Konversionsmessung umfasst in der Regel die Erfassung von Daten wie:

- Welche Nutzer konvertiert haben (zum Beispiel einen Artikel gekauft oder sich für einen Dienst angemeldet), und wie viele.
- Die geografischen Regionen, in denen sie sich befinden.
- Auf welchen Seiten die Anzeigen platziert wurden.
- Wie viele Produkte verkauft oder Dienste abonniert wurden, etc.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mithilfe von Drittanbieter-Tracking-Cookies gemessen. Eine Anzeige wird typischerweise auf einer Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie mit Informationen über den Nutzer und seine Interaktion mit der Anzeige setzen kann.

Später, wenn der Nutzer die Website des Werbetreibenden besucht, vorausgesetzt, sie ist von derselben Domain wie die Anzeige, kann diese Seite auf das von der Anzeige vorher gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann dann die Daten der Anzeige mit seinen eigenen Erstanbieterdaten verbinden, um Fragen wie "Hat der Nutzer ein Produkt gekauft, nachdem er mit einer Anzeige für das Produkt von einer anderen Seite interagiert hat?" zu beantworten.

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) der Nutzer. Zu diesem Zeitpunkt kann jede Seite derselben Domain auf dieses Cookie sowie auf Informationen von Seiten, die diese Seiten einbetten, zugreifen. Eine überraschend große Anzahl von Parteien kann auf diese Daten zugreifen und basierend auf den Surfgewohnheiten der Nutzer zusätzliche Daten ableiten.

Die Attribution Reporting API bietet eine Möglichkeit, Werbekonversionen auf eine Art zu messen, die die Privatsphäre der Nutzer schützt.

### Wie funktioniert es?

Lassen Sie uns veranschaulichen, wie die Attribution Reporting API funktioniert, anhand eines Beispiels.

Angenommen, wir haben einen Online-Shop, `shop.example` (also den Werbetreibenden), der eine Anzeige für eines seiner Produkte auf einer Content-Website, `news.example` (also den Publisher), einbettet. Der Anzeigeninhalt befindet sich unter `ad.shop.example`.

Die Online-Shop-Besitzer möchten messen, wie viele Konversionen sie von Nutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Einkaufswagen legen.

![Bilddarstellung der unten beschriebenen Schritte](/shared-assets/images/diagrams/api/attribution-reporting/ara-flow.svg)

Die beteiligten Schritte sind wie folgt:

1. Wenn ein Nutzer die Seite `news.example` besucht, kann eine **Attributionsquelle** für spezifische Nutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt mehrere Möglichkeiten, wie ein Nutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Interaktion mit einer Anzeige eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header senden, um anzuzeigen, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header enthält. Die Attributionsquelle kann zum Beispiel sein:
   - Ein Link. In diesem Fall ist die Interaktion das Klicken des Nutzers auf den Link (direkt über ein {{htmlelement("a")}} Element oder durch einen [`Window.open()`](/de/docs/Web/API/Window/open) Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild wie ein Werbebanner oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion das Besuchen der Seite durch den Nutzer. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion so spezifiziert werden, wie es für Ihre App sinnvoll ist — zum Beispiel könnte die Fetch-Anfrage durch ein `click` oder `submit` Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Interaktion mit der Attributionsquelle erfolgt, werden die in dem {{httpheader("Attribution-Reporting-Register-Source")}} Header zurückgegebenen Quelldaten in einem privaten lokalen Cache gespeichert, der nur vom Browser zugänglich ist. Diese Daten beinhalten die auf der Seite und für den Werbetreibenden verfügbare kontextuelle und Erstanbieterdaten, den Ursprung des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt, und ein oder mehrere Ziele ({{Glossary("eTLD", "eTLD+1")}}s), bei denen Sie erwarten, dass die Konversion von dieser Anzeige stattfindet (d.h. die Website(s) des Werbetreibenden, z.B. `shop.example`).
3. Wenn der Nutzer später `shop.example` besucht, kann diese Seite einen **Attributionstrigger** registrieren, wenn eine Interaktion anzeigt, dass eine Konversion stattgefunden hat (zum Beispiel, der Nutzer klickt auf den "In den Einkaufswagen"-Button auf `shop.example`). Der Browser wird dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}} Header senden, um anzuzeigen, dass die Antwort berechtigt ist, einen Attributionstrigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}} Header enthält. Der Attributionstrigger kann zum Beispiel sein:
   - Ein Bild wie ein Einkaufswagensymbol oder ein 1x1 transparenter Tracking-Pixel. In diesem Fall ist die Interaktion das Besuchen der Seite durch den Nutzer. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion so spezifiziert werden, wie es für Ihre App sinnvoll ist — zum Beispiel könnte die Fetch-Anfrage durch ein `click` oder `submit` Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Trigger-Attribution abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger) Header mit einem in dem privaten lokalen Cache gespeicherten Quelldateneintrag abzugleichen (siehe 2.). Siehe [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für Abgleichsmethodik und Anforderungen.
5. Wenn ein Abgleich erfolgt, sendet der Browser Berichtsdaten an einen Endpunkt auf einem Berichtserver, der typischerweise dem Ad-Tech-Anbieter gehört, wo sie sicher analysiert werden können. Anders als bei Cookies sind die Daten nur für die spezifische Website verfügbar, an die Sie sie senden — es werden keine Daten anderswo geteilt. Diese Berichte können entweder sein:
   - **Ereignisbasierte Berichte**: Berichte basierend auf einem Attributionsquellenereignis, bei dem detaillierte Quelldaten mit groben Triggerdaten verknüpft werden. Zum Beispiel kann ein Bericht wie "Click-ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`" aussehen, wobei "Click-ID 200498" die detaillierten Quelldaten sind und "Kauf" die groben Triggerdaten sind. Die detaillierten Quelldaten können Erstanbieter- oder kontextuelle Daten von der Quellseite kodieren, und die Triggerdaten können das Ereignis von der Triggerseite kodieren.
   - **Zusammenfassende Berichte**: Detailliertere Berichte, die Daten aus mehreren Konversionen auf sowohl der Quellen- als auch der Triggerseite kombinieren. Zum Beispiel "Kampagnen-ID 774653 auf `news.example` führte zu 654 Verkäufen von Widgets auf `shop.example` von Nutzern in Italien mit einem Gesamterlös von $9540." Das Erstellen eines zusammenfassenden Berichts erfordert die Verwendung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Implementierung der für die oben genannten Schritte erforderlichen Funktionalität, siehe:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Erzeugung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen, spezifischen Schnittstellen.

### Erweiterungen auf andere Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc` Eigenschaft ermöglicht es Ihnen, das `attributionsrc` Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}} und {{htmlelement("script")}} Elementen programmatisch zu speichern und abzurufen. Es spiegelt den Wert dieses Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor, die `attributionReporting` Option
  - : Wenn Sie eine Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) generieren, zeigt dies an, dass Sie möchten, dass die Antwort eine Attributionsquelle oder einen Attributionstrigger registrieren kann.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Wenn Sie eine Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) generieren, zeigt dies an, dass Sie möchten, dass die Antwort eine Attributionsquelle oder einen Attributionstrigger registrieren kann.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc` Schlüsselwort
  - : Verursacht den Abschluss der Registrierung einer Attributionsquelle _und_ löst aus, dass der Browser die zugehörigen Quelldaten speichert (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header angegeben), wenn die `open()` Methode abgeschlossen wird. Beachten Sie, dass `Window.open()` Aufrufe nicht zur Registrierung von Attributionstriggern verwendet werden können.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc` Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der zugehörigen Ressourcenanforderung sendet. Auf der Serverseite wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributionstriggers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver angeben möchten, auf den das `src` Attribut zeigt. Beachten Sie, dass `<a>` Elemente nicht zur Registrierung von Attributionstriggern verwendet werden können.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die angibt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Attributionstrigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionstrigger registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} Direktive
  - : Steuert, ob das aktuelle Dokument das Berichtswesen für Attributionen verwenden darf.

## Registrierung und lokales Testen

Um die Attribution Reporting API auf Ihren Websites zu nutzen, müssen Sie sie im [Registrierungsprozess für die Datenschutzoase](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Ablauf zum Zeitpunkt der Antwort blockiert, d.h. die Antwort-Header werden ignoriert und Quellen und Trigger werden nicht registriert.

Sie können Ihren Attribution Reporting API-Code jedoch weiterhin lokal ohne Registrierung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Siehe [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung (siehe auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting](https://privacysandbox.google.com/private-advertising/attribution-reporting/) auf privacysandbox.google.com (2023)
- [Enable conversion measurement](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) auf privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
