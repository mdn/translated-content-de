---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der HTTP **`Integrity-Policy`** Antwort-Header ermöglicht es Website-Administratoren sicherzustellen, dass alle Ressourcen, die der User-Agent lädt (eines bestimmten Typs), [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) Garantien haben.

Wenn festgelegt, blockiert der User-Agent Anfragen zu bestimmten [Anfragezielen](#blocked-destinations), die Integritätsmetadaten weglassen, und blockiert auch Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus, bevor sie gesendet werden.

Verstoßberichte können ebenfalls gesendet werden, wenn der Header einen Berichtsendpunktnamen enthält, der mit einem Endpunkt übereinstimmt, der im {{HTTPHeader("Reporting-Endpoints")}} Header deklariert ist.
Berichte werden mit der [Reporting API](/de/docs/Web/API/Reporting_API) erzeugt und können auch auf der Seite beobachtet werden, für die die Integritätsrichtlinie durchgesetzt wird, unter Verwendung eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) Dictionary angegeben (eine JSON-serialisierte Form dieses Körpers wird in POSTs an Berichtserver-Endpunkte gesendet).

Dies hilft, gegen die Manipulation von Inhalten abgerufener Teilressourcen zu schützen.

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

Die Header-Werte sind als strukturierte Felddictionarys mit den folgenden Schlüsseln definiert:

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
      - : Die Integritätsmetadatenquelle ist inline im Inhalt, wie das [integrity Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standard- und einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Berichtsendpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Berichtsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert sein.

## Beispiele

### Blockieren und Berichten, wenn Skripte keine Integritätsmetadaten haben

Dieses Beispiel zeigt ein Dokument, das blockiert und berichtet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity` Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}} Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint="https://example.com/integrity", backup-integrity-endpoint="https://report-provider.example/integrity"
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
```

Die [Berichtsnutzdaten](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnten folgendermaßen aussehen.

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
- [Integritätsrichtlinie](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
