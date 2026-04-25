---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: dd1e8282ab6621b62399d65cad46177d426d1d93
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting API bietet einen generischen Mechanismus für Webanwendungen, um Berichte basierend auf verschiedenen Plattformfunktionen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Veraltungsberichte von Funktionen) in konsistenter Weise verfügbar zu machen.

## Konzepte und Nutzung

Es gibt mehrere verschiedene Funktionen und Probleme auf der Webplattform, die Informationen generieren, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites auf andere Weise zu verbessern. Solche Informationen können umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Verstöße gegen die [Integrity-Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy).
- Verstöße gegen die [Cross-Origin-Embedder-Policy](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy).
- Nutzung veralteter Funktionen (wenn Sie etwas verwenden, das in Browsern bald nicht mehr funktioniert).
- Auftreten von Abstürzen.
- Auftreten von Benutzeragenten-Interventionen (wenn der Browser etwas blockiert, das Ihr Code ausführen möchte, weil es zum Beispiel ein Sicherheitsrisiko darstellt oder einfach nur nervig ist, wie das automatische Abspielen von Audio).

Der Zweck der Reporting API ist es, einen konsistenten Reporting-Mechanismus bereitzustellen, der verwendet werden kann, um solche Informationen Entwicklern in Form von Berichten zugänglich zu machen, die durch JavaScript-Objekte dargestellt werden.

Berichte können über JavaScript-Observer abgerufen oder an einen Remote-Server-Endpunkt gesendet werden. Die Arten von Berichten und die beiden Reporting-Ansätze werden in den folgenden Abschnitten detailliert beschrieben.

### Berichtstypen

An Reporting-Observer gesendete Berichte sind Instanzen von Wörterbuchobjekten. Diese haben alle die Eigenschaften `type`, `url` und `body`, wobei `type` den Berichtstyp angibt und `body` spezifisch für den Berichtstyp ist.

An Reporting-Endpunkte gesendete Berichte sind im Wesentlichen gleich. Der einzige Unterschied ist, dass Serverberichte JSON-Serialisierungen der Objekte sind, die zusätzliche Felder `user_agent` und `age` haben.

Die folgende Tabelle listet die dokumentierten Berichtstypen, ihre entsprechenden Berichtswörterbücher und Anmerkungen zu den Verstößen auf. Beachten Sie, dass mit Ausnahme von `crash`-Berichten, die in JavaScript nicht beobachtet werden können (weil die beobachtende Seite abgestürzt ist), alle aufgeführten Berichte in Observern sichtbar sind und an Server-Endpunkte gesendet werden können.

| Typ                            | Berichtobjekt                                                                           | Anmerkungen                                                                                                  |
| ------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `coep`                         | [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport)                           | {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Verstöße                                               |
| `coop`                         | `COOPViolationReport`                                                                   | {{httpheader("Cross-Origin-Opener-Policy")}} (COOP) Verstöße                                                 |
| `crash`                        | [`CrashReport`](/de/docs/Web/API/CrashReport)                                           | Browser-Absturzberichte                                                                                      |
| `csp-violation`                | [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)                             | Verstöße gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)                             |
| `deprecation`                  | [`DeprecationReport`](/de/docs/Web/API/DeprecationReport)                               | Veraltete Funktionen, die von der Seite verwendet werden.                                                    |
| `integrity-violation`          | [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)                 | {{httpheader("Integrity-Policy")}} Verstöße                                                                  |
| `intervention`                 | [`InterventionReport`](/de/docs/Web/API/InterventionReport)                             | Vom Benutzeragenten blockierte Funktionen, wie Anzeigen, die die Seitenperformance erheblich beeinträchtigen |
| `permissions-policy-violation` | [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) | {{httpheader("Permissions-Policy")}} Verstöße                                                                |

