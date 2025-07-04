---
title: Preference-Applied header
short-title: Preference-Applied
slug: Web/HTTP/Reference/Headers/Preference-Applied
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Header **`Preference-Applied`** informiert den Client darüber, welche Präferenzen aus dem {{httpheader("Prefer")}}-Request-Header vom Server angewendet wurden.

Der Server gibt an, ob eine Präferenz auf eine Antwort angewendet wurde, falls es sonst für den Client unklar wäre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Preference-Applied: <preference>
```

## Beispiele

### Server wendet Zeitzonen-Präferenzen an

Die folgende Anfrage zeigt an, dass der Client bevorzugt, dass Ereignisse in einer bestimmten Zeitzone dargestellt werden:

```http
GET /events HTTP/1.1
Host: example.com
Prefer: timezone=America/Los_Angeles
```

Der Server unterstützt die Präferenz und sendet den Inhalt mit einem `Preference-Applied`-Header zurück:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Preference-Applied: timezone=America/Los_Angeles

[
  {"t":"2023-10-18T05:37:59.611-07:00"},
  {"t":"2023-10-18T07:37:59.611-07:00"},
  {"t":"2023-10-18T09:37:59.611-07:00"}
]
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("Prefer")}}
- [Prefer-Header](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) auf docs.oasis-open.org
- [Prefer-Header](https://docs.postgrest.org/en/v12/references/api/preferences.html) auf docs.postgrest.org
