---
title: CSPViolationReportBody
slug: Web/API/CSPViolationReportBody
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

Das `CSPViolationReportBody` Interface ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Inhalt eines Berichts über eine Verletzung der Content Security Policy (CSP) darstellt.

CSP-Verletzungen treten auf, wenn die Webseite versucht, eine Ressource zu laden, die die von der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header festgelegte Richtlinie verletzt.

CSP-Verletzungsberichte werden im [reports](/de/docs/Web/API/ReportingObserver/ReportingObserver#reports) Parameter von [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Rückrufen zurückgegeben, die einen `type` von `"csp-violation"` haben. Die `body` Eigenschaft dieser Berichte ist eine Instanz von `CSPViolationReportBody`.

CSP-Verletzungsberichte können auch als JSON-Objekte an den Endpunkt gesendet werden, der in der [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) Richtliniendirektive des {{HTTPHeader("Content-Security-Policy")}} Headers angegeben ist. Diese Berichte haben ähnlich einen `type` von `"csp-violation"` und eine `body` Eigenschaft, die eine Serialisierung einer Instanz dieses Interfaces enthält.

> [!NOTE]
> CSP-Verletzungsberichte, die von der Reporting API gesendet werden, wenn ein Endpunkt mit der CSP [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) Direktive angegeben ist, sind ähnlich (aber nicht identisch) zu den "CSP-Bericht" [JSON-Objekten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax), die gesendet werden, wenn Endpunkte mit der [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) Direktive angegeben sind. Die Reporting API und die `report-to` Direktive sollen das ältere Berichtsformat und die `report-uri` Direktive ersetzen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.blockedURL`](/de/docs/Web/API/CSPViolationReportBody/blockedURL) {{ReadOnlyInline}}
  - : Ein String, der entweder den Typ oder die URL der Ressource darstellt, die blockiert wurde, weil sie die CSP verletzt.
- [`CSPViolationReportBody.columnNumber`](/de/docs/Web/API/CSPViolationReportBody/columnNumber) {{ReadOnlyInline}}
  - : Die Spaltennummer im Skript, an der die Verletzung auftrat.
- [`CSPViolationReportBody.disposition`](/de/docs/Web/API/CSPViolationReportBody/disposition) {{ReadOnlyInline}}
  - : Gibt an, wie die verletzte Richtlinie vom Benutzeragent behandelt werden soll. Dies wird entweder `"enforce"` oder `"report"` sein.
- [`CSPViolationReportBody.documentURL`](/de/docs/Web/API/CSPViolationReportBody/documentURL) {{ReadOnlyInline}}
  - : Ein String, der die URL des Dokuments oder des Workers darstellt, in dem die Verletzung festgestellt wurde.
- [`CSPViolationReportBody.effectiveDirective`](/de/docs/Web/API/CSPViolationReportBody/effectiveDirective) {{ReadOnlyInline}}
  - : Ein String, der die Direktive darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.
- [`CSPViolationReportBody.lineNumber`](/de/docs/Web/API/CSPViolationReportBody/lineNumber) {{ReadOnlyInline}}
  - : Die Zeilennummer im Skript, an der die Verletzung auftrat.
- [`CSPViolationReportBody.originalPolicy`](/de/docs/Web/API/CSPViolationReportBody/originalPolicy) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung die Verletzung aufgedeckt hat.
- [`CSPViolationReportBody.referrer`](/de/docs/Web/API/CSPViolationReportBody/referrer) {{ReadOnlyInline}}
  - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- [`CSPViolationReportBody.sample`](/de/docs/Web/API/CSPViolationReportBody/sample) {{ReadOnlyInline}}
  - : Ein String, der ein Beispiel der Ressource darstellt, die die Verletzung verursacht hat, normalerweise die ersten 40 Zeichen. Dies wird nur ausgefüllt, wenn die Ressource ein eingebettetes Skript, ein Event-Handler oder ein Stil ist — externe Ressourcen, die eine Verletzung verursachen, erzeugen kein Beispiel.
- [`CSPViolationReportBody.sourceFile`](/de/docs/Web/API/CSPViolationReportBody/sourceFile) {{ReadOnlyInline}}
  - : Wenn die Verletzung als Ergebnis eines Skripts auftrat, wird dies die URL des Skripts sein; andernfalls wird es `null` sein. Sowohl `columnNumber` als auch `lineNumber` sollten Nicht-Null-Werte haben, wenn diese Eigenschaft nicht `null` ist.
- [`CSPViolationReportBody.statusCode`](/de/docs/Web/API/CSPViolationReportBody/statusCode) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder des Workers darstellt, in dem die Verletzung auftrat.

## Instanzmethoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`ReportBody`](/de/docs/Web/API/ReportBody)._

- [`CSPViolationReportBody.toJSON()`](/de/docs/Web/API/CSPViolationReportBody/toJSON)
  - : Ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody` Objekts zurückgibt.

## Beispiele

### Abrufen eines `CSPViolationReportBody` Objekts

Um ein `CSPViolationReportBody` Objekt abzurufen, müssen Sie Ihre Seite so konfigurieren, dass eine CSP-Verletzung auftritt. In diesem Beispiel werden wir unsere CSP so einstellen, dass nur Inhalte aus dem eigenen Ursprung der Seite erlaubt sind, und dann versuchen, ein Skript von `apis.google.com` zu laden, das ein externer Ursprung ist.

Zuerst setzen wir unseren {{HTTPHeader("Content-Security-Policy")}} Header in der HTTP-Antwort:

```http
Content-Security-Policy: default-src 'self';
```

oder im HTML [`<meta>`](/de/docs/Web/HTML/Element/meta) Element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
```

Dann werden wir versuchen, ein externes Skript zu laden:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Schließlich erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Objekt, um auf CSP-Verletzungen zu hören (dies muss von demselben Ort geladen werden, bevor das Skript geladen wird, das die Verletzung verursacht).

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

Oben protokollieren wir jedes Verletzungsbericht-Objekt und eine JSON-String-Version des Objekts, die ähnlich wie das unten gezeigte Objekt aussehen könnte. Beachten Sie, dass der `body` eine Instanz des `CSPViolationReportBody` ist und der `type` `"csp-violation"` ist.

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

Das Konfigurieren einer Webseite zum Senden eines CSP-Verletzungsberichts ist dem vorherigen Beispiel ähnlich. Wie zuvor müssen Sie Ihre Seite so konfigurieren, dass es zu einer Verletzung kommt.

Zusätzlich müssen Sie auch die Endpunkte angeben, an die der Bericht gesendet wird. Ein Server spezifiziert Endpunkte mit dem {{httpheader("Reporting-Endpoints")}} Antwortheader: Diese müssen sichere URLs (HTTPS) sein. Die CSP {{CSP("report-to")}} Direktive wird dann verwendet, um anzugeben, dass ein bestimmter Endpunkt für das Berichten von CSP-Verletzungen verwendet wird:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-report-to"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wie zuvor können wir eine Verletzung auslösen, indem wir ein externes Skript von einem Standort laden, der nicht von unserem CSP-Header erlaubt wird:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Der Verletzungsbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet. Wie Sie aus dem untenstehenden Beispiel sehen können, ist der `type` `"csp-violation"` und die `body` Eigenschaft ist eine Serialisierung des `CSPViolationReportBody` Objekts:

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
