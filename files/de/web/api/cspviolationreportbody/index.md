---
title: CSPViolationReportBody
slug: Web/API/CSPViolationReportBody
l10n:
  sourceCommit: 3b1efe57f3b22a97acb9db335f2848c90cdfe40e
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

Das `CSPViolationReportBody` Interface ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Körper eines Content Security Policy (CSP) Verstoßberichts darstellt.

CSP-Verstöße werden ausgelöst, wenn die Webseite versucht, eine Ressource zu laden, die gegen die durch den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header festgelegte Richtlinie verstößt.

CSP-Verstoßberichte werden im [reports](/de/docs/Web/API/ReportingObserver/ReportingObserver#reports) Parameter von [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Rückrufen zurückgegeben, die einen `type` von `"csp-violation"` haben.
Die `body`-Eigenschaft dieser Berichte ist eine Instanz von `CSPViolationReportBody`.

CSP-Verstoßberichte können auch als JSON-Objekte an den in der [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) Richtliniendirektive des {{HTTPHeader("Content-Security-Policy")}} Headers angegebenen Endpunkt gesendet werden.
Diese Berichte haben ebenfalls einen `type` von `"csp-violation"` und eine `body`-Eigenschaft, die eine Serialisierung einer Instanz dieses Interface enthält.

> [!NOTE]
> CSP-Verstoßberichte, die von der Reporting API gesendet werden, wenn ein Endpunkt mithilfe der CSP [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) Direktive angegeben wird, sind ähnlich (aber nicht identisch) zu den "CSP-Bericht" [JSON-Objekten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax), die gesendet werden, wenn Endpunkte mithilfe der [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) Direktive angegeben werden.
> Die Reporting API und die `report-to` Direktive sollen das ältere Berichtsformat und die `report-uri` Direktive ersetzen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.blockedURL`](/de/docs/Web/API/CSPViolationReportBody/blockedURL) {{ReadOnlyInline}}
  - : Ein String, der entweder den Typ oder die URL der Ressource darstellt, die gesperrt wurde, weil sie gegen die CSP verstößt.
- [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber) {{ReadOnlyInline}}
  - : Die Spaltennummer im Skript, bei der der Verstoß aufgetreten ist.
- [`CSPViolationReportBody.disposition`](/de/docs/Web/API/CSPViolationReportBody/disposition) {{ReadOnlyInline}}
  - : Gibt an, wie die verletzte Richtlinie vom User-Agent behandelt werden soll. Dies kann `"enforce"` oder `"report"` sein.
- [`CSPViolationReportBody.documentURL`](/de/docs/Web/API/CSPViolationReportBody/documentURL) {{ReadOnlyInline}}
  - : Ein String, der die URL des Dokuments oder Workers darstellt, in dem der Verstoß gefunden wurde.
- [`CSPViolationReportBody.effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody/effectiveDirective) {{ReadOnlyInline}}
  - : Ein String, der die Direktive darstellt, deren Durchsetzung den Verstoß aufgedeckt hat.
- [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber) {{ReadOnlyInline}}
  - : Die Zeilennummer im Skript, bei der der Verstoß aufgetreten ist.
- [`CSPViolationReportBody.originalPolicy`](/de/docs/Web/API/CSPViolationReportBody/originalPolicy) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung den Verstoß aufgedeckt hat.
- [`CSPViolationReportBody.referrer`](/de/docs/Web/API/CSPViolationReportBody/referrer) {{ReadOnlyInline}}
  - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- [`CSPViolationReportBody.sample`](/de/docs/Web/API/CSPViolationReportBody/sample) {{ReadOnlyInline}}
  - : Ein String, der eine Probe der Ressource darstellt, die den Verstoß verursacht hat, normalerweise die ersten 40 Zeichen. Dies wird nur befüllt, wenn die Ressource ein Inline-Skript, Event-Handler oder Style ist – externe Ressourcen, die einen Verstoß verursachen, erzeugen keine Probe.
- [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile) {{ReadOnlyInline}}
  - : Wenn der Verstoß durch ein Skript verursacht wurde, wird dies die URL des Skripts sein; andernfalls wird es `null` sein. Sowohl `columnNumber` als auch `lineNumber` sollten nicht-null Werte haben, wenn diese Eigenschaft nicht `null` ist.
- [`CSPViolationReportBody.statusCode`](/de/docs/Web/API/CSPViolationReportBody/statusCode) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Workers darstellt, in dem der Verstoß aufgetreten ist.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.toJSON()`](/de/docs/Web/API/CSPViolationReportBody/toJSON) {{deprecated_inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody` Objekts zurückgibt.

## Beispiele

### Ein `CSPViolationReportBody` Objekt erhalten

Um ein `CSPViolationReportBody` Objekt zu erhalten, müssen Sie Ihre Seite so konfigurieren, dass ein CSP-Verstoß auftritt.
In diesem Beispiel werden wir unsere CSP so einstellen, dass nur Inhalte vom eigenen Ursprung der Seite erlaubt sind, und dann versuchen, ein Skript von `apis.google.com` zu laden, das ein externer Ursprung ist.

Zuerst setzen wir den {{HTTPHeader("Content-Security-Policy")}} Header in der HTTP-Antwort:

```http
Content-Security-Policy: default-src 'self';
```

oder im HTML [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta) Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
```

Dann versuchen wir, ein externes Skript zu laden:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Schließlich erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objekt, um auf CSP-Verstöße zu lauschen (dies muss vom gleichen Ort geladen werden, bevor das Skript, das den Verstoß verursacht).

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

Oben protokollieren wir jedes Verstoßberichtobjekt und eine JSON-String-Version des Objekts, die dem untenstehenden Objekt ähnlich sehen könnte.
Beachten Sie, dass `body` eine Instanz des `CSPViolationReportBody` ist und `type` `"csp-violation"` ist.

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

### Einen CSP-Verstoßbericht senden

Das Konfigurieren einer Webseite zum Senden eines CSP-Verstoßberichts ist ähnlich wie das vorherige Beispiel.
Wie zuvor müssen Sie Ihre Seite so konfigurieren, dass ein Verstoß auftritt.

Zusätzlich müssen Sie auch die Endpunkte angeben, an die der Bericht gesendet wird.
Ein Server gibt Endpunkte mithilfe des {{httpheader("Reporting-Endpoints")}} Antwort-Headers an: diese müssen sichere URLs (HTTPS) sein.
Die CSP {{CSP("report-to")}} Direktive wird dann verwendet, um anzugeben, dass ein bestimmter Endpunkt für das Melden von CSP-Verstößen verwendet wird:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-report-to"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wie zuvor können wir einen Verstoß auslösen, indem wir ein externes Skript von einem Ort laden, der von unserem CSP-Header nicht erlaubt ist:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Der Verstoßbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet.
Wie Sie dem unten stehenden Beispiel entnehmen können, ist `type` `"csp-violation"` und die `body` Eigenschaft ist eine Serialisierung des `CSPViolationReportBody` Objekts:

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
