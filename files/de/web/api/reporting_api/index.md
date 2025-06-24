---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting API bietet einen generischen Mechanismus für Webanwendungen, Berichte basierend auf verschiedenen Plattformfunktionen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Berichte zur Abschaffung von Funktionen) in konsistenter Weise zur Verfügung zu stellen.

## Konzepte und Verwendung

Es gibt mehrere verschiedene Funktionen und Probleme auf der Webplattform, die Informationen generieren, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites auf andere Weise zu verbessern. Solche Informationen können umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Nutzung veralteter Funktionen (wenn Sie etwas verwenden, das in Browsern bald nicht mehr funktionieren wird).
- Auftreten von Abstürzen.
- Auftreten von Benutzeragenten-Interventionen (wenn der Browser etwas blockiert, das Ihr Code zu tun versucht, weil es als Sicherheitsrisiko angesehen wird oder einfach nur störend ist, wie automatisch abgespielter Ton).

Der Zweck der Reporting API ist es, einen konsistenten Berichtsmechanismus bereitzustellen, der verwendet werden kann, um solche Informationen Entwicklern in Form von Berichten zur Verfügung zu stellen, die durch JavaScript-Objekte dargestellt werden. Es gibt einige Möglichkeiten, es zu verwenden, die in den untenstehenden Abschnitten detailliert dargestellt sind.

### Endpunkte des Reporting-Servers

Jeder eindeutige Ursprung, für den Sie Berichte erhalten möchten, kann eine Reihe von "Endpoints" erhalten, bei denen es sich um benannte URLs (oder Gruppen von URLs) handelt, von denen Berichte von einem Benutzeragenten gesendet werden können. Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln, verarbeiten und nach Bedarf Ihrer Anwendung präsentieren.

