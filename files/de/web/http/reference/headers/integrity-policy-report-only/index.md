---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: 43e2a741865dd45ad5f18bb532fe84c6aaec0e77
---

{{HTTPSidebar}}

Der HTTP **`Integrity-Policy-Report-Only`** Antwort-Header ermöglicht es Website-Administratoren, über Ressourcen zu berichten, die das Benutzeragent lädt und die gegen die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) Garantien verstoßen würden, wenn die Integritätspolitik durchgesetzt würde (mittels des {{HTTPHeader("Integrity-Policy")}} Headers).

Berichte können für Anfragen zu bestimmten [Request-Zielen](/de/docs/Web/API/Request/destination) generiert werden, die Metadaten zur Integrität auslassen oder im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus gestellt werden. Damit Berichte an ein Reporting-Endpunkt gesendet werden, muss der `Integrity-Policy-Report-Only` Header einen gültigen Namen des Reporting-Endpunkts spezifizieren, der mit einem Endpunkt übereinstimmt, der durch den {{HTTPHeader("Reporting-Endpoints")}} Header deklariert wurde. Berichte werden unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) generiert und können auch auf der Seite beobachtet werden, für die die Integritätspolitik gemeldet wird, mittels eines [ReportingObserver](/de/docs/Web/API/ReportingObserver). Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) Wörterbuch angegeben (eine JSON-serialisierte Form dieses Körpers wird in POSTs an Reporting-Server-Endpunkte gesendet).

Der Header erlaubt es Entwicklern, [Integritätspolitiken](/de/docs/Web/Security/Subresource_Integrity#integrity_policy) zu testen und etwaige Inhaltsprobleme zu beheben, bevor ein {{HTTPHeader("Integrity-Policy")}} Header zur Durchsetzung der Politik eingesetzt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy-Report-Only: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Request-Zielen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `script`
      - : Skript-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `inline`
      - : Die Quelle der Integritätsmetadaten ist inline im Inhalt, wie das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standardwert und einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Reporting-Endpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Reporting-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert sein.

## Beispiele

### Berichterstattung, wenn Skripte Integritätsmetadaten fehlen

Dieses Beispiel zeigt ein Dokument, das meldet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity` Attribut spezifiziert oder wenn eine Skript-Ressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy-Report-Only` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}} Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Die [Payload des Berichts](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte folgendermaßen aussehen.

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
- [Integritätspolitik](/de/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
