---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

{{SeeCompatTable}}

Der HTTP **`Integrity-Policy`**-Antwortheader ermöglicht es Website-Administratoren sicherzustellen, dass alle Ressourcen, die das Benutzerprogramm lädt (eines bestimmten Typs), über [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien verfügen.

Wenn gesetzt, blockiert das Benutzerprogramm Anfragen an die angegebenen [Request Destinations](#blocked-destinations), die die Integritätsmetadaten weglassen, und wird auch Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus davon abhalten, jemals gestellt zu werden.

Verletzungsberichte können ebenfalls gesendet werden, wenn der Header einen Meldeendpunktnamen enthält, der mit einem über den {{HTTPHeader("Reporting-Endpoints")}}-Header deklarierten Endpunkt übereinstimmt. Berichte werden unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt und können auch in der Seite, für die die Integritätsrichtlinie durchgesetzt wird, mittels eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden. Das Format des Berichtsinhalt wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch angegeben (eine JSON-serialisierte Form dieses Inhalts wird in POST-Anfragen an Melde-Server-Endpunkte gesendet).

Dies hilft, Manipulationen von Inhalten der abgerufenen Subressourcen zu verhindern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Feld-Wörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Request Destinations](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `script`
      - : Skriptressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `inline`
      - : Die Integritätsmetadatenquelle ist inline im Inhalt enthalten, wie das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standard und einzige Wert ist, entspricht das Weglassen von `sources` der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Meldeendpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Meldeendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert sein.

## Beispiele

### Blockieren und Berichten, wenn Skripts keine Integritätsmetadaten enthalten

Dieses Beispiel zeigt ein Dokument, das blockiert und berichtet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}}-Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Die [Berichtdaten](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnten so aussehen.

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
