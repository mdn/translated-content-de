---
title: "Content-Security-Policy: report-to Direktive"
short-title: report-to
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die `Content-Security-Policy`-**`report-to`**-Direktive gibt den Namen des Endpunkts an, den der Browser für das Melden von CSP-Verstößen verwenden soll.

Tritt ein CSP-Verstoß auf, wird ein Bericht erstellt, der eine serialisierte Instanz des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts enthält. Dieser Bericht wird an die URL gesendet, die dem Endpunktnamen entspricht, unter Verwendung der generischen Mechanismen, die in der [Reporting API](/de/docs/Web/API/Reporting_API) definiert sind.

Der Server muss separat die Zuordnung zwischen Endpunktnamen und ihren entsprechenden URLs im {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header bereitstellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Reporting_directive", "Reporting directive")}}</td>
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

`<endpoint_name>` ist der Name eines vom {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header bereitgestellten Endpunkts. Es kann auch der Name einer Gruppe sein, die vom Server im {{HTTPHeader("Report-To")}} {{deprecated_inline}} HTTP-Response-Header bereitgestellt wird.

### Syntax des Verstoßberichts

Ein CSP-Verstoßbericht ist ein JSON-serialisiertes [`Report`](/de/docs/Web/API/Report)-Objekt mit einer `type`-Eigenschaft, die den Wert `"csp-violation"` hat, und einem `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist (siehe die jeweiligen Objekte für ihre Eigenschaftsdefinitionen). Berichte werden an die Zielendpunkte über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` gesendet.

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
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

## Verwendungshinweise

Die `report-to`-Direktive soll `report-uri` ersetzen, und Browser, die `report-to` unterstützen, ignorieren die `report-uri`-Direktive. Bis `report-to` jedoch weitgehend unterstützt wird, können Sie beide Direktiven wie gezeigt angeben:

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

Beachten Sie, dass in anderen Beispielen in diesem Thema `report-uri` nicht gezeigt wird.

## Beispiele

### Festlegen eines CSP-Verstoßberichts-Endpunkts

Ein Server kann die Zuordnung zwischen Endpunktnamen und URLs mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header in der HTTP-Antwort definieren. Jeder Name kann verwendet werden: hier haben wir `name-of-endpoint` gewählt.

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

Der Server kann diesen Endpunktnamen als Ziel für das Senden von CSP-Verstoßberichten mit der `report-to`-Direktive setzen:

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
