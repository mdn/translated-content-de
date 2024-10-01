---
title: Attribution-Reporting-Eligible
slug: Web/HTTP/Headers/Attribution-Reporting-Eligible
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Attribution-Reporting-Eligible`**-Request-Header zeigt an, dass die entsprechende Antwort berechtigt ist, eine Zurechnungsquelle oder einen Auslöser zu registrieren.

Dieser Header wird niemals manuell gesetzt, sondern wird vom Browser als Antwort auf verschiedene HTML-Element- oder JavaScript-Request-Einstellungen gesendet. Abhängig von den in dem `Attribution-Reporting-Eligible`-Wert angegebenen erlaubten Registrierungen wird erwartet, dass der Server mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antwortet, um die Registrierung einer Zurechnungsquelle bzw. eines Auslösers abzuschließen.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für mehr Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Eligible: <allowed-registrations>
```

## Direktiven

- `<allowed-registrations>`
  - : Ein Structured-Header-Wörterbuch, das die in der entsprechenden Antwort erlaubten Registrierungen repräsentiert. Mögliche Schlüssel sind:
    - `event-source`
      - : Eine [ereignisbasierte Zurechnungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) kann registriert werden.
    - `navigation-source`
      - : Eine [navigationsbasierte Zurechnungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) kann registriert werden.
    - `trigger`
      - : Ein [Zurechnungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) kann registriert werden.

Jede Antwort in einer Weiterleitungskette kann höchstens eine Quelle oder einen Auslöser registrieren.

## Beispiele

```http
Attribution-Reporting-Eligible: trigger
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Attribution-Reporting-Register-Source")}}
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
