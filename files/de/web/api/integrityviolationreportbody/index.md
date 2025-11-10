---
title: IntegrityViolationReportBody
slug: Web/API/IntegrityViolationReportBody
l10n:
  sourceCommit: 55bb65bb6a84808896ed0f6c83e57c60dbd8480e
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

Das `IntegrityViolationReportBody`-Wörterbuch ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API) und stellt den Körper eines Berichts über eine Verletzung der [Integrity Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy) dar.

Berichte über Integritätsverletzungen können an [Endpunkte von Berichtsservern](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) oder über einen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) gemeldet werden. Sie haben einen [`type`](/de/docs/Web/API/Report/type) von `"integrity-violation"`, eine [`url`](/de/docs/Web/API/Report/url), die das Dokument angibt, das die Verletzung enthält, und eine [`body`](/de/docs/Web/API/Report/body)-Eigenschaft, die ein Objekt ist, das mit diesem Wörterbuch übereinstimmt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- `blockedURL` {{ReadOnlyInline}}
  - : Ein String, der die URL der Ressource repräsentiert, die durch eine durchgesetzte Integritätspolitik blockiert wurde (oder nur für eine [reportOnly](#reportonly)-Politik gemeldet wurde).
- `documentURL` {{ReadOnlyInline}}
  - : Ein String, der die URL des Dokuments darstellt, das versucht, die Ressource zu laden.
- `destination` {{ReadOnlyInline}}
  - : Ein String, der das [`Request.destination`](/de/docs/Web/API/Request/destination#script) der blockierten Ressource angibt.
    Derzeit kann dies nur `"script"` sein.
- `reportOnly` {{ReadOnlyInline}}
  - : Ein Boolean: `false`, wenn die Richtlinie durchgesetzt wurde, und `true`, wenn die Verletzung nur gemeldet wurde.

## Beschreibung

Verletzungen der Integritätsrichtlinien werden gemeldet, wenn ein Dokument versucht, eine Ressource zu laden, die nicht den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien einer Richtlinie entspricht, die entweder über die HTTP-Header {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} gesetzt wurde.

Insbesondere wird ein Bericht gesendet, wenn ein Dokument versucht, eine {{htmlelement("script")}}-Ressource (oder ein anderes in der Richtlinie aufgeführtes [Anforderungsziel](/de/docs/Web/API/Request/destination)) zu laden, die keine gültigen Integritätsmetadaten aufweist, oder eine Anforderung im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus zu stellen.

Verletzungsberichte können in einem verletzenden Dokument mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Callbacks erhalten werden (definiert im [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktor), der auf Berichtsobjekte filtert, die einen `type` von `"integrity-violation"` haben.

Verletzungsberichte können auch als JSON-Objekte in `POST`-Anfragen an die in den Headern {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} angegebenen [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) gesendet werden. Die JSON-Berichtsobjekte sind eine Serialisierung der Berichte, die im [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegeben werden, und haben daher auch einen `type` von `"integrity-violation"` und eine `body`-Eigenschaft, die eine Serialisierung dieses Objekts ist. Beachten Sie, dass Endpunktwerte, die in der Richtlinie gesetzt sind, auf Bezeichner abbilden müssen, die mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header gesetzt werden.

## Beispiele

### Berichterstattung über die API

Dieses Beispiel zeigt, wie Sie Berichte über Integritätsrichtlinienverletzungen mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) erhalten können.

Zuerst setzen wir die Integritätspolitik einer Seite mithilfe der {{httpheader("Integrity-Policy")}}. Die untenstehende Richtlinie meldet und blockiert das Laden von Ressourcen jedes {{htmlelement("script")}}-Elements oder [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Objekts, das kein `integrity`-Attribut angibt, oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird. Beachten Sie, dass wir in diesem Beispiel nur an der Meldung der Verstöße über die API interessiert sind, daher lassen wir die Reporting-Endpunkte aus:

```http
Integrity-Policy: blocked-destinations=(script)
```

Als nächstes nehmen wir an, dass unsere Seite das folgende Element enthält, um ein Skript zu laden. Da wir eine Verletzung auslösen möchten, lassen wir das `integrity`-Attribut aus, das zum Überprüfen des Skripts verwendet wird, dass es unserer erwarteten Version entspricht. Wir könnten auch das `cross-origin`-Attribut weglassen, damit die Anfrage im `no-cors`-Modus gesendet wird.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Ein Skript, das den Richtlinien entspricht, könnte so aussehen:
>
> ```html
> <script
>   src="https://example.com/example-framework.js"
>   integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
>   crossorigin="anonymous"></script>
> ```

Um Verletzungen innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte mit dem Typ `"integrity-violation"` zu lauschen. Dabei übergeben wir einen Callback, der die Berichte empfängt und protokolliert. Dieser Code muss geladen werden, bevor das Skript, das die Verletzung auslöst, auf derselben Seite geladen wird:

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

Oben protokollieren wir jedes Verletzungsberichtobjekt und eine JSON-String-Version des Objekts, die dem folgenden Objekt ähnlich aussehen könnte.

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

### Versenden eines Berichts an einen Reporting-Endpunkt

Die Konfiguration einer Webseite zum Senden eines Berichts über eine Integritätsrichtlinienverletzung an einen [Endpunkt des Berichtsservers](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) ist sehr ähnlich wie im vorherigen Beispiel.

Der Hauptunterschied besteht darin, dass wir einen oder mehrere Berichtsendpunkte angeben müssen, an die wir die Berichte senden wollen, indem wir den Antwortheader {{httpheader("Reporting-Endpoints")}} verwenden und diese dann im `endpoints`-Feld bei der Festlegung der Richtlinie referenzieren.

Sie können dies unten sehen, wo wir zuerst zwei Endpunkte definieren — `integrity-endpoint` und `backup-integrity-endpoint` — und diese dann in unserer Richtlinie referenzieren:

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Wir können eine Verletzung auslösen, indem wir ein externes Skript von der Seite laden, das nicht den Richtlinien zur Subresource Integrity entspricht. Um vom vorherigen Beispiel etwas abzuweichen, senden wir hier die Anfrage im `no-cors`-Modus:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"></script>
```

Der Verletzungsbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet. Wie Sie im untenstehenden Beispiel sehen können, ist der `type` `"integrity-violation"` und die `body`-Eigenschaft ist eine Serialisierung dieses `IntegrityViolationReportBody`-Objekts:

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
