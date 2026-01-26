---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der HTTP-Antwortheader **`Integrity-Policy-Report-Only`** ermöglicht es Website-Administratoren, Berichte über Ressourcen zu erstellen, die der User-Agent lädt und die gegen die [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Garantien verstoßen würden, wenn die Integritätsrichtlinie durchgesetzt würde (unter Verwendung des {{HTTPHeader("Integrity-Policy")}} Headers).

Berichte können für Anfragen an spezifizierte [Anfrageziele](#blocked-destinations) erstellt werden, die Integritätsmetadaten auslassen oder im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus gemacht werden.
Damit Berichte an einen Berichtsendpunkt gesendet werden, muss der `Integrity-Policy-Report-Only` Header einen gültigen Berichtsendpunkt-Namen spezifizieren, der mit einem Endpunkt übereinstimmt, der unter Verwendung des {{HTTPHeader("Reporting-Endpoints")}} Headers deklariert wurde.
Berichte werden mit der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt und können auch auf der Seite beobachtet werden, für die die Integritätsrichtlinie berichtet wird, unter Verwendung eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch bestimmt (eine JSON-sequentierte Form dieses Körpers wird in POSTs an Berichtserverendpunkte gesendet).

Der Header ermöglicht es Entwicklern, [Integritätsrichtlinien](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) zu testen und etwaige Inhaltsprobleme zu beheben, bevor ein {{HTTPHeader("Integrity-Policy")}} Header zur Durchsetzung der Richtlinie implementiert wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy-Report-Only: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Headerwerte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Anfragezielen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `script`
      - : Skriptressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `inline`
      - : Die Integritätsmetadatenquelle ist inline im Inhalt, wie das [Integritätsattribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standardwert und der einzige Wert ist, ist das Auslassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Berichtsendpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Berichtsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert sein.

## Beispiele

### Berichterstattung, wenn Skripte Integritätsmetadaten fehlen

Dieses Beispiel zeigt ein Dokument, das berichtet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy-Report-Only` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}} Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Die [Berichtsdaten](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnten so aussehen.

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
- [Integritätsrichtlinie](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
