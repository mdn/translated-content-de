---
title: CSPViolationReport
slug: Web/API/CSPViolationReport
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Das `CSPViolationReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) stellt einen Bericht dar, der erstellt wird, wenn ein Dokument seine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verletzt.

Diese Art von Berichten kann innerhalb einer Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serialisierte Version kann an [Reporting-Server-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanz-Eigenschaften

- `body`
  - : Der Hauptteil des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - [`blockedURL`](/de/docs/Web/API/CSPViolationReport/blockedURL)
      - : Ein String, der entweder den Typ oder die URL der Ressource darstellt, die gesperrt wurde, weil sie die CSP verletzt.
    - [`columnNumber`](/de/docs/Web/API/CSPViolationReport/columnNumber)
      - : Die Zeichenposition in der Zeile des Skripts, an der die Verletzung auftrat.
    - [`disposition`](/de/docs/Web/API/CSPViolationReport/disposition)
      - : Ein String, der angibt, ob die Verletzung durchgesetzt oder nur berichtet wurde.
        Dies kann den Wert `"enforce"` für Verletzungen von mit {{httpheader("Content-Security-Policy")}} festgelegten Richtlinien haben oder `"reporting"` für mit {{httpheader("Content-Security-Policy-Report-Only")}} festgelegte Richtlinien.
    - [`documentURL`](/de/docs/Web/API/CSPViolationReport/documentURL)
      - : Ein String, der die URL des Dokuments oder Worker's darstellt, in dem die Verletzung gefunden wurde.
    - [`effectiveDirective`](/de/docs/Web/API/CSPViolationReport/effectiveDirective)
      - : Ein String, der die Direktive darstellt, deren Durchsetzung die Verletzung aufdeckte.
    - [`lineNumber`](/de/docs/Web/API/CSPViolationReport/lineNumber)
      - : Die Zeilennummer im Skript, an der die Verletzung auftrat.
    - [`originalPolicy`](/de/docs/Web/API/CSPViolationReport/originalPolicy)
      - : Ein String, der die Richtlinie enthält, deren Durchsetzung die Verletzung aufdeckte.
    - [`referrer`](/de/docs/Web/API/CSPViolationReport/referrer)
      - : Ein String, der die URL für den Referer der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
    - [`sample`](/de/docs/Web/API/CSPViolationReport/sample)
      - : Ein String, der eine Probe der Ressource darstellt, die die Verletzung verursacht hat, normalerweise die ersten 40 Zeichen.
        Dies wird nur gefüllt, wenn die Ressource ein Inline-Skript, ein Event-Handler oder ein Stil ist — externe Ressourcen, die eine Verletzung verursachen, erzeugen keine Probe.
    - [`sourceFile`](/de/docs/Web/API/CSPViolationReport/sourceFile)
      - : Wenn die Verletzung durch ein Skript verursacht wurde, ist dies die URL des Skripts; andernfalls ist es `null`.
        Sowohl `columnNumber` als auch `lineNumber` sollten Nicht-Null-Werte haben, wenn diese Eigenschaft nicht `null` ist.
    - [`statusCode`](/de/docs/Web/API/CSPViolationReport/statusCode)
      - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Worker's darstellt, in dem die Verletzung auftrat.

- `type`
  - : Der String `"csp-violation"`, der angibt, dass es sich um einen CSP-Verletzungsbericht handelt.
- `url`
  - : Ein String, der die URL des Dokuments darstellt, das den Bericht generiert hat.

## Beschreibung

CSP-Verletzungsberichte können erstellt werden, wenn eine Webseite versucht, eine Ressource zu laden, die eine [CSP](/de/docs/Web/HTTP/Guides/CSP) verletzt, die mithilfe der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} oder {{HTTPHeader("Content-Security-Policy-Report-Only")}} festgelegt wurde.

Sie können innerhalb der Seite, die die Richtlinie setzt, nach CSP-Verletzungsberichten mit der [Reporting API](/de/docs/Web/API/Reporting_API) überwachen.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte zu hören, indem Sie eine Callback-Methode und (optional) eine `options`-Eigenschaft angeben, die die Arten von Berichten spezifiziert, über die Sie berichten möchten.
Die Callback-Methode wird dann mit Berichten der angeforderten Typen aufgerufen, und ein Berichtobjekt wird übergeben.
Bei CSP-Verletzungen wird das Objekt eine `CSPViolationReport`-Instanz sein (das die [`type`](#type)-Eigenschaft auf `"csp-violation"` gesetzt hat).

Der Aufbau eines typischen Berichts wird unten gezeigt.
Es ist zu beachten, dass wir die URL sowohl der Seite sehen können, deren Richtlinie verletzt wurde (`url`), als auch des Dokuments, das versuchte, die Ressource zu laden (`body.documentURL`) und der Ressource, deren Laden blockiert wurde (`body.blockedURL`).
Wir können auch sehen, dass die Verletzung durch den Versuch der Seite, ein Skriptelement mit einer Quelle von einem anderen Ursprung zu laden, verursacht wurde, was die `body.originalPolicy` verletzte, und dass die Verletzung durchgesetzt wurde (und nicht nur berichtet).

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

Verletzungsberichte können auch als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an einen oder mehrere konfigurierte [Reporting-Server-Endpunkte](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.
Reporting-Server-Endpunktnamen werden in der [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Richtlinie des {{HTTPHeader("Content-Security-Policy")}}- oder {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Headers angegeben.
Gültige Endpunktnamen und deren Zuordnung zu einer bestimmten URL werden über den {{httpheader("Reporting-Endpoints")}}-Header definiert.

> [!NOTE]
> CSP-Verletzungsberichte, die von der Reporting API gesendet werden, wenn ein Endpunkt mit der CSP- [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Richtlinie angegeben ist, sind ähnlich (aber nicht identisch) mit den "CSP-Bericht"-[JSON-Objekten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax), die gesendet werden, wenn Endpunkte mit der [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri)-Richtlinie angegeben sind.
> Die Reporting API und die `report-to`-Richtlinie sollen das ältere Berichtsformat und die `report-uri`-Richtlinie ersetzen.

Der Aufbau des Server-Berichts ist fast genauso wie der von `CSPViolationReport`, außer dass er zusätzlich `age`- und `user_agent`-Felder enthält.

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

### Verwenden der `ReportingObserver`-Schnittstelle

Sie können ein `CSPViolationReport`-Objekt erhalten, indem Sie Ihre Seite so konfigurieren, dass eine CSP-Verletzung auftritt.
In diesem Beispiel setzen wir unsere CSP so, dass nur Inhalte vom eigenen Ursprung der Site erlaubt sind, und versuchen dann, ein Skript von `apis.google.com` zu laden, das ein externer Ursprung ist.

Zuerst setzen wir unseren {{HTTPHeader("Content-Security-Policy")}}-Header in der HTTP-Antwort:

```http
Content-Security-Policy: default-src 'self';
```

oder im HTML- [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
```

