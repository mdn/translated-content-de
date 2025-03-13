---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen – zum Beispiel wenn ein Nutzer auf eine Anzeige klickt, die auf einer Website eingebettet ist, und anschließend das Produkt auf der Website des Anbieters kauft – und darüber Berichte zu diesen Konversionen zu erhalten. Dies geschieht, ohne auf Drittanbieter-Cookies für das Tracking zurückzugreifen.

## Konzepte und Nutzung

Werbetreibende möchten häufig messen, wie viele Nutzer eine Anzeige sehen und dann ein Produkt ansehen und kaufen (Konversionen). Dies ermöglicht ihnen herauszufinden, welche Werbeplatzierungen ihnen die größte Rendite (ROI) bringen, sodass sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Messung von Konversionen umfasst in der Regel die Erfassung von Daten wie:

- Welche Nutzer konvertiert haben (zum Beispiel ein Produkt gekauft oder sich für einen Dienst angemeldet haben) und wie viele.
- Die geografischen Regionen, in denen sie sich befinden.
- Auf welchen Websites die Anzeigen platziert waren.
- Wie viele Produkte verkauft, Dienste angemeldet wurden usw.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mithilfe von Drittanbieter-Cookies gemessen. Eine Anzeige wird typischerweise auf einer Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie setzt, das Informationen über den Nutzer und seine Interaktion mit der Anzeige enthält.

Später, wenn der Nutzer beschließt, die Seite des Werbetreibenden zu besuchen, vorausgesetzt, sie stammt aus derselben Domain wie die Anzeige, kann diese Webseite auf das vorher von der Anzeige gesetzte Drittanbieter-Cookie zugreifen. Der Werbetreibende kann dann die Daten von der Anzeige mit seinen eigenen Erstanbieterdaten verknüpfen, um Fragen wie "Hat der Nutzer ein Produkt gekauft, nachdem er mit einer Anzeige für das Produkt von einer anderen Seite interagiert hat?" zu beantworten.

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) der Benutzer. Zu diesem Zeitpunkt kann jede Seite derselben Domain auf dieses Cookie zugreifen, sowie Informationen von Seiten, die diese eingebetteten Seiten enthalten. Eine überraschend große Anzahl von Parteien kann auf diese Daten zugreifen und andere Daten über den Benutzer basierend auf seinen Surfgewohnheiten ableiten.

Die Attribution Reporting API bietet eine Möglichkeit, Werbekonversionen auf eine Weise zu messen, die die Privatsphäre der Benutzer schützt.

### Wie funktioniert das?

Lassen Sie uns veranschaulichen, wie die Attribution Reporting API funktioniert, anhand eines Beispiels.

Angenommen, wir haben einen Online-Shop, `shop.example` (auch als der Werbetreibende bezeichnet), der eine Werbung für eines seiner Produkte auf einer Content-Seite, `news.example` (auch als der Publisher bezeichnet), einbettet. Der Inhalt der Anzeige befindet sich bei `ad.shop.example`.

Die Inhaber des Online-Shops möchten messen, wie viele Konversionen sie von Nutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Warenkorb legen.

![Bilddarstellung der unten beschriebenen Schritte](ara-flow.png)

Die beteiligten Schritte sind wie folgt:

