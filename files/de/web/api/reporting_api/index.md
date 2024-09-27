---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{SeeCompatTable}}{{DefaultAPISidebar("Reporting API")}}

Die Reporting API bietet einen generischen Mechanismus für Webanwendungen, um Berichte basierend auf verschiedenen Plattformfunktionen (z.B. [Content Security Policy](/de/docs/Web/HTTP/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy) oder Berichte über veraltete Funktionen) auf konsistente Weise bereitzustellen.

## Konzepte und Nutzung

Es gibt mehrere verschiedene Funktionen und Probleme auf der Webplattform, die Informationen generieren, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites anderweitig zu verbessern. Solche Informationen können umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy).
- Verwendung veralteter Funktionen (wenn Sie etwas verwenden, das bald in Browsern nicht mehr funktioniert).
- Auftreten von Abstürzen.
- Auftreten von Benutzeragenten-Interventionen (wenn der Browser etwas blockiert, das Ihr Code ausführen möchte, weil es beispielsweise als Sicherheitsrisiko eingestuft wird oder einfach nur störend ist, wie automatisches Abspielen von Audio).

Der Zweck der Reporting API ist es, einen konsistenten Berichtmechanismus bereitzustellen, der verwendet werden kann, um solche Informationen Entwicklern in Form von Berichten, die durch JavaScript-Objekte dargestellt werden, verfügbar zu machen. Es gibt mehrere Möglichkeiten, sie zu verwenden, die in den folgenden Abschnitten detailliert behandelt werden.

### Bericht-Server-Endpunkte

Jeder eindeutigen Herkunft, für die Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" zugewiesen werden, bei denen es sich um benannte URLs (oder Gruppen von URLs) handelt, an die Berichte von einem Benutzeragenten gesendet werden können. Ein Bericht-Server an diesen Endpunkten kann die Berichte sammeln und sie nach Bedarf für Ihre Anwendung verarbeiten und präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details zu den verschiedenen Endpunkten anzugeben, die einem Benutzeragenten für die Übertragung von Berichten zur Verfügung stehen. Die `report-to` Direktive kann dann auf bestimmten HTTP-Antwort-Headern verwendet werden, um den spezifischen Endpunkt anzugeben, der für den zugehörigen Bericht verwendet wird. Zum Beispiel kann die {{CSP("report-to")}} Direktive auf den {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Headern verwendet werden, um den Endpunkt anzugeben, an den CSP-Verstöße gesendet werden sollten.

> [!NOTE]
> Es gibt keine absolute Garantie für die Berichtsübermittlung — ein Bericht könnte dennoch nicht erfasst werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden von dem Benutzeragenten in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet. Sie sind Serialisierungen von [`Report`](/de/docs/Web/API/Report) Objekten, wobei der `type` den Berichtstyp angibt, die `url` die Herkunft des Berichts angibt und der `body` eine Serialisierung der API-Schnittstelle enthält, die dem Berichtstyp entspricht. Zum Beispiel haben CSP-Verstöße einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

Berichte, die an Endpunkte gesendet werden, können unabhängig vom Betrieb der Websites, auf die sie sich beziehen, abgerufen werden, was nützlich ist — ein Absturz könnte beispielsweise eine Website lahmlegen und alles stoppen, aber ein Bericht könnte dennoch erhalten werden, um dem Entwickler einige Hinweise zu geben, warum es passiert ist.

### Reporting-Beobachter

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objekte abgerufen werden, die über JavaScript innerhalb der Website erstellt werden, für die Sie Berichte erhalten möchten. Diese Methode ist nicht so zuverlässig wie das Senden von Berichten an den Server, da ein Seitenabsturz das Abrufen der Berichte stoppen könnte — aber es ist einfacher einzurichten und flexibler.

Ein `ReportingObserver` Objekt wird mit dem [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) Konstruktor erstellt, der zwei Parameter erhält:

- Eine Callback-Funktion mit zwei Parametern — ein Array der in der Berichtwarteschlange des Beobachters verfügbaren Berichte und eine Kopie desselben `ReportingObserver` Objekts, die es ermöglicht, die Beobachtung direkt aus der Callback-Funktion zu steuern. Die Callback-Funktion wird aufgerufen, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, das es Ihnen ermöglicht, den Typ der zu sammelnden Berichte anzugeben und ob Berichte, die vor der Erstellung des Beobachters generiert wurden, beobachtbar sein sollen (`buffered: true`).

