---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: 6ce77a48939212a9456c475d2276ee4c05f9e588
---

{{SeeCompatTable}}

Der HTTP **`Integrity-Policy`** Response-Header ermöglicht es Webseitenadministratoren sicherzustellen, dass alle vom Benutzeragenten geladenen Ressourcen (eines bestimmten Typs) [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien haben.

Wenn gesetzt, blockiert der Benutzeragent Anfragen zu bestimmten [Request-Zielen](#blocked-destinations), die Integritätsmetadaten auslassen, und blockiert ebenfalls Anfragen im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus gänzlich.

Meldungen über Verstöße können auch gesendet werden, wenn der Header einen Reporting-Endpunktnamen enthält, der mit einem über den {{HTTPHeader("Reporting-Endpoints")}} Header deklarierten Endpunkt übereinstimmt.
Berichte werden mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) erstellt und können auch in der Seite beobachtet werden, für die die Integritätspolitik durchgesetzt wird, mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Das Format des Berichtskörpers wird durch das [`IntegrityViolationReportBody`](/de/docs/Web/API/IntegrityViolationReportBody)-Dictionary angegeben (eine JSON-serialisierte Form dieses Körpers wird in POST-Anfragen zu den Reporting-Serverendpunkten gesendet).

Dies hilft, Manipulationen von abgerufenen Subressourcen zu verhindern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Die Header-Werte sind als strukturierte Feld-Dictionaries mit den folgenden Schlüsseln definiert:

- `blocked-destinations`
  - : Eine Liste von [Request-Zielen](/de/docs/Web/API/Request/destination), die gültige Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `script`
      - : Skript-Ressourcen.
    - `style`
      - : Stylesheet-Ressourcen.

- `sources` {{optional_inline}}
  - : Eine Liste von Integritätsquellen, die Integritätsmetadaten enthalten müssen.
    Erlaubte Werte sind:
    - `inline`
      - : Die Quelle der Integritätsmetadaten ist inline im Inhalt, wie zum Beispiel das [integrity-Attribut](/de/docs/Web/API/HTMLScriptElement/integrity).
        Dies ist der Standardwert.

        Da dies der Standardwert und der einzige Wert ist, ist das Weglassen von `sources` gleichbedeutend mit der Angabe von `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : Eine Liste von [Berichterstattungsendpunktnamen](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint), die angeben, wohin Berichte gesendet werden.
    Die Berichterstattungsendpunkte müssen in einem {{httpheader("Reporting-Endpoints")}} Header definiert sein.

## Beispiele

### Blockieren und Berichten, wenn Skripte keine Integritätsmetadaten haben

Dieses Beispiel zeigt ein Dokument, das blockiert und berichtet, wenn ein {{htmlelement("script")}} (oder `HTMLScriptElement`) kein `integrity`-Attribut angibt, oder wenn eine Skript-Ressource im [no-cors](/de/docs/Web/API/Request/mode#no-cors)-Modus angefordert wird.

Beachten Sie, dass der in `Integrity-Policy` verwendete `integrity-endpoint` im {{httpheader("Reporting-Endpoints")}} Header definiert ist.

```http
Reporting-Endpoints: integrity-endpoint="https://example.com/integrity", backup-integrity-endpoint="https://report-provider.example/integrity"
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
```

Der [Berichts-Payload](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte folgendermaßen aussehen.

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
