---
title: NEL header
short-title: NEL
slug: Web/HTTP/Reference/Headers/NEL
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}

Der HTTP **`NEL`**-{{Glossary("response_header", "Antwort-Header")}} wird verwendet, um die Protokollierung von Netzwerkanfragen zu konfigurieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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

- [Erläuterung zur Protokollierung von Netzwerkfehlern (NEL)](/de/docs/Web/HTTP/Guides/Network_Error_Logging)
