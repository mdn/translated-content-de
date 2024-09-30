---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{SeeCompatTable}}{{DefaultAPISidebar("Reporting API")}}

Die Reporting API bietet einen generischen Mechanismus für Webanwendungen, um Berichte basierend auf verschiedenen Plattformfunktionen (z. B. [Content Security Policy](/de/docs/Web/HTTP/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy) oder Berichte über die Abschaffung von Funktionen) auf konsistente Weise verfügbar zu machen.

## Konzepte und Nutzung

Es gibt mehrere verschiedene Funktionen und Probleme auf der Webplattform, die Informationen erzeugen, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites auf andere Weise zu verbessern. Solche Informationen können umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy).
- Verwendung veralteter Funktionen (wenn Sie etwas verwenden, das bald in Browsern nicht mehr funktionieren wird).
- Das Auftreten von Abstürzen.
- Das Auftreten von Nutzeragenteninterventionen (wenn der Browser etwas blockiert, was Ihr Code zu tun versucht, weil es z. B. als Sicherheitsrisiko oder einfach nur ärgerlich angesehen wird, wie das automatische Abspielen von Audio).

Der Zweck der Reporting API ist es, einen konsistenten Berichtsmechanismus bereitzustellen, der genutzt werden kann, um solche Informationen in Form von Berichten, die durch JavaScript-Objekte repräsentiert werden, für Entwickler verfügbar zu machen. Es gibt einige Möglichkeiten, sie zu verwenden, die in den folgenden Abschnitten ausführlich beschrieben werden.

### Reporting-Server-Endpunkte

Jeder eindeutige Ursprung, für den Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" erhalten, bei denen es sich um benannte URLs (oder Gruppen von URLs) handelt, von denen ein Nutzeragent Berichte senden kann. Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln, verarbeiten und nach Bedarf an Ihre Anwendung weitergeben.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details über die verschiedenen Endpunkte anzugeben, die einem Nutzeragenten zur Verfügung stehen, um Berichte zu liefern. Die `report-to` Direktive kann dann in bestimmten HTTP-Antwort-Headern verwendet werden, um den spezifischen Endpunkt anzugeben, der für den zugehörigen Bericht verwendet wird. Beispielsweise kann die CSP {{CSP("report-to")}} Direktive auf den {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Headern verwendet werden, um den Endpunkt anzugeben, an den CSP-Verstoßberichte gesendet werden sollen.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung eines Berichts – ein Bericht könnte immer noch nicht erfasst werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden vom Nutzeragenten in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet. Sie sind Serialisierungen von [`Report`](/de/docs/Web/API/Report)-Objekten, wobei der `type` den Berichtstyp angibt, die `url` den Ursprung des Berichts angibt und der `body` eine Serialisierung der API-Schnittstelle enthält, die dem Berichtstyp entspricht. Zum Beispiel haben CSP-Verletzungsberichte einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

Die an Endpunkte gesendeten Berichte können unabhängig vom tatsächlichen Betrieb der damit verbundenen Websites abgerufen werden, was nützlich ist – ein Absturz könnte zum Beispiel eine Website lahmlegen und alles zum Stoppen bringen, aber ein Bericht könnte immer noch abgerufen werden, um dem Entwickler Hinweise darauf zu geben, warum es passiert ist.

### Reporting-Observer

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte abgerufen werden, die über JavaScript innerhalb der Website erstellt werden, auf der Sie Berichte erhalten möchten. Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da ein Seitenabsturz das Abrufen der Berichte verhindern könnte – allerdings ist sie einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird mit dem [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) Konstruktor erstellt, dem zwei Parameter übergeben werden:

- Eine Rückruffunktion mit zwei Parametern – ein Array der im Beobachter-Berichtswarteschlange verfügbaren Berichte und eine Kopie des gleichen `ReportingObserver`-Objekts, das die Beobachtung direkt aus dem Inneren des Rückrufs steuern lässt. Der Rückruf wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, das es Ihnen ermöglicht, den Typ der zu sammelnden Berichte anzugeben und ob Berichte, die vor der Erstellung des Beobachters generiert wurden, beobachtbar sein sollen (`buffered: true`).

