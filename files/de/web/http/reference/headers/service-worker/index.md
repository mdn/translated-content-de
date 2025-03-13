---
title: Service-Worker
slug: Web/HTTP/Reference/Headers/Service-Worker
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Service-Worker`**-{{Glossary("request_header", "Request-Header")}} wird bei Abrufen der Skript-Ressource eines Service Workers hinzugefügt. Dieser Header hilft Administratoren dabei, die Anfragen von Service Worker-Skripten zu protokollieren, um sie zu überwachen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
Service-Worker: script
```

## Direktiven

- `script`
  - : Ein Wert, der angibt, dass es sich um ein Skript handelt.
    Dies ist die einzige erlaubte Direktive für diesen Header.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Service-Worker-Allowed")}} Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
