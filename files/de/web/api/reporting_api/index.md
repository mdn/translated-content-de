---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting API stellt einen generischen Mechanismus für Webanwendungen bereit, um Berichte basierend auf verschiedenen Plattformfunktionen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Berichte über die Veralterung von Funktionen) auf konsistente Weise verfügbar zu machen.

## Konzepte und Nutzung

Es gibt mehrere verschiedene Funktionen und Probleme auf der Webplattform, die Informationen generieren, die nützlich für Webentwickler sind, wenn sie versuchen, Bugs zu beheben oder ihre Websites anderweitig zu verbessern. Solche Informationen können Folgendes beinhalten:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Nutzung veralteter Funktionen (wenn Sie etwas verwenden, das bald in Browsern nicht mehr funktionieren wird).
- Auftreten von Abstürzen.
- Auftreten von Benutzeragenten-Eingriffen (wenn der Browser etwas blockiert, das Ihr Code ausführen möchte, weil es beispielsweise als Sicherheitsrisiko oder einfach als lästig angesehen wird, wie das automatische Abspielen von Audio).

Zweck der Reporting API ist es, einen konsistenten Berichtmechanismus bereitzustellen, der verwendet werden kann, um solche Informationen in Form von Berichten, die durch JavaScript-Objekte dargestellt werden, für Entwickler verfügbar zu machen. Es gibt ein paar Möglichkeiten, wie man sie verwenden kann, die in den folgenden Abschnitten detailliert beschrieben werden.

### Reporting-Server-Endpunkte