Dem Beobachter stehen dann Methoden zur Verfügung, um mit der Berichterfassung zu beginnen ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die Berichte aus der aktuellen Warteschlange abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Beobachter zu trennen, damit er keine Berichte mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Die an Reporting-Endpunkte und Reporting-Observer gesendeten Berichte sind im Wesentlichen gleich: sie haben eine Ursprungs-`url`, einen `type` und einen `body`, der eine Instanz der Schnittstelle ist, die mit diesem Typ korrespondiert. Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von Bericht `type` zu `body` wird unten angezeigt.

| `type`          | `body`                                | Gemeldete Elemente                                                                  |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------ |
| `deprecation`   | [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)  | Veraltete Funktionen, die von der Website verwendet werden.                          |
| `intervention`  | [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) | Funktionen, die durch den Nutzer agent blockiert werden, z.B., wenn keine Berechtigungen erteilt wurden. |
| `csp-violation` | [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) | Verstöße gegen die CSP-Richtlinie der Website.                                       |

### Berichte mit WebDriver generieren

Die Reporting API-Spezifikation definiert auch eine "Generate Test Report" [WebDriver](/de/docs/Web/WebDriver) Erweiterung, die es Ihnen ermöglicht, die Berichtserstellung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportObserver`-Objekten beobachtet, die in der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
  - : Enthält Details zu veralteten Webplattform-Funktionen, die eine Website verwendet.
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)
  - : Enthält Details zu einem Interventionsbericht, der generiert wird, wenn eine von der Website gestellte Anfrage vom Browser abgelehnt wurde; z.B. aus Sicherheitsgründen.
- [`Report`](/de/docs/Web/API/Report)
  - : Ein Objekt, das einen einzelnen Bericht darstellt.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, während sie generiert werden.

### Verwandte Schnittstellen

Diese Schnittstellen sind als Teil der [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Spezifikationen definiert:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
  - : Enthält Details zu einem CSP-Verstoß.
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem Element, Dokument oder Worker ausgelöst wird, wenn seine CSP verletzt wird.

## Verwandte HTTP-Header

Diese HTTP-Antwort-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL der Reporting-Endpunkte fest.
    Diese Endpunkte können in der `report-to` Direktive verwendet werden, die mit einer Reihe von HTTP-Headern verwendet werden kann, einschließlich {{httpheader("Content-Security-Policy")}} und/oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Legt den Namen und die URL von Reporting-Endpunktgruppen fest, die mit einer Reihe von HTTP-Headern verwendet werden dürfen, einschließlich `Content-Security-Policy`.

Reporting-Endpunkte können für die folgenden Berichte mit der `report-to` Direktive auf den entsprechenden Headern festgelegt werden:

- CSP-Verstöße

  - : {{CSP("report-to")}} auf {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

## Beispiele

### Bericht über veraltete Funktionen

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) Beispiel erstellen wir einen einfachen Reporting-Observer, um die Verwendung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir sagen dann dem Observer, dass er mit der Beobachtung beginnen soll, indem wir [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) verwenden; dies teilt dem Observer mit, dass er beginnt, Berichte in seiner Berichtswarteschlange zu sammeln, und führt die in den Konstruktor eingebettete Rückruffunktion aus:

```js
observer.observe();
```

Später im Beispiel verwenden wir absichtlich die veraltete Version von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia):

```js
if (navigator.mozGetUserMedia) {
  navigator.mozGetUserMedia(constraints, success, failure);
} else {
  navigator.getUserMedia(constraints, success, failure);
}
```

Dies führt dazu, dass ein Bericht zur Veraltung erstellt wird; aufgrund des Ereignishandlers, den wir innerhalb des `ReportingObserver()`-Konstruktors festgelegt haben, können wir jetzt auf den Button klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken darunter über eine veraltete Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [kompletten Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete `getUserMedia()`-Methode tatsächlich zweimal aufrufen. Nach dem ersten Mal rufen wir [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) auf, was den ersten erzeugten Bericht zurückgibt und die Warteschlange leert. Aufgrund dessen wird beim Drücken des Buttons nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die API wird von Chromium-Browsern und von Firefox hinter einem Präferenzschalter (`dom.reporting.enabled`) unterstützt.

Siehe die speziellen Schnittstellen für detailliertere Informationen zur Unterstützung.

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy)
