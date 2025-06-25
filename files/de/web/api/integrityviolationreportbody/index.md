---
title: IntegrityViolationReportBody
slug: Web/API/IntegrityViolationReportBody
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

Das `IntegrityViolationReportBody`-Wörterbuch ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Inhalt eines Verstoßberichts gegen eine [Integritätsrichtlinie](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy) darstellt.

Integritätsverletzungsberichte können an [Reporting-Server-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) oder über einen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) gemeldet werden. Sie haben einen [`type`](/de/docs/Web/API/Report/type) von `"integrity-violation"`, eine [`url`](/de/docs/Web/API/Report/url), die das Dokument angibt, das den Verstoß enthält, und eine [`body`](/de/docs/Web/API/Report/body)-Eigenschaft, die ein Objekt ist, das diesem Wörterbuch entspricht.

{{InheritanceDiagram}}

## Instanzeigenschaften

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

Integritätsrichtlinienverstöße werden gemeldet, wenn ein Dokument versucht, eine Ressource zu laden, die nicht den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantie einer Richtlinie entspricht, die entweder mit den {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Headern gesetzt wurde.

Ein Bericht wird speziell gesendet, wenn ein Dokument versucht, eine {{htmlelement("script")}}-Ressource (oder ein anderes in der Richtlinie aufgeführtes [Request-Ziel](/de/docs/Web/API/Request/destination)) zu laden, die keine gültigen Integritätsmetadaten hat, oder eine Anfrage im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus durchzuführen.

Verstoßberichte können in einem verletzenden Dokument mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Callback (definiert im [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktor) abgerufen werden, wobei auf Berichtsobjekte gefiltert wird, die einen `type` von `"integrity-violation"` haben.

Verstoßberichte können auch als JSON-Objekte in `POST`-Anfragen an die in den {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} Headern angegebenen [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) gesendet werden. Die JSON-Berichtsobjekte sind eine Serialisierung der Berichte, die im [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegeben werden, und haben daher ebenfalls einen `type` von `"integrity-violation"` und eine `body`-Eigenschaft, die eine Serialisierung dieses Objekts ist. Beachten Sie, dass Endpunktwerte, die in der Richtlinie festgelegt sind, auf Werte abgebildet werden müssen, die mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header eingestellt sind.

## Beispiele

### Berichterstattung mit der API

Dieses Beispiel zeigt, wie Sie Integritätsrichtlinienverletzungsberichte mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) erhalten können.

Zuerst setzen wir die Integritätsrichtlinie für eine Seite mit dem {{httpheader("Integrity-Policy")}}. Die unten stehende Richtlinie meldet und blockiert das Laden von Ressourcen von jedem {{htmlelement("script")}}-Element oder [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Objekt, das kein `integrity`-Attribut angibt, oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefragt wird. Beachten Sie, dass wir in diesem Beispiel nur daran interessiert sind, die Verstöße über die API zu melden, daher lassen wir die Reporting-Endpunkte weg:

```http
Integrity-Policy: blocked-destinations=(script)
```

Als nächstes gehen wir davon aus, dass unsere Seite das folgende Element enthält, um ein Skript zu laden. Da wir einen Verstoß auslösen möchten, lässt es das `integrity`-Attribut weg, das zum Überprüfen verwendet wird, ob das Skript unserer erwarteten Version entspricht. Wir könnten auch das `cross-origin`-Attribut weglassen, sodass die Anfrage im `no-cors`-Modus gesendet wird.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Ein Skript, das der Richtlinie entspricht, könnte so aussehen:
>
> ```html
> <script
>   src="https://example.com/example-framework.js"
>   integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
>   crossorigin="anonymous"></script>
> ```

Um Verstöße innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, das auf Berichte mit dem Typ `"integrity-violation"` hört, indem wir einen Callback übergeben, der die Berichte empfängt und protokolliert. Dieser Code muss vor dem Skript geladen werden, das den Verstoß verursacht, auf derselben Seite:

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

Oben protokollieren wir jedes Verstoßberichtsobjekt und eine JSON-String-Version des Objekts, die möglicherweise dem unten stehenden Objekt ähnlich sieht.

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

Das Konfigurieren einer Webseite, um einen Integritätsrichtlinienverstoßbericht an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) zu senden, ist dem vorherigen Beispiel sehr ähnlich.

Der Hauptunterschied ist, dass wir einen oder mehrere Reporting-Endpunkte angeben müssen, an die wir die Berichte senden möchten, indem wir den {{httpheader("Reporting-Endpoints")}}-Response-Header verwenden und dann diese im `endpoints`-Feld bei der Einrichtung der Richtlinie referenzieren.

Sie können dies unten sehen, wo wir zunächst zwei Endpunkte definieren — `integrity-endpoint` und `backup-integrity-endpoint` — und sie dann in unserer Richtlinie referenzieren:

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Wir können einen Verstoß auslösen, indem wir ein externes Skript von der Seite laden, das nicht den Subresource-Integritätsrichtlinien entspricht. Um sich vom vorherigen Beispiel zu unterscheiden, senden wir die Anfrage hier im `no-cors`-Modus:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"></script>
```

Der Verstoßbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet. Wie Sie am unten stehenden Beispiel sehen können, ist der `type` `"integrity-violation"` und die `body`-Eigenschaft eine Serialisierung dieses `IntegrityViolationReportBody`-Objekts:

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
- [Integritätsrichtlinie](/de/docs/Web/Security/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
