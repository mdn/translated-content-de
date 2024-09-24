---
title: "CSP: report-to"
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}

Die `Content-Security-Policy`-**`report-to`**-Direktive gibt den Namen des Endpunkts an, den der Browser zur Erstellung von Berichten über CSP-Verstöße verwenden soll.

Wenn ein CSP-Verstoß auftritt, wird ein Bericht erstellt, der eine serialisierte Instanz eines {{domxref("CSPViolationReportBody")}}-Objekts enthält. Dieser Bericht wird an die URL gesendet, die dem Endpunktnamen entspricht, unter Verwendung der generischen Mechanismen, die in der [Reporting API](/de/docs/Web/API/Reporting_API) definiert sind.

Der Server muss die Zuordnung zwischen Endpunktnamen und ihren entsprechenden URLs separat im {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader bereitstellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Reporting directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird im {{HTMLElement("meta")}}-Element nicht unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: …; report-to <endpoint_name>
```

`<endpoint_name>` ist der Name eines Endpunkts, der vom {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader bereitgestellt wird. Es kann auch der Name einer Gruppe sein, die vom Server im {{HTTPHeader("Report-To")}} {{deprecated_inline}} HTTP-Antwortheader bereitgestellt wird.

### Syntax des Verstoßberichts

Ein CSP-Verstoßbericht ist eine JSON-serialisierte Instanz eines {{domxref("Report")}}-Objekts mit einer `type`-Eigenschaft, die den Wert `"csp-violation"` hat, und einem `body`, der die serialisierte Form eines {{domxref("CSPViolationReportBody")}}-Objekts ist (siehe die jeweiligen Objekte für die Definitionen ihrer Eigenschaften). Berichte werden über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an die Zielendpunkte gesendet.

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

## Hinweise zur Nutzung

Die `report-to`-Direktive soll `report-uri` ersetzen, und Browser, die `report-to` unterstützen, ignorieren die `report-uri`-Direktive. Allerdings können Sie, bis `report-to` umfassend unterstützt wird, beide Header angeben, wie gezeigt:

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

Beachten Sie, dass andere Beispiele in diesem Thema `report-uri` nicht zeigen.

## Beispiele

### Festlegen eines Endpunkts für CSP-Verstoßberichte

Ein Server kann die Zuordnung zwischen Endpunktnamen und URLs mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header in der HTTP-Antwort definieren. Jeder Name kann verwendet werden: hier haben wir `name-of-endpoint` gewählt.

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

Der Server kann diesen Endpunktnamen als Ziel zum Senden von CSP-Verstoßberichten unter Verwendung der `report-to`-Direktive festlegen:

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