Eine Liste der Typen wird auch im Parameter [`options.types`](/de/docs/Web/API/ReportingObserver/ReportingObserver#types) angegeben, der an den Konstruktor `ReportingObserver()` übergeben wird.

### Reporting-Observer

Berichte können über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte abgerufen werden, die über JavaScript auf der Website erstellt werden, auf der Sie Berichte erhalten möchten. Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da jeder Seitenabsturz Sie daran hindern könnte, die Berichte abzurufen; es ist jedoch einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird unter Verwendung des Konstruktors [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) erstellt, der zwei Parameter erhält:

- Eine Rückruffunktion mit zwei Parametern — ein Array der im Berichtsqueue des Observers verfügbaren Berichte und eine Kopie desselben `ReportingObserver`-Objekts, wodurch die Beobachtung direkt innerhalb des Aufrufs gesteuert werden kann. Der Rückruf wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Options-Wörterbuch, mit dem Sie die zu sammelnden [Typen](/de/docs/Web/API/ReportingObserver/ReportingObserver#types) von Berichten spezifizieren können und ob Berichte, die vor der Erstellung des Observers generiert wurden, beobachtbar sein sollen (`buffered: true`).

Danach stehen Methoden auf dem Observer zur Verfügung, um mit dem Sammeln von Berichten zu beginnen ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die aktuell im Berichtsqueue befindlichen Berichte abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Observer zu trennen, damit er keine weiteren Berichte sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Reporting-Server-Endpunkte

Berichte können auch von dem Benutzeragenten an entfernte _Server-Endpunkte_ in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` gesendet werden. Sie sind Serialisierungen des entsprechenden Wörterbuchs für jeden [Berichtstyp](#berichtstypen). Zum Beispiel sind Berichte über CSP-Verstöße eine Serialisierung eines [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Objekts.

An Endpunkte gesendete Berichte können unabhängig vom Betrieb der Websites, auf die sie sich beziehen, abgerufen werden, was nützlich ist — ein Absturz könnte beispielsweise eine Website zum Absturz bringen und alles zum Stillstand bringen, aber ein Bericht könnte dennoch abgerufen werden, um dem Entwickler einige Hinweise darauf zu geben, warum es passiert ist.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten — ein Bericht könnte dennoch nicht gesammelt werden, wenn ein schwerwiegender Fehler auftritt.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um den Namen und die URL für verschiedene Endpunkte festzulegen, die einem Benutzeragenten zum Senden von Berichten zur Verfügung stehen. Die Endpunkte können dann in bestimmten HTTP-Antwort-Headern angegeben werden, um den Endpunkt (oder in einigen Fällen die Endpunkte) zu kennzeichnen, an den die zugehörigen Berichte gesendet werden.

Die Mechanismen zur Festlegung der Server-Endpunkte für jeden Berichtstyp sind unten aufgeführt:

`coep`

- `report-to`-Parameter auf {{HTTPHeader("Cross-Origin-Embedder-Policy")}} oder {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}}

`csp-violation`

- {{CSP("report-to")}}-Direktive auf {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

`integrity-violation`

- [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Feld in {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}}

`permissions-policy-violation`

- `report-to`-Parameter auf {{HTTPHeader("Permissions-Policy")}} oder {{HTTPHeader("Permissions-Policy-Report-Only")}}
- [`"default"`-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint)

`crash`

- `crash-reporting`-Endpunkt
- `default`-Endpunkt.

`deprecation`

- `default`-Endpunkt.

`intervention`

- `default`-Endpunkt.

### Generierung von Berichten über WebDriver

Die Reporting API-Spezifikation definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver)-Erweiterung, die es Ihnen ermöglicht, die Berichtserstellung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportingObserver`-Objekten beobachtet, die in der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)
  - : Bietet Methoden, die es ermöglichen, beliebige Daten für den aktuellen Top-Level-Browsing-Kontext aufzuzeichnen, die dann einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an einen Reporting-Endpunkt gesendet werden, wenn ein Browser-Absturz auftritt.
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, sobald sie generiert werden.

### Verwandte Schnittstellen

- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem Element, Dokument oder Worker ausgelöst wird, wenn seine CSP verletzt wird.
    Dies ist Teil der HTTP-Spezifikationen der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP).

## Wörterbücher

- [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport)
  - : Enthält Details zu einem Verstoß gegen die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP).
- [`CrashReport`](/de/docs/Web/API/CrashReport)
  - : Enthält Details zu einem Browser-Absturz.
- [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)
  - : Enthält Details zu einem CSP-Verstoß.
    Dies ist Teil der HTTP-Spezifikationen der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP).
- [`DeprecationReport`](/de/docs/Web/API/DeprecationReport)
  - : Enthält Details zu veralteten Webplattform-Funktionen, die eine Website verwendet.
- [`InterventionReport`](/de/docs/Web/API/InterventionReport)
  - : Enthält Details zu einem Interventionsbericht, der generiert wird, wenn ein vom Browser gestelltes Ersuchen der Website aus Sicherheitsgründen oder anderen Gründen abgelehnt wird.
- [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)
  - : Enthält Informationen über eine Ressource, die blockiert wurde, weil sie den Anforderungen der Subresource Integrity, wie sie ihre {{httpheader("Integrity-Policy")}} vorschreibt, nicht entspricht oder blockiert würde für ausschließlich zu Meldezwecken festgelegte Richtlinien, die mit {{httpheader("Integrity-Policy-Report-Only")}} festgelegt sind.
    Dies ist Teil der [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Spezifikationen.
- [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport)
  - : Enthält Details zu einem Verstoß gegen die {{httpheader("Permissions-Policy")}}.

## Zugehörige HTTP-Header

Diese HTTP-Antwort-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL von Reporting-Endpunkten fest.
    Diese Endpunkte können in der `report-to`-Direktive verwendet werden, die mit einer Reihe von HTTP-Headern verwendet werden kann, einschließlich {{httpheader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Ist nicht mehr Teil der Reporting API, wird aber immer noch von einigen Browsern unterstützt. Dieser Header legt den Namen und die URL von Reporting-Endpunktgruppen fest, die mit einer Reihe von HTTP-Headern verwendet werden können, insbesondere für das [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging), das noch nicht aktualisiert wurde, um `Reporting-Endpoints` zu unterstützen. Andere Berichte der Reporting API sollten stattdessen `Reporting-Endpoints` verwenden, um eine bessere zukünftige Unterstützung zu gewährleisten.

## Beispiele

### Berichterstellung veralteter Funktionen

Dieses Beispiel zeigt, wie Sie `"deprecation"`-Berichte innerhalb einer Seite beobachten können, die sie mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) auslöst.

Beachten Sie, dass wir uns entschieden haben, einen `"deprecation"`-Bericht anzuzeigen, da dafür keine speziellen HTTP-Header festgelegt werden müssen und er deshalb als MDN Live-Beispiel ausgeführt werden kann.

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

Zuerst konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, das auf Berichte mit dem Typ `"deprecation"` hört, und übergeben einen Rückruf, der die Berichte empfängt und protokolliert.

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

Dann rufen wir den folgenden Code auf, der synchrone XHR (veraltete API) verwendet. Beachten Sie, dass dies nach dem Observer definiert ist, den es auslöst, sobald der Observer läuft.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Absetzungsberichte unterstützen, sollte ein Bericht unten angezeigt werden. Beachten Sie, dass der `type` `"deprecation"` ist.

{{EmbedLiveSample("Using the `ReportingObserver` interface", "100%", "280px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
