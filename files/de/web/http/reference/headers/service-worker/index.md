---
title: Service-Worker header
short-title: Service-Worker
slug: Web/HTTP/Reference/Headers/Service-Worker
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Service-Worker`**-{{Glossary("request_header", "Request-Header")}} wird bei Abfragen für die Skriptressource eines Service Workers einbezogen.
Dieser Header hilft Administratoren, Anfragen nach Service-Worker-Skripten zu protokollieren, um Überwachungszwecke zu erfüllen.

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

- {{HTTPHeader("Service-Worker-Allowed")}}-Header
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
