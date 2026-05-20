---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: 5ab391405a364e5a512b8182c376261ee8a0bf18
---

Der HTTP **`Integrity-Policy-Report-Only`** Antwort-Header ermöglicht es Website-Administratoren, Berichte über Ressourcen zu erstellen, die der Benutzer-Agent lädt und die die [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) Garantien verletzen würden, wenn die Integritätsrichtlinie durchgesetzt würde (unter Verwendung des {{HTTPHeader("Integrity-Policy")}} Headers).

Verstöße gegen die Richtlinie können mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden. Berichte können auf der Seite beobachtet werden, auf der die Richtlinie durchgesetzt wird, unter Verwendung eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), und an Serverendpunkte gesendet werden, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert sind und mithilfe des [`endpoints`](#endpoints) Feldes ausgewählt werden. Weitere Informationen finden Sie unter [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport).

Der Header ermöglicht es Entwicklern, [Integritätsrichtlinien](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) zu testen und alle Inhaltsprobleme zu beheben, bevor schließlich ein {{HTTPHeader("Integrity-Policy")}} Header bereitgestellt wird, um die Richtlinie durchzusetzen.

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

Die Header-Werte werden als strukturierte Felder-Dictionaries mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Request-Destinationen](/de/docs/Web/API/Request/destination), die gültige Integritäts-Metadaten enthalten müssen. Erlaubte Werte sind:
    - `script`
      - : Skript-Ressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritäts-Metadaten enthalten müssen. Erlaubte Werte sind:
    - `inline`
      - : Die Integritäts-Metadatenquelle ist inline im Inhalt, wie das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity). Dies ist der Standard.

        Da dies der Standardwert und der einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Berichtsendpunkt-Namen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die anzeigen, wohin Berichte gesendet werden. Die Berichtsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert werden.

## Beispiele

### Berichterstellung, wenn Skripte keine Integritäts-Metadaten haben

Dieses Beispiel zeigt ein Dokument, das an einen Serverendpunkt berichtet, wenn irgendein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt, oder wenn eine Skriptressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors) Modus angefordert wird.

Beachten Sie, dass der `integrity-endpoint`, der in `Integrity-Policy-Report-Only` verwendet wird, im {{httpheader("Reporting-Endpoints")}} Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
```

Die [Nutzdaten des Berichts](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnten folgendermaßen aussehen. Beachten Sie, dass die `body.reportOnly` Eigenschaft `true` ist, da dieser Bericht durch einen Verstoß gegen `Integrity-Policy-Report-Only` ausgelöst wurde.

```json
{
  "age": "176279",
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/main.js",
    "destination": "script",
    "reportOnly": "true"
  },
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Integrity-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [`IntegrityViolationReport`](/de/docs/Web/API/IntegrityViolationReport)
- [Integrity Policy](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
