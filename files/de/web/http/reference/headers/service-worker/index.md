---
title: Service-Worker header
short-title: Service-Worker
slug: Web/HTTP/Reference/Headers/Service-Worker
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Service-Worker`** {{Glossary("request_header", "Anforderungs-Header")}} wird bei Anfragen für die Skriptressource eines Service Workers eingeschlossen. Dieser Header hilft Administratoren, Anfragen für Service-Worker-Skripte zu protokollieren, um sie zu überwachen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Service-Worker: script
```

## Direktiven

- `script`
  - : Ein Wert, der angibt, dass es sich um ein Skript handelt.
    Dies ist die einzige zulässige Direktive für diesen Header.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Service-Worker-Allowed")}} Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
