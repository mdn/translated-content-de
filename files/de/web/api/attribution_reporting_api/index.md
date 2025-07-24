---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine Anzeige auf einer Website klickt und dann den Artikel auf der Website des Anbieters kauft — und anschließend Berichte über diese Konversionen zu erhalten. Dies geschieht ohne Verwendung von Drittanbieter-Tracking-Cookies.

## Konzepte und Nutzung

Werbetreibende möchten häufig messen, wie viele Benutzer eine Anzeige sehen und dann ein Produkt ansehen oder kaufen (Konversionen). Dies ermöglicht es ihnen herauszufinden, welche Werbeplatzierungen ihnen die höchste Kapitalrendite (ROI) bieten, damit sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Messung von Konversionen umfasst normalerweise die Erfassung von Daten wie:

- Welche Benutzer konvertiert haben (zum Beispiel einen Artikel gekauft oder sich für einen Dienst angemeldet haben) und wie viele.
- Die geografischen Regionen, in denen sie sich befinden.
- Auf welchen Websites die Anzeigen platziert wurden.
- Wie viele Produkte verkauft oder Dienste gebucht wurden usw.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mit Hilfe von Drittanbieter-Tracking-Cookies gemessen. Eine Anzeige wird typischerweise auf einer Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie mit Informationen über den Benutzer und seine Interaktion mit der Anzeige setzen kann.

Später, wenn der Benutzer die Website des Werbetreibenden besucht, vorausgesetzt, sie stammt aus derselben Domain wie die Anzeige, kann diese Website auf das zuvor von der Anzeige gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann dann die Daten von der Anzeige mit seinen eigenen Erstanbieter-Daten verbinden, um Fragen wie "Hat der Benutzer ein Produkt gekauft, nachdem er mit einer Anzeige für das Produkt von einer anderen Website interagiert hat?" zu beantworten.

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) der Nutzer. An dieser Stelle kann jede Seite aus derselben Domain auf dieses Cookie zugreifen sowie Informationen von Seiten, die diese Seiten einbetten. Eine überraschend große Anzahl von Parteien wird in der Lage sein, auf diese Daten zuzugreifen und daraus weitere Daten über den Benutzer basierend auf seinen Surfgewohnheiten abzuleiten.

Die Attribution Reporting API bietet einen Weg, um Anzeigenkonversionen auf eine Weise zu messen, die die Privatsphäre der Benutzer schützt.

### Wie funktioniert es?

Lassen Sie uns veranschaulichen, wie die Attribution Reporting API funktioniert, anhand eines Beispiels.

Angenommen, wir haben einen Online-Shop, `shop.example` (alias der Werbetreibende), der eine Anzeige für eines seiner Produkte auf einer Content-Seite, `news.example` (alias der Publisher), einbettet. Der Anzeigeninhalt befindet sich unter `ad.shop.example`.

Die Online-Shop-Besitzer möchten messen, wie viele Konversionen sie von Benutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Warenkorb legen.

![Bilddarstellung der unten beschriebenen Schritte](/shared-assets/images/diagrams/api/attribution-reporting/ara-flow.svg)

Die Schritte sind wie folgt:

1. Wenn ein Benutzer die `news.example`-Seite besucht, kann für spezifische Benutzerinteraktionen mit der eingebetteten Anzeige eine **Attributionsquelle** registriert werden. Es gibt mehrere Möglichkeiten, wie ein Benutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Anzeigeninteraktion eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header senden, um anzuzeigen, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen geeigneten {{httpheader("Attribution-Reporting-Register-Source")}}-Header enthält. Die Attributionsquelle kann zum Beispiel sein:
   - Ein Link. In diesem Fall ist die Interaktion der Klick des Benutzers auf den Link (direkt über ein {{htmlelement("a")}}-Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open) Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild wie ein Werbebanner oder ein 1x1-Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch des Benutzers auf der Seite. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist — zum Beispiel könnte die Fetch-Anfrage von einem `click`- oder `submit`-Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Attributionsquellen-Interaktion auftritt, werden die in dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header zurückgegebenen Quelldaten in einem privaten lokalen Cache gespeichert, der nur vom Browser zugänglich ist. Diese Daten beinhalten die kontextuellen und erstanbieterbezogenen Daten, die der Seite und dem Werbetreibenden zur Verfügung stehen, den Ursprung des Anzeigentechnologieunternehmens, das die Konversionsdaten sammelt, und einen oder mehrere Ziele ({{Glossary("eTLD", "eTLD+1")}}s), wo Sie die Konversion von dieser Anzeige erwarten (d.h. die Website(s) des Werbetreibenden, z.B. `shop.example`).
