---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}{{deprecated_header}}{{non-standard_header}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen – zum Beispiel, wenn ein Nutzer auf eine in eine Website eingebettete Werbung klickt und dann das Produkt auf der Website des Anbieters kauft – und dann Berichte über diese Konversionen abzurufen. Dies erfolgt ohne die Verwendung von Third-Party-Tracking-Cookies.

## Konzepte und Nutzung

Werbetreibende möchten häufig messen, wie viele Nutzer eine Werbung sehen und anschließend ein Produkt ansehen und kaufen (Konversionen). Dies ermöglicht es ihnen herauszufinden, welche Werbeplatzierungen ihnen die höchste Rendite bringen, sodass sie ihre Werbestrategie entsprechend anpassen können. Der Prozess der Konversionsmessung umfasst üblicherweise das Erfassen von Daten wie:

- Welche Nutzer konvertiert haben (z. B. ein Produkt gekauft oder sich für einen Dienst angemeldet haben) und wie viele.
- Die geografischen Regionen, in denen sie sich befinden.
- Auf welchen Websites die Anzeigen platziert wurden.
- Wie viele Produkte verkauft oder Dienste abonniert wurden usw.
- Wie viel Umsatz generiert wurde.

Traditionell wurde im Web die Konversion mit Third-Party-Tracking-Cookies gemessen. Eine Werbung wird typischerweise in eine Webseite in einem {{htmlelement("iframe")}} eingebettet, das ein Cookie setzen kann, das Informationen über den Nutzer und seine Interaktion mit der Werbung enthält.

Später, wenn der Nutzer beschließt, die Website des Werbetreibenden zu besuchen, vorausgesetzt, sie stammt aus demselben Domain wie die Anzeige, kann diese Website auf das zuvor von der Werbung gesetzte Third-Party-Cookie zugreifen. Der Werbetreibende kann dann die Daten aus der Anzeige mit seinen eigenen First-Party-Daten in Verbindung bringen, um Fragen zu beantworten wie "Hat der Nutzer ein Produkt gekauft, nachdem er mit einer Werbung für das Produkt von einer anderen Website interagiert hat?"

Dies ist schlecht für die [Privatsphäre](/de/docs/Web/Privacy) des Nutzers. An diesem Punkt kann jede Seite aus derselben Domain auf dieses Cookie zugreifen sowie auf Informationen von eingebetteten Seiten. Eine überraschend große Anzahl Parteien wird in der Lage sein, auf diese Daten zuzugreifen und andere Daten über den Nutzer basierend auf seinem Surfverhalten abzuleiten.

Die Attribution Reporting API bietet eine Möglichkeit, Werbekonversionen auf eine Weise zu messen, die die Privatsphäre der Nutzer schützt.

### Wie funktioniert es?

Lassen Sie uns anhand eines Beispiels erläutern, wie die Attribution Reporting API funktioniert.

Angenommen, wir haben einen Online-Shop, `shop.example` (auch als Werbetreibender bekannt), der eine Anzeige für eines seiner Produkte auf einer Content-Website, `news.example` (auch als Publisher bekannt), einbettet. Der Anzeigeninhalt befindet sich unter `ad.shop.example`.

Die Inhaber des Online-Shops möchten messen, wie viele Konversionen sie von Nutzern erhalten, die mit der Anzeige interagieren, die Produktseite auf ihrer Website ansehen und das Produkt in ihren Einkaufswagen legen.

![Grafische Darstellung der unten beschriebenen Schritte](/shared-assets/images/diagrams/api/attribution-reporting/ara-flow.svg)

Die beteiligten Schritte sind wie folgt:

1. Wenn ein Nutzer die `news.example`-Seite besucht, kann eine **Attributionsquelle** für bestimmte Nutzerinteraktionen mit der eingebetteten Anzeige registriert werden. Es gibt verschiedene Möglichkeiten, wie ein Nutzer mit Anzeigen auf der Seite interagieren kann. Damit eine Anzeigeninteraktion eine Attributionsquelle registriert, muss die Anzeige eine Anfrage mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header senden, um anzugeben, dass die Antwort berechtigt ist, eine Attributionsquelle zu registrieren. Die Registrierung wird abgeschlossen, wenn die Antwort einen geeigneten {{httpheader("Attribution-Reporting-Register-Source")}}-Header enthält. Die Attributionsquelle kann beispielsweise sein:
   - Ein Link. In diesem Fall ist die Interaktion das Klicken des Nutzers auf den Link (direkt über ein {{htmlelement("a")}}-Element oder über einen [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf). Die Quelle wird über die Antwort auf die Navigationsanfrage registriert.
   - Ein Bild wie ein Werbebanner oder ein 1x1-Transparenz-Pixel. In diesem Fall ist die Interaktion das Besuchen der Seite durch den Nutzer. Die Quelle wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion als das spezifiziert werden, was für Ihre App sinnvoll ist – zum Beispiel könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Die Quelle wird registriert, sobald die Antwort zurückkommt.
2. Wenn die Interaktion mit der Attributionsquelle stattfindet, werden die im {{httpheader("Attribution-Reporting-Register-Source")}}-Header zurückgegebenen Quelldaten in einem privaten lokalen Cache gespeichert, auf den nur der Browser zugreifen kann. Diese Daten umfassen die kontextuellen und First-Party-Daten, die der Seite und dem Werbetreibenden zur Verfügung stehen, den Ursprung des Ad-Tech-Unternehmens, das die Konversionsdaten sammelt, und ein oder mehrere Ziele ({{Glossary("registrable_domain", "registrierbare Domains")}}), in denen Sie erwarten, dass die Konversion von dieser Anzeige stattfindet (d.h. die Website(s) des Werbetreibenden, zum Beispiel `shop.example`).
3. Wenn der Nutzer später `shop.example` besucht, kann diese Website einen **Attribution-Trigger** registrieren, wenn eine Interaktion zeigt, dass eine Konversion stattgefunden hat (z. B. der Nutzer klickt auf die Schaltfläche "In den Warenkorb" auf `shop.example`). Der Browser sendet dann eine Anfrage zusammen mit einem {{httpheader("Attribution-Reporting-Eligible")}}-Header, um anzugeben, dass die Antwort berechtigt ist, einen Attribution-Trigger zu registrieren, und die Registrierung wird abgeschlossen, wenn die Antwort einen geeigneten {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header enthält. Der Attribution-Trigger kann beispielsweise sein:
   - Ein Bild wie ein Einkaufswagen-Symbol oder ein 1x1-Transparenz-Pixel. In diesem Fall ist die Interaktion das Besuchen der Seite durch den Nutzer. Der Trigger wird registriert, wenn das Bild geladen wird, d.h. wenn der Server auf die Bildanfrage antwortet.
   - Eine Fetch-Anfrage (d.h. ein [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)). In diesem Fall kann die Interaktion als das spezifiziert werden, was für Ihre App sinnvoll ist – zum Beispiel könnte die Fetch-Anfrage durch ein `click`- oder `submit`-Ereignis ausgelöst werden. Der Trigger wird registriert, sobald die Antwort zurückkommt.
4. Wenn die Trigger-Attribution abgeschlossen ist, versucht der Browser die Daten aus dem [Attribution-Reporting-Register-Trigger](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger)-Header mit einem in dem privaten lokalen Cache gespeicherten Quelldateneintrag (siehe 2.) abzugleichen. Siehe [Registrieren von Attribution-Triggers](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) für die Übereinstimmungsmethodik und Anforderungen.
5. Wenn eine Übereinstimmung hergestellt wird, sendet der Browser Berichts-Daten an einen Endpunkt auf einem Reporting-Server, der typischerweise dem Ad-Tech-Anbieter gehört, wo sie sicher analysiert werden können. Anders als bei Cookies sind die Daten nur für die spezielle Seite verfügbar, zu der Sie sie senden – es werden keine Daten anderweitig geteilt. Diese Berichte können entweder sein:
   - **Ereignisbezogene Berichte**: Berichte basierend auf einem Attributionsquellenereignis, bei dem detaillierte Quelldaten mit groben Triggerdaten verknüpft sind. Zum Beispiel könnte ein Bericht aussehen wie "Klick-ID 200498 auf `ad.shop.example` führte zu einem Kauf auf `shop.example`", wobei "Klick-ID 200498" die detaillierten Quelldaten sind und "Kauf" die groben Triggerdaten sind. Die detaillierten Quelldaten können First-Party- oder kontextuelle Daten von der Quellseite kodieren, und die Triggerdaten können das Ereignis von der Triggerseite kodieren.
   - **Zusammenfassungsberichte**: Detailliertere Berichte, die Daten aus mehreren Konversionen sowohl auf der Quell- als auch auf der Triggerseite kombinieren. Zum Beispiel "Kampagnen-ID 774653 auf `news.example` hat zu 654 Verkäufen von Widgets auf `shop.example` von Nutzern in Italien geführt, mit einem Gesamtumsatz von $9540." Das Erstellen eines Zusammenfassungsberichtes erfordert die Nutzung eines Aggregationsdienstes (siehe zum Beispiel den [Google-Aggregationsdienst](https://github.com/privacysandbox/aggregation-service)).

Für weitere Informationen zur Implementierung der für die oben genannten Schritte erforderlichen Funktionalität, siehe:

1. [Registrieren von Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Registrieren von Attribution-Triggers](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Berichte erstellen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Schnittstellen

Die Attribution Reporting API definiert keine eigenen speziellen Schnittstellen.

### Erweiterungen zu anderen Schnittstellen

- [`HTMLAnchorElement.attributionSrc`](/de/docs/Web/API/HTMLAnchorElement/attributionSrc), [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc), [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc)
  - : Die `attributionSrc`-Eigenschaft ermöglicht es Ihnen, das `attributionsrc`-Attribut auf {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}}-Elementen programmatisch zu setzen und abzurufen. Es spiegelt den Wert dieses Attributs wider.
- [`fetch()`](/de/docs/Web/API/Window/fetch) und der [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, die `attributionReporting`-Option
  - : Bei der Generierung einer Anfrage über [`fetch()`](/de/docs/Web/API/Window/fetch) gibt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`XMLHttpRequest.setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting)
  - : Bei der Generierung einer Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt dies an, dass Sie möchten, dass die Antwort in der Lage ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- [`Window.open()`](/de/docs/Web/API/Window/open), das `attributionsrc`-Feature-Stichwort
  - : Verursacht den Abschluss der Registrierung einer Attributionsquelle _und_ löst aus, dass der Browser die zugehörigen Quelldaten speichert (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header angegeben), wenn die `open()`-Methode abgeschlossen ist. Beachten Sie, dass `Window.open()`-Aufrufe nicht verwendet werden können, um Attributions-Triggers zu registrieren.

## HTML-Elemente

- {{htmlelement("a")}}, {{htmlelement("img")}}, und {{htmlelement("script")}} — das `attributionsrc`-Attribut
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der zugehörigen Ressourcenanforderung sendet. Auf der Serverseite wird dieser Header verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen. Bei der Registrierung einer Attributionsquelle ist dies erforderlich; bei der Registrierung eines Attribution-Triggers ist es nur erforderlich, wenn Sie einen separaten Registrierungsserver zur Ressource angeben möchten, auf die das `src`-Attribut zeigt. Beachten Sie, dass `<a>`-Elemente nicht verwendet werden können, um Attribution-Triggers zu registrieren.

## HTTP-Header

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : HTTP-Anfrage, die angibt, dass die entsprechende Antwort geeignet ist, eine Attributionsquelle oder einen Trigger zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : HTTP-Antwort, die ein Seitenfeature als Attributionsquelle registriert. Dies ist Bestandteil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : HTTP-Antwort, die ein Seitenfeature als Attribution-Trigger registriert. Dies ist Bestandteil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt.
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}}-Direktive
  - : Steuert, ob das aktuelle Dokument die Attributionsberichterstattung verwenden darf.

## Anmeldung und lokale Tests

Um die Attribution Reporting API auf Ihren Websites zu nutzen, müssen Sie sie im [Privatsphäre-Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) angeben. Wenn Sie dies nicht tun, wird der API-Fluss zur Antwortzeit blockiert, d.h. die Antwort-Header werden ignoriert und Quellen und Trigger nicht registriert.

Sie können Ihren Attribution Reporting API-Code dennoch lokal ohne Anmeldung testen. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Sehen Sie sich [Demo: Attribution Reporting API](https://arapi-home.web.app/) für eine Implementierungsbeispiel an (siehe auch den [Quellcode](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting Header Validation tool](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting](https://privacysandbox.google.com/private-advertising/attribution-reporting/) auf privacysandbox.google.com (2023)
- [Aktivieren der Konversionsmessung](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) auf privacysandbox.google.com (2023)
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com (2023)
