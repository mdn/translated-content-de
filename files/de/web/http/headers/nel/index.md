---
title: NEL
slug: Web/HTTP/Headers/NEL
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`NEL`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um das Protokollieren von Netzwerkanfragen zu konfigurieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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

- [Network Error Logging (NEL) Erläuterung](/de/docs/Web/HTTP/Network_Error_Logging)
