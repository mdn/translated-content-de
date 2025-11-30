---
title: IntegrityViolationReportBody
slug: Web/API/IntegrityViolationReportBody
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

Das `IntegrityViolationReportBody` Wörterbuch ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Körper eines Berichts über Verletzungen einer [Integritätsrichtlinie](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy) repräsentiert.

Berichte über Integritätsverletzungen können an [Reporting-Server-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) oder über einen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) gemeldet werden. Sie haben einen [`type`](/de/docs/Web/API/Report/type) von `"integrity-violation"`, eine [`url`](/de/docs/Web/API/Report/url), die auf das Dokument verweist, das die Verletzung enthält, und eine [`body`](/de/docs/Web/API/Report/body)-Eigenschaft, die ein Objekt ist, das diesem Wörterbuch entspricht.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- `blockedURL` {{ReadOnlyInline}}
  - : Ein String, der die URL der Ressource beschreibt, die durch eine durchgesetzte Integritätsrichtlinie blockiert wurde (oder nur für eine [reportOnly](#reportonly)-Richtlinie gemeldet wurde).
- `documentURL` {{ReadOnlyInline}}
  - : Ein String, der die URL des Dokuments beschreibt, das versucht, die Ressource zu laden.
- `destination` {{ReadOnlyInline}}
  - : Ein String, der das [`Request.destination`](/de/docs/Web/API/Request/destination#script) der Ressource angibt, die blockiert wurde. Dies kann momentan nur `"script"` sein.
- `reportOnly` {{ReadOnlyInline}}
  - : Ein Boolean: `false`, wenn die Richtlinie durchgesetzt wurde, und `true`, wenn die Verletzung nur gemeldet wurde.

## Beschreibung

Integritätsrichtlinien-Verletzungen werden gemeldet, wenn ein Dokument versucht, eine Ressource zu laden, die nicht den [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Garantien einer Richtlinie entspricht, die entweder mit den HTTP-Headern {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} festgelegt wurde.

Speziell wird ein Bericht gesendet, wenn ein Dokument versucht, eine {{htmlelement("script")}}-Ressource (oder ein anderes [request destination](/de/docs/Web/API/Request/destination), das in der Richtlinie aufgeführt ist) zu laden, die keine gültigen Integritätsmetadaten hat, oder um eine Anfrage im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus zu stellen.

Verletzungsberichte können in einem verletzenden Dokument unter Verwendung eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Callbacks (definiert im [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) Konstruktor) erhalten werden, indem auf Berichtsobjekte gefiltert wird, die einen `type` von `"integrity-violation"` haben.

Verletzungsberichte können auch als JSON-Objekte in `POST`-Anfragen an die in den {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} Headern angegebenen [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) gesendet werden. Die JSON-Berichtsobjekte sind eine Serialisierung der Berichte, die im [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegeben werden und haben daher ebenfalls einen `type` von `"integrity-violation"` und eine `body`-Eigenschaft, die eine Serialisierung dieses Objekts ist. Beachten Sie, dass Endpunktwerte, die in der Richtlinie festgelegt sind, zu Kennungen passen müssen, die mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header festgelegt wurden.

## Beispiele

### Bericht mit der API

Dieses Beispiel zeigt, wie Sie Integritätsrichtlinien-Verletzungsberichte mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) erhalten können.

Zuerst legen wir die Integritätsrichtlinie einer Seite mit dem {{httpheader("Integrity-Policy")}} fest. Die Richtlinie unten berichtet und blockiert das Laden von Ressourcen bei jedem {{htmlelement("script")}}-Element oder [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Objekt, das kein `integrity`-Attribut angibt, oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird. Beachten Sie, dass wir uns in diesem Beispiel nur für die Berichterstattung der Verstöße über die API interessieren, daher lassen wir die Reporting-Endpunkte weg:

```http
Integrity-Policy: blocked-destinations=(script)
```

Als nächstes nehmen wir an, dass unsere Seite das folgende Element umfasst, um ein Skript zu laden. Da wir eine Verletzung auslösen möchten, lassen wir das `integrity`-Attribut weg, das verwendet wird, um zu prüfen, ob das Skript unserer erwarteten Version entspricht. Wir könnten auch das `cross-origin`-Attribut weglassen, damit die Anfrage im `no-cors`-Modus gesendet wird.

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

Um Verstöße innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte mit dem Typ `"integrity-violation"` zu lauschen, indem wir ein Callback übergeben, das die Berichte empfängt und protokolliert. Dieser Code muss vor dem Skript geladen werden, das die Verletzung verursacht, auf derselben Seite:

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

Oben protokollieren wir jedes Verletzungsberichtobjekt und eine JSON-String-Version des Objekts, die möglicherweise so aussieht wie das untenstehende Objekt.

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

### Einen Bericht an einen Reporting-Endpunkt senden

Die Konfiguration einer Webseite, um einen Integritätsrichtlinien-Verletzungsbericht an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) zu senden, ist sehr ähnlich zum vorherigen Beispiel.

Der Hauptunterschied besteht darin, dass wir einen oder mehrere Reporting-Endpunkte angeben müssen, an die wir die Berichte senden möchten, indem wir den {{httpheader("Reporting-Endpoints")}}-Antwortheader verwenden und dann diese im `endpoints`-Feld bei der Festlegung der Richtlinie referenzieren.

Im Folgenden sehen Sie, wie wir zuerst zwei Endpunkte definieren — `integrity-endpoint` und `backup-integrity-endpoint` — und sie dann in unserer Richtlinie referenzieren:

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Wir können eine Verletzung auslösen, indem wir ein externes Skript von der Seite laden, das den Richtlinien zur Subresource-Integrität nicht entspricht. Um sich vom vorherigen Beispiel zu unterscheiden, senden wir hier die Anfrage im `no-cors`-Modus:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"></script>
```

Der Verletzungsbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet. Wie Sie im folgenden Beispiel sehen können, ist der `type` `"integrity-violation"` und die `body`-Eigenschaft eine Serialisierung dieses `IntegrityViolationReportBody`-Objekts:

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
- [Integritätsrichtlinie](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
