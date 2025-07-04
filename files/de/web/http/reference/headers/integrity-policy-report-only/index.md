---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Integrity-Policy-Report-Only`** Antwort-Header ermöglicht es Website-Administratoren, Berichte über Ressourcen zu erstellen, die der Benutzeragent lädt und die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) Garantien verletzen würden, wenn die Integritätspolicy durchgesetzt würde (mithilfe des {{HTTPHeader("Integrity-Policy")}} Headers).

Berichte können für Anfragen zu festgelegten [Anfragezielen](/de/docs/Web/API/Request/destination) generiert werden, die Integritätsmetadaten auslassen oder im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus durchgeführt werden. Damit Berichte an einen Berichts-Endpunkt gesendet werden können, muss der `Integrity-Policy-Report-Only` Header einen gültigen Berichtsendpunkt-Namen angeben, der einem Endpunkt entspricht, der mit dem {{HTTPHeader("Reporting-Endpoints")}} Header deklariert wurde. Berichte werden mit der [Reporting API](/de/docs/Web/API/Reporting_API) generiert und können auch auf der Seite, für die die Integritätsregel gemeldet wird, mit einem [ReportingObserver](/de/docs/Web/API/ReportingObserver) beobachtet werden. Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody) Wörterbuch gegeben (eine JSON-serialisierte Form dieses Körpers wird in POSTs an Berichtserver-Endpunkte gesendet).

Der Header ermöglicht es Entwicklern, [Integritätspolicies](/de/docs/Web/Security/Subresource_Integrity#integrity_policy) zu testen und etwaige Inhaltsprobleme zu beheben, bevor schließlich ein {{HTTPHeader("Integrity-Policy")}} Header zur Durchsetzung der Regel bereitgestellt wird.

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
Integrity-Policy-Report-Only: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Anfragezielen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `script`
      - : Skript-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Zulässige Werte sind:
    - `inline`
      - : Die Quelle der Integritätsmetadaten ist inline zum Inhalt, wie das [Integritätsattribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standard.

        Da dies der Standard und der einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Berichtsendpunkt-Namen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Berichtendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert sein.

## Beispiele

### Berichterstattung, wenn Skripte keine Integritätsmetadaten aufweisen

Dieses Beispiel zeigt ein Dokument, das meldet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity` Attribut angibt, oder wenn eine Skript-Ressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy-Report-Only` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}} Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
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

- {{HTTPHeader("Integrity-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Integritätspolitik](/de/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
