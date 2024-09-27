---
title: Attribution-Reporting-Eligible
slug: Web/HTTP/Headers/Attribution-Reporting-Eligible
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Attribution-Reporting-Eligible`** Anforderungsheader gibt an, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Auslöser zu registrieren.

Dieser Header wird niemals manuell gesetzt und stattdessen vom Browser als Antwort auf verschiedene HTML-Element- oder JavaScript-Anforderungseinstellungen gesendet. Abhängig von den erlaubten Registrierungen, die im Wert `Attribution-Reporting-Eligible` angegeben sind, wird erwartet, dass der Server mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antwortet, um die Registrierung einer Attributionsquelle oder eines Auslösers abzuschließen.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

- {{httpheader("Attribution-Reporting-Register-Source")}}
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
