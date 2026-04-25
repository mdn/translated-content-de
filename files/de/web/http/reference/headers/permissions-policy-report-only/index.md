---
title: Permissions-Policy-Report-Only header
short-title: Permissions-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Permissions-Policy-Report-Only
l10n:
  sourceCommit: dd1e8282ab6621b62399d65cad46177d426d1d93
---

{{SeeCompatTable}}

Der HTTP-**`Permissions-Policy-Report-Only`**-{{Glossary("response_header", "Antwort-Header")}} bietet eine Möglichkeit für Website-Administratoren, Verstöße gegen eine {{HTTPHeader("Permissions-Policy")}} zu melden, ohne diese durchzusetzen. Dies ermöglicht das Testen und Beheben von [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Problemen, bevor eine Richtlinie implementiert wird.

Die Syntax und das Verhalten sind genau wie bei `Permissions-Policy`, mit folgenden Ausnahmen:

- Die Richtlinie wird nicht durchgesetzt.
- Objekte zur Richtlinienverletzungsberichterstattung ([`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport)) haben einen `body.disposition`-Wert von `"report"` anstelle von `"enforce"`.

Siehe {{HTTPHeader("Permissions-Policy")}} für weitere Informationen (der größte Teil der Inhalte wurde unten nicht dupliziert).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
# Single directive
Permissions-Policy-Report-Only: <directive>=<allowlist>

# Single directive with reporting endpoint
Permissions-Policy-Report-Only: <directive>=<allowlist>;report-to=<endpoint>

# Multiple directives, with and without server reporting endpoints
Permissions-Policy-Report-Only: <directive>=<allowlist>, <directive>=<allowlist>;report-to=<endpoint>, ...
```

## Beispiele

### Grundlegende Nutzung

SecureCorp Inc. möchte die [`Geolocation`](/de/docs/Web/API/Geolocation)-API in seiner Anwendung deaktivieren. Bevor die Richtlinie mit `Permissions-Policy` eingeführt wird, fügt es die Header `Permissions-Policy-Report-Only` und {{HTTPHeader("Reporting-Endpoints")}} wie unten gezeigt hinzu:

```http
Reporting-Endpoints: geo_endpoint="https://example.com/reports"
Permissions-Policy-Report-Only: geolocation=();report-to=geo_endpoint
```

Indem `geolocation=()` für die Ursprungslisten angegeben wird, liegt ein Verstoß vor, wenn irgendein Browsing-Kontext auf die Geolocation zugreift (dies schließt `<iframe>`s ein), unabhängig vom Ursprung. Der `report-to`-Parameter gibt an, dass Berichte an den Endpunkt mit dem Namen `geo_endpoint` gesendet werden. Die Zuordnung zwischen `geo_endpoint` und der URL, an die Berichte gesendet werden sollen, wird in `Reporting-Endpoints` bereitgestellt.

Ein Verstoß tritt auf, wenn eine Seite versucht, die blockierte Funktion zu nutzen, zum Beispiel:

```js
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Das an den Endpunkt gesendete [Berichtsnutzlast](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) hat dieselbe Struktur wie das unten gezeigte JSON-Beispiel. Dies ist dasselbe wie ein Bericht für `Permissions-Policy`, mit Ausnahme des Wertes von `body.disposition`.

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "report", // A violation that is reported but not enforced
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "featureId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

> [!NOTE]
> Die serverseitige Serialisierung von Verstoßberichten durch Chrome verwendet `policyId` anstelle von [`featureId`](/de/docs/Web/API/PermissionsPolicyViolationReport#featureid) für den Funktionsnamen im `body` eines Serverberichts. Der von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegebene [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) folgt der Spezifikation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport)
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [Reporting API](/de/docs/Web/API/Reporting_API)
