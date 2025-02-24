---
title: Attribution-Reporting-Eligible
slug: Web/HTTP/Headers/Attribution-Reporting-Eligible
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`Attribution-Reporting-Eligible`**-{{Glossary("request_header", "Request-Header")}} zeigt an, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Auslöser zu registrieren.

Dieser Header wird niemals manuell gesetzt und stattdessen vom Browser als Antwort auf verschiedene HTML-Element- oder JavaScript-Anforderungseinstellungen gesendet. Abhängig von den in dem `Attribution-Reporting-Eligible`-Wert angegebenen zulässigen Registrierungen wird vom Server erwartet, dass er entweder mit einem {{HTTPHeader("Attribution-Reporting-Register-Source")}}- oder {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}-Header antwortet, um die Registrierung einer Attributionsquelle bzw. eines Auslösers abzuschließen.

Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Ein Structured-Header-Dictionary, das die im entsprechenden Antwort zulässigen Registrierungen darstellt. Mögliche Schlüssel sind:
    - `event-source`
      - : Eine [ereignisbasiertes Attributionquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) kann registriert werden.
    - `navigation-source`
      - : Eine [navigationsbasierte Attributionquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) kann registriert werden.
    - `trigger`
      - : Ein [Attributionsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers) kann registriert werden.

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

- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
