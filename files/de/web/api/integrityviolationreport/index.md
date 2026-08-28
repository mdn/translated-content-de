---
title: IntegrityViolationReport
slug: Web/API/IntegrityViolationReport
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("Reporting API")}}

Das `IntegrityViolationReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen Bericht, der erstellt wird, wenn ein Dokument seine [Integritätsrichtlinie](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy) verletzt.

Berichte dieser Art können von einer Seite aus mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serialisierte Version kann an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanz-Eigenschaften

- `body`
  - : Der Inhalt des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `blockedURL`
      - : Ein String, der die URL der Ressource darstellt, die durch eine durchgesetzte Integritätsrichtlinie blockiert wurde (oder nur für eine [`reportOnly`](#reportonly)-Richtlinie gemeldet wurde).
    - `documentURL`
      - : Ein String, der die URL des Dokuments darstellt, das versucht, die Ressource zu laden.
    - `destination`
      - : Ein String, der das [`Request.destination`](/de/docs/Web/API/Request/destination#script) der Ressource angibt, die blockiert wurde.
        Derzeit kann dies nur `"script"` sein.
    - `reportOnly`
      - : Ein Boolean: `false`, wenn die Richtlinie durchgesetzt wurde, und `true`, wenn der Verstoß nur gemeldet wurde.
        Die Werte zeigen an, dass die Richtlinie mit {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} entsprechend festgelegt wurde.

- `type`
  - : Der String `"integrity-violation"`, der anzeigt, dass dies ein Integritätsverletzungsbericht ist.
- `url`
  - : Ein String, der die URL des Dokuments darstellt, das den Bericht erzeugt hat.

## Beschreibung

Integritätsrichtlinien-Verletzungen werden gemeldet, wenn ein Dokument versucht, eine Ressource zu laden, die nicht den [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Garantie einer mithilfe der HTTP-Header {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} gesetzten Richtlinie entspricht.

Genauer gesagt, wird ein Bericht gesendet, wenn ein Dokument versucht, eine {{htmlelement("script")}}-Ressource (oder ein anderes [Request-Ziel](/de/docs/Web/API/Request/destination), das in der Richtlinie aufgeführt ist) zu laden, das keine gültigen Integritätsmetadaten besitzt, oder um eine Anfrage im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus zu machen.

Sie können innerhalb der Seite, die die Richtlinie setzt, Berichte über Integritätsverletzungen überwachen, indem Sie die [Reporting API](/de/docs/Web/API/Reporting_API) verwenden.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte zu hören, indem Sie eine Callback-Methode und eine (optionale) `options`-Eigenschaft übergeben, die die Berichtstypen spezifiziert, die Sie melden möchten.
Die Callback-Methode wird dann mit Berichten der angeforderten Typen aufgerufen, indem ein Berichtsobjekt übergeben wird.
Bei Integritätsverletzungen wird das Objekt eine `IntegrityViolationReport`-Instanz sein (die die [`type`](#type)-Eigenschaft auf `"integrity-violation"` gesetzt hat).

Die Struktur eines typischen Berichts ist unten gezeigt.
Beachten Sie, dass wir die URL sowohl der Seite, deren Richtlinie verletzt wurde (`url`), des Dokuments, das versucht hat, die Ressource zu laden (`body.documentURL`), als auch der Ressource, die vom Laden blockiert wurde (`body.blockedURL`), sehen können.
Wir können auch sehen, dass der Bericht durch das Laden eines Skripts verursacht wurde und dass er durch eine Verletzung ausgelöst wurde, die durchgesetzt wurde (und nicht nur gemeldet wurde).

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

Verstoßberichte können auch als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an einen oder mehrere konfigurierte [Reporting-Server-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.
Namen der Reporting-Server-Endpunkte werden in der [`endpoints`-Liste](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) spezifiziert, wenn {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} gesetzt werden.
Gültige Endpunktnamen und deren Zuordnung zu einer bestimmten URL werden mithilfe des {{httpheader("Reporting-Endpoints")}}-Headers definiert.

Die Struktur des Serverberichts ist fast genau die gleiche wie `IntegrityViolationReport`, außer dass er zusätzlich die Felder `age` und `user_agent` enthält.

```json
{
  "age": "176279",
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
```

## Beispiele

### Verwendung der `ReportingObserver`-Schnittstelle

Dieses Beispiel zeigt, wie Sie Berichte über Verstöße gegen Integritätsrichtlinien mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) erhalten können.

Zuerst setzen wir die Integritätsrichtlinie einer Seite mit dem {{httpheader("Integrity-Policy")}}.
Die unten stehende Richtlinie meldet und blockiert das Laden von Ressourcen jedes {{htmlelement("script")}}-Elements oder [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Objekts, das kein `integrity`-Attribut angibt, oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.
Beachten Sie, dass wir in diesem Beispiel nur an der Meldung der Verstöße über die API interessiert sind, daher weglassen wir die Reporting-Endpunkte:

```http
Integrity-Policy: blocked-destinations=(script)
```

Als nächstes nehmen wir an, dass unsere Seite das folgende Element enthält, um ein Skript zu laden.
Da wir eine Verletzung auslösen möchten, lassen wir das `integrity`-Attribut weg, das verwendet wird, um zu überprüfen, ob das Skript unserer erwarteten Version entspricht.
Wir könnten auch das `cross-origin`-Attribut weglassen, sodass die Anfrage im `no-cors`-Modus gesendet wird.

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

Um Verstöße innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte mit dem Typ `"integrity-violation"` zu lauschen, indem wir einen Callback übergeben, der die Berichte empfängt und protokolliert.
Dieser Code muss geladen werden, bevor das Skript, das den Verstoß verursacht, auf derselben Seite geladen wird:

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

Oben protokollieren wir jedes Verstoßberichtobjekt und eine JSON-String-Version des Objekts, die dem untenstehenden Objekt ähnlich aussehen könnte.

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

Die Konfiguration einer Webseite, um einen Bericht über Intégritätsrichtlinienverstöße an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) zu senden, ist sehr ähnlich wie das vorherige Beispiel.

Der Hauptunterschied besteht darin, dass wir einen oder mehrere Reporting-Endpunkte angeben müssen, an die wir die Berichte senden möchten, indem wir den {{httpheader("Reporting-Endpoints")}}-Antwort-Header verwenden und diese dann im `endpoints`-Feld beim Festlegen der Richtlinie referenzieren.

Sie sehen dies unten, wo wir zuerst zwei Endpunkte definieren — `integrity-endpoint` und `backup-integrity-endpoint` — und sie dann in unserer Richtlinie referenzieren:

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Wir können einen Verstoß auslösen, indem wir ein externes Skript von der Seite laden, das nicht den Subresource-Integritätsrichtlinien entspricht.
Nur um sich vom vorherigen Beispiel zu unterscheiden, senden wir hier die Anfrage im `no-cors`-Modus:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"></script>
```

Der Verstoßbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet.
Wie Sie aus dem unten stehenden Beispiel sehen können, ist der `type` `"integrity-violation"` und die `body`-Eigenschaft ist eine Serialisierung dieses `IntegrityViolationReport`-Objekts:

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
- [Integritätsrichtlinie](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
