---
title: CSPViolationReport
slug: Web/API/CSPViolationReport
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("Reporting API")}}

Das `CSPViolationReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen Bericht, der generiert wird, wenn ein Dokument gegen seine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstößt.

Berichte dieser Art können innerhalb einer Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serialisierte Version kann an [Reporting-Server-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanz-Eigenschaften

- `body`
  - : Der Körper des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - [`blockedURL`](/de/docs/Web/API/CSPViolationReport/blockedURL)
      - : Ein String, der entweder den Typ oder die URL der Ressource darstellt, die blockiert wurde, weil sie gegen die CSP verstößt.
    - [`columnNumber`](/de/docs/Web/API/CSPViolationReport/columnNumber)
      - : Die Zeichenposition in der Zeile des Skripts, an der der Verstoß auftrat.
    - [`disposition`](/de/docs/Web/API/CSPViolationReport/disposition)
      - : Ein String, der angibt, ob der Verstoß durchgesetzt oder nur berichtet wurde.
        Dies kann den Wert `"enforce"` für Verstöße gegen Richtlinien haben, die mit {{httpheader("Content-Security-Policy")}} gesetzt wurden, oder `"reporting"` für Richtlinien, die mit {{httpheader("Content-Security-Policy-Report-Only")}} gesetzt wurden.
    - [`documentURL`](/de/docs/Web/API/CSPViolationReport/documentURL)
      - : Ein String, der die URL des Dokuments oder Workers darstellt, in dem der Verstoß gefunden wurde.
    - [`effectiveDirective`](/de/docs/Web/API/CSPViolationReport/effectiveDirective)
      - : Ein String, der die Direktive darstellt, deren Durchsetzung den Verstoß aufgedeckt hat.
    - [`lineNumber`](/de/docs/Web/API/CSPViolationReport/lineNumber)
      - : Die Zeilennummer im Skript, an der der Verstoß auftrat.
    - [`originalPolicy`](/de/docs/Web/API/CSPViolationReport/originalPolicy)
      - : Ein String, der die Richtlinie enthält, deren Durchsetzung den Verstoß aufgedeckt hat.
    - [`referrer`](/de/docs/Web/API/CSPViolationReport/referrer)
      - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
    - [`sample`](/de/docs/Web/API/CSPViolationReport/sample)
      - : Ein String, der eine Probe der Ressource darstellt, die den Verstoß verursacht hat, normalerweise die ersten 40 Zeichen.
        Dies wird nur befüllt, wenn die Ressource ein Inline-Skript, ein Event-Handler oder ein Stil ist – externe Ressourcen, die einen Verstoß verursachen, erzeugen keine Probe.
    - [`sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile)
      - : Wenn der Verstoß durch ein Skript verursacht wurde, ist dies die URL des Skripts; andernfalls ist es `null`.
        Sowohl `columnNumber` als auch `lineNumber` sollten nicht-null Werte haben, wenn diese Eigenschaft nicht `null` ist.
    - [`statusCode`](/de/docs/Web/API/CSPViolationReport/statusCode)
      - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder des Workers darstellt, in dem der Verstoß auftrat.

- `type`
  - : Der String `"csp-violation"`, der anzeigt, dass dies ein CSP-Verstoßbericht ist.
- `url`
  - : Ein String, der die URL des Dokuments darstellt, das den Bericht generiert hat.

## Beschreibung

CSP-Verstoßberichte können erstellt werden, wenn eine Webseite versucht, eine Ressource zu laden, die gegen eine [CSP](/de/docs/Web/HTTP/Guides/CSP) verstößt, die mit den HTTP-Headern {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} gesetzt wird.