Der HTTP-Header {{httpheader("Reporting-Endpoints")}} wird verwendet, um Details über die verschiedenen Endpunkte anzugeben, die ein Benutzeragent zur Verfügung hat, um Berichte zu übermitteln. Die `report-to`-Anweisung kann dann in bestimmten HTTP-Antwort-Headern verwendet werden, um den spezifischen Endpunkt anzugeben, der für den zugehörigen Bericht verwendet wird. So kann zum Beispiel die CSP-Direktive {{CSP("report-to")}} auf den HTTP-Headern {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwendet werden, um den Endpunkt anzugeben, an den CSP-Verstoßberichte gesendet werden sollen.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten — ein Bericht könnte immer noch nicht erfasst werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden vom Benutzeragenten in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet. Sie sind Serialisierungen von [`Report`](/de/docs/Web/API/Report)-Objekten, wobei der `type` den Berichtstyp angibt, die `url` den Ursprung des Berichts anzeigt und der `body` eine Serialisierung der API-Schnittstelle enthält, die dem Berichtstyp entspricht. Zum Beispiel haben CSP-Verstoßberichte einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

Berichte, die an Endpunkte gesendet werden, können unabhängig vom Ausführen der Websites, auf die sie sich beziehen, abgerufen werden, was nützlich ist — ein Absturz könnte beispielsweise eine Website lahmlegen und alles stoppen, aber ein Bericht könnte immer noch abgerufen werden, um dem Entwickler Hinweise darauf zu geben, warum es passiert ist.

### Reporting-Observer

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte abgerufen werden, die per JavaScript innerhalb der Website erstellt wurden, für die Sie Berichte erhalten möchten. Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da ein Seitenabsturz das Abrufen der Berichte verhindern könnte — aber sie ist einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird mithilfe des [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktors erstellt, der zwei Parameter übergeben bekommt:

- Eine Callback-Funktion mit zwei Parametern — ein Array der im Beobachter auf der Berichtswarteschlange verfügbaren Berichte und eine Kopie desselben `ReportingObserver`-Objekts, die es ermöglicht, die Beobachtung direkt innerhalb des Callbacks zu steuern. Der Callback wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Options-Dictionary, das es ermöglicht, den Typ der zu sammelnden Berichte anzugeben und ob Berichte, die vor der Erstellung des Beobachters generiert wurden, beobachtbar sein sollen (`buffered: true`).

Methoden stehen dann auf dem Beobachter zur Verfügung, um Berichte zu sammeln ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die Berichte abzurufen, die sich derzeit in der Berichtswarteschlange befinden ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Beobachter zu trennen, sodass er keine Aufzeichnungen mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Reporting-Endpunkte und Reporting-Observer gesendet werden, sind im Wesentlichen gleich: sie haben eine originierende `url`, einen `type` und einen `body`, der eine Instanz der Schnittstelle ist, die dem Typ entspricht. Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von Berichtstyp `type` zu `body` wird unten gezeigt.

| `type`          | `body`                                                              | Gemeldete Elemente                                                                                 |
| --------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `deprecation`   | [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)   | Veraltete Funktionen, die von der Seite verwendet werden.                                          |
| `intervention`  | [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) | Vom Benutzeragenten blockierte Funktionen, zum Beispiel, wenn Berechtigungen nicht erteilt wurden. |
| `csp-violation` | [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) | Verstöße gegen die CSP-Richtlinie der Website.                                                     |

### Berichte generieren über WebDriver

Die Spezifikation der Reporting API definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver)-Erweiterung, die es ermöglicht, die Berichtsgenerierung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportObserver`-Objekten überwacht, die sich auf der geladenen Website befinden. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
  - : Enthält Details zu veralteten Webplattformfunktionen, die eine Website verwendet.
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)
  - : Enthält Details zu einem Interventionsbericht, der erzeugt wird, wenn eine Anfrage der Website vom Browser abgelehnt wird; z.B. aus Sicherheitsgründen.
- [`Report`](/de/docs/Web/API/Report)
  - : Ein Objekt, das einen einzelnen Bericht darstellt.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, während sie generiert werden.

### Verwandte Schnittstellen

Diese Schnittstellen sind Teil der HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Spezifikationen:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
  - : Enthält Details zu einem CSP-Verstoß.
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem Element, Dokument oder Worker ausgelöst wird, wenn dessen CSP verletzt wird.

## Verwandte HTTP-Header

Diese HTTP-Antwort-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL der Reporting-Endpunkte fest.
    Diese Endpunkte können in der `report-to`-Direktive verwendet werden, die mit einer Anzahl von HTTP-Headern einschließlich {{httpheader("Content-Security-Policy")}} und/oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Kein Teil der Reporting API mehr, aber noch von einigen Browsern unterstützt. Dies legt den Namen und die URL von Reporting-Endpunktgruppen fest, die mit einer Reihe von HTTP-Headern verwendet werden können, insbesondere für [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging), das noch nicht aktualisiert wurde, um `Reporting-Endpoints` zu unterstützen. Andere Reporting API-Berichte sollten stattdessen `Reporting-Endpoints` verwenden, um eine bessere zukünftige Unterstützung zu gewährleisten.

Berichtsendpunkte können für die folgenden Berichte mittels der `report-to`-Direktive auf den entsprechenden Headern festgelegt werden:

- CSP-Verstöße
  - : {{CSP("report-to")}} auf {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

## Beispiele

### Berichterstellung zu veralteten Funktionen

In unserem Beispiel [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) erstellen wir einen einfachen Reporting-Observer, um die Nutzung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir veranlassen ihn dann mithilfe von [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe), Berichte zu beobachten; dies veranlasst den Beobachter, Berichte in seiner Berichtswarteschlange zu sammeln, und führt die im Konstruktorspezifizierten Callback-Funktion aus:

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

Dies führt dazu, dass ein Veraltungsbericht erstellt wird; dank des Ereignishandlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir jetzt auf die Schaltfläche klicken, um die Berichtsdaten anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen darunter angezeigten Statistiken zu einer veralteten Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [kompletten Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete Methode `getUserMedia()` tatsächlich zweimal aufrufen. Nach dem ersten Aufruf von [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) wird der erste generierte Bericht zurückgegeben und die Warteschlange geleert. Deshalb wird beim Drücken der Taste nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
