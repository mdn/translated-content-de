---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: a019b326a3ad0c16d78d236582927a38ccaea8b4
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting API bietet einen generischen Berichtsmechanismus, den Webanwendungen nutzen können, um Berichte in konsistenter Weise auf der Grundlage verschiedener Plattformfunktionen (z. B. [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Berichte zur Funktionsveraltung) verfügbar zu machen.

## Konzepte und Verwendung

Es gibt mehrere verschiedene Funktionen und Probleme auf der Webplattform, die Informationen generieren, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites anderweitig zu verbessern. Solche Informationen können Folgendes umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Verstöße gegen die [Integrity-Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy).
- Verstöße gegen die [Cross-Origin-Embedder-Policy](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy).
- Die Verwendung veralteter Funktionen (wenn Sie etwas verwenden, das in Kürze in Browsern nicht mehr funktionieren wird).
- Das Auftreten von Abstürzen.
- Das Auftreten von User-Agent-Interventionen (wenn der Browser etwas blockiert, das Ihr Code zu tun versucht, weil es beispielsweise als Sicherheitsrisiko angesehen wird oder einfach nur lästig ist, wie das automatische Abspielen von Audio).

Zweck der Reporting API ist es, einen konsistenten Berichtsmechanismus bereitzustellen, der verwendet werden kann, um derartige Informationen Entwicklern in Form von Berichten, die durch JavaScript-Objekte dargestellt werden, zugänglich zu machen. Es gibt einige Möglichkeiten, diese zu verwenden, die in den folgenden Abschnitten erläutert werden.

### Reporting-Server-Endpunkte

Jeder eindeutige Ursprung, für den Sie Berichte abrufen möchten, kann mit einer Reihe von "Endpunkten" ausgestattet werden, bei denen es sich um benannte URLs (oder Gruppen von URLs) handelt, an die Berichte von einem User-Agent gesendet werden können.
Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln, verarbeiten und nach Bedarf für Ihre Anwendung präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details zu den verschiedenen Endpunkten anzugeben, die einem User-Agent für die Zustellung von Berichten zur Verfügung stehen.
Die Endpunkte können dann in bestimmten HTTP-Response-Headern verwendet werden, um den spezifischen Endpunkt (oder in einigen Fällen Endpunkte) zu kennzeichnen, der für den zugehörigen Bericht verwendet wird.
Die Anweisung oder der Parameter, der verwendet wird, um einen Endpunkt anzugeben, hängt vom Header ab.
Zum Beispiel kann die CSP {{CSP("report-to")}} Anweisung auf den {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Headern verwendet werden, um den Endpunkt anzugeben, an den CSP-Verstoßberichte gesendet werden sollen, während das [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Feld auf {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} verwendet wird, um anzugeben, wohin Berichte zu Integritätsrichtlinienverstößen gesendet werden sollen.

Berichtstypen, die keinen zugehörigen HTTP-Header haben, wie `crash`, `deprecation` und `intervention` Berichte, senden Berichte normalerweise an den "Standard-Reporting-Endpunkt".
Dies ist einfach ein Endpunkt mit dem Namen "standard", der mithilfe des `Reporting-Endpoints` Headers spezifiziert wird.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten — ein Bericht könnte trotzdem nicht gesammelt werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden vom User-Agent in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Ziel-Endpunkt gesendet.
Sie sind Serialisierungen des entsprechenden Wörterbuchs für jeden [Berichtstyp](#berichtstypen).
Zum Beispiel sind CSP-Verstoßberichte eine Serialisierung eines [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) Objekts.

Berichte, die an Endpunkte gesendet werden, können unabhängig vom Betrieb der Websites abgerufen werden, auf die sie sich beziehen, was nützlich ist — ein Absturz könnte beispielsweise eine Website lahmlegen und alles stoppen, aber ein Bericht könnte trotzdem abgerufen werden, um dem Entwickler einige Hinweise darauf zu geben, warum dies geschehen ist.

### Reporting-Observer

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objekte abgerufen werden, die über JavaScript innerhalb der Website erstellt werden, auf der Sie Berichte abrufen möchten.
Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da jeder Seitenabsturz verhindern könnte, dass Sie die Berichte abrufen — aber sie ist einfacher einzurichten und flexibler.

Ein `ReportingObserver` Objekt wird mit dem [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) Konstruktor erstellt, der zwei Parameter übergeben bekommt:

- Eine Callback-Funktion mit zwei Parametern — ein Array der im Berichts-Queue des Observers verfügbaren Berichte und eine Kopie desselben `ReportingObserver` Objekts, das eine direkte Steuerung der Beobachtung von innen im Callback ermöglicht. Der Callback wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, das es Ihnen ermöglicht, die [Arten](/de/docs/Web/API/ReportingObserver/ReportingObserver#types) von Berichten anzugeben, die gesammelt werden sollen, und ob vor dem Erstellen des Observers generierte Berichte beobachtbar sein sollen (`buffered: true`).

Methoden sind dann auf dem Observer verfügbar, um Berichte zu sammeln ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die Berichte zu diesem Zeitpunkt im Berichts-Queue abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)), und den Observer zu trennen, sodass er keine Aufzeichnungen mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Reporting-Observer gesendet werden, sind Instanzen von Wörterbuchobjekten wie [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport), [`DeprecationReport`](/de/docs/Web/API/DeprecationReport), [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport), [`InterventionReport`](/de/docs/Web/API/InterventionReport), [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) und [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport).
Diese haben alle eine `url` des Ursprungs, einen `type` und einen `body`, der spezifisch für den Berichtstyp ist.
Der Typ des Berichts kann aus seiner `type` Eigenschaft abgeleitet werden, die bei den oben genannten Berichten `coep`, `deprecation`, `integrity-violation`, `intervention`, `csp-violation` und `permissions-policy-violation` wäre.

Berichte, die an Reporting-Endpunkte und Reporting-Observer gesendet werden, sind im Wesentlichen gleich.
Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind, die zusätzliche `user_agent` und `age` Felder haben.

Eine Liste dokumentierter Berichtstypen und ihrer entsprechenden Berichtswörterbücher sind im [`options.types`](/de/docs/Web/API/ReportingObserver/ReportingObserver#types) Parameter angegeben, der an den `ReportingObserver()` Konstruktor übergeben wird.

### Berichte generieren via WebDriver

Die Reporting API-Spezifikation definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver) Erweiterung, die es Ihnen ermöglicht, die Berichtsgenerierung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportingObserver` Objekten, die auf der geladenen Website vorhanden sind, beobachtet. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und auf diese zuzugreifen, sobald sie generiert werden.

### Verwandte Schnittstellen

- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Stellt das Event-Objekt eines `securitypolicyviolation` Ereignisses dar, das auf einem Element, Dokument oder Worker ausgelöst wird, wenn seine CSP verletzt wird.
    Dies ist als Teil der HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Spezifikationen definiert.

## Wörterbücher

- [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport)
  - : Enthält Details zu einem Verstoß gegen die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP).
- [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)
  - : Enthält Details zu einem CSP-Verstoß.
    Dies ist als Teil der HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Spezifikationen definiert.
- [`DeprecationReport`](/de/docs/Web/API/DeprecationReport)
  - : Enthält Details zu veralteten Webplattformfunktionen, die von einer Website verwendet werden.
- [`InterventionReport`](/de/docs/Web/API/InterventionReport)
  - : Enthält Details zu einem Interventionsbericht, der generiert wird, wenn eine Anfrage, die von der Website gemacht wurde, vom Browser abgelehnt wurde; z.B. aus Sicherheitsgründen.
- [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)
  - : Enthält Informationen über eine Ressource, die blockiert wurde, weil sie nicht den Subresource Integrity-Garantien entsprach, die von ihrer {{httpheader("Integrity-Policy")}} gefordert werden, oder die für nur-Berichte Richtlinien blockiert würde, die mit {{httpheader("Integrity-Policy-Report-Only")}} festgelegt wurden.
    Dies ist als Teil der [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) Spezifikation definiert.
- [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport)
  - : Enthält Details zu einem Verstoß gegen die {{httpheader("Permissions-Policy")}}.

## Verwandte HTTP-Header

Diese HTTP-Response-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Setzt den Namen und die URL von Reporting-Endpunkten.
    Diese Endpunkte können in der `report-to` Anweisung verwendet werden, die mit einer Reihe von HTTP-Headern einschließlich {{httpheader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Nicht mehr Teil der Reporting API, aber immer noch von einigen Browsern unterstützt. Dies setzt den Namen und die URL von Reporting-Endpunktgruppen, die mit einer Reihe von HTTP-Headern, insbesondere für [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging), verwendet werden können, das noch nicht aktualisiert wurde, um `Reporting-Endpoints` zu unterstützen. Andere Reporting API Berichte sollten stattdessen `Reporting-Endpoints` verwenden, um eine bessere zukünftige Unterstützung zu gewährleisten.

Berichtsendpunkte können für die folgenden Berichte mit der {{CSP("report-to")}} Anweisung oder dem Parameter auf den entsprechenden Headern gesetzt werden:

- COEP Verstöße
  - : {{HTTPHeader("Cross-Origin-Embedder-Policy")}} oder {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}}.
- CSP Verstöße
  - : {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

Berichtsendpunkte können für die folgenden Berichte unter Verwendung des [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Felds in einem strukturierten Wörterbuch auf den entsprechenden Headern festgelegt werden:

- Integrity-Policy Verstöße
  - : {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}}.

## Beispiele

### Reporting veralteter Funktionen

Dieses Beispiel zeigt, wie `"deprecation"` Berichte auf einer Seite beobachtet werden, die sie mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) auslöst.

Beachten Sie, dass wir uns entschieden haben, einen `"deprecation"` Bericht anzuzeigen, da dafür keine bestimmten HTTP-Header gesetzt werden müssen und er daher als MDN-Live-Beispiel ausgeführt werden kann.

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

Zuerst konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objekt, das auf Berichte mit dem Typ `"deprecation"` lauscht und ein Callback übergibt, das die Berichte empfängt und protokolliert.

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

Wir führen dann den folgenden Code aus, der synchrones XHR verwendet (veraltete API).
Beachten Sie, dass dies nach dem Observer definiert ist, den es auslöst, sobald der Observer läuft.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Veraltungsberichte unterstützen, sollte ein Bericht unten angezeigt werden.
Beachten Sie, dass der `type` `"deprecation"` ist.

{{EmbedLiveSample("Verwendung der `ReportingObserver` Schnittstelle", "100%", "280px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
