---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: 55bb65bb6a84808896ed0f6c83e57c60dbd8480e
---

Der HTTP-Antwortheader **`Integrity-Policy`** ermöglicht es Website-Administratoren sicherzustellen, dass alle Ressourcen, die der Benutzeragent lädt (eines bestimmten Typs), [Subresource Integrity](/de-DE/docs/Web/Security/Subresource_Integrity)-Garantien erfüllen.

Wenn dieser gesetzt ist, blockiert der Benutzeragent Anfragen zu bestimmten [Zielanforderungen](#blocked-destinations), die Integritätsmetadaten weglassen, und blockiert auch Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus, bevor sie überhaupt gemacht werden.

Verletzungsberichte können ebenfalls gesendet werden, wenn der Header einen Berichtsendpunktnamen enthält, der einem Endpunkt entspricht, der mittels des {{HTTPHeader("Reporting-Endpoints")}}-Headers deklariert wurde.
Berichte werden mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) generiert und können auch auf der Seite beobachtet werden, für die die Integritätsrichtlinie durchgesetzt wird, indem ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) verwendet wird.
Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch vorgegeben (eine JSON-serialisierte Form dieses Körpers wird in POST-Anfragen an die Berichtsserver-Endpunkte gesendet).

Dies hilft, Manipulationen von Inhalten über abgerufene Subressourcen zu verhindern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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

Die Header-Werte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Zielanforderungen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `script`
      - : Skriptdatenressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `inline`
      - : Die Quelle der Integritätsmetadaten ist inline im Inhalt, wie das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standard und einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Reporting-Endpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Reporting-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert sein.

## Beispiele

### Blockieren und Berichten, wenn Skripte keine Integritätsmetadaten enthalten

Dieses Beispiel zeigt ein Dokument, das blockiert und berichtet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}}-Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint="https://example.com/integrity", backup-integrity-endpoint="https://report-provider.example/integrity"
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
```

Die [Berichtsnutzlast](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte so aussehen.

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