Jeder eindeutige Ursprung, für den Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" erhalten. Dies sind benannte URLs (oder Gruppen von URLs), an die ein Benutzeragent Berichte senden kann. Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln, verarbeiten und in einer für Ihre Anwendung erforderlichen Weise präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details über die verschiedenen Endpunkte zu spezifizieren, die ein Benutzeragent für die Übermittlung von Berichten zur Verfügung hat.
Die `report-to` Direktive kann dann auf bestimmten HTTP-Antwort-Headern verwendet werden, um den spezifischen Endpunkt anzugeben, der für den zugehörigen Bericht verwendet wird.
Zum Beispiel kann die CSP {{CSP("report-to")}} Direktive auf den {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Headern verwendet werden, um den Endpunkt anzugeben, an den Berichte über CSP-Verstöße gesendet werden sollen.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten — ein Bericht könnte immer noch nicht erfasst werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden vom Benutzeragenten in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet. Sie sind Serialisierungen von [`Report`](/de/docs/Web/API/Report)-Objekten, wobei der `type` den Berichttyp angibt, die `url` den Ursprung des Berichts und der `body` eine Serialisierung der API-Schnittstelle enthält, die dem Berichttyp entspricht.
Zum Beispiel haben Berichte über CSP-Verstöße einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

Berichte, die an Endpunkte gesendet werden, können unabhängig vom Betrieb der Websites, auf die sie sich beziehen, abgerufen werden, was nützlich ist — ein Absturz könnte beispielsweise eine Website zum Einsturz bringen und alles stoppen, aber ein Bericht könnte trotzdem erhalten werden, um dem Entwickler Hinweise darauf zu geben, warum es passiert ist.

### Reporting-Observer

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte abgerufen werden, die über JavaScript innerhalb der Website erstellt werden, die Sie Berichte erhalten möchten. Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da ein Seitenabsturz das Abrufen der Berichte verhindern könnte — aber sie ist einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird unter Verwendung des [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktors erstellt, der zwei Parameter erhält:

- Eine Callback-Funktion mit zwei Parametern — ein Array der im Berichtwarteschlange des Observers verfügbaren Berichte und eine Kopie desselben `ReportingObserver`-Objekts, das es ermöglicht, die Beobachtung direkt aus dem Callback heraus zu steuern. Der Callback wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, das es Ihnen ermöglicht, den Berichttyp anzugeben, den Sie sammeln möchten, und ob Berichte, die vor dem Erstellen des Observers generiert wurden, beobachtbar sein sollen (`buffered: true`).

Für den Observer stehen dann Methoden zur Verfügung, um mit dem Sammeln von Berichten zu beginnen ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die Berichte, die sich derzeit in der Warteschlange befinden, abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Observer zu trennen, damit er keine Aufzeichnungen mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Reporting-Endpunkte und Reporting-Observer gesendet werden, sind im Wesentlichen gleich: Sie haben eine Herkunfts-`url`, einen `type` und einen `body`, der eine Instanz der Schnittstelle ist, die diesem Typ entspricht. Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von Bericht-`type` zu `body` wird unten gezeigt.

| `type`          | `body`                                                              | Gemeldete Elemente                                                                                       |
| --------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `deprecation`   | [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)   | Veraltete Funktionen, die von der Website verwendet werden.                                              |
| `intervention`  | [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) | Funktionen, die vom Benutzeragent blockiert wurden, zum Beispiel wenn Berechtigungen nicht erteilt sind. |
| `csp-violation` | [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) | Verstöße gegen die CSP-Richtlinie der Website.                                                           |

### Berichte über WebDriver generieren

Die Reporting API Spezifikation definiert auch eine Erweiterung für Generate Test Report [WebDriver](/de/docs/Web/WebDriver), die es Ihnen ermöglicht, die Berichtserstellung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportObserver`-Objekten beobachtet, die in der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
  - : Enthält Details zu veralteten Webplattform-Funktionen, die eine Website verwendet.
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)
  - : Enthält Details zu einem Interventionsbericht, der generiert wird, wenn eine von der Website gestellte Anfrage vom Browser abgelehnt wurde, z.B. aus Sicherheitsgründen.
- [`Report`](/de/docs/Web/API/Report)
  - : Ein Objekt, das einen einzelnen Bericht darstellt.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, während sie generiert werden.

### Verwandte Schnittstellen

Diese Schnittstellen sind Teil der HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Spezifikationen definiert:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
  - : Enthält Details zu einem CSP-Verstoß.
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Stellt das Ereignisobjekt eines `securitypolicyviolation` Ereignisses dar, das auf einem Element, Dokument oder Worker ausgelöst wird, wenn seine CSP verletzt ist.

## Verwandte HTTP-Header

Diese HTTP-Antwort-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL von Reporting-Endpunkten fest.
    Diese Endpunkte können in der `report-to` Direktive verwendet werden, die mit einer Reihe von HTTP-Headern einschließlich {{httpheader("Content-Security-Policy")}} und {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Legt den Namen und die URL von Reporting-Endpunktgruppen fest, die mit einer Reihe von HTTP-Headern einschließlich `Content-Security-Policy` verwendet werden können.

Berichtendpunkte können für die folgenden Berichte mithilfe der `report-to` Direktive auf den entsprechenden Headern festgelegt werden:

- CSP-Verstöße

  - : {{CSP("report-to")}} auf {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

## Beispiele

### Berichterstattung über veraltete Funktionen

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) Beispiel erstellen wir einen einfachen Reporting-Observer, um die Nutzung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir sagen ihm dann, dass er mit dem Beobachten der Berichte mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) beginnen soll; dies veranlasst den Observer, Berichte in seiner Warteschlange zu sammeln und die im Konstruktor spezifizierte Callback-Funktion auszuführen:

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

Dies führt dazu, dass ein Veralterungsbericht generiert wird; aufgrund des Ereignishandlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir nun auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken darunter über eine veraltete Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete `getUserMedia()`-Methode tatsächlich zweimal aufrufen. Nach dem ersten Mal rufen wir [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) auf, was den ersten generierten Bericht zurückgibt und die Warteschlange leert. Aufgrund dessen wird nur der zweite Bericht aufgelistet, wenn die Schaltfläche gedrückt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die API wird von Chromium-Browsern unterstützt und von Firefox hinter einer Einstellung (`dom.reporting.enabled`).

Sehen Sie sich die spezifischen Schnittstellen für detailliertere Unterstützungsinformationen an.

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
