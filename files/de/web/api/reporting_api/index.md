---
title: Reporting-API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Reporting API")}}

Die Reporting-API bietet einen generischen Berichtsmechanismus für Webanwendungen, um Berichte basierend auf verschiedenen Plattformfunktionen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy) oder Berichte über das Veralten von Funktionen) auf konsistente Weise verfügbar zu machen.

## Konzepte und Verwendung

Es gibt mehrere unterschiedliche Funktionen und Probleme auf der Webplattform, die Informationen generieren, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites auf andere Weise zu verbessern. Solche Informationen können umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy).
- Nutzung veralteter Funktionen (wenn Sie etwas verwenden, das bald in Browsern nicht mehr funktionieren wird).
- Auftreten von Abstürzen.
- Auftreten von Benutzer-Agent-Interventionen (wenn der Browser etwas blockiert, das Ihr Code auszuführen versucht, da es beispielsweise als Sicherheitsrisiko angesehen wird oder einfach nur störend ist, wie automatisch abgespielte Audioinhalte).

Der Zweck der Reporting-API besteht darin, einen konsistenten Berichtsmechanismus bereitzustellen, der verwendet werden kann, um solche Informationen Entwicklern in Form von Berichten zur Verfügung zu stellen, die durch JavaScript-Objekte repräsentiert werden. Es gibt einige Möglichkeiten, sie zu verwenden, die in den folgenden Abschnitten detailliert beschrieben werden.

### Berichtsserver-Endpunkte

Jeder eindeutigen Quelle, für die Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" zugewiesen werden, bei denen es sich um benannte URLs (oder Gruppen von URLs) handelt, an die Berichte von einem Benutzer-Agent gesendet werden können. Ein Berichtsserver an diesen Endpunkten kann die Berichte sammeln, verarbeiten und nach Bedarf für Ihre Anwendung anzeigen.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details zu den verschiedenen Endpunkten anzugeben, die einem Benutzer-Agenten für die Bereitstellung von Berichten zur Verfügung stehen. Die `report-to`-Direktive kann dann in bestimmten HTTP-Antwortheadern verwendet werden, um den spezifischen Endpunkt anzuzeigen, der für den zugehörigen Bericht verwendet wird. Zum Beispiel kann die CSP-Direktive {{CSP("report-to")}} auf den HTTP-Headern {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwendet werden, um den Endpunkt festzulegen, an den CSP-Verstoßberichte gesendet werden sollen.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten — ein Bericht könnte immer noch fehlschlagen, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden vom Benutzer-Agenten in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet. Sie sind Serialisierungen von {{domxref("Report")}}-Objekten, wobei der `type` den Berichtstyp angibt, die `url` den Ursprung des Berichts angibt und der `body` eine Serialisierung der API-Schnittstelle enthält, die dem Berichtstyp entspricht. Zum Beispiel haben CSP-Verstoßberichte einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines {{domxref("CSPViolationReportBody")}}-Objekts ist.

Berichte, die an Endpunkte gesendet werden, können unabhängig vom Betrieb der damit verbundenen Websites abgerufen werden, was nützlich ist — ein Absturz zum Beispiel könnte eine Website lahmlegen und alles stoppen, aber ein Bericht könnte immer noch erhalten werden, um dem Entwickler Hinweise zu geben, warum es passiert ist.

### Reporting-Observer

Berichte können auch über {{domxref("ReportingObserver")}}-Objekte abgerufen werden, die über JavaScript innerhalb der Website erstellt werden, auf der Sie Berichte erhalten möchten. Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da ein Seitenabsturz verhindern könnte, dass Sie die Berichte abrufen — aber es ist einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird unter Verwendung des {{domxref("ReportingObserver.ReportingObserver", "ReportingObserver()")}}-Konstruktors erstellt, dem zwei Parameter übergeben werden:

- Eine Rückruffunktion mit zwei Parametern — einem Array der Berichte, die sich in der Berichtswarteschlange des Beobachters befinden, und einer Kopie desselben `ReportingObserver`-Objekts, wodurch die Beobachtung direkt von innerhalb des Rückrufs gesteuert werden kann. Der Rückruf wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, mit dem Sie den Typ der zu sammelnden Berichte und ob Berichte, die vor der Erstellung des Beobachters generiert wurden, beobachtbar sein sollen (`buffered: true`), angeben können.

Anschließend stehen Methoden am Beobachter zur Verfügung, um Berichte zu sammeln ({{domxref("ReportingObserver.observe()")}}), die Berichte abzurufen, die sich derzeit in der Berichtswarteschlange befinden ({{domxref("ReportingObserver.takeRecords()")}}), und den Beobachter zu trennen, sodass er keine Aufzeichnungen mehr sammeln kann ({{domxref("ReportingObserver.disconnect()")}}).

### Berichtstypen

