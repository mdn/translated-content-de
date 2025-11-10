---
title: Attribution-Reporting-Eligible header
short-title: Attribution-Reporting-Eligible
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Eligible
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP **`Attribution-Reporting-Eligible`** {{Glossary("request_header", "Anforderungsheader")}} gibt an, dass die entsprechende Antwort berechtigt ist, eine Attributionsquelle oder einen Auslöser zu registrieren.

Dieser Header wird niemals manuell gesetzt, sondern vom Browser als Antwort auf verschiedene Anforderungseinstellungen von HTML-Elementen oder JavaScript gesendet. Abhängig von den in dem `Attribution-Reporting-Eligible`-Wert festgelegten erlaubten Registrierungen wird vom Server erwartet, dass er entweder mit einem {{HTTPHeader("Attribution-Reporting-Register-Source")}}- oder {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}-Header antwortet, um die Registrierung einer Attributionsquelle beziehungsweise eines Auslösers abzuschließen.

Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Ein strukturiertes Header-Wörterbuch, das die erlaubten Registrierungen in der entsprechenden Antwort darstellt. Mögliche Schlüssel sind:
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
