---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: a23c4285076a4bb348d6747e7ecb9ed9cb6a17e6
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting API bietet einen generischen Mechanismus, den Webanwendungen verwenden können, um Berichte basierend auf verschiedenen Plattformfunktionen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Berichte über die Verwendung veralteter Funktionen) in konsistenter Weise verfügbar zu machen.

## Konzepte und Verwendung

Es gibt mehrere unterschiedliche Funktionen und Probleme auf der Webplattform, die Informationen erzeugen, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites anderweitig zu verbessern. Solche Informationen können Folgendes beinhalten:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Verwendung veralteter Funktionen (wenn Sie etwas verwenden, das bald in Browsern nicht mehr funktionieren wird).
- Auftreten von Abstürzen.
- Auftreten von Eingriffen des Benutzeragenten (wenn der Browser etwas blockiert, das Ihr Code versucht, weil es zum Beispiel als Sicherheitsrisiko angesehen wird oder einfach nur störend ist, wie automatisch abspielendes Audio).

Der Zweck der Reporting API ist es, einen konsistenten Mechanismus bereitzustellen, der verwendet werden kann, um solche Informationen Entwicklern in Form von Berichten zur Verfügung zu stellen, die durch JavaScript-Objekte dargestellt werden. Es gibt einige Möglichkeiten, sie zu verwenden, die in den folgenden Abschnitten detailliert beschrieben sind.

### Reporting-Serverendpunkte

Jeder eindeutige Ursprung, für den Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" erhalten, die benannten URLs (oder Gruppen von URLs) entsprechen, an die ein Benutzeragent Berichte senden kann. Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln und sie gemäß den Anforderungen Ihrer Anwendung verarbeiten und präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details über die verschiedenen Endpunkte zu spezifizieren, die einem Benutzeragenten zur Verfügung stehen, um Berichte zu liefern. Die `report-to`-Direktive kann dann in bestimmten HTTP-Antwortheadern verwendet werden, um den spezifischen Endpunkt anzugeben, der für den zugehörigen Bericht verwendet wird. Zum Beispiel kann die CSP {{CSP("report-to")}}-Direktive in den {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Headern verwendet werden, um den Endpunkt anzugeben, an den CSP-Verletzungsberichte gesendet werden sollen.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten – ein Bericht könnte weiterhin nicht erfasst werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden vom Benutzeragenten in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet. Sie sind Serialisierungen von [`Report`](/de/docs/Web/API/Report)-Objekten, wobei der `type` den Berichtstyp angibt, die `url` den Ursprung des Berichts angibt und der `body` eine Serialisierung der API-Schnittstelle enthält, die dem Berichtstyp entspricht. Zum Beispiel haben CSP-Verletzungsberichte einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

Berichte, die an Endpunkte gesendet werden, können unabhängig von der Ausführung der Websites, auf die sie sich beziehen, abgerufen werden, was nützlich ist – ein Absturz könnte zum Beispiel eine Website zum Absturz bringen und alles zum Stillstand bringen, aber ein Bericht könnte dennoch erhalten werden, um dem Entwickler Hinweise zu geben, warum er aufgetreten ist.

