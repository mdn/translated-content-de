---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

{{SeeCompatTable}}

Der HTTP-**`Integrity-Policy-Report-Only`** Response-Header ermöglicht es Website-Administratoren, Berichte über Ressourcen zu erstellen, die der User-Agent lädt und die gegen die [Subresource-Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantie verstoßen würden, wenn die Integritätsrichtlinie durchgesetzt würde (unter Verwendung des {{HTTPHeader("Integrity-Policy")}} Headers).

Berichte können für Anfragen zu bestimmten [Request-Zielen](#blocked-destinations) erstellt werden, die Integritätsmetadaten auslassen oder im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus erstellt werden.
Damit Berichte an einen Berichtsendpunkt gesendet werden können, muss der `Integrity-Policy-Report-Only` Header einen gültigen Berichtsendpunktnamen angeben, der mit einem Endpunkt übereinstimmt, der mit dem {{HTTPHeader("Reporting-Endpoints")}} Header deklariert wurde.
Berichte werden unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt und können auch auf der Seite, für die die Integritätsrichtlinie gemeldet wird, mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden.
Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch angegeben (eine JSON-serialisierte Form dieses Körpers wird in POSTs an die Berichtserver-Endpunkte gesendet).

Der Header ermöglicht es Entwicklern, [Integritätsrichtlinien](/de/docs/Web/Security/Subresource_Integrity#integrity_policy) zu testen und potenzielle Inhaltsprobleme zu beheben, bevor schließlich ein {{HTTPHeader("Integrity-Policy")}} Header eingesetzt wird, um die Richtlinie durchzusetzen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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

Die Header-Werte sind als strukturierte Felder mit folgendem Aufbau definiert:

- `blocked-destinations`
  - : Eine Liste von [Request-Zielen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `script`
      - : Skriptressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `inline`
      - : Die Quelle der Integritätsmetadaten befindet sich inline im Inhalt, wie das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standard.

        Da dies der Standard und einzige Wert ist, ist das Auslassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Namen der Berichtsendpunkte](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Berichtsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert sein.

## Beispiele

### Berichtserstellung, wenn Skripte keine Integritätsmetadaten enthalten

Dieses Beispiel zeigt ein Dokument, das meldet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der `integrity-endpoint`, der in `Integrity-Policy-Report-Only` verwendet wird, im {{httpheader("Reporting-Endpoints")}} Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Die [Berichtsnutzlast](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte folgendermaßen aussehen.

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
- [Integritätsrichtlinie](/de/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
