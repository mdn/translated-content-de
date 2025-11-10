---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: 55bb65bb6a84808896ed0f6c83e57c60dbd8480e
---

Der HTTP-**`Integrity-Policy-Report-Only`**-Antwortheader ermöglicht es Website-Administratoren, Berichte über Ressourcen zu erstellen, die der User-Agent lädt und die die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantie verletzen würden, wenn die Integritätsrichtlinie durchgesetzt würde (durch den {{HTTPHeader("Integrity-Policy")}}-Header).

Berichte können für Anfragen zu angegebenen [Request-Destinationen](#blocked-destinations) erstellt werden, bei denen Integritätsmetadaten fehlen oder die im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus gemacht wurden. Damit Berichte an einen Berichts-Endpunkt gesendet werden können, muss der `Integrity-Policy-Report-Only`-Header einen gültigen Berichts-Endpunktnamen angeben, der einem Endpunkt entspricht, der mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header deklariert wurde. Berichte werden mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) generiert und können auch auf der Seite beobachtet werden, für die die Integritätsrichtlinie gemeldet wird, mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver). Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch angegeben (eine JSON-serielle Form dieses Körpers wird in POST-Anfragen an Berichtsserver-Endpunkte gesendet).

Der Header ermöglicht es Entwicklern, [Integritätsrichtlinien](/de/docs/Web/Security/Subresource_Integrity#integrity_policy) zu testen und gegebenenfalls Inhaltsprobleme zu beheben, bevor schließlich ein {{HTTPHeader("Integrity-Policy")}}-Header eingesetzt wird, um die Richtlinie durchzusetzen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy-Report-Only: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte werden als strukturierte Felddictionaries mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Request-Destinationen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `script`
      - : Skriptressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `inline`
      - : Die Integritätsmetadatenquelle ist inline zum Inhalt, wie das [Integritätsattribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist die Standardeinstellung.

        Da dies der Standard und der einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Berichts-Endpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Berichts-Endpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert werden.

## Beispiele

### Berichtserstellung, wenn Skripte Integritätsmetadaten fehlen

Dieses Beispiel zeigt ein Dokument, das meldet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy-Report-Only` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}}-Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Die [Berichtsnutzlast](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte wie folgt aussehen.

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