### Reporting-Observer

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte abgerufen werden, die über JavaScript innerhalb der Website erstellt werden, für die Sie Berichte erhalten möchten. Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da jeder Seitenabsturz verhindern könnte, dass Sie die Berichte abrufen — aber es ist einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird mit dem [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktor erstellt, dem zwei Parameter übergeben werden:

- Eine Callback-Funktion mit zwei Parametern — ein Array der Berichte, die in der Beobachterberichte-Warteschlange verfügbar sind, und eine Kopie desselben `ReportingObserver`-Objekts, das es ermöglicht, die Beobachtung direkt innerhalb des Callbacks zu steuern. Der Callback wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, das es Ihnen ermöglicht, die Art der zu sammelnden Berichte anzugeben und ob Berichte, die vor der Erstellung des Beobachters erzeugt wurden, beobachtbar sein sollten (`buffered: true`).

Methoden sind dann am Beobachter verfügbar, um Berichte zu sammeln ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die derzeit in der Berichte-Warteschlange befindlichen Berichte abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Beobachter zu trennen, damit er keine Aufzeichnungen mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Reporting-Endpunkte und Reporting-Beobachter gesendet werden, sind im Wesentlichen gleich: Sie haben eine Ursprungs-`url`, einen `type` und einen `body`, der eine Instanz der dem Typ entsprechenden Schnittstelle ist. Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von Bericht `type` zu `body` ist unten dargestellt.

| `type`          | `body`                                                              | Berichtete Elemente                                                                   |
| --------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `deprecation`   | [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)   | Veraltete Funktionen, die von der Seite verwendet werden.                             |
| `intervention`  | [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) | Vom Benutzeragent blockierte Funktionen, z.B. wenn Berechtigungen nicht erteilt sind. |
| `csp-violation` | [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) | Verstöße gegen die CSP-Richtlinie der Seite.                                          |

### Berichte über WebDriver generieren

Die Reporting API-Spezifikation definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver) Erweiterung, die es Ihnen ermöglicht, die Berichtsgenerierung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportObserver`-Objekten beobachtet, die auf der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
  - : Enthält Details zu veralteten Webplattformfunktionen, die eine Website verwendet.
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)
  - : Enthält Details zu einem Interventionsbericht, der erstellt wird, wenn eine von der Website gestellte Anfrage vom Browser abgelehnt wurde; z.B. aus Sicherheitsgründen.
- [`Report`](/de/docs/Web/API/Report)
  - : Ein Objekt, das einen einzelnen Bericht repräsentiert.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, während sie erstellt werden.

### Verwandte Schnittstellen

Diese Schnittstellen sind Teil der HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Spezifikationen definiert:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
  - : Enthält Details zu einer CSP-Verletzung.
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem Element, Dokument oder einem Worker ausgelöst wird, wenn seine CSP verletzt wird.

## Verwandte HTTP-Header

Diese HTTP-Antwortheader definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL von Reporting-Endpunkten fest. Diese Endpunkte können in der `report-to`-Direktive verwendet werden, die mit einer Reihe von HTTP-Headern verwendet werden kann, einschließlich {{httpheader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Ist nicht mehr Teil der Reporting API, wird jedoch weiterhin von einigen Browsern unterstützt. Dies legt den Namen und die URL von Gruppen von Reporting-Endpunkten fest, die mit einer Reihe von HTTP-Headern verwendet werden können, insbesondere für [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging), das noch nicht aktualisiert wurde, um `Reporting-Endpoints` zu unterstützen. Andere Reporting API-Berichte sollten stattdessen `Reporting-Endpoints` verwenden, um zukünftige Unterstützung zu verbessern.

Berichterstattungspunkte können für die folgenden Berichte mithilfe der `report-to`-Direktive in den entsprechenden Headern festgelegt werden:

- CSP-Verletzungen

  - : {{CSP("report-to")}} auf {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

## Beispiele

### Berichterstattung von veralteten Funktionen

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

Wir weisen ihn dann an, mit Hilfe von [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) Berichte zu überwachen; dies sagt dem Beobachter, dass er Berichte in seiner Berichte-Warteschlange sammeln soll, und führt die im Konstruktor angegebene Callback-Funktion aus:

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

Dies führt dazu, dass ein Veraltungsbericht generiert wird; aufgrund des Ereignishandlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir jetzt auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen unten angezeigten Statistiken über eine veraltete Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete `getUserMedia()`-Methode tatsächlich zweimal aufrufen. Nachdem wir das erste Mal [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) aufrufen, wird der erste generierte Bericht zurückgegeben und die Warteschlange geleert. Aus diesem Grund wird beim Drücken der Schaltfläche nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
