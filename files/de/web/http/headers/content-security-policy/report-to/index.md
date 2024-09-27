---
title: "CSP: report-to"
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}

Die `Content-Security-Policy`-**`report-to`**-Direktive gibt den Namen des Endpunkts an, den der Browser für die Meldung von CSP-Verstößen verwenden soll.

Wenn ein CSP-Verstoß auftritt, wird ein Bericht generiert, der eine serialisierte [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objektinstanz enthält. Dieser Bericht wird an die URL gesendet, die dem Endpunktnamen entspricht, unter Verwendung der generischen Mechanismen, die in der [Reporting API](/de/docs/Web/API/Reporting_API) definiert sind.

Der Server muss die Zuordnung zwischen Endpunktnamen und ihren entsprechenden URLs im {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader separat bereitstellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Reporting-Direktive](/de/docs/Glossary/Reporting_directive)</td>
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

`<endpoint_name>` ist der Name eines Endpunkts, der vom {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader bereitgestellt wird.
Er kann auch der Name einer Gruppe sein, die vom Server im {{HTTPHeader("Report-To")}} {{deprecated_inline}}-HTTP-Antwortheader bereitgestellt wird.

### Syntax des Verstoßberichts

Ein CSP-Verstoßbericht ist eine JSON-serialisierte [`Report`](/de/docs/Web/API/Report)-Objektinstanz mit einer `type`-Eigenschaft, die den Wert `"csp-violation"` hat, und einem `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist (siehe die jeweiligen Objekte für ihre Eigenschaftsdefinitionen). Berichte werden per `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an die Zielendpunkte gesendet.

Das JSON für einen einzelnen Bericht könnte folgendermaßen aussehen:

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

## Hinweise zur Verwendung

Die `report-to`-Direktive soll `report-uri` ersetzen, und Browser, die `report-to` unterstützen, ignorieren die `report-uri`-Direktive. Solange `report-to` jedoch nicht umfassend unterstützt wird, können Sie beide Header wie gezeigt angeben:

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

Beachten Sie, dass andere Beispiele in diesem Thema `report-uri` nicht zeigen.

## Beispiele

### Einstellen eines Endpunkts für CSP-Verstoßberichte

Ein Server kann die Zuordnung zwischen Endpunktnamen und URLs mithilfe des {{HTTPHeader("Reporting-Endpoints")}}-Headers in der HTTP-Antwort definieren. Jeder Name kann verwendet werden: hier haben wir `name-of-endpoint` gewählt.

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

Der Server kann diesen Endpunktnamen als Ziel für das Senden von CSP-Verstoßberichten mithilfe der `report-to`-Direktive festlegen:

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
