---
title: IntegrityViolationReport
slug: Web/API/IntegrityViolationReport
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Das `IntegrityViolationReport`-Wörterbuch des [Reporting API](/de/docs/Web/API/Reporting_API) stellt einen Bericht dar, der erstellt wird, wenn ein Dokument gegen seine [Integrity Policy](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy) verstößt.

Berichte dieser Art können innerhalb einer Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serielle Version kann an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanz-Eigenschaften

- `body`
  - : Der Inhalt des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `blockedURL`
      - : Ein String, der die URL der Ressource darstellt, die durch eine durchgesetzte Integritätsrichtlinie blockiert wurde (oder nur für eine [`reportOnly`](#reportonly) Richtlinie gemeldet wurde).
    - `documentURL`
      - : Ein String, der die URL des Dokuments darstellt, das versucht, die Ressource zu laden.
    - `destination`
      - : Ein String, der das [`Request.destination`](/de/docs/Web/API/Request/destination#script) der Ressource angibt, die blockiert wurde.
        Dies kann derzeit nur `"script"` sein.
    - `reportOnly`
      - : Ein Boolescher Wert: `false`, wenn die Richtlinie durchgesetzt wurde, und `true`, wenn der Verstoß nur gemeldet wurde.
        Die Werte zeigen an, dass die Richtlinie mit {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} gesetzt wurde.

- `type`
  - : Der String `"integrity-violation"`, der anzeigt, dass dies ein Bericht über eine Verletzung der Integrität ist.
- `url`
  - : Ein String, der die URL des Dokuments darstellt, das den Bericht generiert hat.

## Beschreibung

Verstöße gegen die Integritätsrichtlinie werden gemeldet, wenn ein Dokument versucht, eine Ressource zu laden, die nicht den [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Garantien einer Richtlinie entspricht, die entweder mit den HTTP-Headern {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} festgelegt wurde.

Insbesondere wird ein Bericht gesendet, wenn ein Dokument versucht, eine {{htmlelement("script")}}-Ressource (oder ein anderes im [request destination](/de/docs/Web/API/Request/destination) der Richtlinie gelistetes Ziel) zu laden, das keine gültigen Integritätsmetadaten hat, oder eine Anfrage im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus zu stellen.

Sie können innerhalb der Seite, die die Richtlinie festlegt, über das [Reporting API](/de/docs/Web/API/Reporting_API) auf Berichte über Verstöße gegen die Integrität überwachen.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte zu lauschen, indem Sie eine Rückrufmethode und eine (optionale) `options`-Eigenschaft übergeben, die die Berichtsarten angibt, über die Sie berichten möchten.
Die Rückrufmethode wird dann mit Berichten der angeforderten Typen aufgerufen und übergibt ein Berichtobjekt.
Für Integritätsverstöße wird das Objekt eine `IntegrityViolationReport`-Instanz sein (die die [`type`](#type)-Eigenschaft auf `"integrity-violation"` gesetzt hat).

Die Struktur eines typischen Berichts ist unten gezeigt.
Beachten Sie, dass wir die URL sowohl der Seite, bei der die Richtlinie verletzt wurde (`url`), als auch des Dokuments, das versucht hat, die Ressource zu laden (`body.documentURL`), und die Ressource, die am Laden gehindert wurde (`body.blockedURL`), sehen können.
Wir können auch erkennen, dass der Bericht aufgrund des Ladens eines Skripts entstanden ist und dass er durch einen erzwingenden (nicht nur gemeldeten) Verstoß ausgelöst wurde.

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
Die Namen der Reporting-Server-Endpunkte werden in der [`endpoints`-Liste](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) angegeben, wenn {{httpheader("Integrity-Policy")}} oder {{httpheader("Integrity-Policy-Report-Only")}} gesetzt werden.
Gültige Endpunktnamen und deren Zuordnung zu einer bestimmten URL werden mit dem {{httpheader("Reporting-Endpoints")}}-Header definiert.

Die Struktur des Serverberichts ist fast genau die gleiche wie `IntegrityViolationReport`, jedoch umfasst sie zusätzlich die Felder `age` und `user_agent`.

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

Dieses Beispiel zeigt, wie Sie Berichte über Verstöße gegen die Integritätsrichtlinie mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) erhalten können.

Zuerst setzen wir die Integritätsrichtlinie einer Seite mit dem {{httpheader("Integrity-Policy")}}.
Die Richtlinie unten meldet und blockiert das Laden von Ressourcen eines jeden {{htmlelement("script")}}-Elements oder [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Objekts, das kein `integrity`-Attribut angibt, oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.
Beachten Sie, dass wir in diesem Beispiel nur daran interessiert sind, die Verstöße über die API zu melden, und daher die Reporting-Endpunkte weggelassen haben:

```http
Integrity-Policy: blocked-destinations=(script)
```

Als Nächstes gehen wir davon aus, dass unsere Seite das folgende Element enthält, um ein Skript zu laden.
Um einen Verstoß auszulösen, lassen wir das `integrity`-Attribut weg, das verwendet wird, um zu überprüfen, ob das Skript unserer erwarteten Version entspricht.
Wir könnten auch das `cross-origin`-Attribut weglassen, sodass die Anfrage im `no-cors`-Modus gesendet wird.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> Ein Skript, das der Richtlinie entspricht, könnte folgendermaßen aussehen:
>
> ```html
> <script
>   src="https://example.com/example-framework.js"
>   integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
>   crossorigin="anonymous"></script>
> ```

Um Verstöße innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte mit dem Typ `"integrity-violation"` zu lauschen, und übergeben einen Rückruf, der die Berichte empfängt und protokolliert.
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

Oben protokollieren wir jedes Verstoßberichtobjekt und eine JSON-String-Version des Objekts, die ähnlich aussehen könnte wie das Objekt unten.

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

Die Konfiguration einer Webseite, um einen Bericht über Verstöße gegen die Integritätsrichtlinie an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) zu senden, ist dem vorherigen Beispiel sehr ähnlich.

Der Hauptunterschied besteht darin, dass wir einen oder mehrere Reporting-Endpunkte angeben müssen, an die wir die Berichte senden möchten, indem wir den {{httpheader("Reporting-Endpoints")}}-Antwortheader verwenden und diese dann im `endpoints`-Feld referenzieren, wenn die Richtlinie gesetzt wird.

Sie können dies unten sehen, wo wir zuerst zwei Endpunkte definieren — `integrity-endpoint` und `backup-integrity-endpoint` — und diese dann in unserer Richtlinie referenzieren:

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Wir können einen Verstoß auslösen, indem wir ein externes Skript von der Seite laden, das nicht den Richtlinien zur Subresource-Integrität entspricht.
Um uns vom vorherigen Beispiel etwas zu unterscheiden, senden wir hier die Anfrage im `no-cors`-Modus:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"></script>
```

Der Verstoßbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet.
Wie Sie aus dem untenstehenden Beispiel sehen können, ist der `type` `"integrity-violation"` und die `body`-Eigenschaft ist eine Serialisierung dieses `IntegrityViolationReport`-Objekts:

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
- [Integrity Policy](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
