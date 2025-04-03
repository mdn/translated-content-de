---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting API bietet einen generischen Mechanismus, den Webanwendungen nutzen können, um Berichte basierend auf verschiedenen Plattformfunktionen in konsistenter Weise verfügbar zu machen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Berichte über die Einstellung von Funktionen).

## Konzepte und Nutzung

Es gibt mehrere verschiedene Merkmale und Probleme in der Webplattform, die Informationen erzeugen, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites anderweitig zu verbessern. Solche Informationen können Folgendes umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Verwendung eingestellter Funktionen (wenn Sie etwas verwenden, das bald in Browsern nicht mehr funktionieren wird).
- Auftreten von Abstürzen.
- Auftreten von Benutzeragenten-Interventionen (wenn der Browser etwas blockiert, das Ihr Code auszuführen versucht, weil es beispielsweise als Sicherheitsrisiko angesehen wird oder einfach nur störend ist, wie das automatische Abspielen von Audio).

Der Zweck der Reporting API ist es, einen konsistenten Reporting-Mechanismus bereitzustellen, der verwendet werden kann, um Entwicklern solche Informationen in Form von Berichten zugänglich zu machen, die durch JavaScript-Objekte repräsentiert werden. Es gibt einige Möglichkeiten, sie zu verwenden, die in den folgenden Abschnitten detailliert beschrieben werden.

### Endpunkte von Reporting-Servern

Jeder eindeutige Ursprung, für den Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" erhalten, bei denen es sich um benannte URLs (oder Gruppen von URLs) handelt, die Berichte von einem Benutzeragenten empfangen können.
Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln, verarbeiten und entsprechend den Anforderungen Ihrer Anwendung präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details über die verschiedenen Endpunkte anzugeben, die einem Benutzeragenten für die Bereitstellung von Berichten zur Verfügung stehen.
Die `report-to`-Direktive kann dann in bestimmten HTTP-Antwortheadern verwendet werden, um den spezifischen Endpunkt anzugeben, der für den zugehörigen Bericht verwendet wird.
Zum Beispiel kann die {{CSP("report-to")}}-Direktive in den HTTP-Headern {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwendet werden, um den Endpunkt anzugeben, an den CSP-Verletzungsberichte gesendet werden sollen.

> [!NOTE]
> Es gibt keine absolute Garantie für die Berichtszustellung — ein Bericht könnte trotzdem nicht erfasst werden, wenn ein gravierender Fehler auftritt.

Die Berichte selbst werden durch den Benutzeragenten in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet.
Sie sind Serialisierungen von [`Report`](/de/docs/Web/API/Report)-Objekten, wobei `type` den Berichtsart angibt, `url` den Ursprung des Berichts angibt und `body` eine Serialisierung der API-Schnittstelle enthält, die dem Berichtstyp entspricht.
Zum Beispiel haben CSP-Verletzungsberichte einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

Berichte, die an Endpunkte gesendet werden, können unabhängig vom Betrieb der Websites abgerufen werden, auf die sie sich beziehen, was nützlich ist — ein Absturz könnte beispielsweise eine Website zum Erliegen bringen und alles zum Stillstand bringen, aber ein Bericht könnte trotzdem abgerufen werden, um dem Entwickler einige Hinweise zu geben, warum es passiert ist.

### Reporting-Beobachter

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte abgerufen werden, die über JavaScript innerhalb der Website erstellt werden, auf der Sie Berichte erhalten möchten.
Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da jede Seitenerstörung Sie daran hindern könnte, die Berichte abzurufen — aber sie ist einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird mithilfe des [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) Konstruktors erstellt, dem zwei Parameter übergeben werden:

- Eine Callback-Funktion mit zwei Parametern — ein Array der in der Beobachter-Warteschlange verfügbaren Berichte und eine Kopie desselben `ReportingObserver`-Objekts, die die Beobachtung direkt innerhalb des Callbacks steuern ermöglicht. Der Callback wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, das es Ihnen ermöglicht, den Typ der zu sammelnden Berichte anzugeben und ob Berichte, die vor der Erstellung des Beobachters generiert wurden, sichtbar sein sollen (`buffered: true`).

Methoden stehen dann im Beobachter zur Verfügung, um Berichte zu sammeln ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die Berichte in der aktuellen Warteschlange abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Beobachter zu trennen, sodass er keine Berichte mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Reporting-Endpunkte und Reporting-Beobachter gesendet werden, sind im Wesentlichen dasselbe: Sie haben eine Ursprungs-`url`, einen `type` und einen `body`, der eine Instanz der Schnittstelle ist, die diesem Typ entspricht.
Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von Berichtstyp `type` zu `body` ist unten gezeigt.

| `type`          | `body`                                                              | Gemeldete Elemente                                                                                                 |
| --------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `deprecation`   | [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)   | Eingestellte Funktionen, die von der Website verwendet werden.                                                     |
| `intervention`  | [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) | Funktionen, die durch den Benutzeragenten blockiert werden, zum Beispiel wenn Berechtigungen nicht erteilt werden. |
| `csp-violation` | [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) | Verletzungen der CSP-Richtlinie der Website.                                                                       |

### Berichte über WebDriver generieren

Die Reporting API-Spezifikation definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver)-Erweiterung, die es Ihnen ermöglicht, die Berichtserstellung während der Automatisierung zu simulieren. Über WebDriver generierte Berichte werden von allen registrierten `ReportObserver`-Objekten beobachtet, die auf der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
  - : Enthält Details zu abgekündigten Webplattformfunktionen, die eine Website verwendet.
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)
  - : Enthält Details zu einem Interventionsbericht, der erstellt wird, wenn eine Anfrage der Website durch den Browser abgelehnt wurde, z.B. aus Sicherheitsgründen.
