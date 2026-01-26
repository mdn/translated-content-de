---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting-API bietet einen allgemeinen Berichterstellungsmechanismus, den Webanwendungen nutzen können, um Berichte auf Basis verschiedener Plattformfunktionen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Berichte zur Veraltung von Funktionen) in konsistenter Weise verfügbar zu machen.

## Konzepte und Verwendung

Es gibt mehrere verschiedene Funktionen und Probleme auf der Webplattform, die Informationen generieren, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites anderweitig zu verbessern. Solche Informationen können umfassen:

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) Verstöße.
- [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) Verstöße.
- [Integrity-Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy) Verstöße.
- Nutzung veralteter Funktionen (wenn Sie etwas verwenden, das bald in Browsern nicht mehr funktioniert).
- Auftreten von Abstürzen.
- Auftreten von User-Agent-Eingriffen (wenn der Browser etwas blockiert, was Ihr Code tun möchte, weil es zum Beispiel als Sicherheitsrisiko eingestuft wird oder einfach nur nervt, wie automatisch wiedergebender Ton).

Der Zweck der Reporting-API ist es, einen konsistenten Mechanismus zur Verfügung zu stellen, mit dem solche Informationen den Entwicklern in Form von Berichten, die durch JavaScript-Objekte repräsentiert werden, zugänglich gemacht werden können. Es gibt mehrere Möglichkeiten, sie zu nutzen, die in den untenstehenden Abschnitten im Detail beschrieben werden.

### Endpunkte für Reporting-Server

Für jeden eindeutigen Ursprung, für den Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" angegeben werden, bei denen es sich um benannte URLs (oder Gruppen von URLs) handelt, von denen Berichte von einem User-Agent gesendet werden können. Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln, verarbeiten und nach Bedarf für Ihre Anwendung präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details zu den verschiedenen Endpunkten anzugeben, die einem User-Agent zum Zurstellen von Berichten zur Verfügung stehen. Die `report-to` Direktive kann dann auf bestimmten HTTP-Antwort-Headern verwendet werden, um den spezifischen Endpunkt anzugeben, der für den zugehörigen Bericht verwendet wird. Zum Beispiel kann die CSP {{CSP("report-to")}} Direktive auf den {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Headern verwendet werden, um den Endpunkt anzugeben, an den CSP-Verletzungsberichte gesendet werden sollen.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten - ein Bericht könnte immer noch nicht gesammelt werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden vom User-Agent bei einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet. Sie sind Serialisierungen von [`Report`](/de/docs/Web/API/Report)-Objekten, wobei `type` den Berichtstyp angibt, `url` den Ursprung des Berichts und `body` eine Serialisierung der API-Schnittstelle enthält, die dem Berichtstyp entspricht. Beispielsweise haben CSP-Verletzungsberichte einen `type` von `csp-violation` und einen `body`, der eine Serialisierung eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

Berichte, die an Endpunkte gesendet werden, können unabhängig vom Betrieb der Websites, auf die sie sich beziehen, abgerufen werden, was nützlich ist - ein Absturz könnte zum Beispiel eine Website lahmlegen und alles zum Stillstand bringen, aber ein Bericht könnte immer noch beschafft werden, um dem Entwickler einige Hinweise darauf zu geben, warum es passiert ist.

