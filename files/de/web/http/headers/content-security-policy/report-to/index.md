---
title: "CSP: report-to"
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}

Die `Content-Security-Policy` **`report-to`**-Direktive gibt den Namen des Endpunkts an, den der Browser für das Melden von CSP-Verstößen verwenden soll.

Wenn ein CSP-Verstoß auftritt, wird ein Bericht erstellt, der eine serialisierte {{domxref("CSPViolationReportBody")}}-Objektinstanz enthält.
Dieser Bericht wird an die URL gesendet, die dem Endpunktnamen entspricht, unter Verwendung der generischen Mechanismen, die in der [Reporting API](/de/docs/Web/API/Reporting_API) definiert sind.

Der Server muss separat die Zuordnung zwischen Endpunktnamen und ihren entsprechenden URLs im {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header bereitstellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Reporting directive")}}</td>
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

`<endpoint_name>` ist der Name eines Endpunkts, der vom {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header bereitgestellt wird.
Es kann auch der Name einer Gruppe sein, die vom Server im {{HTTPHeader("Report-To")}} {{deprecated_inline}} HTTP-Response-Header bereitgestellt wird.

### Syntax des Verstoßberichts

Ein CSP-Verstoßbericht ist ein JSON-serialisiertes {{domxref("Report")}}-Objekt, mit einer `type`-Eigenschaft, die den Wert `"csp-violation"` hat, und einem `body`, das die serialisierte Form eines {{domxref("CSPViolationReportBody")}}-Objekts ist (siehe die jeweiligen Objekte für deren Eigenschaften-Definitionen).
Berichte werden über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an den Zielendpunkt(e) gesendet.

Das JSON für einen einzelnen Bericht könnte wie folgt aussehen:

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
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, wie Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

## Hinweise zur Verwendung

Die `report-to`-Direktive soll `report-uri` ersetzen, und Browser, die `report-to` unterstützen, ignorieren die `report-uri`-Direktive.
Bis `report-to` jedoch breit unterstützt wird, können Sie beide Header wie folgt angeben:

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

Beachten Sie, dass andere Beispiele in diesem Thema `report-uri` nicht zeigen.

## Beispiele

### Festlegen eines Endpunkts für CSP-Verstoßberichte

Ein Server kann die Zuordnung zwischen Endpunktnamen und URLs mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header in der HTTP-Antwort definieren.
Jeder Name kann verwendet werden: hier haben wir `name-of-endpoint` gewählt.

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

Der Server kann diesen Endpunktnamen als Ziel für das Senden von CSP-Verstoßberichten mit der `report-to`-Direktive festlegen:

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
