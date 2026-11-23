---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: ea7722e995404f47bfaa0d7d0c011472d85aa972
---

Der HTTP-Antwortheader **`Integrity-Policy`** ermöglicht es Website-Administratoren, sicherzustellen, dass alle Ressourcen eines bestimmten Typs, die der User-Agent lädt, durch [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) abgesichert sind.

Wenn der Header gesetzt ist, blockiert der User-Agent Anfragen mit den angegebenen [Anfragezielen](#blocked-destinations), denen Integritätsmetadaten fehlen. Außerdem verhindert er, dass Anfragen im Modus [no-cors](/de/docs/Web/API/Request/mode#no-cors) überhaupt gestellt werden.
Dies schützt vor der Manipulation abgerufener Unterressourcen.

Verstöße gegen die Richtlinie können über die [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können auf der Seite, für die die Richtlinie gilt, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden. Sie können außerdem an Server-Endpunkte gesendet werden, die in einem {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader definiert und über das Feld [`endpoints`](#endpoints) ausgewählt werden.
Weitere Informationen finden Sie unter [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport).

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
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als Structured-Field-Dictionaries mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Anfragezielen](/de/docs/Web/API/Request/destination), für die gültige Integritätsmetadaten erforderlich sind.
    Zulässige Werte sind:
    - `script`
      - : Skriptressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `inline`
      - : Die Integritätsmetadatenquelle befindet sich direkt im Inhalt, beispielsweise im [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standardwert und zugleich der einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Namen für Reporting-Endpunkte](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Reporting-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert sein.

## Beispiele

### Blockieren und Melden von Skripten ohne Integritätsmetadaten

Dieses Beispiel zeigt ein Dokument, das eine Anfrage blockiert und einen Bericht an einen Server-Endpunkt sendet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im Modus [no-cors](/de/docs/Web/API/Request/mode#no-cors) angefordert wird.

Beachten Sie, dass der in `Integrity-Policy` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}}-Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint="https://example.com/integrity", backup-integrity-endpoint="https://report-provider.example/integrity"
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
```

Die [Berichtsdaten](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnten wie folgt aussehen.

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
      "reportOnly": false
    }
  }
]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Integrity-Policy-Report-Only")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)
- [Integrity Policy](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
