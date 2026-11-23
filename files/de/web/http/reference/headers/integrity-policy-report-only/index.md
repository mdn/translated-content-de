---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: ea7722e995404f47bfaa0d7d0c011472d85aa972
---

Der HTTP-Antwortheader **`Integrity-Policy-Report-Only`** ermöglicht es Website-Administratoren, Ressourcen zu melden, die der User Agent lädt und die gegen die Garantien von [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) verstoßen würden, wenn die Integritätsrichtlinie mit dem Header {{HTTPHeader("Integrity-Policy")}} durchgesetzt würde.

Verstöße gegen die Richtlinie können über die [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können auf der Seite, für die die Richtlinie gilt, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet und an Server-Endpunkte gesendet werden. Diese Endpunkte werden in einem HTTP-Antwortheader {{HTTPHeader("Reporting-Endpoints")}} definiert und über das Feld [`endpoints`](#endpoints) ausgewählt.
Weitere Informationen finden Sie unter [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport).

Mit dem Header können Entwickler [Integritätsrichtlinien](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) testen und Probleme mit Inhalten beheben, bevor sie die Richtlinie schließlich mit einem Header {{HTTPHeader("Integrity-Policy")}} durchsetzen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Eine Liste von [Anforderungszielen](/de/docs/Web/API/Request/destination), für die gültige Integritätsmetadaten vorhanden sein müssen.
    Zulässige Werte sind:
    - `script`
      - : Script-Ressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `inline`
      - : Die Quelle der Integritätsmetadaten befindet sich direkt im Inhalt, beispielsweise im [Attribut `integrity`](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standardwert und zugleich der einzige zulässige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Namen für Reporting-Endpunkte](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Reporting-Endpunkte müssen in einem Header {{httpheader("Reporting-Endpoints")}} definiert sein.

## Beispiele

### Berichte über Scripts ohne Integritätsmetadaten

Dieses Beispiel zeigt ein Dokument, das einen Bericht an einen Server-Endpunkt sendet, wenn ein {{htmlelement("script")}}-Element (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Script-Ressource im Modus [no-cors](/de/docs/Web/API/Request/mode#no-cors) angefordert wird.

Beachten Sie, dass der in `Integrity-Policy-Report-Only` verwendete Endpunkt `integrity-endpoint` im Header {{httpheader("Reporting-Endpoints")}} definiert ist.

```http
Reporting-Endpoints: integrity-endpoint="https://example.com/integrity", backup-integrity-endpoint="https://report-provider.example/integrity"
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
```

Die [Berichtsdaten](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnten wie folgt aussehen.
Beachten Sie, dass die Eigenschaft `body.reportOnly` den Wert `true` hat, da dieser Bericht durch einen Verstoß gegen `Integrity-Policy-Report-Only` ausgelöst wurde.

```json
[
  {
    "age": 176279,
    "type": "integrity-violation",
    "url": "https://example.com",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
    "body": {
      "documentURL": "https://example.com",
      "blockedURL": "https://example.com/main.js",
      "destination": "script",
      "reportOnly": true
    }
  }
]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Integrity-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)
- [Integritätsrichtlinie](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
