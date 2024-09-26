---
title: NEL
slug: Web/HTTP/Headers/NEL
l10n:
  sourceCommit: 7ef65e18c747d5a6e109a0babf5c1ee3cb32a0a2
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`NEL`** Antwort-Header wird verwendet, um die Protokollierung von Netzwerk-Anfragen zu konfigurieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
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

- [Network Error Logging (NEL) Erklärung](/de/docs/Web/HTTP/Network_Error_Logging)