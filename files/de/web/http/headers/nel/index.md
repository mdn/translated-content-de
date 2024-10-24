---
title: NEL
slug: Web/HTTP/Headers/NEL
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`NEL`**-{{Glossary("response_header", "Antwortheader")}} wird verwendet, um die Protokollierung von Netzwerk-Anfragen zu konfigurieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
NEL: { "report_to": "name_of_reporting_group", "max_age": 12345, "include_subdomains": false, "success_fraction": 0.0, "failure_fraction": 1.0 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Network Error Logging (NEL) Erklärer](/de/docs/Web/HTTP/Network_Error_Logging)
