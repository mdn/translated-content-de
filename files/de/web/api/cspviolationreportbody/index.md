---
title: CSPViolationReportBody
slug: Web/API/CSPViolationReportBody
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

Das Interface `CSPViolationReportBody` ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Hauptteil eines Berichts über eine Verletzung der Content Security Policy (CSP) darstellt.

CSP-Verletzungen werden ausgelöst, wenn die Webseite versucht, eine Ressource zu laden, die gegen die durch den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header festgelegte Richtlinie verstößt.

Berichte über CSP-Verletzungen werden im [reports](/de/docs/Web/API/ReportingObserver/ReportingObserver#reports)-Parameter von [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Rückrufen zurückgegeben, die einen `type` von `"csp-violation"` haben. Die `body`-Eigenschaft dieser Berichte ist eine Instanz von `CSPViolationReportBody`.

Berichte über CSP-Verletzungen können auch als JSON-Objekte an den Endpunkt gesendet werden, der in der [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Richtlinie des {{HTTPHeader("Content-Security-Policy")}} Headers angegeben ist. Diese Berichte haben ebenfalls einen `type` von `"csp-violation"` und eine `body`-Eigenschaft, die eine Serialisierung einer Instanz dieses Interfaces enthält.

> [!NOTE]
> Berichte über CSP-Verletzungen, die von der Reporting API gesendet werden, wenn ein Endpunkt mit der CSP [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to)-Richtlinie angegeben ist, ähneln (aber sind nicht identisch mit) den "CSP-Bericht"-[JSON-Objekten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax), die gesendet werden, wenn Endpunkte mit der [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri)-Richtlinie angegeben sind. Die Reporting API und die `report-to`-Richtlinie sollen das ältere Berichtsformat und die `report-uri`-Richtlinie ersetzen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.blockedURL`](/de/docs/Web/API/CSPViolationReportBody/blockedURL) {{ReadOnlyInline}}
  - : Ein String, der entweder den Typ oder die URL der Ressource darstellt, die blockiert wurde, weil sie gegen die CSP verstößt.
- [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber) {{ReadOnlyInline}}
  - : Die Spaltennummer im Skript, an der der Verstoß aufgetreten ist.
- [`CSPViolationReportBody.disposition`](/de/docs/Web/API/CSPViolationReportBody/disposition) {{ReadOnlyInline}}
  - : Gibt an, wie die verletzte Richtlinie von der Benutzerumgebung behandelt werden soll. Dies wird entweder `"enforce"` oder `"report"` sein.
- [`CSPViolationReportBody.documentURL`](/de/docs/Web/API/CSPViolationReportBody/documentURL) {{ReadOnlyInline}}
  - : Ein String, der die URL des Dokuments oder der Arbeitsumgebung darstellt, in der der Verstoß festgestellt wurde.
- [`CSPViolationReportBody.effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody/effectiveDirective) {{ReadOnlyInline}}
  - : Ein String, der die Direktive darstellt, deren Durchsetzung den Verstoß aufgedeckt hat.
- [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber) {{ReadOnlyInline}}
  - : Die Zeilennummer im Skript, an der der Verstoß aufgetreten ist.
- [`CSPViolationReportBody.originalPolicy`](/de/docs/Web/API/CSPViolationReportBody/originalPolicy) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung den Verstoß aufgedeckt hat.
- [`CSPViolationReportBody.referrer`](/de/docs/Web/API/CSPViolationReportBody/referrer) {{ReadOnlyInline}}
  - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- [`CSPViolationReportBody.sample`](/de/docs/Web/API/CSPViolationReportBody/sample) {{ReadOnlyInline}}
  - : Ein String, der ein Beispiel der Ressource darstellt, die den Verstoß verursacht hat, normalerweise die ersten 40 Zeichen. Dies wird nur befüllt, wenn die Ressource ein eingebettetes Skript, ein Ereignishandler oder ein Style ist – externe Ressourcen, die einen Verstoß verursachen, erzeugen kein Beispiel.
- [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile) {{ReadOnlyInline}}
  - : Wenn der Verstoß aufgrund eines Skripts aufgetreten ist, wird dies die URL des Skripts sein; andernfalls wird es `null` sein. Sowohl `columnNumber` als auch `lineNumber` sollten nicht-null sein, wenn diese Eigenschaft nicht `null` ist.
- [`CSPViolationReportBody.statusCode`](/de/docs/Web/API/CSPViolationReportBody/statusCode) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder der Arbeitsumgebung darstellt, in dem der Verstoß aufgetreten ist.

## Instanzmethoden

_Erbt auch Methoden von seinem Eltern-Interface [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.toJSON()`](/de/docs/Web/API/CSPViolationReportBody/toJSON)
  - : Ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody`-Objekts zurückgibt.

## Beispiele

### Ein `CSPViolationReportBody`-Objekt erhalten

Um ein `CSPViolationReportBody`-Objekt zu erhalten, müssen Sie Ihre Seite so konfigurieren, dass ein CSP-Verstoß auftritt. In diesem Beispiel setzen wir unsere CSP so, dass nur Inhalte von der eigenen Herkunft der Seite erlaubt sind, und versuchen dann, ein Skript von `apis.google.com` zu laden, das aus einer externen Quelle stammt.

Zuerst setzen wir unseren {{HTTPHeader("Content-Security-Policy")}} Header in der HTTP-Antwort:

```http
Content-Security-Policy: default-src 'self';
```

oder im HTML-[`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
```

Dann versuchen wir, ein externes Skript zu laden:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Schließlich erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf CSP-Verstöße zu lauschen (dies muss am selben Ort geladen werden, vor dem Skript, das den Verstoß verursacht).

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

Oben protokollieren wir jedes Berichtsobjekt über Verstöße und eine JSON-String-Version des Objekts, die möglicherweise ähnlich aussieht wie das untenstehende Objekt. Beachten Sie, dass `body` eine Instanz von `CSPViolationReportBody` ist und der `type` `"csp-violation"` ist.

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

Das Konfigurieren einer Webseite, um einen Bericht über einen CSP-Verstoß zu senden, ist ähnlich wie im vorherigen Beispiel. Wie zuvor müssen Sie Ihre Seite so konfigurieren, dass ein Verstoß vorliegt.

Zusätzlich müssen Sie auch die Endpunkte angeben, an die der Bericht gesendet wird. Ein Server gibt Endpunkte unter Verwendung des {{httpheader("Reporting-Endpoints")}}-Antwort-Headers an: Diese müssen sichere URLs (HTTPS) sein. Die CSP {{CSP("report-to")}}-Richtlinie wird dann verwendet, um anzugeben, dass ein bestimmter Endpunkt für die Meldung von CSP-Verstößen verwendet wird:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-report-to"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wie zuvor können wir einen Verstoß auslösen, indem wir ein externes Skript von einem Ort laden, der in unserem CSP-Header nicht erlaubt ist:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Der Verstoßbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet. Wie Sie aus dem folgenden Beispiel sehen können, ist der `type` `"csp-violation"` und die `body`-Eigenschaft ist eine Serialisierung des `CSPViolationReportBody`-Objekts:

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
