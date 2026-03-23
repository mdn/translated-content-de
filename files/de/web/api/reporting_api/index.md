---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting API bietet einen generischen Mechanismus zur Berichterstattung, den Webanwendungen nutzen können, um Berichte basierend auf verschiedenen Plattformfunktionen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Berichte zur Veralterung von Funktionen) auf konsistente Weise verfügbar zu machen.

## Konzepte und Nutzung

Es gibt mehrere verschiedene Funktionen und Probleme auf der Webplattform, die Informationen generieren, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites auf andere Weise zu verbessern. Solche Informationen können beinhalten:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Verstöße gegen die [Integrity-Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy).
- Verstöße gegen die [Cross-Origin-Embedder-Policy](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy).
- Verwendung veralteter Funktionen (wenn Sie etwas verwenden, das bald in Browsern nicht mehr funktioniert).
- Auftreten von Abstürzen.
- Auftreten von Benutzeragenteneingriffen (wenn der Browser etwas blockiert, das Ihr Code zu tun versucht, weil es beispielsweise als Sicherheitsrisiko angesehen wird oder einfach nur lästig ist, wie automatisch abgespieltes Audio).

Der Zweck der Reporting API besteht darin, einen konsistenten Berichtmechanismus bereitzustellen, der verwendet werden kann, um solche Informationen in Form von Berichten, die durch JavaScript-Objekte repräsentiert werden, Entwicklern zur Verfügung zu stellen. Es gibt einige Möglichkeiten, sie zu verwenden, die in den untenstehenden Abschnitten detailliert beschrieben sind.

### Berichtsserver-Endpunkte

