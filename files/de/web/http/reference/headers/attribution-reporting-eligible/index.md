---
title: Attribution-Reporting-Eligible header
short-title: Attribution-Reporting-Eligible
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Eligible
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{non-standard_header}}

Der HTTP-**`Attribution-Reporting-Eligible`**-{{Glossary("request_header", "Request-Header")}} signalisiert, dass die entsprechende Antwort berechtigt ist, eine Zuordnungsquelle oder einen Trigger zu registrieren.

Dieser Header wird niemals manuell gesetzt, sondern vom Browser als Antwort auf verschiedene HTML-Element- oder JavaScript-Request-Einstellungen gesendet. Abhängig von den im `Attribution-Reporting-Eligible`-Wert angegebenen zulässigen Registrierungen wird erwartet, dass der Server entweder mit einem {{HTTPHeader("Attribution-Reporting-Register-Source")}}- oder {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}-Header antwortet, um die Registrierung einer Zuordnungsquelle bzw. eines Triggers abzuschließen.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Ein strukturiertes Header-Wörterbuch, das die in der entsprechenden Antwort zulässigen Registrierungen darstellt. Mögliche Schlüssel sind:
    - `event-source`
      - : Eine [ereignisbasierte Zuordnungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) kann registriert werden.
    - `navigation-source`
      - : Eine [navigationsbasierte Zuordnungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) kann registriert werden.
    - `trigger`
      - : Ein [Zuordnungstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) kann registriert werden.

Jede Antwort in einer Umleitungskette kann höchstens eine Quelle oder einen Trigger registrieren.

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
