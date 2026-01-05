---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}{{deprecated_header}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine in einer Website eingebettete Anzeige klickt und dann den Artikel auf der Website des Anbieters kauft — und dann Berichte über diese Konversionen abzurufen. Dies geschieht, ohne auf Tracking-Cookies von Drittanbietern angewiesen zu sein.

## Konzepte und Nutzung

Werbetreibende möchten häufig messen, wie viele Benutzer eine Anzeige sehen und dann ein Produkt ansehen und kaufen (Konversionen). Dies ermöglicht ihnen festzustellen, welche Werbeplatzierungen ihnen den größten Return on Investment (ROI) bieten, sodass sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Konversionsmessung beinhaltet normalerweise das Erfassen von Daten wie:

- Welche Benutzer konvertierten (zum Beispiel einen Artikel kauften oder sich für einen Dienst anmeldeten) und wie viele.
- Die geografischen Regionen, in denen sie sich befinden.
- Auf welchen Websites die Anzeigen platziert wurden.
- Wie viele Produkte verkauft, Dienstleistungen gebucht, etc.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mit Hilfe von Tracking-Cookies von Drittanbietern gemessen. Eine Anzeige wird typischerweise in einer Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie setzen kann, das Informationen über den Benutzer und dessen Interaktion mit der Anzeige enthält.

Wenn der Benutzer später die Website des Werbetreibenden besucht, vorausgesetzt, es handelt sich um dieselbe Domain wie die Anzeige, kann diese Website auf das zuvor von der Anzeige gesetzte Cookie zugreifen. Der Werbetreibende kann dann die Daten der Anzeige mit seinen eigenen First-Party-Daten verknüpfen, um Fragen wie "Hat der Benutzer ein Produkt gekauft, nachdem er auf einer anderen Website mit einer Anzeige dafür interagiert hat?" zu beantworten.

Dies ist schlecht für die Benutzer[Privatsphäre](/de/docs/Web/Privacy). Zu diesem Zeitpunkt kann jede Seite derselben Domain Zugriff auf dieses Cookie erhalten, zusätzlich zu den Informationen von Websites, die diese Seiten einbetten. Eine überraschend große Anzahl von Parteien kann auf diese Daten zugreifen und andere Daten basierend auf den Surfgewohnheiten des Benutzers daraus ableiten.

Die Attribution Reporting API bietet eine Möglichkeit, Anzeigenkonversionen auf eine Weise zu messen, die die Privatsphäre der Benutzer schützt.

### Wie funktioniert es?

Lassen Sie uns veranschaulichen, wie die Attribution Reporting API funktioniert, anhand eines Beispiels.

Angenommen, wir haben einen Onlineshop, `shop.example` (alias der Werbetreibende), der eine Anzeige für eines seiner Produkte auf einer Content-Website, `news.example` (alias der Herausgeber), einbettet. Der Anzeigeninhalt befindet sich unter `ad.shop.example`.

Die Inhaber des Onlineshops möchten messen, wie viele Konversionen sie von Benutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Einkaufswagen legen.

![Bildliche Darstellung der unten beschriebenen Schritte](/shared-assets/images/diagrams/api/attribution-reporting/ara-flow.svg)

Die involvierten Schritte sind wie folgt:

1. Wenn ein Benutzer die `news.example`-Site besucht, kann eine **Attributionsquelle** für spezifische Benutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt mehrere Möglichkeiten, wie ein Benutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Interaktion mit der Anzeige eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header senden, um anzuzeigen, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen sein, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}-Header enthält. Die Attributionsquelle kann zum Beispiel sein:
   - Ein Link. In diesem Fall ist die Interaktion das Klicken des Benutzers auf den Link (direkt über ein {{htmlelement("a")}}-Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild, wie ein Werbebanner oder ein 1x1 Transparenz-Tracking-Pixel. In diesem Fall ist die Interaktion das Besuchen der Seite durch den Benutzer. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanforderung antwortet.
   - Eine Anfrage (zum Beispiel eine [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion als das definiert werden, was für Ihre App sinnvoll ist — zum Beispiel könnte die Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Interaktion mit der Attributionsquelle auftritt, werden die in dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header zurückgegebenen Quelldaten in einem privaten lokalen Cache gespeichert, der nur vom Browser zugänglich ist. Diese Daten beinhalten die kontextuellen und First-Party-Daten, die der Seite und dem Werbetreibenden zur Verfügung stehen, den Ursprung des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt, und eine oder mehrere Ziele ({{Glossary("registrable_domain", "registrierbare Domains")}}), bei denen Sie erwarten, dass die Konversion von dieser Anzeige erfolgt (z. B. die Website(s) des Werbetreibenden, zum Beispiel `shop.example`).
3. Wenn der Benutzer später `shop.example` besucht, kann diese Site einen **Attribution-Trigger** registrieren, wenn eine Interaktion anzeigt, dass eine Konversion stattgefunden hat (zum Beispiel, der Benutzer klickt auf den "In den Warenkorb"-Button auf `shop.example`). Der Browser sendet dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header, um anzuzeigen, dass die Antwort berechtigt ist, einen Attribution-Trigger zu registrieren, und die Registrierung wird abgeschlossen sein, wenn die Antwort einen entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header enthält. Der Attribution-Trigger kann zum Beispiel sein:
   - Ein Bild, wie ein Warenkorbsymbol oder ein 1x1 Transparenz-Tracking-Pixel. In diesem Fall ist die Interaktion das Besuchen der Seite durch den Benutzer. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanforderung antwortet.
   - Eine Anfrage (zum Beispiel eine [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion als das definiert werden, was für Ihre App sinnvoll ist — zum Beispiel könnte die Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Trigger-Attribution abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger)-Header mit einem zuvor im privaten lokalen Cache gespeicherten Quelldatensatz (siehe 2.) abzugleichen. Siehe [Registrierung von Attribution-Triggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für die Matching-Methodik und Anforderungen.
5. Wenn ein Match gefunden wird, sendet der Browser Berichtsdaten an einen Endpunkt auf einem Reporting-Server, der typischerweise dem Ad-Tech-Anbieter gehört, wo diese sicher analysiert werden können. Im Gegensatz zu Cookies sind die Daten nur für die spezifische Site verfügbar, an die Sie sie senden - es werden keine Daten an andere Stellen weitergegeben. Diese Berichte können entweder sein:
   - **Ereignisbasierte Berichte**: Berichte basierend auf einem Attributionsquellen-Ereignis, bei dem detaillierte Quelldaten mit grobmaschigen Trigger-Daten verknüpft werden. Ein Bericht kann beispielsweise folgendermaßen aussehen: "Click ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`, wobei "Click ID 200498" die detaillierten Quelldaten sind, und "Kauf" die grobmaschigen Trigger-Daten sind. Die detaillierten Quelldaten können First-Party- oder kontextuelle Daten von der Quellseite kodieren, und die Trigger-Daten können das Ereignis von der Trigger-Seite kodieren.
   - **Zusammenfassende Berichte**: Detailliertere Berichte, die Daten von mehreren Konversionen auf sowohl der Quell- als auch der Trigger-Seite kombinieren. Zum Beispiel "Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Benutzern in Italien geführt, mit einem Gesamteinnahmen von $9540." Das Erstellen eines zusammenfassenden Berichts erfordert die Verwendung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Implementierung der für die obigen Schritte erforderlichen Funktionalität siehe:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attribution-Triggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Erstellung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen spezifischen Schnittstellen.

### Erweiterungen für andere Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc`-Eigenschaft ermöglicht es Ihnen, das `attributionsrc`-Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}} und {{htmlelement("script")}}-Elementen programmgesteuert zu erhalten und zu setzen. Es spiegelt den Wert dieses Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, die `attributionReporting`-Option
  - : Beim Erstellen einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) gibt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Beim Erstellen einer Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zeigt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das Feature-Stichwort `attributionsrc`
  - : Führt zur Fertigstellung der Registrierung einer Attributionsquelle _und_ veranlasst den Browser, die zugehörigen Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn die `open()`-Methode abgeschlossen ist. Beachten Sie, dass `Window.open()`-Aufrufe nicht verwendet werden können, um Attribution-Trigger zu registrieren.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc`-Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der entsprechenden Ressourcenanfrage sendet. Auf der Serverseite wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attribution-Trigger ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver zu der Ressource angeben möchten, auf die das `src`-Attribut zeigt. Beachten Sie, dass `<a>`-Elemente nicht verwendet werden können, um Attribution-Trigger zu registrieren.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die angibt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attribution-Trigger registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}}-Direktive
  - : Steuert, ob das aktuelle Dokument berechtigt ist, Attributionsberichte zu verwenden.

## Einschreibung und lokales Testen

Um die Attribution Reporting API auf Ihrer Website zu nutzen, müssen Sie sie im [Einschreibungsprozess der Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Fluss zur Antwortzeit blockiert, d.h. die Antwortheader werden ignoriert und Quellen und Trigger nicht registriert.

Sie können Ihren Attribution Reporting API-Code weiterhin lokal ohne Einschreibung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwicklerflag:

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
