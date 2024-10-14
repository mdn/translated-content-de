---
title: "CSP: report-to"
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: b41e47c601e1858610e314bbb4157b923de053c8
---

{{HTTPSidebar}}

Die `Content-Security-Policy`-Direktive **`report-to`** gibt den Namen des Endpunkts an, den der Browser für das Melden von CSP-Verstößen verwenden soll.

Wenn ein CSP-Verstoß auftritt, wird ein Bericht erstellt, der eine serialisierte Instanz des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts enthält. Dieser Bericht wird an die URL gesendet, die dem Endpunktnamen entspricht, unter Verwendung der generischen Mechanismen, die in der [Reporting API](/de/docs/Web/API/Reporting_API) definiert sind.

Der Server muss die Zuordnung zwischen Endpunktnamen und ihren entsprechenden URLs im {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader separat bereitstellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Reporting_directive", "Reporting-Direktive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird nicht im {{HTMLElement("meta")}}-Element unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: …; report-to <endpoint_name>
```

`<endpoint_name>` ist der Name eines Endpunkts, der vom {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader bereitgestellt wird. Es kann auch der Name einer Gruppe sein, die vom Server im {{HTTPHeader("Report-To")}} {{deprecated_inline}}-HTTP-Antwortheader bereitgestellt wird.

### Syntax des Verstoßberichts

Ein CSP-Verstoßbericht ist eine JSON-serialisierte [`Report`](/de/docs/Web/API/Report)-Objektinstanz mit einer `type`-Eigenschaft, die den Wert `"csp-violation"` hat, und einem `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist (siehe die jeweiligen Objekte für ihre Eigenschaftsdefinitionen). Berichte werden über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den/die Zielendpunkt(e) gesendet.

Das JSON für einen einzelnen Bericht könnte so aussehen:

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

## Nutzungshinweise

Die Direktive `report-to` soll `report-uri` ersetzen, und Browser, die `report-to` unterstützen, ignorieren die Direktive `report-uri`. Solange `report-to` jedoch nicht umfassend unterstützt wird, können Sie beide Header angeben, wie gezeigt:

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

Beachten Sie, dass in anderen Beispielen in diesem Thema `report-uri` nicht angezeigt wird.

## Beispiele

### Festlegen eines CSP-Verstoßberichts-Endpunkts

Ein Server kann die Zuordnung zwischen Endpunktnamen und URLs mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header in der HTTP-Antwort definieren. Jeder Name kann verwendet werden: hier haben wir `name-of-endpoint` gewählt.

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

Der Server kann diesen Endpunktnamen als Ziel für die Übermittlung von CSP-Verstoßberichten verwenden, indem er die Direktive `report-to` verwendet:

```http
Content-Security-Policy: default-src 'self'; report-to name-of-endpoint
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Reporting-Endpoints")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Reporting API](/de/docs/Web/API/Reporting_API)
