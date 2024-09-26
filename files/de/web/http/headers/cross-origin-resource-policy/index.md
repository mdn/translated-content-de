---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: b54373ab9025ceb6eb404bd2538ebd4c01576c60
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`Cross-Origin-Resource-Policy`**
vermittelt den Wunsch, dass der Browser keine no-cors Cross-Origin/Cross-Site-Anfragen an die
angegebene Ressource zulässt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## Beispiele

Der folgende Antwortheader wird dazu führen, dass kompatible Benutzeragenten Cross-Origin no-cors-Anfragen ablehnen:

```http
Cross-Origin-Resource-Policy: same-origin
```

Für weitere Beispiele siehe <https://resourcepolicy.fyi/>.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erläuterung der Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy)
- [Erwägen Sie die Bereitstellung der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{httpheader("Access-Control-Allow-Origin")}}
