---
title: Attribution-Reporting-Eligible
slug: Web/HTTP/Headers/Attribution-Reporting-Eligible
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Attribution-Reporting-Eligible`** Anforderungsheader zeigt an, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Auslöser zu registrieren.

Dieser Header wird niemals manuell gesetzt, sondern vom Browser als Antwort auf verschiedene HTML-Element- oder JavaScript-Anforderungseinstellungen gesendet. Je nach den in dem `Attribution-Reporting-Eligible`-Wert spezifizierten erlaubten Registrierungen wird erwartet, dass der Server mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antwortet, um die Registrierung einer Attributionsquelle oder eines Auslösers abzuschließen.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Eligible: <allowed-registrations>
```

## Richtlinien

- `<allowed-registrations>`
  - : Ein strukturiertes Header-Wörterbuch, das die in der entsprechenden Antwort erlaubten Registrierungen darstellt. Mögliche Schlüssel sind:
    - `event-source`
      - : Eine [ereignisbasiertes Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) kann registriert werden.
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

- {{httpheader("Attribution-Reporting-Register-Source")}}
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
