---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-**`Integrity-Policy`**-Antwort-Header ermöglicht es Website-Administratoren sicherzustellen, dass alle Ressourcen, die der User Agent lädt (eines bestimmten Typs), [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantie aufweisen.

Wenn der Header gesetzt ist, blockiert der User Agent Anfragen bei angegebenen [Request Destinations](#blocked-destinations), die keine Integritätsmetadaten enthalten, und verhindert auch, dass Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus überhaupt gestellt werden.

Verstoßberichte können ebenfalls gesendet werden, wenn der Header einen Reporting-Endpunktnamen enthält, der mit einem Endpunkt übereinstimmt, der mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header deklariert wurde.
Berichte werden mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt und können auch auf der Seite beobachtet werden, für die die Integritätsrichtlinie durchgesetzt wird, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch angegeben (eine JSON-serialisierte Form dieses Körpers wird in POSTs an Reporting-Server-Endpunkte gesendet).

Dies hilft, Manipulationen von abgerufenen Subressourcen zu verhindern.

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
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Request Destinations](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `script`
      - : Skriptressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `inline`
      - : Die Integritätsmetadatenquelle ist inline im Inhalt enthalten, wie das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standard- und einzige Wert ist, entspricht das Weglassen von `sources` der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Reporting-Endpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Reporting-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert sein.

## Beispiele

### Blockieren und Berichten, wenn Skripte keine Integritätsmetadaten aufweisen

Dieses Beispiel zeigt ein Dokument, das blockiert und berichtet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}}-Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint="https://example.com/integrity", backup-integrity-endpoint="https://report-provider.example/integrity"
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
```

Die [Berichtnutzlast](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte wie folgt aussehen.

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

- {{HTTPHeader("Integrity-Policy-Report-Only")}}
- [Integritätsrichtlinie](/de/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
