---
title: IntegrityViolationReportBody
slug: Web/API/IntegrityViolationReportBody
l10n:
  sourceCommit: 43e2a741865dd45ad5f18bb532fe84c6aaec0e77
---

{{APIRef("Reporting API")}} {{SecureContext_Header}} {{SeeCompatTable}}

Das `IntegrityViolationReportBody`-Wörterbuch ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Inhalt eines Berichts über einen Verstoß gegen eine [Integrity Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy) darstellt.

Verstöße gegen die Integrität können an [Reporting-Server-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) oder über einen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) gemeldet werden.
Sie haben einen [`type`](/de/docs/Web/API/Report/type) von `"integrity-violation"`, eine [`url`](/de/docs/Web/API/Report/url), die das Dokument angibt, das den Verstoß enthält, und eine [`body`](/de/docs/Web/API/Report/body)-Eigenschaft, die ein Objekt ist, das diesem Wörterbuch entspricht.

{{InheritanceDiagram}}

## Instanzeigenschaften

- `blockedURL` {{ReadOnlyInline}}
  - : Ein String, der die URL der Ressource darstellt, die durch eine durchgesetzte Integritätspolitik blockiert wurde (oder nur für eine [reportOnly](#reportonly)-Politik gemeldet wurde).
- `documentURL` {{ReadOnlyInline}}
  - : Ein String, der die URL des Dokuments darstellt, das versucht, die Ressource zu laden.
- `destination` {{ReadOnlyInline}}
  - : Ein String, der das [`Request.destination`](/de/docs/Web/API/Request/destination#script) der Ressource angibt, die blockiert wurde.
    Derzeit kann dies nur `"script"` sein.
- `reportOnly` {{ReadOnlyInline}}
  - : Ein Boolean: `false`, wenn die Politik durchgesetzt wurde, und `true`, wenn der Verstoß nur gemeldet wurde.

## Beschreibung

Verstöße gegen die Integritätspolitik werden gemeldet, wenn ein Dokument versucht, eine Ressource zu laden, die nicht die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien einer Politik erfüllt, die entweder mit den {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Headern festgelegt wurde.

Konkret wird ein Bericht gesendet, wenn ein Dokument versucht, eine {{htmlelement("script")}}-Ressource (oder ein anderes in der Politik aufgeführtes [Request-Destination](/de/docs/Web/API/Request/destination)) zu laden, die keine gültigen Integritätsmetadaten hat, oder eine Anfrage im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus zu stellen.

Verstoßberichte können in einem verletzenden Dokument über einen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Callback (definiert im [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktor) abgerufen werden, wobei auf Berichtsobjekte gefiltert wird, die einen `type` von `"integrity-violation"` haben.

Verstoßberichte können auch als JSON-Objekte in `POST`-Anfragen an die in den {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} Headern angegebenen [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) gesendet werden.
Die JSON-Berichtsobjekte sind eine Serialisierung der Berichte, die im [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegeben werden, und haben daher ebenfalls einen `type` von `"integrity-violation"` und eine `body`-Eigenschaft, die eine Serialisierung dieses Objekts ist.
Beachten Sie, dass Endpunktwerte, die in der Richtlinie festgelegt sind, mit Identifikatoren übereinstimmen müssen, die im {{HTTPHeader("Reporting-Endpoints")}} Header festgelegt sind.

## Beispiele

### Berichterstellung mit der API

Dieses Beispiel zeigt, wie Sie Berichte über Verstöße gegen die Integritätspolitik mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) erhalten können.

Zuerst setzen wir die Integritätspolitik einer Seite mit dem {{httpheader("Integrity-Policy")}}.
Die untenstehende Politik meldet und blockiert das Laden von Ressourcen jedes {{htmlelement("script")}}-Elements oder [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Objekts, das kein `integrity`-Attribut angibt, oder wenn eine Skript-Ressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.
Beachten Sie, dass wir in diesem Beispiel nur an der Berichterstellung der Verstöße über die API interessiert sind, daher lassen wir die Reporting-Endpunkte weg:

```http
Integrity-Policy: blocked-destinations=(script)
```

Als nächstes nehmen wir an, dass unsere Seite das folgende Element zum Laden eines Skripts enthält.
Da wir einen Verstoß auslösen wollen, wird das `integrity`-Attribut ausgelassen, das verwendet wird, um zu überprüfen, ob das Skript unserer erwarteten Version entspricht.
Wir könnten auch das `cross-origin`-Attribut weglassen, damit die Anfrage im `no-cors`-Modus gesendet wird.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Ein Skript, das den Richtlinien entspricht, könnte folgendermaßen aussehen:
>
> ```html
> <script
>   src="https://example.com/example-framework.js"
>   integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
>   crossorigin="anonymous"></script>
> ```

Um Verstöße innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte mit dem Typ `"integrity-violation"` zu hören, wobei wir einen Callback übergeben, der die Berichte empfängt und protokolliert.
Dieser Code muss vor dem Skript geladen werden, das den Verstoß verursacht, auf derselben Seite:

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

Oben protokollieren wir jedes Verstoß-Berichtsobjekt und eine JSON-String-Version des Objekts, die dem untenstehenden Objekt ähnlich sein könnte.

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

Das Konfigurieren einer Webseite, um einen Bericht über Verstöße gegen die Integritätspolitik an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) zu senden, ist dem vorherigen Beispiel sehr ähnlich.

Der Hauptunterschied besteht darin, dass wir einen oder mehrere Reporting-Endpunkte angeben müssen, an die wir die Berichte senden möchten, indem wir den {{httpheader("Reporting-Endpoints")}} Antwort-Header verwenden und diese dann im `endpoints`-Feld bei der Festlegung der Richtlinie referenzieren.

Sie können dies unten sehen, wo wir zuerst zwei Endpunkte definieren — `integrity-endpoint` und `backup-integrity-endpoint` — und diese dann in unserer Politik referenzieren:

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Wir können einen Verstoß auslösen, indem wir ein externes Skript von der Seite laden, das die Richtlinien zur Subresource-Integrität nicht erfüllt.
Um vom vorherigen Beispiel etwas abzuweichen, senden wir hier die Anfrage im `no-cors`-Modus:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"></script>
```

Der Bericht über den Verstoß wird dann als JSON-Datei an den angegebenen Endpunkt gesendet.
Wie Sie aus dem untenstehenden Beispiel sehen können, ist der `type` `"integrity-violation"` und die `body`-Eigenschaft ist eine Serialisierung dieses `IntegrityViolationReportBody`-Objekts:

Der Bericht würde in diesem Fall genauso aussehen wie unser JSON-Bericht im vorherigen Beispiel.

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
