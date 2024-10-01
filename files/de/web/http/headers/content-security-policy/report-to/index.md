---
title: "CSP: report-to"
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}

Die `Content-Security-Policy`-**`report-to`**-Richtlinie gibt den Namen des Endpunkts an, den der Browser für das Melden von CSP-Verstößen verwenden soll.

Tritt ein CSP-Verstoß auf, wird ein Bericht erstellt, der eine serialisierte [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objektinstanz enthält. Dieser Bericht wird an die URL gesendet, die dem Endpunktnamen entspricht, unter Verwendung der generischen Mechanismen, die in der [Reporting-API](/de/docs/Web/API/Reporting_API) definiert sind.

Der Server muss die Zuordnung zwischen Endpunktnamen und ihren entsprechenden URLs separat im {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header bereitstellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Reporting_directive", "Reporting directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Richtlinie wird nicht im {{HTMLElement("meta")}}-Element unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: …; report-to <endpoint_name>
```

`<endpoint_name>` ist der Name eines Endpunkts, der im {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header bereitgestellt wird. Es kann auch der Name einer Gruppe sein, die vom Server im {{HTTPHeader("Report-To")}} {{deprecated_inline}} HTTP-Antwort-Header bereitgestellt wird.

### Syntax des Verstoßberichts

Ein CSP-Verstoßbericht ist ein JSON-serialisiertes [`Report`](/de/docs/Web/API/Report)-Objekt mit einer `type`-Eigenschaft, die den Wert `"csp-violation"` hat, und einem `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist (siehe die jeweiligen Objekte für ihre Eigenschaftsdefinitionen). Berichte werden über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json` an die Zielendpunkte gesendet.

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

Die `report-to`-Richtlinie soll `report-uri` ersetzen, und Browser, die `report-to` unterstützen, ignorieren die `report-uri`-Richtlinie. Bis `report-to` jedoch weit unterstützt wird, können Sie beide Header angeben, wie gezeigt:

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

Beachten Sie, dass andere Beispiele in diesem Thema `report-uri` nicht anzeigen.

## Beispiele

### Einstellen eines Endpunkts für CSP-Verstoßberichte

Ein Server kann die Zuordnung zwischen Endpunktnamen und URLs mit dem {{HTTPHeader("Reporting-Endpoints")}} Header in der HTTP-Antwort definieren. Jeder Name kann verwendet werden: hier haben wir `name-of-endpoint` gewählt.

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

Der Server kann diesen Endpunktnamen als Ziel für das Senden von CSP-Verstoßberichten mit der `report-to`-Richtlinie festlegen:

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
- [Reporting-API](/de/docs/Web/API/Reporting_API)
