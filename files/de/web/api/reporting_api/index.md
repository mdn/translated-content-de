---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting API bietet Webanwendungen einen einheitlichen Mechanismus, um Berichte zu verschiedenen Plattformfunktionen bereitzustellen, beispielsweise zu [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder veralteten Funktionen.

## Konzepte und Verwendung

Verschiedene Funktionen und Probleme der Webplattform erzeugen Informationen, die Webentwicklern helfen können, Fehler zu beheben oder ihre Websites anderweitig zu verbessern. Dazu gehören:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Verstöße gegen die [Integrity-Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy).
- Verstöße gegen die [Cross-Origin-Embedder-Policy](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy).
- Die Verwendung veralteter Funktionen, die demnächst in Browsern nicht mehr funktionieren werden.
- Das Auftreten von Abstürzen.
- Eingriffe des User-Agents, etwa wenn der Browser eine Aktion Ihres Codes blockiert, weil sie als Sicherheitsrisiko oder als störend gilt, beispielsweise die automatische Audiowiedergabe.

Die Reporting API soll einen einheitlichen Mechanismus bereitstellen, mit dem Entwickler solche Informationen als Berichte in Form von JavaScript-Objekten erhalten können.

Berichte können über JavaScript-Reporting-Observer abgerufen oder an einen entfernten Server-Endpunkt gesendet werden. Die Berichtstypen und beide Verfahren werden im Folgenden beschrieben.

### Berichtstypen

Berichte, die an Reporting-Observer übermittelt werden, sind Instanzen von Dictionary-Objekten. Sie verfügen jeweils über die Eigenschaften `type`, `url` und `body`. Dabei gibt `type` den Berichtstyp an, während der Inhalt von `body` vom Berichtstyp abhängt.

An Reporting-Endpunkte gesendete Berichte sind im Wesentlichen gleich aufgebaut. Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen dieser Objekte mit zusätzlichen Feldern `user_agent` und `age` sind.

Die folgende Tabelle führt die dokumentierten Berichtstypen, die zugehörigen Bericht-Dictionaries und Hinweise zu den gemeldeten Ereignissen auf. Mit Ausnahme von `crash`-Berichten, die nicht in JavaScript beobachtet werden können, weil die beobachtete Seite abgestürzt ist, sind alle aufgeführten Berichte für Observer sichtbar und können an Server-Endpunkte gesendet werden.

| Typ                            | Berichtsobjekt                                                                          | Hinweise                                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `coep`                         | [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport)                           | Verstöße gegen {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP)                                |
| `coop`                         | `COOPViolationReport`                                                                   | Verstöße gegen {{httpheader("Cross-Origin-Opener-Policy")}} (COOP)                                  |
| `crash`                        | [`CrashReport`](/de/docs/Web/API/CrashReport)                                           | Berichte über Browserabstürze                                                                       |
| `csp-violation`                | [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)                             | Verstöße gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)                    |
| `deprecation`                  | [`DeprecationReport`](/de/docs/Web/API/DeprecationReport)                               | Von der Website verwendete veraltete Funktionen                                                     |
| `integrity-violation`          | [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)                 | Verstöße gegen {{httpheader("Integrity-Policy")}}                                                   |
| `intervention`                 | [`InterventionReport`](/de/docs/Web/API/InterventionReport)                             | Vom User-Agent blockierte Funktionen, etwa Werbung, die die Seitenleistung erheblich beeinträchtigt |
| `permissions-policy-violation` | [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) | Verstöße gegen {{httpheader("Permissions-Policy")}}                                                 |

