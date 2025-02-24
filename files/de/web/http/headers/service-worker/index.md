---
title: Service-Worker
slug: Web/HTTP/Headers/Service-Worker
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Service-Worker`** {{Glossary("request_header", "Request-Header")}} wird in Abfragen für die Skriptressource eines Service-Workers einbezogen. Dieser Header hilft Administratoren dabei, Service-Worker-Skriptanfragen zu protokollieren, um sie für Überwachungszwecke zu nutzen.

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
- [Service-Worker API](/de/docs/Web/API/Service_Worker_API)
