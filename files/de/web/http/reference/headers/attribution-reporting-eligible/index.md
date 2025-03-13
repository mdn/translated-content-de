---
title: Attribution-Reporting-Eligible
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Eligible
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Attribution-Reporting-Eligible`** {{Glossary("request_header", "Anforderungs-Header")}} zeigt an, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Auslöser zu registrieren.

Dieser Header wird nie manuell gesetzt, sondern vom Browser als Antwort auf verschiedene HTML-Element- oder JavaScript-Anforderungseinstellungen gesendet. Abhängig von den erlaubten Registrierungen, die im Wert von `Attribution-Reporting-Eligible` angegeben sind, wird erwartet, dass der Server entweder mit einem {{HTTPHeader("Attribution-Reporting-Register-Source")}}- oder {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}-Header antwortet, um die Registrierung einer Attributionsquelle beziehungsweise eines Auslösers abzuschließen.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Eligible: <allowed-registrations>
```

## Direktiven

- `<allowed-registrations>`
  - : Ein strukturiertes Header-Wörterbuch, das die in der entsprechenden Antwort erlaubten Registrierungen darstellt. Mögliche Schlüssel sind:
    - `event-source`
      - : Eine [ereignisbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) kann registriert werden.
    - `navigation-source`
      - : Eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) kann registriert werden.
    - `trigger`
      - : Ein [Attributionsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) kann registriert werden.

Jede Antwort in einer Umleitungskette kann höchstens eine Quelle oder einen Auslöser registrieren.

## Beispiele

```http
Attribution-Reporting-Eligible: trigger
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
