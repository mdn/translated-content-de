---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

Der **`Integrity-Policy`** HTTP-Response-Header ermöglicht es Website-Administratoren sicherzustellen, dass alle vom Benutzeragenten geladenen Ressourcen (eines bestimmten Typs) die Garantien der [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) erfüllen.

Wenn gesetzt, blockiert der Benutzeragent Anforderungen an bestimmte [Request-Ziele](#blocked-destinations), die Integritätsmetadaten weglassen, und verhindert auch, dass Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus überhaupt gestellt werden können.
Dies hilft, Manipulationen von Inhalten bei abgerufenen Subressourcen zu verhindern.

Verstöße gegen die Richtlinie können mit der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können auf der Seite, auf der die Richtlinie durchgesetzt wird, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet und an Server-Endpunkte gesendet werden, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Response-Header definiert und unter Verwendung des [`endpoints`](#endpoints)-Feldes ausgewählt wurden.
Weitere Informationen finden Sie unter [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Request-Zielen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `script`
      - : Script-Ressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `inline`
      - : Die Quelle der Integritätsmetadaten ist in den Inhalt eingebettet, wie z. B. das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standard- und einzige Wert ist, entspricht das Weglassen von `sources` der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Namen von Reporting-Endpunkten](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Reporting-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert sein.

## Beispiele

### Blockieren und Melden, wenn Skripte keine Integritätsmetadaten haben

Dieses Beispiel zeigt ein Dokument, das blockiert und an einen Server-Endpunkt meldet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skript-Ressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}} Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint="https://example.com/integrity", backup-integrity-endpoint="https://report-provider.example/integrity"
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
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

- {{HTTPHeader("Integrity-Policy-Report-Only")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)
- [Integrity Policy](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
