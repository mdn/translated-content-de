---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{securecontext_header}}

Der **`Accept-CH`**-Header kann von einem Server gesetzt werden, um festzulegen, welche [Client-Hints](/de/docs/Web/HTTP/Client_hints)-Header ein Client in nachfolgenden Anfragen einfügen soll.

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Client-Hints sind nur auf sicheren Ursprüngen (über TLS) zugänglich. Der `Accept-CH`-Header sollte für alle sicheren Anfragen gespeichert werden, um sicherzustellen, dass die Client-Hints zuverlässig gesendet werden.

## Syntax

```http
Accept-CH: <comma separated list of client hint headers>
```

## Beispiele

```http
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

> [!NOTE]
> Denken Sie daran, [die Antwort zu variieren](/de/docs/Web/HTTP/Client_hints#caching_and_client_hints) basierend auf den akzeptierten Client-Hints.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Vary")}}
