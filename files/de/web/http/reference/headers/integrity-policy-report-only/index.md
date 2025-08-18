---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: 32f4ac98e57f420470176f2468f514d959600471
---

{{SeeCompatTable}}

Der HTTP-Antwortheader **`Integrity-Policy-Report-Only`** ermöglicht es Website-Administratoren, Berichte über Ressourcen zu erstellen, die der Benutzeragent lädt und die gegen die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien verstoßen würden, wenn die Integritätsrichtlinie (unter Verwendung des {{HTTPHeader("Integrity-Policy")}} Headers) durchgesetzt würde.

Berichte können für Anfragen zu bestimmten [Request-Destinationen](#blocked-destinations) erstellt werden, die Integritätsmetadaten weglassen oder die im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus erfolgen.
Damit Berichte an einen Reporting-Endpunkt gesendet werden, muss der `Integrity-Policy-Report-Only`-Header einen gültigen Reporting-Endpunkt-Namen angeben, der mit einem Endpunkt übereinstimmt, der mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header deklariert wurde.
Berichte werden über die [Reporting API](/de/docs/Web/API/Reporting_API) erstellt und können auch in der Seite, für die die Integritätsrichtlinie berichtet wird, durch einen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden.
Das Format des Berichtsinhalt wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch gegeben (eine JSON-serialisierte Form dieses Inhalts wird in POSTs an Reporting-Server-Endpunkte gesendet).

Der Header ermöglicht es Entwicklern, [Integritätsrichtlinien](/de/docs/Web/Security/Subresource_Integrity#integrity_policy) zu testen und eventuelle Inhaltsprobleme zu beheben, bevor schließlich ein {{HTTPHeader("Integrity-Policy")}}-Header eingeführt wird, um die Richtlinie durchzusetzen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy-Report-Only: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Request-Destinationen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `script`
      - : Skriptressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `inline`
      - : Die Quelle der Integritätsmetadaten ist inline mit dem Inhalt, wie das [integrity attribute](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist die Standardeinstellung.

        Da dies der Standard und einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Reporting-Endpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Reporting-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert sein.

## Beispiele

### Bericht, wenn Skripte keine Integritätsmetadaten aufweisen

Dieses Beispiel zeigt ein Dokument, das meldet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der `integrity-endpoint`, der in `Integrity-Policy-Report-Only` verwendet wird, im {{httpheader("Reporting-Endpoints")}}-Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Die [Berichts-Nutzlast](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte so aussehen.

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/main.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Integrity-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Integrity Policy](/de/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
