---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Integrity-Policy`**-Antwortheader ermöglicht es Website-Administratoren sicherzustellen, dass alle vom User-Agent geladenen Ressourcen (eines bestimmten Typs) über [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien verfügen.

Wenn der Header gesetzt ist, blockiert der User-Agent Anfragen an spezifizierte [Request-Destinationen](/de/docs/Web/API/Request/destination), die Integritätsmetadaten weglassen, und blockiert außerdem Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus, damit sie gar nicht erst gemacht werden.

Verletzungsberichte können ebenfalls gesendet werden, wenn der Header einen Berichtsendpunktnamen enthält, der mit einem Endpunkt übereinstimmt, der mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header deklariert wurde.
Berichte werden mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) generiert und können auch auf der Seite beobachtet werden, für die die Integritätsrichtlinie durchgesetzt wird, mithilfe eines [ReportingObserver](/de/docs/Web/API/ReportingObserver).
Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch angegeben (eine JSON-serialisierte Form dieses Körpers wird in POST-Anfragen an Bericht-Serverendpunkte gesendet).

Dies hilft, gegen die Manipulation von Inhalten der abgerufenen Subressourcen zu schützen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Feldwörterbücher mit folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Request-Destinationen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `script`
      - : Skriptressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `inline`
      - : Die Integritätsmetadatenquelle ist inline im Inhalt enthalten, wie das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standard.

        Da dies der Standard und der einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Berichtsendpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Berichtsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert werden.

## Beispiele

### Blockieren und Berichten, wenn Skripte keine Integritätsmetadaten enthalten

Dieses Beispiel zeigt ein Dokument, das blockiert und berichtet, wenn ein beliebiges {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der `integrity-endpoint`, der in `Integrity-Policy` verwendet wird, im {{httpheader("Reporting-Endpoints")}}-Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Die [Nutzdaten des Berichts](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnten so aussehen.

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
