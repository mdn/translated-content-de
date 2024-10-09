---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{SeeCompatTable}}{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting API bietet einen generischen Mechanismus für Webanwendungen, um Berichte basierend auf verschiedenen Plattformfunktionen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy), oder Berichte über die Einstellung von Funktionen) in konsistenter Weise verfügbar zu machen.

## Konzepte und Anwendung

Es gibt verschiedene Funktionen und Probleme auf der Webplattform, die Informationen generieren, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites auf andere Weise zu verbessern. Solche Informationen können umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy).
- Nutzung von veralteten Funktionen (wenn Sie etwas verwenden, das in Browsern bald nicht mehr funktionieren wird).
- Auftreten von Abstürzen.
- Auftreten von Benutzeragenten-Interventionen (wenn der Browser etwas blockiert, das Ihr Code ausführen möchte, weil es zum Beispiel als Sicherheitsrisiko angesehen wird oder einfach nur störend ist, wie das automatische Abspielen von Audio).

Der Zweck der Reporting API ist es, einen konsistenten Berichtmechanismus bereitzustellen, der verwendet werden kann, um solche Informationen den Entwicklern in Form von Berichten, die durch JavaScript-Objekte repräsentiert werden, zugänglich zu machen. Es gibt ein paar Möglichkeiten, sie zu nutzen, die in den folgenden Abschnitten detailliert beschrieben werden.

### Endpunkte des Reporting-Servers

Jeder eindeutige Ursprung, für den Sie Berichte erhalten möchten, kann mit einer Reihe von "Endpunkten" versehen werden, das sind benannte URLs (oder Gruppen von URLs), von denen Berichte von einem Benutzeragenten gesendet werden können.
Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln, verarbeiten und nach Bedarf für Ihre Anwendung präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details über die verschiedenen Endpunkte anzugeben, die einem Benutzeragenten für die Zustellung von Berichten zur Verfügung stehen.
Das `report-to`-Direktiv kann dann auf bestimmten HTTP-Antwort-Headern verwendet werden, um den spezifischen Endpunkt anzuzeigen, der für den zugehörigen Bericht verwendet wird.
Zum Beispiel kann das CSP-{{CSP("report-to")}}-Direktiv auf den {{HTTPHeader("Content-Security-Policy")}}- oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Headern verwendet werden, um den Endpunkt anzugeben, an den CSP-Verstoßberichte gesendet werden sollen.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten — ein Bericht könnte dennoch nicht gesammelt werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden von dem Benutzeragenten in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet.
Sie sind Serialisierungen von [`Report`](/de/docs/Web/API/Report)-Objekten, wobei `type` den Berichtstyp angibt, `url` den Ursprung des Berichts angibt und `body` eine Serialisierung der API-Schnittstelle enthält, die dem Berichtstyp entspricht.
Zum Beispiel haben CSP-Verstoßberichte einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

Berichte, die an Endpunkte gesendet werden, können unabhängig von der Ausführung der Websites, auf die sie sich beziehen, abgerufen werden, was nützlich ist — ein Absturz könnte beispielsweise eine Website zum Absturz bringen und alles lahmlegen, aber ein Bericht könnte dennoch erworben werden, um dem Entwickler einige Hinweise zu geben, warum es passiert ist.

