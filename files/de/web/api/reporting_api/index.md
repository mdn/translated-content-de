---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 43e2a741865dd45ad5f18bb532fe84c6aaec0e77
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting-API bietet einen generischen Berichtsmechanismus für Webanwendungen, um Berichte basierend auf verschiedenen Plattformfunktionen (z. B. [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Feature-Abschaltungsberichte) in konsistenter Weise verfügbar zu machen.

## Konzepte und Nutzung

Es gibt mehrere unterschiedliche Funktionen und Probleme auf der Webplattform, die Informationen erzeugen, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites anderweitig zu verbessern. Solche Informationen können Folgendes umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Verstöße gegen die [Integrity-Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy).
- Nutzung veralteter Funktionen (wenn Sie etwas verwenden, das in Browsern bald nicht mehr funktionieren wird).
- Auftreten von Abstürzen.
- Auftreten von User-Agent-Interventionen (wenn der Browser etwas blockiert, das Ihr Code zu tun versucht, weil es beispielsweise als Sicherheitsrisiko angesehen wird oder einfach nur nervig ist, wie das automatische Abspielen von Audio).

Der Zweck der Reporting-API ist es, einen konsistenten Berichtsmechanismus bereitzustellen, mit dem solche Informationen Entwicklern in Form von Berichten verfügbar gemacht werden können, die durch JavaScript-Objekte repräsentiert werden. Es gibt einige Möglichkeiten, sie zu nutzen, die in den folgenden Abschnitten detailliert beschrieben werden.

### Reporting-Server-Endpunkte

Jeder eindeutige Ursprung, für den Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" erhalten, das sind benannte URLs (oder Gruppen von URLs), an die Berichte von einem User-Agent gesendet werden können.
Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln, verarbeiten und nach Bedarf für Ihre Anwendung präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details über die verschiedenen Endpunkte anzugeben, die einem User-Agent für die Zustellung von Berichten zur Verfügung stehen.
Die `report-to` Direktive kann dann in bestimmten HTTP-Antwort-Headern verwendet werden, um den spezifischen Endpunkt anzugeben, der für den zugehörigen Bericht verwendet wird.
Zum Beispiel kann die CSP {{CSP("report-to")}} Direktive in den {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Headern verwendet werden, um den Endpunkt anzugeben, an den CSP-Verstoßberichte gesendet werden sollen.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten — ein Bericht könnte immer noch nicht gesammelt werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden vom User-Agent in einem `POST`-Vorgang mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet.
Sie sind Serialisierungen von [`Report`](/de/docs/Web/API/Report)-Objekten, wobei der `type` den Berichtstyp angibt, die `url` den Ursprung des Berichts und der `body` eine Serialisierung der API-Schnittstelle, die dem Berichtstyp entspricht, enthält.
Zum Beispiel haben CSP-Verstoßberichte einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

Berichte, die an Endpunkte gesendet werden, können unabhängig vom Betrieb der Websites, auf die sie sich beziehen, abgerufen werden, was nützlich ist — ein Absturz könnte beispielsweise eine Website lahmlegen und alles stoppen, könnte jedoch trotzdem einen Bericht bringen, um dem Entwickler Hinweise darauf zu geben, warum es passiert ist.

### Reporting-Observer

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte erlangt werden, die über JavaScript innerhalb der Website erstellt werden, bei der Sie Berichte erhalten möchten.
Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da ein Seitenabsturz Sie möglicherweise daran hindern könnte, die Berichte abzurufen — sie ist jedoch einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird mit dem [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktor erstellt, dem zwei Parameter übergeben werden:

- Eine Callback-Funktion mit zwei Parametern — ein Array der in der Beobachterberichtswarteschlange verfügbaren Berichte und eine Kopie desselben `ReportingObserver`-Objekts, mit dem die Überwachung direkt aus dem Inneren des Callbacks gesteuert werden kann. Der Callback wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, mit dem Sie den Berichtstypen angeben können, den Sie sammeln möchten, und ob Berichte, die vor der Erstellung des Observers generiert wurden, beobachtbar sein sollen (`buffered: true`).

Anschließend stehen dem Observer Methoden zur Verfügung, um Berichte zu sammeln ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die Berichte in der Berichts-Warteschlange abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Observer zu trennen, sodass er keine Berichte mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Reporting-Endpunkte und Reporting-Observer gesendet werden, sind im Wesentlichen gleich: Sie haben eine Origin-`url`, einen `type` und einen `body`, der eine Instanz der Schnittstelle ist, die diesem Typ entspricht.
Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von Berichtstypen zu `body` wird unten gezeigt.

| `type`                | `body`                                                                          | Berichtete Einträge                                                                                   |
| --------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `deprecation`         | [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)               | Veraltete Funktionen, die von der Site verwendet werden.                                              |
| `integrity-violation` | [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) | Verstöße gegen die Integritätsrichtlinie der Seite.                                                   |
| `intervention`        | [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)             | Funktionen, die vom Benutzeragenten blockiert wurden, z. B. wenn Berechtigungen nicht erteilt werden. |
| `csp-violation`       | [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)             | Verstöße gegen die CSP-Richtlinie der Website.                                                        |

### Berichte über WebDriver generieren

Die Reporting-API-Spezifikation definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver) Erweiterung, die es ermöglicht, die Berichtserstellung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportObserver`-Objekten in der geladenen Website beobachtet. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
  - : Enthält Details zu veralteten Webplattform-Funktionen, die eine Website verwendet.
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)
  - : Enthält Details zu einem Interventionsbericht, der generiert wird, wenn eine von der Website gestellte Anfrage vom Browser abgelehnt wurde; z.B. aus Sicherheitsgründen.
- [`Report`](/de/docs/Web/API/Report)
  - : Ein Objekt, das einen einzelnen Bericht darstellt.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, sobald sie generiert werden.

### Verwandte Schnittstellen

Diese Schnittstellen sind Teil der HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Spezifikationen:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
  - : Enthält Details zu einem CSP-Verstoß.
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem Element, Dokument oder Worker ausgelöst wird, wenn dessen CSP verletzt wird.

Diese Schnittstelle ist Teil der [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Spezifikation:

- [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)
  - : Enthält Informationen über eine Ressource, die blockiert wurde, weil sie die Integritätsgarantien der Subressource nicht erfüllt hat, die von ihrer {{httpheader("Integrity-Policy")}} gefordert werden, oder die für Berichte in "Nur-Bericht"-Richtlinien blockiert werden würde, die mit {{httpheader("Integrity-Policy-Report-Only")}} festgelegt wurden.

## Verwandte HTTP-Header

Diese HTTP-Antwort-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL von Reporting-Endpunkten fest.
    Diese Endpunkte können in der `report-to` Direktive verwendet werden, die mit einer Reihe von HTTP-Headern, einschließlich {{httpheader("Content-Security-Policy")}} und {{HTTPHeader("Content-Security-Policy-Report-Only")}}, verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Nicht mehr Teil der Reporting-API, aber immer noch von einigen Browsern unterstützt. Dies legt den Namen und die URL von Reporting-Endpunktgruppen fest, die mit einer Reihe von HTTP-Headern, insbesondere für [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging), verwendet werden können, das noch nicht aktualisiert wurde, um `Reporting-Endpoints` zu unterstützen. Andere Reporting-API-Berichte sollten stattdessen `Reporting-Endpoints` verwenden, um eine bessere zukünftige Unterstützung zu gewährleisten.

Berichts-Endpunkte können für die folgenden Berichte mit der {{CSP("report-to")}} Direktive auf den entsprechenden Headern festgelegt werden:

- CSP-Verstöße
  - : {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

Berichts-Endpunkte können für die folgenden Berichte mit dem [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Feld in einem strukturierten Wörterbuch auf den entsprechenden Headern festgelegt werden:

- Integrity-Policy-Verstöße
  - : {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}}.

## Beispiele

### Veraltete Funktionen melden

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html)-Beispiel erstellen wir einen einfachen Reporting-Observer, um die Nutzung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir fordern ihn dann auf, Berichte mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) zu beobachten; dies weist den Observer an, Berichte in seiner Berichts-Warteschlange zu sammeln und die im Konstruktor angegebene Callback-Funktion auszuführen:

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

Dies führt dazu, dass ein Veraltungsbericht erstellt wird; aufgrund des Ereignis-Handlers, den wir im Inneren des `ReportingObserver()`-Konstruktors eingerichtet haben, können wir nun auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken darunter über eine veraltete Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete `getUserMedia()`-Methode tatsächlich zweimal aufrufen. Nach dem ersten Aufruf rufen wir [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) auf, das den ersten generierten Bericht zurückgibt und die Warteschlange leert. Daher wird beim Drücken der Schaltfläche nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
