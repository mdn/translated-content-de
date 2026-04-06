---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{DefaultAPISidebar("Reporting API")}}{{AvailableInWorkers}}

Die Reporting-API bietet einen generischen Berichtsmechanismus für Webanwendungen, der genutzt werden kann, um Berichte basierend auf verschiedenen Plattformfunktionen (zum Beispiel [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) oder Berichte über die Abschaffung von Funktionen) auf konsistente Weise bereitzustellen.

## Konzepte und Nutzung

Es gibt mehrere verschiedene Funktionen und Probleme auf der Webplattform, die Informationen generieren, die für Webentwickler nützlich sind, wenn sie versuchen, Fehler zu beheben oder ihre Websites auf andere Weise zu verbessern. Solche Informationen können umfassen:

- Verstöße gegen die [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Verstöße gegen die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy).
- Verstöße gegen die [Integrity-Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy).
- Verstöße gegen die [Cross-Origin-Embedder-Policy](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy).
- Nutzung veralteter Funktionen (wenn Sie etwas verwenden, das in Kürze in Browsern nicht mehr funktionieren wird).
- Auftreten von Abstürzen.
- Auftreten von User-Agent-Interventionen (wenn der Browser etwas blockiert, das Ihr Code zu tun versucht, weil es als Sicherheitsrisiko eingestuft wird, oder einfach nur lästig ist, wie z.B. automatisches Abspielen von Audio).

Der Zweck der Reporting-API besteht darin, einen konsistenten Berichtsmechanismus bereitzustellen, der verwendet werden kann, um solche Informationen Entwicklern in Form von Berichten, die durch JavaScript-Objekte dargestellt werden, zur Verfügung zu stellen. Es gibt einige Möglichkeiten, sie zu nutzen, die in den unten stehenden Abschnitten detailliert beschrieben werden.

### Endpunkte des Reporting-Servers

Jedem einzigartigen Ursprung, für den Sie Berichte erhalten möchten, kann eine Reihe von "Endpunkten" zugewiesen werden, das sind benannte URLs (oder Gruppen von URLs), zu denen Berichte von einem User-Agent gesendet werden können.
Ein Reporting-Server an diesen Endpunkten kann die Berichte sammeln, verarbeiten und nach Bedarf durch Ihre Anwendung präsentieren.