Für jeden eindeutigen Ursprung, für den Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" angegeben werden, bei denen es sich um benannte URLs (oder URL-Gruppen) handelt, an die Berichte von einem Benutzeragenten gesendet werden können.
Ein Berichtsserver an diesen Endpunkten kann die Berichte sammeln und sie nach Bedarf von Ihrer Anwendung verarbeiten und präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details zu den verschiedenen Endpunkten zu spezifizieren, die einem Benutzeragenten zum Zustellen von Berichten zur Verfügung stehen.
Die Endpunkte können dann auf bestimmten HTTP-Response-Headern verwendet werden, um den spezifischen Endpunkt (oder in einigen Fällen mehrere Endpunkte) zu kennzeichnen, der für den zugehörigen Bericht verwendet wird.
Die zur Spezifikation eines Endpunkts verwendete Direktive oder der verwendete Parameter hängt vom Header ab.
Zum Beispiel kann die CSP-Direktive {{CSP("report-to")}} auf den {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Headern verwendet werden, um den Endpunkt zu spezifizieren, an den CSP-Verstoßberichte gesendet werden sollen, während das [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Feld auf {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} verwendet wird, um festzulegen, wohin Integritätsrichtlinien-Verstoßberichte gesendet werden sollen.

Berichtstypen, die keinen zugeordneten HTTP-Header haben, wie `crash`-, `deprecation`- und `intervention`-Berichte, senden Berichte in der Regel an den "Standard-Berichts-Endpunkt".
Dies ist einfach ein Endpunkt, der als "default" benannt ist und mit dem `Reporting-Endpoints`-Header spezifiziert wird.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten — ein Bericht könnte immer noch nicht gesammelt werden, wenn ein schwerwiegender Fehler auftritt.

Die Berichte selbst werden vom Benutzeragenten in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt gesendet.
Sie sind Serialisierungen des entsprechenden Wörterbuchs für jeden [Berichtstyp](#berichtstypen).
Zum Beispiel sind CSP-Verstoßberichte eine Serialisierung eines [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Objekts.

An Endpunkte gesendete Berichte können unabhängig vom Betrieb der Websites, mit denen sie zusammenhängen, abgerufen werden, was nützlich ist — ein Absturz zum Beispiel könnte eine Website zum Absturz bringen und alles stoppen, aber ein Bericht könnte trotzdem abgerufen werden, um dem Entwickler einige Hinweise zu geben, warum es passiert ist.

### Beobachter für Berichte

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte abgerufen werden, die über JavaScript innerhalb der Website erstellt werden, auf der Sie Berichte erhalten möchten.
Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da ein Seitenabsturz das Abrufen der Berichte verhindern könnte — aber sie ist einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird mit dem Konstruktor [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) erstellt, dem zwei Parameter übergeben werden:

- Eine Callback-Funktion mit zwei Parametern — ein Array der im Beobachtungs-Queue des Observers verfügbaren Berichte und eine Kopie desselben `ReportingObserver`-Objekts, das erlaubt, die Beobachtung direkt von innerhalb des Callbacks aus zu steuern. Der Callback wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Optionswörterbuch, das Ihnen erlaubt, die [Typen](/de/docs/Web/API/ReportingObserver/ReportingObserver#types) der zu sammelnden Berichte zu spezifizieren und ob Berichte, die vor der Erstellung des Observers generiert wurden, beobachtbar sein sollen (`buffered: true`).

Es stehen dann Methoden am Observer zur Verfügung, um mit dem Sammeln von Berichten zu beginnen ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die Berichte, die sich derzeit in der Berichtswarteschlange befinden, abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Observer zu trennen, damit er keine Aufzeichnungen mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

An Beobachter gesendete Berichte sind Instanzen von Wörterbuchobjekten wie [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport), [`DeprecationReport`](/de/docs/Web/API/DeprecationReport), [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport), [`InterventionReport`](/de/docs/Web/API/InterventionReport) und [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport).
Diese haben alle eine Ursprungs-`url`, einen `type` und einen `body`, der spezifisch für den Berichtstyp ist.
Der Typ des Berichts kann von seiner `type`-Eigenschaft bestimmt werden, die für die oben genannten Berichte `coep`, `deprecation`, `integrity-violation`, `intervention` und `csp-violation` wäre.

Berichte, die an Berichts-Endpunkte und an Beobachter gesendet werden, sind im Wesentlichen gleich.
Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind, die zusätzliche `user_agent`- und `age`-Felder haben.

Eine Liste der dokumentierten Berichtstypen und ihr entsprechendes Berichts-Wörterbuch werden im [`options.types`](/de/docs/Web/API/ReportingObserver/ReportingObserver#types)-Parameter angegeben, der dem `ReportingObserver()`-Konstruktor übergeben wird.

### Berichterstellung über WebDriver

Die Spezifikation der Reporting API definiert auch eine Erweiterung "Generate Test Report" von [WebDriver](/de/docs/Web/WebDriver), die es ermöglicht, die Berichtserstellung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportingObserver`-Objekten beobachtet, die in der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen, sobald sie generiert werden.

### Verwandte Schnittstellen

- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das bei einem Element, Dokument oder Worker ausgelöst wird, wenn seine CSP verletzt wird.
    Dies ist Teil der HTTP-[Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Spezifikationen.

## Wörterbücher

- [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport)
  - : Enthält Details zu einem Verstoß gegen die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP).
- [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)
  - : Enthält Details zu einem Verstoß gegen die CSP.
    Dies ist Teil der HTTP-[Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Spezifikationen.
- [`DeprecationReport`](/de/docs/Web/API/DeprecationReport)
  - : Enthält Details zu veralteten Webplattform-Funktionen, die eine Website verwendet.
- [`InterventionReport`](/de/docs/Web/API/InterventionReport)
  - : Enthält Details zu einem Interventionberichts, der generiert wird, wenn eine von der Website gestellte Anfrage vom Browser abgelehnt wurde; z.B. aus Sicherheitsgründen.
- [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)
  - : Enthält Informationen über eine Ressource, die blockiert wurde, weil sie die vom {{httpheader("Integrity-Policy")}} verlangten Subresource-Integritätsgarantien nicht erfüllt hat oder die für nur-Bericht-Richtlinien blockiert würde, die unter Verwendung von {{httpheader("Integrity-Policy-Report-Only")}} festgelegt wurden.
    Dies ist Teil der [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Spezifikation.

## Verwandte HTTP-Header

Diese HTTP-Response-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL von Berichts-Endpunkten fest.
    Diese Endpunkte können in der `report-to`-Direktive verwendet werden, die mit einer Reihe von HTTP-Headern, einschließlich {{httpheader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}, verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Nicht mehr Teil der Reporting API, wird aber immer noch von einigen Browsern unterstützt. Dies setzt den Namen und die URL von Berichts-Endpunktgruppen, die mit einer Reihe von HTTP-Headern verwendet werden können, insbesondere für [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging), das noch nicht aktualisiert wurde, um `Reporting-Endpoints` zu unterstützen. Andere Reporting-API-Berichte sollten stattdessen `Reporting-Endpoints` für eine bessere zukünftige Unterstützung verwenden.

Berichts-Endpunkte können für die folgenden Berichte mithilfe der {{CSP("report-to")}}-Direktive oder des Parameters auf den entsprechenden Headern festgelegt werden:

- COEP-Verstöße
  - : {{HTTPHeader("Cross-Origin-Embedder-Policy")}} oder {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}}.
- CSP-Verstöße
  - : {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

Berichts-Endpunkte können für die folgenden Berichte durch Verwendung des [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Feldes in einem strukturierten Wörterbuch auf den entsprechenden Headern festgelegt werden:

- Integrity-Policy-Verstöße
  - : {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}}.

## Beispiele

### Meldung veralteter Funktionen

Dieses Beispiel zeigt, wie `„deprecation“`-Berichte innerhalb einer Seite beobachtet werden, die sie mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) auslöst.

Beachten Sie, dass wir uns entschieden haben, einen `„deprecation“`-Bericht anzuzeigen, weil dafür keine besonderen HTTP-Header erforderlich sind und er daher als ein MDN-Live-Beispiel ausgeführt werden kann.

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

Zuerst konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte mit dem Typ `„deprecation“` zu lauschen, und übergeben einen Callback, der die Berichte empfängt und protokolliert.

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((report) => {
    //console.log(report);
    log(JSON.stringify(report, null, 2));
  });
}, options);

// Start the observer
observer.observe();
```

Wir führen dann den folgenden Code aus, der synchrones XHR (veraltete API) verwendet.
Beachten Sie, dass dies nach dem Observer definiert wird, den es auslöst, sobald der Observer läuft.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Veralterungsberichte unterstützen, sollte unten ein Bericht angezeigt werden.
Beachten Sie, dass der `type` `„deprecation“` ist.

{{EmbedLiveSample("Using the `ReportingObserver` interface", "100%", "280px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
