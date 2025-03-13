---
title: CSPViolationReportBody
slug: Web/API/CSPViolationReportBody
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

Das `CSPViolationReportBody`-Interface ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Inhalt eines Berichts über Verstöße gegen die Content Security Policy (CSP) darstellt.

CSP-Verstöße werden ausgelöst, wenn die Webseite versucht, eine Ressource zu laden, die gegen die durch den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header festgelegte Richtlinie verstößt.

CSP-Verstoßberichte werden im [reports](/de/docs/Web/API/ReportingObserver/ReportingObserver#reports)-Parameter von [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Rückrufen zurückgegeben, die einen `type` von `"csp-violation"` haben.
Die `body`-Eigenschaft dieser Berichte ist eine Instanz von `CSPViolationReportBody`.

CSP-Verstoßberichte können auch als JSON-Objekte an den im [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Richtlinienverweis des {{HTTPHeader("Content-Security-Policy")}} Headers angegebenen Endpunkt gesendet werden.
Diese Berichte haben ebenfalls einen `type` von `"csp-violation"` und eine `body`-Eigenschaft, die eine Serialisierung einer Instanz dieses Interfaces enthält.

> [!NOTE]
> Die von der Reporting API gesendeten CSP-Verstoßberichte, wenn ein Endpunkt mit der CSP [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Richtlinie angegeben wurde, sind ähnlich (aber nicht identisch) zu den "CSP report" [JSON-Objekten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax), die gesendet werden, wenn Endpunkte mit der [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri)-Richtlinie angegeben werden.
> Die Reporting API und die `report-to`-Richtlinie sollen das ältere Berichtsformat und die `report-uri`-Richtlinie ersetzen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elterninterface, [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.blockedURL`](/de/docs/Web/API/CSPViolationReportBody/blockedURL) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die entweder den Typ oder die URL der Ressource darstellt, die blockiert wurde, weil sie gegen die CSP verstößt.
- [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber) {{ReadOnlyInline}}
  - : Die Spaltennummer im Skript, an der der Verstoß aufgetreten ist.
- [`CSPViolationReportBody.disposition`](/de/docs/Web/API/CSPViolationReportBody/disposition) {{ReadOnlyInline}}
  - : Gibt an, wie die verletzte Richtlinie vom Benutzeragenten behandelt werden soll. Dies wird entweder `"enforce"` oder `"report"` sein.
- [`CSPViolationReportBody.documentURL`](/de/docs/Web/API/CSPViolationReportBody/documentURL) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die URL des Dokuments oder Workers darstellt, in dem der Verstoß gefunden wurde.
- [`CSPViolationReportBody.effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody/effectiveDirective) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Direktive darstellt, deren Durchsetzung den Verstoß aufdeckte.
- [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber) {{ReadOnlyInline}}
  - : Die Zeilennummer im Skript, an der der Verstoß aufgetreten ist.
- [`CSPViolationReportBody.originalPolicy`](/de/docs/Web/API/CSPViolationReportBody/originalPolicy) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Richtlinie enthält, deren Durchsetzung den Verstoß aufdeckte.
- [`CSPViolationReportBody.referrer`](/de/docs/Web/API/CSPViolationReportBody/referrer) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- [`CSPViolationReportBody.sample`](/de/docs/Web/API/CSPViolationReportBody/sample) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die ein Beispiel der Ressource darstellt, die den Verstoß verursachte, in der Regel die ersten 40 Zeichen. Dies wird nur ausgefüllt, wenn die Ressource ein eingebettetes Skript, ein Ereignishandler oder ein Stil ist — externe Ressourcen, die einen Verstoß verursachen, generieren kein Beispiel.
- [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile) {{ReadOnlyInline}}
  - : Wenn der Verstoß als Ergebnis eines Skripts aufgetreten ist, wird dies die URL des Skripts sein; andernfalls ist es `null`. Sowohl `columnNumber` als auch `lineNumber` sollten Nicht-Null-Werte haben, wenn diese Eigenschaft nicht `null` ist.
- [`CSPViolationReportBody.statusCode`](/de/docs/Web/API/CSPViolationReportBody/statusCode) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Workers darstellt, in dem der Verstoß aufgetreten ist.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elterninterface, [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.toJSON()`](/de/docs/Web/API/CSPViolationReportBody/toJSON)
  - : Ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody`-Objekts zurückgibt.

## Beispiele

### Erhalten eines `CSPViolationReportBody`-Objekts

Um ein `CSPViolationReportBody`-Objekt zu erhalten, müssen Sie Ihre Seite so konfigurieren, dass ein CSP-Verstoß auftritt.
In diesem Beispiel setzen wir unsere CSP so, dass nur Inhalte vom eigenen Ursprung der Seite erlaubt sind, und versuchen dann, ein Skript von `apis.google.com` zu laden, das einen externen Ursprung hat.

Zuerst setzen wir unseren {{HTTPHeader("Content-Security-Policy")}} Header in der HTTP-Antwort:

```http
Content-Security-Policy: default-src 'self';
```

oder im HTML [`<meta>`](/de/docs/Web/HTML/Element/meta)-Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
```

Dann versuchen wir, ein externes Skript zu laden:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Schließlich erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf CSP-Verstöße zu hören (dieses muss vom gleichen Ort geladen werden, vor dem Skript, das den Verstoß verursacht).

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

Oben protokollieren wir jedes Verstoßbericht-Objekt und eine JSON-String-Version des Objekts, die ähnlich wie das unten stehende Objekt aussehen könnte.
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

### Senden eines CSP-Verstoßberichts

Die Konfiguration einer Webseite zum Senden eines CSP-Verstoßberichts ist ähnlich wie im vorherigen Beispiel.
Wie zuvor müssen Sie Ihre Seite so konfigurieren, dass ein Verstoß vorliegt.

Zusätzlich müssen Sie auch die Endpunkte angeben, an die der Bericht gesendet wird.
Ein Server gibt Endpunkte mit der {{httpheader("Reporting-Endpoints")}} Antwort-Header an: Diese müssen sichere URLs (HTTPS) sein.
Die CSP {{CSP("report-to")}}-Richtlinie wird dann verwendet, um zu spezifizieren, dass ein bestimmter Endpunkt für die Meldung von CSP-Verstößen verwendet wird:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-report-to"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wie zuvor können wir einen Verstoß auslösen, indem wir ein externes Skript von einem Ort laden, der nicht durch unseren CSP-Header erlaubt ist:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Der Verstoßbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet.
Wie Sie im unten stehenden Beispiel sehen können, ist der `type` `"csp-violation"` und die `body`-Eigenschaft ist eine Serialisierung des `CSPViolationReportBody`-Objekts:

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
