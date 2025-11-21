---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Integrity-Policy-Report-Only`**-Antwort-Header ermöglicht es Website-Administratoren, Berichte über Ressourcen zu erstellen, die der User-Agent lädt und die gegen die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) Garantien verstoßen würden, wenn die Integritätsrichtlinie durchgesetzt würde (unter Verwendung des {{HTTPHeader("Integrity-Policy")}}-Headers).

Berichte können für Anfragen auf bestimmten [Anfragezielen](#blocked-destinations) generiert werden, die Integritätsmetadaten auslassen oder die im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus getätigt werden. Damit Berichte an einen Meldungsendpunkt gesendet werden, muss der `Integrity-Policy-Report-Only`-Header einen gültigen Endpunkt für Berichterstattung angeben, der zu einem Endpunkt passt, der mit dem {{HTTPHeader("Reporting-Endpoints")}}-Header deklariert wurde. Berichte werden mit der [Reporting API](/de/docs/Web/API/Reporting_API) generiert und können auch auf der Seite beobachtet werden, für die die Integritätsrichtlinie gemeldet wird, unter Verwendung eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver). Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Wörterbuch angegeben (eine JSON-serielle Form dieses Körpers wird in POSTs an die Endpunkte des Berichtsservers gesendet).

Der Header ermöglicht es Entwicklern, [Integritätsrichtlinien](/de/docs/Web/Security/Subresource_Integrity#integrity_policy) zu testen und etwaige Inhaltsprobleme zu beheben, bevor schließlich ein {{HTTPHeader("Integrity-Policy")}}-Header eingesetzt wird, um die Richtlinie durchzusetzen.

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
Integrity-Policy-Report-Only: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Feldwörterbücher mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Anfragezielen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `script`
      - : Skript-Ressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `inline`
      - : Die Quelle der Integritätsmetadaten ist inline in den Inhalt eingebettet, wie z.B. das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standardwert und der einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Namen von Berichterstattungsendpunkten](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Berichterstattungsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}}-Header definiert sein.

## Beispiele

### Berichterstattung, wenn Skripte keine Integritätsmetadaten aufweisen

Dieses Beispiel zeigt ein Dokument, das berichtet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt, oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert wird.

Beachten Sie, dass der `integrity-endpoint`, der in `Integrity-Policy-Report-Only` verwendet wird, im {{httpheader("Reporting-Endpoints")}}-Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

Die [Nutzlast des Berichts](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte folgendermaßen aussehen.

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
