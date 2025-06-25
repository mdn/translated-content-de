---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: 43e2a741865dd45ad5f18bb532fe84c6aaec0e77
---

{{HTTPSidebar}}

Der HTTP **`Integrity-Policy`** Response-Header ermöglicht es Website-Administratoren sicherzustellen, dass alle Ressourcen, die das Benutzeragent lädt (eines bestimmten Typs), [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) Garantien aufweisen.

Wenn dieser gesetzt ist, blockiert das Benutzeragent Anfragen zu angegebenen [request destinations](/de/docs/Web/API/Request/destination), die Integritätsmetadaten weglassen, und blockiert auch Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus, sodass diese gar nicht erst ausgeführt werden.

Verstoßmeldungen können auch gesendet werden, wenn der Header einen Berichtsendpunkt-Namen beinhaltet, der mit einem Endpunkt übereinstimmt, der mithilfe des Headers {{HTTPHeader("Reporting-Endpoints")}} deklariert wurde.
Berichte werden unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) generiert und können auch auf der Seite beobachtet werden, für die die Integritätsrichtlinie durchgesetzt wird, unter Verwendung eines [ReportingObserver](/de/docs/Web/API/ReportingObserver).
Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) Wörterbuch bestimmt (eine JSON-serialisierte Form dieses Körpers wird in POSTs an Berichtsserver-Endpunkte gesendet).

Dies hilft, eine Manipulation der Inhalte heruntergeladener Subressourcen zu verhindern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Felddictionaries mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [request destinations](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `script`
      - : Skriptressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Herkunftsquellen, die Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `inline`
      - : Die Integritätsmetadatenquelle ist inline im Inhalt, wie das [integrity attribute](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standard.

        Da dies der Standard- und einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Berichts-Endpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Berichts-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert sein.

## Beispiele

### Blockieren und Berichten, wenn Skripte keine Integritätsmetadaten haben

Dieses Beispiel zeigt ein Dokument, das blockiert und berichtet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity` Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert wird.

Beachten Sie, dass der `integrity-endpoint`, der in `Integrity-Policy` verwendet wird, im {{httpheader("Reporting-Endpoints")}} Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
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
- [Integrity Policy](/de/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