### Reporting-Observer

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte erhalten werden, die über JavaScript innerhalb der Website erstellt werden, auf der Sie Berichte erhalten möchten. Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da jeder Seitenabsturz das Abrufen der Berichte verhindern könnte — aber es ist einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird mit dem [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktor erstellt, der zwei Parameter erhält:

- Eine Callback-Funktion mit zwei Parametern - ein Array der im Beobachter-Berichtsqueue verfügbaren Berichte und eine Kopie desselben `ReportingObserver`-Objekts, mit dem die Beobachtung direkt aus der Callback-Funktion gesteuert werden kann. Die Callback-Funktion wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Options-Wörterbuch, das es Ihnen ermöglicht, den zu sammelnden Berichtstyp anzugeben und ob Berichte, die vor der Erstellung des Beobachters generiert wurden, beobachtbar sein sollen (`buffered: true`).

Dem Beobachter stehen dann Methoden zur Verfügung, um die Berichterfassung zu starten ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die derzeit im Berichtsqueue befindlichen Berichte abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Beobachter zu trennen, sodass er keine Berichte mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Reporting-Endpunkte und Reporting-Observer gesendet werden, sind im Wesentlichen dieselben: Sie haben einen Herkunfts-`url`, einen `type` und einen `body`, der eine Instanz der Schnittstelle ist, die mit diesem Typ korrespondiert. Der einzige Unterschied ist, dass Serverberichte JSON-Serialisierungen der Objekte sind.

Die Zuordnung von Bericht-`type` zu `body` ist unten dargestellt.

| `type`                | `body`                                                                          | Berichtete Elemente                                                                        |
| --------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `deprecation`         | [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)               | Veraltete Funktionen, die von der Seite verwendet werden.                                  |
| `integrity-violation` | [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) | Verstöße gegen die Integritätspolitik der Seite.                                           |
| `intervention`        | [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)             | Vom User-Agent blockierte Funktionen, zum Beispiel wenn Berechtigungen nicht erteilt sind. |
| `csp-violation`       | [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)             | Verstöße gegen die CSP-Richtlinie der Seite.                                               |

### Berichtserstellung über WebDriver

Der Reporting-API-Standard definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver)-Erweiterung, die es ermöglicht, die Berichtserstellung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportObserver`-Objekten beobachtet, die auf der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
  - : Enthält Details zu veralteten Webplattform-Funktionen, die von einer Website verwendet werden.
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)
  - : Enthält Details zu einem Eingriffsbericht, der generiert wird, wenn eine von der Website gestellte Anfrage vom Browser abgelehnt wurde; z.B. aus Sicherheitsgründen.
- [`Report`](/de/docs/Web/API/Report)
  - : Ein Objekt, das einen einzelnen Bericht darstellt.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, während sie generiert werden.

### Verwandte Schnittstellen

Diese Schnittstellen werden als Teil der HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Spezifikationen definiert:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
  - : Enthält Details zu einer CSP-Verletzung.
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Stellt das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses dar, das auf einem Element, Dokument oder Arbeiter ausgelöst wird, wenn seine CSP verletzt wird.

Diese Schnittstelle wird als Teil der [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Spezifikation definiert:

- [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)
  - : Enthält Informationen über eine Ressource, die blockiert wurde, weil sie nicht die Subresource-Integrity-Garantien erfüllt hat, die durch ihre {{httpheader("Integrity-Policy")}}-Richtlinie erforderlich sind, oder die für Berichte-Only-Richtlinien, die mit {{httpheader("Integrity-Policy-Report-Only")}} gesetzt werden, blockiert werden würde.

## Verwandte HTTP-Header

Diese HTTP-Antwortheader definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Setzt den Namen und die URL von Reporting-Endpunkten. Diese Endpunkte können in der `report-to`-Direktive verwendet werden, die mit mehreren HTTP-Headern, einschließlich {{httpheader("Content-Security-Policy")}}, verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Nicht mehr Teil der Reporting-API, aber weiterhin von einigen Browsern unterstützt. Dies setzt den Namen und die URL von Reporting-Endpunktgruppen, die mit mehreren HTTP-Headern, insbesondere für [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging), die noch nicht aktualisiert wurde, um `Reporting-Endpoints` zu unterstützen, verwendet werden können. Andere Reporting-API-Berichte sollten stattdessen `Reporting-Endpoints` für eine bessere zukünftige Unterstützung verwenden.

Berichtsendpunkte können für die folgenden Berichte mit der {{CSP("report-to")}}-Direktive auf den entsprechenden Headern festgelegt werden:

- CSP-Verstöße
  - : {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

Berichtsendpunkte können für die folgenden Berichte mit dem [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Feld in einem strukturierten Wörterbuch auf den entsprechenden Headern festgelegt werden:

- Integrity-Policy-Verstöße
  - : {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}}.

## Beispiele

### Berichterstattung über veraltete Funktionen

In unserem Beispiel [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) erstellen wir einen einfachen Reporting-Observer, um die Verwendung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir weisen ihn dann an, mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) Berichte zu beobachten; dies teilt dem Beobachter mit, mit der Sammlung von Berichten in seiner Berichtsqueue zu beginnen und die im Konstruktor angegebene Callback-Funktion auszuführen:

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

Dies führt zur Erstellung eines Veraltungsberichts; aufgrund des Ereignishandlers, den wir innerhalb des `ReportingObserver()`-Konstruktors eingerichtet haben, können wir nun auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen unten angezeigten Statistiken über eine veraltete Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir tatsächlich die veraltete `getUserMedia()`-Methode zweimal aufrufen. Nach dem ersten Aufruf von [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords), der den ersten generierten Bericht zurückgibt und die Queue leert. Aufgrund dessen wird beim Drücken der Schaltfläche nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