3. Wenn der Benutzer später `shop.example` besucht, kann diese Website einen **Attributionstrigger** registrieren, wenn eine Interaktion darauf hinweist, dass eine Konversion stattgefunden hat (zum Beispiel klickt der Benutzer auf den "In den Warenkorb"-Button auf `shop.example`). Der Browser sendet dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header, um anzuzeigen, dass die Antwort berechtigt ist, einen Attributionstrigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen geeigneten {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header enthält. Der Attributionstrigger kann zum Beispiel sein:
   - Ein Bild wie ein Einkaufswagen-Symbol oder ein 1x1-Tracking-Pixel. In diesem Fall ist die Interaktion der Besuch des Benutzers auf der Seite. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist — zum Beispiel könnte die Fetch-Anfrage von einem `click`- oder `submit`-Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Trigger-Attribution abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger)-Header mit einem Quelldateneintrag abzugleichen, der im privaten lokalen Cache gespeichert ist (siehe Punkt 2). Siehe [Registrierung von Attributionstriggers](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für die Abgleichsmethodik und Anforderungen.
5. Wird ein Match gefunden, sendet der Browser Berichts-Daten an einen Endpunkt auf einem Bericht-Server, der typischerweise dem Anbieter der Anzeigentechnologie gehört, wo er sicher analysiert werden kann. Im Gegensatz zu Cookies sind die Daten nur für die spezifische Website verfügbar, an die Sie sie senden - es werden keine Daten anderswo geteilt. Diese Berichte können entweder sein:
   - **Ereignisebene-Berichte**: Berichte basierend auf einem Attributionsquellenereignis, bei dem detaillierte Quelldaten mit groben Trigger-Daten verknüpft werden. Zum Beispiel könnte ein Bericht so aussehen: "Klick-ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`", wobei "Klick-ID 200498" die detaillierten Quelldaten sind und "Kauf" die groben Trigger-Daten. Die detaillierten Quelldaten können erstanbieter- oder kontextbezogene Daten von der Quellseite kodieren, und die Trigger-Daten können das Ereignis von der Trigger-Seite kodieren.
   - **Zusammenfassungsberichte**: Ausführlichere Berichte, die Daten aus mehreren Konversionen sowohl auf der Quell- als auch auf der Trigger-Seite kombinieren. Zum Beispiel: "Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` aus Italien geführt mit einem Gesamterlös von 9540 USD." Das Erstellen eines Zusammenfassungsberichtes erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für mehr Informationen zur Implementierung der erforderlichen Funktionalität für die oben genannten Schritte, siehe:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attributionstriggers](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Erstellung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen, speziellen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die Eigenschaft `attributionSrc` ermöglicht es Ihnen, das `attributionsrc`-Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}}-Elementen programmatisch zu setzen und zu erhalten. Es spiegelt den Wert dieses Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, die `attributionReporting`-Option
  - : Beim Generieren einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) zeigt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Beim Generieren einer Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zeigt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc`-Schlüsselwort der Funktionalität
  - : Verursacht den Abschluss der Registrierung einer Attributionsquelle _und_ löst den Browser aus, die zugehörigen Quelldaten zu speichern (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn die `open()`-Methode abgeschlossen wird. Beachten Sie, dass `Window.open()`-Aufrufe nicht zur Registrierung von Attributionstriggers verwendet werden können.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc`-Attribut
  - : Gibt an, dass Sie wollen, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der zugehörigen Ressourcenanfrage sendet. Auf der Serverseite wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributionstriggers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver zur Ressource angeben möchten, auf die das `src`-Attribut zeigt. Beachten Sie, dass `<a>`-Elemente nicht zur Registrierung von Attributionstriggers verwendet werden können.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die anzeigt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionstrigger registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}}-Richtlinie
  - : Kontrolliert, ob das aktuelle Dokument Attribution Reporting nutzen darf.

## Registrierung und lokales Testen

Um die Attribution Reporting API auf Ihren Websites zu nutzen, müssen Sie sie im [Anmeldeverfahren des Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Fluss zur Antwortzeit blockiert, d.h. die Antwort-Header werden ignoriert und Quellen und Trigger nicht registriert.

Sie können Ihren Attribution Reporting API-Code dennoch lokal ohne Registrierung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Ein Blick auf [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Beispielimplementierung (siehe auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting](https://privacysandbox.google.com/private-advertising/attribution-reporting/) auf privacysandbox.google.com (2023)
- [Enable conversion measurement](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) auf privacysandbox.google.com (2023)
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
