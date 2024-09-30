---
title: CSPViolationReportBody
slug: Web/API/CSPViolationReportBody
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

Das `CSPViolationReportBody`-Interface ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Körper eines Berichts über eine Verletzung der Content Security Policy (CSP) darstellt.

CSP-Verletzungen treten auf, wenn die Webseite versucht, eine Ressource zu laden, die die durch den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header festgelegte Richtlinie verletzt.

CSP-Verletzungsberichte werden im [reports](/de/docs/Web/API/ReportingObserver/ReportingObserver#reports)-Parameter von [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Rückrufen zurückgegeben, die einen `type` von `"csp-violation"` haben.
Die `body`-Eigenschaft dieser Berichte ist eine Instanz von `CSPViolationReportBody`.

CSP-Verletzungsberichte können außerdem als JSON-Objekte an das im [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to)-Richtliniendirektive des {{HTTPHeader("Content-Security-Policy")}} Headers angegebene Endpunkt gesendet werden.
Diese Berichte haben ebenfalls einen `type` von `"csp-violation"` und eine `body`-Eigenschaft, die eine Serialisierung einer Instanz dieses Interfaces enthält.

> [!NOTE]
> CSP-Verletzungsberichte, die von der Reporting API gesendet werden, wenn ein Endpunkt mit der CSP-Richtlinie [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) angegeben ist, sind ähnlich (aber nicht identisch) mit den "CSP-Berichts"-[JSON-Objekten](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax), die gesendet werden, wenn Endpunkte mit der [`report-uri`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri)-Richtlinie angegeben sind.
> Die Reporting API und die `report-to`-Richtlinie sollen das ältere Berichtsformat und die `report-uri`-Richtlinie ersetzen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.blockedURL`](/de/docs/Web/API/CSPViolationReportBody/blockedURL) {{ReadOnlyInline}}
  - : Ein String, der entweder den Typ oder die URL der Ressource darstellt, die blockiert wurde, weil sie die CSP verletzt.
- [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber) {{ReadOnlyInline}}
  - : Die Spaltennummer im Skript, bei der die Verletzung auftrat.
- [`CSPViolationReportBody.disposition`](/de/docs/Web/API/CSPViolationReportBody/disposition) {{ReadOnlyInline}}
  - : Gibt an, wie die verletzte Richtlinie vom Benutzeragenten behandelt werden soll. Dies wird entweder `"enforce"` oder `"report"` sein.
- [`CSPViolationReportBody.documentURL`](/de/docs/Web/API/CSPViolationReportBody/documentURL) {{ReadOnlyInline}}
  - : Ein String, der die URL des Dokuments oder Arbeiters darstellt, in dem die Verletzung festgestellt wurde.
- [`CSPViolationReportBody.effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody/effectiveDirective) {{ReadOnlyInline}}
  - : Ein String, der die Direktive darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.
- [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber) {{ReadOnlyInline}}
  - : Die Zeilennummer im Skript, bei der die Verletzung auftrat.
- [`CSPViolationReportBody.originalPolicy`](/de/docs/Web/API/CSPViolationReportBody/originalPolicy) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung die Verletzung aufgedeckt hat.
- [`CSPViolationReportBody.referrer`](/de/docs/Web/API/CSPViolationReportBody/referrer) {{ReadOnlyInline}}
  - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- [`CSPViolationReportBody.sample`](/de/docs/Web/API/CSPViolationReportBody/sample) {{ReadOnlyInline}}
  - : Ein String, der eine Probe der Ressource darstellt, die die Verletzung verursacht hat, üblicherweise die ersten 40 Zeichen. Dies wird nur gefüllt, wenn die Ressource ein Inline-Skript, ein Ereignishandler oder eine Style-Deklaration ist – externe Ressourcen, die eine Verletzung verursachen, generieren keine Probe.
- [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile) {{ReadOnlyInline}}
  - : Wenn die Verletzung aufgrund eines Skripts aufgetreten ist, ist dies die URL des Skripts; andernfalls ist es `null`. Sowohl `columnNumber` als auch `lineNumber` sollten Nicht-Null-Werte haben, wenn diese Eigenschaft nicht `null` ist.
- [`CSPViolationReportBody.statusCode`](/de/docs/Web/API/CSPViolationReportBody/statusCode) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Arbeiters darstellt, in dem die Verletzung aufgetreten ist.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.toJSON()`](/de/docs/Web/API/CSPViolationReportBody/toJSON)
  - : Ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody`-Objekts zurückgibt.

## Beispiele

### Erhalten eines `CSPViolationReportBody`-Objekts

Um ein `CSPViolationReportBody`-Objekt zu erhalten, müssen Sie Ihre Seite so konfigurieren, dass eine CSP-Verletzung auftritt.
In diesem Beispiel setzen wir unsere CSP so, dass nur Inhalte vom eigenen Ursprung der Seite erlaubt sind, und versuchen dann, ein Skript von `apis.google.com` zu laden, das ein externer Ursprung ist.

Zunächst setzen wir unseren {{HTTPHeader("Content-Security-Policy")}} Header in der HTTP-Antwort:

```http
Content-Security-Policy: default-src 'self';
```

oder im HTML-`<meta>`-Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
```

Dann versuchen wir, ein externes Skript zu laden:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Abschließend erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf CSP-Verletzungen zu achten (dies muss vom selben Ort geladen werden, bevor das Skript geladen wird, das die Verletzung verursacht).

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

Oben protokollieren wir jedes Verletzungsberichtobjekt und eine JSON-String-Version des Objekts, die dem unten stehenden Objekt ähnlich sein könnte.
Beachten Sie, dass das `body` eine Instanz des `CSPViolationReportBody` ist und der `type` `"csp-violation"` ist.

```js
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

Das Konfigurieren einer Webseite zum Senden eines CSP-Verletzungsberichts ähnelt dem vorherigen Beispiel.
Wie zuvor müssen Sie Ihre Seite so konfigurieren, dass eine Verletzung vorliegt.

Darüber hinaus müssen Sie auch die Endpunkte angeben, an die der Bericht gesendet wird.
Ein Server gibt Endpunkte mithilfe des {{httpheader("Reporting-Endpoints")}} Antwort-Headers an: Diese müssen sichere URLs (HTTPS) sein.
Die CSP-{{CSP("report-to")}}-Richtlinie wird dann verwendet, um anzugeben, dass ein bestimmter Endpunkt für die Berichterstattung von CSP-Verletzungen verwendet wird:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-report-to"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wie zuvor können wir eine Verletzung auslösen, indem wir ein externes Skript von einem Ort laden, der nicht durch unseren CSP-Header erlaubt ist:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Der Verletzungsbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet.
Wie im folgenden Beispiel zu sehen ist, ist der `type` `"csp-violation"` und die `body`-Eigenschaft ist eine Serialisierung des `CSPViolationReportBody`-Objekts:

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

- [`ReportBody`](/de/docs/Web/API/ReportBody)
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- {{HTTPHeader("Content-Security-Policy")}}
- [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)
