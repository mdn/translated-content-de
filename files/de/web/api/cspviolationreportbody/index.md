---
title: CSPViolationReportBody
slug: Web/API/CSPViolationReportBody
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

Das `CSPViolationReportBody` Interface ist eine Erweiterung der [Reporting API](/de/docs/Web/API/Reporting_API), die den Inhalt eines Content Security Policy (CSP) Verletzungsberichts darstellt.

CSP-Verletzungen werden ausgelöst, wenn die Webseite versucht, eine Ressource zu laden, die gegen die durch den {{HTTPHeader("Content-Security-Policy")}} HTTP-Header festgelegte Richtlinie verstößt.

CSP-Verletzungsberichte werden im [reports](/de/docs/Web/API/ReportingObserver/ReportingObserver#reports)-Parameter von {{domxref("ReportingObserver")}}-Rückrufen zurückgegeben, die einen `type` von `"csp-violation"` haben. Die `body`-Eigenschaft dieser Berichte ist eine Instanz von `CSPViolationReportBody`.

CSP-Verletzungsberichte können auch als JSON-Objekte an den in der [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) Richtliniendirektive des {{HTTPHeader("Content-Security-Policy")}} Headers spezifizierten Endpunkt gesendet werden. Diese Berichte haben ebenfalls einen `type` von `"csp-violation"` und eine `body`-Eigenschaft, die eine Serialisierung einer Instanz dieses Interfaces enthält.

> [!NOTE]
> CSP-Verletzungsberichte, die von der Reporting API gesendet werden, wenn ein Endpunkt durch die CSP [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) Direktive angegeben wird, sind ähnlich (aber nicht identisch) zu den "CSP-Bericht" [JSON-Objekten](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax), die gesendet werden, wenn Endpunkte durch die [`report-uri`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) Direktive spezifiziert werden. Die Reporting API und die `report-to` Direktive sollen das ältere Berichtformat und die `report-uri` Direktive ersetzen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elterninterface, {{DOMxRef("ReportBody")}}._

- {{domxref("CSPViolationReportBody.blockedURL")}} {{ReadOnlyInline}}
  - : Ein String, der die URL der Ressource darstellt, die blockiert wurde, weil sie gegen die CSP verstößt.
- {{domxref("CSPViolationReportBody.columnNumber")}} {{ReadOnlyInline}}
  - : Die Spaltennummer im Skript, bei der die Verletzung auftrat.
- {{domxref("CSPViolationReportBody.disposition")}} {{ReadOnlyInline}}
  - : Gibt an, wie die verletzte Richtlinie durch den Benutzeragenten behandelt werden soll. Dies wird `"enforce"` oder `"report"` sein.
- {{domxref("CSPViolationReportBody.documentURL")}} {{ReadOnlyInline}}
  - : Ein String, der die URL des Dokuments oder Arbeiters darstellt, in dem die Verletzung festgestellt wurde.
- {{domxref("CSPViolationReportBody.effectiveDirective")}} {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie darstellt, deren Durchsetzung die Verletzung aufgedeckt hat.
- {{domxref("CSPViolationReportBody.lineNumber")}} {{ReadOnlyInline}}
  - : Die Zeilennummer im Skript, bei der die Verletzung auftrat.
- {{domxref("CSPViolationReportBody.originalPolicy")}} {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung die Verletzung aufgedeckt hat.
- {{domxref("CSPViolationReportBody.referrer")}} {{ReadOnlyInline}}
  - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- {{domxref("CSPViolationReportBody.sample")}} {{ReadOnlyInline}}
  - : Ein String, der eine Probe der Ressource darstellt, die die Verletzung verursacht hat, normalerweise die ersten 40 Zeichen. Dies wird nur gefüllt, wenn die Ressource ein Inline-Skript, ein Ereignis-Handler oder ein Stil ist — externe Ressourcen, die eine Verletzung verursachen, erzeugen keine Probe.
- {{domxref("CSPViolationReportBody.sourceFile")}} {{ReadOnlyInline}}
  - : Wenn die Verletzung als Folge eines Skripts auftrat, wird dies die URL des Skripts sein; andernfalls wird es `null` sein. Sowohl `columnNumber` als auch `lineNumber` sollten nicht-null Werte haben, wenn diese Eigenschaft nicht `null` ist.
- {{domxref("CSPViolationReportBody.statusCode")}} {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Arbeiters darstellt, in dem die Verletzung auftrat.

## Instanzmethoden

_Erbt auch Methoden von seinem Elterninterface, {{DOMxRef("ReportBody")}}._

- {{DOMxRef("CSPViolationReportBody.toJSON()")}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `CSPViolationReportBody` Objekts zurückgibt.

## Beispiele

### Erhalten eines `CSPViolationReportBody` Objekts

Um ein `CSPViolationReportBody` Objekt zu erhalten, müssen Sie Ihre Seite so konfigurieren, dass eine CSP-Verletzung auftritt. In diesem Beispiel setzen wir unsere CSP so, dass nur Inhalte vom eigenen Ursprung der Seite erlaubt sind und versuchen dann, ein Skript von `apis.google.com` zu laden, welches ein externer Ursprung ist.

Zuerst setzen wir unseren {{HTTPHeader("Content-Security-Policy")}} Header:

```http
Content-Security-Policy: default-src 'self';
```

Dann versuchen wir, ein externes Skript zu laden:

```html
<!-- Dies sollte eine CSP-Verletzung generieren -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Abschließend erstellen wir ein neues {{domxref("ReportingObserver")}} Objekt, um CSP-Verletzungen zu überwachen (dies muss vom gleichen Ort geladen werden, bevor das Skript, das die Verletzung verursacht, geladen wird).

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    const cspViolation = reports[0];
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Wenn wir das Verletzungsberichtobjekt protokollieren würden, sähe es ähnlich dem untenstehenden Objekt aus. Beachten Sie, dass `body` eine Instanz des `CSPViolationReportBody` ist und `type` `"csp-violation"` ist.

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

Die Konfiguration einer Webseite zum Senden eines CSP-Verletzungsberichts ist ähnlich wie im vorherigen Beispiel. Wie zuvor müssen Sie Ihre Seite so konfigurieren, dass eine Verletzung auftritt.

Zusätzlich müssen Sie auch den oder die Endpunkte angeben, an die der Bericht gesendet wird. Ein Server gibt Endpunkte mithilfe des {{httpheader("Reporting-Endpoints")}} Antwort-Headers an: Diese müssen sichere URLs (HTTPS) sein. Die CSP {{CSP("report-to")}} Direktive wird dann verwendet, um anzugeben, dass ein bestimmter Endpunkt für die Meldung von CSP-Verletzungen verwendet wird:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-report-to"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wie zuvor können wir die Verletzung auslösen, indem wir ein externes Skript von einem Ort laden, der durch unseren CSP-Header nicht erlaubt ist:

```html
<!-- Dies sollte eine CSP-Verletzung generieren -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Der Verletzungsbericht wird dann als JSON-Datei an den angegebenen Endpunkt gesendet. Wie im untenstehenden Beispiel zu sehen ist, ist der `type` `"csp-violation"` und die `body`-Eigenschaft ist eine Serialisierung des `CSPViolationReportBody` Objekts:

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
      "sample": "console.log(\"lo\")",
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReportBody")}}
- {{domxref("ReportingObserver")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{domxref("SecurityPolicyViolationEvent")}}