Sie können innerhalb der Seite, die die Richtlinie setzt, nach CSP-Verstoßberichten mit der [Reporting API](/de/docs/Web/API/Reporting_API) überwachen.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte zu überwachen, wobei eine Callback-Methode und eine (optionale) `options`-Eigenschaft übergeben werden, die die Berichtstypen spezifiziert, die Sie melden möchten.
Die Callback-Methode wird dann mit Berichten der angeforderten Typen aufgerufen und übergibt ein Bericht-Objekt.
Für CSP-Verstöße ist das Objekt eine `CSPViolationReport`-Instanz (die die Eigenschaft [`type`](#type) auf `"csp-violation"` gesetzt hat).

Die Struktur eines typischen Berichts ist unten dargestellt.
Beachten Sie, dass wir sowohl die URL der Seite sehen können, deren Richtlinie verletzt wurde (`url`), als auch das Dokument, das versucht hat, die Ressource zu laden (`body.documentURL`) und die Ressource, die vom Laden abgehalten wurde (`body.blockedURL`).
Wir können auch sehen, dass der Verstoß dadurch verursacht wurde, dass die Seite versucht hat, ein Script-Element mit einer Quelle von einem anderen Herkunftsort zu laden, was gegen die `body.originalPolicy` verstieß, und dass der Verstoß durchgesetzt wurde (und nicht nur berichtet).

```json
{
  "type": "csp-violation",
  "url": "https://url-of-page-enforcing-policy",
  "body": {
    "sourceFile": null,
    "lineNumber": null,
    "columnNumber": null,
    "documentURL": "https://url-of-document-attempting-to-load-resource-in-violation",
    "referrer": "",
    "blockedURL": "https://url-of-blocked-resource.js",
    "effectiveDirective": "script-src-elem",
    "originalPolicy": "default-src 'self';",
    "sample": "",
    "disposition": "enforce",
    "statusCode": 200
  }
}
```

Verstoßberichte können auch als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an einen oder mehrere konfigurierte [Reporting-Server-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.
Namen der Reporting-Server-Endpunkte werden in der [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Richtlinie des {{HTTPHeader("Content-Security-Policy")}}- oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Headers angegeben.
Gültige Endpunktnamen und deren Zuordnung zu einer bestimmten URL werden mit dem {{httpheader("Reporting-Endpoints")}}-Header definiert.

> [!NOTE]
> CSP-Verstoßberichte, die von der Reporting API gesendet werden, wenn ein Endpunkt über die CSP [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Richtlinie angegeben wird, sind ähnlich (aber nicht identisch) wie die "CSP-Berichte" [JSON-Objekte](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax), die gesendet werden, wenn Endpunkte über die [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri)-Richtlinie angegeben werden.
> Die Reporting API und die `report-to`-Richtlinie sollen das ältere Berichtsformat und die `report-uri`-Richtlinie ersetzen.

Die Struktur des Server-Berichts ist fast genau gleich wie die von `CSPViolationReport`, außer dass sie zusätzlich `age`- und `user_agent`-Felder enthält.

```json
{
  "age": "176279",
  "type": "csp-violation",
  "url": "https://url-of-page-enforcing-policy",
  "body": {
    "sourceFile": null,
    "lineNumber": null,
    "columnNumber": null,
    "documentURL": "https://url-of-document-attempting-to-load-resource-in-violation",
    "referrer": "",
    "blockedURL": "https://url-of-blocked-resource.js",
    "effectiveDirective": "script-src-elem",
    "originalPolicy": "default-src 'self';",
    "sample": "",
    "disposition": "enforce",
    "statusCode": 200
  },
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"
}
```

## Beispiele

### Verwendung des `ReportingObserver`-Interfaces

Sie können ein `CSPViolationReport`-Objekt abrufen, indem Sie Ihre Seite so konfigurieren, dass ein CSP-Verstoß auftritt.
In diesem Beispiel werden wir unsere CSP so einstellen, dass nur Inhalte vom eigenen Ursprung der Website erlaubt sind, und dann versuchen, ein Skript von `apis.google.com`, einem externen Ursprung, zu laden.

Zuerst werden wir unseren {{HTTPHeader("Content-Security-Policy")}}-Header in der HTTP-Antwort setzen:

```http
Content-Security-Policy: default-src 'self';
```

oder im HTML [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
```

Dann werden wir versuchen, ein externes Skript zu laden:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Schließlich werden wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt erstellen, um nach CSP-Verstößen zu lauschen (dies muss vom gleichen Ort aus geladen werden, bevor das Skript, das den Verstoß verursacht, geladen wird).

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    reports.forEach((violation) => {
      console.log(violation);
      console.log(JSON.stringify(violation));
    });
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Oben protokollieren wir jedes Verstoßberichtsobjekt und eine JSON-Zeichenketten-Version des Objekts, die ähnlich dem unten dargestellten Objekt aussehen könnte.
Beachten Sie, dass der Bericht eine Instanz von `CSPViolationReport` ist und der `type` `"csp-violation"` ist.

```json
{
  "type": "csp-violation",
  "url": "http://127.0.0.1:9999/",
  "body": {
    "sourceFile": null,
    "lineNumber": null,
    "columnNumber": null,
    "documentURL": "http://127.0.0.1:9999/",
    "referrer": "",
    "blockedURL": "https://apis.google.com/js/platform.js",
    "effectiveDirective": "script-src-elem",
    "originalPolicy": "default-src 'self';",
    "sample": "",
    "disposition": "enforce",
    "statusCode": 200
  }
}
```

### Senden eines CSP-Verstoßberichts

Das Konfigurieren einer Webseite zum Senden eines CSP-Verstoßberichts ist ähnlich dem vorherigen Beispiel.
Wie zuvor müssen Sie Ihre Seite so konfigurieren, dass ein Verstoß vorliegt.

Zusätzlich müssen Sie auch die Endpunkte angeben, an die der Bericht gesendet wird.
Ein Server gibt Endpunkte mit dem Antwortheader {{httpheader("Reporting-Endpoints")}} an: Diese müssen sichere URLs (HTTPS) sein.
Die CSP {{CSP("report-to")}}-Richtlinie wird dann verwendet, um zu spezifizieren, dass ein bestimmter Endpunkt für die Meldung von CSP-Verstößen verwendet wird:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-report-to"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wie zuvor können wir einen Verstoß auslösen, indem wir ein externes Skript von einem Ort laden, der durch unseren CSP-Header nicht erlaubt ist:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Der Verstoßbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet.
Wie Sie am untenstehenden Beispiel sehen können, ist der `type` `"csp-violation"` und die `body`-Eigenschaft ist eine Serialisierung des `CSPViolationReport`-Objekts:

```json
[
  {
    "age": 53531,
    "body": {
      "blockedURL": "inline",
      "columnNumber": 59,
      "disposition": "enforce",
      "documentURL": "https://example.com/csp-report-to",
      "effectiveDirective": "script-src-elem",
      "lineNumber": 1441,
      "originalPolicy": "default-src 'self'; report-to csp-endpoint",
      "referrer": "https://www.google.com/",
      "sample": "",
      "sourceFile": "https://example.com/csp-report-to",
      "statusCode": 200
    },
    "type": "csp-violation",
    "url": "https://example.com/csp-report-to",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
  }
]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/de/docs/Web/API/Reporting_API)