- [`Report`](/de/docs/Web/API/Report)
  - : Ein Objekt, das einen einzelnen Bericht darstellt.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, sobald sie erstellt werden.

### Verwandte Schnittstellen

Diese Schnittstellen sind Teil der HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Spezifikationen definiert:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
  - : Enthält Details zu einem CSP-Verstoß.
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem Element, Dokument oder Worker ausgelöst wird, wenn seine CSP verletzt wird.

## Verwandte HTTP-Header

Diese HTTP-Antwortheader definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Setzt den Namen und die URL von Reporting-Endpunkten.
    Diese Endpunkte können in der `report-to`-Direktive verwendet werden, die bei einer Reihe von HTTP-Headern inklusive {{httpheader("Content-Security-Policy")}} und oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} genutzt werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Setzt den Namen und die URL von Gruppen von Reporting-Endpunkten, die bei einer Reihe von HTTP-Headern inklusive `Content-Security-Policy` genutzt werden können.

Berichts-Endpunkte können für die folgenden Berichte mithilfe der `report-to`-Direktive auf den entsprechenden Headern festgelegt werden:

- CSP-Verstöße

  - : {{CSP("report-to")}} auf {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

## Beispiele

### Bericht über eingestellte Funktionen

In unserem Beispiel [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) erstellen wir einen einfachen Reporting-Beobachter, um die Nutzung von eingestellten Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir sagen ihm dann, dass er anfangen soll, Berichte zu beobachten, indem wir [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) verwenden; dies teilt dem Beobachter mit, dass er anfängt, Berichte in seiner Berichtswarteschlange zu sammeln, und führt die im Konstruktor angegebene Callback-Funktion aus:

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

Dies führt dazu, dass ein Abkündigungsbericht erstellt wird; aufgrund des Event-Handlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir jetzt auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen unten angezeigten Statistiken über eine eingestellte Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete `getUserMedia()`-Methode tatsächlich zweimal aufrufen. Nachdem wir das erste Mal [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) aufgerufen haben, was den ersten generierten Bericht zurückgibt und die Warteschlange leert. Aufgrund dessen wird nur der zweite Bericht aufgelistet, wenn die Schaltfläche gedrückt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die API wird von Chromium-Browsern unterstützt und in Firefox hinter einer Präferenz (`dom.reporting.enabled`).

Für detailliertere Support-Informationen siehe die spezifischen Schnittstellen.

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