Methoden stehen dann am Beobachter zur Verfügung, um Berichte zu sammeln ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die derzeit in der Berichtwarteschlange vorhandenen Berichte abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Beobachter zu trennen, sodass er keine Aufzeichnungen mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Berichtendpunkte und Berichtbeobachter gesendet werden, sind im Wesentlichen gleich: sie haben eine Herkunfts-`url`, einen `type` und einen `body`, der eine Instanz der Schnittstelle ist, die diesem Typ entspricht. Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von Bericht-`type` zu `body` wird unten gezeigt.

| `type`          | `body`                                                              | Berichtete Elemente                                                                       |
| --------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `deprecation`   | [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)   | Auf der Website verwendete, veraltete Funktionen.                                         |
| `intervention`  | [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) | Vom Benutzeragenten blockierte Funktionen, z.B. wenn Berechtigungen nicht erteilt werden. |
| `csp-violation` | [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) | Verstöße gegen die CSP-Richtlinie der Website.                                            |

### Berichte über WebDriver generieren

Die Reporting API-Spezifikation definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver) Erweiterung, die es ermöglicht, die Berichterstellung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportObserver` Objekten, die auf der geladenen Website vorhanden sind, beobachtet. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
  - : Enthält Details zu veralteten Webplattform-Funktionen, die eine Website verwendet.
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)
  - : Enthält Details zu einem Eingriff-Bericht, der generiert wird, wenn eine von der Website gestellte Anfrage vom Browser abgelehnt wird; z.B. aus Sicherheitsgründen.
- [`Report`](/de/docs/Web/API/Report)
  - : Ein Objekt, das einen einzelnen Bericht darstellt.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und auf sie zuzugreifen, sobald sie generiert werden.

### Verwandte Schnittstellen

Diese Schnittstellen sind Teil der HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Spezifikationen definiert:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
  - : Enthält Details zu einem CSP-Verstoß.
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Stellt das Ereignisobjekt eines `securitypolicyviolation` Ereignisses dar, das auf ein Element, Dokument oder Worker abgefeuert wird, wenn seine CSP verletzt wird.

## Verwandte HTTP-Header

Diese HTTP-Antwort-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL der Berichtendpunkte fest. Diese Endpunkte können in der `report-to` Direktive verwendet werden, die mit einer Anzahl von HTTP-Headern einschließlich {{httpheader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Legt den Namen und die URL von Berichtendpunktgruppen fest, die mit einer Anzahl von HTTP-Headern einschließlich `Content-Security-Policy` verwendet werden können.

Berichtsendpunkte können für die folgenden Berichte mithilfe der `report-to` Direktive auf den entsprechenden Headern gesetzt werden:

- CSP-Verstöße

  - : {{CSP("report-to")}} auf {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

## Beispiele

### Berichte über veraltete Funktionen

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) Beispiel erstellen wir einen einfachen Berichtsbeobachter, um die Verwendung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir sagen ihm dann, dass er damit beginnen soll, Berichte mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) zu beobachten; dies teilt dem Beobachter mit, dass er Berichte in seiner Berichtwarteschlange sammeln und die im Konstruktor angegebene Callback-Funktion ausführen soll:

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

Dies führt dazu, dass ein Bericht über veraltete Funktionen generiert wird; aufgrund des Ereignis-Handlers, den wir im `ReportingObserver()` Konstruktor eingerichtet haben, können wir jetzt auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen unten angezeigten Statistiken über eine veraltete Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir tatsächlich die veraltete `getUserMedia()` Methode zweimal aufrufen. Nach dem ersten Mal rufen wir [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) auf, das den ersten generierten Bericht zurückgibt und die Warteschlange leert. Aufgrund dessen wird, wenn die Schaltfläche gedrückt wird, nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die API wird von Chromium-Browsern und von Firefox hinter einer Einstellung (`dom.reporting.enabled`) unterstützt.

Sehen Sie sich die spezifischen Schnittstellen für detailliertere Informationen zur Unterstützung an.

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy)