Eine Liste der Typen kann auch über den Parameter [`options.types`](/de/docs/Web/API/ReportingObserver/ReportingObserver#types) an den Konstruktor `ReportingObserver()` übergeben werden.

### Reporting-Observer

Berichte können über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte abgerufen werden, die per JavaScript innerhalb der Website erstellt werden, für die Sie Berichte erhalten möchten. Dieses Verfahren ist weniger ausfallsicher als das Senden von Berichten an einen Server, da ein Seitenabsturz den Abruf verhindern kann. Es lässt sich jedoch einfacher einrichten und ist flexibler.

Ein `ReportingObserver`-Objekt wird mit dem Konstruktor [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) erstellt, der zwei Parameter erhält:

- Eine Callback-Funktion mit zwei Parametern: einem Array der Berichte in der Berichtswarteschlange des Observers und einer Kopie desselben `ReportingObserver`-Objekts. Dadurch lässt sich die Beobachtung direkt aus dem Callback steuern. Der Callback wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Options-Dictionary, mit dem Sie die zu erfassenden [Berichtstypen](/de/docs/Web/API/ReportingObserver/ReportingObserver#types) festlegen und bestimmen können, ob Berichte beobachtbar sein sollen, die vor der Erstellung des Observers erzeugt wurden (`buffered: true`).

Anschließend stehen Methoden bereit, um die Erfassung von Berichten zu starten ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die derzeit in der Berichtswarteschlange enthaltenen Berichte abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Observer zu trennen, sodass er keine weiteren Berichte erfassen kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Server-Endpunkte für Berichte

Der User-Agent kann Berichte auch per `POST` mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an entfernte _Server-Endpunkte_ senden. Die Berichte sind Serialisierungen des jeweiligen Dictionary für den entsprechenden [Berichtstyp](#berichtstypen). Berichte über CSP-Verstöße sind beispielsweise Serialisierungen eines [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Objekts.

An Endpunkte gesendete Berichte lassen sich unabhängig davon abrufen, ob die zugehörigen Websites noch ausgeführt werden. Das ist beispielsweise bei einem Absturz hilfreich: Auch wenn die Website nicht mehr funktioniert, kann ein Bericht Entwicklern Hinweise auf die Ursache liefern.

> [!NOTE]
> Die Zustellung eines Berichts ist nicht garantiert. Bei einem schwerwiegenden Fehler kann es vorkommen, dass ein Bericht nicht erfasst wird.

Der HTTP-Header {{httpheader("Reporting-Endpoints")}} legt Namen und URLs der Endpunkte fest, die einem User-Agent für die Zustellung von Berichten zur Verfügung stehen. Anschließend können diese Endpunkte in bestimmten HTTP-Antwort-Headern angegeben werden, um festzulegen, an welchen Endpunkt – oder in manchen Fällen an welche Endpunkte – die zugehörigen Berichte gesendet werden. Berichtstypen ohne zugehörigen HTTP-Header, etwa `crash`, `deprecation` und `intervention`, senden Berichte üblicherweise an den [Reporting-Endpunkt `"default"`](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint). Dabei handelt es sich um einen Endpunkt mit dem Namen „default“, der über den Header `Reporting-Endpoints` festgelegt wird.

Die Verfahren zur Festlegung von Server-Endpunkten für die einzelnen Berichtstypen sind nachstehend aufgeführt:

`coep`

- Parameter `report-to` in {{HTTPHeader("Cross-Origin-Embedder-Policy")}} oder {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}}

`csp-violation`

- Direktive {{CSP("report-to")}} in {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

`integrity-violation`

- Feld [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) in {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}}

`permissions-policy-violation`

- Parameter `report-to` in {{HTTPHeader("Permissions-Policy")}} oder {{HTTPHeader("Permissions-Policy-Report-Only")}}
- [Endpunkt `"default"`](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint)

`crash`

- Endpunkt `crash-reporting`
- Endpunkt `default`.

`deprecation`

- Endpunkt `default`.

`intervention`

- Endpunkt `default`.

### Berichte über WebDriver erzeugen

Die Spezifikation der Reporting API definiert außerdem eine [WebDriver](/de/docs/Web/WebDriver)-Erweiterung namens „Generate Test Report“, mit der Sie die Erzeugung von Berichten während einer Automatisierung simulieren können. Über WebDriver erzeugte Berichte werden von allen registrierten `ReportingObserver`-Objekten auf der geladenen Website beobachtet. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)
  - : Stellt Methoden bereit, mit denen beliebige Daten für den aktuellen Top-Level-Browsing-Kontext aufgezeichnet werden können. Bei einem Browserabsturz werden diese Daten einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an einen Reporting-Endpunkt gesendet.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, mit dem Berichte bei ihrer Erzeugung erfasst und abgerufen werden können.

### Verwandte Schnittstellen

- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Event-Objekt eines `securitypolicyviolation`-Events, das bei einem CSP-Verstoß an einem Element, Dokument oder Worker ausgelöst wird.
    Dies ist in den HTTP-Spezifikationen zur [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) definiert.

## Dictionaries

- [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport)
  - : Enthält Details zu einem Verstoß gegen {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP).
- [`CrashReport`](/de/docs/Web/API/CrashReport)
  - : Enthält Details zu einem Browserabsturz.
- [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)
  - : Enthält Details zu einem CSP-Verstoß.
    Dies ist in den HTTP-Spezifikationen zur [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) definiert.
- [`DeprecationReport`](/de/docs/Web/API/DeprecationReport)
  - : Enthält Details zu veralteten Webplattformfunktionen, die eine Website verwendet.
- [`InterventionReport`](/de/docs/Web/API/InterventionReport)
  - : Enthält Details zu einem Eingriff, der gemeldet wird, wenn der Browser eine von der Website gestellte Anfrage ablehnt, beispielsweise aus Sicherheitsgründen.
- [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)
  - : Enthält Informationen über eine Ressource, die blockiert wurde, weil sie die durch {{httpheader("Integrity-Policy")}} vorgeschriebenen Subresource-Integrity-Garantien nicht erfüllt, oder die bei einer über {{httpheader("Integrity-Policy-Report-Only")}} festgelegten Richtlinie im reinen Berichtsmodus blockiert würde.
    Dies ist in der Spezifikation zu [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) definiert.
- [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport)
  - : Enthält Details zu einem Verstoß gegen {{httpheader("Permissions-Policy")}}.

## Verwandte HTTP-Header

Diese HTTP-Antwort-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt Namen und URLs von Reporting-Endpunkten fest.
    Diese Endpunkte können in der Direktive `report-to` verwendet werden, die mit verschiedenen HTTP-Headern eingesetzt werden kann, darunter {{httpheader("Content-Security-Policy")}} und {{HTTPHeader("Content-Security-Policy-Report-Only")}}.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Ist nicht mehr Teil der Reporting API, wird aber weiterhin von einigen Browsern unterstützt. Dieser Header legt Namen und URLs von Gruppen von Reporting-Endpunkten fest. Sie können mit verschiedenen HTTP-Headern verwendet werden, insbesondere für [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging), das noch nicht für die Unterstützung von `Reporting-Endpoints` aktualisiert wurde. Andere Berichte der Reporting API sollten stattdessen `Reporting-Endpoints` verwenden, um künftig besser unterstützt zu werden.

## Beispiele

### Berichte über veraltete Funktionen

Dieses Beispiel zeigt, wie Sie mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) `"deprecation"`-Berichte innerhalb einer Seite beobachten, die diese Berichte auslöst.

Wir zeigen einen `"deprecation"`-Bericht, weil dafür keine bestimmten HTTP-Header gesetzt werden müssen und sich das Beispiel daher als interaktives MDN-Beispiel ausführen lässt.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 200px;
  margin: 10px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Zunächst erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, das auf Berichte vom Typ `"deprecation"` wartet. Dabei übergeben wir einen Callback, der die Berichte empfängt und protokolliert.

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((report) => {
    log(JSON.stringify(report, null, 2));
  });
}, options);

// Start the observer
observer.observe();
```

Anschließend führen wir den folgenden Code aus, der synchrones XHR verwendet (eine veraltete API). Beachten Sie, dass dieser Code nach dem Observer definiert ist, den er auslöst, sobald der Observer aktiv ist.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Berichte über veraltete Funktionen unterstützen, sollte unten ein Bericht angezeigt werden. Beachten Sie, dass `type` den Wert `"deprecation"` hat.

{{EmbedLiveSample("reporting_deprecated_features", "100%", "280px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