1. Wenn ein Nutzer die Website `news.example` besucht, kann eine **Attributionsquelle** für bestimmte Nutzerinteraktionen mit der eingebetteten Werbung registriert werden. Es gibt verschiedene Möglichkeiten, wie ein Nutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Interaktion mit einer Anzeige eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header senden, um anzuzeigen, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen geeigneten {{httpheader("Attribution-Reporting-Register-Source")}}-Header enthält. Die Attributionsquelle kann zum Beispiel sein:
   - Ein Link. In diesem Fall ist die Interaktion das Klicken des Nutzers auf den Link (direkt über ein {{htmlelement("a")}}-Element, oder über einen [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild wie ein Werbebanner oder ein 1x1 Pixel großes transparentes Tracking-Pixel. In diesem Fall ist die Interaktion das Aufrufen der Seite durch den Nutzer. Die Quelle wird registriert, wenn das Bild geladen wird, also wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. eine [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist – zum Beispiel könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Interaktion mit der Attributionsquelle stattfindet, werden die in der {{httpheader("Attribution-Reporting-Register-Source")}}-Header zurückgegebenen Quelldaten in einem privaten lokalen Cache gespeichert, der nur vom Browser zugänglich ist. Diese Daten umfassen die kontextuellen und ersten Partei-Daten, die auf der Seite und beim Werbetreibenden verfügbar sind, den Ursprung der Ad-Tech-Firma, die die Konversionsdaten sammelt, und ein oder mehrere Ziele ({{Glossary("eTLD", "eTLD+1")}}s), bei denen Sie erwarten, dass die Konversion von dieser Anzeige erfolgt (d.h. die Website(s) des Werbetreibenden, zum Beispiel `shop.example`).
3. Wenn der Nutzer später `shop.example` besucht, kann diese Seite einen **Attributionstrigger** registrieren, wenn eine Interaktion darauf hinweist, dass eine Konversion stattgefunden hat (zum Beispiel klickt der Nutzer auf die Schaltfläche "In den Warenkorb" auf `shop.example`). Der Browser sendet dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header, um anzugeben, dass die Antwort berechtigt ist, einen Attributionstrigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen geeigneten {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header enthält. Der Attributionstrigger kann zum Beispiel sein:
   - Ein Bild wie ein Einkaufswagen-Symbol oder ein 1x1 Pixel großes transparentes Tracking-Pixel. In diesem Fall ist die Interaktion das Aufrufen der Seite durch den Nutzer. Der Trigger wird registriert, wenn das Bild geladen wird, also wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. eine [`fetch()`](/de/docs/Web/API/Window/fetch) or [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion spezifiziert werden, wie es für Ihre App sinnvoll ist – zum Beispiel könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Trigger-Attribution abgeschlossen ist, versucht der Browser, die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger)-Header mit einem in den privaten lokalen Cache gespeicherten Quelldateneintrag (siehe 2.) abzugleichen. Weitere Informationen zur Matching-Methodik und -Anforderungen finden Sie unter [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers).
5. Wenn eine Übereinstimmung gefunden wird, sendet der Browser Berichtsdatensätze an einen Endpunkt auf einem Berichtserver, der in der Regel dem Ad-Tech-Anbieter gehört, wo sie sicher analysiert werden können. Im Gegensatz zu Cookies stehen die Daten nur der spezifischen Website zur Verfügung, an die Sie sie senden – es werden keine Daten an andere Stellen weitergegeben. Diese Berichte können entweder sein:
   - **Event-Level-Berichte**: Berichte basierend auf einem Attributionsquelle-Ereignis, bei dem detaillierte Quelldaten mit groben Triggerdaten verknüpft werden. Ein Bericht könnte beispielsweise wie folgt aussehen: "Klick-ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`", wobei "Klick-ID 200498" die detaillierten Quelldaten darstellt und "Kauf" die groben Triggerdaten. Die detaillierten Quelldaten können Erstanbieter- oder kontextuelle Daten von der Quellseite kodieren, und die Triggerdaten können das Ereignis von der Triggerseite kodieren.
   - **Zusammenfassungsberichte**: Detailliertere Berichte, die Daten aus mehreren Konversionen sowohl auf der Quell- als auch auf der Triggerseite kombinieren. Ein Beispiel könnte lauten: "Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Nutzern in Italien mit einem Gesamtumsatz von 9540 $ geführt." Das Erstellen eines Zusammenfassungsberichts erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Implementierung der notwendigen Funktionalität für die oben genannten Schritte, siehe:

1. [Registrierung von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrierung von Attributionstriggern](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Erstellung von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen spezifischen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc`-Eigenschaft ermöglicht es Ihnen, das `attributionsrc`-Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} Elementen programmgesteuert zu bekommen und zu setzen. Sie gibt den Wert dieses Attributs wieder.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, die Option `attributionReporting`
  - : Beim Erstellen einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch), wird angegeben, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Beim Erstellen einer Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), wird angegeben, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das Schlüsselwort `attributionsrc` in der Feature-Beschreibung
  - : Verursacht den Abschluss der Registrierung einer Attributionsquelle _und_ veranlasst den Browser, die zugehörigen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt) zu speichern, wenn die `open()`-Methode abgeschlossen ist. Beachten Sie, dass `Window.open()`-Aufrufe nicht zur Registrierung von Attributionstriggern verwendet werden können.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc` Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der zugehörigen Ressourcenanfrage sendet. Serverseitig wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attributionstriggers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver von der Ressource angeben möchten, auf die das `src`-Attribut zeigt. Beachten Sie, dass `<a>`-Elemente nicht zur Registrierung von Attributionstriggern verwendet werden können.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die angibt, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionsquelle registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthalten hat.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenmerkmal als Attributionstrigger registriert. Dies ist Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthalten hat.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} Direktive
  - : Bestimmt, ob das aktuelle Dokument zur Verwendung der Attribution Reporting berechtigt ist.

## Anmeldung und lokales Testen

Um die Attribution Reporting API auf Ihren Seiten zu verwenden, müssen Sie es im [Anmeldeverfahren für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Fluss zur Antwortzeit blockiert, das heißt, die Antwort-Header werden ignoriert und Quellen und Trigger werden nicht registriert.

Sie können Ihren Attribution Reporting API-Code trotzdem lokal testen, ohne sich anzumelden. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für eine Beispielimplementierung siehe [Demo: Attribution Reporting API](https://arapi-home.web.app/) (siehe auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/) auf developers.google.com (2023)
- [Konversionsmessung aktivieren](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/enable-conversion-measurement) auf developers.google.com (2023)
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox/) auf developers.google.com (2023)