### Reporting-Observer

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte abgerufen werden, die über JavaScript innerhalb der Website erstellt werden, auf der Sie Berichte erhalten möchten.
Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da jeder Seitenabsturz Sie daran hindern könnte, die Berichte abzurufen — aber sie ist einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird mit dem [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktor erstellt, dem zwei Parameter übergeben werden:

- Eine Rückruffunktion mit zwei Parametern — ein Array der im Berichtswarteschlange des Observers verfügbaren Berichte und eine Kopie desselben `ReportingObserver`-Objekts, was eine direkte Steuerung der Beobachtung aus dem Inneren des Rückrufs ermöglicht. Die Rückruffunktion wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, das es Ihnen ermöglicht, den Typ der zu sammelnden Berichte anzugeben und ob Berichte, die vor der Erstellung des Observers generiert wurden, beobachtbar sein sollten (`buffered: true`).

Methoden sind dann am Observer verfügbar, um Berichte zu sammeln ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die Berichte abzurufen, die sich derzeit in der Warteschlange befinden ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Observer zu trennen, damit er keine Berichte mehr sammelt ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Berichterstattungsendpunkte und Berichterstattungsbeobachter gesendet werden, sind im Wesentlichen gleich: Sie haben einen Ursprungs-`url`, einen `type` und einen `body`, der eine Instanz der Schnittstelle ist, die diesem Typ entspricht.
Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von Bericht-`type` zu `body` ist unten dargestellt.

| `type`          | `body`                                                              | Gemeldete Elemente                                                                 |
| --------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `deprecation`   | [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)   | Veraltete Funktionen, die von der Seite genutzt werden.                            |
| `intervention`  | [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) | Vom Benutzeragenten blockierte Funktionen, z.B. wenn Berechtigungen nicht gewährt. |
| `csp-violation` | [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) | Verstöße gegen die CSP-Richtlinie der Seite.                                       |

### Berichte über WebDriver generieren

Die Reporting-API-Spezifikation definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver)-Erweiterung, mit der Sie die Berichtgenerierung während der Automatisierung simulieren können. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportObserver`-Objekten beobachtet, die auf der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
  - : Enthält Details zu veralteten Webplattformfunktionen, die eine Website verwendet.
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)
  - : Enthält Details zu einem Intervention Report, der generiert wird, wenn eine Anfrage der Website vom Browser abgelehnt wurde; z.B. aus Sicherheitsgründen.
- [`Report`](/de/docs/Web/API/Report)
  - : Ein Objekt, das einen einzelnen Bericht repräsentiert.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, sobald sie generiert werden.

### Verwandte Schnittstellen

Diese Schnittstellen sind als Teil der HTTP-[Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Spezifikationen definiert:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
  - : Enthält Details zu einem CSP-Verstoß.
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem Element, Dokument oder Worker ausgelöst wird, wenn dessen CSP verletzt wird.

## Verwandte HTTP-Header

Diese HTTP-Antwort-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL der Berichterstattungsendpunkte fest.
    Diese Endpunkte können im `report-to`-Direktiv verwendet werden, das mit einer Reihe von HTTP-Headern, einschließlich {{httpheader("Content-Security-Policy")}}, verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Legt den Namen und die URL von Berichterstattungsendpunkten fest, die mit einer Reihe von HTTP-Headern einschließlich `Content-Security-Policy` verwendet werden können.

Berichterstattungsendpunkte können für die folgenden Berichte festgelegt werden, indem das `report-to`-Direktiv auf den entsprechenden Headern verwendet wird:

- CSP-Verstöße

  - : {{CSP("report-to")}} auf {{HTTPHeader("Content-Security-Policy")}} or {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

## Beispiele

### Veraltete Funktionen melden

In unserem Beispiel [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) erstellen wir einen einfachen Beobachter, um die Nutzung veralteter Funktionen auf unserer Webseite zu überwachen:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir weisen ihn dann an, mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) Berichte zu überwachen; dies veranlasst den Beobachter, Berichte in seiner Berichtswarteschlange zu sammeln und die im Konstruktor angegebene Rückruffunktion auszuführen:

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

Dies führt dazu, dass ein Veralterungsbericht generiert wird; aufgrund des Ereignishandlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir jetzt auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken darunter über eine veraltete Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete `getUserMedia()`-Methode tatsächlich zweimal aufrufen. Nach dem ersten Aufruf von [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords), der den ersten generierten Bericht zurückgibt und die Warteschlange leert. Aus diesem Grund wird beim Drücken der Schaltfläche nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die API wird von Chromium-Browsern unterstützt und von Firefox hinter einer Einstellung (`dom.reporting.enabled`).

Sehen Sie die spezifischen Schnittstellen für detailliertere Informationen zur Unterstützung.

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy)
