---
title: IntegrityViolationReport
slug: Web/API/IntegrityViolationReport
l10n:
  sourceCommit: ea7722e995404f47bfaa0d7d0c011472d85aa972
---

{{APIRef("Reporting API")}}

Das `IntegrityViolationReport`-Dictionary der [Reporting API](/de/docs/Web/API/Reporting_API) stellt einen Bericht dar, der erstellt wird, wenn ein Dokument gegen seine [Integrity Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy) verstößt.

Berichte dieses Typs können innerhalb einer Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden. Eine serialisierte Version kann an einen [Berichtsserver-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanzeigenschaften

- `body`
  - : Der Inhalt des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `blockedURL`
      - : Ein String, der die URL der Ressource angibt, die durch eine durchgesetzte Integrity Policy blockiert wurde (oder bei einer [`reportOnly`](#reportonly)-Policy lediglich gemeldet wurde).
    - `documentURL`
      - : Ein String, der die URL des Dokuments angibt, das versucht, die Ressource zu laden.
    - `destination`
      - : Ein String, der die [`Request.destination`](/de/docs/Web/API/Request/destination) der blockierten Ressource angibt.
        Derzeit kann dieser Wert nur `"script"` sein.
    - `reportOnly`
      - : Ein boolescher Wert: `false`, wenn die Policy durchgesetzt wurde, und `true`, wenn der Verstoß nur gemeldet wurde.
        Die Werte zeigen an, dass die Policy mit {{httpheader("Integrity-Policy")}} beziehungsweise {{httpheader("Integrity-Policy-Report-Only")}} festgelegt wurde.

- `type`
  - : Der String `"integrity-violation"`, der angibt, dass es sich um einen Bericht über einen Integritätsverstoß handelt.
- `url`
  - : Ein String, der die URL des Dokuments angibt, das den Bericht erstellt hat.

## Beschreibung

Verstöße gegen eine Integrity Policy werden gemeldet, wenn ein Dokument versucht, eine Ressource zu laden, die die Garantien der [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) einer mit den HTTP-Headern {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} festgelegten Policy nicht erfüllt.

Ein Bericht wird insbesondere dann gesendet, wenn ein Dokument versucht, eine {{htmlelement("script")}}-Ressource (oder eine andere in der Policy aufgeführte [Request Destination](/de/docs/Web/API/Request/destination)) ohne gültige Integritätsmetadaten zu laden oder eine Anfrage im Modus [no-cors](/de/docs/Web/API/Request/mode#no-cors) zu stellen.

Mit der [Reporting API](/de/docs/Web/API/Reporting_API) können Sie Berichte über Integritätsverstöße innerhalb der Seite überwachen, für die die Policy gilt.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, das auf Berichte wartet. Sie übergeben ihm eine Callback-Methode und optional eine `options`-Eigenschaft, mit der Sie die gewünschten Berichtstypen angeben.
Die Callback-Methode wird anschließend mit den Berichten der angeforderten Typen aufgerufen und erhält ein Berichtsobjekt.
Bei Integritätsverstößen ist dieses Objekt eine `IntegrityViolationReport`-Instanz (deren Eigenschaft [`type`](#type) auf `"integrity-violation"` gesetzt ist).

Die Struktur eines typischen Berichts ist unten dargestellt.
Sie enthält die URL der Seite, deren Policy verletzt wurde (`url`), die URL des Dokuments, das versucht hat, die Ressource zu laden (`body.documentURL`), und die URL der Ressource, deren Laden blockiert wurde (`body.blockedURL`).
Außerdem ist erkennbar, dass der Bericht durch das Laden eines Skripts ausgelöst wurde und dass der Verstoß zur Durchsetzung der Policy führte (statt lediglich gemeldet zu werden).

```json
{
  "type": "integrity-violation",
  "url": "https://url-of-page-attempting-to-load-resource-in-violation",
  "body": {
    "documentURL": "https://localhost:8443/",
    "blockedURL": "https://url-of-blocked-resource.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

Berichte über Verstöße können auch als JSON-Array von Berichtsobjekten in einer {{httpmethod("POST")}}-Anfrage an einen oder mehrere konfigurierte [Berichtsserver-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.
Die Namen der Berichtsserver-Endpunkte werden beim Festlegen von {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} in der [`endpoints`-Liste](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) angegeben.
Gültige Endpunktnamen und ihre Zuordnung zu einer bestimmten URL werden mit dem Header {{httpheader("Reporting-Endpoints")}} definiert.

Die Struktur jedes an den Server gesendeten Berichtsobjekts entspricht fast genau der von `IntegrityViolationReport`, enthält aber zusätzlich die Felder `age` und `user_agent`.

```json
[
  {
    "age": 176279,
    "body": {
      "documentURL": "https://localhost:8443/",
      "blockedURL": "https://url-of-blocked-resource.js",
      "destination": "script",
      "reportOnly": false
    },
    "type": "integrity-violation",
    "url": "https://url-of-page-attempting-to-load-resource-in-violation",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"
  }
]
```

## Beispiele

### Die `ReportingObserver`-Schnittstelle verwenden

Dieses Beispiel zeigt, wie Sie mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Berichte über Verstöße gegen eine Integrity Policy erhalten.

Zuerst legen wir mit {{httpheader("Integrity-Policy")}} die Integrity Policy einer Seite fest.
Die folgende Policy meldet und blockiert das Laden von Ressourcen durch jedes {{htmlelement("script")}}-Element oder [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Objekt, das kein `integrity`-Attribut angibt, sowie Anfragen nach Skriptressourcen im Modus [no-cors](/de/docs/Web/API/Request/mode#no-cors).
Da wir in diesem Beispiel nur daran interessiert sind, die Verstöße über die API zu melden, lassen wir die Berichtsserver-Endpunkte weg:

```http
Integrity-Policy: blocked-destinations=(script)
```

Als Nächstes nehmen wir an, dass unsere Seite das folgende Element zum Laden eines Skripts enthält.
Um einen Verstoß auszulösen, lassen wir das `integrity`-Attribut weg, mit dem geprüft wird, ob das Skript der erwarteten Version entspricht.
Wir könnten auch das `crossorigin`-Attribut weglassen, damit die Anfrage im Modus `no-cors` gesendet wird.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Ein Skript, das der Policy entspricht, könnte so aussehen:
>
> ```html
> <script
>   src="https://example.com/example-framework.js"
>   integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
>   crossorigin="anonymous"></script>
> ```

Um Verstöße innerhalb der Seite zu beobachten, erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, das auf Berichte des Typs `"integrity-violation"` wartet. Dabei übergeben wir einen Callback, der die Berichte empfängt und protokolliert.
Dieser Code muss auf derselben Seite vor dem Skript geladen werden, das den Verstoß verursacht:

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

Im obigen Beispiel protokollieren wir jedes Berichtsobjekt zu einem Verstoß sowie eine JSON-String-Version des Objekts. Diese könnte dem folgenden Objekt ähneln.

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

### Einen Bericht an einen Berichtsserver-Endpunkt senden

Die Konfiguration einer Webseite zum Senden eines Berichts über einen Verstoß gegen eine Integrity Policy an einen [Berichtsserver-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) ähnelt dem vorherigen Beispiel sehr.

Der wichtigste Unterschied besteht darin, dass wir mit dem Antwort-Header {{httpheader("Reporting-Endpoints")}} einen oder mehrere Berichtsserver-Endpunkte angeben müssen, an die die Berichte gesendet werden sollen. Beim Festlegen der Policy verweisen wir dann im Feld `endpoints` auf diese Endpunkte.

Unten definieren wir zunächst zwei Endpunkte – `integrity-endpoint` und `backup-integrity-endpoint` – und verweisen anschließend in unserer Policy auf sie:

```http
Reporting-Endpoints: integrity-endpoint="https://example.com/integrity", backup-integrity-endpoint="https://report-provider.example/integrity"
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
```

Wir können einen Verstoß auslösen, indem wir von der Seite aus ein externes Skript laden, das die Anforderungen der Subresource Integrity nicht erfüllt.
Anders als im vorherigen Beispiel senden wir die Anfrage hier im Modus `no-cors`:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"></script>
```

Anschließend wird an jeden Endpunkt ein Bericht über den Verstoß gesendet: als JSON-Array in einer `POST`-Anfrage mit `Content-Type: application/reports+json`.
Der Bericht ist eine Serialisierung des `IntegrityViolationReport`-Objekts mit den zusätzlichen Feldern `age` und `user_agent`. Sein `type` ist `"integrity-violation"`:

```json
[
  {
    "age": 176279,
    "type": "integrity-violation",
    "url": "https://example.com",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "body": {
      "documentURL": "https://example.com",
      "blockedURL": "https://example.com/example-framework.js",
      "destination": "script",
      "reportOnly": false
    }
  }
]
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
- [Integrity Policy](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
