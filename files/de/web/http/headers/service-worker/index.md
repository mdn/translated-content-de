---
title: Service-Worker
slug: Web/HTTP/Headers/Service-Worker
l10n:
  sourceCommit: 3cb8c590ddc700407ac4295ca4d3191ac10ddc8e
---

{{HTTPSidebar}}

Der HTTP-**`Service-Worker`**-{{Glossary("request_header", "Anforderungsheader")}} wird in Abrufen für die Skriptressource eines Service-Workers einbezogen. Dieser Header hilft Administratoren dabei, Anfragen für Service-Worker-Skripte zu protokollieren, um diese zu überwachen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein Wert, der angibt, dass es sich um ein Skript handelt. Dies ist die einzige zulässige Direktive für diesen Header.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Service-Worker-Allowed")}} Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
