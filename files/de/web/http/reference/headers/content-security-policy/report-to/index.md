---
title: "Content-Security-Policy: Directive report-to"
short-title: report-to
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

Die **`report-to`**-Direktive von `Content-Security-Policy` gibt den Namen des Endpunkts an, den der Browser für das Melden von CSP-Verstößen verwenden soll.

Wenn ein CSP-Verstoß auftritt, wird ein Bericht erzeugt, der eine serialisierte [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Objektinstanz enthält.
Dieser Bericht wird an die URL gesendet, die dem Endpunktnamen entspricht, wobei die allgemeinen Mechanismen der [Reporting API](/de/docs/Web/API/Reporting_API) verwendet werden.

Der Server muss die Zuordnung zwischen Endpunktnamen und ihren entsprechenden URLs separat im {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header bereitstellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Directive Typ</th>
      <td>{{Glossary("Reporting_directive", "Meldedirektive")}}</td>
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

`<endpoint_name>` ist der Name eines Endpunkts, der durch den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header bereitgestellt wird.
Es kann auch der Name einer Gruppe sein, die vom Server im {{HTTPHeader("Report-To")}} {{deprecated_inline}} HTTP-Response-Header bereitgestellt wird.

### Syntax des Verstoßberichts

Ein CSP-Verstoßbericht ist ein JSON-serialisiertes [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Objekt, mit einer `type`-Eigenschaft, die den Wert `"csp-violation"` hat.
Berichte werden über eine {{httpmethod("POST")}}-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an die Zielendpunkte gesendet.

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

## Verwendungshinweise

Die `report-to`-Direktive soll `report-uri` ersetzen, und Browser, die `report-to` unterstützen, ignorieren die `report-uri`-Direktive.
Bis `report-to` jedoch breit unterstützt wird, können Sie beide Direktiven angeben, wie gezeigt:

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

Beachten Sie, dass andere Beispiele in diesem Thema `report-uri` nicht zeigen.

## Beispiele

### Festlegen eines CSP-Verstoßberichts-Endpunkts

Ein Server kann die Zuordnung zwischen Endpunktnamen und URLs unter Verwendung des {{HTTPHeader("Reporting-Endpoints")}} Headers im HTTP-Response definieren.
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