Der {{httpheader("Reporting-Endpoints")}} HTTP-Header wird verwendet, um Details über die verschiedenen Endpunkte anzugeben, die einem User-Agent für die Zustellung von Berichten zur Verfügung stehen.
Die Endpunkte können dann auf bestimmten HTTP-Antwort-Headern verwendet werden, um den spezifischen Endpunkt (oder in einigen Fällen Endpunkte) anzuzeigen, der für den zugehörigen Bericht verwendet wird.
Die Direktive oder der Parameter, der zum Spezifizieren eines Endpunkts verwendet wird, hängt vom Header ab.
Zum Beispiel kann die CSP-Direktive {{CSP("report-to")}} auf den HTTP-Headern {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwendet werden, um den Endpunkt anzugeben, an den CSP-Verstoßberichte gesendet werden sollen, während das [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Feld auf {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} verwendet wird, um anzugeben, wohin Berichte über Integritätspolitik-Verstöße gesendet werden sollen.

Berichtstypen, die keinen zugeordneten HTTP-Header haben, wie `crash`, `deprecation` und `intervention` Berichte, senden Berichte normalerweise an den "Standard-Berichtsendpunkt".
Dies ist einfach ein als "default" benannter Endpunkt, der mit dem `Reporting-Endpoints` Header spezifiziert wird.

> [!NOTE]
> Es gibt keine absolute Garantie für die Zustellung von Berichten — ein Bericht könnte weiterhin nicht erfasst werden, wenn ein schwerer Fehler auftritt.

Die Berichte selbst werden in einer `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` vom User-Agent an den Zielendpunkt gesendet.
Sie sind Serialisierungen des entsprechenden Wörterbuchs für jeden [Berichtstyp](#berichtstypen).
Zum Beispiel sind CSP-Verstoßberichte eine Serialisierung eines [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Objekts.

Berichte, die an Endpunkte gesendet werden, können unabhängig vom Betrieb der Websites, auf die sie sich beziehen, abgerufen werden, was nützlich ist — ein Absturz könnte zum Beispiel eine Website lahmlegen und alles stoppen, was läuft, aber ein Bericht könnte trotzdem erlangt werden, um dem Entwickler einige Hinweise zu geben, warum es passiert ist.

### Reporting-Observer

Berichte können auch über [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekte erfasst werden, die über JavaScript innerhalb der Website erstellt werden, für die Sie Berichte erhalten möchten.
Diese Methode ist nicht so ausfallsicher wie das Senden von Berichten an den Server, da ein Seitenabsturz Sie daran hindern könnte, die Berichte abzurufen – aber sie ist einfacher einzurichten und flexibler.

Ein `ReportingObserver`-Objekt wird mit dem [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktor erstellt, dem zwei Parameter übergeben werden:

- Eine Callbackfunktion mit zwei Parametern — ein Array der im Beobachtungs-Report-Queue verfügbaren Berichte und eine Kopie desselben `ReportingObserver`-Objekts, die es ermöglicht, die Beobachtung direkt aus dem Callback heraus zu steuern. Der Callback wird ausgeführt, wenn die Beobachtung beginnt.
- Ein Options-Wörterbuch, das es Ihnen ermöglicht, die [Typen](/de/docs/Web/API/ReportingObserver/ReportingObserver#types) von Berichten, die gesammelt werden sollen, anzugeben und ob Berichte, die vor der Erstellung des Observers generiert wurden, beobachtbar sein sollen (`buffered: true`).

Methoden stehen dann zur Verfügung, um auf dem Observer Berichte zu sammeln ([`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)), die Berichte, die sich derzeit in der Berichtsqueue befinden, abzurufen ([`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)) und den Observer zu trennen, sodass er keine Berichte mehr sammeln kann ([`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)).

### Berichtstypen

Berichte, die an Reporting-Observer gesendet werden, sind Instanzen von Wörterbuchobjekten, wie [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport), [`DeprecationReport`](/de/docs/Web/API/DeprecationReport), [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport), [`InterventionReport`](/de/docs/Web/API/InterventionReport) und [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport).
Diese haben alle eine Ursprungs-`url`, einen `type` und einen `body`, der spezifisch für den Berichtstyp ist.
Der Typ eines Berichts kann über seine `type`-Eigenschaft bestimmt werden, die für die oben genannten Berichte `coep`, `deprecation`, `integrity-violation`, `intervention` und `csp-violation` wäre.

Berichte, die an Reporting-Endpunkte und Reporting-Observer gesendet werden, sind im Wesentlichen identisch.
Der einzige Unterschied besteht darin, dass Serverberichte JSON-Serialisierungen der Objekte sind, die zusätzliche `user_agent`- und `age`-Felder haben.

Eine Liste dokumentierter Berichtstypen und ihrer entsprechenden Berichtswörterbücher finden Sie im [`options.types`](/de/docs/Web/API/ReportingObserver/ReportingObserver#types)-Parameter, der an den `ReportingObserver()`-Konstruktor übergeben wird.

### Berichte über WebDriver generieren

Die Reporting-API-Spezifikation definiert auch eine Generate Test Report [WebDriver](/de/docs/Web/WebDriver)-Erweiterung, die es Ihnen ermöglicht, die Berichtserstellung während der Automatisierung zu simulieren. Berichte, die über WebDriver generiert werden, werden von allen registrierten `ReportingObserver`-Objekten beobachtet, die in der geladenen Website vorhanden sind. Dies ist noch nicht dokumentiert.

## Schnittstellen

- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
  - : Ein Objekt, das verwendet werden kann, um Berichte zu sammeln und auf sie zuzugreifen, während sie erstellt werden.

### Verwandte Schnittstellen

- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
  - : Repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das ausgelöst wird, wenn ein CSP auf ein Element, Dokument oder einen Worker verletzt wird.
    Dies ist als Teil der HTTP-[Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Spezifikationen definiert.

## Wörterbücher

- [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport)
  - : Enthält Details zu einem Verstoß gegen die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP).
- [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)
  - : Enthält Details zu einem CSP-Verstoß.
    Dies ist als Teil der HTTP-[Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Spezifikationen definiert.
- [`DeprecationReport`](/de/docs/Web/API/DeprecationReport)
  - : Enthält Details zu veralteten Webplattformfunktionen, die eine Website verwendet.
- [`InterventionReport`](/de/docs/Web/API/InterventionReport)
  - : Enthält Details zu einem Interventionsbericht, der generiert wird, wenn eine von der Website angeforderte Aktion vom Browser abgelehnt wird; z.B. aus Sicherheitsgründen.
- [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)
  - : Enthält Informationen über eine Ressource, die blockiert wurde, weil sie nicht den Subresource-Integrity-Garantien ihrer {{httpheader("Integrity-Policy")}} entsprach oder die für "report-only"-Richtlinien blockiert werden würde, die mit {{httpheader("Integrity-Policy-Report-Only")}} festgelegt sind.
    Dies ist als Teil der [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Spezifikation definiert.

## Verwandte HTTP-Header

Diese HTTP-Antwort-Header definieren die Endpunkte, an die Berichte gesendet werden.

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Legt den Namen und die URL von Reporting-Endpunkten fest.
    Diese Endpunkte können in der `report-to`-Direktive verwendet werden, die mit einer Reihe von HTTP-Headern einschließlich {{httpheader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwendet werden kann.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}}
  - : Gehört nicht mehr zur Reporting-API, wird aber noch von einigen Browsern unterstützt. Dies legt den Namen und die URL von Reporting-Endpunktgruppen fest, die mit einer Reihe von HTTP-Headern besonders für [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging) verwendet werden können, das noch nicht aktualisiert wurde, um `Reporting-Endpoints` zu unterstützen. Andere Reporting-API-Berichte sollten stattdessen `Reporting-Endpoints` verwenden, um eine bessere zukünftige Unterstützung zu gewährleisten.

Berichts-Endpunkte können für die folgenden Berichte mit der {{CSP("report-to")}}-Direktive oder dem Parameter auf den entsprechenden Headern festgelegt werden:

- COEP-Verstöße
  - : {{HTTPHeader("Cross-Origin-Embedder-Policy")}} oder {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}}.
- CSP-Verstöße
  - : {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

Berichts-Endpunkte können für die folgenden Berichte mit dem [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Feld in einem strukturierten Wörterbuch auf den entsprechenden Headern festgelegt werden:

- Integrity-Policy-Verstöße
  - : {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}}.

## Beispiele

### Berichte über veraltete Funktionen

Dieses Beispiel zeigt, wie innerhalb einer Seite `"deprecation"`-Berichte beobachtet werden können, die sie über einen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) auslöst.

Beachten Sie, dass wir uns entschieden haben, einen `"deprecation"`-Bericht anzuzeigen, weil er keine speziellen HTTP-Header erfordert und daher als MDN-Live-Beispiel ausgeführt werden kann.

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

Zuerst erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte mit dem Typ `"deprecation"` zu hören, und übergeben einen Callback, der die Berichte empfängt und protokolliert.

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

Dann rufen wir den folgenden Code auf, der synchrones XHR (veraltete API) verwendet.
Beachten Sie, dass dies definiert ist, nachdem der Observer, den es auslöst, in Betrieb ist.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Ergebnisse

In Browsern, die Verfallsberichte unterstützen, sollte ein Bericht unten angezeigt werden.
Beachten Sie, dass der `type` `"deprecation"` ist.

{{EmbedLiveSample("Using the `ReportingObserver` interface", "100%", "280px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
