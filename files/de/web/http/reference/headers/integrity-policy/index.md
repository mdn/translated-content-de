---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: 32f4ac98e57f420470176f2468f514d959600471
---

{{SeeCompatTable}}

Der HTTP-**`Integrity-Policy`**-Antwort-Header ermöglicht es Website-Administratoren sicherzustellen, dass alle Ressourcen, die vom Benutzeragenten geladen werden (eines bestimmten Typs), [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien haben.

Wenn der Header gesetzt ist, blockiert der Benutzeragent Anfragen an spezifische [Anfrageziele](#blocked-destinations), die keine Integritätsmetadaten enthalten, und blockiert außerdem Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus, bevor sie überhaupt gestellt werden.

Verstoßberichte können ebenfalls gesendet werden, wenn der Header einen Berichtsendpunktnamen enthält, der mit einem über den {{HTTPHeader("Reporting-Endpoints")}}-Header deklarierten Endpunkt übereinstimmt.
Berichte werden mit der [Reporting API](/de/docs/Web/API/Reporting_API) generiert und können auch auf der Seite beobachtet werden, für die die Integritätsrichtlinie durchgesetzt wird, unter Verwendung eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Das Format des Berichts ist durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch vorgegeben (eine JSON-serialisierte Form dieses Körpers wird in POSTs an die Berichtsendpunkte gesendet).

Dies hilft beim Schutz gegen Manipulationen von geladenen Subressourcen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Felder mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Anfragezielen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `script`
      - : Skript-Ressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `inline`
      - : Die Integritätsmetadatenquelle ist inline im Inhalt, wie das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standard.

        Da dies der Standard und der einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Berichtsendpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden sollen.
    Die Berichtsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert werden.

## Beispiele

### Blockieren und Berichten, wenn Skripte keine Integritätsmetadaten haben

Dieses Beispiel zeigt ein Dokument, das blockiert und berichtet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der `integrity-endpoint`, der in `Integrity-Policy` verwendet wird, im {{httpheader("Reporting-Endpoints")}}-Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Das [Berichtspayload](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte folgendermaßen aussehen.

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
- [Integrity-Policy](/de/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
