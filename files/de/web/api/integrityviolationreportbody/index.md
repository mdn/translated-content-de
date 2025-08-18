---
title: IntegrityViolationReportBody
slug: Web/API/IntegrityViolationReportBody
l10n:
  sourceCommit: 5f8f306587fbe25beac0d0e9c9fbda366e372f14
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}{{SeeCompatTable}}

Das `IntegrityViolationReportBody`-Wörterbuch ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Inhalt eines Berichts über Verstöße gegen eine [Integrity Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy) darstellt.

Berichte über Integritätsverletzungen können an [Reporting-Server-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) oder über einen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) gemeldet werden.
Sie haben einen [`type`](/de/docs/Web/API/Report/type) von `"integrity-violation"`, eine [`url`](/de/docs/Web/API/Report/url), die das Dokument angibt, das den Verstoß enthält, und eine [`body`](/de/docs/Web/API/Report/body)-Eigenschaft, die ein Objekt ist, das zu diesem Wörterbuch passt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- `blockedURL` {{ReadOnlyInline}}
  - : Ein String, der die URL der Ressource darstellt, die durch eine durchgesetzte Integritätsrichtlinie blockiert wurde (oder nur für eine [reportOnly](#reportonly)-Richtlinie gemeldet wurde).
- `documentURL` {{ReadOnlyInline}}
  - : Ein String, der die URL des Dokuments darstellt, das versucht, die Ressource zu laden.
- `destination` {{ReadOnlyInline}}
  - : Ein String, der das [`Request.destination`](/de/docs/Web/API/Request/destination#script) der blockierten Ressource angibt.
    Derzeit kann dies nur `"script"` sein.
- `reportOnly` {{ReadOnlyInline}}
  - : Ein Boolean: `false`, wenn die Richtlinie durchgesetzt wurde, und `true`, wenn der Verstoß nur gemeldet wurde.

## Beschreibung

Integritätsrichtlinien-Verstöße werden gemeldet, wenn ein Dokument versucht, eine Ressource zu laden, die die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantie einer Richtlinie nicht erfüllt, die mit entweder dem {{httpheader("Integrity-Policy")}} oder dem {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header festgelegt wurde.

Konkret wird ein Bericht gesendet, wenn ein Dokument versucht, eine {{htmlelement("script")}}-Ressource (oder ein anderes im Policy aufgelistetes [Request-Destination](/de/docs/Web/API/Request/destination)) zu laden, die keine gültigen Integritätsmetadaten enthält, oder eine Anfrage im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus zu stellen.

Verletzungsberichte können innerhalb eines verletzenden Dokuments über einen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Callback (definiert im [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) Konstruktor) abgerufen werden, indem auf Berichtobjekte gefiltert wird, die einen `type` von `"integrity-violation"` haben.

Verletzungsberichte können auch als JSON-Objekte in `POST`-Anfragen an die in den {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} Headern angegebenen [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) gesendet werden.
Die JSON-Berichtsobjekte sind eine Serialisierung der Berichte, die im [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegeben werden, und haben daher ebenfalls einen `type` von `"integrity-violation"` und eine `body`-Eigenschaft, die eine Serialisierung dieses Objekts ist.
Beachten Sie, dass Endpoint-Werte, die in der Richtlinie festgelegt sind, auf Kennungen abgebildet werden müssen, die mit dem {{HTTPHeader("Reporting-Endpoints")}} Header festgelegt wurden.

## Beispiele

### Berichterstattung mit der API

Dieses Beispiel zeigt, wie Sie Berichte über Integritätsrichtlinien-Verstöße mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) erhalten können.

Zuerst setzen wir die Integritätsrichtlinie einer Seite mit dem {{httpheader("Integrity-Policy")}}.
Die unten stehende Richtlinie meldet und blockiert das Laden von Ressourcen eines jeden {{htmlelement("script")}}-Elementes oder [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Objekts, das kein `integrity`-Attribut angibt, oder wenn eine Skript-Ressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert wird.
Beachten Sie, dass wir in diesem Beispiel nur daran interessiert sind, die Verstöße mit der API zu melden, weshalb wir die Reporting-Endpunkte weglassen:

```http
Integrity-Policy: blocked-destinations=(script)
```

Als nächstes gehen wir davon aus, dass unsere Seite das folgende Element enthält, um ein Skript zu laden.
Weil wir einen Verstoß auslösen möchten, wird das `integrity`-Attribut, das verwendet wird, um das Skript mit unserer erwarteten Version abzugleichen, ausgelassen.
Wir könnten auch das `cross-origin` Attribut auslassen, damit die Anfrage im `no-cors` Modus gesendet wird.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Ein Skript, das mit der Richtlinie übereinstimmt, könnte so aussehen:
>
> ```html
> <script
>   src="https://example.com/example-framework.js"
>   integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
>   crossorigin="anonymous"></script>
> ```

Um Verstöße innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objekt, um auf Berichte mit dem Typ `"integrity-violation"` zu hören, und übergeben einen Callback, der die Berichte empfängt und protokolliert.
Dieser Code muss vor dem Skript, das den Verstoß verursacht, auf derselben Seite geladen werden:

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    reports.forEach((violation) => {
      console.log(violation);
      console.log(JSON.stringify(violation));
    });
  },
  {
    types: ["integrity-violation"],
    buffered: true,
  },
);

observer.observe();
```

Oben protokollieren wir jedes Verletzungsbericht-Objekt und eine JSON-String-Version des Objekts, die ähnlich wie das unten stehende Objekt aussehen könnte.

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/example-framework.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

### Senden eines Berichts an einen Reporting-Endpunkt

Die Konfiguration einer Webseite zum Senden eines Berichts über Integritätsrichtlinien-Verstöße an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) ähnelt dem vorherigen Beispiel sehr.

Der Hauptunterschied besteht darin, dass wir einen oder mehrere Reporting-Endpunkte angeben müssen, an die wir die Berichte senden möchten, indem wir den {{httpheader("Reporting-Endpoints")}} Antwort-Header verwenden, und diese dann im `endpoints`-Feld bei der Festlegung der Richtlinie referenzieren.

Sie können dies unten sehen, wo wir zuerst zwei Endpunkte definieren — `integrity-endpoint` und `backup-integrity-endpoint` — und diese dann in unserer Richtlinie referenzieren:

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Wir können einen Verstoß auslösen, indem wir ein externes Skript von der Seite laden, das die Subresource-Integritätsrichtlinien nicht erfüllt.
Nur um sich vom vorherigen Beispiel zu unterscheiden, senden wir die Anfrage hier im `no-cors` Modus:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"></script>
```

Der Verletzungsbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet.
Wie Sie im Beispiel unten sehen können, ist der `type` `"integrity-violation"` und die `body`-Eigenschaft ist eine Serialisierung dieses `IntegrityViolationReportBody` Objekts:

Der Bericht in diesem Fall würde genauso aussehen wie unser JSON-Bericht im vorherigen Beispiel.

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/example-framework.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- {{HTTPHeader("Integrity-Policy")}}
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Integrity Policy](/de/docs/Web/Security/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