Berichte, die an Berichts-Endpunkte und Berichts-Observer gesendet werden, sind im Wesentlichen die gleichen: Sie haben einen Ursprung `url`, einen `type` und einen `body`, der eine Instanz der Schnittstelle ist, die diesem Typ entspricht. Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von `type` zu `body` ist unten dargestellt.

| `type`          | `body`                                | Gemeldete Elemente                                                                  |
| --------------- | ------------------------------------- | ---------------------------------------------------------------------------------- |
| `deprecation`   | {{domxref("DeprecationReportBody")}}  | Veraltete Funktionen, die von der Website verwendet werden.                        |
| `intervention`  | {{domxref("InterventionReportBody")}} | Vom Benutzer-Agent blockierte Funktionen, zum Beispiel, wenn keine Berechtigungen erteilt werden. |
| `csp-violation` | {{domxref("CSPViolationReportBody")}} | Verstöße gegen die CSP-Richtlinie der Website.                                      |

### Berichte über WebDriver generieren

Die Reporting-API-Spezifikation definiert auch eine Erweiterung zur Erzeugung von Testberichten für [WebDriver](/de/docs/Web/WebDriver), die es ermöglicht, die Berichterstellung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportObserver`-Objekten beobachtet, die in der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- {{domxref("DeprecationReportBody")}}
  - : Enthält Details zu veralteten Webplattform-Funktionen, die eine Website verwendet.
- {{domxref("InterventionReportBody")}}
  - : Enthält Details zu einem Interventionsbericht, der generiert wird, wenn eine von der Website gestellte Anfrage vom Browser abgelehnt wurde; z. B. aus Sicherheitsgründen.
- {{domxref("Report")}}
  - : Ein Objekt, das einen einzelnen Bericht darstellt.
- {{domxref("ReportingObserver")}}
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, sobald sie generiert werden.

### Verwandte Schnittstellen

Diese Schnittstellen sind Teil der HTTP- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Spezifikationen definiert:

- {{domxref("CSPViolationReportBody")}}
  - : Enthält Details zu einem CSP-Verstoß.
- {{domxref("SecurityPolicyViolationEvent")}}
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das ausgelöst wird, wenn seine CSP auf einem Element, Dokument oder Worker verletzt wird.

## Verwandte HTTP-Header

Diese HTTP-Antwortheader definieren die Endpunkte, an welche Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL von Berichts-Endpunkten fest.
    Diese können in der `report-to`-Direktive verwendet werden, die mit einer Reihe von HTTP-Headern einschließlich {{httpheader("Content-Security-Policy")}} verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Legt den Namen und die URL von Berichts-Endpunktgruppen fest, die mit einer Reihe von HTTP-Headern einschließlich `Content-Security-Policy` verwendet werden können.

Berichts-Endpunkte können für die folgenden Berichte unter Verwendung der `report-to`-Direktive auf den entsprechenden Headern festgelegt werden:

- CSP-Verstöße

  - : {{CSP("report-to")}} auf {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

## Beispiele

### Veraltete Funktionen melden

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html)-Beispiel erstellen wir einen einfachen Reporting-Observer, um die Verwendung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir sagen ihm dann, dass er beginnen soll, Berichte zu beobachten, indem wir {{domxref("ReportingObserver.observe()")}} verwenden; dies teilt dem Beobachter mit, dass er beginnen soll, Berichte in seiner Berichtswarteschlange zu sammeln, und führt die im Konstruktor angegebene Rückruffunktion aus:

```js
observer.observe();
```

Später verwenden wir absichtlich die veraltete Version von {{domxref("MediaDevices.getUserMedia()")}}:

```js
if (navigator.mozGetUserMedia) {
  navigator.mozGetUserMedia(constraints, success, failure);
} else {
  navigator.getUserMedia(constraints, success, failure);
}
```

Dies führt dazu, dass ein Veralterungsbericht generiert wird; aufgrund des Ereignishandlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir nun den Button klicken, um die Berichtsdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen angezeigten Statistiken über eine veraltete Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete `getUserMedia()`-Methode tatsächlich zweimal aufrufen. Nach dem ersten Mal rufen wir {{domxref("ReportingObserver.takeRecords()")}} auf, was den ersten generierten Bericht zurückgibt und die Warteschlange leert. Aus diesem Grund wird nur der zweite Bericht aufgelistet, wenn der Button gedrückt wird.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

Die Unterstützung befindet sich derzeit in einem frühen Stadium. Firefox unterstützt die JavaScript-API und den `Report-To`-Header hinter den Einstellungen:

- JavaScript-API: `dom.reporting.enabled` (nur in Nightly aktiviert)
- HTTP-Header: `dom.reporting.header.enabled`

Chrome arbeitet ebenfalls an einer Implementierung: [Informationen zur Chrome-Implementierung](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api).

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy)