Dann versuchen wir, ein externes Skript zu laden:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Schließlich erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um nach CSP-Verletzungen zu hören (dies muss von derselben Stelle geladen werden, bevor das Skript geladen wird, das die Verletzung verursacht).

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

Oben protokollieren wir jedes Verletzungsbericht-Objekt und eine JSON-String-Version des Objekts, die dem unten gezeigten Objekt ähnlich sehen könnte.
Es ist zu beachten, dass der Bericht eine Instanz von `CSPViolationReport` ist und der `type` `"csp-violation"` ist.

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

### Senden eines CSP-Verletzungsberichts

Das Konfigurieren einer Webseite zum Senden eines CSP-Verletzungsberichts ist ähnlich wie das vorherige Beispiel.
Wie zuvor müssen Sie Ihre Seite so konfigurieren, dass eine Verletzung vorliegt.

Zusätzlich müssen Sie auch die Endpunkte angeben, an die der Bericht gesendet wird.
Ein Server gibt Endpunkte mithilfe des {{httpheader("Reporting-Endpoints")}}-Antwort-Headers an: Diese müssen sichere URLs (HTTPS) sein.
Die CSP-{{CSP("report-to")}}-Richtlinie wird dann verwendet, um anzugeben, dass ein bestimmter Endpunkt für die Meldung von CSP-Verletzungen verwendet wird:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-report-to"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wie zuvor können wir eine Verletzung auslösen, indem wir ein externes Skript von einem Standort laden, der durch unseren CSP-Header nicht erlaubt ist:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Der Verletzungsbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet.
Wie Sie im unten gezeigten Beispiel sehen können, ist der `type` `"csp-violation"` und die `body`-Eigenschaft ist eine Serialisierung des `CSPViolationReport`-Objekts:

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
